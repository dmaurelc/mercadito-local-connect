import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Store, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Directorio", href: "/directorio" },
    { name: "Categorías", href: "/categorias" },
    { name: "Sobre Nosotros", href: "/nosotros" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline">Ingresar</Button>
          <Button>Registrar Negocio</Button>
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
        <div className="absolute left-0 right-0 top-16 border-b border-border bg-background p-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <Button variant="outline" className="w-full">
              Ingresar
            </Button>
            <Button className="w-full">Registrar Negocio</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
