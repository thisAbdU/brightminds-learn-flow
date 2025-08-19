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

const Services = () => {
  const mainServices = [
    {
      icon: User,
      title: "One-on-One Tutoring",
      description: "Personalized learning sessions tailored to your specific needs, learning style, and academic goals.",
      features: [
        "Customized learning plans designed for individual needs",
        "Flexible scheduling to accommodate your timetable",
        "Real-time progress tracking and performance analysis",
        "Direct communication with expert tutors",
        "Specialized attention to problem areas"
      ],
      color: "text-primary",
      bgColor: "bg-primary-lighter",
      borderColor: "border-primary"
    },
    {
      icon: Users,
      title: "Group Tutoring Sessions",
      description: "Collaborative learning environment with carefully matched peers at similar academic levels.",
      features: [
        "Small group sizes (3-5 students) for optimal attention",
        "Interactive discussions and peer learning opportunities",
        "Cost-effective compared to individual sessions",
        "Healthy academic competition and motivation",
        "Shared learning experiences and group problem-solving"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary-lighter",
      borderColor: "border-secondary"
    },
    {
      icon: BookOpen,
      title: "Subject-Specific Support",
      description: "Expert guidance across a wide range of academic subjects from qualified specialists.",
      features: [
        "Mathematics, Sciences, Languages, and more",
        "Curriculum-aligned content and materials",
        "Subject matter expertise from qualified tutors",
        "Comprehensive resource materials and practice tests",
        "Advanced topic exploration and enrichment"
      ],
      color: "text-accent",
      bgColor: "bg-accent/20",
      borderColor: "border-accent"
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "Comprehensive preparation strategies for standardized tests and important examinations.",
      features: [
        "Proven test-taking strategies and techniques",
        "Extensive practice materials and mock exams",
        "Performance analysis and improvement recommendations",
        "Time management and stress reduction techniques",
        "Subject-specific exam preparation programs"
      ],
      color: "text-success",
      bgColor: "bg-success/20",
      borderColor: "border-success"
    }
  ];

  const pricingPlans = [
    {
      name: "Pay-Per-Session",
      description: "Perfect for occasional tutoring needs",
      benefits: [
        "No long-term commitment required",
        "Flexibility to book as needed",
        "Try different tutors and subjects",
        "Ideal for exam preparation bursts"
      ],
      features: [
        "Single session booking",
        "Choice of tutor and subject",
        "Flexible scheduling",
        "No monthly commitments"
      ]
    },
    {
      name: "Subscription Packages",
      description: "Best value for regular learning support",
      benefits: [
        "Better value per session",
        "Consistent learning progression",
        "Priority booking with preferred tutors",
        "Comprehensive progress tracking"
      ],
      features: [
        "Regular weekly/monthly sessions",
        "Progress monitoring reports",
        "Dedicated tutor assignment",
        "Family dashboard access"
      ]
    }
  ];

  const samplePackages = [
    {
      name: "Weekly Package",
      sessions: "4 sessions per month",
      features: [
        "1 session per week",
        "Subject consistency",
        "Progress tracking",
        "Tutor continuity"
      ],
      popular: false
    },
    {
      name: "Monthly Premium",
      sessions: "8 sessions per month",
      features: [
        "2 sessions per week",
        "Multi-subject support",
        "Priority scheduling",
        "Progress reports",
        "Family consultations"
      ],
      popular: true
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-0 pb-12 bg-gradient-hero text-white -mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in pt-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
                Comprehensive educational support designed to help you achieve your academic goals
              </p>
            </div>
          </div>
        </section>

      {/* Main Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Offerings
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of specialized tutoring services
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
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 ${service.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`mt-6 w-full gradient-primary text-white hover:opacity-90 transition-opacity`}
                    >
                      <Link to="/instructors" className="flex items-center justify-center">
                        Get Started
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
              Pricing &{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to suit your learning needs and budget
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
                    <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {plan.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className={`h-4 w-4 ${index === 0 ? 'text-primary' : 'text-secondary'} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className={`w-2 h-2 ${index === 0 ? 'bg-primary' : 'bg-secondary'} rounded-full mt-2 flex-shrink-0`}></span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sample Packages */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Sample Subscription Packages
            </h3>
            <p className="text-muted-foreground">
              Popular packages chosen by our students and families
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
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-lg font-semibold text-secondary">
                    {pkg.sessions}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`mt-6 w-full ${
                      pkg.popular 
                        ? 'gradient-primary text-white hover:opacity-90' 
                        : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    } transition-all`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    <Link to="/instructors" className="flex items-center justify-center">
                      Choose This Package
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
              Ready to Transform Your Learning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
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
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Services;