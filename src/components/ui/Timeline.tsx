import { Calendar, CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  label: string;
  date: string;
  status: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Icon */}
            <div className={cn(
              "relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
              item.status === "completed" 
                ? "bg-green-100 text-green-600" 
                : "bg-accent/10 text-accent"
            )}>
              {item.status === "completed" ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <Calendar className="w-5 h-5" />
              )}
            </div>

            {/* Content */}
            <div className="bg-card border border-border rounded-lg p-5 flex-1 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <div className="flex items-center gap-2 text-accent font-medium">
                  <Clock className="w-4 h-4" />
                  {item.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
