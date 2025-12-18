import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/data/conferenceData";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileConferenceOpen, setMobileConferenceOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                <span className="font-serif">NGETI</span> <span className="font-sans">2026</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.children ? (
                // Dropdown for Conference
                <div key={link.label} className="relative group">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      location.pathname.startsWith('/conference')
                        ? "text-accent bg-accent/10"
                        : "text-foreground/70 hover:text-primary hover:bg-secondary"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                    <div className="bg-card rounded-xl shadow-lg border border-border py-2 min-w-[220px] overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors",
                            isActive(child.href)
                              ? "text-accent bg-accent/10 font-medium"
                              : "text-foreground/70 hover:text-primary hover:bg-secondary"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive(link.href) && link.href !== "/"
                      ? "text-accent bg-accent/10"
                      : link.href === "/" && location.pathname === "/"
                        ? "text-accent bg-accent/10"
                        : "text-foreground/70 hover:text-primary hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-card border-t border-border",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileConferenceOpen(!mobileConferenceOpen)}
                  className={cn(
                    "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname.startsWith('/conference')
                      ? "text-accent bg-accent/10"
                      : "text-foreground/70 hover:text-primary hover:bg-secondary"
                  )}
                >
                  {link.label}
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    mobileConferenceOpen && "rotate-180"
                  )} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-200",
                  mobileConferenceOpen ? "max-h-96" : "max-h-0"
                )}>
                  <div className="pl-4 py-2 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => {
                          setIsOpen(false);
                          setMobileConferenceOpen(false);
                        }}
                        className={cn(
                          "block px-4 py-2.5 rounded-lg text-sm transition-colors",
                          isActive(child.href)
                            ? "text-accent bg-accent/10 font-medium"
                            : "text-foreground/70 hover:text-primary hover:bg-secondary"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive(link.href) && link.href !== "/"
                    ? "text-accent bg-accent/10"
                    : link.href === "/" && location.pathname === "/"
                      ? "text-accent bg-accent/10"
                      : "text-foreground/70 hover:text-primary hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
