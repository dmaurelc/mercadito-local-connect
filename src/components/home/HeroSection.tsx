import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-market.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mercado local vibrante"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[85vh] items-center py-20">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-golden" />
            <span className="text-sm font-medium text-primary-foreground">
              +500 negocios locales ya nos acompañan
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up font-display text-4xl font-bold leading-tight text-primary-foreground [animation-delay:100ms] md:text-5xl lg:text-6xl">
            Descubre el talento
            <span className="block text-golden">de tu barrio</span>
          </h1>

          {/* Description */}
          <p className="animate-fade-up text-lg text-primary-foreground/80 [animation-delay:200ms] md:text-xl">
            Conectamos pequeños empresarios y emprendedores locales con su
            comunidad. Encuentra productos únicos, servicios de calidad y apoya
            a los negocios de tu zona.
          </p>

          {/* Search Bar */}
          <div className="animate-fade-up [animation-delay:300ms]">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="¿Qué estás buscando? (ej: panadería, ropa, reparaciones...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 w-full rounded-xl border-0 bg-background pl-12 pr-4 text-foreground shadow-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button size="xl" variant="hero" className="gap-2">
                Buscar
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="animate-fade-up space-y-3 [animation-delay:400ms]">
            <p className="text-sm text-primary-foreground/60">Categorías populares:</p>
            <div className="flex flex-wrap gap-2">
              {["Gastronomía", "Artesanías", "Servicios", "Moda", "Tecnología"].map(
                (category) => (
                  <button
                    key={category}
                    className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/20"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
