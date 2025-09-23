import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, gradient }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-elegant">
      <CardHeader className="pb-4">
        <div className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="ghost" className="w-full justify-between group-hover:bg-accent/10 transition-colors">
          Mehr erfahren
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;