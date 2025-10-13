import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              Storie, riflessioni e consigli dalle mie avventure in montagna.
            </p>
            
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <article className="group cursor-pointer">
                    <div className="bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime} di lettura</span>
                        </div>
                      </div>
                      
                      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        <span>Leggi l'articolo</span>
                        <ArrowRight className="h-4 w-4" />
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
