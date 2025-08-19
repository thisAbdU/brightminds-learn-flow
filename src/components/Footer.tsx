import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Motto */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/978aaafd-1f38-4ca2-b83a-71df4a85768c.png" 
                alt="Bright Minds Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Bright Minds</span>
                <span className="text-sm opacity-90">Tutoring Center</span>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              "Where learning meets purpose!"
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-foreground hover:text-secondary transition-colors"
                aria-label="TikTok"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me/BrightMinds_tutor" 
                className="text-primary-foreground hover:text-secondary transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Find Your Instructor
                </Link>
              </li>
              <li>
                <Link to="/join-tutor" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Join as Tutor
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-90">One-on-One Tutoring</li>
              <li className="text-sm opacity-90">Group Tutoring Sessions</li>
              <li className="text-sm opacity-90">Subject-Specific Support</li>
              <li className="text-sm opacity-90">Exam Preparation</li>
              <li className="text-sm opacity-90">Special Needs Support</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
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
          <p className="text-sm opacity-75">
            © 2024 Bright Minds Tutoring Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;