import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  return (
    <div className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Paper Submission Deadline:</span>
          <span className="font-bold">31 July 2026</span>
          <span className="mx-2 hidden sm:inline">|</span>
          <Link 
            to="/important-dates" 
            className="underline underline-offset-2 hover:no-underline"
          >
            View all dates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
