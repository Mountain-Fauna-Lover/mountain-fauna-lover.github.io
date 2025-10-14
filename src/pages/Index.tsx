import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, Instagram, Play } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";
import { Link } from "react-router-dom";
import heroMountain from "@/assets/hero-mountain.jpg";
import SEO from "@/components/SEO";
import { websiteStructuredData, organizationStructuredData, personStructuredData, faqStructuredData, parcoStelvioPlaceData, valDiRabbiPlaceData, videoObjectStructuredData } from "@/data/structuredData";

const featuredVideos = [
  {
    id: 1,
    videoId: "AlRfDBPqy_I",
    title: "La Prima Volta dei Cervi 🦌",
    description: "Una reazione emozionante all'incontro con i cervi in natura"
  },
  {
    id: 2,
    videoId: "wQrx2422wD8",
    title: "Esplorazione Alpina",
    description: "Avventure e scoperte tra le montagne"
  },
  {
    id: 3,
    videoId: "VqqxMAQJ0oo",
    title: "Fauna Selvatica",
    description: "Incontri ravvicinati con gli animali delle Alpi"
  },
];

const Index = () => {
  const videoStructuredDataList = featuredVideos.map(video => 
    videoObjectStructuredData({
      name: video.title,
      description: video.description,
      thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
      uploadDate: "2024-01-01",
      embedUrl: `https://www.youtube.com/embed/${video.videoId}`
    })
  );

  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [websiteStructuredData, organizationStructuredData, personStructuredData, faqStructuredData, parcoStelvioPlaceData, valDiRabbiPlaceData, ...videoStructuredDataList]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Mountain & Fauna Lover - Avvistamenti Cervi Parco Nazionale Stelvio e Val di Rabbi"
        description="Simone Mattioli documenta avvistamenti di cervi, stambecchi e fauna selvatica nel Parco Nazionale dello Stelvio e Val di Rabbi. Fotografia naturalistica, escursioni in ebike in Trentino, video su YouTube del bramito dei cervi e wildlife delle Alpi. Content creator specializzato in natura alpina trentina."
        keywords="avvistamenti cervi trentino, parco nazionale dello stelvio fauna, val di rabbi wildlife, bramito cervi alpi, fotografia naturalistica trentino, stambecchi parco stelvio, volpi alpine, ebike montagna trentino, escursioni wildlife trentino, cervi val di rabbi, fauna selvatica alpi trentine, dove vedere cervi trentino, wildlife photography stelvio, camosci trentino, marmotte alpine, aquila reale trentino, Simone Mattioli fotografo, avvistamenti fauna alpina, trekking wildlife trentino, natura parco stelvio, rovereto montagna, swarovski optik wildlife, video cervi youtube, bramito settembre trentino, ebike parco stelvio, conservazione fauna alpina, animali selvatici trentino, fotografia cervi, capriolo trentino"
        canonical="/"
        structuredData={combinedStructuredData}
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroMountain} 
            alt="Panorama maestoso delle Alpi trentine con montagne innevate e fauna selvatica alpina - Mountain & Fauna Lover" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
            Mountain & Fauna Lover
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
            {featuredVideos.map((video) => (
              <div key={video.id} className="group">
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[16/9] mb-4 bg-black">
                    <img 
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={`${video.title} - Video di fauna selvatica e natura alpina di Simone Mattioli`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-primary/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Youtube className="h-6 w-6 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{video.description}</p>
                </a>
              </div>
            ))}
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
