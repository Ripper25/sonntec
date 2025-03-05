import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Target } from "lucide-react";

const values = [
  {
    icon: <Check className="h-8 w-8" />,
    title: "Integrity",
    description: "We conduct our business with honesty and transparency"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Reliability",
    description: "Delivering consistent quality in every project we undertake"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Customer Satisfaction",
    description: "Our clients are our commanders, their success is our priority"
  }
];

export default function CoreValues() {
  return (
    <section id="values" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide our work and relationships with clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}