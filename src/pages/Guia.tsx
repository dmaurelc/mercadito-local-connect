import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Store, Camera, BarChart, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  { icon: Store, title: "1. Crea tu cuenta", desc: "Regístrate gratis en menos de un minuto con tu email." },
  { icon: Camera, title: "2. Completa tu perfil", desc: "Agrega fotos, descripción, horarios y datos de contacto." },
  { icon: BarChart, title: "3. ¡Listo!", desc: "Tu negocio aparecerá en el directorio y empezarás a recibir clientes." },
];

const Guia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Guía de Usuario</h1>
          <p className="mt-4 text-muted-foreground">Aprende a sacar el máximo provecho de Mercadito Vecinal</p>
        </div>

        {/* Steps */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">Cómo empezar</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">Tips para tu perfil</h2>
          <ul className="space-y-3">
            {[
              "Usa fotos de alta calidad de tus productos o servicios",
              "Escribe una descripción clara y atractiva",
              "Mantén actualizados tus horarios de atención",
              "Responde rápido a los mensajes de clientes",
              "Pide reseñas a tus clientes satisfechos",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link to="/registrar">
            <Button variant="app" size="lg" className="gap-2">
              Registrar mi negocio
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guia;
