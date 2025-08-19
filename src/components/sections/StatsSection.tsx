import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatItem {
  value: number;
  label: string;
  suffix: string;
  color: string;
  icon: string;
}

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const stats: StatItem[] = [
    { value: 530, label: "Students Taught", suffix: "+", color: "text-primary", icon: "👨‍🎓" },
    { value: 70, label: "Retention Rate", suffix: "%", color: "text-secondary", icon: "📈" },
    { value: 60, label: "Referral Growth", suffix: "%", color: "text-accent", icon: "🤝" },
    { value: 95, label: "Positive Feedback", suffix: "%", color: "text-success", icon: "⭐" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const animate = () => {
          start += increment;
          if (start < end) {
            setAnimatedValues(prev => {
              const newValues = [...prev];
              newValues[index] = Math.floor(start);
              return newValues;
            });
            requestAnimationFrame(animate);
          } else {
            setAnimatedValues(prev => {
              const newValues = [...prev];
              newValues[index] = end;
              return newValues;
            });
          }
        };

        setTimeout(() => animate(), index * 200);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Pilot Program{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Success Metrics
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from our community of dedicated learners and expert tutors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`text-center hover-lift transition-all duration-300 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-4xl sm:text-5xl font-bold mb-2 ${stat.color}`}>
                  {animatedValues[index]}{stat.suffix}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              "Early Wins" - Building Trust Through Results
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              These numbers represent real students who have experienced transformation 
              through our personalized tutoring approach. Each statistic tells a story 
              of academic improvement, increased confidence, and educational success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;