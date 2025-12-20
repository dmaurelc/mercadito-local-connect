import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Directorio from "./pages/Directorio";
import NegocioDetalle from "./pages/NegocioDetalle";
import Categorias from "./pages/Categorias";
import Nosotros from "./pages/Nosotros";
import Ingresar from "./pages/Ingresar";
import RegistrarNegocio from "./pages/RegistrarNegocio";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Planes from "./pages/Planes";
import Ayuda from "./pages/Ayuda";
import Guia from "./pages/Guia";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/AdminDashboard";
import BusinessDashboard from "./pages/dashboard/BusinessDashboard";
import BusinessForm from "./pages/dashboard/BusinessForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/directorio" element={<Directorio />} />
            <Route path="/negocio/:slug" element={<NegocioDetalle />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/ingresar" element={<Ingresar />} />
            <Route path="/registrar" element={<RegistrarNegocio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path="/guia" element={<Guia />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="super_admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute requiredRole="super_admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Business Owner Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <BusinessDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/negocio"
              element={
                <ProtectedRoute>
                  <BusinessForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/negocio/nuevo"
              element={
                <ProtectedRoute>
                  <BusinessForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <BusinessDashboard />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
