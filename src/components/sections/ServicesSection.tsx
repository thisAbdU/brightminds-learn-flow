import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLocalizationContext } from "@/contexts/LocalizationContext";

const ServicesSection = () => {
  const { t } = useLocalizationContext();

  const services = [
    {
      title: t("servicesSection.services.oneOnOne.title"),
      description: t("servicesSection.services.oneOnOne.description"),
      features: t("servicesSection.services.oneOnOne.features"),
      color: "text-primary",
      bgColor: "bg-primary-lighter",
      borderColor: "border-primary"
    },
    {
      title: t("servicesSection.services.group.title"),
      description: t("servicesSection.services.group.description"),
      features: t("servicesSection.services.group.features"),
      color: "text-secondary",
      bgColor: "bg-secondary-lighter",
      borderColor: "border-secondary"
    },
    {
      title: t("servicesSection.services.subjectSpecific.title"),
      description: t("servicesSection.services.subjectSpecific.description"),
      features: t("servicesSection.services.subjectSpecific.features"),
      color: "text-accent",
      bgColor: "bg-accent/20",
      borderColor: "border-accent"
    },
    {
      title: t("servicesSection.services.examPrep.title"),
      description: t("servicesSection.services.examPrep.description"),
      features: t("servicesSection.services.examPrep.features"),
      color: "text-success",
      bgColor: "bg-success/20",
      borderColor: "border-success"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("servicesSection.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("servicesSection.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-lift transition-all duration-300 border-2 ${service.borderColor} shadow-card animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center`}>
                    <CheckCircle className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {Array.isArray(service.features) ? (
                    service.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className={`h-5 w-5 ${service.color} mt-0.5 flex-shrink-0`} />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-muted-foreground text-sm">Features loading...</li>
                  )}
                </ul>
                <Button 
                  className={`mt-6 w-full gradient-primary text-white hover:opacity-90 transition-opacity`}
                >
                  <Link to="/instructors" className="flex items-center justify-center">
                    {t("servicesSection.cta")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/services" className="flex items-center">
              {t("servicesSection.learnMore")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;