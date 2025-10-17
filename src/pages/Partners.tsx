const Partners = () => {
  const partners = [
    {
      name: "Swarovski Optik",
      url: "https://www.swarovskioptik.com",
      description: "Attrezzatura ottica professionale per l'osservazione della fauna selvatica",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      name: "ollin.co",
      url: "https://ollin.co",
      description: "Soluzioni digitali innovative per content creator",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      name: "Euromix Motors Trento",
      url: "https://www.euromixmotors.it",
      description: "Mobilità elettrica sostenibile per esplorare le montagne",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-16 pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Partner
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Collaborazioni che rendono possibile la documentazione della fauna alpina e la creazione di contenuti di qualità
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto mb-12 sm:mb-16">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background border border-border rounded-2xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-300 hover:border-primary animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  {partner.icon}
                </div>
                <h2 className="font-serif font-semibold text-xl sm:text-2xl group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all duration-300">
                  <span className="font-medium">Visita il sito</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="bg-muted/50 rounded-2xl p-8 sm:p-10 border border-border">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">
              Collaborazioni
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Ogni partner contribuisce in modo unico alla mia missione di documentare e proteggere la fauna alpina.
              Insieme, promuoviamo un approccio sostenibile all'esplorazione delle montagne e alla conservazione della natura.
            </p>
            <p className="text-sm text-muted-foreground">
              Interessato a collaborare? Contattami attraverso i miei canali social.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
