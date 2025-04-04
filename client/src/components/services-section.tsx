import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Zap, Settings, Home, Shield } from "lucide-react";

const services = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "High Voltage Solutions",
    description: "Installation and maintenance of electrical substations and power lines",
    details: "Specializing in high voltage electrical infrastructure including power line construction, substation maintenance, and emergency repair services. Our certified team ensures safe and reliable power distribution."
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Industrial Services",
    description: "Fixed plant maintenance and on-site project management",
    details: "Comprehensive industrial electrical solutions including machinery installation, preventive maintenance, and 24/7 emergency support. We keep your operations running smoothly with minimal downtime."
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Residential Services",
    description: "Household electrical drawing, design and installation",
    details: "From basic wiring to smart home installations, we provide complete residential electrical services. Our experts ensure your home's electrical systems are safe, efficient, and up to code."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Quality Assurance",
    description: "On-site compliance assistance and inspections",
    details: "Rigorous quality control and compliance checks ensure all installations meet or exceed industry standards. We provide detailed documentation and certifications for all completed work."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 relative">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background/98" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What We Do</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            We specialize in developing, implementing and maintaining solutions for individuals and industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-background/90 backdrop-blur-md">
                    <CardHeader>
                      <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {service.details}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}