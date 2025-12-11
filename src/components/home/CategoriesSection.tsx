import { 
  UtensilsCrossed, 
  Paintbrush, 
  Wrench, 
  Shirt, 
  Laptop, 
  Heart, 
  Home, 
  GraduationCap 
} from "lucide-react";

const categories = [
  {
    name: "Gastronomía",
    icon: UtensilsCrossed,
    count: 124,
    color: "bg-terracotta-light text-terracotta",
  },
  {
    name: "Artesanías",
    icon: Paintbrush,
    count: 89,
    color: "bg-golden-light text-golden",
  },
  {
    name: "Servicios",
    icon: Wrench,
    count: 156,
    color: "bg-sage-light text-sage",
  },
  {
    name: "Moda",
    icon: Shirt,
    count: 78,
    color: "bg-terracotta-light text-terracotta",
  },
  {
    name: "Tecnología",
    icon: Laptop,
    count: 45,
    color: "bg-sage-light text-sage",
  },
  {
    name: "Salud y Bienestar",
    icon: Heart,
    count: 67,
    color: "bg-golden-light text-golden",
  },
  {
    name: "Hogar",
    icon: Home,
    count: 93,
    color: "bg-terracotta-light text-terracotta",
  },
  {
    name: "Educación",
    icon: GraduationCap,
    count: 34,
    color: "bg-sage-light text-sage",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Explora por Categoría
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Encuentra exactamente lo que necesitas en tu comunidad
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${category.color} transition-transform duration-300 group-hover:scale-110`}
              >
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-foreground">{category.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {category.count} negocios
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
