import wildlifeDeer from "@/assets/wildlife-deer.jpg";
import wildlifeGoat from "@/assets/wildlife-goat.jpg";
import wildlifeFox from "@/assets/wildlife-fox.jpg";
import { Play } from "lucide-react";
import SEO from "@/components/SEO";
import { breadcrumbStructuredData, imageObjectStructuredData } from "@/data/structuredData";

const portfolioItems = [
  {
    id: 1,
    type: "image",
    image: wildlifeDeer,
    title: "Cervo nella Nebbia",
    description: "Un cervo maestoso emerge dalla nebbia mattutina in una radura alpina.",
    category: "Fauna"
  },
  {
    id: 2,
    type: "image",
    image: wildlifeGoat,
    title: "Stambecco Alpino",
    description: "Uno stambecco si staglia contro il cielo azzurro su una cresta rocciosa.",
    category: "Fauna"
  },
  {
    id: 3,
    type: "image",
    image: wildlifeFox,
    title: "Volpe nei Prati",
    description: "Una volpe rossa tra i fiori di un prato alpino in primavera.",
    category: "Fauna"
  },
  {
    id: 4,
    type: "video",
    videoId: "AlRfDBPqy_I",
    title: "La Prima Volta dei Cervi 🦌",
    description: "Una reazione emozionante all'incontro con i cervi in natura - un momento magico e indimenticabile.",
    category: "Video"
  },
  {
    id: 5,
    type: "video",
    videoId: "wQrx2422wD8",
    title: "Esplorazione Alpina",
    description: "Avventure e scoperte tra le montagne, alla ricerca della bellezza selvaggia.",
    category: "Video"
  },
  {
    id: 6,
    type: "video",
    videoId: "VqqxMAQJ0oo",
    title: "Fauna Selvatica",
    description: "Incontri ravvicinati con gli animali delle Alpi nel loro habitat naturale.",
    category: "Video"
  },
];

const Portfolio = () => {
  const breadcrumb = breadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Portfolio - Fotografie e Video di Fauna Selvatica Alpina"
        description="Galleria fotografica e video di fauna selvatica delle Alpi: cervi, stambecchi, volpi e altri animali alpini immortalati da Simone Mattioli. Scopri la bellezza della natura trentina."
        keywords="portfolio fotografia naturalistica, foto fauna selvatica, video animali alpini, cervi alpi, stambecchi trentino, volpi alpine, galleria fotografica natura, wildlife portfolio"
        canonical="/portfolio"
        structuredData={breadcrumb}
      />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              Una selezione dei miei migliori scatti dalla montagna.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <div 
                  key={item.id}
                  className="group cursor-pointer"
                >
                  {item.type === "image" ? (
                    <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                      <img 
                        src={item.image} 
                        alt={`${item.title} - Fotografia di ${item.description.toLowerCase()} nelle Alpi trentine di Simone Mattioli`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <span className="text-xs font-medium bg-primary/80 px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={`https://www.youtube.com/watch?v=${item.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative overflow-hidden rounded-lg aspect-[16/9] mb-4 bg-black">
                        <img 
                          src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                          alt={`${item.title} - ${item.description} - Video YouTube di Simone Mattioli`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <div className="bg-primary/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                            <Play className="h-8 w-8 text-white fill-white" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="text-xs font-medium bg-red-600 text-white px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </a>
                  )}
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
