import { Link } from "react-router-dom";
import { MapPin, Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    explorar: [
      { name: "Directorio", href: "/directorio" },
      { name: "Categorías", href: "/categorias" },
      { name: "Blog", href: "/blog" },
      { name: "Mapa", href: "/mapa" },
    ],
    negocios: [
      { name: "Registrar Negocio", href: "/registrar" },
      { name: "Planes y Precios", href: "/planes" },
      { name: "Guía de Usuario", href: "/guia" },
      { name: "Casos de Éxito", href: "/casos" },
    ],
    soporte: [
      { name: "Centro de Ayuda", href: "/ayuda" },
      { name: "FAQ", href: "/faq" },
      { name: "Contacto", href: "/contacto" },
      { name: "Comunidad", href: "/comunidad" },
    ],
    legal: [
      { name: "Términos de Uso", href: "/terminos" },
      { name: "Privacidad", href: "/privacidad" },
      { name: "Cookies", href: "/cookies" },
    ],
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-primary shadow-primary">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Mercadito
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Conectando emprendedores locales con su comunidad.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explorar</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.explorar.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Para Negocios</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.negocios.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Soporte</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.soporte.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>© 2024 Mercadito Vecinal. Hecho con ❤️ para tu comunidad.</p>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>hola@mercaditovecinal.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
