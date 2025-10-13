import { Mail, Youtube, Instagram, ExternalLink } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";
import { Button } from "@/components/ui/button";

const Links = () => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@mountainfaunalover",
      icon: Youtube,
      description: "Video delle mie avventure in montagna",
      color: "hover:text-red-600"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/mountainfaunalover",
      icon: Instagram,
      description: "Foto e storie quotidiane",
      color: "hover:text-pink-600"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@mountainfaunalover",
      icon: TbBrandTiktok,
      description: "Contenuti brevi e dinamici",
      color: "hover:text-gray-900"
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <main className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Tutti i Collegamenti
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Seguimi sui social e contattami per collaborazioni, consigli o qualsiasi domanda
            </p>
          </div>

          {/* Email Contact Card */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8 text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold mb-2">Contattami via Email</h2>
            <p className="text-muted-foreground mb-4">
              Per collaborazioni, domande o consigli
            </p>
            <a 
              href="mailto:deerfaunalover@gmail.com"
              className="inline-block"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                deerfaunalover@gmail.com
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-center mb-6">Social Media</h2>
            
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`transition-colors ${link.color}`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{link.name}</h3>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
            <p className="text-muted-foreground">
              Sono sempre felice di connettermi con altri appassionati di montagna e natura. 
              Non esitare a contattarmi per qualsiasi cosa!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Links;
