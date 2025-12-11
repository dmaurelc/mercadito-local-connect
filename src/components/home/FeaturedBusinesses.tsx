import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const businesses = [
  {
    id: 1,
    name: "La Panadería de María",
    category: "Gastronomía",
    description: "Pan artesanal recién horneado todos los días. Especialidad en pan de masa madre.",
    rating: 4.9,
    reviews: 128,
    location: "Centro",
    hours: "6:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "Artesanías del Sol",
    category: "Artesanías",
    description: "Productos hechos a mano con materiales locales. Joyería, cerámica y textiles.",
    rating: 4.8,
    reviews: 89,
    location: "Barrio Norte",
    hours: "10:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 3,
    name: "TechFix Express",
    category: "Tecnología",
    description: "Reparación de celulares, computadoras y tablets. Servicio rápido y garantizado.",
    rating: 4.7,
    reviews: 156,
    location: "Centro",
    hours: "9:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 4,
    name: "Boutique Eleganza",
    category: "Moda",
    description: "Moda femenina exclusiva. Diseños únicos de creadores locales.",
    rating: 4.9,
    reviews: 67,
    location: "Zona Sur",
    hours: "11:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 5,
    name: "Café El Rincón",
    category: "Gastronomía",
    description: "El mejor café de especialidad del barrio. Ambiente acogedor para trabajar.",
    rating: 4.8,
    reviews: 234,
    location: "Centro",
    hours: "7:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 6,
    name: "Estudio Yoga Luna",
    category: "Salud y Bienestar",
    description: "Clases de yoga para todos los niveles. Meditación y mindfulness.",
    rating: 5.0,
    reviews: 45,
    location: "Barrio Norte",
    hours: "6:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop",
    featured: true,
  },
];

const FeaturedBusinesses = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Negocios Destacados
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Los favoritos de tu comunidad
            </p>
          </div>
          <Button variant="ghost" className="hidden gap-2 md:flex">
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Business Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business, index) => (
            <article
              key={business.id}
              className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={business.image}
                  alt={business.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {business.featured && (
                  <div className="absolute left-3 top-3 rounded-full bg-golden px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Destacado
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category */}
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {business.category}
                </span>

                {/* Name */}
                <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                  {business.name}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {business.description}
                </p>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-golden text-golden" />
                    <span className="font-semibold text-foreground">
                      {business.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({business.reviews} reseñas)
                  </span>
                </div>

                {/* Meta Info */}
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{business.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{business.hours}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="gap-2">
            Ver todos los negocios
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
