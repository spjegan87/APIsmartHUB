import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Check, User, AlertTriangle } from "lucide-react";
import { mockRecentActivity } from "@/lib/mock-data";

export function RecentActivity() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "create":
        return <Plus className="w-4 h-4 text-primary" />;
      case "update":
        return <Check className="w-4 h-4 text-green-600" />;
      case "user":
        return <User className="w-4 h-4 text-yellow-600" />;
      case "alert":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Plus className="w-4 h-4 text-primary" />;
    }
  };

  const getActivityBgColor = (type: string) => {
    switch (type) {
      case "create":
        return "bg-blue-100";
      case "update":
        return "bg-green-100";
      case "user":
        return "bg-yellow-100";
      case "alert":
        return "bg-red-100";
      default:
        return "bg-blue-100";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRecentActivity.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-8 h-8 ${getActivityBgColor(activity.type)} rounded-full flex items-center justify-center flex-shrink-0`}>
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.description}</p>
                <p className="text-xs text-gray-500">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="link" className="w-full mt-4 text-primary hover:text-blue-700 font-medium">
          View all activity
        </Button>
      </CardContent>
    </Card>
  );
}
