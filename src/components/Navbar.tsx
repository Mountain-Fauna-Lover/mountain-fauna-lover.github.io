import { Link, useLocation } from "react-router-dom";
import { Mountain, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
    { path: "/map", label: "Mappa" },
    { path: "/partners", label: "Partner" },
    { path: "/links", label: "Links" },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-xl border-b border-border shadow-md">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur" />
              <Mountain className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10" />
              <span className="font-serif text-base sm:text-xl font-bold text-foreground relative z-10 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text hidden sm:inline">
                Mountain & Fauna Lover
              </span>
              <span className="font-serif text-base font-bold text-foreground relative z-10 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text sm:hidden">
                MFL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                  )}
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 animate-fade-in">
          {/* Backdrop - Dark overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content - High contrast dropdown */}
          <div className="relative top-[57px] sm:top-[65px] bg-background shadow-2xl border-b-4 border-primary">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-semibold py-4 px-6 rounded-xl transition-all duration-200 animate-fade-in ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "bg-muted/50 text-foreground hover:bg-primary/20 hover:text-primary hover:scale-105 hover:shadow-md"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
