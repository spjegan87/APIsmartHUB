import { useState, useEffect } from "react";
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
  Settings,
  User,
  LogOut,
  Moon,
  Sun,
  Monitor,
  Accessibility,
  Eye,
  Volume2,
  ChevronDown,
  Building2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "API Schema Management", 
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
    name: "Suppliers",
    href: "/suppliers",
    icon: Building2,
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
  const [, setLocation] = useLocation();
  const [theme, setTheme] = useState("light");
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [user, setUser] = useState({ name: "John Doe", email: "john@company.com", role: "Administrator" });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setLocation("/login");
  };

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
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-1">
                <Settings className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.role}</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile Settings
              </DropdownMenuItem>
              
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Monitor className="w-4 h-4 mr-2" />
                  Theme
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="w-4 h-4 mr-2" />
                    Light
                    {theme === "light" && <div className="w-2 h-2 bg-primary rounded-full ml-auto" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="w-4 h-4 mr-2" />
                    Dark
                    {theme === "dark" && <div className="w-2 h-2 bg-primary rounded-full ml-auto" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    <Monitor className="w-4 h-4 mr-2" />
                    System
                    {theme === "system" && <div className="w-2 h-2 bg-primary rounded-full ml-auto" />}
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Accessibility className="w-4 h-4 mr-2" />
                  Accessibility
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      High Contrast
                    </div>
                    <Switch 
                      checked={highContrast}
                      onCheckedChange={setHighContrast}
                      className="ml-2"
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Monitor className="w-4 h-4 mr-2" />
                      Large Text
                    </div>
                    <Switch 
                      checked={largeText}
                      onCheckedChange={setLargeText}
                      className="ml-2"
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Sound Effects
                    </div>
                    <Switch 
                      checked={soundEnabled}
                      onCheckedChange={setSoundEnabled}
                      className="ml-2"
                    />
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuSeparator />
              
              <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
