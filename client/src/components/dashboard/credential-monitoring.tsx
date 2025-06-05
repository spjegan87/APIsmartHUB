import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Key, Shield, AlertTriangle, CheckCircle, Clock, RefreshCw } from "lucide-react";

const credentialsData = [
  {
    id: 1,
    name: "Production API Key",
    keyId: "pk_live_51K...",
    type: "API Key",
    environment: "Production",
    lastUsed: "2 hours ago",
    expiresIn: "45 days",
    status: "active",
    permissions: ["read", "write", "admin"],
    usage: 89234,
    rateLimit: 100000
  },
  {
    id: 2,
    name: "Development OAuth Token",
    keyId: "sk_test_26L...",
    type: "OAuth Token",
    environment: "Development",
    lastUsed: "15 minutes ago",
    expiresIn: "12 days",
    status: "warning",
    permissions: ["read", "write"],
    usage: 12456,
    rateLimit: 50000
  },
  {
    id: 3,
    name: "Webhook Secret",
    keyId: "whsec_1mR...",
    type: "Webhook",
    environment: "Production",
    lastUsed: "5 minutes ago",
    expiresIn: "90 days",
    status: "active",
    permissions: ["webhook"],
    usage: 3421,
    rateLimit: 10000
  },
  {
    id: 4,
    name: "Legacy Integration Key",
    keyId: "legacy_9xZ...",
    type: "API Key",
    environment: "Staging",
    lastUsed: "7 days ago",
    expiresIn: "3 days",
    status: "expiring",
    permissions: ["read"],
    usage: 234,
    rateLimit: 5000
  }
];

export function CredentialMonitoring() {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "active":
        return { color: "bg-green-500", icon: CheckCircle, variant: "default" as const };
      case "warning":
        return { color: "bg-yellow-500", icon: AlertTriangle, variant: "secondary" as const };
      case "expiring":
        return { color: "bg-red-500", icon: Clock, variant: "destructive" as const };
      default:
        return { color: "bg-gray-500", icon: Shield, variant: "outline" as const };
    }
  };

  const getEnvironmentColor = (env: string) => {
    switch (env) {
      case "Production": return "bg-red-100 text-red-800";
      case "Development": return "bg-blue-100 text-blue-800";
      case "Staging": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            Credential Monitoring
          </CardTitle>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Security Summary */}
          <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {credentialsData.filter(c => c.status === 'active').length}
              </div>
              <p className="text-sm text-gray-600">Active Keys</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {credentialsData.filter(c => c.status === 'warning').length}
              </div>
              <p className="text-sm text-gray-600">Need Attention</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {credentialsData.filter(c => c.status === 'expiring').length}
              </div>
              <p className="text-sm text-gray-600">Expiring Soon</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {credentialsData.reduce((sum, c) => sum + c.usage, 0).toLocaleString()}
              </div>
              <p className="text-sm text-gray-600">Total Usage</p>
            </div>
          </div>

          {/* Credentials List */}
          <div className="space-y-3">
            {credentialsData.map((credential) => {
              const statusConfig = getStatusConfig(credential.status);
              const StatusIcon = statusConfig.icon;
              
              return (
                <div key={credential.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Key className="w-5 h-5 text-primary" />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${statusConfig.color} rounded-full border-2 border-white`}></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-gray-900 text-sm">{credential.name}</p>
                        <Badge className={`text-xs ${getEnvironmentColor(credential.environment)}`}>
                          {credential.environment}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {credential.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500 font-mono">{credential.keyId}</span>
                        <span className="text-xs text-gray-500">Last used: {credential.lastUsed}</span>
                        <span className="text-xs text-gray-500">Expires: {credential.expiresIn}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <StatusIcon className="w-4 h-4" />
                        <Badge variant={statusConfig.variant} className="text-xs">
                          {credential.status}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-500">
                        Usage: {credential.usage.toLocaleString()} / {credential.rateLimit.toLocaleString()}
                      </div>
                      <div className="w-20 bg-gray-200 rounded-full h-1 mt-1">
                        <div 
                          className="bg-primary h-1 rounded-full" 
                          style={{ width: `${(credential.usage / credential.rateLimit) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
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