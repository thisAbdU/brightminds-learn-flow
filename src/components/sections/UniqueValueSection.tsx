import { Card, CardContent } from "@/components/ui/card";
import { useLocalizationContext } from "@/contexts/LocalizationContext";

const UniqueValueSection = () => {
  const { t } = useLocalizationContext();

  const values = [
    {
      title: t("uniqueValueSection.values.expertTutors.title"),
      description: t("uniqueValueSection.values.expertTutors.description"),
      icon: "👨‍⚕️",
      color: "text-primary",
      bgColor: "bg-primary-lighter"
    },
    {
      title: t("uniqueValueSection.values.personalizedApproach.title"),
      description: t("uniqueValueSection.values.personalizedApproach.description"),
      icon: "🎯",
      color: "text-secondary",
      bgColor: "bg-secondary-lighter"
    },
    {
      title: t("uniqueValueSection.values.mentorship.title"),
      description: t("uniqueValueSection.values.mentorship.description"),
      icon: "🌟",
      color: "text-accent",
      bgColor: "bg-accent/20"
    },
    {
      title: t("uniqueValueSection.values.provenResults.title"),
      description: t("uniqueValueSection.values.provenResults.description"),
      icon: "📈",
      color: "text-success",
      bgColor: "bg-success/20"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("uniqueValueSection.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("uniqueValueSection.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="hover-lift transition-all duration-300 border-0 shadow-card animate-fade-in text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${value.bgColor} rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl`}>
                  {value.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${value.color}`}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueValueSection;