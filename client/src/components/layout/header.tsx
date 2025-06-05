import { Search, Bell, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeSwitch } from "@/components/theme-switcher";
import { SettingsPanel } from "@/components/settings-panel";
import { useState } from "react";

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <header className="bg-background border-b border-border px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground truncate">{title}</h1>
          <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block truncate">{description}</p>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 ml-4">
          {/* Search - Hidden on mobile, shown on larger screens */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search APIs..." 
              className="w-48 lg:w-64 pl-10"
            />
          </div>
          
          {/* Theme Switcher - Hidden on small screens */}
          <div className="hidden sm:block">
            <ThemeSwitch />
          </div>
          
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative flex-shrink-0">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          
          {/* Settings */}
          <Button 
            variant="ghost" 
            size="icon"
            className="flex-shrink-0"
            onClick={() => setIsSettingsOpen(true)}
          >
            <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          {/* Quick Actions - Responsive text */}
          <Button className="flex-shrink-0">
            <Plus className="mr-0 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">New API</span>
          </Button>
        </div>
      </header>
      
      {/* Settings Panel */}
      <SettingsPanel 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  );
}
