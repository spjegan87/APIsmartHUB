import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, Lock, AlertTriangle, TrendingUp, Eye } from "lucide-react";

const accessInsightsData = [
  {
    id: 1,
    resource: "/api/v1/payments",
    accessLevel: "Admin Only",
    requestsToday: 1247,
    uniqueUsers: 3,
    successRate: 99.8,
    rejectedAttempts: 12,
    riskLevel: "low",
    lastAccess: "5 min ago"
  },
  {
    id: 2,
    resource: "/api/v1/users/profile",
    accessLevel: "Authenticated Users",
    requestsToday: 8934,
    uniqueUsers: 234,
    successRate: 97.2,
    rejectedAttempts: 89,
    riskLevel: "medium",
    lastAccess: "1 min ago"
  },
  {
    id: 3,
    resource: "/api/v1/admin/system",
    accessLevel: "Super Admin",
    requestsToday: 45,
    uniqueUsers: 1,
    successRate: 100,
    rejectedAttempts: 0,
    riskLevel: "low",
    lastAccess: "2 hours ago"
  },
  {
    id: 4,
    resource: "/api/v1/public/status",
    accessLevel: "Public",
    requestsToday: 15672,
    uniqueUsers: 1247,
    successRate: 99.9,
    rejectedAttempts: 3,
    riskLevel: "low",
    lastAccess: "< 1 min ago"
  }
];

const securityAlerts = [
  {
    id: 1,
    type: "Unusual Access Pattern",
    description: "Multiple failed authentication attempts from IP 192.168.1.100",
    severity: "high",
    timestamp: "10 min ago"
  },
  {
    id: 2,
    type: "Permission Escalation",
    description: "User attempted to access admin endpoint without proper role",
    severity: "medium",
    timestamp: "25 min ago"
  },
  {
    id: 3,
    type: "Rate Limit Exceeded",
    description: "API key exceeded rate limit by 150% in last hour",
    severity: "low",
    timestamp: "1 hour ago"
  }
];

export function AccessControlInsights() {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-green-600 bg-green-100";
      case "medium": return "text-yellow-600 bg-yellow-100";
      case "high": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low": return "bg-blue-100 text-blue-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "high": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getAccessLevelColor = (level: string) => {
    if (level.includes("Admin")) return "bg-red-100 text-red-800";
    if (level.includes("Public")) return "bg-green-100 text-green-800";
    return "bg-blue-100 text-blue-800";
  };

  return (
    <div className="space-y-6">
      {/* Access Control Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Access Control Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {accessInsightsData.reduce((sum, item) => sum + item.requestsToday, 0).toLocaleString()}
                </div>
                <p className="text-sm text-gray-600">Total Requests</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {accessInsightsData.reduce((sum, item) => sum + item.uniqueUsers, 0)}
                </div>
                <p className="text-sm text-gray-600">Unique Users</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {((accessInsightsData.reduce((sum, item) => sum + item.successRate, 0) / accessInsightsData.length)).toFixed(1)}%
                </div>
                <p className="text-sm text-gray-600">Avg Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {accessInsightsData.reduce((sum, item) => sum + item.rejectedAttempts, 0)}
                </div>
                <p className="text-sm text-gray-600">Blocked Attempts</p>
              </div>
            </div>

            {/* Resource Access Details */}
            <div className="space-y-3">
              {accessInsightsData.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <Lock className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-gray-900 text-sm font-mono">{item.resource}</p>
                        <Badge className={`text-xs ${getAccessLevelColor(item.accessLevel)}`}>
                          {item.accessLevel}
                        </Badge>
                        <Badge className={`text-xs ${getRiskColor(item.riskLevel)}`}>
                          {item.riskLevel} risk
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">{item.requestsToday.toLocaleString()} requests</span>
                        <span className="text-xs text-gray-500">{item.uniqueUsers} users</span>
                        <span className="text-xs text-gray-500">{item.successRate}% success</span>
                        <span className="text-xs text-gray-500">Last: {item.lastAccess}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.rejectedAttempts > 0 && (
                      <div className="text-right mr-4">
                        <p className="text-sm font-medium text-red-600">{item.rejectedAttempts} blocked</p>
                      </div>
                    )}
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Alerts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Security Alerts
            </CardTitle>
            <Badge variant="outline">{securityAlerts.length} Active</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {securityAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-gray-900 text-sm">{alert.type}</h4>
                    <Badge className={`text-xs ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                  <p className="text-xs text-gray-500">{alert.timestamp}</p>
                </div>
                <Button variant="outline" size="sm">
                  Investigate
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}