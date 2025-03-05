
import React from "react";
import { cn } from "@/lib/utils";

interface BrutalistLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function BrutalistLogo({ size = "md", className }: BrutalistLogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl"
  };

  return (
    <div className={cn("font-mono font-black tracking-tighter select-none", className)}>
      <div className="relative inline-block">
        <span className={cn("bg-background text-foreground leading-none", sizeClasses[size])}>
          SONN
        </span>
        <span className={cn("bg-primary text-primary-foreground px-1 rotate-1 inline-block", sizeClasses[size])}>
          TECK
        </span>
        <div className="absolute -bottom-1 left-0 w-full h-1 bg-foreground"></div>
        <div className="absolute -top-1 right-0 w-1/2 h-1 bg-primary"></div>
      </div>
    </div>
  );
}

export function BrutalistLogoAlt({ size = "md", className }: BrutalistLogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl"
  };

  return (
    <div className={cn("font-mono font-black tracking-tighter select-none", className)}>
      <div className="grid grid-cols-1">
        <div className="relative">
          <div className={cn("transform -skew-x-12", sizeClasses[size])}>
            <span className="bg-background text-foreground px-2 py-1 border-2 border-foreground">SONN</span>
            <span className="bg-primary text-primary-foreground px-2 py-1 border-2 border-foreground border-l-0">TECK</span>
          </div>
          <div className="absolute -bottom-1 right-0 w-full h-1 bg-primary transform translate-x-2"></div>
        </div>
      </div>
    </div>
  );
}
