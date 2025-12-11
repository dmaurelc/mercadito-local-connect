import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Perfil de negocio profesional",
  "Visible para miles de clientes",
  "Estadísticas de visitas",
  "100% gratuito para empezar",
];

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-terracotta" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            ¿Tienes un emprendimiento?
            <span className="mt-2 block text-golden">
              Únete a nuestra comunidad
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
            Registra tu negocio gratis y empieza a conectar con miles de clientes
            potenciales en tu zona.
          </p>

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm"
              >
                <CheckCircle className="h-4 w-4 text-golden" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="xl"
              className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Registrar mi Negocio
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="xl" variant="hero-outline">
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
