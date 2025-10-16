import { Calendar, MapPin, ArrowRight, Filter, Building2 } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { breadcrumbStructuredData } from "@/data/structuredData";
import { portfolioVideos } from "@/data/portfolioVideos";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tutti");
  const [selectedPartner, setSelectedPartner] = useState<string>("Tutti");

  const breadcrumb = breadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" }
  ]);

  const categories = ["Tutti", ...Array.from(new Set(portfolioVideos.map(v => v.category)))];
  const partners = ["Tutti", ...Array.from(new Set(portfolioVideos.map(v => v.partner).filter(Boolean))) as string[]];

  const filteredVideos = portfolioVideos.filter(video => {
    const matchesCategory = selectedCategory === "Tutti" || video.category === selectedCategory;
    const matchesPartner = selectedPartner === "Tutti" || video.partner === selectedPartner;
    return matchesCategory && matchesPartner;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <SEO
        title="Portfolio Video Collaborazioni - Progetti Wildlife e Natura in Trentino"
        description="Portfolio completo dei video realizzati in collaborazione con aziende leader del settore outdoor. Progetti di wildlife photography, avventure in e-bike, documentari naturalistici nel Parco Nazionale dello Stelvio e Val di Rabbi con Swarovski Optik e altri partner."
        keywords="portfolio video collaborazioni, progetti wildlife aziende, video natura sponsor, collaborazioni outdoor brand, Swarovski Optik partnership, video bramito cervi, progetti ebike montagna, documentari natura trentino, portfolio creator wildlife, collaborazioni brand outdoor"
        canonical="/portfolio"
        structuredData={breadcrumb}
      />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }]} />
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-3xl rounded-full" />
              <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent mb-6">
                Portfolio Video
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Progetti e collaborazioni video per raccontare la bellezza della natura alpina.
              </p>
            </div>

            {/* Category Filters */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filtra per categoria:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="transition-all duration-300"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Partner Filters */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filtra per partner:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {partners.map((partner) => (
                  <Button
                    key={partner}
                    variant={selectedPartner === partner ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPartner(partner)}
                    className="transition-all duration-300"
                  >
                    {partner}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredVideos.map((video, index) => (
                <article
                  key={video.id}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:border-primary/30">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                          alt={`${video.title} - Video collaborazione ${video.partner || 'portfolio'} - Simone Mattioli Wildlife`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-primary/90 rounded-full p-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="text-xs font-medium bg-red-600 text-white px-3 py-1.5 rounded-full shadow-lg">
                            VIDEO
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative p-6">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className="text-xs font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-3 py-1.5 rounded-full border border-primary/20">
                            {video.category}
                          </span>
                          {video.partner && (
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Building2 className="h-3.5 w-3.5" />
                              <span className="font-medium">{video.partner}</span>
                            </div>
                          )}
                        </div>

                        <h2 className="font-serif text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {video.title}
                        </h2>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                          {video.excerpt}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 flex-wrap">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{video.date}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{video.location}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {video.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-muted/50 text-muted-foreground px-2.5 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                          {video.tags.length > 3 && (
                            <span className="text-xs text-muted-foreground px-2.5 py-1">
                              +{video.tags.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all duration-300">
                          <span>Guarda il video</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
