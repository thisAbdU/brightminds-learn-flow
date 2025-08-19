import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Heart, 
  TrendingUp, 
  Users,
  CheckCircle
} from "lucide-react";

const UniqueValueSection = () => {
  const uniqueFeatures = [
    {
      icon: Target,
      title: "Personalized Learning Plans",
      description: "Tailored curriculum designed specifically for your learning style and academic goals.",
      color: "text-primary",
      bgColor: "bg-primary-lighter"
    },
    {
      icon: Heart,
      title: "Mentorship from Medical Students",
      description: "Learn from Ethiopia's top-performing medical students who understand academic excellence.",
      color: "text-secondary",
      bgColor: "bg-secondary-lighter"
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Beyond academics - receive guidance on career paths and professional development.",
      color: "text-accent",
      bgColor: "bg-accent/20"
    }
  ];

  const additionalValues = [
    "Academic Support with proven methodologies",
    "Progress Monitoring through advanced tracking systems",
    "Flexible scheduling to fit your lifestyle",
    "Affordable pricing with multiple payment options",
    "Special support for children with learning delays or special needs (ADHD, speech delays, etc.)"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            More Than Tutoring, We Offer{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What makes Bright Minds stand out in the educational landscape
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {uniqueFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover-lift transition-all duration-300 border-0 shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                    <IconComponent className={`h-10 w-10 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Values */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Comprehensive Educational Excellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalValues.map((value, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Highlight */}
        <div className="mt-12">
          <Card className="border-2 border-warning bg-warning/5 hover-lift">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Special Support for All Learners
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                We provide specialized support for children with learning delays or special needs 
                including ADHD, speech delays, and other learning differences.
              </p>
              <p className="text-sm text-muted-foreground">
                Our trained tutors understand that every child learns differently and deserves 
                the opportunity to reach their full potential.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl sm:text-3xl font-bold text-foreground">
            "We don't just raise grades —{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              we raise mindsets
            </span>
            ."
          </blockquote>
          <p className="mt-4 text-muted-foreground">
            — Bright Minds Tutoring Center
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniqueValueSection;