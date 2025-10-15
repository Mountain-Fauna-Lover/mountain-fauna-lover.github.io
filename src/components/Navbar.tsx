import { Link, useLocation } from "react-router-dom";
import { Mountain } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
    { path: "/links", label: "Links" },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur" />
            <Mountain className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10" />
            <span className="font-serif text-xl font-bold text-foreground relative z-10 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Mountain & Fauna Lover
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
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
                <span className="absolute inset-0 bg-primary/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
