// Schema.org Structured Data for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mountain & Fauna Lover",
  alternateName: "MFL Wildlife Photography",
  url: "https://mountainfaunalover.com",
  logo: "https://mountainfaunalover.com/logo.png",
  description: "Wildlife photography and nature documentation in Trentino Alps, Italy. Specializing in alpine fauna, deer photography, and e-bike mountain adventures.",
  founder: {
    "@type": "Person",
    name: "Simone Mattioli",
    jobTitle: "Wildlife Photographer",
    url: "https://mountainfaunalover.com/about"
  },
  sameAs: [
    "https://www.youtube.com/@mountainfaunalover",
    "https://www.instagram.com/mountain_fauna_lover",
    "https://www.tiktok.com/@mountain_fauna_lover"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rovereto",
    addressRegion: "Trentino-Alto Adige",
    addressCountry: "IT"
  },
  areaServed: {
    "@type": "Place",
    name: "Parco Nazionale dello Stelvio, Val di Rabbi, Trentino Alps"
  }
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Simone Mattioli",
  alternateName: "Mountain & Fauna Lover",
  url: "https://mountainfaunalover.com",
  image: "https://mountainfaunalover.com/simone-mattioli.jpg",
  jobTitle: "Wildlife Photographer, Nature Videographer, Mountain Guide & E-bike Tour Leader",
  description: "Professional wildlife photographer and outdoor guide specializing in Alpine fauna documentation, guided trekking, and e-bike tours in Trentino Alps. Expert in ethical wildlife observation, deer photography during rutting season (bramito), mountain trail guidance in Val di Rabbi and Parco Nazionale dello Stelvio, and sustainable e-bike/MTB tours throughout Val di Sole. Based in Rovereto, Trentino, Italy, with extensive fieldwork across Trentino's alpine regions.",
  worksFor: {
    "@type": "Organization",
    name: "Mountain & Fauna Lover"
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Università degli Studi di Trento",
    sameAs: "https://www.unitn.it"
  },
  knowsAbout: [
    "Wildlife Photography",
    "Alpine Fauna Behavior and Ecology",
    "Deer (Cervus elaphus) Photography and Observation",
    "Ibex (Capra ibex) Documentation",
    "Chamois (Rupicapra rupicapra) Tracking",
    "Nature Conservation Ethics",
    "Mountain Trekking and Trail Guidance",
    "E-bike Mountain Exploration and Tours",
    "MTB (Mountain Bike) Trail Navigation",
    "Val di Sole Trail Network and Routes",
    "Val di Rabbi Wilderness Trekking",
    "Parco Nazionale dello Stelvio Guided Tours",
    "Wildlife Tracking and Field Signs",
    "Ethical Wildlife Observation Practices",
    "Seasonal Animal Behavior Patterns",
    "Alpine Ecosystem Dynamics",
    "Professional Optics Usage (Swarovski Optik)",
    "Video Documentation for Nature Education",
    "Trentino Alps Geography and Access Points",
    "Sustainable Mountain Tourism",
    "Leave No Trace Principles",
    "Alpine Safety and Emergency Protocols",
    "E-bike Technical Knowledge (Euromix Motors)",
    "Forest Bathing and Nature Therapy",
    "Botanical Knowledge of Alpine Flora"
  ],
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Wildlife Photographer & Videographer",
      skills: [
        "Wildlife Photography",
        "Long Lens Telephoto Techniques (400-600mm)",
        "Animal Behavior Prediction and Tracking",
        "Fieldcraft and Ethical Stalking",
        "Video Production and Editing",
        "Nature Education Content Creation"
      ],
      occupationalCategory: "Photography and Videography"
    },
    {
      "@type": "Occupation",
      name: "Mountain Trekking Guide",
      skills: [
        "Alpine Trail Navigation and Route Planning",
        "Mountain Safety and First Aid",
        "Weather Assessment and Risk Management",
        "Group Leadership in Mountain Environments",
        "Flora and Fauna Interpretation",
        "Wilderness Survival Skills"
      ],
      occupationalCategory: "Outdoor Recreation and Tourism"
    },
    {
      "@type": "Occupation",
      name: "E-bike and Mountain Bike Tour Leader",
      skills: [
        "E-bike Technical Knowledge and Maintenance",
        "MTB Trail Selection and Difficulty Assessment",
        "Cycling Safety and Group Management",
        "E-bike Battery and Range Optimization",
        "Multi-day Tour Planning and Logistics",
        "Sustainable Tourism Practices"
      ],
      occupationalCategory: "Cycling Tourism and Adventure Sports"
    }
  ],
  homeLocation: {
    "@type": "Place",
    name: "Rovereto, Trentino-Alto Adige, Italy",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.8906,
      longitude: 11.0397
    }
  },
  sameAs: [
    "https://www.youtube.com/@mountainfaunalover",
    "https://www.instagram.com/mountain_fauna_lover",
    "https://www.tiktok.com/@mountain_fauna_lover"
  ],
  interactionStatistic: {
    "@type": "InteractionCounter",
    interactionType: "https://schema.org/FollowAction",
    userInteractionCount: "1000+"
  },
  award: [
    "Partner of Swarovski Optik",
    "Documented wildlife sightings in protected areas",
    "Educational content creator for Alpine fauna"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mountain & Fauna Lover",
  url: "https://mountainfaunalover.com",
  description: "Wildlife photography portfolio showcasing alpine fauna in Trentino, Italy. Deer, ibex, chamois, and mountain wildlife documentation.",
  publisher: {
    "@type": "Organization",
    name: "Mountain & Fauna Lover",
    logo: {
      "@type": "ImageObject",
      url: "https://mountainfaunalover.com/logo.png"
    }
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://mountainfaunalover.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  inLanguage: "it-IT"
};

export const createVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  embedUrl: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.name,
  description: video.description,
  thumbnailUrl: video.thumbnailUrl,
  uploadDate: video.uploadDate,
  duration: video.duration,
  embedUrl: video.embedUrl,
  contentUrl: video.embedUrl,
  publisher: {
    "@type": "Organization",
    name: "Mountain & Fauna Lover",
    logo: {
      "@type": "ImageObject",
      url: "https://mountainfaunalover.com/logo.png"
    }
  },
  creator: {
    "@type": "Person",
    name: "Simone Mattioli"
  }
});

