import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { conferenceInfo } from "@/data/conferenceData";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Interdisciplinary Focus",
    description: "Bridging AI, computing, communication, power systems, and sustainable infrastructure."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation Hub",
    description: "Showcase cutting-edge research and breakthrough technologies shaping tomorrow."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Network",
    description: "Connect with researchers, academics, and industry experts from around the world."
  }
];

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title={
            <span>
              About NGETI <span className="font-sans">2026</span>
            </span>
          }
          subtitle="A premier international conference bringing together global experts to explore next-generation engineering innovations."
        />

        <div className="flex flex-col gap-8 md:gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-primary mb-3 sm:mb-4">
              Conference Theme
            </h3>
            <p className="text-base sm:text-lg text-accent font-medium mb-3 sm:mb-4 italic">
              "{conferenceInfo.theme}"
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-justify">
              The conference focuses on the evolution of advanced technologies reshaping the future
              of society. It highlights innovative solutions that enhance intelligence, safety, and
              environmental responsibility across all domains of science and engineering.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-justify">
              NGETI 2026 encourages researchers, academicians, industry experts, and innovators
              to present their ideas in artificial intelligence, smart infrastructure, communication
              systems, green energy, automation, and next-generation materials.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm sm:text-base"
            >
              Learn more about the conference
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {features.map((feature, index) => (
              <InfoCard
                key={index}
                icon={feature.icon}
                title={feature.title}
              >
                <p className="text-xs sm:text-sm">{feature.description}</p>
              </InfoCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
