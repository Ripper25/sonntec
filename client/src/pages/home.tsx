import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import CoreValues from "@/components/core-values";
import TeamSection from "@/components/team-section";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CoreValues />
        <TeamSection />
        <ContactForm />
      </main>
    </div>
  );
}