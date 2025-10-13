import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, Instagram } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";
import { Link } from "react-router-dom";
import heroMountain from "@/assets/hero-mountain.jpg";
import wildlifeDeer from "@/assets/wildlife-deer.jpg";
import wildlifeGoat from "@/assets/wildlife-goat.jpg";
import wildlifeFox from "@/assets/wildlife-fox.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroMountain} 
            alt="Majestic mountain landscape with wildlife" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
            Mountain & Fauna
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Esplorando la bellezza selvaggia delle Alpi
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              <Link to="/portfolio">
                Scopri il Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Work */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Lavori in Evidenza
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selezione delle mie fotografie più significative
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                <img 
                  src={wildlifeDeer} 
                  alt="Deer in misty forest"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Cervo nella Nebbia</h3>
              <p className="text-muted-foreground text-sm">Un incontro magico all'alba</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                <img 
                  src={wildlifeGoat} 
                  alt="Mountain goat on rocks"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Stambecco Alpino</h3>
              <p className="text-muted-foreground text-sm">Maestoso abitante delle vette</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                <img 
                  src={wildlifeFox} 
                  alt="Fox in alpine meadow"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Volpe nei Prati</h3>
              <p className="text-muted-foreground text-sm">La bellezza della primavera alpina</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Seguimi nelle Mie Avventure
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Condivido regolarmente contenuti su YouTube, Instagram e TikTok. 
              Unisciti alla community per non perdere nessuna avventura!
            </p>
            
            <div className="flex gap-6 justify-center">
              <a 
                href="https://www.youtube.com/@mountainfaunalover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background hover:bg-muted px-6 py-4 rounded-lg transition-colors border border-border"
              >
                <Youtube className="h-6 w-6 text-primary" />
                <span className="font-medium">YouTube</span>
              </a>
              
              <a 
                href="https://instagram.com/mountainfaunalover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background hover:bg-muted px-6 py-4 rounded-lg transition-colors border border-border"
              >
                <Instagram className="h-6 w-6 text-primary" />
                <span className="font-medium">Instagram</span>
              </a>
              
              <a 
                href="https://www.tiktok.com/@mountainfaunalover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background hover:bg-muted px-6 py-4 rounded-lg transition-colors border border-border"
              >
                <TbBrandTiktok className="h-6 w-6 text-primary" />
                <span className="font-medium">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
