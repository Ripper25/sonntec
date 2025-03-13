import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-12 w-12" />, // Increased icon size
      title: "Call Us",
      info: ["+263774652930", "+263771589661"],
      subtitle: "Available 24/7 for your inquiries"
    },
    {
      icon: <Mail className="h-12 w-12" />, // Increased icon size
      title: "Email",
      info: [
        "jay.kunaka@sonnteck.com",
        "sonnychikara@sonnteck.com",
        "support@sonnteck.com"
      ],
      subtitle: "Professional support response within 24hrs"
    },
    {
      icon: <MapPin className="h-12 w-12" />, // Increased icon size
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

  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
            style={{
              width: Math.random() * 800 + 400,
              height: Math.random() * 800 + 400,
              borderRadius: '40%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(80px)',
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Animated Background */}
      <AnimatedBackground />

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"> {/* Increased gap */}
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
                  {/* Increased size of decorative circle and improved centering */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/10 -z-10 flex items-center justify-center" /> {/* Adjusted size and positioning */}

                  <motion.div 
                    className="relative flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-primary">
                      {contact.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4 mt-6">{contact.title}</h3>
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