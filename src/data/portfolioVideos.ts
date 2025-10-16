export interface PortfolioVideo {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  videoId: string;
  date: string;
  category: string;
  partner?: string;
  location: string;
  tags: string[];
}

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: "cervi-prima-volta",
    title: "La Prima Volta dei Cervi 🦌",
    excerpt: "Una reazione emozionante all'incontro con i cervi in natura - un momento magico e indimenticabile durante il periodo del bramito.",
    description: "In questo video racconto la mia prima esperienza ravvicinata con i cervi durante il bramito nel Parco Nazionale dello Stelvio. Un'emozione incredibile che ha segnato l'inizio del mio percorso nella fotografia naturalistica. Grazie all'uso di ottiche professionali Swarovski Optik, ho potuto osservare e documentare questi magnifici animali nel loro habitat naturale senza disturbarli.",
    videoId: "AlRfDBPqy_I",
    date: "15 Settembre 2024",
    category: "Fauna Selvatica",
    partner: "Swarovski Optik",
    location: "Parco Nazionale dello Stelvio, Trentino",
    tags: ["cervi", "bramito", "wildlife", "parco stelvio"]
  },
  {
    id: "avventura-ebike-ollin",
    title: "E-bike Adventure: Esplorando Sentieri Nascosti",
    excerpt: "Un'avventura in e-bike alla scoperta di sentieri poco battuti e panorami mozzafiato delle Dolomiti.",
    description: "In collaborazione con ollin, ho testato le loro e-bike in un percorso impegnativo tra le Dolomiti. Il video documenta una giornata completa di esplorazione su sentieri tecnici, mostrando come le e-bike moderne permettano di affrontare salite impegnative e raggiungere vette straordinarie. Include test di autonomia, performance e consigli per il bikepack in montagna.",
    videoId: "wQrx2422wD8",
    date: "12 Settembre 2024",
    category: "Avventura",
    partner: "ollin",
    location: "Dolomiti, Trentino",
    tags: ["ebike", "ollin", "mtb", "dolomiti", "bikepack"]
  },
  {
    id: "fauna-selvatica-alpi",
    title: "Fauna Selvatica delle Alpi",
    excerpt: "Incontri ravvicinati con gli animali delle Alpi nel loro habitat naturale.",
    description: "Una raccolta dei migliori avvistamenti di fauna alpina: stambecchi, camosci, marmotte, aquile reali e volpi. Ogni incontro è frutto di lunghe attese, studio del territorio e rispetto per gli animali. Il video include consigli pratici su come avvicinarsi alla fauna selvatica in modo etico e responsabile, utilizzando attrezzatura ottica di alta qualità.",
    videoId: "VqqxMAQJ0oo",
    date: "5 Luglio 2024",
    category: "Fauna Selvatica",
    partner: "Swarovski Optik",
    location: "Alpi Trentine",
    tags: ["stambecchi", "camosci", "marmotte", "wildlife photography"]
  }
];
