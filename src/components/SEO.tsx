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
  title = "Mountain & Fauna Lover - Avvistamenti Cervi Parco Stelvio Val di Rabbi Trentino",
  description = "Simone Mattioli documenta avvistamenti di cervi, stambecchi e fauna selvatica nel Parco Nazionale dello Stelvio e Val di Rabbi. Wildlife photography, ebike in montagna, video bramito cervi su YouTube.",
  keywords = "avvistamenti cervi trentino, parco nazionale stelvio fauna, val di rabbi wildlife, bramito cervi alpi, fotografia naturalistica trentino, stambecchi parco stelvio, ebike montagna trentino, volpi alpine, cervi val di rabbi, fauna selvatica alpi trentine, wildlife photography stelvio, Simone Mattioli fotografo, trekking wildlife trentino, natura parco stelvio, conservazione fauna alpina, camosci trentino, marmotte alpine, aquila reale trentino, dove vedere cervi trentino, video cervi youtube",
  canonical,
  ogType = "website",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
  article,
}: SEOProps) => {
  const siteUrl = "https://mountainfaunalover.lovable.app";
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
