import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Settings, Home, Shield } from "lucide-react";

const services = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "High Voltage Solutions",
    description: "Installation and maintenance of electrical substations and power lines"
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Industrial Services",
    description: "Fixed plant maintenance and on-site project management"
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Residential Services",
    description: "Household electrical drawing, design and installation"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Quality Assurance",
    description: "On-site compliance assistance and inspections"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">What We Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
