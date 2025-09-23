import ServiceCard from "./ServiceCard";
import { Users, Package, Stethoscope, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Kадровое посредничество",
      description: "Professionelle Personalvermittlung für Ihre Geschäftsanforderungen mit langjähriger Branchenerfahrung.",
      features: [
        "Poиск и подбор персонала под задачи бизнеса",
        "Oпыт работы в разных отраслях",
        "Hадёжные и профессиональные кандидаты"
      ],
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Package,
      title: "Продукты и хозяйственные товары",
      description: "Zuverlässige Lieferung von Lebensmitteln und Haushaltsprodukten für Unternehmen und Handel.",
      features: [
        "Поставка продуктов питания для организаций и торговли",
        "Хозяйственные принадлежности для дома и бизнеса",
        "Flexible Lieferbedingungen und Qualitätsgarantie"
      ],
      gradient: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Stethoscope,
      title: "Медицинское оборудование",
      description: "Moderne medizinische Geräte und Diagnosesysteme mit umfassendem Service und Beratung.",
      features: [
        "Современные диагностические системы: МРТ, КТ",
        "Лазерные и терапевтические аппараты",
        "Консультации и сервисное сопровождение"
      ],
      gradient: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      icon: Building,
      title: "Строительные материалы",
      description: "Hochwertige Baumaterialien für professionelle Bauprojekte mit flexiblen Lieferbedingungen.",
      features: [
        "Натуральный камень и мрамор",
        "Бетон для строительных проектов",
        "Надёжные поставки и гибкие условия"
      ],
      gradient: "bg-gradient-to-br from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vier spezialisierte Bereiche, die Ihr Unternehmen voranbringen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;