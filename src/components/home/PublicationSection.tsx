import { motion } from "framer-motion";
import { BookOpen, Award, CheckCircle2, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "IEEE Xplore Indexed",
    description: "All accepted papers will be submitted for inclusion in IEEE Xplore digital library."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Blind Peer Review",
    description: "Each paper undergoes rigorous evaluation by 2-3 expert reviewers."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "30% Acceptance Rate",
    description: "High-quality standards ensuring only the best research gets published."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "IEEE Standards",
    description: "Papers follow IEEE 2-column format with maximum 6 pages."
  },
];

const PublicationSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Publication & IEEE Xplore"
          subtitle="Your research deserves global visibility through IEEE's prestigious digital library."
          className="[&_.section-title]:text-primary-foreground [&_.section-subtitle]:text-primary-foreground/80 [&_div:last-child]:bg-gold-500"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-primary-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* IEEE Logo Placeholder */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white/10 rounded-xl px-8 py-4 border border-white/20">
            <p className="text-gold-400 font-serif font-bold text-xl">IEEE</p>
            <p className="text-xs text-primary-foreground/60">Technical Co-Sponsor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationSection;
