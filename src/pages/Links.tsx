import { Mail, Youtube, Instagram, ExternalLink, Sparkles } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";
import { Button } from "@/components/ui/button";

const Links = () => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@mountainfaunalover",
      icon: Youtube,
      description: "Video delle mie avventure in montagna",
      gradient: "from-red-500/20 to-red-600/20"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/mountainfaunalover",
      icon: Instagram,
      description: "Foto e storie quotidiane",
      gradient: "from-pink-500/20 to-purple-600/20"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@mountainfaunalover",
      icon: TbBrandTiktok,
      description: "Contenuti brevi e dinamici",
      gradient: "from-primary/20 to-accent/20"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-24 pb-16">
      <main className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header with decorative elements */}
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-3xl rounded-full" />
            <Sparkles className="h-8 w-8 text-primary mx-auto mb-4 animate-pulse" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4">
              Tutti i Collegamenti
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Seguimi sui social e contattami per collaborazioni
            </p>
          </div>

          {/* Email Contact Card - Enhanced */}
          <div className="relative group mb-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-card border border-border rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-bold mb-2">Contattami via Email</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Per collaborazioni, domande o consigli
              </p>
              <a 
                href="mailto:deerfaunalover@gmail.com"
                className="inline-block"
              >
                <Button size="lg" className="relative overflow-hidden group/btn">
                  <span className="relative z-10">deerfaunalover@gmail.com</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </Button>
              </a>
            </div>
          </div>

          {/* Social Links - Enhanced */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-center mb-6 text-muted-foreground">Social Media</h2>
            
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/30">
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-muted/50 p-3 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                          <IconComponent className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-0.5 group-hover:text-primary transition-colors duration-300">{link.name}</h3>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Additional Info - Enhanced */}
          <div className="mt-12 p-8 bg-gradient-to-br from-muted/30 to-muted/50 rounded-2xl text-center border border-border/50 backdrop-blur-sm">
            <p className="text-muted-foreground leading-relaxed">
              Sono sempre felice di connettermi con altri appassionati di montagna e natura. 
              <span className="block mt-2 text-primary font-medium">Non esitare a contattarmi per qualsiasi cosa!</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Links;
