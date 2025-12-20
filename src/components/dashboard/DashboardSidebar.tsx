import { Link, useLocation } from "react-router-dom";
import { 
  Store, 
  LayoutDashboard, 
  Building2, 
  Users, 
  Settings, 
  BarChart3, 
  Package, 
  Image, 
  LogOut,
  Shield,
  MessageSquare,
  Star,
  FileText
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  isAdmin?: boolean;
}

const DashboardSidebar = ({ isAdmin = false }: DashboardSidebarProps) => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const adminItems = [
    { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
    { title: "Negocios", url: "/admin/negocios", icon: Building2 },
    { title: "Usuarios", url: "/admin/usuarios", icon: Users },
    { title: "Estadísticas", url: "/admin/estadisticas", icon: BarChart3 },
    { title: "Reseñas", url: "/admin/resenas", icon: Star },
    { title: "Reportes", url: "/admin/reportes", icon: FileText },
    { title: "Configuración", url: "/admin/configuracion", icon: Settings },
  ];

  const ownerItems = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Mi Negocio", url: "/dashboard/negocio", icon: Building2 },
    { title: "Productos", url: "/dashboard/productos", icon: Package },
    { title: "Galería", url: "/dashboard/galeria", icon: Image },
    { title: "Mensajes", url: "/dashboard/mensajes", icon: MessageSquare },
    { title: "Estadísticas", url: "/dashboard/estadisticas", icon: BarChart3 },
    { title: "Configuración", url: "/dashboard/configuracion", icon: Settings },
  ];

  const items = isAdmin ? adminItems : ownerItems;

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="border-b border-border p-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm">
            <Store className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight text-foreground">
              Mercadito
            </span>
            <span className="text-xs text-muted-foreground">
              {isAdmin ? "Admin" : "Negocio"}
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 px-2">
            {isAdmin ? (
              <>
                <Shield className="h-4 w-4" />
                Administración
              </>
            ) : (
              <>
                <Building2 className="h-4 w-4" />
                Mi Panel
              </>
            )}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        location.pathname === item.url
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              {user?.email?.split("@")[0]}
            </span>
            <span className="text-xs text-muted-foreground">
              {isAdmin ? "Super Admin" : "Propietario"}
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={signOut}
          className="w-full gap-2"
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
