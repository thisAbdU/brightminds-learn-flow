import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Send, User, Phone, Mail, MapPin, BookOpen, Clock, Calendar, MessageSquare } from "lucide-react";
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

  const sendTelegramMessage = async (message: string) => {
    // Replace with your actual Telegram bot token and chat ID
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN";
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || "YOUR_CHAT_ID";
    
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    try {
      const response = await fetch(telegramUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML"
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send Telegram message");
      }

      return true;
    } catch (error) {
      console.error("Error sending Telegram message:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Don't show alert, validation errors are displayed below
    }

    setIsSubmitting(true);

    const message = `
<b>${t("telegram.newRequest")}</b>

${selectedTutor ? `<b>${t("telegram.selectedTutor")}</b> ${selectedTutor.name}` : `<b>${t("telegram.generalContact")}</b>`}

<b>${t("telegram.parentInformation")}</b>
👤 <b>${t("telegram.fullName")}</b> ${formData.parentFullName}
📱 <b>${t("telegram.phone")}</b> ${formData.parentPhoneNumber}
📧 <b>${t("telegram.email")}</b> ${formData.email}

<b>${t("telegram.locationSchedule")}</b>
📍 <b>${t("telegram.homeAddress")}</b> ${formData.homeAddress}
📚 <b>${t("telegram.gradeLevel")}</b> ${formData.gradeLevel}
⏰ <b>${t("telegram.hoursPerDay")}</b> ${formData.hoursPerDay}
📅 <b>${t("telegram.daysPerWeek")}</b> ${formData.daysPerWeek}

${formData.specialNeeds ? `<b>${t("telegram.specialNeeds")}</b>\n${formData.specialNeeds}` : ""}

${selectedTutor ? `
<b>${t("telegram.tutorDetails")}</b>
📚 <b>${t("telegram.subjects")}</b> ${selectedTutor.subjects.join(", ")}
🗺️ <b>${t("telegram.areaCoverage")}</b> ${selectedTutor.areaCoverage.join(", ")}
` : ""}

<i>${t("telegram.submittedAt")} ${new Date().toLocaleString()}</i>
    `.trim();

    const success = await sendTelegramMessage(message);

    if (success) {
      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

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
                ) : submitStatus === "success" ? (
                  t("requestForm.buttons.sentSuccessfully")
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    {selectedTutor ? t("requestForm.buttons.submitRequest") : t("requestForm.buttons.sendMessage")}
                  </>
                )}
              </Button>
            </div>

            {submitStatus === "error" && (
              <div className="text-red-600 text-sm text-center">
                {t("requestForm.errors.failedToSend")}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestForm; 