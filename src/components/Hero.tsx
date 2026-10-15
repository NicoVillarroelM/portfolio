import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { useRef } from "react";
import Button from "../buttons/Button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
  });

  const pt = useTransform(smooth, [0, 1], [6, 480]);
  const faceVar = useTransform(
    smooth,
    (v) => `"wght" ${Math.round(400 + v * 500)}, "wdth" ${Math.round(100 + v * 25)}`
  );
  const ruleFill = useTransform(smooth, [0, 1], ["0%", "100%"]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    window.open("/CV-NicolasVM.pdf", "_blank");
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col paper-grain bg-paper text-ink transition-colors duration-300 overflow-hidden"
    >
      {/* crop marks */}
      <span className="crop-mark top-3 left-3 border-t border-l" />
      <span className="crop-mark top-3 right-3 border-t border-r" />
      <span className="crop-mark bottom-3 left-3 border-b border-l" />
      <span className="crop-mark bottom-3 right-3 border-b border-r" />

      {/* registration mark */}
      <div className="reg-target absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3" />

      {/* sheet id — top rule */}
      <div className="flex items-center gap-4 px-6 md:px-10 pt-5 text-[11px] font-note tracking-widest uppercase text-ink-soft">
        <span>{t("spec.proof")}</span>
        <span className="tick-rule flex-1" />
        <span className="hidden sm:inline">
          {t("spec.sheet")} 1 {t("spec.of")} 4
        </span>
      </div>

      {/* masthead */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 py-10 text-center">
        <p className="font-note text-xs md:text-sm tracking-[0.3em] uppercase text-vermilion mb-6">
          {t("hero.title")}
        </p>

        <motion.h1
          style={{ fontVariationSettings: faceVar }}
          className="font-face leading-none tracking-tight text-ink select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[clamp(1.7rem,7.5vw,7rem)]">
            {t("spec.masthead")}
          </span>
        </motion.h1>

        <p className="mt-4 font-note text-sm md:text-base tracking-[0.4em] uppercase text-ink-soft">
          {t("hero.subtitle")}
        </p>

        <p className="mt-6 max-w-md md:max-w-lg text-base md:text-lg text-ink-soft leading-relaxed">
          {t("hero.description")}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button
            label={t("hero.viewWork")}
            variant="dark"
            onClick={scrollToProjects}
          />
          <Button
            label={t("hero.downloadCV")}
            icon={Download}
            iconPosition="left"
            onClick={handleDownload}
            variant="outline"
          />
        </motion.div>
      </div>

      {/* scale ruler — live pt + fill */}
      <div className="absolute right-0 top-0 bottom-0 w-10 md:w-12 flex flex-col items-center justify-between py-24 border-l border-hairline-faint">
        <span className="font-note text-[10px] tracking-widest text-ink-soft rotate-90 origin-center whitespace-nowrap uppercase">
          {t("spec.ptRange")}
        </span>
        <div className="relative flex-1 w-px bg-hairline-faint my-3">
          <motion.div
            style={{ height: ruleFill }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-vermilion"
          />
        </div>
        <motion.span className="font-face font-bold text-lg md:text-xl text-vermilion tabular-nums">
          <PtReadout value={pt} />
        </motion.span>
        <span className="font-note text-[10px] tracking-widest text-ink-soft uppercase">
          PT
        </span>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="pb-8 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-ink-soft" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const PtReadout = ({ value }: { value: MotionValue<number> }) => {
  const rounded = useTransform(value, (v) => Math.round(v));
  return <motion.span>{rounded}</motion.span>;
};

export default Hero;
