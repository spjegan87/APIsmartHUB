import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockTopAPIs } from "@/lib/mock-data";

export function TopAPIs() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Top Performing APIs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockTopAPIs.map((api) => (
            <div key={api.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(api.status)}`}></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{api.name}</p>
                  <p className="text-xs text-gray-500">{api.endpoint}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{api.calls}</p>
                <p className="text-xs text-gray-500">calls today</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
