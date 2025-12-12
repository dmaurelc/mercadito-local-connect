import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  { id: 1, title: "5 consejos para destacar tu negocio local", excerpt: "Aprende estrategias efectivas para aumentar la visibilidad de tu emprendimiento.", date: "10 Dic 2024", author: "Equipo Mercadito", category: "Marketing", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop" },
  { id: 2, title: "Cómo tomar fotos profesionales con tu celular", excerpt: "Tips para fotografiar tus productos y servicios de manera atractiva.", date: "8 Dic 2024", author: "Ana García", category: "Fotografía", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=250&fit=crop" },
  { id: 3, title: "La importancia del servicio al cliente", excerpt: "Descubre cómo fidelizar a tus clientes con una atención excepcional.", date: "5 Dic 2024", author: "Carlos Ruiz", category: "Negocios", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop" },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Blog</h1>
        <p className="mt-2 text-muted-foreground">Consejos y recursos para emprendedores</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group rounded-3xl border border-border bg-card overflow-hidden shadow-app-sm hover:shadow-app transition-all hover:-translate-y-1">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-primary uppercase">{post.category}</span>
                <h2 className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" />{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
