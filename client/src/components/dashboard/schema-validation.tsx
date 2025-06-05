import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileCode, CheckCircle, AlertTriangle, XCircle, Code } from "lucide-react";

const schemaValidationData = [
  {
    id: 1,
    apiName: "User Authentication API",
    endpoint: "/api/v1/auth",
    schemaVersion: "v2.1",
    validationStatus: "valid",
    lastValidated: "2 hours ago",
    issues: 0,
    warnings: 0,
    compliance: 100,
    changes: "None since last validation"
  },
  {
    id: 2,
    apiName: "Payment Processing API",
    endpoint: "/api/v1/payments",
    schemaVersion: "v1.8",
    validationStatus: "warning",
    lastValidated: "4 hours ago",
    issues: 0,
    warnings: 3,
    compliance: 94,
    changes: "Optional field added to response"
  },
  {
    id: 3,
    apiName: "User Profile API",
    endpoint: "/api/v1/users/profile",
    schemaVersion: "v3.0",
    validationStatus: "error",
    lastValidated: "6 hours ago",
    issues: 2,
    warnings: 1,
    compliance: 78,
    changes: "Breaking change detected in response format"
  },
  {
    id: 4,
    apiName: "Product Catalog API",
    endpoint: "/api/v1/products",
    schemaVersion: "v2.3",
    validationStatus: "valid",
    lastValidated: "1 hour ago",
    issues: 0,
    warnings: 0,
    compliance: 100,
    changes: "Schema updated with new validation rules"
  }
];

const validationIssues = [
  {
    id: 1,
    api: "User Profile API",
    type: "Breaking Change",
    severity: "error",
    description: "Response field 'user_id' renamed to 'userId' without backward compatibility",
    impact: "High - Will break existing integrations",
    recommendation: "Implement field aliasing or versioning"
  },
  {
    id: 2,
    api: "User Profile API", 
    type: "Missing Property",
    severity: "error",
    description: "Required field 'email' is missing from response schema",
    impact: "High - Client applications expect this field",
    recommendation: "Add email field to response or mark as optional"
  },
  {
    id: 3,
    api: "Payment Processing API",
    type: "Deprecated Field",
    severity: "warning",
    description: "Field 'transaction_id' is deprecated but still in use",
    impact: "Medium - Should migrate to 'transactionId'",
    recommendation: "Update documentation and provide migration timeline"
  }
];

export function SchemaValidation() {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "valid":
        return { 
          color: "bg-green-500", 
          icon: CheckCircle, 
          variant: "default" as const,
          textColor: "text-green-600"
        };
      case "warning":
        return { 
          color: "bg-yellow-500", 
          icon: AlertTriangle, 
          variant: "secondary" as const,
          textColor: "text-yellow-600"
        };
      case "error":
        return { 
          color: "bg-red-500", 
          icon: XCircle, 
          variant: "destructive" as const,
          textColor: "text-red-600"
        };
      default:
        return { 
          color: "bg-gray-500", 
          icon: FileCode, 
          variant: "outline" as const,
          textColor: "text-gray-600"
        };
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "error": return "bg-red-100 text-red-800";
      case "warning": return "bg-yellow-100 text-yellow-800";
      case "info": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Schema Validation Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileCode className="w-5 h-5 text-primary" />
              Schema Validation
            </CardTitle>
            <Button variant="outline" size="sm">
              Validate All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Validation Summary */}
            <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {schemaValidationData.filter(s => s.validationStatus === 'valid').length}
                </div>
                <p className="text-sm text-gray-600">Valid Schemas</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {schemaValidationData.filter(s => s.validationStatus === 'warning').length}
                </div>
                <p className="text-sm text-gray-600">With Warnings</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {schemaValidationData.filter(s => s.validationStatus === 'error').length}
                </div>
                <p className="text-sm text-gray-600">With Errors</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(schemaValidationData.reduce((sum, s) => sum + s.compliance, 0) / schemaValidationData.length)}%
                </div>
                <p className="text-sm text-gray-600">Avg Compliance</p>
              </div>
            </div>

            {/* Schema Status List */}
            <div className="space-y-3">
              {schemaValidationData.map((schema) => {
                const statusConfig = getStatusConfig(schema.validationStatus);
                const StatusIcon = statusConfig.icon;
                
                return (
                  <div key={schema.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Code className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${statusConfig.color} rounded-full border-2 border-white`}></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-gray-900 text-sm">{schema.apiName}</p>
                          <Badge variant="outline" className="text-xs">
                            {schema.schemaVersion}
                          </Badge>
                          <Badge variant={statusConfig.variant} className="text-xs">
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {schema.validationStatus}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-gray-500 font-mono">{schema.endpoint}</span>
                          <span className="text-xs text-gray-500">Validated: {schema.lastValidated}</span>
                          <span className="text-xs text-gray-500">Compliance: {schema.compliance}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        {schema.issues > 0 && (
                          <p className="text-sm font-medium text-red-600">{schema.issues} errors</p>
                        )}
                        {schema.warnings > 0 && (
                          <p className="text-sm font-medium text-yellow-600">{schema.warnings} warnings</p>
                        )}
                        {schema.issues === 0 && schema.warnings === 0 && (
                          <p className="text-sm font-medium text-green-600">No issues</p>
                        )}
                      </div>
                      <Button variant="outline" size="sm">
                        View Schema
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Validation Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            Validation Issues
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {validationIssues.map((issue) => (
              <div key={issue.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-900 text-sm">{issue.api}</h4>
                    <Badge className={`text-xs ${getSeverityColor(issue.severity)}`}>
                      {issue.severity}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {issue.type}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    Fix Issue
                  </Button>
                </div>
                <p className="text-sm text-gray-700 mb-2">{issue.description}</p>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600"><strong>Impact:</strong> {issue.impact}</p>
                  <p className="text-xs text-gray-600"><strong>Recommendation:</strong> {issue.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}