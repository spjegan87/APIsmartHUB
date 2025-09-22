
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
  Building2,
  Menu,
  X,
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
  DropdownMenuTrigger,
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

interface SidebarProps {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function Sidebar({ isMobileOpen = false, onMobileClose }: SidebarProps) {
  const [location] = useLocation();
  const [, setLocation] = useLocation();
  const [theme, setTheme] = useState("light");
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@company.com",
    role: "Administrator",
  });

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
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#2D3B87] flex flex-col shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Section */}
        <div className="flex items-center px-6 py-6 border-b border-[#3A4A99]">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#2D3B87] font-bold text-sm">
            API
          </div>
          <span className="ml-3 text-xl font-semibold text-white truncate">
            APIsmartHUB
          </span>
          {/* Mobile Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden text-white hover:bg-[#3A4A99]"
            onClick={onMobileClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;

              return (
                <Link key={item.name} href={item.href}>
                  <div
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer",
                      isActive
                        ? "bg-white text-[#2D3B87] shadow-sm"
                        : "text-white/80 hover:bg-[#3A4A99] hover:text-white",
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="pt-6 mt-6 border-t border-[#3A4A99]">
            <h3 className="px-4 text-xs font-semibold text-white/60 uppercase tracking-wider">
              AI Insights
            </h3>
            <div className="mt-3 space-y-1">
              {aiInsights.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.href;

                return (
                  <Link key={item.name} href={item.href}>
                    <div
                      className={cn(
                        "flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer",
                        isActive
                          ? "bg-white text-[#2D3B87] shadow-sm"
                          : "text-white/80 hover:bg-[#3A4A99] hover:text-white",
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* User Profile */}
        <div className="px-4 py-6 border-t border-[#3A4A99]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white">{user.name}</p>
              <p className="text-xs text-white/60 truncate">{user.email}</p>
              <p className="text-xs text-white/40">{user.role}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/60 hover:text-red-400 hover:bg-[#3A4A99] p-2"
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
