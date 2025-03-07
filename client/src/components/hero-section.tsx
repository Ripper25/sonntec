import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [, navigate] = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Background */}
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <div 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            transform: `translate3d(0, ${scrollPosition * 0.5}px, 0)`,
            transition: 'transform 0.1s linear'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Hero Content */}
      <section className="relative h-screen flex items-center z-10 pt-16 sm:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10 text-white tracking-tight leading-[1.1]">
              Powering Your Future with Professional Electrical Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in electrical construction and maintenance, delivering superior quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 py-6 text-lg gap-2 bg-white text-primary hover:bg-white/90"
                onClick={() => navigate("/quote")}
              >
                Get Quote
                <ArrowRight className="h-6 w-6" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto px-8 py-6 text-lg bg-transparent border-2 border-white text-white hover:bg-white/10"
                onClick={() => navigate("/markets")}
              >
                View Markets
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative bg-background">
        {/* Other content sections will be rendered here */}
      </main>
    </>
  );
}