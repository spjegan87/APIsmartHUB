import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Folder, 
  FileCode, 
  Play, 
  AlertCircle, 
  Save, 
  RotateCcw, 
  Code2, 
  Plus, 
  Link2, 
  Trash2, 
  Layout,
  Maximize2,
  Key,
  Eye,
  History,
  Settings
} from "lucide-react";

export default function ApiSchema() {
  const [showDemo, setShowDemo] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState("User");
  const [selectedField, setSelectedField] = useState("email");
  const [activeTab, setActiveTab] = useState("visual");

  const entities = [
    {
      name: "User",
      color: "bg-blue-100 border-blue-200",
      fields: [
        { name: "id", type: "ID!", key: "Primary Key" },
        { name: "username", type: "String!", key: "Unique" },
        { name: "email", type: "String!", key: "Unique" },
        { name: "password", type: "String!", key: "Encrypted" },
        { name: "firstName", type: "String" },
      ]
    },
    {
      name: "Profile", 
      color: "bg-cyan-100 border-cyan-200",
      fields: [
        { name: "id", type: "ID!", key: "Primary Key" },
        { name: "userId", type: "ID!", key: "Foreign Key" },
        { name: "bio", type: "String" },
        { name: "avatar", type: "String", key: "URL" },
        { name: "location", type: "String" },
      ]
    },
    {
      name: "Role",
      color: "bg-yellow-100 border-yellow-200", 
      fields: [
        { name: "id", type: "ID!", key: "Primary Key" },
        { name: "name", type: "String!", key: "Unique" },
        { name: "description", type: "String" },
      ]
    },
    {
      name: "Permission",
      color: "bg-green-100 border-green-200",
      fields: [
        { name: "id", type: "ID!", key: "Primary Key" },
        { name: "name", type: "String!", key: "Unique" },
        { name: "resource", type: "String!" },
        { name: "action", type: "String!" },
      ]
    }
  ];

  const versions = [
    { version: "v1.8.0", status: "Active", date: "2025-06-05 09:15:22", description: "Added new fields to User entity and improved relationship with Profile entity.", author: "Jennifer Davis" },
    { version: "v1.7.2", status: "Archived", date: "2025-06-28 14:10:45", description: "Fixed validation logic for email field and updated permission schema.", author: "Michael Wilson" },
    { version: "v1.7.0", status: "Archived", date: "2025-05-15 11:22:33", description: "Added Role and Permission entities with many-to-many relationships.", author: "Jennifer Davis" }
  ];

  const defaultSchema = `{
  "openapi": "3.0.0",
  "info": {
    "title": "User API",
    "version": "1.0.0",
    "description": "A simple user management API"
  },
  "paths": {
    "/users": {
      "get": {
        "summary": "Get all users",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Create a new user",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "User created successfully"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "example": 1
          },
          "username": {
            "type": "string",
            "example": "john_doe"
          },
          "email": {
            "type": "string",
            "format": "email",
            "example": "john@example.com"
          }
        }
      }
    }
  }
}`;

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between">
          <div>
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="visual">Visual Schema Editor</TabsTrigger>
              <TabsTrigger value="code">API Schema Editor</TabsTrigger>
            </TabsList>
            <p className="text-sm text-gray-500 mt-2">
              {activeTab === "visual" ? "User Management API - GraphQL Schema" : "Design and validate your API schemas"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {activeTab === "visual" ? (
              <>
                <Button variant="outline">
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
                <Button variant="outline" onClick={() => setActiveTab("code")}>
                  <Code2 className="w-4 h-4 mr-2" />
                  Code View
                </Button>
                <Select defaultValue="100">
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50">50%</SelectItem>
                    <SelectItem value="75">75%</SelectItem>
                    <SelectItem value="100">100%</SelectItem>
                    <SelectItem value="125">125%</SelectItem>
                    <SelectItem value="150">150%</SelectItem>
                  </SelectContent>
                </Select>
              </>
            ) : (
              <>
                <Button variant="outline">Import</Button>
                <Dialog open={showDemo} onOpenChange={setShowDemo}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Play className="w-4 h-4 mr-2" />
                      Try it demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl h-[90vh]">
                    <DialogHeader>
                      <DialogTitle>API Testing Demo</DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-hidden p-4">
                      {iframeError ? (
                        <Alert className="mb-4">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>
                            Unable to load the demo interface. 
                            Please check if the service is running and accessible from your network.
                          </AlertDescription>
                        </Alert>
                      ) : null}
                      <iframe 
                        src="http://3.110.166.252:8000/tryit" 
                        width="100%" 
                        height="650px" 
                        frameBorder="0"
                        className="rounded-lg border"
                        onError={() => setIframeError(true)}
                        onLoad={() => setIframeError(false)}
                        title="API Testing Demo"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <Button>Save Schema</Button>
              </>
            )}
          </div>
        </div>

        <TabsContent value="visual" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Schema Canvas */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Entity
                    </Button>
                    <Button variant="outline" size="sm">
                      <Link2 className="w-4 h-4 mr-2" />
                      Add Relationship
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                    <Button variant="outline" size="sm">
                      <Layout className="w-4 h-4 mr-2" />
                      Auto Layout
                    </Button>
                    <Button variant="outline" size="sm">
                      <Maximize2 className="w-4 h-4 mr-2" />
                      Fit to Screen
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[600px] bg-gray-50 rounded-lg relative overflow-hidden">
                    {/* Schema Entities - Recreating the exact layout from screenshot */}
                    <div className="absolute inset-0 p-8">
                      {/* Top Row - User and Profile with relationship */}
                      <div className="flex justify-between items-start mb-8">
                        {/* User Entity */}
                        <div className="relative w-48">
                          <Card className={`${entities[0].color} border-2 ${selectedEntity === "User" ? "ring-2 ring-blue-500" : ""}`}>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                  {entities[0].name}
                                </CardTitle>
                                <div className="flex gap-1">
                                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                    <Settings className="w-3 h-3" />
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                    <span className="text-xs">⋮</span>
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0 pb-2">
                              <div className="space-y-1">
                                {entities[0].fields.map((field, idx) => (
                                  <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                                    <div className="flex items-center gap-2">
                                      {field.key === "Primary Key" && <Key className="w-3 h-3 text-yellow-600" />}
                                      {field.key === "Unique" && <span className="text-blue-600 text-xs">U</span>}
                                      <span className="font-medium">{field.name}:</span>
                                    </div>
                                    <span className="text-gray-600 font-medium">{field.type}</span>
                                  </div>
                                ))}
                              </div>
                              <Button variant="ghost" size="sm" className="w-full mt-2 h-6 text-xs text-blue-600">
                                <Plus className="w-3 h-3 mr-1" />
                                Add Field
                              </Button>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Relationship Line */}
                        <div className="flex items-center flex-1 px-4">
                          <div className="w-full h-0.5 bg-blue-400 relative">
                            <div className="absolute left-0 top-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-y-1/2"></div>
                            <div className="absolute right-0 top-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-y-1/2"></div>
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-blue-400 px-1 text-xs text-blue-600">
                              1:1
                            </div>
                          </div>
                        </div>

                        {/* Profile Entity */}
                        <div className="w-48">
                          <Card className={`${entities[1].color} border-2 ${selectedEntity === "Profile" ? "ring-2 ring-blue-500" : ""}`}>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                  {entities[1].name}
                                </CardTitle>
                                <div className="flex gap-1">
                                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                    <Settings className="w-3 h-3" />
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                    <span className="text-xs">⋮</span>
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0 pb-2">
                              <div className="space-y-1">
                                {entities[1].fields.map((field, idx) => (
                                  <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                                    <div className="flex items-center gap-2">
                                      {field.key === "Primary Key" && <Key className="w-3 h-3 text-yellow-600" />}
                                      {field.key === "Foreign Key" && <span className="text-orange-600 text-xs">FK</span>}
                                      {field.key === "URL" && <span className="text-purple-600 text-xs">URL</span>}
                                      <span className="font-medium">{field.name}:</span>
                                    </div>
                                    <span className="text-gray-600 font-medium">{field.type}</span>
                                  </div>
                                ))}
                              </div>
                              <Button variant="ghost" size="sm" className="w-full mt-2 h-6 text-xs text-blue-600">
                                <Plus className="w-3 h-3 mr-1" />
                                Add Field
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Bottom Row */}
                      <div className="flex justify-between items-start">
                        {/* Role Entity */}
                        <div className="w-48">
                          <Card className={`${entities[2].color} border-2 ${selectedEntity === "Role" ? "ring-2 ring-blue-500" : ""}`}>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                  {entities[2].name}
                                </CardTitle>
                                <div className="flex gap-1">
                                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                    <Settings className="w-3 h-3" />
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                    <span className="text-xs">⋮</span>
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0 pb-2">
                              <div className="space-y-1">
                                {entities[2].fields.map((field, idx) => (
                                  <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                                    <div className="flex items-center gap-2">
                                      {field.key === "Primary Key" && <Key className="w-3 h-3 text-yellow-600" />}
                                      {field.key === "Unique" && <span className="text-blue-600 text-xs">U</span>}
                                      <span className="font-medium">{field.name}:</span>
                                    </div>
                                    <span className="text-gray-600 font-medium">{field.type}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="text-xs text-gray-500 mt-2 text-center">3 fields</div>
                              <Button variant="ghost" size="sm" className="w-full mt-1 h-6 text-xs text-blue-600">
                                <Plus className="w-3 h-3 mr-1" />
                                Add Field
                              </Button>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Many-to-Many Relationship Visualization */}
                        <div className="flex-1 px-4 py-8">
                          <div className="relative">
                            {/* Connection lines */}
                            <svg className="w-full h-16" viewBox="0 0 300 60">
                              <path d="M20,30 Q80,10 150,30 Q220,50 280,30" stroke="#22d3ee" strokeWidth="2" fill="none"/>
                              <circle cx="20" cy="30" r="3" fill="#22d3ee"/>
                              <circle cx="280" cy="30" r="3" fill="#22d3ee"/>
                              <text x="150" y="20" textAnchor="middle" className="text-xs fill-cyan-600">N:M</text>
                            </svg>
                          </div>
                        </div>

                        {/* Permission Entity */}
                        <div className="w-48">
                          <Card className={`${entities[3].color} border-2 ${selectedEntity === "Permission" ? "ring-2 ring-blue-500" : ""}`}>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                  {entities[3].name}
                                </CardTitle>
                                <div className="flex gap-1">
                                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                    <Settings className="w-3 h-3" />
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                    <span className="text-xs">⋮</span>
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0 pb-2">
                              <div className="space-y-1">
                                {entities[3].fields.map((field, idx) => (
                                  <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                                    <div className="flex items-center gap-2">
                                      {field.key === "Primary Key" && <Key className="w-3 h-3 text-yellow-600" />}
                                      {field.key === "Unique" && <span className="text-blue-600 text-xs">U</span>}
                                      <span className="font-medium">{field.name}:</span>
                                    </div>
                                    <span className="text-gray-600 font-medium">{field.type}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="text-xs text-gray-500 mt-2 text-center">4 fields</div>
                              <Button variant="ghost" size="sm" className="w-full mt-1 h-6 text-xs text-blue-600">
                                <Plus className="w-3 h-3 mr-1" />
                                Add Field
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Version History */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">Version History</CardTitle>
                    <Button variant="ghost" size="sm" className="text-blue-600 text-xs">
                      View All
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">Track changes and restore previous versions</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {versions.map((version, idx) => (
                    <div key={idx} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {version.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm">{version.version}</span>
                              <Badge className={version.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                                {version.status}
                              </Badge>
                            </div>
                            <div className="text-xs text-gray-500">{version.date}</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{version.description}</p>
                      <div className="text-xs text-gray-500">By {version.author}</div>
                      <div className="flex gap-1 mt-2">
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          <RotateCcw className="w-3 h-3 mr-1" />
                          Restore
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Validation Rules */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Validation Rules</CardTitle>
                  <p className="text-xs text-gray-500">Define data validation and constraints</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-xs font-medium">Selected Entity</Label>
                    <Select value={selectedEntity} onValueChange={setSelectedEntity}>
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {entities.map(entity => (
                          <SelectItem key={entity.name} value={entity.name}>{entity.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs font-medium">Selected Field</Label>
                    <Select value={selectedField} onValueChange={setSelectedField}>
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">email</SelectItem>
                        <SelectItem value="username">username</SelectItem>
                        <SelectItem value="password">password</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-xs font-medium">Format Validation</Label>
                      <Switch defaultChecked />
                    </div>
                    <Input 
                      className="h-8 text-xs font-mono" 
                      defaultValue="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+"
                      placeholder="Enter regex pattern"
                    />

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-xs font-medium">Required Field</Label>
                        <p className="text-xs text-gray-500">Field cannot be null or empty</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-xs font-medium">Unique Constraint</Label>
                        <p className="text-xs text-gray-500">Value must be unique across all records</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label className="text-xs font-medium">Length Validation</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-xs text-gray-500">Min</Label>
                        <Input className="h-8 text-xs" defaultValue="6" />
                      </div>
                      <div>
                        <Label className="text-xs text-gray-500">Max</Label>
                        <Input className="h-8 text-xs" defaultValue="320" />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full h-8 text-xs">
                    Save Validation Rules
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>API Schema Editor</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Schema Tree */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Schema Structure</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Folder className="w-4 h-4 text-amber-500" />
                      <span className="font-medium">User API</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <FileCode className="w-4 h-4 text-blue-500" />
                        <span>GET /users</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <FileCode className="w-4 h-4 text-green-500" />
                        <span>POST /users</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <FileCode className="w-4 h-4 text-yellow-500" />
                        <span>PUT /users/:id</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <FileCode className="w-4 h-4 text-red-500" />
                        <span>DELETE /users/:id</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Schema Editor */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Schema Definition</h4>
                  <Textarea
                    className="h-96 font-mono text-sm resize-none"
                    defaultValue={defaultSchema}
                    placeholder="Enter your API schema here..."
                  />
                  <div className="mt-4 flex space-x-2">
                    <Button>
                      Validate Schema
                    </Button>
                    <Button variant="outline">
                      Save Draft
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}