export const createBlogPostSchema = (post: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  image: post.image,
  datePublished: post.datePublished,
  dateModified: post.dateModified,
  author: {
    "@type": "Person",
    name: post.author,
    url: "https://mountainfaunalover.com/about"
  },
  publisher: {
    "@type": "Organization",
    name: "Mountain & Fauna Lover",
    logo: {
      "@type": "ImageObject",
      url: "https://mountainfaunalover.com/logo.png"
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": post.url
  },
  articleSection: "Wildlife Photography",
  keywords: "wildlife photography, alpine fauna, nature conservation, Trentino",
  inLanguage: "it-IT"
});

export const createPlaceSchema = (place: {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  name: place.name,
  description: place.description,
  geo: {
    "@type": "GeoCoordinates",
    latitude: place.latitude,
    longitude: place.longitude
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: place.address,
    addressRegion: "Trentino-Alto Adige",
    addressCountry: "IT"
  }
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const createImageSchema = (image: {
  url: string;
  caption: string;
  width: number;
  height: number;
  author: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: image.url,
  caption: image.caption,
  width: image.width,
  height: image.height,
  creator: {
    "@type": "Person",
    name: image.author
  },
  copyrightHolder: {
    "@type": "Person",
    name: image.author
  },
  creditText: `Photo by ${image.author}`,
  acquireLicensePage: "https://mountainfaunalover.com/contact"
});

// FAQ Schema for common questions - Homepage
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dove posso vedere i cervi in Trentino?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I cervi possono essere avvistati nel Parco Nazionale dello Stelvio e in Val di Rabbi, specialmente durante il periodo del bramito (settembre-ottobre). Le zone migliori includono le aree boschive tra i 1200 e 1800 metri di altitudine. Le ore migliori sono all'alba (5:30-7:00) e al tramonto (18:00-20:00). È fondamentale mantenere silenzio e usare binocoli professionali per osservarli a distanza di sicurezza (minimo 100 metri)."
      }
    },
    {
      "@type": "Question",
      name: "Quando è il periodo del bramito dei cervi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il bramito dei cervi avviene principalmente tra metà settembre e metà ottobre nelle Alpi del Trentino. Il picco dell'attività si verifica solitamente tra il 20 settembre e il 10 ottobre. È il periodo dell'accoppiamento quando i maschi emettono i caratteristici richiami gutturali per attirare le femmine e intimidire i rivali. Durante questo periodo, i cervi sono più attivi e visibili, rendendolo il momento ideale per l'osservazione e la fotografia wildlife."
      }
    },
    {
      "@type": "Question",
      name: "Quale attrezzatura fotografica usare per wildlife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per fotografare fauna selvatica alpina serve: teleobiettivo da 400-600mm (es. Canon RF 100-500mm, Sony 200-600mm), binocoli professionali 10x42 o 12x50 (Swarovski Optik raccomandati), treppiede stabile in carbonio, corpo macchina con buon autofocus (es. Sony A7 IV, Canon R5), abbigliamento mimetico o colori neutri. Fondamentale: mantenere distanza di sicurezza (100m minimo per cervi), usare modalità silenziosa, evitare movimenti bruschi. Mai avvicinarsi durante il bramito o con cuccioli presenti."
      }
    },
    {
      "@type": "Question",
      name: "Quali animali si possono vedere nel Parco Nazionale dello Stelvio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nel Parco Nazionale dello Stelvio è possibile avvistare: cervi (abbondanti, specialmente durante il bramito), stambecchi alpini (su creste rocciose oltre i 2500m), camosci (pareti rocciose 1800-2800m), marmotte alpine (praterie alpine 1800-2600m), volpi rosse, aquile reali, gipeti, ermellini, lepri variabili. La biodiversità è massima tra luglio e ottobre. Primavera (maggio-giugno) ottima per cuccioli di stambecco e camoscio."
      }
    },
    {
      "@type": "Question",
      name: "Come raggiungere i punti di osservazione wildlife in Trentino?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I migliori punti di osservazione sono raggiungibili via: e-bike (ideale per sentieri forestali, autonomia 50-80km), trekking (sentieri CAI segnalati), auto fino ai parcheggi di fondovalle. Val di Rabbi: accesso da Malè, sentieri ben marcati. Parco Stelvio: da Pejo Fonti o Cogolo. Consigliato: partire molto presto (5:00-6:00), portare acqua e snack, scaricare mappe offline, verificare meteo. Le e-bike Euromix Motors permettono di coprire più terreno silenziosamente senza stancare."
      }
    },
    {
      "@type": "Question",
      name: "Offrite tour guidati di trekking in Val di Rabbi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, offriamo escursioni guidate di trekking personalizzate in Val di Rabbi, Val di Pejo, e Parco Nazionale dello Stelvio. Tour disponibili da maggio a ottobre, adatti a tutti i livelli (da family-friendly a escursioni avanzate). Ogni tour include: guida esperta locale, interpretazione naturalistica, osservazione fauna e flora, fotografia paesaggistica. Focus su sostenibilità, etica Leave No Trace, e sicurezza alpina. Durata: mezza giornata (4h), giornata intera (8h), o multi-day trekking. Gruppi piccoli (max 8 persone) per esperienza intima e minimo impatto. Contatto tramite social media o form sul sito."
      }
    },
    {
      "@type": "Question",
      name: "Tour in e-bike in Val di Sole: cosa aspettarsi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I tour guidati in e-bike esplorano i migliori sentieri della Val di Sole, Val di Rabbi, e accessi al Parco Stelvio. Utilizziamo e-bike Euromix Motors di alta qualità (autonomia 70-100km, motori potenti per salite alpine). Tour disponibili aprile-novembre. Tipologie: half-day (3-4h, 25-35km), full-day (6-7h, 50-70km), sunset ride (2-3h), multi-day adventures. Include: e-bike e casco, guida certificata, soste panoramiche, wildlife spotting opportunities, snack/pranzo (tour full-day). Percorsi adattati al livello: facile (sterrate pianeggianti), medio (salite moderate), avanzato (single track tecnici). Possibilità combinare e-bike con trekking brevi per raggiungere punti remoti. Età minima 14 anni, esperienza ciclistica base richiesta."
      }
    }
  ]
};

