import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Code, Radio, Zap, Atom, Building2 } from "lucide-react";
import { tracks } from "@/data/conferenceData";
import SectionHeader from "@/components/ui/SectionHeader";

const trackIcons = [Cpu, Code, Radio, Zap, Atom, Building2];

const TracksOverview = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Conference Tracks"
          subtitle="Six comprehensive tracks covering the breadth of next-generation engineering and technology innovations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => {
            const Icon = trackIcons[index];
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                      Track {track.id}
                    </span>
                    <h3 className="text-base font-semibold text-foreground mt-1 leading-tight">
                      {track.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {track.topics.length} research areas
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/call-for-papers"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Tracks & Topics
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TracksOverview;
