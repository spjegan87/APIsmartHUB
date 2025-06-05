import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, AlertTriangle, Info, CheckCircle, Search, Filter } from "lucide-react";

const logData = [
  {
    id: 1,
    timestamp: "2024-06-05T14:32:15Z",
    level: "ERROR",
    source: "auth-service",
    message: "Authentication failed for user ID 12847",
    details: "Invalid JWT token signature",
    endpoint: "/api/v1/auth/verify",
    userId: "user_12847",
    ip: "192.168.1.100"
  },
  {
    id: 2,
    timestamp: "2024-06-05T14:31:45Z",
    level: "WARN",
    source: "payment-service",
    message: "Rate limit approached for API key",
    details: "95% of rate limit consumed in current window",
    endpoint: "/api/v1/payments/process",
    userId: "api_key_live_123",
    ip: "203.0.113.45"
  },
  {
    id: 3,
    timestamp: "2024-06-05T14:30:22Z",
    level: "INFO",
    source: "user-service",
    message: "User profile updated successfully",
    details: "Profile fields: email, preferences updated",
    endpoint: "/api/v1/users/profile",
    userId: "user_98234",
    ip: "198.51.100.78"
  },
  {
    id: 4,
    timestamp: "2024-06-05T14:29:10Z",
    level: "ERROR",
    source: "database",
    message: "Connection timeout to primary database",
    details: "Timeout after 30 seconds, falling back to read replica",
    endpoint: "N/A",
    userId: "system",
    ip: "internal"
  },
  {
    id: 5,
    timestamp: "2024-06-05T14:28:33Z",
    level: "DEBUG",
    source: "api-gateway",
    message: "Request routing completed",
    details: "Routed to user-service in 12ms",
    endpoint: "/api/v1/users/search",
    userId: "user_45123",
    ip: "172.16.0.100"
  }
];

const logMetrics = {
  totalLogs: 15847,
  errorCount: 234,
  warningCount: 567,
  infoCount: 14890,
  debugCount: 156,
  topErrors: [
    { message: "Database connection timeout", count: 45 },
    { message: "Authentication token expired", count: 32 },
    { message: "Rate limit exceeded", count: 28 },
    { message: "Invalid request format", count: 19 }
  ]
};

export function LogAnalysis() {
  const getLevelConfig = (level: string) => {
    switch (level) {
      case "ERROR":
        return { 
          color: "bg-red-100 text-red-800", 
          icon: AlertTriangle,
          bgColor: "bg-red-50 border-red-200"
        };
      case "WARN":
        return { 
          color: "bg-yellow-100 text-yellow-800", 
          icon: AlertTriangle,
          bgColor: "bg-yellow-50 border-yellow-200"
        };
      case "INFO":
        return { 
          color: "bg-blue-100 text-blue-800", 
          icon: Info,
          bgColor: "bg-blue-50 border-blue-200"
        };
      case "DEBUG":
        return { 
          color: "bg-gray-100 text-gray-800", 
          icon: CheckCircle,
          bgColor: "bg-gray-50 border-gray-200"
        };
      default:
        return { 
          color: "bg-gray-100 text-gray-800", 
          icon: Info,
          bgColor: "bg-gray-50 border-gray-200"
        };
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="space-y-6">
      {/* Log Analysis Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Log Analysis
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Log Metrics Summary */}
            <div className="grid grid-cols-5 gap-4 mb-6 p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{logMetrics.totalLogs.toLocaleString()}</div>
                <p className="text-sm text-gray-600">Total Logs</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{logMetrics.errorCount}</div>
                <p className="text-sm text-gray-600">Errors</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{logMetrics.warningCount}</div>
                <p className="text-sm text-gray-600">Warnings</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{logMetrics.infoCount.toLocaleString()}</div>
                <p className="text-sm text-gray-600">Info</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">{logMetrics.debugCount}</div>
                <p className="text-sm text-gray-600">Debug</p>
              </div>
            </div>

            {/* Recent Log Entries */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Recent Log Entries</h4>
              {logData.map((log) => {
                const levelConfig = getLevelConfig(log.level);
                const LevelIcon = levelConfig.icon;
                
                return (
                  <div key={log.id} className={`p-4 border rounded-lg ${levelConfig.bgColor}`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <LevelIcon className="w-4 h-4" />
                        <Badge className={`text-xs ${levelConfig.color}`}>
                          {log.level}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {log.source}
                        </Badge>
                        <span className="text-xs text-gray-500 font-mono">
                          {formatTimestamp(log.timestamp)}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        View Details
                      </Button>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mb-1">{log.message}</p>
                    <p className="text-xs text-gray-600 mb-2">{log.details}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Endpoint: {log.endpoint}</span>
                      <span>User: {log.userId}</span>
                      <span>IP: {log.ip}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Error Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            Top Error Patterns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {logMetrics.topErrors.map((error, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-medium text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{error.message}</p>
                    <p className="text-xs text-gray-500">Occurred {error.count} times in last 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive" className="text-xs">
                    {error.count} occurrences
                  </Badge>
                  <Button variant="outline" size="sm">
                    Analyze
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}