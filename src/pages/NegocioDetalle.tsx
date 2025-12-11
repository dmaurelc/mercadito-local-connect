import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
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
  Facebook
} from "lucide-react";

const businessData: Record<string, {
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  rating: number;
  reviews: number;
  location: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  website: string;
  image: string;
  gallery: string[];
  products: { name: string; price: string; image: string }[];
}> = {
  "panaderia-maria": {
    name: "La Panadería de María",
    category: "Gastronomía",
    description: "Pan artesanal recién horneado todos los días.",
    fullDescription: "Somos una panadería familiar con más de 20 años de tradición. Nos especializamos en pan de masa madre, bollería artesanal y pasteles para ocasiones especiales. Todos nuestros productos son elaborados con ingredientes naturales y sin conservantes.",
    rating: 4.9,
    reviews: 128,
    location: "Centro",
    address: "Calle Principal 123, Centro",
    hours: "Lunes a Sábado: 6:00 AM - 8:00 PM",
    phone: "+1 555 123 4567",
    email: "hola@panaderiamarla.com",
    website: "www.panaderiamarla.com",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1608198093002-ad4e005f2eb8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586444248879-bc604cbd555a?w=400&h=300&fit=crop",
    ],
    products: [
      { name: "Pan de Masa Madre", price: "$5.00", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=200&h=200&fit=crop" },
      { name: "Croissants", price: "$3.50", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&h=200&fit=crop" },
      { name: "Pastel de Chocolate", price: "$25.00", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop" },
    ],
  },
};

const defaultBusiness = {
  name: "Negocio Local",
  category: "General",
  description: "Un emprendimiento de tu comunidad.",
  fullDescription: "Descripción completa del negocio aquí.",
  rating: 4.5,
  reviews: 50,
  location: "Tu Barrio",
  address: "Dirección del negocio",
  hours: "Lunes a Viernes: 9:00 AM - 6:00 PM",
  phone: "+1 555 000 0000",
  email: "contacto@negocio.com",
  website: "www.negocio.com",
  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
  gallery: [],
  products: [],
};

const NegocioDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const business = slug && businessData[slug] ? businessData[slug] : defaultBusiness;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Image */}
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={business.image}
            alt={business.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container">
              <Link
                to="/directorio"
                className="mb-4 inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
                Volver al directorio
              </Link>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-golden">
                {business.category}
              </span>
              <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                {business.name}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-golden text-golden" />
                  <span className="font-semibold text-primary-foreground">{business.rating}</span>
                  <span className="text-primary-foreground/70">({business.reviews} reseñas)</span>
                </div>
                <div className="flex items-center gap-1 text-primary-foreground/70">
                  <MapPin className="h-4 w-4" />
                  <span>{business.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="space-y-8 lg:col-span-2">
                {/* Description */}
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Sobre nosotros
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    {business.fullDescription}
                  </p>
                </div>

                {/* Gallery */}
                {business.gallery.length > 0 && (
                  <div className="rounded-2xl bg-card p-6 shadow-sm">
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Galería
                    </h2>
                    <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                      {business.gallery.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${business.name} ${idx + 1}`}
                          className="aspect-square rounded-xl object-cover"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Products */}
                {business.products.length > 0 && (
                  <div className="rounded-2xl bg-card p-6 shadow-sm">
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Productos destacados
                    </h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      {business.products.map((product, idx) => (
                        <div key={idx} className="rounded-xl border border-border p-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="aspect-square w-full rounded-lg object-cover"
                          />
                          <h3 className="mt-3 font-semibold text-foreground">{product.name}</h3>
                          <p className="text-lg font-bold text-primary">{product.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Actions */}
                <div className="flex gap-3">
                  <Button className="flex-1 gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Contactar
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Información de contacto
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Dirección</p>
                        <p className="text-sm text-muted-foreground">{business.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Horario</p>
                        <p className="text-sm text-muted-foreground">{business.hours}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Teléfono</p>
                        <p className="text-sm text-muted-foreground">{business.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">{business.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Sitio web</p>
                        <p className="text-sm text-muted-foreground">{business.website}</p>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="mt-6 flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NegocioDetalle;
