// AnimatedLogo.tsx
import React from "react";
import type { AnimatedLogoProps } from "../types/AnimatedLogoProps";

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = "md",
  speed = "normal",
  className = "",
}) => {
  const sizeClasses = {
    sm: { container: "w-10 h-10", inner: "w-8 h-8", text: "text-lg" },
    md: { container: "w-12 h-12", inner: "w-10 h-10", text: "text-xl" },
    lg: { container: "w-16 h-16", inner: "w-14 h-14", text: "text-2xl" },
  };
  const speedClasses = {
    slow: "animate-spin-slow",
    normal: "animate-spin-normal",
    fast: "animate-spin",
  };

  const currentSize = sizeClasses[size];

  return (
    <>
      <style>{`
        @keyframes spin-normal {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-normal {
          animation: spin-normal 3s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
        
        .gradient-border {
          background: conic-gradient(
            from 0deg,
            #3b82f6,
            #8b5cf6,
            #ec4899,
            #f59e0b,
            #10b981,
            #3b82f6
          );
        }
      `}</style>

      <div className={`relative ${className}`}>
        <div
          className={`absolute inset-0 ${currentSize.container} rounded-full gradient-border ${speedClasses[speed]} opacity-80`}
        />
        <div
          className={`absolute inset-1 ${currentSize.inner} bg-white dark:bg-gray-800 rounded-full`}
        />
        <div
          className={`relative ${currentSize.container} flex items-center justify-center font-bold ${currentSize.text} text-gray-900 dark:text-white z-10`}
        >
          NV
        </div>
      </div>
    </>
  );
};

export default AnimatedLogo;
