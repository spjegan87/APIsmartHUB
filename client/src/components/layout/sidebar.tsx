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
  ChevronLeft,
  ChevronRight,
  BarChart3,
  TrendingUp,
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
    name: "Documentation",
    href: "/docs",
    icon: Book,
  },
  {
    name: "Billing",
    href: "/billing",
    icon: CreditCard,
  },
];

const analyticsNavigation = [
  {
    name: "API Analytics",
    href: "/analytics/api",
    icon: BarChart3,
  },
  {
    name: "Monitoring",
    href: "/monitoring",
    icon: Activity,
  },
  {
    name: "Performance",
    href: "/analytics/performance",
    icon: TrendingUp,
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
  const [isCollapsed, setIsCollapsed] = useState(false);
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

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
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
      <div
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 bg-[#2D3B87] flex flex-col shadow-lg transform transition-all duration-300 ease-in-out lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
          isCollapsed ? "lg:w-20" : "w-64",
        )}
      >
        {/* Logo Section */}
        <div className={cn(
          "flex items-center border-b border-[#3A4A99] relative",
          isCollapsed ? "px-3 py-4 justify-center" : "px-6 py-6"
        )}>
          <div className={cn(
            "bg-white rounded-lg flex items-center justify-center text-[#2D3B87] font-bold",
            isCollapsed ? "w-10 h-10 text-base" : "w-8 h-8 text-sm"
          )}>
            {isCollapsed ? (
              <Building2 className="w-6 h-6" />
            ) : (
              "API"
            )}
          </div>
          {!isCollapsed && (
            <span className="ml-3 text-xl font-semibold text-white truncate">
              APIsmartHUB
            </span>
          )}
          {/* Desktop Collapse Button */}
          {!isCollapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto hidden lg:flex text-white hover:bg-[#3A4A99]"
              onClick={toggleCollapse}
              title="Collapse sidebar"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          )}
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
        
        {/* Collapsed Expand Button */}
        {isCollapsed && (
          <div className="absolute top-6 -right-3 z-60 hidden lg:block">
            <Button
              variant="default"
              size="icon"
              className="w-6 h-6 bg-white text-[#2D3B87] hover:bg-gray-100 shadow-md rounded-full"
              onClick={toggleCollapse}
              title="Expand sidebar"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className={cn(
          "flex-1 space-y-1 overflow-y-auto scrollbar-hide",
          isCollapsed ? "px-2 py-4" : "px-4 py-6"
        )}>
          <div className={cn(isCollapsed ? "space-y-2" : "space-y-1")}>
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;

              return (
                <Link key={item.name} href={item.href}>
                  <div
                    className={cn(
                      "flex items-center text-base font-medium rounded-lg transition-all duration-200 cursor-pointer group",
                      isActive
                        ? "bg-white text-[#2D3B87] shadow-sm"
                        : "text-white/80 hover:bg-[#3A4A99] hover:text-white",
                      isCollapsed 
                        ? "justify-center p-3 mx-1" 
                        : "px-4 py-3 space-x-3"
                    )}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <Icon className={cn(
                      isCollapsed ? "w-6 h-6" : "w-5 h-5"
                    )} />
                    {!isCollapsed && <span className="font-medium">{item.name}</span>}
                  </div>
                </Link>
              );
            })}
          </div>

          {!isCollapsed && (
            <>
              <div className="pt-6 mt-6 border-t border-[#3A4A99]">
                <h3 className="px-4 text-xs font-semibold text-white/60 uppercase tracking-wider">
                  Analytics
                </h3>
                <div className="mt-3 space-y-1">
                  {analyticsNavigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = location === item.href;

                    return (
                      <Link key={item.name} href={item.href}>
                        <div
                          className={cn(
                            "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 cursor-pointer space-x-3",
                            isActive
                              ? "bg-white text-[#2D3B87] shadow-sm"
                              : "text-white/80 hover:bg-[#3A4A99] hover:text-white"
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
                            "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 cursor-pointer space-x-3",
                            isActive
                              ? "bg-white text-[#2D3B87] shadow-sm"
                              : "text-white/80 hover:bg-[#3A4A99] hover:text-white"
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
            </>
          )}

          {isCollapsed && (
            <>
              <div className="pt-4 mt-4 border-t border-[#3A4A99]">
                <div className="space-y-2">
                  {analyticsNavigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = location === item.href;

                    return (
                      <Link key={item.name} href={item.href}>
                        <div
                          className={cn(
                            "flex items-center justify-center p-3 mx-1 text-base font-medium rounded-lg transition-all duration-200 cursor-pointer",
                            isActive
                              ? "bg-white text-[#2D3B87] shadow-sm"
                              : "text-white/80 hover:bg-[#3A4A99] hover:text-white"
                          )}
                          title={item.name}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#3A4A99]">
                <div className="space-y-2">
                  {aiInsights.map((item) => {
                    const Icon = item.icon;
                    const isActive = location === item.href;

                    return (
                      <Link key={item.name} href={item.href}>
                        <div
                          className={cn(
                            "flex items-center justify-center p-3 mx-1 text-base font-medium rounded-lg transition-all duration-200 cursor-pointer",
                            isActive
                              ? "bg-white text-[#2D3B87] shadow-sm"
                              : "text-white/80 hover:bg-[#3A4A99] hover:text-white"
                          )}
                          title={item.name}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </nav>

        {/* User Profile */}
        <div className={cn(
          "border-t border-[#3A4A99]",
          isCollapsed ? "px-2 py-4" : "px-4 py-6"
        )}>
          {isCollapsed ? (
            <div className="space-y-3">
              <div className="flex justify-center">
                <div 
                  className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg cursor-pointer"
                  title={user.name}
                >
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/60 hover:text-red-400 hover:bg-[#3A4A99] p-2 w-10 h-10"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
              >
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
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
          )}
        </div>
      </div>
    </>
  );
}
