import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeamPage from "./pages/TeamPage";
import GalleryPage from "./pages/GalleryPage";
import ResourcesPage from "./pages/ResourcesPage";
import AlumniPage from "./pages/AlumniPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<TeamPage />} />
          {/* <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/alumni" element={<AlumniPage />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
      {/* --- Floating Developer Name --- */}
      <div className="fixed bottom-4 right-4 z-50">
        <a 
          href="https://www.linkedin.com/in/riteshsolke/"
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-name text-xs bg-card/50 backdrop-blur-md text-foreground py-1 px-3 rounded-full shadow-lg"
        >
          Developed by Ritesh Solke
        </a>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;