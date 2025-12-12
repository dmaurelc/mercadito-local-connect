import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Store, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Store, text: "Perfil profesional gratis" },
  { icon: Zap, text: "Configura en 5 minutos" },
  { icon: BarChart3, text: "Estadísticas en tiempo real" },
];

const CTASection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-8 md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              ¿Tienes un negocio?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Únete a la comunidad de emprendedores locales y llega a miles de clientes en tu zona.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm px-4 py-2"
                >
                  <feature.icon className="h-4 w-4 text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/registrar">
                <Button
                  size="xl"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-app-xl gap-2"
                >
                  Comenzar gratis
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/planes">
                <Button
                  size="xl"
                  variant="outline"
                  className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Ver planes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
