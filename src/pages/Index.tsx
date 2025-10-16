import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, Instagram, Play, Eye } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";
import { Link } from "react-router-dom";
import heroMountain from "@/assets/hero-mountain.jpg";
import SEO from "@/components/SEO";
import { StatCard, StatCardError } from "@/components/StatCard";
import { useYouTubeStats } from "@/hooks/useYouTubeStats";
import { useInstagramStats } from "@/hooks/useInstagramStats";
import { manualStats } from "@/config/stats";
import { formatNumber } from "@/lib/formatNumber";
import { websiteStructuredData, organizationStructuredData, personStructuredData, faqStructuredData, parcoStelvioPlaceData, valDiRabbiPlaceData, videoObjectStructuredData } from "@/data/structuredData";

const featuredVideos = [
  {
    id: 1,
    videoId: "AlRfDBPqy_I",
    title: "La Prima Volta dei Cervi 🦌",
    description: "Una reazione emozionante della mia ragazza al primo incontro con i cervi"
  },
  {
    id: 2,
    videoId: "wQrx2422wD8",
    title: "Evento Euromix Motors in OFF-ROAD",
    description: "Avventure con i DEFENDER in un campo di fuori strada"
  },
  {
    id: 3,
    videoId: "VqqxMAQJ0oo",
    title: "Il BRAMITO Del Cervo Maschio",
    description: "Incontro ravvicinato con un cervo maschio da 13 punte"
  },
];

const Index = () => {
  // Fetch YouTube stats dynamically
  const { data: youtubeStats, isLoading: youtubeLoading, isError: youtubeError } = useYouTubeStats();

  // Fetch Instagram stats dynamically
  const { data: instagramStats, isLoading: instagramLoading, isError: instagramError } = useInstagramStats();

  const videoStructuredDataList = featuredVideos.map(video => 
    videoObjectStructuredData({
      name: video.title,
      description: video.description,
      thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
      uploadDate: "2024-01-01",
      embedUrl: `https://www.youtube.com/embed/${video.videoId}`
    })
  );

  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Mountain & Fauna Lover - Homepage",
    "description": "Esplora la fauna selvatica delle Alpi trentine attraverso fotografie, video e guide complete",
    "url": "https://mountainfaunalover.com",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": featuredVideos.length,
      "itemListElement": featuredVideos.map((video, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.youtube.com/watch?v=${video.videoId}`
      }))
    }
  };

  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      websiteStructuredData, 
      organizationStructuredData, 
      personStructuredData, 
      faqStructuredData, 
      parcoStelvioPlaceData, 
      valDiRabbiPlaceData, 
      homePageStructuredData,
      ...videoStructuredDataList
    ]
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
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in" itemProp="headline">
            Mountain & Fauna Lover
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" itemProp="description">
            Da un racconto di Mattioli Simone
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

      {/* Statistics Section - Dynamic with YouTube API */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* YouTube Subscribers - Dynamic */}
              {youtubeError ? (
                <StatCardError
                  icon={<Youtube className="h-8 w-8 mx-auto" />}
                  label="Iscritti YouTube"
                  error="API non configurata"
                  color="red"
                />
              ) : (
                <StatCard
                  icon={<Youtube className="h-8 w-8 mx-auto" />}
                  value={youtubeLoading ? '...' : formatNumber(youtubeStats?.subscribers || 0)}
                  label="Iscritti YouTube"
                  color="red"
                  isLoading={youtubeLoading}
                />
              )}

              {/* Videos Published - Dynamic */}
              {youtubeError ? (
                <StatCardError
                  icon={<Play className="h-8 w-8 mx-auto" />}
                  label="Video Pubblicati"
                  color="primary"
                />
              ) : (
                <StatCard
                  icon={<Play className="h-8 w-8 mx-auto" />}
                  value={youtubeLoading ? '...' : youtubeStats?.videoCount || 0}
                  label="Video Pubblicati"
                  color="primary"
                  isLoading={youtubeLoading}
                />
              )}

              {/* YouTube Total Views - Dynamic */}
              {youtubeError ? (
                <StatCardError
                  icon={<Eye className="h-8 w-8 mx-auto" />}
                  label="Visualizzazioni Youtube"
                  color="amber"
                />
              ) : (
                <StatCard
                  icon={<Eye className="h-8 w-8 mx-auto" />}
                  value={youtubeLoading ? '...' : formatNumber(youtubeStats?.viewCount || 0)}
                  label="Visualizzazioni Youtube"
                  color="amber"
                  isLoading={youtubeLoading}
                />
              )}

              {/* Instagram Followers - Dynamic */}
              {instagramError ? (
                <StatCardError
                  icon={<Instagram className="h-8 w-8 mx-auto" />}
                  label="Follower Instagram"
                  error="API non configurata"
                  color="pink"
                />
              ) : (
                <StatCard
                  icon={<Instagram className="h-8 w-8 mx-auto" />}
                  value={instagramLoading ? '...' : formatNumber(instagramStats?.followers || 0)}
                  label="Follower Instagram"
                  color="pink"
                  isLoading={instagramLoading}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-background" itemScope itemType="https://schema.org/CreativeWork">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" itemProp="name">
              Contenuti in Evidenza
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" itemProp="description">
              Dei consigli su cosa ti può interessare
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" itemScope itemType="https://schema.org/ItemList">
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
              Rimani Aggiornato Sulle Mie Avventure
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Unisciti alla community per non perdere nessuna avventura!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center max-w-2xl mx-auto">
              <a
                href="https://www.youtube.com/@mountainfaunalover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-background hover:bg-muted px-6 py-4 rounded-lg transition-colors border border-border"
              >
                <Youtube className="h-6 w-6 text-primary" />
                <span className="font-medium">YouTube</span>
              </a>

              <a
                href="https://instagram.com/mountainfaunalover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-background hover:bg-muted px-6 py-4 rounded-lg transition-colors border border-border"
              >
                <Instagram className="h-6 w-6 text-primary" />
                <span className="font-medium">Instagram</span>
              </a>

              <a
                href="https://www.tiktok.com/@mountainfaunalover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-background hover:bg-muted px-6 py-4 rounded-lg transition-colors border border-border"
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
