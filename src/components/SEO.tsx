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
}

const SEO = ({
  title = "Mountain & Fauna Lover - Fotografia Naturalistica Alpi Trentine",
  description = "Simone Mattioli, fotografo naturalistico e content creator trentino. Scopri le meraviglie della fauna selvatica alpina: cervi, stambecchi, volpi. Video su YouTube, Instagram e TikTok.",
  keywords = "fotografia naturalistica, fauna selvatica, alpi trentine, cervi, stambecchi, volpi, wildlife photography, montagna, Simone Mattioli, Rovereto, Trentino Alto Adige, Swarovski Optik, YouTube natura, conservazione ambientale",
  canonical,
  ogType = "website",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
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
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="IT-TN" />
      <meta name="geo.placename" content="Rovereto, Trentino-Alto Adige" />
      <meta name="geo.position" content="45.890422;11.040194" />
      <meta name="ICBM" content="45.890422, 11.040194" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#2D5016" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
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
