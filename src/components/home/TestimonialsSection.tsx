import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Desde que registré mi panadería en Mercadito Vecinal, mis ventas aumentaron un 40%. Los clientes me encuentran fácilmente y confían en las reseñas.",
    author: "María González",
    business: "La Panadería de María",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    content:
      "La plataforma es súper fácil de usar. Subí mis productos artesanales y en una semana ya tenía mis primeros pedidos. ¡Increíble!",
    author: "Carlos Ruiz",
    business: "Artesanías del Sol",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Como cliente, me encanta poder encontrar negocios locales de calidad cerca de mi casa. Siempre apoyo a los emprendedores de mi barrio.",
    author: "Ana Martínez",
    business: "Cliente frecuente",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Lo que dicen de nosotros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Historias de éxito de nuestra comunidad
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-muted-foreground/10" />

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-golden text-golden"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="relative z-10 text-foreground">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
