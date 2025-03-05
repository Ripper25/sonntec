import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, GraduationCap, LandPlot, Building, Hotel, UsersRound, Factory } from "lucide-react";

const markets = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Private Sector",
    description: "Serving companies across all industries"
  },
  {
    icon: <LandPlot className="h-8 w-8" />,
    title: "Rural Development",
    description: "Supporting rural amenities and infrastructure"
  },
  {
    icon: <UsersRound className="h-8 w-8" />,
    title: "NGOs & Parastatals",
    description: "Partnering with organizations driving social change"
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Educational Institutions",
    description: "Powering learning environments"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Government & Local Authorities",
    description: "Supporting public sector infrastructure"
  },
  {
    icon: <Hotel className="h-8 w-8" />,
    title: "Hospitality Industry",
    description: "Empowering tourism and hospitality sectors"
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Households",
    description: "Residential electrical solutions"
  },
  {
    icon: <Factory className="h-8 w-8" />,
    title: "Industrial",
    description: "Comprehensive industrial electrical services"
  }
];

export default function MarketsSection() {
  return (
    <section id="markets" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Markets We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans across diverse sectors, delivering reliable electrical solutions tailored to each market's unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-primary mb-4">{market.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{market.title}</h3>
                  <p className="text-muted-foreground text-sm">{market.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
