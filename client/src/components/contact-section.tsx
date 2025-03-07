import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      info: ["+263774652930", "+263771589661"],
      subtitle: "Available 24/7 for your inquiries"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      info: ["sonnyc@sonnteckprojects.co.zw"],
      subtitle: "Professional support response within 24hrs"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Visit Us",
      info: ["Harare, Zimbabwe"],
      subtitle: "Our main office location"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background with pattern and gradient */}
      <div className="absolute inset-0">
        <div 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to power your future? Contact our expert team for professional electrical solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
                <CardContent className="pt-8 pb-6 text-center relative">
                  {/* Decorative circle behind icon */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary/10 -z-10" />

                  <div className="text-primary mb-6 flex justify-center transform transition-transform duration-300 hover:scale-110">
                    {contact.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-4">{contact.title}</h3>
                  {contact.info.map((line, i) => (
                    <p key={i} className="text-foreground font-medium mb-1">
                      {line}
                    </p>
                  ))}
                  <p className="text-sm text-muted-foreground mt-4">
                    {contact.subtitle}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}