import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Store, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Building2, 
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

const categories = [
  "Gastronomía",
  "Artesanías",
  "Servicios",
  "Moda",
  "Tecnología",
  "Salud y Bienestar",
  "Hogar",
  "Educación",
];

const RegistrarNegocio = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Personal info
    nombre: "",
    email: "",
    password: "",
    telefono: "",
    // Business info
    nombreNegocio: "",
    categoria: "",
    descripcion: "",
    direccion: "",
    ciudad: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-12">
        <div className="mx-auto w-full max-w-lg">
          {/* Logo */}
          <Link to="/" className="mb-8 flex items-center gap-2">
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

          {/* Header */}
          <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Registra tu negocio
          </h1>
          <p className="mt-2 text-muted-foreground">
            Únete a nuestra comunidad de emprendedores
          </p>

          {/* Progress Steps */}
          <div className="mt-8 flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    step >= s
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s ? <CheckCircle className="h-5 w-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`h-1 w-12 rounded-full transition-colors ${
                      step > s ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-2 text-sm text-muted-foreground">
            <span className={step === 1 ? "text-foreground font-medium" : ""}>Cuenta</span>
            <span>•</span>
            <span className={step === 2 ? "text-foreground font-medium" : ""}>Negocio</span>
            <span>•</span>
            <span className={step === 3 ? "text-foreground font-medium" : ""}>Ubicación</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mínimo 8 caracteres"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+1 555 123 4567"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button type="button" onClick={nextStep} className="w-full gap-2" size="lg">
                  Continuar
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {/* Step 2: Business Info */}
            {step === 2 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="nombreNegocio">Nombre del negocio</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="nombreNegocio"
                      name="nombreNegocio"
                      type="text"
                      placeholder="Ej: La Panadería de María"
                      value={formData.nombreNegocio}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="categoria">Categoría</Label>
                  <select
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Selecciona una categoría</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descripcion">Descripción</Label>
                  <Textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Describe tu negocio, productos o servicios..."
                    value={formData.descripcion}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <div className="flex gap-3">
                  <Button type="button" onClick={prevStep} variant="outline" className="gap-2" size="lg">
                    <ArrowLeft className="h-4 w-4" />
                    Atrás
                  </Button>
                  <Button type="button" onClick={nextStep} className="flex-1 gap-2" size="lg">
                    Continuar
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}

            {/* Step 3: Location */}
            {step === 3 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="direccion">Dirección</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="direccion"
                      name="direccion"
                      type="text"
                      placeholder="Calle y número"
                      value={formData.direccion}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ciudad">Ciudad / Barrio</Label>
                  <Input
                    id="ciudad"
                    name="ciudad"
                    type="text"
                    placeholder="Ej: Centro, Barrio Norte"
                    value={formData.ciudad}
                    onChange={handleChange}
                  />
                </div>

                <div className="rounded-xl border border-border bg-muted/30 p-4">
                  <h4 className="font-semibold text-foreground">Al registrarte, aceptas:</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Los términos y condiciones del servicio</li>
                    <li>• La política de privacidad</li>
                    <li>• Recibir comunicaciones de Mercadito Vecinal</li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button type="button" onClick={prevStep} variant="outline" className="gap-2" size="lg">
                    <ArrowLeft className="h-4 w-4" />
                    Atrás
                  </Button>
                  <Button type="submit" className="flex-1 gap-2" size="lg">
                    Crear mi cuenta
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/ingresar" className="font-semibold text-primary hover:underline">
              Ingresar
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden bg-primary lg:block lg:flex-1">
        <div className="flex h-full flex-col justify-center px-12 text-primary-foreground">
          <h2 className="font-display text-3xl font-bold">
            Beneficios de unirte
          </h2>
          <ul className="mt-8 space-y-6">
            {[
              {
                title: "Visibilidad local",
                description: "Miles de clientes potenciales podrán encontrar tu negocio",
              },
              {
                title: "Perfil profesional",
                description: "Muestra tus productos, servicios y horarios de atención",
              },
              {
                title: "Estadísticas",
                description: "Conoce cuántas personas visitan tu perfil",
              },
              {
                title: "100% Gratis",
                description: "Sin costos ocultos para empezar",
              },
            ].map((benefit, idx) => (
              <li key={idx} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-primary-foreground/70">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegistrarNegocio;
