import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Articolo non trovato</h1>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Torna al Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-24 pb-16">
      <article className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Torna al Blog
            </Button>
          </Link>

          <div className="relative mb-12">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-2xl rounded-3xl -z-10" />
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <span className="text-xs font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-4 py-1.5 rounded-full border border-primary/20">
                  <Tag className="inline h-3 w-3 mr-1" />
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} di lettura</span>
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12"></div>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-serif text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-serif text-xl md:text-2xl font-semibold mt-8 mb-3 text-foreground">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              // Handle lists
              if (paragraph.includes('\n- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-6 text-foreground">
                    {items.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              // Handle numbered lists
              if (/^\d+\./.test(paragraph)) {
                const items = paragraph.split('\n').filter(line => /^\d+\./.test(line));
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 my-6 text-foreground">
                    {items.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item.replace(/^\d+\.\s/, '')}</li>
                    ))}
                  </ol>
                );
              }
              // Regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-foreground leading-relaxed mb-6">
                    {paragraph.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12"></div>

          <div className="text-center">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Leggi altri articoli
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
