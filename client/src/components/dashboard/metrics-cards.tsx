import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Code, Clock, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";
import { mockMetrics } from "@/lib/mock-data";

const metricsData = [
  {
    title: "Total API Calls",
    value: mockMetrics.totalCalls,
    change: mockMetrics.callsGrowth,
    icon: BarChart3,
    bgColor: "bg-blue-100",
    iconColor: "text-primary",
    trend: "up"
  },
  {
    title: "Active APIs", 
    value: mockMetrics.activeAPIs.toString(),
    change: mockMetrics.apisGrowth,
    icon: Code,
    bgColor: "bg-green-100", 
    iconColor: "text-green-600",
    trend: "up"
  },
  {
    title: "Error Rate",
    value: mockMetrics.errorRate,
    change: mockMetrics.errorImprovement,
    icon: AlertTriangle,
    bgColor: "bg-red-100",
    iconColor: "text-red-500", 
    trend: "down"
  },
  {
    title: "Avg Response Time",
    value: mockMetrics.avgResponseTime,
    change: mockMetrics.responseImprovement,
    icon: Clock,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    trend: "down"
  }
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metricsData.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        const trendColor = metric.trend === "up" ? "text-green-600" : "text-green-600";
        
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
                  <p className={`text-sm mt-1 flex items-center ${trendColor}`}>
                    <TrendIcon className="w-4 h-4 mr-1" />
                    <span>{metric.change}</span>
                  </p>
                </div>
                <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`${metric.iconColor} text-xl`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
