import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  structuredData?: object;
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEO = ({
  title = "Mountain & Fauna Lover - Wildlife, Trekking e E-bike Tours in Val di Sole, Val di Rabbi e Parco Stelvio",
  description = "Simone Mattioli: wildlife photography, trekking guidato e tour in e-bike nel Parco Nazionale dello Stelvio, Val di Rabbi e Val di Sole. Avvistamenti cervi, stambecchi, escursioni alpine e mountain bike tours in Trentino. Esperienze natura autentiche con guida locale esperta.",
  keywords = "trekking val di rabbi, tour ebike val di sole, escursioni guidate parco stelvio, mountain bike trentino, avvistamenti cervi trentino, wildlife photography trentino, guida naturalistica val di sole, tour guidati montagna trentino, ebike parco stelvio, trekking guidato val di rabbi, mtb val di sole, cervi bramito trentino, escursioni natura trentino, fotografia naturalistica trentino, tour sostenibili trentino, avventura alpina val di sole, esperienze outdoor trentino, guida montana certificata, wildlife tour trentino, bike tour val di sole, sentieri ebike trentino, Simone Mattioli guida, trekking fauna selvatica, tour fotografici natura, escursioni wildlife parco stelvio",
  canonical,
  ogType = "website",
  ogImage = "/og-image.png",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
  article,
}: SEOProps) => {
  const siteUrl = "https://mountainfaunalover.com";
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullTitle = title.includes("Mountain & Fauna Lover") ? title : `${title} | Mountain & Fauna Lover`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="it" />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Simone Mattioli" />
      <meta name="creator" content="Simone Mattioli" />
      <meta name="publisher" content="Mountain & Fauna Lover" />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {!noindex && <meta name="robots" content="index,follow" />}
      <meta name="googlebot" content="index,follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content="Mountain & Fauna Lover" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@mountainfaunalover" />
      
      {/* Article Tags (for blog posts) */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author || "Simone Mattioli"} />
          <meta property="article:section" content={article.section || "Wildlife Photography"} />
          {article.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="IT-TN" />
      <meta name="geo.placename" content="Parco Nazionale dello Stelvio, Val di Rabbi, Rovereto, Trentino-Alto Adige" />
      <meta name="geo.position" content="46.5167;10.6000" />
      <meta name="ICBM" content="46.5167, 10.6000" />
      
      {/* Location-specific tags */}
      <meta name="coverage" content="Parco Nazionale dello Stelvio, Val di Rabbi, Trentino-Alto Adige, Alpi Orientali" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="wildlife enthusiasts, nature photographers, mountain hikers, ebike riders, Trentino tourists" />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="it" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://img.youtube.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.youtube.com" />
      <link rel="dns-prefetch" href="https://www.instagram.com" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#2D5016" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />

      {/* Rating for content */}
      <meta name="rating" content="general" />
      <meta name="audience" content="all" />

      {/* LLM-Specific Optimization Meta Tags */}
      <meta name="subject" content="Wildlife Photography, Nature Conservation, Alpine Fauna Documentation, Mountain Trekking, E-bike Tours" />
      <meta name="topic" content="Wildlife photography, guided trekking, and e-bike tours in Trentino Alps: Parco Nazionale dello Stelvio, Val di Rabbi, Val di Sole. Documenting deer, ibex, chamois, and alpine fauna while offering outdoor mountain experiences." />
      <meta name="summary" content="Professional wildlife photography portfolio and outdoor guide services by Simone Mattioli in Trentino. Specializing in wildlife photography (deer rutting season, ibex), guided trekking in Val di Rabbi and Parco Stelvio, e-bike and MTB tours in Val di Sole. Ethical nature experiences in Italian Alps." />
      <meta name="classification" content="Photography, Nature, Wildlife, Conservation, Outdoor Adventure, Alpine Tourism, Trekking Guide, E-bike Tours, Mountain Biking" />
      <meta name="category" content="Wildlife Photography Portfolio" />
      <meta name="url" content={fullUrl} />
      <meta name="identifier-URL" content={fullUrl} />
      <meta name="directory" content="submission" />
      <meta name="pagename" content={fullTitle} />
      <meta name="abstract" content={description} />

      {/* Expertise & Authority Signals (E-E-A-T) */}
      <meta name="expertise" content="Wildlife Photography, Nature Conservation, Alpine Fauna Behavior, Mountain Trekking Guide, E-bike Tour Leader, MTB Mountain Routes, Val di Sole Trail Knowledge, Val di Rabbi Wilderness Guidance" />
      <meta name="experience" content="Extensive fieldwork in Parco Nazionale dello Stelvio, Val di Rabbi, and Val di Sole. Documented wildlife sightings across multiple seasons. Expert knowledge of mountain trails, e-bike routes, and alpine ecosystems. Partnerships with Swarovski Optik and Euromix Motors for sustainable mountain exploration." />
      <meta name="authority" content="Published wildlife photographer, YouTube content creator, certified e-bike guide, partner of Swarovski Optik and Euromix Motors. Local expert for Trentino Alps outdoor activities including trekking, wildlife observation, and cycling tours." />
      <meta name="trustworthiness" content="Ethical wildlife photography and guiding practices, maintains safe distances from wildlife, promotes Leave No Trace principles, certified safety protocols for mountain activities, transparent documentation methods, sustainable tourism advocate" />

      {/* Content Quality Signals for LLMs */}
      <meta name="content-type" content="Educational Wildlife Documentation, Outdoor Adventure Guide Services, Alpine Tourism Information" />
      <meta name="educational-level" content="General Public to Wildlife Enthusiasts and Outdoor Adventurers" />
      <meta name="intended-audience" content="Nature photographers, wildlife enthusiasts, trekking enthusiasts, e-bike riders, mountain bikers, hikers, tourists visiting Trentino Alps (Val di Sole, Val di Rabbi, Parco Stelvio), families seeking outdoor adventures, conservation advocates, eco-tourism travelers" />
      <meta name="primary-purpose" content="Document alpine wildlife, provide guided trekking experiences in Val di Rabbi and Parco Stelvio, offer e-bike and MTB tours in Val di Sole, educate about ethical wildlife observation, promote sustainable mountain tourism and nature conservation" />

      {/* Temporal and Geographic Context */}
      <meta name="temporal-coverage" content="2024-Present, Year-round outdoor activities. Wildlife photography focus September-October (deer rutting). Trekking season May-October. E-bike tours April-November." />
      <meta name="geographic-coverage" content="Trentino-Alto Adige, Italy; Parco Nazionale dello Stelvio; Val di Rabbi; Val di Sole; Val di Pejo; Malè; Cogolo; Pejo Fonti; Dolomites; Italian Alps; Alpine trails and e-bike routes" />
      <meta name="location" content="Val di Sole, Val di Rabbi, Parco Nazionale dello Stelvio, Trentino, Italy" />
      <meta name="service-area" content="Val di Sole, Val di Rabbi, Val di Pejo, Parco Nazionale dello Stelvio, Trentino Alps" />

      {/* Content Freshness Signals */}
      <meta name="revisit-after" content="7 days" />
      <meta name="content-update-frequency" content="Weekly - New wildlife sightings and photography added regularly" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
