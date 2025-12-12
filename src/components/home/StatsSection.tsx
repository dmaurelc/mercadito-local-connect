const stats = [
  { value: "500+", label: "Negocios", emoji: "🏪" },
  { value: "10K+", label: "Usuarios", emoji: "👥" },
  { value: "4.8", label: "Rating", emoji: "⭐" },
  { value: "25+", label: "Barrios", emoji: "📍" },
];

const StatsSection = () => {
  return (
    <section className="py-10 border-y border-border bg-card">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-2xl mb-2 block">{stat.emoji}</span>
              <div className="font-display text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
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
