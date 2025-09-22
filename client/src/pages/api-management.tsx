import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Plus, 
  Import, 
  FileDown, 
  History, 
  Copy, 
  Save, 
  Play, 
  Settings,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Bell,
  Mail,
  MessageSquare,
  Webhook,
  Trash2
} from "lucide-react";

const apiSchemas = [
  {
    id: 1,
    name: "Group Booking API",
    endpoint: "/api/v1/booking",
    version: "v2.1.5",
    category: "Booking",
    status: "Active",
    lastModified: "June 5, 2024",
    format: "JSON",
    actions: ["Edit", "Clone", "Delete"]
  },
  {
    id: 2,
    name: "Payment Processing API", 
    endpoint: "/api/v1/payments",
    version: "v1.8.2",
    category: "Payment",
    status: "Deprecated",
    lastModified: "June 1, 2024",
    format: "JSON",
    actions: ["Edit", "Clone", "Delete"]
  },
  {
    id: 3,
    name: "User Authentication API",
    endpoint: "/api/v1/auth",
    version: "v3.0.1",
    category: "Authentication",
    status: "Beta",
    lastModified: "May 28, 2024",
    format: "JSON",
    actions: ["Edit", "Clone", "Delete"]
  },
  {
    id: 4,
    name: "Notification API",
    endpoint: "/api/v1/notifications",
    version: "v2.4.3",
    category: "Communication",
    status: "Inactive",
    lastModified: "May 25, 2024",
    format: "JSON",
    actions: ["Edit", "Clone", "Delete"]
  }
];

const requestSchema = `{
  "bookingRequest": {
    "properties": {
      "groupId": "string",
      "bookingDate": "string",
      "participants": "array",
      "serviceType": "string"
    },
    "required": ["groupId", "bookingDate"],
    "additionalProperties": false
  }
}`;

const responseSchema = `{
  "bookingResponse": {
    "properties": {
      "bookingId": "string", 
      "confirmationCode": "string",
      "status": "string",
      "totalAmount": "number",
      "currency": "string"
    },
    "required": ["bookingId", "status"]
  }
}`;

const performanceMetrics = [
  { name: "Average Response Time", value: "127ms", trend: "down", color: "text-green-600" },
  { name: "Error Rate", value: "0.8%", trend: "up", color: "text-red-600" },
  { name: "API Calls", value: "24,521", trend: "up", color: "text-blue-600" }
];

