import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className={cn(
          "flex items-center gap-2",
          isScrolled ? "text-foreground" : "text-white"
        )}>
          <div className={cn(
            "rounded-full p-2 flex items-center justify-center transition-colors animate-spin-burst animate-glow",
            isScrolled ? "bg-primary text-white" : "bg-white text-primary"
          )}>
            <Zap className="h-6 w-6" />
          </div>
          <span className="font-bold text-lg tracking-tight">Sonnteck & Projects</span>
        </div>
      </div>
    </nav>
  );
}