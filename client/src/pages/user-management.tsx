import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Users, 
  Shield, 
  Settings, 
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  Download,
  UserPlus,
  Brain,
  Star,
  Lightbulb,
  TrendingUp,
  Edit,
  UserCheck,

} from "lucide-react";

const userData = [
  {
    id: 1,
    name: "Robert Bennett",
    email: "robert.bennett@example.com",
    initials: "RB",
    role: "Admin",
    permissions: "Full Access",
    status: "Enabled",
    lastLogin: "10 minutes ago",
    avatar: "💼"
  },
  {
    id: 2,
    name: "Jennifer Chen",
    email: "jennifer.chen@example.com", 
    initials: "JC",
    role: "Developer",
    permissions: "API-Focused",
    status: "Disabled",
    lastLogin: "1 hour ago",
    avatar: "👩‍💻"
  },
  {
    id: 3,
    name: "Michael Patel",
    email: "michael.patel@example.com",
    initials: "MP", 
    role: "Analyst",
    permissions: "Read-Only",
    status: "Enabled",
    lastLogin: "3 hours ago",
    avatar: "📊"
  },
  {
    id: 4,
    name: "Aisha Khan",
    email: "aisha.khan@example.com",
    initials: "AK",
    role: "Manager", 
    permissions: "Limited",
    status: "Enabled",
    lastLogin: "Yesterday",
    avatar: "👩‍💼"
  },
  {
    id: 5,
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    initials: "EW",
    role: "Developer",
    permissions: "API-Focused", 
    status: "Enabled",
    lastLogin: "2 days ago",
    avatar: "👩‍💻"
  },
  {
    id: 6,
    name: "David Martinez",
    email: "david.martinez@example.com",
    initials: "DM",
    role: "Guest",
    permissions: "View-Only",
    status: "Disabled", 
    lastLogin: "3 days ago",
    avatar: "👤"
  }
];

const roleData = [
  {
    name: "Admin",
    icon: "👑",
    color: "bg-red-100 text-red-800",
    users: 3,
    permissions: "All (18)",
    description: "Complete admin access"
  },
  {
    name: "Developer", 
    icon: "👩‍💻",
    color: "bg-purple-100 text-purple-800",
    users: 12,
    permissions: "Limited (16)",
    description: "Development access only"
  },
  {
    name: "Analyst",
    icon: "📊", 
    color: "bg-green-100 text-green-800",
    users: 8,
    permissions: "Read-only (12)",
    description: "Analytics and reporting"
  },
  {
    name: "Manager",
    icon: "👩‍💼",
    color: "bg-yellow-100 text-yellow-800", 
    users: 5,
    permissions: "Limited (14)",
    description: "Team management access"
  },
  {
    name: "Guest",
    icon: "👤",
    color: "bg-gray-100 text-gray-800",
    users: 23,
    permissions: "Minimal (4)",
    description: "Read-only access"
  }
];

const activityData = [
  {
    id: 1,
    timestamp: "2025-06-05 10:30:35",
    user: "Robert Bennett",
    userInitials: "RB",
    action: "Login Success",
    details: "Logged in via web interface",
    ipAddress: "192.168.1.105"
  },
  {
    id: 2,
    timestamp: "2025-06-05 10:28:43", 
    user: "Sarah Johnson",
    userInitials: "SJ",
    action: "Permission Change",
    details: "Updated role for Michael Patel from Analyst to Developer",
    ipAddress: "192.168.1.42"
  },
  {
    id: 3,
    timestamp: "2025-06-05 10:15:22",
    user: "Jennifer Chen", 
    userInitials: "JC",
    action: "Login Success",
    details: "Logged in via mobile app",
    ipAddress: "203.0.113.42"
  },
  {
    id: 4,
    timestamp: "2025-06-04 09:58:16",
    user: "Sarah Johnson",
    userInitials: "SJ", 
    action: "User Creation",
    details: "Created new user: Emily Wilson (Developer)",
    ipAddress: "192.168.1.42"
  },
  {
    id: 5,
    timestamp: "2025-06-04 09:46:12",
    user: "Unknown",
    userInitials: "?",
    action: "Login Failed", 
    details: "Failed login attempt for account: david.martinez@example.com",
    ipAddress: "45.66.203.118"
  }
];

