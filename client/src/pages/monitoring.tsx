import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Search,
  Filter,
  Download,
  Key,
  Shield,
  Server,
  Database,
  Globe,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Eye,
  EyeOff,
  RefreshCw,
  Settings,
  Bell,
  AlertCircle
} from "lucide-react";

const credentialData = [
  {
    id: 1,
    name: "Production API Key",
    type: "API Key",
    status: "Active",
    environment: "Production",
    lastUsed: "2 minutes ago",
    created: "2024-01-15",
    permissions: "Full Access",
    requests: "24,521",
    errors: "12",
    masked: "sk_live_****1234"
  },
  {
    id: 2,
    name: "Development Token",
    type: "Bearer Token", 
    status: "Active",
    environment: "Development",
    lastUsed: "1 hour ago",
    created: "2024-02-01",
    permissions: "Read Only",
    requests: "1,847",
    errors: "3",
    masked: "dev_****5678"
  },
  {
    id: 3,
    name: "Staging Database",
    type: "Database",
    status: "Warning",
    environment: "Staging",
    lastUsed: "5 minutes ago", 
    created: "2024-01-20",
    permissions: "Read/Write",
    requests: "8,756",
    errors: "45",
    masked: "postgres://****"
  },
  {
    id: 4,
    name: "External Service API",
    type: "OAuth Token",
    status: "Expired",
    environment: "Production",
    lastUsed: "2 days ago",
    created: "2023-12-10",
    permissions: "Limited",
    requests: "856",
    errors: "125",
    masked: "oauth_****9012"
  },
  {
    id: 5,
    name: "Monitoring Service",
    type: "Service Key",
    status: "Active",
    environment: "Production",
    lastUsed: "30 seconds ago",
    created: "2024-01-05",
    permissions: "Monitoring",
    requests: "45,123",
    errors: "8",
    masked: "mon_****3456"
  },
  {
    id: 6,
    name: "Backup Storage",
    type: "Access Key",
    status: "Inactive",
    environment: "Production",
    lastUsed: "1 week ago",
    created: "2023-11-15",
    permissions: "Storage",
    requests: "2,341",
    errors: "67",
    masked: "aws_****7890"
  }
];

const systemHealth = [
  { service: "API Gateway", status: "Healthy", uptime: "99.9%", response: "142ms" },
  { service: "Database Primary", status: "Healthy", uptime: "100%", response: "23ms" },
  { service: "Cache Layer", status: "Warning", uptime: "98.5%", response: "8ms" },
  { service: "Background Jobs", status: "Healthy", uptime: "99.7%", response: "N/A" },
  { service: "File Storage", status: "Healthy", uptime: "99.8%", response: "156ms" },
  { service: "CDN", status: "Degraded", uptime: "95.2%", response: "245ms" }
];

const alerts = [
  {
    id: 1,
    type: "Critical",
    title: "High Error Rate Detected",
    description: "External Service API showing 15% error rate in last 10 minutes",
    time: "2 minutes ago",
    status: "Active"
  },
  {
    id: 2,
    type: "Warning", 
    title: "Credential Expiry Warning",
    description: "OAuth token for External Service API expires in 3 days",
    time: "1 hour ago",
    status: "Active"
  },
  {
    id: 3,
    type: "Info",
    title: "Performance Improvement",
    description: "API response times improved by 12% after optimization",
    time: "4 hours ago",
    status: "Resolved"
  }
];

