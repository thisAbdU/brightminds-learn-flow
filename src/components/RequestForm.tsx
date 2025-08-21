import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Send, User, Phone, Mail, MapPin, BookOpen, Clock, Calendar, MessageSquare, CheckCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalizationContext } from "@/contexts/LocalizationContext";

interface Tutor {
  id: number;
  name: string;
  subjects: string[];
  areaCoverage: string[];
}

interface RequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTutor: Tutor | null;
}

const RequestForm = ({ isOpen, onClose, selectedTutor }: RequestFormProps) => {
  const [formData, setFormData] = useState({
    parentFullName: "",
    parentPhoneNumber: "",
    email: "",
    homeAddress: "",
    gradeLevel: "",
    hoursPerDay: "",
    daysPerWeek: "",
    specialNeeds: ""
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const { t } = useLocalizationContext();

  const gradeLevels = t("requestForm.gradeLevels");
  const hoursOptions = t("requestForm.hoursOptions");
  const daysOptions = t("requestForm.daysOptions");

  useEffect(() => {
    if (isOpen) {
      setFormData({
        parentFullName: "",
        parentPhoneNumber: "",
        email: "",
        homeAddress: "",
        gradeLevel: "",
        hoursPerDay: "",
        daysPerWeek: "",
        specialNeeds: ""
      });
      setAgreedToTerms(false);
      setSubmitStatus("idle");
    }
  }, [isOpen]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const errors: string[] = [];
    const requiredFields = ["parentFullName", "parentPhoneNumber", "email", "homeAddress", "gradeLevel", "hoursPerDay", "daysPerWeek"];
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData].trim()) {
        errors.push(`${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} ${t("requestForm.validation.requiredFields")}`);
      }
    });
    
    if (!agreedToTerms) {
      errors.push(t("requestForm.validation.termsAgreement"));
    }
    
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate processing time
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleContactTelegram = () => {
    // Open Telegram contact
    window.open('https://t.me/BrightMinds_tutor', '_blank');
  };

  if (!isOpen) return null;

  // Show success screen
  if (submitStatus === "success") {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-green-600">
                {t("requestForm.success.title") || "Request Submitted Successfully!"}
              </h3>
              <p className="text-muted-foreground">
                {t("requestForm.success.message") || "Thank you for your request. Please contact us on Telegram to proceed with your tutoring request."}
              </p>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handleContactTelegram}
                className="w-full gradient-primary text-white hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Contact us on Telegram
              </Button>
              
              <Button 
                variant="outline" 
                onClick={onClose}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-semibold">
            {selectedTutor ? t("requestForm.titles.chooseTutor") : t("requestForm.titles.contactUs")}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {selectedTutor && (
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2">{t("requestForm.selectedTutor.title")} {selectedTutor.name}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium">{t("requestForm.selectedTutor.subjects")}</span>
                {selectedTutor.subjects.map((subject, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {subject}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium">{t("requestForm.selectedTutor.areaCoverage")}</span>
                {selectedTutor.areaCoverage.map((area, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="parentFullName" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {t("requestForm.form.parentFullName.label")}
                </Label>
                <Input
                  id="parentFullName"
                  value={formData.parentFullName}
                  onChange={(e) => handleInputChange("parentFullName", e.target.value)}
                  placeholder={t("requestForm.form.parentFullName.placeholder")}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentPhoneNumber" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {t("requestForm.form.parentPhoneNumber.label")}
                </Label>
                <Input
                  id="parentPhoneNumber"
                  value={formData.parentPhoneNumber}
                  onChange={(e) => handleInputChange("parentPhoneNumber", e.target.value)}
                  placeholder={t("requestForm.form.parentPhoneNumber.placeholder")}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {t("requestForm.form.email.label")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder={t("requestForm.form.email.placeholder")}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="homeAddress" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {t("requestForm.form.homeAddress.label")}
                </Label>
                <Input
                  id="homeAddress"
                  value={formData.homeAddress}
                  onChange={(e) => handleInputChange("homeAddress", e.target.value)}
                  placeholder={t("requestForm.form.homeAddress.placeholder")}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gradeLevel" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  {t("requestForm.form.gradeLevel.label")}
                </Label>
                <Select
                  value={formData.gradeLevel}
                  onValueChange={(value) => handleInputChange("gradeLevel", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("requestForm.form.gradeLevel.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeLevels.map((grade: string) => (
                      <SelectItem key={grade} value={grade}>
                        {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hoursPerDay" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {t("requestForm.form.hoursPerDay.label")}
                </Label>
                <Select
                  value={formData.hoursPerDay}
                  onValueChange={(value) => handleInputChange("hoursPerDay", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("requestForm.form.hoursPerDay.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    {hoursOptions.map((hours: string) => (
                      <SelectItem key={hours} value={hours}>
                        {hours}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="daysPerWeek" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {t("requestForm.form.daysPerWeek.label")}
                </Label>
                <Select
                  value={formData.daysPerWeek}
                  onValueChange={(value) => handleInputChange("daysPerWeek", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("requestForm.form.daysPerWeek.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    {daysOptions.map((days: string) => (
                      <SelectItem key={days} value={days}>
                        {days}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialNeeds" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                {t("requestForm.form.specialNeeds.label")}
              </Label>
              <Textarea
                id="specialNeeds"
                value={formData.specialNeeds}
                onChange={(e) => handleInputChange("specialNeeds", e.target.value)}
                placeholder={t("requestForm.form.specialNeeds.placeholder")}
                rows={3}
              />
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start space-x-3 pt-2">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                className="mt-1"
              />
              <div className="space-y-1">
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  {t("requestForm.termsAndConditions.label")}
                </Label>
                <p className="text-xs text-muted-foreground">
                  {t("requestForm.termsAndConditions.description")}
                </p>
              </div>
            </div>

            {/* Validation Errors */}
            {validationErrors.length > 0 && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <p className="text-sm font-medium text-destructive mb-2">{t("requestForm.validation.title")}</p>
                <ul className="space-y-1">
                  {validationErrors.map((error, index) => (
                    <li key={index} className="text-sm text-destructive flex items-start">
                      <span className="mr-2">•</span>
                      {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                {t("requestForm.buttons.cancel")}
              </Button>
              <Button
                type="submit"
                className="flex-1 gradient-primary text-white hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  t("requestForm.buttons.sending")
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    {selectedTutor ? t("requestForm.buttons.submitRequest") : t("requestForm.buttons.sendMessage")}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestForm; 