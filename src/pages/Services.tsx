import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  User, 
  Users, 
  BookOpen, 
  GraduationCap,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import Layout from "@/components/Layout";
import { useLocalizationContext } from "@/contexts/LocalizationContext";

const Services = () => {
  const { t } = useLocalizationContext();

  const mainServices = [
    {
      icon: User,
      title: t("servicesSection.services.oneOnOne.title"),
      description: t("servicesSection.services.oneOnOne.description"),
      features: t("servicesSection.services.oneOnOne.features"),
      color: "text-primary",
      bgColor: "bg-primary-lighter",
      borderColor: "border-primary"
    },
    {
      icon: Users,
      title: t("servicesSection.services.group.title"),
      description: t("servicesSection.services.group.description"),
      features: t("servicesSection.services.group.features"),
      color: "text-secondary",
      bgColor: "bg-secondary-lighter",
      borderColor: "border-secondary"
    },
    {
      icon: BookOpen,
      title: t("servicesSection.services.subjectSpecific.title"),
      description: t("servicesSection.services.subjectSpecific.description"),
      features: t("servicesSection.services.subjectSpecific.features"),
      color: "text-accent",
      bgColor: "bg-accent/20",
      borderColor: "border-accent"
    },
    {
      icon: GraduationCap,
      title: t("servicesSection.services.examPrep.title"),
      description: t("servicesSection.services.examPrep.description"),
      features: t("servicesSection.services.examPrep.features"),
      color: "text-success",
      bgColor: "bg-success/20",
      borderColor: "border-success"
    }
  ];

  const pricingPlans = [
    {
      name: t("services.pricing.payPerSession.name"),
      description: t("services.pricing.payPerSession.description"),
      benefits: t("services.pricing.payPerSession.benefits"),
      features: t("services.pricing.payPerSession.features")
    },
    {
      name: t("services.pricing.subscription.name"),
      description: t("services.pricing.subscription.description"),
      benefits: t("services.pricing.subscription.benefits"),
      features: t("services.pricing.subscription.features")
    }
  ];

  const samplePackages = [
    {
      name: t("services.packages.weekly.name"),
      features: t("services.packages.weekly.features"),
      popular: false
    },
    {
      name: t("services.packages.monthly.name"),
      features: t("services.packages.monthly.features"),
      popular: true
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-8 pb-12 bg-gradient-to-br from-[hsl(215,84%,23%)] to-[hsl(185,80%,30%)] text-white mt-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in pt-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {t("services.hero.title")}
              </h1>
              <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
                {t("services.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

      {/* Main Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("services.mainServices.title")}{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                {t("services.mainServices.subtitle").split(" ").slice(-1)[0]}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.mainServices.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`hover-lift transition-all duration-300 border-2 ${service.borderColor} shadow-card animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className={`h-8 w-8 ${service.color}`} />
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
                      <Link 
                        to="/instructors" 
                        className="flex items-center justify-center"
                        onClick={() => {
                          // Scroll down a bit when the page loads
                          setTimeout(() => {
                            window.scrollTo(0, 150); // Scrolls down 100px
                          }, 100);
                        }}
                      >
                        {t("servicesSection.cta")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("services.pricing.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.pricing.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className="hover-lift transition-all duration-300 border-0 shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${index === 0 ? 'bg-primary-lighter' : 'bg-secondary-lighter'} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                    {index === 0 ? 
                      <Clock className={`h-8 w-8 ${index === 0 ? 'text-primary' : 'text-secondary'}`} /> :
                      <TrendingUp className={`h-8 w-8 ${index === 0 ? 'text-primary' : 'text-secondary'}`} />
                    }
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">{t("services.pricing.benefits")}</h4>
                    <ul className="space-y-2">
                      {Array.isArray(plan.benefits) ? (
                        plan.benefits.map((benefit: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className={`h-4 w-4 ${index === 0 ? 'text-primary' : 'text-secondary'} mt-0.5 flex-shrink-0`} />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-muted-foreground text-sm">Benefits loading...</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t("services.pricing.features")}</h4>
                    <ul className="space-y-2">
                      {Array.isArray(plan.features) ? (
                        plan.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className={`w-2 h-2 ${index === 0 ? 'bg-primary' : 'bg-secondary'} rounded-full mt-2 flex-shrink-0`}></span>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-muted-foreground text-sm">Features loading...</li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sample Packages */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("services.packages.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("services.packages.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {samplePackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`hover-lift transition-all duration-300 border-0 shadow-card animate-fade-in relative ${
                  pkg.popular ? 'ring-2 ring-secondary' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {t("services.packages.monthly.popular")}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {pkg.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {Array.isArray(pkg.features) ? (
                      pkg.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-muted-foreground">Features loading...</li>
                    )}
                  </ul>
                  <Button 
                    className={`mt-6 w-full ${
                      pkg.popular 
                        ? 'gradient-primary text-white hover:opacity-90' 
                        : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    } transition-all`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                  <Link 
                    to="/instructors" 
                    className="flex items-center justify-center"
                    onClick={() => {
                      // Scroll down a bit when the page loads
                      setTimeout(() => {
                        window.scrollTo(0, 150); // Scrolls down 100px
                      }, 100);
                    }}
                  >
                    {t("servicesSection.cta")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-8 shadow-card">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("services.cta.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("services.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 transition-opacity"
              >
                <Link 
                  to="/instructors" 
                  className="flex items-center justify-center"
                  onClick={() => {
                    // Scroll down a bit when the page loads
                    setTimeout(() => {
                      window.scrollTo(0, 150); // Scrolls down 100px
                    }, 100);
                  }}
                >
                  {t("servicesSection.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Services;