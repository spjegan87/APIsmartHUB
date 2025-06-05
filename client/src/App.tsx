import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import Dashboard from "@/pages/dashboard";
import ApiManagement from "@/pages/api-management";
import UserManagement from "@/pages/user-management";
import ApiSchema from "@/pages/api-schema";
import AccessControl from "@/pages/access-control";
import Billing from "@/pages/billing";
import Documentation from "@/pages/documentation";
import Monitoring from "@/pages/monitoring";
import AIInsights from "@/pages/ai-insights";
import NotFound from "@/pages/not-found";
import { useLocation } from "wouter";

const pageConfig = {
  "/": { title: "Dashboard", description: "Monitor your API performance and analytics" },
  "/api-management": { title: "API Management", description: "Manage your API endpoints and configurations" },
  "/users": { title: "User Management", description: "Manage users and their permissions" },
  "/schema": { title: "Schema Editor", description: "Design and validate your API schemas" },
  "/access": { title: "Access Control", description: "Configure API access permissions and security" },
  "/billing": { title: "Billing", description: "Manage your subscription and billing information" },
  "/docs": { title: "Documentation", description: "API documentation and guides" },
  "/monitoring": { title: "Monitoring", description: "Real-time API monitoring and alerts" },
  "/insights": { title: "AI Insights", description: "AI-powered performance insights and analytics" },
  "/recommendations": { title: "Recommendations", description: "AI-generated optimization recommendations" }
};

function Router() {
  const [location] = useLocation();
  const config = pageConfig[location as keyof typeof pageConfig] || pageConfig["/"];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={config.title} description={config.description} />
        <main className="flex-1 overflow-y-auto p-6">
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/api-management" component={ApiManagement} />
            <Route path="/users" component={UserManagement} />
            <Route path="/schema" component={ApiSchema} />
            <Route path="/access" component={AccessControl} />
            <Route path="/billing" component={Billing} />
            <Route path="/docs" component={Documentation} />
            <Route path="/monitoring" component={Monitoring} />
            <Route path="/insights" component={AIInsights} />
            <Route path="/recommendations" component={AIInsights} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </div>
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
