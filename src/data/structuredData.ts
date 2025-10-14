export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Simone Mattioli",
  "givenName": "Simone",
  "familyName": "Mattioli",
  "birthDate": "2003-07-28",
  "birthPlace": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rovereto",
      "addressRegion": "Trentino-Alto Adige",
      "addressCountry": "IT"
    }
  },
  "jobTitle": ["Junior Software Engineer", "Content Creator", "Wildlife Photographer"],
  "description": "Junior Software Engineer e fotografo naturalistico specializzato nella fauna selvatica alpina. Creatore di contenuti su YouTube, Instagram e TikTok dedicati alla montagna e agli animali delle Alpi trentine.",
  "image": "https://lovable.dev/opengraph-image-p98pqg.png",
  "url": "https://mountainfaunalover.lovable.app",
  "sameAs": [
    "https://www.youtube.com/@mountainfaunalover",
    "https://instagram.com/mountainfaunalover",
    "https://www.tiktok.com/@mountainfaunalover",
    "https://www.linkedin.com/in/simonemattioli2003/"
  ],
  "alumniOf": {
    "@type": "Organization",
    "name": "Università degli Studi di Trento"
  },
  "knowsAbout": [
    "Wildlife Photography",
    "Nature Conservation",
    "Alpine Fauna",
    "Software Engineering",
    "Content Creation",
    "Videography"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Wildlife Photographer & Content Creator",
    "skills": "Fotografia naturalistica, videografia, osservazione fauna selvatica, software engineering"
  }
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mountain & Fauna Lover",
  "description": "Piattaforma di fotografia naturalistica e contenuti educativi sulla fauna selvatica alpina e la conservazione ambientale.",
  "url": "https://mountainfaunalover.lovable.app",
  "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
  "founder": {
    "@type": "Person",
    "name": "Simone Mattioli"
  },
  "sameAs": [
    "https://www.youtube.com/@mountainfaunalover",
    "https://instagram.com/mountainfaunalover",
    "https://www.tiktok.com/@mountainfaunalover"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Creator",
    "areaServed": "IT",
    "availableLanguage": "Italian"
  }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mountain & Fauna Lover",
  "description": "Fotografia naturalistica e contenuti sulla fauna selvatica delle Alpi trentine",
  "url": "https://mountainfaunalover.lovable.app",
  "publisher": {
    "@type": "Person",
    "name": "Simone Mattioli"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mountainfaunalover.lovable.app/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://mountainfaunalover.lovable.app${item.url}`
  }))
});

export const videoObjectStructuredData = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  embedUrl: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.name,
  "description": video.description,
  "thumbnailUrl": video.thumbnailUrl,
  "uploadDate": video.uploadDate,
  "duration": video.duration || "PT5M",
  "embedUrl": video.embedUrl,
  "publisher": {
    "@type": "Person",
    "name": "Simone Mattioli"
  }
});

export const imageObjectStructuredData = (image: {
  name: string;
  description: string;
  url: string;
  author: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "name": image.name,
  "description": image.description,
  "url": image.url,
  "author": {
    "@type": "Person",
    "name": image.author
  },
  "creator": {
    "@type": "Person",
    "name": image.author
  },
  "copyrightHolder": {
    "@type": "Person",
    "name": image.author
  }
});
