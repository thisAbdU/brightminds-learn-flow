import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Shield, Users, BookOpen, AlertTriangle } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-0 pb-12 bg-gradient-hero text-white -mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in pt-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Terms and Conditions
              </h1>
              <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
                Understanding our service agreement and policies
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
                    <h2 className="text-3xl font-bold text-foreground">BrightMinds Tutoring Center</h2>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Effective Date: September 7, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span>Last Revised: August 2, 2025</span>
                    </div>
                  </div>
                </div>

                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms and Conditions ("Terms") form the agreement between BrightMinds Tutoring Center ("BrightMinds," "we," "our"), the Tutors who provide academic support through our platform, and the Clients/Families who use our services. By registering with BrightMinds, booking lessons, or providing tutoring, you agree to follow these Terms.
                  </p>
                </div>

                {/* Terms Sections */}
                <div className="space-y-8">
                  {/* Section 1 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 text-primary mr-2" />
                      1. Purpose of the Service
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      BrightMinds Tutoring Center connects families with qualified tutors for academic support. We organize scheduling, coordination, and provide general oversight. BrightMinds is not a school, an employer of tutors, or responsible for guaranteeing student results. Our role is to facilitate learning partnerships between Tutors and Clients.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      2. Eligibility
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Tutors must go through BrightMinds' approval process, which includes screening and professional standards.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Clients must be 18 years or older and legally able to enter contracts under Ethiopian law.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Parents/guardians are responsible for ensuring a safe learning space and proper supervision when the student is a minor.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Improper or unlawful use of our services may result in suspension or termination.
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      3. Independent Relationship
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Tutors working through BrightMinds are independent providers, not employees. This means:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Tutors are not entitled to employee benefits or protections under Ethiopian labor law.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Clients may not treat Tutors as household staff or employees.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Tutors may not represent themselves as official agents of BrightMinds outside of tutoring arrangements.
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      4. Responsibilities of Tutors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Tutors agree to:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-success mr-2">✓</span>
                            Arrive prepared and on time.
                          </li>
                          <li className="flex items-start">
                            <span className="text-success mr-2">✓</span>
                            Deliver sessions professionally.
                          </li>
                          <li className="flex items-start">
                            <span className="text-success mr-2">✓</span>
                            Maintain privacy and respect.
                          </li>
                          <li className="flex items-start">
                            <span className="text-success mr-2">✓</span>
                            Follow BrightMinds' ethical standards.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Tutors must not:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-destructive mr-2">✗</span>
                            Request off-platform payments.
                          </li>
                          <li className="flex items-start">
                            <span className="text-destructive mr-2">✗</span>
                            Share personal contact information for non-tutoring purposes.
                          </li>
                          <li className="flex items-start">
                            <span className="text-destructive mr-2">✗</span>
                            Perform non-academic tasks (such as errands or babysitting).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      5. Responsibilities of Clients
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Clients agree to:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Provide a safe and quiet study environment.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Respect the boundaries of tutors' roles.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Make timely payments for sessions.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Communicate concerns directly with BrightMinds, not privately with Tutors.
                      </li>
                    </ul>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      6. Payments
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Payments should be made through BrightMinds unless otherwise approved.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Any payment made directly to a Tutor must be reported to BrightMinds for record-keeping.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        BrightMinds may charge service or coordination fees.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Refunds and adjustments are handled at BrightMinds' discretion.
                      </li>
                    </ul>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 text-primary mr-2" />
                      7. Learning Outcomes
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tutoring aims to support academic growth, but BrightMinds cannot promise specific grades, results, or guaranteed improvement. Learning depends on the combined effort of the student, family, and tutor.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      8. Refund Policy
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Refunds are reviewed individually. Prepaid lessons may be refunded, credited, or forfeited depending on the situation. Repeated cancellations or contract violations may affect refund eligibility.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      9. Cancellations & Rescheduling
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Tutors and Clients may reschedule lessons if both agree.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Repeated cancellations or last-minute changes should be reported to BrightMinds for review or reassignment.
                      </li>
                    </ul>
                  </div>

                  {/* Section 10 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                      10. Limitation of Liability
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      BrightMinds is not responsible for damages, losses, or conflicts that occur during tutoring sessions. By using our services, Tutors and Clients agree to release BrightMinds from claims related to:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Misconduct or negligence by either party,
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Property damage or privacy issues,
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Emotional or physical harm,
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Student academic performance.
                      </li>
                    </ul>
                  </div>

                  {/* Section 11 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      11. Privacy and Confidentiality
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Tutors must keep student information confidential.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Clients may not misuse Tutor details (such as photos or contact information).
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        BrightMinds only collects data necessary for service delivery and will not share it without consent, except when legally required.
                      </li>
                    </ul>
                  </div>

                  {/* Section 12 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                      12. Termination
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      BrightMinds may suspend or end services for:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Violation of these Terms,
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Nonpayment,
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Safety concerns or misconduct.
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      Clients and Tutors may also end their engagement by notifying BrightMinds.
                    </p>
                  </div>

                  {/* Section 13 */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      13. Use of Shared Information
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Information shared between Tutors and Clients should be used only for educational purposes. Personal information must be protected and not shared with third parties without consent.
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    For questions about these Terms and Conditions, please contact us through our platform.
                  </p>
                  <div className="mt-4">
                    <Badge variant="outline" className="text-xs">
                      Last Updated: August 2, 2025
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