// FAQ Schema for Map Page
export const mapFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Come funziona la mappa degli avvistamenti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mappa interattiva mostra i punti GPS precisi dove sono stati documentati avvistamenti di fauna alpina in Trentino. Ogni marcatore è color-coded per specie: marrone per cervi, grigio per stambecchi, beige per camosci, giallo per marmotte, blu per aquile, rosso per volpi. Cliccando su un marcatore si visualizzano: specie scientifica, data avvistamento, descrizione dettagliata, condizioni di osservazione. Le coordinate sono leggermente approssimate (±500m) per proteggere le aree sensibili."
      }
    },
    {
      "@type": "Question",
      name: "Sono coordinate GPS reali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le coordinate GPS sono reali ma leggermente approssimate per ragioni di conservazione. Questo previene sovraffollamento turistico in aree sensibili, riduce disturbo alla fauna, protegge siti di nidificazione e riproduzione. L'approssimazione è di circa 300-500 metri - sufficiente per individuare l'area generale ma non il punto esatto. Questa pratica è standard in wildlife documentation etica."
      }
    }
  ]
};

// FAQ Schema for Partners Page
export const partnersFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Perché Swarovski Optik per il wildlife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swarovski Optik rappresenta l'eccellenza nell'ottica per osservazione naturalistica. I loro binocoli (serie EL, NL Pure) offrono: ottiche HD a cristalli fluorite, trasmissione luce >90%, messa a fuoco rapida sotto i 2m, costruzione impermeabile e antiurto, garanzia 30 anni. Per wildlife photography sono essenziali per: localizzare animali a distanza, studiare comportamento prima dello scatto, evitare avvicinamenti disturbanti. Modelli consigliati: 10x42 EL per versatilità, 12x50 NL Pure per distanze lunghe."
      }
    },
    {
      "@type": "Question",
      name: "Come posso collaborare con Mountain & Fauna Lover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Collaborazioni benvenute in: fornitura attrezzatura fotografica/outdoor (test e recensioni), sponsor per spedizioni fotografiche, partnership brand natura/conservazione, opportunità editoriali (riviste, documentari), workshop/uscite fotografiche guidate. Contatto: tramite canali social (YouTube, Instagram) o modulo contatti. Interesse particolare per: brand etici, focus su sostenibilità, valori di conservazione condivisi."
      }
    }
  ]
};