export default function Monitoring() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showCredentials, setShowCredentials] = useState({});

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": case "Healthy": return "bg-green-100 text-green-800";
      case "Warning": return "bg-yellow-100 text-yellow-800";
      case "Expired": case "Critical": case "Degraded": return "bg-red-100 text-red-800";
      case "Inactive": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active": case "Healthy": return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "Warning": return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case "Expired": case "Critical": case "Degraded": return <AlertCircle className="w-4 h-4 text-red-600" />;
      case "Inactive": return <Clock className="w-4 h-4 text-gray-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const toggleCredentialVisibility = (id: number) => {
    setShowCredentials(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Credential Monitoring</h2>
          <p className="text-sm text-gray-500">Monitor API keys, tokens, and system credentials</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Credentials</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">24</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Key className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Credentials</p>
                <p className="text-2xl font-bold text-green-600 mt-2">18</p>
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
                <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
                <p className="text-2xl font-bold text-amber-600 mt-2">3</p>
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
                <p className="text-sm font-medium text-gray-600">Security Score</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">92%</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="credentials" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="credentials">Credentials</TabsTrigger>
          <TabsTrigger value="system-health">System Health</TabsTrigger>
          <TabsTrigger value="alerts">Alerts & Events</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Credentials Tab */}
        <TabsContent value="credentials" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Credential Management</CardTitle>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search credentials..." className="pl-10 w-64" />
                  </div>
                  <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="warning">Warning</SelectItem>
                      <SelectItem value="expired">Expired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Environment</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Used</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Requests</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Errors</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {credentialData.map((credential) => (
                      <tr key={credential.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Key className="w-4 h-4 text-gray-400 mr-3" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{credential.name}</div>
                              <div className="text-sm text-gray-500 font-mono">
                                {showCredentials[credential.id] ? "sk_live_abcd1234****" : credential.masked}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{credential.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge variant="outline">{credential.environment}</Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getStatusIcon(credential.status)}
                            <Badge className={`ml-2 ${getStatusColor(credential.status)}`}>
                              {credential.status}
                            </Badge>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{credential.lastUsed}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{credential.requests}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm ${parseInt(credential.errors) > 20 ? 'text-red-600' : 'text-gray-900'}`}>
                            {credential.errors}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleCredentialVisibility(credential.id)}
                            >
                              {showCredentials[credential.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Settings className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Health Tab */}
        <TabsContent value="system-health" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemHealth.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <p className="font-medium text-gray-900">{service.service}</p>
                          <p className="text-sm text-gray-500">Uptime: {service.uptime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                        <p className="text-sm text-gray-500 mt-1">{service.response}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">CPU Usage</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Memory Usage</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <Progress value={68} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Disk Usage</span>
                      <span className="text-sm font-medium">32%</span>
                    </div>
                    <Progress value={32} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Network I/O</span>
                      <span className="text-sm font-medium">89%</span>
                    </div>
                    <Progress value={89} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Response Time Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900">Response Time: 142ms</p>
                  <p className="text-sm text-gray-600">Average response time trending down 8%</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <TrendingDown className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">Improved performance</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Alerts Tab */}
        <TabsContent value="alerts" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Alerts & Events</CardTitle>
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-gray-400" />
                  <Switch />
                  <span className="text-sm text-gray-600">Notifications</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`p-4 border rounded-lg ${
                    alert.type === 'Critical' ? 'bg-red-50 border-red-200' :
                    alert.type === 'Warning' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-blue-50 border-blue-200'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          alert.type === 'Critical' ? 'bg-red-100' :
                          alert.type === 'Warning' ? 'bg-yellow-100' :
                          'bg-blue-100'
                        }`}>
                          {alert.type === 'Critical' ? <AlertCircle className="w-4 h-4 text-red-600" /> :
                           alert.type === 'Warning' ? <AlertTriangle className="w-4 h-4 text-yellow-600" /> :
                           <CheckCircle className="w-4 h-4 text-blue-600" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900">{alert.title}</h4>
                            <Badge className={
                              alert.type === 'Critical' ? 'bg-red-100 text-red-800' :
                              alert.type === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }>
                              {alert.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{alert.description}</p>
                          <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {alert.status === 'Active' ? 'Resolve' : 'View Details'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Usage Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">82,547</div>
                    <p className="text-sm text-gray-600">Total API Calls</p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-green-600">+12%</span>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">99.2%</div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-green-600">+0.3%</span>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">247</div>
                    <p className="text-sm text-gray-600">Total Errors</p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <TrendingDown className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-green-600">-8%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Security Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Failed Logins</span>
                    <span className="text-sm font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Blocked IPs</span>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Rate Limit Hits</span>
                    <span className="text-sm font-medium">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Token Refreshes</span>
                    <span className="text-sm font-medium">24</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Top Endpoints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">/api/v1/users</span>
                    <span className="text-sm font-medium">24,521</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">/api/v1/auth</span>
                    <span className="text-sm font-medium">18,432</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">/api/v1/billing</span>
                    <span className="text-sm font-medium">12,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">/api/v1/analytics</span>
                    <span className="text-sm font-medium">8,765</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
