export interface WildlifeSighting {
  id: string;
  species: string;
  location: string;
  coordinates: [number, number]; // [latitude, longitude]
  date: string;
  image?: string;
  description: string;
  tags: string[];
  category: 'cervi' | 'stambecchi' | 'camosci' | 'marmotte' | 'aquile' | 'volpi' | 'altro';
}

export const wildlifeSightings: WildlifeSighting[] = [
  {
    id: "cervo-bramito-stelvio-2024",
    species: "Cervo (Cervus elaphus)",
    location: "Parco Nazionale dello Stelvio, Trentino",
    coordinates: [46.5186, 10.6058], // Parco Nazionale dello Stelvio
    date: "15 Settembre 2024",
    description: "Avvistamento durante il periodo del bramito. Cervo maschio adulto con palchi imponenti. Osservato con binocolo Swarovski Optik a distanza di sicurezza.",
    tags: ["cervi", "bramito", "parco stelvio", "maschio adulto"],
    category: "cervi"
  },
  {
    id: "stambecchi-alpi-trentine-2024",
    species: "Stambecco alpino (Capra ibex)",
    location: "Alpi Trentine",
    coordinates: [46.4102, 10.9383], // Val di Rabbi area
    date: "5 Luglio 2024",
    description: "Gruppo di 5 stambecchi maschi su cresta rocciosa a 2800m. Comportamento sociale osservato per 2 ore.",
    tags: ["stambecchi", "alta quota", "gruppo sociale"],
    category: "stambecchi"
  },
  {
    id: "camosci-dolomiti-2024",
    species: "Camoscio alpino (Rupicapra rupicapra)",
    location: "Dolomiti, Trentino",
    coordinates: [46.4205, 11.8440], // Dolomiti
    date: "12 Settembre 2024",
    description: "Famiglia di camosci con cuccioli. Osservati durante escursione in e-bike. Territorio roccioso sopra il limite degli alberi.",
    tags: ["camosci", "dolomiti", "famiglia", "cuccioli"],
    category: "camosci"
  },
  {
    id: "marmotte-alpi-2024",
    species: "Marmotta alpina (Marmota marmota)",
    location: "Alpi Trentine",
    coordinates: [46.3850, 10.9250],
    date: "5 Luglio 2024",
    description: "Colonia di marmotte in prateria alpina. Comportamento di allerta e fischi caratteristici documentati.",
    tags: ["marmotte", "prateria alpina", "comportamento sociale"],
    category: "marmotte"
  },
  {
    id: "aquila-reale-stelvio-2024",
    species: "Aquila reale (Aquila chrysaetos)",
    location: "Parco Nazionale dello Stelvio",
    coordinates: [46.5400, 10.5800],
    date: "15 Settembre 2024",
    description: "Aquila reale adulta in volo. Apertura alare stimata 2.1 metri. Osservata durante sessione fotografica cervi.",
    tags: ["aquila reale", "rapace", "volo", "parco stelvio"],
    category: "aquile"
  },
  {
    id: "volpe-val-di-rabbi-2024",
    species: "Volpe rossa (Vulpes vulpes)",
    location: "Val di Rabbi, Trentino",
    coordinates: [46.3950, 10.8900],
    date: "5 Luglio 2024",
    description: "Volpe adulta in caccia al crepuscolo. Comportamento predatorio osservato in zona di transizione bosco-prateria.",
    tags: ["volpe", "predatore", "crepuscolo", "val di rabbi"],
    category: "volpi"
  }
];