// HowTo Schema - Guide pratiche per LLM
export const howToWildlifePhotography = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Come Fotografare Fauna Selvatica in Trentino",
  description: "Guida completa per fotografare cervi, stambecchi e fauna alpina nel Parco Nazionale dello Stelvio e Val di Rabbi. Include attrezzatura, tecniche, luoghi e best practices.",
  image: "https://mountainfaunalover.com/guide-wildlife-photo.jpg",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "EUR",
    value: "0"
  },
  tool: [
    {
      "@type": "HowToTool",
      name: "Teleobiettivo 400-600mm"
    },
    {
      "@type": "HowToTool",
      name: "Binocoli professionali 10x42 o 12x50"
    },
    {
      "@type": "HowToTool",
      name: "Treppiede in carbonio"
    },
    {
      "@type": "HowToTool",
      name: "Abbigliamento mimetico o neutro"
    }
  ],
  supply: [
    {
      "@type": "HowToSupply",
      name: "Schede SD ad alta velocità"
    },
    {
      "@type": "HowToSupply",
      name: "Batterie di riserva"
    }
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pianificazione e Ricerca",
      text: "Studia le aree di avvistamento usando mappe topografiche. Identifica habitat idonei: boschi misti 1200-1800m per cervi, pareti rocciose 2500m+ per stambecchi. Verifica meteo e condizioni sentieri. Pianifica uscita all'alba (5:00-7:00) o tramonto (18:00-20:00).",
      url: "https://mountainfaunalover.com/map",
      image: "https://mountainfaunalover.com/step1-planning.jpg"
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Preparazione Attrezzatura",
      text: "Monta teleobiettivo (400-600mm) su corpo macchina con AF veloce. Configura: modalità burst (10+ fps), AF continuo (AI Servo/AF-C), ISO auto max 3200, stabilizzatore ON. Prepara treppiede con piastra quick-release. Porta binocoli per localizzazione preventiva.",
      image: "https://mountainfaunalover.com/step2-gear.jpg"
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Localizzazione con Binocoli",
      text: "Prima di avvicinarti, usa binocoli per scannerizzare l'area da posizione sicura. Cerca movimento, sagome, riflessi. Studia comportamento: alimentazione (meno vigile), allerta (orecchie dritte), fuga (code alzate). Identifica rotte di fuga e posizioni favorevoli per fotografia.",
      image: "https://mountainfaunalover.com/step3-spotting.jpg"
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Avvicinamento Etico",
      text: "Mantieni SEMPRE 100m+ distanza minima (200m+ durante bramito o con cuccioli). Avvicinati contro vento, movimenti lenti, evita contatto visivo diretto. Usa cover naturale (alberi, rocce). FERMA immediatamente se animale mostra stress: orecchie indietro, coda alzata, testa alta fissa su di te.",
      image: "https://mountainfaunalover.com/step4-approach.jpg"
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Fotografia e Composizione",
      text: "Stabilizza su treppiede o poggia. Focus su occhi (priorità AF tracking animale). Scatta in burst durante azione (movimento, vocalizzazioni). Composizioni: rule of thirds, spazio negativo nella direzione sguardo, ambiente contestuale. Cattura comportamento naturale, mai provocarlo.",
      image: "https://mountainfaunalover.com/step5-shoot.jpg"
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Comportamento Responsabile",
      text: "Non alimentare MAI animali selvatici. Non riprodurre richiami (disturba comportamento riproduttivo). Resta su sentieri marcati. Porta via tutti rifiuti. Condividi sightings responsabilmente (no coordinate precise pubbliche). Rispetta chiusure stagionali aree sensibili.",
      image: "https://mountainfaunalover.com/step6-ethics.jpg"
    }
  ],
  totalTime: "PT4H",
  yield: "Portfolio di foto wildlife etiche e di qualità professionale"
};

