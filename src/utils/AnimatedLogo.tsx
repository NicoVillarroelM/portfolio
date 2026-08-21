import React from "react";
import type { AnimatedLogoProps } from "../types/AnimatedLogoProps";

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-xl",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className} flex items-center justify-center border border-hairline bg-paper`}
      role="img"
      aria-label="NV"
    >
      <span className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t-2 border-l-2 border-vermilion" />
      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 border-t-2 border-r-2 border-vermilion" />
      <span className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 border-b-2 border-l-2 border-vermilion" />
      <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b-2 border-r-2 border-vermilion" />
      <span className="font-face font-bold tracking-tight text-ink leading-none">
        NV
      </span>
    </div>
  );
};

export default AnimatedLogo;