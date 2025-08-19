import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  BookOpen,
  GraduationCap,
  User
} from "lucide-react";

const Instructors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample instructor data
  const instructors = [
    {
      id: 1,
      name: "Dr. Mehret Teshome",
      photo: "👩‍⚕️",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      tagline: "Medical Doctor & Mathematics Specialist",
      rating: 4.9,
      reviews: 127,
      availability: "Available Today",
      experience: "5 years",
      location: "Addis Ababa",
      price: "From $15/hour"
    },
    {
      id: 2,
      name: "Dawit Bekele",
      photo: "👨‍⚕️",
      subjects: ["Biology", "Chemistry", "English"],
      tagline: "Medical Student at AAU",
      rating: 4.8,
      reviews: 89,
      availability: "Available Tomorrow",
      experience: "3 years",
      location: "Addis Ababa",
      price: "From $12/hour"
    },
    {
      id: 3,
      name: "Hanan Mohammed",
      photo: "👩‍🎓",
      subjects: ["Mathematics", "Physics"],
      tagline: "Engineering Graduate & Math Expert",
      rating: 4.9,
      reviews: 156,
      availability: "Available Today",
      experience: "4 years",
      location: "Addis Ababa",
      price: "From $14/hour"
    },
    {
      id: 4,
      name: "Yohannes Girma",
      photo: "👨‍🎓",
      subjects: ["Chemistry", "Biology", "Mathematics"],
      tagline: "Medical Student & Science Tutor",
      rating: 4.7,
      reviews: 94,
      availability: "Available This Week",
      experience: "2 years",
      location: "Addis Ababa",
      price: "From $10/hour"
    },
    {
      id: 5,
      name: "Sara Hailu",
      photo: "👩‍🏫",
      subjects: ["English", "Literature", "History"],
      tagline: "Language & Literature Specialist",
      rating: 4.8,
      reviews: 112,
      availability: "Available Today",
      experience: "6 years",
      location: "Addis Ababa",
      price: "From $13/hour"
    },
    {
      id: 6,
      name: "Robel Tadesse",
      photo: "👨‍💻",
      subjects: ["Mathematics", "Computer Science"],
      tagline: "Computer Science Graduate",
      rating: 4.9,
      reviews: 78,
      availability: "Available Tomorrow",
      experience: "3 years",
      location: "Addis Ababa",
      price: "From $16/hour"
    }
  ];

  const filteredInstructors = instructors.filter(instructor =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instructor.subjects.some(subject => 
      subject.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect Instructor
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
              Connect with Ethiopia's top medical students and professionals
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by subject or instructor name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-2 border-border focus:border-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                Mathematics
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                Physics
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                Chemistry
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                Biology
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                English
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Available Instructors ({filteredInstructors.length})
            </h2>
            <Button variant="outline" size="sm" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInstructors.map((instructor, index) => (
              <Card 
                key={instructor.id} 
                className="hover-lift transition-all duration-300 border-0 shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-primary-lighter rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    {instructor.photo}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {instructor.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {instructor.tagline}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Subjects */}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Subjects:</p>
                    <div className="flex flex-wrap gap-1">
                      {instructor.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="text-sm font-medium text-foreground ml-1">
                        {instructor.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({instructor.reviews} reviews)
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{instructor.availability}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-secondary" />
                      <span>{instructor.experience} experience</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      <span>{instructor.location}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-border">
                    <p className="text-lg font-semibold text-primary">
                      {instructor.price}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 gradient-primary text-white hover:opacity-90 transition-opacity"
                    >
                      View Profile
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredInstructors.length === 0 && (
            <div className="text-center py-12">
              <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No instructors found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all instructors
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-8 shadow-card">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Can't Find the Right Tutor?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us and we'll help match you with the perfect instructor for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Browse All Subjects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;