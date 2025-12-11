import { Store, Users, Star, MapPin } from "lucide-react";

const stats = [
  {
    icon: Store,
    value: "500+",
    label: "Negocios Registrados",
    color: "text-terracotta",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Usuarios Activos",
    color: "text-sage",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Calificación Promedio",
    color: "text-golden",
  },
  {
    icon: MapPin,
    value: "25+",
    label: "Barrios Conectados",
    color: "text-primary",
  },
];

const StatsSection = () => {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
                <stat.icon className={`h-7 w-7 ${stat.color}`} />
              </div>
              <div className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
