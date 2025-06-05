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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {metricsData.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        const trendColor = metric.trend === "up" ? "text-green-600" : "text-green-600";
        
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground truncate">{metric.title}</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mt-1 sm:mt-2">{metric.value}</p>
                  <p className={`text-xs sm:text-sm mt-1 flex items-center ${trendColor}`}>
                    <TrendIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{metric.change}</span>
                  </p>
                </div>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${metric.bgColor} dark:${metric.bgColor}/20 rounded-lg flex items-center justify-center flex-shrink-0 ml-4`}>
                  <Icon className={`${metric.iconColor} text-lg sm:text-xl`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
