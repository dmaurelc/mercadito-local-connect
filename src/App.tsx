import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Directorio from "./pages/Directorio";
import NegocioDetalle from "./pages/NegocioDetalle";
import Categorias from "./pages/Categorias";
import Nosotros from "./pages/Nosotros";
import Ingresar from "./pages/Ingresar";
import RegistrarNegocio from "./pages/RegistrarNegocio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/directorio" element={<Directorio />} />
          <Route path="/negocio/:slug" element={<NegocioDetalle />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="/registrar" element={<RegistrarNegocio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
