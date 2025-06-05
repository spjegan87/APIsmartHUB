import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Code, 
  Users, 
  Shield, 
  FileCode, 
  Book, 
  CreditCard, 
  Activity, 
  Brain, 
  Lightbulb,
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "API Management", 
    href: "/api-management",
    icon: Code,
  },
  {
    name: "Schema Editor",
    href: "/schema",
    icon: FileCode,
  },
  {
    name: "User Management",
    href: "/users", 
    icon: Users,
  },
  {
    name: "Access Control",
    href: "/access",
    icon: Shield,
  },
  {
    name: "Documentation",
    href: "/docs",
    icon: Book,
  },
  {
    name: "Billing",
    href: "/billing",
    icon: CreditCard,
  },
  {
    name: "Monitoring",
    href: "/monitoring",
    icon: Activity,
  },
];

const aiInsights = [
  {
    name: "Recommendations", 
    href: "/recommendations",
    icon: Lightbulb,
  },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center px-6 py-4 border-b border-gray-200">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
          API
        </div>
        <span className="ml-3 text-xl font-semibold text-gray-900">ApiManager</span>
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link key={item.name} href={item.href}>
                <div className={cn(
                  "flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
                  isActive 
                    ? "bg-primary text-white" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}>
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="pt-6 mt-6 border-t border-gray-200">
          <h3 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider">AI Insights</h3>
          <div className="mt-2 space-y-1">
            {aiInsights.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              
              return (
                <Link key={item.name} href={item.href}>
                  <div className={cn(
                    "flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
                    isActive 
                      ? "bg-primary text-white" 
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}>
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      
      {/* User Profile */}
      <div className="px-4 py-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">john@company.com</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
