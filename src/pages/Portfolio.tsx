import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import wildlifeDeer from "@/assets/wildlife-deer.jpg";
import wildlifeGoat from "@/assets/wildlife-goat.jpg";
import wildlifeFox from "@/assets/wildlife-fox.jpg";

const portfolioItems = [
  {
    id: 1,
    image: wildlifeDeer,
    title: "Cervo nella Nebbia",
    description: "Un cervo maestoso emerge dalla nebbia mattutina in una radura alpina.",
    category: "Fauna"
  },
  {
    id: 2,
    image: wildlifeGoat,
    title: "Stambecco Alpino",
    description: "Uno stambecco si staglia contro il cielo azzurro su una cresta rocciosa.",
    category: "Fauna"
  },
  {
    id: 3,
    image: wildlifeFox,
    title: "Volpe nei Prati",
    description: "Una volpe rossa tra i fiori di un prato alpino in primavera.",
    category: "Fauna"
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
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
                  <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
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
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
