import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Gratis",
    price: "0",
    description: "Perfecto para comenzar",
    icon: Star,
    features: ["Perfil básico de negocio", "Hasta 5 fotos", "Información de contacto", "Ubicación en mapa"],
    cta: "Comenzar gratis",
    popular: false,
  },
  {
    name: "Pro",
    price: "9.99",
    description: "Para negocios en crecimiento",
    icon: Zap,
    features: ["Todo del plan Gratis", "Fotos ilimitadas", "Estadísticas avanzadas", "Destacado en búsquedas", "Catálogo de productos", "Mensajes directos"],
    cta: "Empezar prueba gratis",
    popular: true,
  },
  {
    name: "Business",
    price: "24.99",
    description: "Para negocios establecidos",
    icon: Crown,
    features: ["Todo del plan Pro", "Múltiples ubicaciones", "Promociones destacadas", "Soporte prioritario", "API de integración", "Reportes personalizados"],
    cta: "Contactar ventas",
    popular: false,
  },
];

const Planes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Planes y Precios
          </h1>
          <p className="mt-4 text-muted-foreground">
            Elige el plan que mejor se adapte a tu negocio
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border-2 p-6 ${plan.popular ? "border-primary bg-primary/5 shadow-app" : "border-border bg-card"}`}
            >
              {plan.popular && (
                <span className="inline-block rounded-full bg-primary text-primary-foreground text-xs font-bold px-3 py-1 mb-4">
                  Más popular
                </span>
              )}
              <plan.icon className={`h-8 w-8 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? "app" : "outline"} className="w-full mt-6">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Planes;
