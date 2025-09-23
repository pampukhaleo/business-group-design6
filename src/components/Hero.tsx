import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ihr zuverlässiger{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Geschäftspartner
            </span>{" "}
            in Deutschland
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Wir bieten umfassende Dienstleistungen für Unternehmen in verschiedenen Branchen. 
            Von Personalvermittlung bis hin zu medizinischen Geräten – Ihre Geschäftsziele sind unser Auftrag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Unsere Services entdecken
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Beratung vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;