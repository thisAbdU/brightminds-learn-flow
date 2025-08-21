import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  BookOpen,
  Users,
  Award,
  ArrowRight
} from "lucide-react";
import Layout from "@/components/Layout";
import { useLocalizationContext } from "@/contexts/LocalizationContext";

const About = () => {
  const { t } = useLocalizationContext();

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-8 pb-12 bg-gradient-to-br from-[hsl(215_85%_25%)] to-[hsl(185_85%_45%)] text-white mt-8 relative overflow-hidden">
          {/* Background overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center animate-fade-in pt-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                {t("about.hero.title")}
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                {t("about.hero.subtitle")}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full blur-3xl"></div>
          </div>
        </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {t("about.introduction.title")}{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  {t("about.introduction.country")}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("about.introduction.paragraph1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.introduction.paragraph2")}
              </p>
            </div>
            <div className="bg-gradient-card rounded-3xl p-8 shadow-card animate-slide-up bg-muted/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{t("about.features.expertTutors.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about.features.expertTutors.description")}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-secondary mb-2">{t("about.features.personalized.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about.features.personalized.description")}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-accent mb-2">{t("about.features.mentorship.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about.features.mentorship.description")}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-success mb-2">{t("about.features.results.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about.features.results.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="hover-lift transition-all duration-300 border-0 shadow-card animate-fade-in bg-muted/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-lighter rounded-2xl mb-6 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t("about.visionMission.vision.title")}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("about.visionMission.vision.paragraph1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.visionMission.vision.paragraph2")}
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="hover-lift transition-all duration-300 border-0 shadow-card animate-fade-in bg-muted/20" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary-lighter rounded-2xl mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t("about.visionMission.mission.title")}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("about.visionMission.mission.paragraph1")}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {t("about.visionMission.mission.goals").map((goal: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Difference */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("about.coreDifference.title")}{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                {t("about.coreDifference.highlight")}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.coreDifference.subtitle")}
            </p>
          </div>

          <div className="bg-gradient-card rounded-3xl p-8 sm:p-12 shadow-card animate-fade-in bg-muted/30">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  {t("about.coreDifference.mainTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("about.coreDifference.paragraph1")}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("about.coreDifference.paragraph2")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
                      {t("about.coreDifference.buttons.meetTutors")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to="/services">{t("about.coreDifference.buttons.ourServices")}</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-primary-lighter rounded-2xl p-6">
                  <h4 className="font-semibold text-primary mb-4">{t("about.coreDifference.keyDifferentiators.title")}</h4>
                  <ul className="space-y-3 text-sm">
                    {t("about.coreDifference.keyDifferentiators.items").map((item: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default About;