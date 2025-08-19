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

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Bright Minds
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
              Where learning meets purpose - transforming education through personalized mentorship
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Bridging the Educational Gap in{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Ethiopia
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In Ethiopia's educational landscape, many students struggle to access quality, 
                personalized tutoring that meets their individual needs. Traditional educational 
                systems often fall short of providing the one-on-one attention that students require 
                to truly excel.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bright Minds Tutoring directly addresses this gap by offering reliable, personalized, 
                and high-quality academic mentorship from Ethiopia's top-performing medical students 
                and doctors, combining strong subject knowledge with inspirational mentorship.
              </p>
            </div>
            <div className="bg-gradient-card rounded-3xl p-8 shadow-card animate-slide-up">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Expert Tutors</h3>
                  <p className="text-sm text-muted-foreground">Top medical students & doctors</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-secondary mb-2">Personalized</h3>
                  <p className="text-sm text-muted-foreground">Tailored learning approach</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-accent mb-2">Mentorship</h3>
                  <p className="text-sm text-muted-foreground">Beyond academic support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-success mb-2">Results</h3>
                  <p className="text-sm text-muted-foreground">Proven track record</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="hover-lift transition-all duration-300 border-0 shadow-card animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-lighter rounded-2xl mb-6 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To become Ethiopia's leading educational platform that transforms students into 
                  confident, capable, and inspired learners who are equipped to excel in their 
                  academic pursuits and beyond.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where every student, regardless of their background or 
                  learning challenges, has access to world-class tutoring and mentorship that 
                  unlocks their full potential.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="hover-lift transition-all duration-300 border-0 shadow-card animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary-lighter rounded-2xl mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To provide exceptional, personalized tutoring services that combine academic 
                  excellence with mentorship, empowering students to achieve their educational 
                  goals while building confidence and character.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Deliver high-quality, personalized education
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Foster academic confidence and excellence
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Provide mentorship beyond academics
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Support students with diverse learning needs
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Difference */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Difference
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets Bright Minds apart in the educational landscape
            </p>
          </div>

          <div className="bg-gradient-card rounded-3xl p-8 sm:p-12 shadow-card animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Addressing Ethiopia's Educational Gap
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Bright Minds Tutoring directly addresses the significant educational gap in Ethiopia 
                  by offering reliable, personalized, and high-quality academic mentorship from the 
                  country's top-performing medical students and doctors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our unique approach combines strong subject knowledge with inspirational mentorship, 
                  creating an educational experience that goes beyond traditional tutoring. We don't 
                  just help students improve their grades—we help them develop the mindset and 
                  confidence needed for lifelong success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="gradient-primary text-white hover:opacity-90 transition-opacity"
                  >
                    <Link to="/instructors" className="flex items-center">
                      Meet Our Tutors
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-primary-lighter rounded-2xl p-6">
                  <h4 className="font-semibold text-primary mb-4">Key Differentiators</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Medical student & doctor tutors
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Personalized learning approaches
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Mentorship beyond academics
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Special needs support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Proven results & methodology
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;