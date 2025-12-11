import { Link } from "react-router-dom";
import { Store, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-sm">
                <Store className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight text-foreground">
                  Mercadito
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  Vecinal
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Conectando pequeños empresarios con su comunidad. Tu negocio local
              merece ser visible.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold text-foreground">
              Enlaces Rápidos
            </h4>
            <nav className="flex flex-col gap-2">
              {["Inicio", "Directorio", "Categorías", "Blog", "FAQ"].map((link) => (
                <Link
                  key={link}
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* For Businesses */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold text-foreground">
              Para Negocios
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                "Registrar Negocio",
                "Planes y Precios",
                "Guía de Usuario",
                "Centro de Ayuda",
              ].map((link) => (
                <Link
                  key={link}
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold text-foreground">
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hola@mercaditovecinal.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Tu barrio, tu ciudad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© 2024 Mercadito Vecinal. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-primary">
              Términos de Uso
            </Link>
            <Link to="#" className="hover:text-primary">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
