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
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title={
              <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-teal-950">
                About NGETI <span className="text-copper-400">2026</span>
              </span>
            }
            subtitle="Bringing together global experts to explore next-generation innovations."
            className="mb-16 text-center md:text-left"
          />

          <div className="flex flex-col gap-16 items-center">
            {/* Content - Modern Clean Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10 max-w-4xl mx-auto"
            >
              <div className="relative text-center py-8">
                <p className="text-xl sm:text-2xl md:text-3xl text-teal-900 font-serif italic leading-relaxed relative z-10 px-4 max-w-3xl mx-auto">
                  {conferenceInfo.theme}
                </p>
              </div>

              <div className="text-muted-foreground text-lg leading-loose text-justify space-y-6">
                <p>
                  The conference focuses on the evolution of advanced technologies reshaping the future
                  of society. It highlights innovative solutions that enhance intelligence, safety, and
                  environmental responsibility across all domains of science and engineering.
                </p>
                <p>
                  NGETI 2026 encourages researchers, academicians, industry experts, and innovators
                  to present their ideas in artificial intelligence, smart infrastructure, communication
                  systems, green energy, automation, and next-generation materials.
                </p>
              </div>

              <div className="pt-2 text-center md:text-left">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-copper-600 font-bold tracking-wide uppercase text-sm border-b-2 border-transparent hover:border-copper-600 transition-all pb-1"
                >
                  More about conference
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Feature Cards - Minimalist Outlines - 3 Column Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 w-full"
            >
              {features.map((feature, index) => (
                <InfoCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  className="bg-transparent border border-gray-200 rounded-lg border-l-4 border-l-copper-400 p-6 hover:shadow-md transition-all duration-300 hover:border-gray-300 group h-full"
                >
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">{feature.description}</p>
                </InfoCard>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
