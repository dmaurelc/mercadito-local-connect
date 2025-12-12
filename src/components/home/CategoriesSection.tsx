import { Link } from "react-router-dom";

const categories = [
  { name: "Gastronomía", emoji: "🍕", count: 124, color: "bg-red-50 hover:bg-red-100" },
  { name: "Belleza", emoji: "💇", count: 89, color: "bg-pink-50 hover:bg-pink-100" },
  { name: "Servicios", emoji: "🔧", count: 156, color: "bg-blue-50 hover:bg-blue-100" },
  { name: "Moda", emoji: "👕", count: 78, color: "bg-purple-50 hover:bg-purple-100" },
  { name: "Tecnología", emoji: "💻", count: 45, color: "bg-cyan-50 hover:bg-cyan-100" },
  { name: "Salud", emoji: "💊", count: 67, color: "bg-green-50 hover:bg-green-100" },
  { name: "Hogar", emoji: "🏠", count: 93, color: "bg-amber-50 hover:bg-amber-100" },
  { name: "Educación", emoji: "📚", count: 34, color: "bg-indigo-50 hover:bg-indigo-100" },
];

const CategoriesSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Categorías
            </h2>
            <p className="mt-1 text-muted-foreground">
              Encuentra lo que necesitas
            </p>
          </div>
          <Link 
            to="/categorias"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Ver todas →
          </Link>
        </div>

        {/* Categories Grid - App Style */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/directorio?cat=${category.name.toLowerCase()}`}
              className={`group flex flex-col items-center justify-center rounded-3xl p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-app ${category.color}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {category.emoji}
              </span>
              <span className="text-sm font-semibold text-foreground text-center">
                {category.name}
              </span>
              <span className="text-xs text-muted-foreground mt-0.5">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
