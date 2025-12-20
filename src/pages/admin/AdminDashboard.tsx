import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import { supabase } from "@/integrations/supabase/client";
import { 
  Building2, 
  Users, 
  Eye, 
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Business {
  id: string;
  name: string;
  category: string;
  status: string;
  created_at: string;
  owner_id: string;
}

const AdminDashboard = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [stats, setStats] = useState({
    totalBusinesses: 0,
    pendingBusinesses: 0,
    approvedBusinesses: 0,
    totalUsers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: businessData, error } = await supabase
        .from("businesses")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setBusinesses(businessData || []);
      
      const pending = businessData?.filter(b => b.status === "pending").length || 0;
      const approved = businessData?.filter(b => b.status === "approved").length || 0;
      
      setStats({
        totalBusinesses: businessData?.length || 0,
        pendingBusinesses: pending,
        approvedBusinesses: approved,
        totalUsers: 0,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateBusinessStatus = async (id: string, newStatus: "approved" | "pending" | "rejected" | "suspended") => {
    try {
      const { error } = await supabase
        .from("businesses")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;
      
      fetchData();
    } catch (error) {
      console.error("Error updating business:", error);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-secondary text-secondary-foreground gap-1"><CheckCircle className="h-3 w-3" /> Aprobado</Badge>;
      case "pending":
        return <Badge variant="outline" className="gap-1"><Clock className="h-3 w-3" /> Pendiente</Badge>;
      case "rejected":
        return <Badge variant="destructive" className="gap-1"><XCircle className="h-3 w-3" /> Rechazado</Badge>;
      case "suspended":
        return <Badge variant="secondary" className="gap-1"><AlertCircle className="h-3 w-3" /> Suspendido</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar isAdmin />
        
        <main className="flex-1 bg-muted/30">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border bg-background px-6">
            <SidebarTrigger />
            <h1 className="text-xl font-bold text-foreground">Panel de Administración</h1>
          </header>

          <div className="p-6">
            {/* Stats Grid */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Total Negocios"
                value={stats.totalBusinesses}
                icon={Building2}
                change="+12% este mes"
                changeType="positive"
              />
              <StatsCard
                title="Pendientes"
                value={stats.pendingBusinesses}
                icon={Clock}
                change="Requieren revisión"
                changeType="neutral"
              />
              <StatsCard
                title="Aprobados"
                value={stats.approvedBusinesses}
                icon={CheckCircle}
                change="+8% esta semana"
                changeType="positive"
              />
              <StatsCard
                title="Vistas Totales"
                value="12.5K"
                icon={Eye}
                change="+24% este mes"
                changeType="positive"
              />
            </div>

            {/* Recent Businesses Table */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Negocios Recientes</h2>
                <Button variant="outline" size="sm">Ver todos</Button>
              </div>

              {loading ? (
                <div className="flex h-40 items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                </div>
              ) : businesses.length === 0 ? (
                <div className="flex h-40 flex-col items-center justify-center text-muted-foreground">
                  <Building2 className="mb-2 h-12 w-12 opacity-50" />
                  <p>No hay negocios registrados</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Negocio</TableHead>
                      <TableHead>Categoría</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {businesses.slice(0, 10).map((business) => (
                      <TableRow key={business.id}>
                        <TableCell className="font-medium">{business.name}</TableCell>
                        <TableCell>{business.category}</TableCell>
                        <TableCell>{getStatusBadge(business.status)}</TableCell>
                        <TableCell>
                          {new Date(business.created_at).toLocaleDateString("es")}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            {business.status === "pending" && (
                              <>
                                <Button
                                  size="sm"
                                  onClick={() => updateBusinessStatus(business.id, "approved")}
                                  className="h-8 gap-1"
                                >
                                  <CheckCircle className="h-3 w-3" />
                                  Aprobar
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => updateBusinessStatus(business.id, "rejected")}
                                  className="h-8 gap-1"
                                >
                                  <XCircle className="h-3 w-3" />
                                  Rechazar
                                </Button>
                              </>
                            )}
                            {business.status === "approved" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateBusinessStatus(business.id, "suspended")}
                                className="h-8"
                              >
                                Suspender
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
