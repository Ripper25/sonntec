
import { BrutalistLogo, BrutalistLogoAlt } from "@/components/ui/brutalist-logo";
import { Card, CardContent } from "@/components/ui/card";

export default function LogoShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Brutalist Logo Designs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visual exploration of brutalist typography for the Sonnteck brand.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Design 1: Split Style</h3>
              <div className="flex flex-col gap-8 items-center">
                <BrutalistLogo size="sm" />
                <BrutalistLogo size="md" />
                <BrutalistLogo size="lg" />
                <BrutalistLogo size="xl" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Design 2: Skewed Style</h3>
              <div className="flex flex-col gap-8 items-center">
                <BrutalistLogoAlt size="sm" />
                <BrutalistLogoAlt size="md" />
                <BrutalistLogoAlt size="lg" />
                <BrutalistLogoAlt size="xl" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
