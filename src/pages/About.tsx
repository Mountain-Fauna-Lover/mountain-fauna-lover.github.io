import { Camera, Mountain, Heart } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import SEO from "@/components/SEO";
import { personStructuredData, breadcrumbStructuredData } from "@/data/structuredData";

const About = () => {
  const breadcrumb = breadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Chi Sono", url: "/about" }
  ]);

  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [personStructuredData, breadcrumb]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chi Sono - Simone Mattioli"
        description="Simone Mattioli, nato a Rovereto nel 2003, è un Junior Software Engineer e fotografo naturalistico specializzato nella fauna alpina. Collabora con Swarovski Optik e condivide contenuti su YouTube, Instagram e TikTok."
        keywords="Simone Mattioli, fotografo naturalistico, wildlife photographer, Rovereto, Trentino, fauna alpina, cervi, stambecchi, Swarovski Optik, content creator, software engineer, conservazione ambientale"
        canonical="/about"
        ogType="profile"
        structuredData={combinedStructuredData}
      />
      {/* Hero Image Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={aboutHero} 
          alt="Simone Mattioli - Mountain & Fauna Lover nelle Alpi trentine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
              Chi Sono
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
              Simone Mattioli - Fondatore di Mountain & Fauna Lover
            </p>
          </div>
        </div>
      </div>
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Junior Software Engineer | Content Creator | Appassionato di montagna e fauna selvatica
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-8">
                Sono Simone Mattioli, nato il 28 luglio 2003 a Rovereto, in Trentino-Alto Adige. 
                La mia passione per la montagna e la fauna selvatica è nata crescendo tra le meravigliose 
                Alpi trentine, dove ho sviluppato un profondo rispetto e amore per la natura.
              </p>
              
              <p className="text-foreground leading-relaxed mb-8">
                Sono un Junior Software Engineer e Content Creator, e ho unito la mia passione per la 
                tecnologia con l'amore per la natura creando Mountain & Fauna Lover. Attraverso questo 
                progetto, condivido le mie avventure in montagna e gli incontri con la fauna selvatica 
                su YouTube, Instagram e TikTok.
              </p>
              
              <p className="text-foreground leading-relaxed mb-8">
                Collaboro con Swarovski Optik, utilizzando la loro eccellente attrezzatura ottica per 
                catturare momenti unici della fauna alpina. Ogni uscita è un'opportunità per scoprire 
                nuove meraviglie naturali e documentare la vita selvatica nel suo habitat naturale.
              </p>
              
              <h2 className="font-serif text-3xl font-bold mb-6 mt-16">La Mia Missione</h2>
              <p className="text-foreground leading-relaxed mb-8">
                Mountain & Fauna Lover nasce da un sogno: condividere la straordinaria bellezza della fauna 
                selvatica alpina con il mondo intero. La mia missione è duplice - da un lato, voglio documentare 
                e celebrare la ricchezza della biodiversità delle nostre Alpi, mostrando attraverso foto e video 
                quanto sia prezioso e fragile questo ecosistema. Dall'altro, desidero ispirare le persone a 
                sviluppare un rapporto più profondo e rispettoso con la natura.
              </p>
              
              <p className="text-foreground leading-relaxed mb-8">
                Ogni contenuto che creo è pensato per educare e sensibilizzare, ma anche per emozionare. 
                Voglio che chi guarda i miei video o le mie foto possa sentire lo stesso brivido che provo io 
                quando incontro un cervo nella nebbia o osservo uno stambecco su una cresta rocciosa. È questa 
                emozione che ci spinge a proteggere ciò che amiamo.
              </p>
              
              <h2 className="font-serif text-3xl font-bold mb-6 mt-12">Una Passione che Richiede Equilibrio</h2>
              <p className="text-foreground leading-relaxed mb-8">
                Conciliare la mia vita da Junior Software Engineer, la creazione di contenuti e le uscite in 
                montagna non è sempre facile. Ogni alba in montagna significa svegliarsi alle 4:00, ogni video 
                richiede ore di editing dopo una giornata di lavoro, ogni foto è il risultato di pazienza, 
                attesa e a volte, chilometri di cammino.
              </p>
              
              <p className="text-foreground leading-relaxed mb-8">
                Ma è proprio questa sfida quotidiana che rende tutto più prezioso. Spero che possiate apprezzare 
                non solo i contenuti finali, ma anche lo sforzo e la dedizione che ci stanno dietro. Ogni video, 
                ogni fotografia rappresenta l'equilibrio tra il mio lavoro, la mia passione per la tecnologia e 
                l'amore profondo per la natura. È un equilibrio delicato, ma è ciò che mi rende chi sono.
              </p>
              
              <p className="text-foreground leading-relaxed mb-12">
                Quando vedete un video alle 6 del mattino su YouTube, sappiate che probabilmente sono già in 
                montagna da due ore. Quando leggete un articolo, sappiate che è stato scritto di sera, dopo il 
                lavoro, con la stessa passione con cui scrivo codice di giorno. Questo progetto è la mia vita, 
                ed è un onore poterlo condividere con voi.
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
                Come Software Engineer, porto anche un approccio tecnologico alla fotografia naturalistica 
                e alla creazione di contenuti. Utilizzo droni (DJI Mavic Mini), smartphone di ultima 
                generazione (iPhone 13 Pro Max) e ottiche professionali Swarovski per catturare immagini 
                e video di alta qualità.
              </p>
              
              <h3 className="font-serif text-2xl font-bold mb-4 mt-12">La Mia Attrezzatura</h3>
              <ul className="list-disc list-inside space-y-2 mb-8 text-foreground">
                <li>DJI Mavic Mini - per riprese aeree spettacolari</li>
                <li>iPhone 13 Pro Max - fotografia e video mobile</li>
                <li>Swarovski Optik Module 115 - per osservazioni dettagliate</li>
                <li>Swarovski Optik Binocoli 10x42 - per avvistamenti a lunga distanza</li>
              </ul>
              
              <p className="text-foreground leading-relaxed mb-8">
                Attraverso i miei contenuti, voglio ispirare gli altri a connettersi con la natura, 
                rispettare gli ecosistemi montani e apprezzare la straordinaria biodiversità delle Alpi. 
                Ogni video, ogni foto, racconta una storia di bellezza, rispetto e meraviglia per il mondo naturale.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Il mio obiettivo è sensibilizzare il pubblico sull'importanza della conservazione ambientale 
                e mostrare che la montagna e la fauna selvatica sono tesori da proteggere per le generazioni future.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
