import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { 
  Eye, 
  Users, 
  MessageSquare, 
  TrendingUp,
  Building2,
  Plus,
  Package,
  Image
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface Business {
  id: string;
  name: string;
  category: string;
  status: string;
  views_count: number;
  created_at: string;
}

const BusinessDashboard = () => {
  const { user } = useAuth();
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchBusiness();
    }
  }, [user]);

  const fetchBusiness = async () => {
    try {
      const { data, error } = await supabase
        .from("businesses")
        .select("*")
        .eq("owner_id", user?.id)
        .maybeSingle();

      if (error) throw error;
      setBusiness(data);
    } catch (error) {
      console.error("Error fetching business:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-secondary text-secondary-foreground">Aprobado</Badge>;
      case "pending":
        return <Badge variant="outline">Pendiente de aprobación</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rechazado</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        <main className="flex-1 bg-muted/30">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border bg-background px-6">
            <SidebarTrigger />
            <h1 className="text-xl font-bold text-foreground">Mi Dashboard</h1>
          </header>

          <div className="p-6">
            {loading ? (
              <div className="flex h-60 items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              </div>
            ) : !business ? (
              /* No business registered */
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  ¡Registra tu primer negocio!
                </h2>
                <p className="mb-6 max-w-md text-muted-foreground">
                  Aún no tienes un negocio registrado. Crea tu perfil de negocio para empezar a recibir clientes.
                </p>
                <Button asChild size="lg" className="gap-2">
                  <Link to="/dashboard/negocio/nuevo">
                    <Plus className="h-5 w-5" />
                    Registrar mi negocio
                  </Link>
                </Button>
              </div>
            ) : (
              <>
                {/* Business Header */}
                <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Building2 className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{business.name}</h2>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{business.category}</span>
                        {getStatusBadge(business.status)}
                      </div>
                    </div>
                  </div>
                  <Button asChild variant="outline">
                    <Link to="/dashboard/negocio">Editar negocio</Link>
                  </Button>
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <StatsCard
                    title="Visitas al Perfil"
                    value={business.views_count || 0}
                    icon={Eye}
                    change="+12% esta semana"
                    changeType="positive"
                  />
                  <StatsCard
                    title="Clientes Potenciales"
                    value="24"
                    icon={Users}
                    change="+5 nuevos"
                    changeType="positive"
                  />
                  <StatsCard
                    title="Mensajes"
                    value="8"
                    icon={MessageSquare}
                    change="3 sin leer"
                    changeType="neutral"
                  />
                  <StatsCard
                    title="Conversiones"
                    value="15%"
                    icon={TrendingUp}
                    change="+2.5%"
                    changeType="positive"
                  />
                </div>

                {/* Quick Actions */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Link
                    to="/dashboard/productos"
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                      <Package className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Productos y Servicios</h3>
                      <p className="text-sm text-muted-foreground">Gestiona tu catálogo</p>
                    </div>
                  </Link>

                  <Link
                    to="/dashboard/galeria"
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20">
                      <Image className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Galería de Fotos</h3>
                      <p className="text-sm text-muted-foreground">Sube imágenes de tu negocio</p>
                    </div>
                  </Link>

                  <Link
                    to="/dashboard/mensajes"
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Mensajes</h3>
                      <p className="text-sm text-muted-foreground">Responde a tus clientes</p>
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BusinessDashboard;
