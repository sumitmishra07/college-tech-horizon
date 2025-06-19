
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Domains from "./pages/Domains";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import FirstYear from "./pages/FirstYear";
import SecondYear from "./pages/SecondYear";
import ThirdYear from "./pages/ThirdYear";
import FourthYear from "./pages/FourthYear";
import DSARoadmap from "./pages/DSARoadmap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/first-year" element={<FirstYear />} />
          <Route path="/second-year" element={<SecondYear />} />
          <Route path="/third-year" element={<ThirdYear />} />
          <Route path="/fourth-year" element={<FourthYear />} />
          <Route path="/dsa-roadmap" element={<DSARoadmap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
