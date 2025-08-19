import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Users, 
  BookOpen, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "One-on-One Tutoring",
      description: "Personalized learning sessions tailored to your specific needs and learning style.",
      features: ["Custom learning plans", "Flexible scheduling", "Progress tracking"],
      color: "text-primary",
      bgColor: "bg-primary-lighter"
    },
    {
      icon: Users,
      title: "Group Tutoring Sessions",
      description: "Collaborative learning environment with peers at similar academic levels.",
      features: ["Small group sizes", "Interactive discussions", "Peer learning"],
      color: "text-secondary",
      bgColor: "bg-secondary-lighter"
    },
    {
      icon: BookOpen,
      title: "Subject-Specific Support",
      description: "Expert guidance in mathematics, sciences, languages, and more.",
      features: ["Subject expertise", "Curriculum alignment", "Resource materials"],
      color: "text-accent",
      bgColor: "bg-accent/20"
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "Comprehensive preparation for standardized tests and important examinations.",
      features: ["Test strategies", "Practice materials", "Performance analysis"],
      color: "text-success",
      bgColor: "bg-success/20"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Core{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive educational support designed to help you achieve your academic goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift transition-all duration-300 border-0 shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`border-${service.color.split('-')[1]} ${service.color} hover:bg-${service.color.split('-')[1]} hover:text-white transition-colors`}
                  >
                    <Link to="/services" className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Learning Experience?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Join thousands of students who have discovered the power of personalized education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 transition-opacity"
              >
                <Link to="/instructors" className="flex items-center">
                  Find Your Perfect Tutor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;