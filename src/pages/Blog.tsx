import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import SEO from "@/components/SEO";
import { breadcrumbStructuredData } from "@/data/structuredData";

const Blog = () => {
  const breadcrumb = breadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <SEO
        title="Blog - Storie e Avventure dalla Montagna"
        description="Articoli, racconti e consigli sulla fotografia naturalistica, avvistamenti di fauna selvatica alpina, escursioni in montagna e conservazione ambientale nelle Alpi trentine."
        keywords="blog natura, articoli fauna selvatica, storie montagna, fotografia naturalistica tutorial, avvistamenti cervi, escursioni trentino, conservazione ambiente, wildlife blog"
        canonical="/blog"
        structuredData={breadcrumb}
      />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-3xl rounded-full" />
              <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent mb-6">
                Blog
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Storie, riflessioni e consigli dalle mie avventure in montagna.
              </p>
            </div>
            
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <article 
                    className="group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:border-primary/30">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-4 flex-wrap">
                          <span className="text-xs font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-4 py-1.5 rounded-full border border-primary/20">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime} di lettura</span>
                          </div>
                        </div>
                        
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h2>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                          <span>Leggi l'articolo</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
