import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PigeonNets from "./pages/PigeonNets";
import BalconyNets from "./pages/BalconyNets";
import InvisibleGrills from "./pages/InvisibleGrills";
import BirdSpikes from "./pages/BirdSpikes";
import SportsNets from "./pages/SportsNets";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pigeon-nets" element={<PigeonNets />} />
          <Route path="/balcony-nets" element={<BalconyNets />} />
          <Route path="/invisible-grills" element={<InvisibleGrills />} />
          <Route path="/bird-spikes" element={<BirdSpikes />} />
          <Route path="/sports-nets" element={<SportsNets />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
