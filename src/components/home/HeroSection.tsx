import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { conferenceInfo } from "@/data/conferenceData";

// Assets
import heroBg from "@/assets/hero-bg.jpg";
import slide1 from "@/assets/hero-slide-1.png";
import slide2 from "@/assets/hero-slide-2.png";
import slide3 from "@/assets/hero-slide-3.png";

const slides = [heroBg, slide1, slide2, slide3];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-end pb-20 overflow-hidden">
      {/* Background Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        />
      </AnimatePresence>

      {/* Glassmorphic Overlay - Unified Tint - Reduced Opacity */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

      {/* Gradient for Text Readability - Reduced Opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mr-auto"> {/* Align Left/Bottom */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Title - Slightly Reduced Size */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              <span className="font-serif block text-white">NGETI</span>
              <span className="font-sans text-copper-400 block -mt-2 sm:-mt-4">2026</span>
            </h1>

            {/* Full Name Title - Further Reduced Size */}
            <p className="text-sm sm:text-base md:text-lg text-white mb-6 max-w-2xl font-bold leading-relaxed drop-shadow-md border-l-4 border-copper-500 pl-3 bg-black/20 backdrop-blur-sm py-1.5 rounded-r-lg">
              {conferenceInfo.fullName}
            </p>
          </motion.div>

          {/* Details - Smaller Text, Padding, and Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-8 text-white text-xs sm:text-sm font-semibold tracking-wide"
          >
            <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10 shadow-sm">
              <div className="p-1 bg-copper-500 rounded-full shadow-inner">
                <Calendar className="w-3 h-3 text-white" />
              </div>
              <span className="drop-shadow-sm">{conferenceInfo.dates}</span>
            </div>

            <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10 shadow-sm">
              <div className="p-1 bg-copper-500 rounded-full shadow-inner">
                <MapPin className="w-3 h-3 text-white" />
              </div>
              <span className="drop-shadow-sm">{conferenceInfo.venue}</span>
            </div>

            <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10 shadow-sm">
              <div className="p-1 bg-copper-500 rounded-full shadow-inner">
                <Users className="w-3 h-3 text-white" />
              </div>
              <span className="drop-shadow-sm">IEEE Kerala Section</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/conference/call-for-papers" className="btn-hero-primary px-6 py-3 text-base font-bold shadow-lg hover:shadow-copper-500/30 hover:-translate-y-0.5 transition-all border border-transparent">
              Call for Papers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/conference/important-dates" className="px-6 py-3 text-base font-bold text-white border border-white/40 rounded-lg hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm shadow-md hover:shadow-white/10">
              Important Dates
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
