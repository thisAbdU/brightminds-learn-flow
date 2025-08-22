import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useLocalizationContext } from "@/contexts/LocalizationContext";

const HeroSection = () => {
  const { t } = useLocalizationContext();

  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const backgroundImages = [
    "/image_1.png",
    "/image_2.png",
    "/image_3.png",
  ];

  // Preload images and track loading state
  useEffect(() => {
    const loadImages = async () => {
      const loadPromises = backgroundImages.map((imageSrc, index) => {
        return new Promise<boolean>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            resolve(true);
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${imageSrc}`);
            resolve(false);
          };
          img.src = imageSrc;
        });
      });

      await Promise.all(loadPromises);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isLoading, backgroundImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center z-30">
          <div className="text-center px-4">
            <Loader2 className="h-8 w-8 sm:h-12 sm:w-12 text-white animate-spin mx-auto mb-3 sm:mb-4" />
            <p className="text-white text-base sm:text-lg font-medium">Loading amazing content...</p>
          </div>
        </div>
      )}
      
      {/* Carousel Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImage && imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              filter: "brightness(0.7) contrast(1.1)"
            }}
          />
        ))}
      </div>
      
      {/* Addis Ababa City Map Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/addis-ababa-map.png')",
          filter: "grayscale(100%) brightness(0.8)"
        }}
      ></div>
      
      {/* Geometric Background Elements - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary-lighter rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-lighter rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-secondary/30 rotate-45"></div>
      </div>

      {/* Carousel Navigation Arrows - Responsive sizing and positioning */}
      {!isLoading && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </>
      )}

      {/* Carousel Dots - Responsive positioning and sizing */}
      {!isLoading && (
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content - Mobile optimized */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white drop-shadow-lg">
              {t("heroSection.title.a")}
              <span className="gradient-primary bg-clip-text text-transparent drop-shadow-none">
                {t("heroSection.title.b")}
              </span>{" "}
              {t("heroSection.title.c")}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-lg leading-relaxed">
              {t("heroSection.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 transition-opacity shadow-primary group text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                <Link 
                  to="/instructors" 
                  className="flex items-center justify-center"
                  onClick={() => {
                    // Scroll down a bit when the page loads
                    setTimeout(() => {
                      window.scrollTo(0, 150); // Scrolls down 100px
                    }, 100);
                  }}
                >
                  {t("heroSection.primaryCta")}
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Empty for balance - Hidden on mobile */}
          <div className="relative animate-slide-up order-1 lg:order-2 hidden lg:block">
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;