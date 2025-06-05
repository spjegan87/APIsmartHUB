import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, Globe, Zap } from "lucide-react";

const trafficData = [
  {
    endpoint: "/api/v1/auth/login",
    requests: 47832,
    change: "+12.3%",
    trend: "up",
    status: "healthy",
    avgResponse: "89ms",
    errorRate: "0.01%"
  },
  {
    endpoint: "/api/v1/users/profile",
    requests: 23447,
    change: "+8.7%",
    trend: "up",
    status: "healthy",
    avgResponse: "124ms",
    errorRate: "0.03%"
  },
  {
    endpoint: "/api/v1/payments/process",
    requests: 18293,
    change: "-2.1%",
    trend: "down",
    status: "warning",
    avgResponse: "267ms",
    errorRate: "0.15%"
  },
  {
    endpoint: "/api/v1/data/export",
    requests: 9834,
    change: "+15.2%",
    trend: "up",
    status: "healthy",
    avgResponse: "445ms",
    errorRate: "0.02%"
  }
];

export function ApiTrafficOverview() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy": return "bg-green-500";
      case "warning": return "bg-yellow-500";
      case "error": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? TrendingUp : TrendingDown;
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            API Traffic Overview
          </CardTitle>
          <Badge variant="outline">Last 24 Hours</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Globe className="w-4 h-4 text-blue-600 mr-1" />
                <span className="text-2xl font-bold text-gray-900">99,406</span>
              </div>
              <p className="text-sm text-gray-600">Total Requests</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Zap className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-2xl font-bold text-gray-900">156ms</span>
              </div>
              <p className="text-sm text-gray-600">Avg Response</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Activity className="w-4 h-4 text-purple-600 mr-1" />
                <span className="text-2xl font-bold text-gray-900">99.97%</span>
              </div>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
          </div>

          {/* Traffic Details */}
          <div className="space-y-3">
            {trafficData.map((item, index) => {
              const TrendIcon = getTrendIcon(item.trend);
              return (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{item.endpoint}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">Requests: {item.requests.toLocaleString()}</span>
                        <span className="text-xs text-gray-500">Response: {item.avgResponse}</span>
                        <span className="text-xs text-gray-500">Error: {item.errorRate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`flex items-center ${getTrendColor(item.trend)}`}>
                      <TrendIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{item.change}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}