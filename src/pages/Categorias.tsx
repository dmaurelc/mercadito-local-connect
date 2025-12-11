import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  UtensilsCrossed, 
  Paintbrush, 
  Wrench, 
  Shirt, 
  Laptop, 
  Heart, 
  Home, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

const categories = [
  {
    name: "Gastronomía",
    icon: UtensilsCrossed,
    count: 124,
    description: "Restaurantes, panaderías, cafeterías y más",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
  },
  {
    name: "Artesanías",
    icon: Paintbrush,
    count: 89,
    description: "Productos hechos a mano con amor",
    image: "https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?w=600&h=400&fit=crop",
  },
  {
    name: "Servicios",
    icon: Wrench,
    count: 156,
    description: "Reparaciones, mantenimiento y profesionales",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
  },
  {
    name: "Moda",
    icon: Shirt,
    count: 78,
    description: "Ropa, accesorios y calzado",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
  },
  {
    name: "Tecnología",
    icon: Laptop,
    count: 45,
    description: "Electrónica, reparaciones y servicios IT",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
  },
  {
    name: "Salud y Bienestar",
    icon: Heart,
    count: 67,
    description: "Gimnasios, yoga, spa y más",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop",
  },
  {
    name: "Hogar",
    icon: Home,
    count: 93,
    description: "Decoración, muebles y jardinería",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    name: "Educación",
    icon: GraduationCap,
    count: 34,
    description: "Clases, tutorías y cursos",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  },
];

const Categorias = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container">
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Categorías
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Explora negocios por categoría
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/directorio?categoria=${category.name}`}
                  className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                    
                    {/* Icon */}
                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-display text-xl font-bold text-primary-foreground">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-primary-foreground/80">
                        {category.description}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm font-medium text-primary-foreground">
                          {category.count} negocios
                        </span>
                        <ArrowRight className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:translate-x-1" />
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

export default Categorias;
