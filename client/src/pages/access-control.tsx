import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Plus } from "lucide-react";

export default function AccessControl() {
  return (
    <div className="space-y-6">
      {/* Access Control Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Permissions</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">47</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rate Limits</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                ⚡
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">API Keys</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">134</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                🔑
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Access Control Rules */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Access Control Rules</CardTitle>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Rule
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Admin Full Access</h4>
                  <p className="text-sm text-gray-500">Complete access to all API endpoints</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge>Admin</Badge>
                <Badge variant="outline">All APIs</Badge>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Developer Read/Write</h4>
                  <p className="text-sm text-gray-500">Read and write access to development APIs</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Developer</Badge>
                <Badge variant="outline">Dev APIs</Badge>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Viewer Read Only</h4>
                  <p className="text-sm text-gray-500">Read-only access to public APIs</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Viewer</Badge>
                <Badge variant="outline">Public APIs</Badge>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
