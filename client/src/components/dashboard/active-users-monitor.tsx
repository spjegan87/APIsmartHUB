import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, MapPin, Monitor } from "lucide-react";

const activeUsersData = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "s.chen@company.com",
    role: "Developer",
    location: "San Francisco, CA",
    lastActivity: "2 min ago",
    sessionDuration: "2h 34m",
    apiCalls: 247,
    device: "Chrome Desktop",
    status: "active"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    email: "m.rodriguez@company.com",
    role: "Admin",
    location: "New York, NY",
    lastActivity: "5 min ago",
    sessionDuration: "4h 12m",
    apiCalls: 892,
    device: "Safari Desktop",
    status: "active"
  },
  {
    id: 3,
    name: "Lisa Wang",
    email: "l.wang@company.com",
    role: "Viewer",
    location: "Seattle, WA",
    lastActivity: "8 min ago",
    sessionDuration: "1h 45m",
    apiCalls: 156,
    device: "Firefox Desktop",
    status: "idle"
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    email: "a.hassan@company.com",
    role: "Developer",
    location: "London, UK",
    lastActivity: "12 min ago",
    sessionDuration: "3h 28m",
    apiCalls: 534,
    device: "Chrome Mobile",
    status: "active"
  }
];

export function ActiveUsersMonitor() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500";
      case "idle": return "bg-yellow-500";
      case "away": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "Admin": return "default";
      case "Developer": return "secondary";
      case "Viewer": return "outline";
      default: return "outline";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Active Users Monitor
          </CardTitle>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Summary Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{activeUsersData.length}</div>
              <p className="text-sm text-gray-600">Active Now</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">12</div>
              <p className="text-sm text-gray-600">Total Online</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">2h 54m</div>
              <p className="text-sm text-gray-600">Avg Session</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">1,829</div>
              <p className="text-sm text-gray-600">Total Calls</p>
            </div>
          </div>

          {/* Active Users List */}
          <div className="space-y-3">
            {activeUsersData.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(user.status)} rounded-full border-2 border-white`}></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900 text-sm">{user.name}</p>
                      <Badge variant={getRoleBadgeVariant(user.role)} className="text-xs">
                        {user.role}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {user.location}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Monitor className="w-3 h-3 mr-1" />
                        {user.device}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{user.apiCalls} calls</p>
                      <p className="text-xs text-gray-500">Session: {user.sessionDuration}</p>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {user.lastActivity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}