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
    id: "osservazione-wildlife-binocolo",
    title: "Osservazione Wildlife con Binocolo Professionale",
    excerpt: "L'importanza dell'attrezzatura ottica di qualità per l'osservazione della fauna selvatica alpina.",
    description: "Un video dedicato all'osservazione della fauna con binocoli e cannocchiali professionali Swarovski Optik. Mostro come l'uso di ottiche di alta qualità permetta di studiare il comportamento degli animali mantenendo la giusta distanza di rispetto. Include test sul campo, confronti e suggerimenti per scegliere l'attrezzatura giusta per il wildlife watching.",
    videoId: "dQw4w9WgXcQ",
    date: "3 Ottobre 2024",
    category: "Fauna Selvatica",
    partner: "Swarovski Optik",
    location: "Val di Sole, Trentino",
    tags: ["binocolo", "wildlife watching", "ottica professionale", "birdwatching"]
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
    id: "mobilita-sostenibile-montagna",
    title: "Mobilità Sostenibile in Montagna",
    excerpt: "Come le e-bike stanno rivoluzionando il modo di vivere e esplorare la montagna in modo ecologico.",
    description: "Un progetto in collaborazione con ollin per promuovere la mobilità sostenibile in montagna. Il video esplora come le e-bike permettano di vivere esperienze autentiche riducendo l'impatto ambientale. Interviste con guide alpine, esperti di mobilità sostenibile e testimonianze di chi ha scelto questo mezzo per esplorare i territori montani.",
    videoId: "VqqxMAQJ0oo",
    date: "28 Luglio 2024",
    category: "Avventura",
    partner: "ollin",
    location: "Alpi Trentine",
    tags: ["sostenibilità", "ebike", "mobilità", "ambiente"]
  },
  {
    id: "test-drive-elettrico-montagna",
    title: "Test Drive Elettrico: Auto Ibride in Montagna",
    excerpt: "Testando le ultime auto ibride ed elettriche di Euromix Motors sui passi alpini più spettacolari.",
    description: "In partnership con Euromix Motors, ho avuto l'opportunità di testare le ultime novità nel campo dell'automotive elettrico e ibrido sui passi dolomitici. Il video mostra le prestazioni, l'autonomia e l'esperienza di guida in condizioni alpine, con particolare attenzione all'efficienza energetica in salita e alla frenata rigenerativa in discesa.",
    videoId: "dQw4w9WgXcQ",
    date: "20 Giugno 2024",
    category: "Avventura",
    partner: "Euromix Motors",
    location: "Passo Pordoi, Dolomiti",
    tags: ["auto elettrica", "test drive", "mobilità sostenibile", "dolomiti"]
  },
  {
    id: "esplorazione-alpina",
    title: "Esplorazione Alpina: Tecnologia e Natura",
    excerpt: "Come la tecnologia moderna ci permette di esplorare la natura in modo più sostenibile e rispettoso.",
    description: "Un progetto che unisce tecnologia e natura, realizzato in collaborazione con Euromix Motors. Il video mostra come i veicoli elettrici e ibridi permettano di raggiungere location remote per la fotografia naturalistica riducendo emissioni e rumore, elementi fondamentali per non disturbare la fauna selvatica. Include considerazioni sull'impatto ambientale e il futuro della mobilità outdoor.",
    videoId: "AlRfDBPqy_I",
    date: "15 Maggio 2024",
    category: "Avventura",
    partner: "Euromix Motors",
    location: "Val di Fassa, Trentino",
    tags: ["tecnologia", "sostenibilità", "wildlife", "automotive"]
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
