import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl">
                Conectamos comunidades
                <span className="block text-golden">con emprendedores locales</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
                Mercadito Vecinal nació con la misión de dar visibilidad a los pequeños 
                negocios y emprendimientos que forman el corazón de nuestras comunidades.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Nuestra Misión
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  Apoyamos el comercio local
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Creemos que cada barrio tiene talento increíble. Desde la panadería de la 
                  esquina hasta el artesano que trabaja desde casa, todos merecen ser 
                  descubiertos por su comunidad.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  Mercadito Vecinal es el puente digital que conecta a emprendedores con 
                  clientes que valoran lo local, lo auténtico y lo hecho con pasión.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop"
                  alt="Emprendedor local"
                  className="rounded-2xl object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=500&fit=crop"
                  alt="Comercio local"
                  className="mt-8 rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Nuestros Valores
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Heart,
                  title: "Pasión Local",
                  description: "Amamos y apoyamos a los emprendedores de nuestra comunidad",
                },
                {
                  icon: Users,
                  title: "Comunidad",
                  description: "Creemos en el poder de las conexiones entre vecinos",
                },
                {
                  icon: MapPin,
                  title: "Cercanía",
                  description: "Lo mejor siempre está más cerca de lo que piensas",
                },
                {
                  icon: Sparkles,
                  title: "Autenticidad",
                  description: "Valoramos lo genuino, lo artesanal y lo único",
                },
              ].map((value, idx) => (
                <div key={idx} className="rounded-2xl bg-card p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                ¿Tienes un emprendimiento?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Únete a nuestra comunidad y conecta con clientes de tu zona
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/registrar">
                  <Button size="lg" className="gap-2">
                    Registrar mi negocio
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/directorio">
                  <Button size="lg" variant="outline">
                    Explorar directorio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
