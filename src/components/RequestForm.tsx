import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Send, User, Phone, Mail, MapPin, BookOpen, Clock, Calendar, MessageSquare } from "lucide-react";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const gradeLevels = [
    "KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6",
    "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"
  ];

  const hoursOptions = ["1 hour", "2 hours", "3 hours", "4 hours", "5+ hours"];
  const daysOptions = ["1 day", "2 days", "3 days", "4 days", "5 days", "6 days", "7 days"];

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
    const requiredFields = ["parentFullName", "parentPhoneNumber", "email", "homeAddress", "gradeLevel", "hoursPerDay", "daysPerWeek"];
    return requiredFields.every(field => formData[field as keyof typeof formData].trim() !== "");
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
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    const message = `
<b>🎓 New Tutoring Request</b>

${selectedTutor ? `<b>Selected Tutor:</b> ${selectedTutor.name}` : "<b>General Contact Request</b>"}

<b>Parent Information:</b>
👤 <b>Full Name:</b> ${formData.parentFullName}
📱 <b>Phone:</b> ${formData.parentPhoneNumber}
📧 <b>Email:</b> ${formData.email}

<b>Location & Schedule:</b>
📍 <b>Home Address:</b> ${formData.homeAddress}
📚 <b>Grade Level:</b> ${formData.gradeLevel}
⏰ <b>Hours per Day:</b> ${formData.hoursPerDay}
📅 <b>Days per Week:</b> ${formData.daysPerWeek}

${formData.specialNeeds ? `<b>Special Needs:</b>\n${formData.specialNeeds}` : ""}

${selectedTutor ? `
<b>Tutor Details:</b>
📚 <b>Subjects:</b> ${selectedTutor.subjects.join(", ")}
🗺️ <b>Area Coverage:</b> ${selectedTutor.areaCoverage.join(", ")}
` : ""}

<i>Submitted at: ${new Date().toLocaleString()}</i>
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
            {selectedTutor ? "Choose Tutor Request" : "Contact Us Request"}
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
              <h3 className="font-semibold mb-2">Selected Tutor: {selectedTutor.name}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium">Subjects:</span>
                {selectedTutor.subjects.map((subject, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {subject}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium">Area Coverage:</span>
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
                  Parent Full Name *
                </Label>
                <Input
                  id="parentFullName"
                  value={formData.parentFullName}
                  onChange={(e) => handleInputChange("parentFullName", e.target.value)}
                  placeholder="Enter parent's full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentPhoneNumber" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Parent Phone Number *
                </Label>
                <Input
                  id="parentPhoneNumber"
                  value={formData.parentPhoneNumber}
                  onChange={(e) => handleInputChange("parentPhoneNumber", e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="homeAddress" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Home Address *
                </Label>
                <Input
                  id="homeAddress"
                  value={formData.homeAddress}
                  onChange={(e) => handleInputChange("homeAddress", e.target.value)}
                  placeholder="Enter specific location"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gradeLevel" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Grade Level *
                </Label>
                <Select
                  value={formData.gradeLevel}
                  onValueChange={(value) => handleInputChange("gradeLevel", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeLevels.map((grade) => (
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
                  Hours per Day *
                </Label>
                <Select
                  value={formData.hoursPerDay}
                  onValueChange={(value) => handleInputChange("hoursPerDay", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select hours" />
                  </SelectTrigger>
                  <SelectContent>
                    {hoursOptions.map((hours) => (
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
                  Days per Week *
                </Label>
                <Select
                  value={formData.daysPerWeek}
                  onValueChange={(value) => handleInputChange("daysPerWeek", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select days" />
                  </SelectTrigger>
                  <SelectContent>
                    {daysOptions.map((days) => (
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
                Special Needs (Optional)
              </Label>
              <Textarea
                id="specialNeeds"
                value={formData.specialNeeds}
                onChange={(e) => handleInputChange("specialNeeds", e.target.value)}
                placeholder="Describe any special requirements or needs..."
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 gradient-primary text-white hover:opacity-90 transition-opacity"
                disabled={isSubmitting || !validateForm()}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitStatus === "success" ? (
                  "Sent Successfully!"
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    {selectedTutor ? "Submit Request" : "Send Message"}
                  </>
                )}
              </Button>
            </div>

            {submitStatus === "error" && (
              <div className="text-red-600 text-sm text-center">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestForm; 