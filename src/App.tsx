import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Calculators from "./pages/Calculators";
import WealthManagement from "./pages/WealthManagement";
import InvestmentPlanning from "./pages/InvestmentPlanning";
import OurTeam from "./pages/OurTeam";
import Careers from "./pages/Careers";
import InvestmentGuide from "./pages/InvestmentGuide";
import MarketInsights from "./pages/MarketInsights";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
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
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Pages */}
          <Route path="/services/wealth-management" element={<WealthManagement />} />
          <Route path="/services/investment-planning" element={<InvestmentPlanning />} />
          
          {/* Company Pages */}
          <Route path="/team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Resource Pages */}
          <Route path="/resources/investment-guide" element={<InvestmentGuide />} />
          <Route path="/resources/market-insights" element={<MarketInsights />} />
          <Route path="/resources/faq" element={<FAQ />} />
          
          {/* Legal Pages */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/disclaimer" element={<Disclaimer />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
