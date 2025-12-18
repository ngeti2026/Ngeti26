import { Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommitteeMember {
  name: string;
  designation: string;
  affiliation: string;
  email?: string;
  phone?: string;
  description?: string;
  isIeee?: boolean;
  ieeeTitle?: string;
}

interface CommitteeCardProps {
  member: CommitteeMember;
  className?: string;
}

const CommitteeCard = ({ member, className }: CommitteeCardProps) => {
  return (
    <div className={cn(
      "bg-card border border-border rounded-xl p-6 card-hover",
      className
    )}>
      {/* Avatar Placeholder */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-navy-600 text-primary-foreground flex items-center justify-center text-2xl font-serif font-bold mx-auto mb-4">
        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
      </div>

      {/* IEEE Badge */}
      {member.isIeee && (
        <div className="flex justify-center mb-2">
          <span className="ieee-badge">
            {member.ieeeTitle || "IEEE Member"}
          </span>
        </div>
      )}

      {/* Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-accent font-medium mb-1">
          {member.designation}
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          {member.affiliation}
        </p>

        {member.description && (
          <p className="text-xs text-muted-foreground mb-3 italic">
            {member.description}
          </p>
        )}

        {/* Contact */}
        <div className="flex flex-col items-center gap-1 text-sm">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              {member.email}
            </a>
          )}
          {member.phone && (
            <a
              href={`tel:+91${member.phone}`}
              className="flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 {member.phone}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommitteeCard;
