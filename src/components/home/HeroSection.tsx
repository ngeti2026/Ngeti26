import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { conferenceInfo } from "@/data/conferenceData";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center sm:bg-top bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20 -mt-8 sm:-mt-16">
        <div className="max-w-4xl mx-auto text-center">

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
          >
            <span className="font-serif">NGETI</span> <span className="font-sans">2026</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-2"
          >
            {conferenceInfo.fullName}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }} 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 text-white/90 text-sm sm:text-base"
          >
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-copper-400" />
              <span>{conferenceInfo.dates}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-copper-400" />
              <span className="text-center">{conferenceInfo.venue}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-copper-400" />
              <span>IEEE Kerala Section</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }} 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4 sm:px-0"
          >
            <Link to="/conference/call-for-papers" className="btn-hero-primary w-full sm:w-auto">
              Call for Papers
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/conference/important-dates" className="btn-hero-secondary w-full sm:w-auto">
              Important Dates
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
