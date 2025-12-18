import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { importantDates } from "@/data/conferenceData";
import SectionHeader from "@/components/ui/SectionHeader";

const DatesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Important Dates"
          subtitle="Mark your calendar with these key deadlines for NGETI 2026."
        />

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
                <span className="text-accent font-bold">{item.date}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/important-dates"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              View detailed timeline
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatesSection;
