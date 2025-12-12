import { Star, MapPin, Clock, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const businesses = [
  {
    id: 1,
    name: "La Panadería de María",
    category: "Gastronomía",
    description: "Pan artesanal recién horneado todos los días",
    rating: 4.9,
    reviews: 128,
    location: "Centro",
    deliveryTime: "15-25 min",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    isOpen: true,
    promo: "🔥 Popular",
  },
  {
    id: 2,
    name: "Artesanías del Sol",
    category: "Artesanías",
    description: "Productos hechos a mano con materiales locales",
    rating: 4.8,
    reviews: 89,
    location: "Barrio Norte",
    deliveryTime: "30-45 min",
    image: "https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?w=400&h=300&fit=crop",
    isOpen: true,
    promo: null,
  },
  {
    id: 3,
    name: "TechFix Express",
    category: "Tecnología",
    description: "Reparación de celulares y tablets",
    rating: 4.7,
    reviews: 156,
    location: "Centro",
    deliveryTime: "Retiro en local",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
    isOpen: true,
    promo: "⚡ Rápido",
  },
  {
    id: 4,
    name: "Boutique Eleganza",
    category: "Moda",
    description: "Moda femenina exclusiva de diseñadores locales",
    rating: 4.9,
    reviews: 67,
    location: "Zona Sur",
    deliveryTime: "Envío 24h",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    isOpen: false,
    promo: "✨ Nuevo",
  },
  {
    id: 5,
    name: "Café El Rincón",
    category: "Cafetería",
    description: "El mejor café de especialidad del barrio",
    rating: 4.8,
    reviews: 234,
    location: "Centro",
    deliveryTime: "10-20 min",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
    isOpen: true,
    promo: "☕ Top café",
  },
  {
    id: 6,
    name: "Estudio Yoga Luna",
    category: "Bienestar",
    description: "Clases de yoga para todos los niveles",
    rating: 5.0,
    reviews: 45,
    location: "Barrio Norte",
    deliveryTime: "Clases online",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop",
    isOpen: true,
    promo: "🧘 Trending",
  },
];

const FeaturedBusinesses = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Los más populares
            </h2>
            <p className="mt-1 text-muted-foreground">
              Favoritos de tu comunidad
            </p>
          </div>
          <Link to="/directorio">
            <Button variant="ghost" className="gap-2 text-primary">
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Business Cards Grid - App Style */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business, index) => (
            <Link
              key={business.id}
              to={`/negocio/${business.id}`}
              className="group overflow-hidden rounded-3xl bg-card border border-border shadow-app-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-app"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={business.image}
                  alt={business.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {business.promo && (
                    <span className="rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold shadow-sm">
                      {business.promo}
                    </span>
                  )}
                </div>

                {/* Open/Closed */}
                <div className="absolute top-3 right-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    business.isOpen 
                      ? "bg-secondary/90 text-secondary-foreground" 
                      : "bg-muted/90 text-muted-foreground"
                  }`}>
                    {business.isOpen ? "Abierto" : "Cerrado"}
                  </span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={(e) => toggleFavorite(business.id, e)}
                  className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm shadow-sm transition-all hover:scale-110"
                >
                  <Heart 
                    className={`h-4 w-4 transition-colors ${
                      favorites.includes(business.id) 
                        ? "fill-primary text-primary" 
                        : "text-muted-foreground"
                    }`} 
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Category & Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {business.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-foreground text-sm">
                      {business.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({business.reviews})
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {business.name}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                  {business.description}
                </p>

                {/* Meta Info */}
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{business.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{business.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
