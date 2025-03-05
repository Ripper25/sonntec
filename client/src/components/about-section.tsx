import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Shield, Award } from "lucide-react";

const highlights = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Team",
    description: "Our management and operations personnel are among the finest in the industry"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Quality Assurance",
    description: "Committed to maintaining the highest standards in electrical contracting"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Industry Experience",
    description: "Long-term employees with deep industry knowledge and expertise"
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "Safety First",
    description: "Dedicated to safe work practices and employee satisfaction"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At SONNTECK & PROJECTS, our team embodies our commitment to excellence. 
            Our personnel are long-term employees who understand our values, ethics, 
            and dedication to quality assurance and safe work practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-muted/30 p-8 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Our Commitment to Quality</h3>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            All levels of Management and Supervision at SONNTECK & PROJECTS are committed to our 
            Quality Management Programme. This commitment enhances our reputation, competitiveness, 
            and long-term success in the Electrical, Contracting and Engineering Industry while 
            providing an even higher degree of employee satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
