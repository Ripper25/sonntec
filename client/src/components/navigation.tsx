import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link href="#services">
        <a className="text-foreground hover:text-primary transition-colors">Services</a>
      </Link>
      <Link href="#values">
        <a className="text-foreground hover:text-primary transition-colors">Values</a>
      </Link>
      <Link href="#team">
        <a className="text-foreground hover:text-primary transition-colors">Team</a>
      </Link>
      <Link href="#contact">
        <a className="text-foreground hover:text-primary transition-colors">Contact</a>
      </Link>
    </>
  );

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-xl">Sonnteck & Projects</a>
        </Link>

        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
