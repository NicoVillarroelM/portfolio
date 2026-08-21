import React from "react";
import type { ButtonProps } from "../types/Buttonprops";

const Button: React.FC<ButtonProps> = ({
  label,
  icon: Icon,
  iconPosition = "left",
  variant = "outline",
  ...props
}) => {
  const baseClasses =
    "flex items-center gap-2 px-7 py-3 font-note text-xs uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer";

  const variantClasses = {
    dark: "bg-ink text-paper hover:bg-vermilion dark:bg-ink dark:text-paper dark:hover:bg-vermilion",
    outline:
      "border border-hairline text-ink hover:border-vermilion hover:text-vermilion dark:text-ink dark:hover:text-vermilion",
  }[variant];

  const fullClassName = `${baseClasses} ${variantClasses}`;

  return (
    <button className={fullClassName} {...props}>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
      <span>{label}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
    </button>
  );
};

export default Button;