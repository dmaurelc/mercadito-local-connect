import { Button } from "@/components/ui/button";
import { Search, MapPin, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const quickCategories = [
  { name: "🍕 Comida", href: "/directorio?cat=gastronomia" },
  { name: "💇 Belleza", href: "/directorio?cat=belleza" },
  { name: "🔧 Servicios", href: "/directorio?cat=servicios" },
  { name: "👕 Moda", href: "/directorio?cat=moda" },
  { name: "🏠 Hogar", href: "/directorio?cat=hogar" },
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-background pb-8 pt-8 md:pb-16 md:pt-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 animate-fade-up">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              +500 negocios cerca de ti
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-up font-display text-4xl font-bold leading-tight text-foreground [animation-delay:100ms] md:text-5xl lg:text-6xl">
            Todo lo que buscas,
            <span className="block text-gradient-primary mt-1">
              en tu barrio
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl animate-fade-up text-lg text-muted-foreground [animation-delay:200ms]">
            Descubre negocios locales increíbles. Apoya a emprendedores de tu comunidad.
          </p>
        </div>

        {/* Search Bar - App Style */}
        <div className="mx-auto mt-8 max-w-2xl animate-fade-up [animation-delay:300ms]">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar negocios, productos, servicios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 w-full rounded-2xl border-2 border-border bg-card pl-12 pr-4 text-foreground shadow-app-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
              />
            </div>
            <Button size="xl" variant="app" className="gap-2 shadow-primary">
              <MapPin className="h-5 w-5" />
              Cerca de mí
            </Button>
          </div>
        </div>

        {/* Quick Categories - Pill Style */}
        <div className="mt-8 animate-fade-up [animation-delay:400ms]">
          <div className="flex flex-wrap justify-center gap-2">
            {quickCategories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="rounded-full bg-card border border-border px-4 py-2.5 text-sm font-medium text-foreground shadow-app-sm transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-app active:scale-95"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Cards Preview */}
        <div className="mt-12 animate-fade-up [animation-delay:500ms]">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Destacados hoy</span>
          </div>
          
          <div className="flex justify-center gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { name: "La Panadería de María", cat: "Gastronomía", rating: "4.9", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop" },
              { name: "Café El Rincón", cat: "Cafetería", rating: "4.8", img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&h=200&fit=crop" },
              { name: "Artesanías del Sol", cat: "Artesanías", rating: "5.0", img: "https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?w=200&h=200&fit=crop" },
            ].map((item, i) => (
              <Link
                key={i}
                to={`/negocio/${i + 1}`}
                className="group flex-shrink-0 w-[280px] rounded-3xl bg-card border border-border p-3 shadow-app-sm transition-all hover:shadow-app hover:-translate-y-1"
              >
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-16 w-16 rounded-2xl object-cover"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-medium text-primary">{item.cat}</span>
                    <span className="font-semibold text-foreground text-sm">{item.name}</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs">⭐</span>
                      <span className="text-xs font-medium text-muted-foreground">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
