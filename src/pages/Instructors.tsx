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
import RequestForm from "@/components/RequestForm";
import Layout from "@/components/Layout";
import { useLocalizationContext } from "@/contexts/LocalizationContext";

const Instructors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState<{
    id: number;
    name: string;
    subjects: string[];
    areaCoverage: string[];
  } | null>(null);

  const { t } = useLocalizationContext();

  // Localized instructor data
  const instructors = [
    {
      id: 1,
      name: t("instructors.mockData.instructors.0.name"),
      photo: "👩‍⚕️",
      subjects: [
        t("instructors.mockData.subjects.mathematics"),
        t("instructors.mockData.subjects.physics"),
        t("instructors.mockData.subjects.chemistry")
      ],
      tagline: t("instructors.mockData.instructors.0.tagline"),
      rating: 4.9,
      reviews: 127,
      availability: t("instructors.mockData.availability.availableToday"),
      experience: t("instructors.mockData.instructors.0.experience"),
      location: t("instructors.mockData.instructors.0.location"),
      areaCoverage: [
        t("instructors.mockData.areas.cmc"),
        t("instructors.mockData.areas.ayat"),
        t("instructors.mockData.areas.boleMedhaneAlem")
      ]
    },
    {
      id: 2,
      name: t("instructors.mockData.instructors.1.name"),
      photo: "👨‍⚕️",
      subjects: [
        t("instructors.mockData.subjects.biology"),
        t("instructors.mockData.subjects.chemistry"),
        t("instructors.mockData.subjects.english")
      ],
      tagline: t("instructors.mockData.instructors.1.tagline"),
      rating: 4.8,
      reviews: 89,
      availability: t("instructors.mockData.availability.availableTomorrow"),
      experience: t("instructors.mockData.instructors.1.experience"),
      location: t("instructors.mockData.instructors.1.location"),
      areaCoverage: [
        t("instructors.mockData.areas.gurdShola"),
        t("instructors.mockData.areas.kotebe"),
        t("instructors.mockData.areas.kazanchis")
      ]
    },
    {
      id: 3,
      name: t("instructors.mockData.instructors.2.name"),
      photo: "👩‍🎓",
      subjects: [
        t("instructors.mockData.subjects.mathematics"),
        t("instructors.mockData.subjects.physics")
      ],
      tagline: t("instructors.mockData.instructors.2.tagline"),
      rating: 4.9,
      reviews: 156,
      availability: t("instructors.mockData.availability.availableToday"),
      experience: t("instructors.mockData.instructors.2.experience"),
      location: t("instructors.mockData.instructors.2.location"),
      areaCoverage: [
        t("instructors.mockData.areas.merkato"),
        t("instructors.mockData.areas.sarbetOldAirport"),
        t("instructors.mockData.areas.goro")
      ]
    },
    {
      id: 4,
      name: t("instructors.mockData.instructors.3.name"),
      photo: "👨‍🎓",
      subjects: [
        t("instructors.mockData.subjects.chemistry"),
        t("instructors.mockData.subjects.biology"),
        t("instructors.mockData.subjects.mathematics")
      ],
      tagline: t("instructors.mockData.instructors.3.tagline"),
      rating: 4.7,
      reviews: 94,
      availability: t("instructors.mockData.availability.availableThisWeek"),
      experience: t("instructors.mockData.instructors.3.experience"),
      location: t("instructors.mockData.instructors.3.location"),
      areaCoverage: [
        t("instructors.mockData.areas.cmc"),
        t("instructors.mockData.areas.ayat"),
        t("instructors.mockData.areas.boleMedhaneAlem")
      ]
    },
    {
      id: 5,
      name: t("instructors.mockData.instructors.4.name"),
      photo: "👩‍🏫",
      subjects: [
        t("instructors.mockData.subjects.english"),
        t("instructors.mockData.subjects.literature"),
        t("instructors.mockData.subjects.history")
      ],
      tagline: t("instructors.mockData.instructors.4.tagline"),
      rating: 4.8,
      reviews: 112,
      availability: t("instructors.mockData.availability.availableToday"),
      experience: t("instructors.mockData.instructors.4.experience"),
      location: t("instructors.mockData.instructors.4.location"),
      areaCoverage: [
        t("instructors.mockData.areas.gurdShola"),
        t("instructors.mockData.areas.kotebe"),
        t("instructors.mockData.areas.kazanchis")
      ]
    },
    {
      id: 6,
      name: t("instructors.mockData.instructors.5.name"),
      photo: "👨‍💻",
      subjects: [
        t("instructors.mockData.subjects.mathematics"),
        t("instructors.mockData.subjects.computerScience")
      ],
      tagline: t("instructors.mockData.instructors.5.tagline"),
      rating: 4.9,
      reviews: 78,
      availability: t("instructors.mockData.availability.availableTomorrow"),
      experience: t("instructors.mockData.instructors.5.experience"),
      location: t("instructors.mockData.instructors.5.location"),
      areaCoverage: [
        t("instructors.mockData.areas.merkato"),
        t("instructors.mockData.areas.sarbetOldAirport"),
        t("instructors.mockData.areas.goro")
      ]
    }
  ];

  const filteredInstructors = instructors.filter(instructor =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instructor.subjects.some(subject => 
      subject.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    instructor.areaCoverage.some(area => 
      area.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-0 pb-12 bg-gradient-hero text-white -mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in pt-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {t("instructors.hero.title")}
              </h1>
              <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
                {t("instructors.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder={t("instructors.search.placeholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-2 border-border focus:border-primary"
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                  {t("instructors.search.quickFilters.mathematics")}
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                  {t("instructors.search.quickFilters.physics")}
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                  {t("instructors.search.quickFilters.chemistry")}
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                  {t("instructors.search.quickFilters.biology")}
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                  {t("instructors.search.quickFilters.english")}
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Instructors Grid */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {t("instructors.filters.title")} ({filteredInstructors.length})
              </h2>
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                {t("instructors.filters.filterButton")}
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
                      <p className="text-sm font-medium text-foreground mb-2">{t("instructors.instructorCard.subjects")}</p>
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
                        ({instructor.reviews} {t("instructors.instructorCard.rating")})
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
                        <span>{instructor.experience} {t("instructors.instructorCard.experience")}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-accent" />
                        <span>{instructor.location}</span>
                      </div>
                    </div>

                    {/* Area Coverage */}
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm font-medium text-foreground mb-2">{t("instructors.instructorCard.areaCoverage")}</p>
                      <div className="flex flex-wrap gap-1">
                        {instructor.areaCoverage.map((area, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        className="flex-1 gradient-primary text-white hover:opacity-90 transition-opacity"
                        onClick={() => {
                          setSelectedTutor({
                            id: instructor.id,
                            name: instructor.name,
                            subjects: instructor.subjects,
                            areaCoverage: instructor.areaCoverage
                          });
                          setIsRequestFormOpen(true);
                        }}
                      >
                        {t("instructors.instructorCard.chooseTutor")}
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
                  {t("instructors.noResults.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("instructors.noResults.description")}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-card rounded-3xl p-8 shadow-card">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t("instructors.cta.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("instructors.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setSelectedTutor(null);
                    setIsRequestFormOpen(true);
                  }}
                >
                  {t("instructors.cta.contactUs")}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {t("instructors.cta.browseSubjects")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Request Form Modal */}
        <RequestForm
          isOpen={isRequestFormOpen}
          onClose={() => {
            setIsRequestFormOpen(false);
            setSelectedTutor(null);
          }}
          selectedTutor={selectedTutor}
        />
      </div>
    </Layout>
  );
};

export default Instructors;