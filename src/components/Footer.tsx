import { Youtube, Instagram, Mountain, Mail } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-card via-card to-muted/20 border-t border-border/50 mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-all" />
                <Mountain className="h-6 w-6 text-primary relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-serif text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Mountain & Fauna Lover
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Esplorando la bellezza della montagna e della fauna selvatica attraverso l'obiettivo.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Seguimi
            </h3>
            <div className="flex gap-4">
              <a 
                href="https://www.youtube.com/@mountainfaunalover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
                aria-label="YouTube"
              >
                <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-muted/30 p-2.5 rounded-lg group-hover:bg-red-500/10 transition-all">
                  <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-red-500 transition-colors" />
                </div>
              </a>
              <a 
                href="https://instagram.com/mountainfaunalover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-pink-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-muted/30 p-2.5 rounded-lg group-hover:bg-pink-500/10 transition-all">
                  <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-pink-500 transition-colors" />
                </div>
              </a>
              <a 
                href="https://www.tiktok.com/@mountainfaunalover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
                aria-label="TikTok"
              >
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-muted/30 p-2.5 rounded-lg group-hover:bg-primary/10 transition-all">
                  <TbBrandTiktok className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contatti
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Per collaborazioni e informazioni:
            </p>
            <a
              href="mailto:deerfaunalover@gmail.com"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="group-hover:underline">deerfaunalover@gmail.com</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mountain & Fauna Lover. 
            <span className="inline-block ml-1 bg-gradient-to-r from-primary/60 to-accent/60 bg-clip-text text-transparent">
              Tutti i diritti riservati.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
