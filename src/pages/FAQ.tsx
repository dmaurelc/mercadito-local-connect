import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    name: "Primeros pasos",
    questions: [
      { q: "¿Cómo registro mi negocio?", a: "Es muy fácil. Haz clic en 'Publicar Negocio', completa el formulario con la información de tu emprendimiento y listo. Tu perfil estará visible en minutos." },
      { q: "¿Es gratis usar Mercadito?", a: "Sí, tenemos un plan gratuito que incluye tu perfil de negocio, fotos y contacto básico. Para funciones avanzadas, revisa nuestros planes premium." },
      { q: "¿Cuánto tiempo tarda en aparecer mi negocio?", a: "Tu negocio aparece inmediatamente después de completar el registro. La verificación puede tomar 24-48 horas." },
    ]
  },
  {
    name: "Cuenta y perfil",
    questions: [
      { q: "¿Cómo edito mi perfil de negocio?", a: "Ingresa a tu cuenta, ve a 'Mi Negocio' y podrás editar toda la información, fotos y horarios." },
      { q: "¿Puedo tener más de un negocio?", a: "Sí, con nuestros planes premium puedes gestionar múltiples negocios desde una sola cuenta." },
    ]
  },
  {
    name: "Pagos y planes",
    questions: [
      { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos tarjetas de crédito/débito, transferencia bancaria y pagos móviles." },
      { q: "¿Puedo cancelar mi suscripción?", a: "Sí, puedes cancelar en cualquier momento desde tu panel de control sin penalidades." },
    ]
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
            Preguntas Frecuentes
          </h1>
          <p className="mt-4 text-muted-foreground text-center">
            Encuentra respuestas rápidas a tus dudas
          </p>

          {/* Search */}
          <div className="relative mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar pregunta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 rounded-2xl border-2 border-border bg-card pl-12 pr-4 focus:border-primary focus:outline-none"
            />
          </div>

          {/* FAQ List */}
          <div className="mt-10 space-y-8">
            {faqCategories.map((category) => (
              <div key={category.name}>
                <h2 className="font-display text-lg font-bold text-foreground mb-4">{category.name}</h2>
                <div className="space-y-2">
                  {category.questions.map((item, i) => {
                    const key = `${category.name}-${i}`;
                    const isOpen = openIndex === key;
                    return (
                      <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : key)}
                          className="w-full flex items-center justify-between p-4 text-left"
                        >
                          <span className="font-medium text-foreground">{item.q}</span>
                          <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-muted-foreground text-sm">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">¿No encontraste lo que buscabas?</p>
            <Link to="/ayuda">
              <Button variant="app">Contactar soporte</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
