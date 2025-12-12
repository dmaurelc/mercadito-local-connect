import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, MessageCircle, Mail, Phone, FileText, Users, HelpCircle } from "lucide-react";

const helpCategories = [
  { icon: FileText, name: "Guías", desc: "Tutoriales paso a paso", href: "/guia" },
  { icon: HelpCircle, name: "FAQ", desc: "Preguntas frecuentes", href: "/faq" },
  { icon: Users, name: "Comunidad", desc: "Conecta con otros", href: "/comunidad" },
  { icon: MessageCircle, name: "Chat", desc: "Soporte en vivo", href: "#" },
];

const Ayuda = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-muted/30 py-16">
          <div className="container text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              ¿Cómo podemos ayudarte?
            </h1>
            <div className="mt-6 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar en el centro de ayuda..."
                className="w-full h-14 rounded-2xl border-2 border-border bg-card pl-12 pr-4 focus:border-primary focus:outline-none shadow-app-sm"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="container py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helpCategories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.href}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-app hover:-translate-y-1"
              >
                <cat.icon className="h-8 w-8 mx-auto text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">{cat.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="container py-12">
          <div className="rounded-3xl bg-muted/50 p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground">¿Necesitas más ayuda?</h2>
            <p className="mt-2 text-muted-foreground">Nuestro equipo está listo para asistirte</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button variant="app" className="gap-2">
                <Mail className="h-4 w-4" />
                Enviar email
              </Button>
              <Button variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                Llamar
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ayuda;
