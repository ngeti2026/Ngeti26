import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

const InfoCard = ({ icon, title, children, className }: InfoCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-xl border border-border p-4 sm:p-5 md:p-6 card-hover",
      className
    )}>
      {icon && (
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3 sm:mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">{title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
};

export default InfoCard;
