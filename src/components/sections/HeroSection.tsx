import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocalizationContext } from "@/contexts/LocalizationContext";
const HeroSection = () => {
  const { t } = useLocalizationContext();

  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const typingTexts = [
    t("heroSection.selfConfidence"),
    t("heroSection.brightFuture"), 
    t("heroSection.success"),
    t("heroSection.excellence")
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % typingTexts.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      {/* Addis Ababa City Map Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/addis-ababa-map.png')",
          filter: "grayscale(100%) brightness(0.8)"
        }}
      ></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary-lighter rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-lighter rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-secondary/30 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
             {t("heroSection.title.a")}
              <span className="gradient-primary bg-clip-text text-transparent">
                {t("heroSection.title.b")}
              </span>{" "}
              {t("heroSection.title.c")}
              <span 
                className={`inline-block text-secondary transition-all duration-500 ${
                  isTyping ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {typingTexts[currentText]}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              {t("heroSection.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 transition-opacity shadow-primary group"
              >
                <Link to="/instructors" className="flex items-center">
                  {t("heroSection.primaryCta")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="bg-gradient-card rounded-3xl p-8 shadow-card hover-lift">
                <div className="grid grid-cols-2 gap-4">
                  {/* Student Cards */}
                  <div className="bg-primary-lighter rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h3 className="font-semibold text-primary mb-1">{t("heroSection.selfConfidence")}</h3>
                    <p className="text-xs text-muted-foreground">{t("heroSection.selfConfidenceDescription")}</p>
                  </div>
                  
                  <div className="bg-secondary-lighter rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="font-semibold text-secondary mb-1">{t("heroSection.brightFuture")}</h3>
                    <p className="text-xs text-muted-foreground">{t("heroSection.brightFutureDescription")}</p>
                  </div>
                  
                  <div className="bg-accent/20 rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <h3 className="font-semibold text-accent mb-1">{t("heroSection.excellence")}</h3>
                    <p className="text-xs text-muted-foreground">{t("heroSection.excellenceDescription")}</p>
                  </div>
                  
                  <div className="bg-success/20 rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-success rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="font-semibold text-success mb-1">{t("heroSection.success")}</h3>
                    <p className="text-xs text-muted-foreground">{t("heroSection.successDescription")}</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;