// Service Offerings - Trekking & E-bike Tours
export const trekkingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Guided Mountain Trekking Tours",
  name: "Trekking Guidato in Val di Rabbi e Parco Nazionale dello Stelvio",
  description: "Escursioni guidate di trekking nelle montagne del Trentino. Tour personalizzati in Val di Rabbi, Val di Pejo, e Parco Nazionale dello Stelvio con guida esperta locale. Focus su osservazione fauna, fotografia naturalistica, e immersione nella natura alpina. Percorsi adatti a tutti i livelli, da family-friendly a escursioni avanzate in alta quota.",
  provider: {
    "@type": "Person",
    name: "Simone Mattioli - Mountain & Fauna Lover"
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Val di Rabbi, Trentino"
    },
    {
      "@type": "Place",
      name: "Parco Nazionale dello Stelvio"
    },
    {
      "@type": "Place",
      name: "Val di Pejo, Trentino"
    }
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://mountainfaunalover.com",
    servicePhone: "+39-xxx-xxx-xxxx",
    availableLanguage: ["Italian", "English"]
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    availabilityStarts: "2024-05-01",
    availabilityEnds: "2024-10-31",
    priceRange: "€€"
  },
  additionalType: "TouristAttraction"
};

export const ebikeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "E-bike and Mountain Bike Guided Tours",
  name: "Tour Guidati in E-bike e MTB in Val di Sole",
  description: "Tour guidati in e-bike elettrica e mountain bike attraverso la Val di Sole, Val di Rabbi, e Parco Nazionale dello Stelvio. Esplorazione sostenibile dei sentieri alpini con e-bike Euromix Motors. Percorsi panoramici, forest trails, e accesso a punti di osservazione wildlife. Tour di mezza giornata, giornata intera, e multi-day disponibili. Adatto a ciclisti di tutti i livelli.",
  provider: {
    "@type": "Person",
    name: "Simone Mattioli - Mountain & Fauna Lover"
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Val di Sole, Trentino"
    },
    {
      "@type": "Place",
      name: "Val di Rabbi, Trentino"
    },
    {
      "@type": "Place",
      name: "Parco Nazionale dello Stelvio trails"
    }
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://mountainfaunalover.com",
    availableLanguage: ["Italian", "English"]
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    availabilityStarts: "2024-04-01",
    availabilityEnds: "2024-11-30",
    priceRange: "€€€"
  },
  additionalType: "SportsActivityLocation"
};

