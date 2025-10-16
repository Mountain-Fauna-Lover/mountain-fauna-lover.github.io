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
    id: "esplorazione-alpina",
    title: "Esplorazione Alpina in E-bike",
    excerpt: "Avventure e scoperte tra le montagne, alla ricerca della bellezza selvaggia delle Alpi trentine.",
    description: "Un viaggio attraverso sentieri alpini in e-bike alla scoperta di paesaggi mozzafiato e fauna selvatica. Questo video documenta un'intera giornata di esplorazione, dall'alba al tramonto, mostrando come la mobilità sostenibile permetta di raggiungere luoghi remoti rispettando l'ambiente. Collaborazione con brand leader nel settore outdoor.",
    videoId: "wQrx2422wD8",
    date: "22 Agosto 2024",
    category: "Avventura",
    location: "Val di Rabbi, Trentino",
    tags: ["ebike", "montagna", "avventura", "sostenibilità"]
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
