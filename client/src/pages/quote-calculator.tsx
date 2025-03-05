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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card>
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
                  className="mt-6 p-4 bg-muted rounded-lg"
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