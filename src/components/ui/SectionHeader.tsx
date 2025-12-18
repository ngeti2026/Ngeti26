import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ title, subtitle, centered = true, className }: SectionHeaderProps) => {
  return (
    <div className={cn("mb-8 sm:mb-10 md:mb-12", centered && "text-center", className)}>
      <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">{title}</h2>
      {subtitle && (
        <p className={cn("section-subtitle text-sm sm:text-base md:text-lg px-2 sm:px-0", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
      <div className={cn("mt-3 sm:mt-4 h-1 w-16 sm:w-20 bg-accent rounded-full", centered && "mx-auto")} />
    </div>
  );
};

export default SectionHeader;
