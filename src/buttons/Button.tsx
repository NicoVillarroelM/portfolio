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
    "flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 transform cursor-pointer";

  const variantClasses = {
    dark: "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 hover:scale-105",
    outline:
      "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white border border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500",
    filled:
      "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105",
  }[variant];

  const fullClassName = `${baseClasses} ${variantClasses}`;

  return (
    <button className={fullClassName} {...props}>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      <span>{label}</span>
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
