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
  "image": "/og-image.png",
  "url": "https://mountainfaunalover.com",
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
  "url": "https://mountainfaunalover.com",
  "logo": "/og-image.png",
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
  "url": "https://mountainfaunalover.com",
  "publisher": {
    "@type": "Person",
    "name": "Simone Mattioli"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mountainfaunalover.com/blog?q={search_term_string}",
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
    "item": `https://mountainfaunalover.com${item.url}`
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

// FAQ Schema for wildlife photography and mountain activities
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dove avvistare cervi in Trentino?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I cervi sono comunemente avvistabili nel Parco Nazionale dello Stelvio, in Val di Rabbi, e nelle valli trentine durante l'alba e il tramonto. Il periodo del bramito (settembre-ottobre) è ideale per avvistamenti."
      }
    },
    {
      "@type": "Question",
      name: "Come fotografare la fauna selvatica alpina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per fotografare fauna selvatica come cervi, stambecchi e volpi è essenziale: muoversi all'alba o al tramonto, utilizzare teleobiettivi (300mm+), rispettare le distanze di sicurezza, e conoscere i comportamenti degli animali."
      }
    },
    {
      "@type": "Question",
      name: "Quando è il periodo migliore per avvistamenti in montagna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'autunno (settembre-novembre) è eccellente per il bramito dei cervi. La primavera (aprile-giugno) offre ottimi avvistamenti di stambecchi e marmotte. L'inverno permette di seguire le tracce sulla neve."
      }
    },
    {
      "@type": "Question",
      name: "Si può usare l'ebike per wildlife watching in Trentino?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, l'ebike è ottima per raggiungere zone remote in Trentino e nel Parco dello Stelvio. Permette di coprire più territorio silenziosamente, ideale per avvistamenti di fauna selvatica nelle prime ore del mattino."
      }
    },
    {
      "@type": "Question",
      name: "Quale attrezzatura serve per wildlife photography?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essenziali: teleobiettivo 300-600mm, treppiede stabile, binocolo o cannocchiale (come Swarovski Optik), abbigliamento mimetico, e conoscenza del territorio montano trentino."
      }
    }
  ]
};

// Place Schema for key locations
export const parcoStelvioPlaceData = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Parco Nazionale dello Stelvio",
  description: "Area protetta ideale per avvistamenti di cervi, stambecchi, camosci e altra fauna selvatica alpina. Habitat naturale per wildlife photography e escursioni in ebike.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.5167,
    longitude: 10.6000
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Trentino-Alto Adige",
    addressCountry: "IT"
  },
  touristType: "Wildlife enthusiasts, nature photographers, mountain lovers"
};

export const valDiRabbiPlaceData = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Val di Rabbi",
  description: "Valle alpina trentina nel Parco Nazionale dello Stelvio, rinomata per avvistamenti di cervi, stambecchi e fauna selvatica. Ideale per escursioni in ebike e fotografia naturalistica.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.4167,
    longitude: 10.8333
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Trentino-Alto Adige",
    addressLocality: "Val di Rabbi",
    addressCountry: "IT"
  },
  containedInPlace: {
    "@type": "Place",
    name: "Parco Nazionale dello Stelvio"
  }
};

// Article/Blog Post Schema
export const articleStructuredData = (article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.headline,
  "description": article.description,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author || "Simone Mattioli",
    "url": "https://mountainfaunalover.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mountain & Fauna Lover",
    "logo": {
      "@type": "ImageObject",
      "url": "/og-image.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  },
  "inLanguage": "it-IT",
  "keywords": "wildlife, cervi, fotografia naturalistica, trentino, parco stelvio"
});

// HowTo Schema for guides
export const howToStructuredData = (howto: {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string; image?: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howto.name,
  "description": howto.description,
  "image": howto.image,
  "totalTime": howto.totalTime,
  "step": howto.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    "image": step.image
  }))
});

// Review/Rating Schema
export const reviewStructuredData = (review: {
  itemName: string;
  reviewBody: string;
  ratingValue: number;
  author?: string;
  datePublished: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": review.itemName
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.ratingValue,
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": review.author || "Simone Mattioli"
  },
  "reviewBody": review.reviewBody,
  "datePublished": review.datePublished
});

// Course/Educational Content Schema
export const courseStructuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Wildlife Photography in the Alps",
  "description": "Learn how to photograph alpine wildlife including deer, ibex, and foxes in their natural habitat in the Italian Alps",
  "provider": {
    "@type": "Person",
    "name": "Simone Mattioli"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT10H"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0",
    "priceCurrency": "EUR"
  }
};
