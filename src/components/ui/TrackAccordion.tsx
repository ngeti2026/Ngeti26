import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { tracks } from "@/data/conferenceData";
import { Cpu, Code, Radio, Zap, Atom, Building2 } from "lucide-react";

const trackIcons = [Cpu, Code, Radio, Zap, Atom, Building2];

const TrackAccordion = () => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {tracks.map((track, index) => {
        const Icon = trackIcons[index];
        return (
          <AccordionItem
            key={track.id}
            value={`track-${track.id}`}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/50 transition-colors">
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-accent font-semibold uppercase tracking-wide">
                    Track {track.id}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {track.title}
                  </h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {track.topics.map((topic, topicIndex) => (
                  <li
                    key={topicIndex}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default TrackAccordion;
