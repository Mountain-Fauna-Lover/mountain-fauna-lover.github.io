import { Link, useLocation } from "react-router-dom";
import { Mountain } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Mountain className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            <span className="font-serif text-xl font-bold text-foreground">
              Mountain & Fauna
            </span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/portfolio") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/blog") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
