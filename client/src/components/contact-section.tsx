import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      info: ["+263774652930", "+263771589661"],
      subtitle: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: ["sonnyc@sonnteckprojects.co.zw"],
      subtitle: "Send us your inquiries"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      info: ["Harare, Zimbabwe"],
      subtitle: "Visit our office"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for professional electrical services and solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                  {contact.info.map((line, i) => (
                    <p key={i} className="text-foreground">{line}</p>
                  ))}
                  <p className="text-sm text-muted-foreground mt-2">{contact.subtitle}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
