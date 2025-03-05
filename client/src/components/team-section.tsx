import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

export default function TeamSection() {
  return (
    <section id="team" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our management team and operations personnel are among the finest in the industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Sonny Chikara</h3>
                <p className="text-muted-foreground mb-4">Managing Director</p>
                <div className="flex items-center text-primary">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+263774652930</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Sonny Chikara</h3>
                <p className="text-muted-foreground mb-4">Finance and Administration Manager</p>
                <div className="flex items-center text-primary">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+263771589661</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}