const recommendations = [
  {
    id: 1,
    type: "Role Optimization",
    title: "Role Optimization",
    description: "Michael Patel's access patterns suggest he should be assigned an optional Workflow.",
    priority: "high",
    action: "Apply"
  },
  {
    id: 2,
    type: "Security Enhancement", 
    title: "Security Enhancement",
    description: "Jennifer Chen has accessed 3 sensitive endpoints but doesn't have SMS 2-Factor API requirement for all Developer.",
    priority: "medium",
    action: "Apply"
  },
  {
    id: 3,
    type: "New Role Suggestion",
    title: "New Role Suggestion", 
    description: "Create a new 'API Developer' role with custom permissions for Jennifer and Emily who have similar workflows.",
    priority: "low",
    action: "Apply"
  },
  {
    id: 4,
    type: "Inactive User Alert",
    title: "Inactive User Alert",
    description: "David Martinez hasn't logged in for over 30 days. Consider removing to maintain a reminder.",
    priority: "medium",
    action: "Send Reminder"
  }
];

const supplierData = [
  {
    id: 1,
    name: "Acme Technologies",
    email: "tech@acme.com",
    initials: "AT",
    status: "Active",
    users: 12,
    created: "Jan 15, 2025",
    avatar: "bg-blue-500"
  },
  {
    id: 2,
    name: "Global Solutions",
    email: "info@globalsolutions.com", 
    initials: "GS",
    status: "Active",
    users: 8,
    created: "Feb 22, 2025",
    avatar: "bg-green-500"
  },
  {
    id: 3,
    name: "Nova Industries",
    email: "contact@novaindustries.com",
    initials: "NI",
    status: "Inactive",
    users: 5,
    created: "Mar 10, 2025",
    avatar: "bg-purple-500"
  }
];



