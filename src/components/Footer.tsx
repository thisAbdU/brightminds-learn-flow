import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useLocalizationContext } from "@/contexts/LocalizationContext";

const Footer = () => {
  const { t } = useLocalizationContext();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Motto */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/bright_minds_logo.svg" 
                alt="Bright Minds Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">{t("navbar.brandName")}</span>
                <span className="text-sm text-muted-foreground">{t("navbar.tagline")}</span>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              {t("footer.motto")}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-foreground hover:text-secondary transition-colors"
                aria-label={t("footer.tiktok")}
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me/BrightMinds_tutor" 
                className="text-primary-foreground hover:text-secondary transition-colors"
                aria-label={t("footer.telegram")}
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  {t("navigation.aboutUs")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  {t("navigation.services")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/instructors" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  {t("footer.findYourInstructor")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  {t("footer.termsAndConditions")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t("footer.ourServices")}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  {t("footer.oneOnOneTutoring")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  {t("footer.groupTutoringSessions")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  {t("footer.subjectSpecificSupport")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  {t("footer.examPreparation")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t("footer.contactUs")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <div className="text-sm opacity-90">
                  <div>0963472211</div>
                  <div>0701903594</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <a 
                  href="mailto:brightminds161@gmail.com" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  brightminds161@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-secondary" />
                <a 
                  href="https://t.me/BrightMinds_tutor" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                >
                  @BrightMinds_tutor
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Link 
              to="/terms" 
              className="text-sm opacity-75 hover:opacity-100 hover:text-secondary transition-colors"
            >
              {t("footer.termsAndConditions")}
            </Link>
            <span className="text-sm opacity-50">|</span>
            <Link 
              to="/about" 
              className="text-sm opacity-75 hover:opacity-100 hover:text-secondary transition-colors"
            >
              {t("navigation.aboutUs")}
            </Link>
            <span className="text-sm opacity-50">|</span>
            <Link 
              to="/services" 
              className="text-sm opacity-75 hover:opacity-100 hover:text-secondary transition-colors"
            >
              {t("navigation.services")}
            </Link>
          </div>
          <p className="text-sm opacity-75">
            {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;