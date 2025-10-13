import { Youtube, Instagram, Mountain } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="font-serif text-lg font-bold">Mountain & Fauna</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Esplorando la bellezza della montagna e della fauna selvatica attraverso l'obiettivo.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Seguimi</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.youtube.com/@mountainfaunalover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/mountainfaunalover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@mountainfaunalover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <TbBrandTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contatti</h3>
            <p className="text-muted-foreground text-sm">
              Per collaborazioni e informazioni, contattami sui social.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mountain & Fauna Lover. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
