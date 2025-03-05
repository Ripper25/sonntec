import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TeamSection from "@/components/team-section";
import CoreValues from "@/components/core-values";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <CoreValues />
        <TeamSection />
        <ContactForm />
      </main>
    </div>
  );
}
