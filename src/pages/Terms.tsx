import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Shield, Users, BookOpen, AlertTriangle } from "lucide-react";
import { useLocalizationContext } from "@/contexts/LocalizationContext";

const Terms = () => {
  const { t } = useLocalizationContext();

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-0 pb-12 bg-gradient-hero text-white -mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in pt-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {t("terms.hero.title")}
              </h1>
              <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
                {t("terms.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-card">
              <CardContent className="p-8">
                {/* Header Info */}
                <div className="text-center mb-8 pb-6 border-b border-border">
                  <div className="flex items-center justify-center mb-4">
                    <FileText className="h-12 w-12 text-primary mr-3" />
                    <h2 className="text-3xl font-bold text-foreground">{t("terms.header.companyName")}</h2>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{t("terms.header.effectiveDate")}</span>
                    </div>
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span>{t("terms.header.lastRevised")}</span>
                    </div>
                  </div>
                </div>

                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    {t("terms.introduction")}
                  </p>
                </div>

                {/* Terms Sections */}
                <div className="space-y-8">
                  {/* Section 1 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.purpose.title")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("terms.sections.purpose.content")}
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.eligibility.title")}
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {t("terms.sections.eligibility.points").map((point: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.independentRelationship.title")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {t("terms.sections.independentRelationship.description")}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      {t("terms.sections.independentRelationship.points").map((point: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.tutorResponsibilities.title")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">{t("terms.sections.tutorResponsibilities.agreeTo.title")}</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {t("terms.sections.tutorResponsibilities.agreeTo.points").map((point: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="text-success mr-2">✓</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">{t("terms.sections.tutorResponsibilities.mustNot.title")}</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {t("terms.sections.tutorResponsibilities.mustNot.points").map((point: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="text-destructive mr-2">✗</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.clientResponsibilities.title")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {t("terms.sections.clientResponsibilities.description")}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      {t("terms.sections.clientResponsibilities.points").map((point: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.payments.title")}
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {t("terms.sections.payments.points").map((point: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.learningOutcomes.title")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("terms.sections.learningOutcomes.content")}
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.refundPolicy.title")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("terms.sections.refundPolicy.content")}
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.cancellations.title")}
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {t("terms.sections.cancellations.points").map((point: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 10 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.limitationOfLiability.title")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {t("terms.sections.limitationOfLiability.description")}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      {t("terms.sections.limitationOfLiability.points").map((point: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 11 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.privacy.title")}
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {t("terms.sections.privacy.points").map((point: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 12 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.termination.title")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {t("terms.sections.termination.description")}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      {t("terms.sections.termination.points").map((point: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      {t("terms.sections.termination.additional")}
                    </p>
                  </div>

                  {/* Section 13 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      {t("terms.sections.sharedInformation.title")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("terms.sections.sharedInformation.content")}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    {t("terms.footer.contact")}
                  </p>
                  <div className="mt-4">
                    <Badge variant="outline" className="text-xs">
                      {t("terms.footer.lastUpdated")}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Terms; 