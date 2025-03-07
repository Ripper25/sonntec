import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-lg bg-gradient-to-br from-primary/20 to-primary/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
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

const quoteFormSchema = z.object({
  serviceType: z.string().min(1, "Please select a service type"),
  squareMeters: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid number of square meters",
  }),
  voltageType: z.string().min(1, "Please select voltage type"),
});

export default function QuoteCalculator() {
  const [, navigate] = useLocation();
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const form = useForm({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      serviceType: "",
      squareMeters: "",
      voltageType: "",
    },
  });

  const calculateCost = (data: any) => {
    let baseCost = 0;
    const area = Number(data.squareMeters);

    // Base costs per service type
    switch (data.serviceType) {
      case "residential":
        baseCost = 100 * area;
        break;
      case "commercial":
        baseCost = 150 * area;
        break;
      case "industrial":
        baseCost = 200 * area;
        break;
    }

    // Voltage multiplier
    const voltageMultiplier = data.voltageType === "highVoltage" ? 1.5 : 1;

    return baseCost * voltageMultiplier;
  };

  function onSubmit(data: any) {
    const cost = calculateCost(data);
    setEstimatedCost(cost);
  }

  return (
    <div className="min-h-screen bg-background pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundAnimation />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Button
          variant="ghost"
          className="mb-8 gap-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="backdrop-blur-sm bg-background/95 border-2 hover:border-primary/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="industrial">Industrial</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="squareMeters"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Area (Square Meters)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter area" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="voltageType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Voltage Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select voltage type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="standardVoltage">Standard Voltage</SelectItem>
                            <SelectItem value="highVoltage">High Voltage</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Calculate Quote
                  </Button>
                </form>
              </Form>

              {estimatedCost !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 bg-muted/80 backdrop-blur-sm rounded-lg"
                >
                  <p className="text-center">
                    Estimated Cost: <span className="font-bold">${estimatedCost.toFixed(2)}</span>
                  </p>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    This is a preliminary estimate. Final costs may vary based on specific requirements and site inspection.
                  </p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}