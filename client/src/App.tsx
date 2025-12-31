import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Page Imports
import Home from "@/pages/Home";
import About from "@/pages/About";
import News from "@/pages/News";
import LaserSystems from "@/pages/LaserSystems";
import ElectricVehicles from "@/pages/ElectricVehicles";
import PharmaAutomation from "@/pages/PharmaAutomation";
import HighSpeedAutomation from "@/pages/HighSpeedAutomation";
import DefenceAerospace from "@/pages/DefenceAerospace";
import ExportSolutions from "@/pages/ExportSolutions";

import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      
      {/* Expertise Domain Pages */}
      <Route path="/laser-systems" component={LaserSystems} />
      <Route path="/electric-vehicles" component={ElectricVehicles} />
      <Route path="/pharma-automation" component={PharmaAutomation} />
      <Route path="/high-speed-automation" component={HighSpeedAutomation} />
      <Route path="/defence-aerospace" component={DefenceAerospace} />
      <Route path="/export-solutions" component={ExportSolutions} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
