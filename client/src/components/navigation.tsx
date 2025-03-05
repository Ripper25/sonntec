import { useState } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link href="#services">
        <Button variant="link" className="text-foreground hover:text-primary transition-colors">
          Services
        </Button>
      </Link>
      <Link href="#values">
        <Button variant="link" className="text-foreground hover:text-primary transition-colors">
          Values
        </Button>
      </Link>
      <Link href="#team">
        <Button variant="link" className="text-foreground hover:text-primary transition-colors">
          Team
        </Button>
      </Link>
      <Link href="#contact">
        <Button variant="link" className="text-foreground hover:text-primary transition-colors">
          Contact
        </Button>
      </Link>
    </>
  );

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Button variant="link" className="font-bold text-xl p-0">
            Sonnteck & Projects
          </Button>
        </Link>

        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-8">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}