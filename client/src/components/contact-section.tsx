import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-4 w-4" />,
      title: "Call Us",
      info: ["+263774652930", "+263771589661"],
      subtitle: "Available 24/7 for your inquiries"
    },
    {
      icon: <Mail className="h-4 w-4" />,
      title: "Email",
      info: [
        "jay.kunaka@sonnteck.com",
        "sonnychikara@sonnteck.com",
        "support@sonnteck.com"
      ],
      subtitle: "Professional support response within 24hrs"
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      title: "Visit Us",
      info: [
        "128 Eddison Zvobgo",
        "Cnr 4th Ave & Kenneth Kaunda",
        "NRZ Building",
        "Harare, Zimbabwe"
      ],
      subtitle: "Our main office location"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to power your future? Contact our expert team for professional electrical solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="text-primary mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
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