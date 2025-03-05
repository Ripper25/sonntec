import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past 50px to add background effects
      setIsScrolled(currentScrollY > 50);

      // Show/hide based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
        className="text-foreground hover:text-primary transition-colors h-8 px-3 tracking-wide"
        onClick={() => scrollToSection('services')}
      >
        Services
      </Button>
      <Button 
        variant="ghost" 
        className="text-foreground hover:text-primary transition-colors h-8 px-3 tracking-wide"
        onClick={() => scrollToSection('values')}
      >
        Values
      </Button>
      <Button 
        variant="ghost" 
        className="text-foreground hover:text-primary transition-colors h-8 px-3 tracking-wide"
        onClick={() => scrollToSection('team')}
      >
        Team
      </Button>
      <Button 
        variant="ghost" 
        className="text-foreground hover:text-primary transition-colors h-8 px-3 tracking-wide"
        onClick={() => scrollToSection('contact')}
      >
        Contact
      </Button>
    </>
  );

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 transform",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Button 
          variant="ghost" 
          className="font-bold text-lg p-0 h-8 tracking-tight"
          onClick={() => scrollToSection('top')}
        >
          Sonnteck & Projects
        </Button>

        <div className="hidden md:flex space-x-2">
          <NavLinks />
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="tracking-tight">Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-8">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}