import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import { wildlifeSightings, WildlifeSighting } from '@/data/wildlifeSightings';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Custom marker icons for different species
const createCustomIcon = (color: string) => {
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
        <path fill="${color}" stroke="white" stroke-width="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    `)}`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

const speciesIcons: Record<WildlifeSighting['category'], Icon> = {
  cervi: createCustomIcon('#8B4513'),
  stambecchi: createCustomIcon('#4A5568'),
  camosci: createCustomIcon('#A0826D'),
  marmotte: createCustomIcon('#D4A574'),
  aquile: createCustomIcon('#1E3A8A'),
  volpi: createCustomIcon('#DC2626'),
  altro: createCustomIcon('#6B7280'),
};

const Map = () => {
  // Center on Trentino, Italy
  const center: LatLngExpression = [46.4336, 11.1694];

  return (
    <div className="min-h-screen pt-16 pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Mappa Avvistamenti
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Esplora i luoghi dove ho documentato la fauna alpina nelle montagne del Trentino
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#8B4513] border-2 border-white"></div>
              <span className="text-muted-foreground">Cervi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#4A5568] border-2 border-white"></div>
              <span className="text-muted-foreground">Stambecchi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#A0826D] border-2 border-white"></div>
              <span className="text-muted-foreground">Camosci</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#D4A574] border-2 border-white"></div>
              <span className="text-muted-foreground">Marmotte</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#1E3A8A] border-2 border-white"></div>
              <span className="text-muted-foreground">Aquile</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#DC2626] border-2 border-white"></div>
              <span className="text-muted-foreground">Volpi</span>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-border animate-fade-in" style={{ height: '600px' }}>
          <MapContainer
            center={center}
            zoom={9}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {wildlifeSightings.map((sighting) => (
              <Marker
                key={sighting.id}
                position={sighting.coordinates}
                icon={speciesIcons[sighting.category]}
              >
                <Popup>
                  <div className="p-2 min-w-[250px]">
                    <h3 className="font-bold text-lg mb-2">{sighting.species}</h3>
                    <p className="text-sm text-gray-600 mb-2">{sighting.location}</p>
                    <p className="text-sm mb-2">{sighting.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {sighting.date}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {sighting.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Info Section */}
        <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            Tutti gli avvistamenti sono stati documentati nel rispetto degli animali e del loro habitat.
            Le coordinate sono approssimative per proteggere le aree sensibili e la fauna selvatica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
