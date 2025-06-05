import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Zap, Target } from "lucide-react";

export default function AIInsights() {
  return (
    <div className="space-y-6">
      {/* AI Insights Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Recommendations</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">8</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Performance Score</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">87%</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Optimizations</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Response Time Optimization</h4>
                  <Badge>High Priority</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Your authentication API shows 15% slower response times during peak hours (2-4 PM). 
                  Implementing Redis caching could reduce response time by up to 40%.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm">Implement Caching</Button>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Auto-Scaling Opportunity</h4>
                  <Badge variant="secondary">Medium Priority</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Traffic patterns show consistent 200% increase on weekends. Auto-scaling configuration 
                  could improve availability and reduce costs by 25%.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm">Configure Auto-Scaling</Button>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Database Query Optimization</h4>
                  <Badge variant="secondary">Low Priority</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  User profile API has inefficient database queries. Adding indexes on frequently 
                  queried fields could improve performance by 30%.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm">Optimize Queries</Button>
                  <Button variant="outline" size="sm">View Analysis</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Security Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  🔒
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Enable API Rate Limiting</h4>
                  <p className="text-sm text-gray-500">Protect against abuse with intelligent rate limiting</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  🛡️
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Update API Keys</h4>
                  <p className="text-sm text-gray-500">3 API keys haven't been rotated in over 90 days</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Review Keys</Button>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  ✅
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">SSL Certificate Health</h4>
                  <p className="text-sm text-gray-500">All certificates are valid and up to date</p>
                </div>
              </div>
              <Badge>Healthy</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
