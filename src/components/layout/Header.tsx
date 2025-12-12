import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, User, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Explorar", href: "/directorio" },
    { name: "Categorías", href: "/categorias" },
    { name: "Blog", href: "/blog" },
    { name: "Ayuda", href: "/ayuda" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-primary shadow-primary">
            <MapPin className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            Mercadito
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/ingresar">
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              Ingresar
            </Button>
          </Link>
          <Link to="/registrar">
            <Button variant="app" size="sm">
              Publicar Negocio
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 border-b border-border bg-background/95 backdrop-blur-xl p-4 shadow-app-lg md:hidden animate-slide-up">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-3 border-border" />
            <Link to="/ingresar" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Ingresar
              </Button>
            </Link>
            <Link to="/registrar" onClick={() => setIsMenuOpen(false)}>
              <Button variant="app" className="w-full mt-2">
                Publicar Negocio
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