// Tourist Attractions - Val di Sole & Val di Rabbi
export const valDiSoleAttraction = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Val di Sole - E-bike and Trekking Paradise",
  description: "Val di Sole (Valley of the Sun) in Trentino offers exceptional e-bike trails, mountain biking routes, and trekking paths. Known for diverse wildlife, pristine alpine landscapes, and excellent cycling infrastructure. Gateway to Parco Nazionale dello Stelvio. Ideal for outdoor enthusiasts seeking sustainable mountain adventures.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.3167,
    longitude: 10.9167
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Val di Sole",
    addressRegion: "Trentino-Alto Adige",
    addressCountry: "IT"
  },
  publicAccess: true,
  isAccessibleForFree: true,
  touristType: [
    "Cyclists",
    "E-bike riders",
    "Mountain bikers",
    "Trekkers",
    "Nature photographers",
    "Wildlife enthusiasts"
  ]
};

export const valDiRabbiAttraction = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Val di Rabbi - Wilderness Trekking and Wildlife Observation",
  description: "Val di Rabbi, pristine valley in Trentino, offers exceptional wilderness trekking within Parco Nazionale dello Stelvio borders. Remote alpine environment perfect for wildlife observation including deer, ibex, chamois. Features unspoiled forests, alpine meadows, and waterfalls. Ideal for nature lovers seeking authentic mountain experiences away from crowds.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.3950,
    longitude: 10.8900
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Val di Rabbi",
    addressRegion: "Trentino-Alto Adige",
    addressCountry: "IT"
  },
  publicAccess: true,
  isAccessibleForFree: true,
  touristType: [
    "Trekkers",
    "Wildlife photographers",
    "Nature enthusiasts",
    "Eco-tourists"
  ],
  containedInPlace: {
    "@type": "Place",
    name: "Parco Nazionale dello Stelvio"
  }
};

export const howToFindDeerBramito = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Come Trovare i Cervi Durante il Bramito in Trentino",
  description: "Guida pratica per ascoltare e osservare il bramito dei cervi (rutting season) nel Parco Nazionale dello Stelvio e Val di Rabbi. Periodo: metà settembre - metà ottobre.",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "EUR",
    value: "0"
  },
  performTime: "PT2H",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Timing Ottimale",
      text: "Periodo: 15 settembre - 15 ottobre (picco 20 sett - 10 ott). Orari: alba (5:30-8:00) e tramonto (17:30-20:00). I maschi bramiscono più intensamente alle prime luci e crepuscolo. Giorni con alta pressione e poco vento sono ideali per acustica."
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Luoghi Migliori",
      text: "Parco Stelvio: Val di Pejo (1400-1700m), sentieri da Pejo Fonti. Val di Rabbi: zona Malga Stablasolo (1300-1600m). Cerca: boschi misti con radure aperte, versanti esposti sud/sud-est, presenza pascoli alternati a copertura arborea."
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Ascolto e Localizzazione",
      text: "Arriva 30min prima alba/tramonto. Posizionati in altura con buona acustica. Ascolta: richiami gutturali profondi (simili a ruggito basso), durata 2-5 secondi, ripetuti ogni 30-60 secondi. Triangola posizione usando orecchie + binocoli. Distanza percepita suono: 500m-1km in condizioni ottimali."
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Osservazione Sicura",
      text: "Non avvicinarti sotto 150m durante bramito (maschi aggressivi e meno consapevoli pericoli). Osserva da posizione elevata con binocoli 10x42 o 12x50. Cerca: maschi con harem (3-10 femmine), maschi giovani sfidanti al perimetro, combattimenti (rari ma spettacolari - palchi intrecciati, spinte)."
    }
  ]
};