export default function ApiManagement() {
  const [selectedSchema, setSelectedSchema] = useState(apiSchemas[0]);
  const [activeTab, setActiveTab] = useState("definition");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Beta": return "bg-blue-100 text-blue-800";
      case "Deprecated": return "bg-yellow-100 text-yellow-800";
      case "Inactive": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>API Schema Management</CardTitle>
            <div className="flex items-center gap-3">
              <Button variant="outline">
                <Import className="w-4 h-4 mr-2" />
                Import Schema
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create New Schema
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search APIs..." className="pl-10" />
            </div>
            <Select defaultValue="all-status">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="beta">Beta</SelectItem>
                <SelectItem value="deprecated">Deprecated</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-versions">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-versions">All Versions</SelectItem>
                <SelectItem value="v3">v3.x</SelectItem>
                <SelectItem value="v2">v2.x</SelectItem>
                <SelectItem value="v1">v1.x</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              Reset Filters
            </Button>
          </div>

          {/* API Schemas Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">API Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Version</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Modified</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Format</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {apiSchemas.map((schema) => (
                  <tr 
                    key={schema.id} 
                    className={`hover:bg-gray-50 cursor-pointer ${selectedSchema.id === schema.id ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedSchema(schema)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{schema.name}</div>
                        <div className="text-sm text-gray-500 font-mono">{schema.endpoint}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schema.version}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schema.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className={getStatusColor(schema.status)}>
                        {schema.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schema.lastModified}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schema.format}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50" title="Edit">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50" title="Clone">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Schema Details */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CardTitle>{selectedSchema.name}</CardTitle>
              <Badge className={getStatusColor(selectedSchema.status)}>
                {selectedSchema.status}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <History className="w-4 h-4 mr-2" />
                Version History
              </Button>
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Clone
              </Button>
              <Button>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="definition">Schema Definition</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="testing">Field Consent</TabsTrigger>
              <TabsTrigger value="monitoring">Error Handling</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="messaging">Proactive Messaging</TabsTrigger>
            </TabsList>

            <TabsContent value="definition" className="space-y-6 mt-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Request Schema</h4>
                  <Textarea
                    className="h-64 font-mono text-sm"
                    value={requestSchema}
                    readOnly
                  />
                  <div className="mt-3 flex gap-2">
                    <Button size="sm">Validate Schema</Button>
                    <Button variant="outline" size="sm">Format</Button>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Response Schema</h4>
                  <Textarea
                    className="h-64 font-mono text-sm"
                    value={responseSchema}
                    readOnly
                  />
                  <div className="mt-3 flex gap-2">
                    <Button size="sm">Validate Schema</Button>
                    <Button variant="outline" size="sm">Format</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="documentation" className="space-y-6 mt-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-900">API Description</label>
                  <Textarea 
                    className="mt-2" 
                    placeholder="Enter API description..."
                    defaultValue="Group Booking API allows users to create and manage group reservations with multiple participants."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900">Base URL</label>
                    <Input className="mt-2" defaultValue="https://api.bookingsystem.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Authentication</label>
                    <Select defaultValue="bearer">
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bearer">Bearer Token</SelectItem>
                        <SelectItem value="api-key">API Key</SelectItem>
                        <SelectItem value="oauth">OAuth 2.0</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="testing" className="space-y-6 mt-6">
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-900">Field Consent Configuration</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Email Collection</p>
                      <p className="text-sm text-gray-600">Require explicit consent for email data collection</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Location Data</p>
                      <p className="text-sm text-gray-600">Request permission for location-based services</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Usage Analytics</p>
                      <p className="text-sm text-gray-600">Collect anonymized usage statistics</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-gray-900">Error Handling Configuration</h4>
                
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Smart Error Detection</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Enable Auto-Detection</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Machine Learning Enhanced</span>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Pattern Recognition</span>
                        <Switch defaultChecked />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Error Response Templates</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">404 Response Message</label>
                        <Input defaultValue="Resource not found. Please verify your request." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">500 Response Message</label>
                        <Input defaultValue="Internal server error. Please try again later." />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Custom Error Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      className="h-32"
                      placeholder="Define custom error responses and handling logic..."
                      defaultValue="Custom error messages help provide better user experience. Define specific error codes, user-friendly messages, and suggested actions for common error scenarios like missing parameters, invalid formats, or rate limiting."
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6 mt-6">
              <div className="grid grid-cols-3 gap-6 mb-6">
                {performanceMetrics.map((metric, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{metric.name}</p>
                          <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          <BarChart3 className={`w-4 h-4 ${
                            metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Usage Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-40 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">API usage trending upward</p>
                        <p className="text-xs text-gray-500">+15% vs last week</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Error Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">400 Bad Request</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <Progress value={45} />
                      <div className="flex justify-between items-center">
                        <span className="text-sm">401 Unauthorized</span>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                      <Progress value={30} />
                      <div className="flex justify-between items-center">
                        <span className="text-sm">500 Server Error</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <Progress value={25} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="messaging" className="space-y-6 mt-6">
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-gray-900">Proactive Messaging</h4>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Enable Proactive Notifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Enable Notifications</span>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Notification Channels</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">Email</span>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-sm">SMS</span>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Webhook className="w-4 h-4" />
                          <span className="text-sm">Webhooks</span>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Notification Types</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Booking Created</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Booking Cancelled</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Payment Failed</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">API Removed</span>
                        <Switch />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Webhook URL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Input 
                      placeholder="https://api.bookingsystem.com/webhooks/notifications"
                      defaultValue="https://api.bookingsystem.com/webhooks/notifications"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">127ms</div>
                        <p className="text-sm text-gray-600">Avg Response Time</p>
                        <div className="mt-2 h-8 bg-green-200 rounded"></div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">0.8%</div>
                        <p className="text-sm text-gray-600">Error Rate</p>
                        <div className="mt-2 h-8 bg-red-200 rounded"></div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">24,521</div>
                        <p className="text-sm text-gray-600">API Calls</p>
                        <div className="mt-2 h-8 bg-blue-200 rounded"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}