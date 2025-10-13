import { Camera, Mountain, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Chi Sono
            </h1>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              Un appassionato di montagna e fauna selvatica che condivide la bellezza della natura.
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-8">
                La mia passione per la montagna e la fauna selvatica è nata durante le mie prime escursioni nelle Alpi. 
                Ogni uscita è un'opportunità per scoprire nuove meraviglie naturali e documentare momenti unici della vita selvatica.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <Camera className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Fotografia</h3>
                  <p className="text-muted-foreground text-sm">
                    Catturare l'essenza della natura attraverso l'obiettivo.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <Mountain className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Escursioni</h3>
                  <p className="text-muted-foreground text-sm">
                    Esplorare sentieri e vette alla ricerca di panorami mozzafiato.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <Heart className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Conservazione</h3>
                  <p className="text-muted-foreground text-sm">
                    Promuovere il rispetto e la protezione dell'ambiente naturale.
                  </p>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed mb-8">
                Attraverso i miei contenuti su YouTube, Instagram e TikTok, condivido le mie avventure e cerco di 
                sensibilizzare il pubblico sull'importanza della conservazione ambientale. Ogni incontro con la fauna 
                selvatica è un privilegio che documento con rispetto e ammirazione.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Il mio obiettivo è ispirare gli altri a connettersi con la natura, rispettare gli ecosistemi montani 
                e apprezzare la straordinaria biodiversità che ci circonda.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