export default function UserManagement() {
  const [viewMode, setViewMode] = useState("table");

  const getStatusColor = (status: string) => {
    return status === "Enabled" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  const getActionColor = (action: string) => {
    if (action.includes("Success")) return "text-green-600";
    if (action.includes("Failed")) return "text-red-600";
    return "text-blue-600";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800"; 
      case "low": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
          <p className="text-sm text-gray-500">Thursday, June 5, 2025</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Users
          </Button>
          <Button variant="outline">
            Bulk Actions
          </Button>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add New User
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="super-admin">Super Admin Controls</TabsTrigger>
          <TabsTrigger value="roles">Role Management</TabsTrigger>
          <TabsTrigger value="activity">User Activity & Audit Log</TabsTrigger>
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
        </TabsList>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search users..." className="pl-10 w-64" />
                  </div>
                  <Select defaultValue="all-roles">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-roles">All Roles</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="analyst">Analyst</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all-status">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-status">All Status</SelectItem>
                      <SelectItem value="enabled">Enabled</SelectItem>
                      <SelectItem value="disabled">Disabled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">View:</span>
                  <Button 
                    variant={viewMode === "table" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setViewMode("table")}
                  >
                    Table
                  </Button>
                  <Button 
                    variant={viewMode === "cards" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setViewMode("cards")}
                  >
                    Cards
                  </Button>
                </div>
              </div>

              {viewMode === "table" ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Permissions</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Login</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">2FA</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {userData.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                {user.initials}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={roleData.find(r => r.name === user.role)?.color || "bg-gray-100 text-gray-800"}>
                              {user.role}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {user.permissions}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={getStatusColor(user.status)}>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.lastLogin}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Switch defaultChecked={user.status === "Enabled"} />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userData.map((user) => (
                    <Card key={user.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                              {user.initials}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Role:</span>
                            <Badge className={roleData.find(r => r.name === user.role)?.color || "bg-gray-100 text-gray-800"}>
                              {user.role}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Status:</span>
                            <Badge className={getStatusColor(user.status)}>
                              {user.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Last Login:</span>
                            <span className="text-sm text-gray-900">{user.lastLogin}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-gray-500">Showing 1 to 6 of 24 users</p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm" className="bg-primary text-white">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Super Admin Controls Tab */}
        <TabsContent value="super-admin" className="space-y-6 mt-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Super Admin Controls</h2>
            <p className="text-sm text-gray-500">Manage suppliers and control user access</p>
          </div>
          
          <Tabs defaultValue="supplier-management" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl">
              <TabsTrigger value="supplier-management">Supplier Management</TabsTrigger>
              <TabsTrigger value="user-supplier-mapping">User-Supplier Mapping</TabsTrigger>
              <TabsTrigger value="access-control-matrix">Access Control Matrix</TabsTrigger>
            </TabsList>

            <TabsContent value="supplier-management" className="space-y-6 mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Search suppliers..." className="pl-10 w-64" />
                    </div>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Supplier
                    </Button>
                  </div>

                  {/* Supplier Table */}
                  <div className="space-y-4">
                    {/* Table Header */}
                    <div className="grid grid-cols-6 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider border-b pb-3">
                      <div className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 mr-3" />
                        SUPPLIER NAME
                      </div>
                      <div>STATUS</div>
                      <div>USERS</div>
                      <div>CREATED</div>
                      <div>ACTIONS</div>
                      <div></div>
                    </div>

                    {/* Supplier Rows */}
                    {supplierData.map((supplier) => (
                      <div key={supplier.id} className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 mr-3" />
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full ${supplier.avatar} flex items-center justify-center text-white font-semibold text-sm`}>
                              {supplier.initials}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{supplier.name}</div>
                              <div className="text-sm text-gray-500">{supplier.email}</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Badge className={supplier.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                            {supplier.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-900">{supplier.users} users</div>
                        <div className="text-sm text-gray-500">{supplier.created}</div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <UserCheck className="w-4 h-4" />
                          </Button>
                        </div>
                        <div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="user-supplier-mapping" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>User-Supplier Mapping</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">User-Supplier Mapping</h3>
                    <p>Configure which users have access to specific suppliers and their data.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="access-control-matrix" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Access Control Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Access Control Matrix</h3>
                    <p>Define granular permissions and access levels for different user roles.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* Role Management Tab */}
        <TabsContent value="roles" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Roles Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Role Management</CardTitle>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Role
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roleData.map((role, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                          {role.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-gray-900">{role.name}</p>
                            <Badge className={role.color}>
                              {role.name}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">{role.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{role.users} Users</p>
                        <p className="text-sm text-gray-500">{role.permissions}</p>
                        <Button variant="link" size="sm" className="text-blue-600 p-0 h-auto">
                          Edit Role
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Permission Matrix */}
            <Card>
              <CardHeader>
                <CardTitle>Permission Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Permission</th>
                        <th className="text-center py-2">Admin</th>
                        <th className="text-center py-2">Developer</th>
                        <th className="text-center py-2">Analyst</th>
                        <th className="text-center py-2">Manager</th>
                        <th className="text-center py-2">Guest</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      {[
                        "View Users",
                        "Create Users", 
                        "Edit Users",
                        "Delete Users",
                        "Manage Roles",
                        "API Access"
                      ].map((permission, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2 font-medium">{permission}</td>
                          <td className="text-center py-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                          </td>
                          <td className="text-center py-2">
                            {permission === "Delete Users" || permission === "Manage Roles" ? 
                              <XCircle className="w-4 h-4 text-red-600 mx-auto" /> :
                              <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                            }
                          </td>
                          <td className="text-center py-2">
                            {permission === "View Users" || permission === "API Access" ?
                              <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> :
                              <XCircle className="w-4 h-4 text-red-600 mx-auto" />
                            }
                          </td>
                          <td className="text-center py-2">
                            {permission !== "Delete Users" && permission !== "Manage Roles" ?
                              <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> :
                              <XCircle className="w-4 h-4 text-red-600 mx-auto" />
                            }
                          </td>
                          <td className="text-center py-2">
                            {permission === "View Users" ?
                              <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> :
                              <XCircle className="w-4 h-4 text-red-600 mx-auto" />
                            }
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Activity & Audit Log Tab */}
        <TabsContent value="activity" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>User Activity & Audit Log</CardTitle>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all-activities">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-activities">All Activities</SelectItem>
                      <SelectItem value="login">Login Events</SelectItem>
                      <SelectItem value="permission">Permission Changes</SelectItem>
                      <SelectItem value="user-creation">User Creation</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    View Full Log
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {activityData.map((activity) => (
                      <tr key={activity.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {activity.timestamp}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-medium">
                              {activity.userInitials}
                            </div>
                            <span className="ml-3 text-sm text-gray-900">{activity.user}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={getActionColor(activity.action)}>
                            {activity.action}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                          {activity.details}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                          {activity.ipAddress}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Recommendations Tab */}
        <TabsContent value="recommendations" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    AI Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendations.map((rec) => (
                      <div key={rec.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              {rec.type.includes("Role") && <Users className="w-4 h-4 text-blue-600" />}
                              {rec.type.includes("Security") && <Shield className="w-4 h-4 text-blue-600" />}
                              {rec.type.includes("Suggestion") && <Lightbulb className="w-4 h-4 text-blue-600" />}
                              {rec.type.includes("Alert") && <AlertTriangle className="w-4 h-4 text-blue-600" />}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{rec.title}</h4>
                              <Badge className={getPriorityColor(rec.priority)}>
                                {rec.priority} priority
                              </Badge>
                            </div>
                          </div>
                          <Button size="sm">
                            {rec.action}
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600">{rec.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline" className="w-full">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Generate More Recommendations
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <p className="text-sm text-gray-600">Total Users</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <p className="text-sm text-gray-600">Active Roles</p>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">3</div>
                    <p className="text-sm text-gray-600">Pending Reviews</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Security Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                    <p className="text-sm text-gray-600 mb-4">Overall Security Rating</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>2FA Enabled</span>
                        <span className="text-green-600">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Role Compliance</span>
                        <span className="text-green-600">95%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Access Reviews</span>
                        <span className="text-yellow-600">78%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
