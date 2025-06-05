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

import Billing from "@/pages/billing";
import Documentation from "@/pages/documentation";
import Monitoring from "@/pages/monitoring";
import AIInsights from "@/pages/ai-insights";
import Login from "@/pages/login";
import NotFound from "@/pages/not-found";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

const pageConfig = {
  "/": { title: "Dashboard", description: "Monitor your API performance and analytics" },
  "/api-management": { title: "API Management", description: "Manage your API endpoints and configurations" },
  "/users": { title: "User Management", description: "Manage users and their permissions" },

  "/schema": { title: "Schema Editor", description: "Design and validate your API schemas" },

  "/billing": { title: "Billing", description: "Manage your subscription and billing information" },
  "/docs": { title: "Documentation", description: "API documentation and guides" },
  "/monitoring": { title: "Monitoring", description: "Real-time API monitoring and alerts" },
  "/insights": { title: "AI Insights", description: "AI-powered performance insights and analytics" },
  "/recommendations": { title: "Recommendations", description: "AI-generated optimization recommendations" }
};

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
    
    if (authStatus !== "true") {
      setLocation("/login");
    }
  }, [setLocation]);

  if (isAuthenticated === null) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <Component />;
}

function Router() {
  const [location] = useLocation();
  const config = pageConfig[location as keyof typeof pageConfig] || pageConfig["/"];

  if (location === "/login") {
    return <Login />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={config.title} description={config.description} />
        <main className="flex-1 overflow-y-auto p-6">
          <Switch>
            <Route path="/" component={() => <ProtectedRoute component={Dashboard} />} />
            <Route path="/api-management" component={() => <ProtectedRoute component={ApiManagement} />} />
            <Route path="/users" component={() => <ProtectedRoute component={UserManagement} />} />

            <Route path="/schema" component={() => <ProtectedRoute component={ApiSchema} />} />

            <Route path="/billing" component={() => <ProtectedRoute component={Billing} />} />
            <Route path="/docs" component={() => <ProtectedRoute component={Documentation} />} />
            <Route path="/monitoring" component={() => <ProtectedRoute component={Monitoring} />} />
            <Route path="/recommendations" component={() => <ProtectedRoute component={AIInsights} />} />
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
