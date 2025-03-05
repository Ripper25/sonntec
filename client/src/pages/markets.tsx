import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Building2, Home, GraduationCap, LandPlot, Building, Hotel, UsersRound, Factory } from "lucide-react";

const markets = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Private Sector",
    description: "Serving companies across all industries",
    details: [
      "Comprehensive electrical solutions for businesses of all sizes",
      "Custom power distribution systems",
      "Energy efficiency consulting",
      "24/7 emergency services",
      "Preventive maintenance programs"
    ]
  },
  {
    icon: <LandPlot className="h-6 w-6" />,
    title: "Rural Development",
    description: "Supporting rural amenities and infrastructure",
    details: [
      "Rural electrification projects",
      "Solar power solutions",
      "Agricultural facility electrical systems",
      "Power line installation and maintenance",
      "Community infrastructure development"
    ]
  },
  {
    icon: <UsersRound className="h-6 w-6" />,
    title: "NGOs & Parastatals",
    description: "Partnering with organizations driving social change",
    details: [
      "Sustainable energy solutions",
      "Project management for development initiatives",
      "Infrastructure support for community projects",
      "Energy audit services",
      "Technical consultation and training"
    ]
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Educational Institutions",
    description: "Powering learning environments",
    details: [
      "Laboratory electrical installations",
      "Smart classroom setups",
      "Campus-wide power distribution",
      "Emergency backup systems",
      "Energy-efficient lighting solutions"
    ]
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Government & Local Authorities",
    description: "Supporting public sector infrastructure",
    details: [
      "Municipal electrical projects",
      "Public lighting systems",
      "Government facility maintenance",
      "Infrastructure modernization",
      "Emergency response systems"
    ]
  },
  {
    icon: <Hotel className="h-6 w-6" />,
    title: "Hospitality Industry",
    description: "Empowering tourism and hospitality sectors",
    details: [
      "Hotel electrical systems",
      "Restaurant power solutions",
      "Entertainment venue setups",
      "Energy management systems",
      "Safety and emergency lighting"
    ]
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Households",
    description: "Residential electrical solutions",
    details: [
      "Home wiring installations",
      "Smart home systems",
      "Security lighting",
      "Solar panel installations",
      "Electrical maintenance services"
    ]
  },
  {
    icon: <Factory className="h-6 w-6" />,
    title: "Industrial",
    description: "Comprehensive industrial electrical services",
    details: [
      "Heavy machinery installations",
      "Industrial automation systems",
      "Power factor correction",
      "High voltage installations",
      "Industrial maintenance programs"
    ]
  }
];

export default function Markets() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-8 gap-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Markets</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed overview of the markets we serve and our specialized solutions for each sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {markets.map((market, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-primary">{market.icon}</div>
                    <div>
                      <CardTitle className="text-2xl">{market.title}</CardTitle>
                      <p className="text-muted-foreground">{market.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {market.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}