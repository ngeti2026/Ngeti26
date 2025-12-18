import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { conferenceInfo, navLinks } from "@/data/conferenceData";

const Footer = () => {
  // Flatten navigation for footer
  const allLinks = navLinks.flatMap(link =>
    link.children ? link.children : [link]
  ).filter(link => link.href !== "#");

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Conference Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-copper-400 mb-3 sm:mb-4">
              <span className="font-serif">NGETI</span> <span className="font-sans">2026</span>
            </h3>
            <p className="text-xs sm:text-sm text-primary-foreground/75 leading-relaxed mb-3 sm:mb-4">
              {conferenceInfo.fullName}
            </p>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-primary-foreground/65">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{conferenceInfo.venue}, {conferenceInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5 text-copper-400">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {allLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-primary-foreground/65 hover:text-copper-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5 text-copper-400">Resources</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {allLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-primary-foreground/65 hover:text-copper-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://vjcet.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary-foreground/65 hover:text-copper-400 transition-colors"
                >
                  Institution Website
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5 text-copper-400">Contact</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-primary-foreground/65">
                <Mail className="w-4 h-4 flex-shrink-0 text-copper-400" />
                <a href="mailto:ngeti2026@gmail.com" className="hover:text-copper-400 transition-colors break-all">
                  ngeti2026@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-primary-foreground/65">
                <Phone className="w-4 h-4 flex-shrink-0 text-copper-400" />
                <a href="tel:+917500247859" className="hover:text-copper-400 transition-colors">
                  +91 7500247859
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>



      {/* Copyright */}
      <div className="bg-teal-950 py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-[10px] sm:text-xs text-primary-foreground/40 text-center">
            © 2026 NGETI. All rights reserved. | Organized by Viswajyothi College of Engineering and Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
