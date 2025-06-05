import { useState } from "react"
import { X, User, Bell, Shield, Palette, Volume2, VolumeX, Monitor, Moon, Sun, Contrast, Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "@/contexts/theme-context"

interface SettingsPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const { theme, accessibilityMode, setTheme, setAccessibilityMode } = useTheme()
  const [notifications, setNotifications] = useState({
    apiAlerts: true,
    systemUpdates: true,
    emailReports: false,
    pushNotifications: true
  })
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [autoSave, setAutoSave] = useState(true)
  const [dataRetention, setDataRetention] = useState("30")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div 
        className="fixed right-0 top-0 h-full w-full sm:w-96 bg-background border-l border-border shadow-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Settings</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Settings Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Theme Settings */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-base font-medium text-foreground">Appearance</h3>
            </div>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground">Theme</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Sun className="w-4 h-4" />
                        Light
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center gap-2">
                        <Moon className="w-4 h-4" />
                        Dark
                      </div>
                    </SelectItem>
                    <SelectItem value="system">
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4" />
                        System
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-foreground">Accessibility</Label>
                <Select value={accessibilityMode} onValueChange={setAccessibilityMode}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high-contrast">
                      <div className="flex items-center gap-2">
                        <Contrast className="w-4 h-4" />
                        High Contrast
                      </div>
                    </SelectItem>
                    <SelectItem value="large-text">
                      <div className="flex items-center gap-2">
                        <Type className="w-4 h-4" />
                        Large Text
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Separator />

          {/* Notification Settings */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-base font-medium text-foreground">Notifications</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm text-foreground">API Alerts</Label>
                <Switch 
                  checked={notifications.apiAlerts}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, apiAlerts: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm text-foreground">System Updates</Label>
                <Switch 
                  checked={notifications.systemUpdates}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, systemUpdates: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm text-foreground">Email Reports</Label>
                <Switch 
                  checked={notifications.emailReports}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailReports: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm text-foreground">Push Notifications</Label>
                <Switch 
                  checked={notifications.pushNotifications}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, pushNotifications: checked }))}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Audio Settings */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {soundEnabled ? <Volume2 className="w-4 h-4 text-muted-foreground" /> : <VolumeX className="w-4 h-4 text-muted-foreground" />}
              <h3 className="text-base font-medium text-foreground">Audio</h3>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-sm text-foreground">Sound Effects</Label>
              <Switch 
                checked={soundEnabled}
                onCheckedChange={setSoundEnabled}
              />
            </div>
          </div>

          <Separator />

          {/* Privacy & Security */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-base font-medium text-foreground">Privacy & Security</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm text-foreground">Auto-save</Label>
                <Switch 
                  checked={autoSave}
                  onCheckedChange={setAutoSave}
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Data Retention (days)</Label>
                <Select value={dataRetention} onValueChange={setDataRetention}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Separator />

          {/* Account Settings */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-base font-medium text-foreground">Account</h3>
            </div>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground">Display Name</Label>
                <Input 
                  type="text" 
                  defaultValue="John Doe" 
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Email</Label>
                <Input 
                  type="email" 
                  defaultValue="john@company.com" 
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <Button className="w-full" onClick={onClose}>
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}