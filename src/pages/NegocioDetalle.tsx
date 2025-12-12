import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Globe, 
  Share2,
  Heart,
  ChevronLeft,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ExternalLink,
  X,
  ChevronRight,
  Check,
  Sparkles
} from "lucide-react";

interface Business {
  name: string;
  category: string;
  tagline: string;
  description: string;
  fullDescription: string;
  mission: string;
  rating: number;
  reviews: number;
  location: string;
  address: string;
  hours: { day: string; time: string }[];
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  image: string;
  logo: string;
  gallery: string[];
  services: { name: string; description: string; price: string; duration?: string }[];
  products: { name: string; description: string; price: string; image: string }[];
  social: { instagram?: string; facebook?: string; twitter?: string; youtube?: string; tiktok?: string };
  features: string[];
}

const businessData: Record<string, Business> = {
  "panaderia-maria": {
    name: "La Panadería de María",
    category: "Gastronomía",
    tagline: "Pan artesanal con amor desde 2004",
    description: "Pan artesanal recién horneado todos los días.",
    fullDescription: "Somos una panadería familiar con más de 20 años de tradición. Nos especializamos en pan de masa madre, bollería artesanal y pasteles para ocasiones especiales. Todos nuestros productos son elaborados con ingredientes naturales y sin conservantes. Nuestra pasión por el pan nos ha llevado a perfeccionar nuestras recetas generación tras generación.",
    mission: "Llevar a cada hogar el sabor auténtico del pan artesanal, elaborado con amor y los mejores ingredientes.",
    rating: 4.9,
    reviews: 128,
    location: "Centro",
    address: "Calle Principal 123, Centro, Ciudad",
    hours: [
      { day: "Lunes - Viernes", time: "6:00 AM - 8:00 PM" },
      { day: "Sábado", time: "6:00 AM - 6:00 PM" },
      { day: "Domingo", time: "7:00 AM - 2:00 PM" },
    ],
    phone: "+1 555 123 4567",
    whatsapp: "+1 555 123 4567",
    email: "hola@panaderiamarla.com",
    website: "www.panaderiamarla.com",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=500&fit=crop",
    logo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608198093002-ad4e005f2eb8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586444248879-bc604cbd555a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
    ],
    services: [],
    products: [
      { name: "Pan de Masa Madre", description: "Pan artesanal fermentado naturalmente durante 24 horas", price: "$5.00", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop" },
      { name: "Croissants de Mantequilla", description: "Hojaldre francés con mantequilla premium", price: "$3.50", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop" },
      { name: "Pastel de Chocolate", description: "Bizcocho húmedo con ganache de chocolate belga", price: "$25.00", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop" },
      { name: "Baguette Tradicional", description: "Receta francesa con corteza crujiente", price: "$4.00", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop" },
    ],
    social: {
      instagram: "@panaderiamarla",
      facebook: "panaderiamarla",
    },
    features: ["Ingredientes orgánicos", "Sin conservantes", "Opciones sin gluten", "Pedidos especiales"],
  },
  "yoga-luna": {
    name: "Yoga Luna",
    category: "Salud y Bienestar",
    tagline: "Encuentra tu equilibrio interior",
    description: "Clases de yoga para todos los niveles en un ambiente acogedor.",
    fullDescription: "Yoga Luna es un espacio dedicado al bienestar integral del cuerpo y la mente. Ofrecemos clases de yoga para todos los niveles, desde principiantes hasta avanzados, en un ambiente cálido y acogedor. Nuestros instructores certificados te guiarán en un viaje de autodescubrimiento y transformación personal. Contamos con diferentes estilos de yoga adaptados a tus necesidades: Hatha, Vinyasa, Yin, Restaurativo y Meditación.",
    mission: "Crear un espacio de paz y conexión donde cada persona pueda descubrir el poder transformador del yoga y la meditación.",
    rating: 4.8,
    reviews: 87,
    location: "Norte",
    address: "Av. Bienestar 456, Zona Norte, Ciudad",
    hours: [
      { day: "Lunes - Viernes", time: "6:00 AM - 9:00 PM" },
      { day: "Sábado", time: "8:00 AM - 6:00 PM" },
      { day: "Domingo", time: "9:00 AM - 2:00 PM" },
    ],
    phone: "+1 555 987 6543",
    whatsapp: "+1 555 987 6543",
    email: "namaste@yogaluna.com",
    website: "www.yogaluna.com",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=500&fit=crop",
    logo: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=100&h=100&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&h=600&fit=crop",
    ],
    services: [
      { name: "Clase de Hatha Yoga", description: "Práctica suave ideal para principiantes, enfocada en posturas básicas y respiración", price: "$15.00", duration: "60 min" },
      { name: "Vinyasa Flow", description: "Secuencias dinámicas sincronizadas con la respiración para aumentar fuerza y flexibilidad", price: "$18.00", duration: "75 min" },
      { name: "Yin Yoga", description: "Práctica restaurativa con posturas sostenidas para liberar tensión profunda", price: "$15.00", duration: "60 min" },
      { name: "Meditación Guiada", description: "Sesiones de mindfulness para calmar la mente y reducir el estrés", price: "$12.00", duration: "45 min" },
      { name: "Pack Mensual Ilimitado", description: "Acceso ilimitado a todas las clases durante un mes", price: "$120.00", duration: "30 días" },
      { name: "Clase Privada", description: "Sesión personalizada uno a uno con instructor certificado", price: "$50.00", duration: "60 min" },
    ],
    products: [
      { name: "Mat de Yoga Premium", description: "Esterilla antideslizante ecológica de 6mm", price: "$45.00", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop" },
      { name: "Bloque de Yoga", description: "Bloque de corcho natural para apoyo en posturas", price: "$18.00", image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=400&h=400&fit=crop" },
      { name: "Cinta de Yoga", description: "Cinta de algodón orgánico para estiramientos", price: "$12.00", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop" },
    ],
    social: {
      instagram: "@yogaluna",
      facebook: "yogalunastudio",
      youtube: "YogaLunaOficial",
      twitter: "@yogaluna",
    },
    features: ["Clases para todos los niveles", "Instructores certificados", "Primera clase gratis", "Ambiente climatizado", "Estacionamiento gratuito", "Vestidores con duchas"],
  },
};

const defaultBusiness: Business = {
  name: "Negocio Local",
  category: "General",
  tagline: "Tu emprendimiento de confianza",
  description: "Un emprendimiento de tu comunidad.",
  fullDescription: "Somos un negocio local comprometido con brindar productos y servicios de calidad a nuestra comunidad. Nos esforzamos cada día por ofrecer la mejor atención y experiencia a nuestros clientes.",
  mission: "Servir a nuestra comunidad con dedicación y excelencia.",
  rating: 4.5,
  reviews: 50,
  location: "Tu Barrio",
  address: "Dirección del negocio",
  hours: [
    { day: "Lunes - Viernes", time: "9:00 AM - 6:00 PM" },
    { day: "Sábado", time: "9:00 AM - 2:00 PM" },
  ],
  phone: "+1 555 000 0000",
  whatsapp: "+1 555 000 0000",
  email: "contacto@negocio.com",
  website: "www.negocio.com",
  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
  logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
  gallery: [],
  services: [],
  products: [],
  social: {},
  features: [],
};

const NegocioDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const business = slug && businessData[slug] ? businessData[slug] : defaultBusiness;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % business.gallery.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + business.gallery.length) % business.gallery.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Image */}
        <section className="relative h-[45vh] min-h-[350px]">
          <img
            src={business.image}
            alt={business.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
            <div className="container">
              <Link
                to="/directorio"
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/30"
              >
                <ChevronLeft className="h-4 w-4" />
                Volver al directorio
              </Link>
              
              <div className="flex items-start gap-4">
                <div className="hidden h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-4 border-background shadow-lg sm:block">
                  <img src={business.logo} alt={business.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <Badge className="mb-2 bg-primary/90 text-primary-foreground">
                    {business.category}
                  </Badge>
                  <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                    {business.name}
                  </h1>
                  <p className="mt-1 text-lg text-primary-foreground/80">{business.tagline}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-1.5 rounded-full bg-golden/20 px-3 py-1 backdrop-blur-sm">
                      <Star className="h-4 w-4 fill-golden text-golden" />
                      <span className="font-bold text-golden">{business.rating}</span>
                      <span className="text-sm text-primary-foreground/70">({business.reviews} reseñas)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary-foreground/80">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{business.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions Bar */}
        <section className="sticky top-16 z-40 border-b border-border bg-background/95 py-3 backdrop-blur-md">
          <div className="container">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto">
                <a href="#sobre" className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Sobre nosotros</a>
                {business.services.length > 0 && (
                  <a href="#servicios" className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Servicios</a>
                )}
                {business.products.length > 0 && (
                  <a href="#productos" className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Productos</a>
                )}
                {business.gallery.length > 0 && (
                  <a href="#galeria" className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Galería</a>
                )}
                <a href="#contacto" className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Contacto</a>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button className="hidden gap-2 rounded-full sm:flex">
                  <MessageCircle className="h-4 w-4" />
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="space-y-8 lg:col-span-2">
                {/* About Section */}
                <div id="sobre" className="scroll-mt-32 rounded-3xl bg-card p-6 shadow-app md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Sobre nosotros
                    </h2>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {business.fullDescription}
                  </p>
                  {business.mission && (
                    <div className="mt-6 rounded-2xl bg-primary/5 p-5">
                      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Nuestra misión</p>
                      <p className="mt-2 text-foreground">{business.mission}</p>
                    </div>
                  )}
                  {business.features.length > 0 && (
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Destacados</p>
                      <div className="flex flex-wrap gap-2">
                        {business.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="gap-1.5 rounded-full px-3 py-1.5">
                            <Check className="h-3 w-3 text-primary" />
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Services Section */}
                {business.services.length > 0 && (
                  <div id="servicios" className="scroll-mt-32 rounded-3xl bg-card p-6 shadow-app md:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Nuestros Servicios
                    </h2>
                    <p className="mt-2 text-muted-foreground">Descubre todo lo que tenemos para ofrecerte</p>
                    <div className="mt-6 grid gap-4">
                      {business.services.map((service, idx) => (
                        <div 
                          key={idx} 
                          className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-md"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                              {service.duration && (
                                <Badge variant="outline" className="rounded-full text-xs">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {service.duration}
                                </Badge>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-primary">{service.price}</p>
                            <Button size="sm" variant="ghost" className="mt-2 rounded-full text-xs">
                              Reservar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Products Section */}
                {business.products.length > 0 && (
                  <div id="productos" className="scroll-mt-32 rounded-3xl bg-card p-6 shadow-app md:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Productos
                    </h2>
                    <p className="mt-2 text-muted-foreground">Productos destacados disponibles</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {business.products.map((product, idx) => (
                        <div 
                          key={idx} 
                          className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-primary/30 hover:shadow-md"
                        >
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-foreground">{product.name}</h3>
                            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                            <div className="mt-3 flex items-center justify-between">
                              <p className="text-xl font-bold text-primary">{product.price}</p>
                              <Button size="sm" className="rounded-full">Consultar</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery Section */}
                {business.gallery.length > 0 && (
                  <div id="galeria" className="scroll-mt-32 rounded-3xl bg-card p-6 shadow-app md:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Galería
                    </h2>
                    <p className="mt-2 text-muted-foreground">Conoce nuestro espacio y trabajo</p>
                    <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                      {business.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => openLightbox(idx)}
                          className="group aspect-square overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          <img
                            src={img}
                            alt={`${business.name} ${idx + 1}`}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Mobile Contact Button */}
                <Button className="w-full gap-2 rounded-full sm:hidden">
                  <MessageCircle className="h-4 w-4" />
                  Contactar por WhatsApp
                </Button>

                {/* Contact Card */}
                <div id="contacto" className="scroll-mt-32 rounded-3xl bg-card p-6 shadow-app">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Información de contacto
                  </h3>
                  <div className="mt-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Dirección</p>
                        <p className="text-sm text-muted-foreground">{business.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Horario</p>
                        {business.hours.map((h, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            <span className="font-medium">{h.day}:</span> {h.time}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Teléfono</p>
                        <a href={`tel:${business.phone}`} className="text-sm text-primary hover:underline">{business.phone}</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a href={`mailto:${business.email}`} className="text-sm text-primary hover:underline">{business.email}</a>
                      </div>
                    </div>

                    {business.website && (
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Sitio web</p>
                          <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                            {business.website}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Social Media */}
                  {(business.social.instagram || business.social.facebook || business.social.twitter || business.social.youtube) && (
                    <div className="mt-6 border-t border-border pt-6">
                      <p className="mb-3 text-sm font-medium text-foreground">Síguenos en redes</p>
                      <div className="flex flex-wrap gap-2">
                        {business.social.instagram && (
                          <a 
                            href={`https://instagram.com/${business.social.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                          >
                            <Instagram className="h-4 w-4" />
                            Instagram
                          </a>
                        )}
                        {business.social.facebook && (
                          <a 
                            href={`https://facebook.com/${business.social.facebook}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                          >
                            <Facebook className="h-4 w-4" />
                            Facebook
                          </a>
                        )}
                        {business.social.twitter && (
                          <a 
                            href={`https://twitter.com/${business.social.twitter.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                          >
                            <Twitter className="h-4 w-4" />
                            Twitter
                          </a>
                        )}
                        {business.social.youtube && (
                          <a 
                            href={`https://youtube.com/${business.social.youtube}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                          >
                            <Youtube className="h-4 w-4" />
                            YouTube
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="mt-6 space-y-3">
                    <Button className="w-full gap-2 rounded-full bg-green-600 hover:bg-green-700">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="w-full gap-2 rounded-full">
                      <Phone className="h-4 w-4" />
                      Llamar ahora
                    </Button>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="overflow-hidden rounded-3xl bg-muted">
                  <div className="aspect-video w-full bg-muted flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">Mapa próximamente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-background/20 p-2 text-primary-foreground transition-colors hover:bg-background/30"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 rounded-full bg-background/20 p-3 text-primary-foreground transition-colors hover:bg-background/30"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <img
            src={business.gallery[lightboxIndex]}
            alt={`${business.name} ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
          />
          
          <button
            onClick={nextImage}
            className="absolute right-4 rounded-full bg-background/20 p-3 text-primary-foreground transition-colors hover:bg-background/30"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/20 px-4 py-2 text-sm text-primary-foreground">
            {lightboxIndex + 1} / {business.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default NegocioDetalle;
