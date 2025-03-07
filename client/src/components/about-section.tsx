import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Shield, Award } from "lucide-react";

const highlights = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Team",
    description: "Our management and operations personnel are among the finest in the industry"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Quality Assurance",
    description: "Committed to maintaining the highest standards in electrical contracting"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Industry Experience",
    description: "Long-term employees with deep industry knowledge and expertise"
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "Safety First",
    description: "Dedicated to safe work practices and employee satisfaction"
  }
];

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundAnimation />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
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
              <Card className="h-full backdrop-blur-sm bg-background/95 border-2 hover:border-primary/20 transition-all duration-300">
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
          className="bg-muted/30 backdrop-blur-sm p-8 rounded-lg border-2 border-primary/5"
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