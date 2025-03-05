import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of your navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const NavLinks = () => (
    <>
      <Button 
        variant="ghost" 
        className={cn(
          "transition-colors h-8 px-3 tracking-wide",
          isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
        )}
        onClick={() => scrollToSection('services')}
      >
        Services
      </Button>
      <Button 
        variant="ghost" 
        className={cn(
          "transition-colors h-8 px-3 tracking-wide",
          isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
        )}
        onClick={() => scrollToSection('values')}
      >
        Values
      </Button>
      <Button 
        variant="ghost" 
        className={cn(
          "transition-colors h-8 px-3 tracking-wide",
          isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
        )}
        onClick={() => scrollToSection('team')}
      >
        Team
      </Button>
      <Button 
        variant="ghost" 
        className={cn(
          "transition-colors h-8 px-3 tracking-wide",
          isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
        )}
        onClick={() => scrollToSection('contact')}
      >
        Contact
      </Button>
    </>
  );

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Button 
          variant="ghost" 
          className={cn(
            "font-bold text-lg p-0 h-8 tracking-tight flex items-center gap-2",
            isScrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => scrollToSection('top')}
        >
          <div className={cn(
            "rounded-full p-3 flex items-center justify-center transition-colors",
            isScrolled ? "bg-primary text-white" : "bg-white text-primary"
          )}>
            <Zap className="h-8 w-8" />
          </div>
          Sonnteck & Projects
        </Button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className={cn(
              "h-8 w-8 p-0",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={cn(
          "md:hidden absolute top-14 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm",
          "transition-all duration-300 transform origin-top",
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-1">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}