import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Mis ventas aumentaron un 40% desde que me uní. Los clientes me encuentran fácilmente.",
    author: "María González",
    business: "La Panadería de María",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    content: "Super fácil de usar. Subí mis productos y en una semana ya tenía pedidos. ¡Increíble!",
    author: "Carlos Ruiz",
    business: "Artesanías del Sol",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    content: "Me encanta encontrar negocios locales de calidad. Siempre apoyo a mi barrio.",
    author: "Ana Martínez",
    business: "Cliente frecuente",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Lo que dicen de nosotros
          </h2>
          <p className="mt-2 text-muted-foreground">
            Historias de éxito de nuestra comunidad
          </p>
        </div>

        {/* Testimonials - Horizontal Scroll on Mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[300px] md:w-auto rounded-3xl bg-card border border-border p-6 shadow-app-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-sm leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
