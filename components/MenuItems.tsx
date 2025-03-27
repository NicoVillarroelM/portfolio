import React from "react";
import { motion } from "framer-motion";

export const MenuItem = ({
  children,
  index,
  href,
}: {
  children: React.ReactNode;
  index: number;
  href: string;
}) => {
  return (
    <div>
      <motion.a className="relative overflow-hidden px-2 py-1"
        href={href}
        initial={{ opacity: 0, y:-20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}

        transition={{ delay: index * 0.1,
            duration: 0.3,
            ease: "easeOut",
        }}
        >
        <span className="text-content/80 hover:text-primary transitions-colors">
            {children}
        </span>
      </motion.a>
    </div>
  );
};

export default MenuItem;