import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Star, 
  Clock, 
  Filter,
  Grid3X3,
  List,
  ChevronDown
} from "lucide-react";

const allBusinesses = [
  {
    id: 1,
    slug: "panaderia-maria",
    name: "La Panadería de María",
    category: "Gastronomía",
    description: "Pan artesanal recién horneado todos los días. Especialidad en pan de masa madre.",
    rating: 4.9,
    reviews: 128,
    location: "Centro",
    hours: "6:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    slug: "artesanias-sol",
    name: "Artesanías del Sol",
    category: "Artesanías",
    description: "Productos hechos a mano con materiales locales. Joyería, cerámica y textiles.",
    rating: 4.8,
    reviews: 89,
    location: "Barrio Norte",
    hours: "10:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    slug: "techfix-express",
    name: "TechFix Express",
    category: "Tecnología",
    description: "Reparación de celulares, computadoras y tablets. Servicio rápido y garantizado.",
    rating: 4.7,
    reviews: 156,
    location: "Centro",
    hours: "9:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    slug: "boutique-eleganza",
    name: "Boutique Eleganza",
    category: "Moda",
    description: "Moda femenina exclusiva. Diseños únicos de creadores locales.",
    rating: 4.9,
    reviews: 67,
    location: "Zona Sur",
    hours: "11:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    slug: "cafe-rincon",
    name: "Café El Rincón",
    category: "Gastronomía",
    description: "El mejor café de especialidad del barrio. Ambiente acogedor para trabajar.",
    rating: 4.8,
    reviews: 234,
    location: "Centro",
    hours: "7:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    slug: "yoga-luna",
    name: "Estudio Yoga Luna",
    category: "Salud y Bienestar",
    description: "Clases de yoga para todos los niveles. Meditación y mindfulness.",
    rating: 5.0,
    reviews: 45,
    location: "Barrio Norte",
    hours: "6:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    slug: "carpinteria-robles",
    name: "Carpintería Los Robles",
    category: "Hogar",
    description: "Muebles a medida y restauración de antigüedades. Madera de primera calidad.",
    rating: 4.9,
    reviews: 78,
    location: "Zona Industrial",
    hours: "8:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    slug: "floreria-primavera",
    name: "Florería Primavera",
    category: "Hogar",
    description: "Arreglos florales para toda ocasión. Plantas y decoración natural.",
    rating: 4.7,
    reviews: 92,
    location: "Centro",
    hours: "8:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=300&fit=crop",
  },
];

const categories = ["Todas", "Gastronomía", "Artesanías", "Tecnología", "Moda", "Salud y Bienestar", "Hogar"];

const Directorio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredBusinesses = allBusinesses.filter((business) => {
    const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Todas" || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container">
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Directorio de Negocios
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Explora los emprendimientos de tu comunidad
            </p>

            {/* Search and Filters */}
            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar negocios..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-12"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container">
            <p className="mb-6 text-sm text-muted-foreground">
              {filteredBusinesses.length} negocios encontrados
            </p>

            <div className={viewMode === "grid" 
              ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "flex flex-col gap-4"
            }>
              {filteredBusinesses.map((business) => (
                <Link
                  key={business.id}
                  to={`/negocio/${business.slug}`}
                  className={`group overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === "list" ? "aspect-square w-48 shrink-0" : "aspect-[4/3]"
                  }`}>
                    <img
                      src={business.image}
                      alt={business.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {business.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                      {business.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {business.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      <Star className="h-4 w-4 fill-golden text-golden" />
                      <span className="font-semibold text-foreground">{business.rating}</span>
                      <span className="text-sm text-muted-foreground">({business.reviews})</span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
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
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Directorio;
