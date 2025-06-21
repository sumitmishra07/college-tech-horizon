
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Domains from "./pages/Domains";
import Resources from "./pages/Resources";
import FirstYear from "./pages/FirstYear";
import SecondYear from "./pages/SecondYear";
import ThirdYear from "./pages/ThirdYear";
import FourthYear from "./pages/FourthYear";
import DSARoadmap from "./pages/DSARoadmap";
import WebDevRoadmap from "./pages/WebDevRoadmap";
import MLRoadmap from "./pages/MLRoadmap";
import MobileDevRoadmap from "./pages/MobileDevRoadmap";
import CybersecurityRoadmap from "./pages/CybersecurityRoadmap";
import CloudDevOpsRoadmap from "./pages/CloudDevOpsRoadmap";
import BlockchainRoadmap from "./pages/BlockchainRoadmap";
import GameDevRoadmap from "./pages/GameDevRoadmap";
import UIUXRoadmap from "./pages/UIUXRoadmap";
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
          <Route path="/first-year" element={<FirstYear />} />
          <Route path="/second-year" element={<SecondYear />} />
          <Route path="/third-year" element={<ThirdYear />} />
          <Route path="/fourth-year" element={<FourthYear />} />
          <Route path="/dsa-roadmap" element={<DSARoadmap />} />
          <Route path="/webdev-roadmap" element={<WebDevRoadmap />} />
          <Route path="/ml-roadmap" element={<MLRoadmap />} />
          <Route path="/mobile-roadmap" element={<MobileDevRoadmap />} />
          <Route path="/cybersecurity-roadmap" element={<CybersecurityRoadmap />} />
          <Route path="/cloud-devops-roadmap" element={<CloudDevOpsRoadmap />} />
          <Route path="/blockchain-roadmap" element={<BlockchainRoadmap />} />
          <Route path="/gamedev-roadmap" element={<GameDevRoadmap />} />
          <Route path="/uiux-roadmap" element={<UIUXRoadmap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
