import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertTriangle, CheckCircle, Clock } from "lucide-react";

export default function Monitoring() {
  return (
    <div className="space-y-6">
      {/* Monitoring Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">System Status</p>
                <p className="text-lg font-bold text-green-600 mt-2">Operational</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Alerts</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">3</p>
              </div>
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Uptime</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">99.9%</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Response</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">142ms</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* API Status */}
      <Card>
        <CardHeader>
          <CardTitle>API Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-medium text-gray-900">User Authentication API</h4>
                  <p className="text-sm text-gray-500">/api/v1/auth</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Badge>Healthy</Badge>
                <span className="text-sm text-gray-500">Response: 98ms</span>
                <span className="text-sm text-gray-500">Uptime: 100%</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Payment Processing API</h4>
                  <p className="text-sm text-gray-500">/api/v1/payments</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">Warning</Badge>
                <span className="text-sm text-gray-500">Response: 245ms</span>
                <span className="text-sm text-gray-500">Uptime: 99.2%</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Data Sync API</h4>
                  <p className="text-sm text-gray-500">/api/v1/sync</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Badge>Healthy</Badge>
                <span className="text-sm text-gray-500">Response: 156ms</span>
                <span className="text-sm text-gray-500">Uptime: 99.8%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">High Response Time</h4>
                <p className="text-sm text-gray-600">Payment API response time exceeded 200ms threshold</p>
                <p className="text-xs text-gray-500 mt-1">15 minutes ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Rate Limit Exceeded</h4>
                <p className="text-sm text-gray-600">API key sk_live_*** exceeded rate limit</p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Issue Resolved</h4>
                <p className="text-sm text-gray-600">Database connection issue has been resolved</p>
                <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
