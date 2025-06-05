import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  Building2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Globe,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const supplierData = [
  {
    id: 1,
    name: "Acme Technologies",
    location: "San Francisco, CA",
    initials: "AT",
    contact: {
      name: "Richard Wilson",
      email: "richard@acmetech.com",
      phone: "+1 (415) 555-7890"
    },
    industry: "Technology",
    status: "Active",
    users: 12,
    created: "Jan 15, 2025",
    avatar: "bg-blue-500",
    companySize: "250-500 employees",
    yearFounded: "2010",
    primaryService: "Software Development",
    serviceArea: "Global",
    taxId: "US-987654321",
    address: "123 Tech Plaza, San Francisco, CA 94105, USA",
    website: "www.acmetechnologies.com",
    notes: "Acme Technologies is a key strategic partner for our cloud infrastructure services. They have been reliable and responsive to our needs. Their technical expertise has been valuable in several projects."
  },
  {
    id: 2,
    name: "Global Solutions",
    location: "Chicago, IL",
    initials: "GS",
    contact: {
      name: "Jennifer Adams",
      email: "jennifer@globalsolutions.com",
      phone: "+1 (312) 555-3421"
    },
    industry: "Manufacturing",
    status: "Active",
    users: 8,
    created: "Feb 22, 2025",
    avatar: "bg-green-500",
    companySize: "100-250 employees",
    yearFounded: "2015",
    primaryService: "Manufacturing Solutions",
    serviceArea: "North America",
    taxId: "US-123456789",
    address: "456 Industrial Blvd, Chicago, IL 60601, USA",
    website: "www.globalsolutions.com",
    notes: "Global Solutions provides manufacturing expertise and has been a trusted partner for our industrial projects."
  },
  {
    id: 3,
    name: "Nova Industries",
    location: "Boston, MA",
    initials: "NI",
    contact: {
      name: "Marcus Chen",
      email: "marcus@novaindustries.com",
      phone: "+1 (617) 555-9876"
    },
    industry: "Healthcare",
    status: "Inactive",
    users: 5,
    created: "Mar 10, 2025",
    avatar: "bg-purple-500",
    companySize: "50-100 employees",
    yearFounded: "2018",
    primaryService: "Healthcare Solutions",
    serviceArea: "East Coast",
    taxId: "US-456789123",
    address: "789 Medical Center Dr, Boston, MA 02101, USA",
    website: "www.novaindustries.com",
    notes: "Nova Industries specializes in healthcare technology solutions. Currently inactive but potential for future collaboration."
  },
  {
    id: 4,
    name: "Sunrise Retail",
    location: "Seattle, WA",
    initials: "SR",
    contact: {
      name: "Olivia Thompson",
      email: "olivia@sunriseretail.com",
      phone: "+1 (206) 555-4567"
    },
    industry: "Retail",
    status: "Active",
    users: 10,
    created: "Apr 5, 2025",
    avatar: "bg-yellow-500",
    companySize: "500+ employees",
    yearFounded: "2005",
    primaryService: "Retail Solutions",
    serviceArea: "West Coast",
    taxId: "US-789123456",
    address: "321 Commerce St, Seattle, WA 98101, USA",
    website: "www.sunriseretail.com",
    notes: "Sunrise Retail is a major retail partner with extensive experience in e-commerce solutions."
  },
  {
    id: 5,
    name: "Fusion Tech",
    location: "Austin, TX",
    initials: "FT",
    contact: {
      name: "Daniel Rodriguez",
      email: "daniel@fusiontech.com",
      phone: "+1 (512) 555-8901"
    },
    industry: "Technology",
    status: "Pending",
    users: 3,
    created: "May 20, 2025",
    avatar: "bg-red-500",
    companySize: "25-50 employees",
    yearFounded: "2020",
    primaryService: "AI Solutions",
    serviceArea: "Southwest",
    taxId: "US-321654987",
    address: "654 Innovation Way, Austin, TX 73301, USA",
    website: "www.fusiontech.com",
    notes: "Fusion Tech is a emerging technology company specializing in AI and machine learning solutions."
  }
];

export default function Suppliers() {
  const [selectedSupplier, setSelectedSupplier] = useState(supplierData[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(supplierData.length / itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Inactive": return "bg-gray-100 text-gray-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case "Technology": return "bg-blue-100 text-blue-800";
      case "Manufacturing": return "bg-green-100 text-green-800";
      case "Healthcare": return "bg-purple-100 text-purple-800";
      case "Retail": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Suppliers</h2>
        </div>
      </div>

      {/* Suppliers List */}
      <Card>
          <CardContent className="p-6">
            {/* Filters */}
            <div className="flex items-center gap-4 mb-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Filter by Industry</label>
                <Select defaultValue="all-industries">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-industries">All Industries</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Filter by Status</label>
                <Select defaultValue="all-status">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-status">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-2 block">&nbsp;</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search suppliers..." className="pl-10" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">&nbsp;</label>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Supplier
                </Button>
              </div>
            </div>

            {/* Table Headers */}
            <div className="grid grid-cols-6 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider border-b pb-3 mb-4">
              <div className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 mr-3" />
                SUPPLIER
              </div>
              <div>CONTACT INFO</div>
              <div>INDUSTRY</div>
              <div>STATUS</div>
              <div>USERS</div>
              <div>CREATED</div>
            </div>

            {/* Supplier Rows */}
            <div className="space-y-4">
              {supplierData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((supplier) => (
                <div 
                  key={supplier.id} 
                  className={`grid grid-cols-6 gap-4 items-center py-3 rounded-lg cursor-pointer transition-colors ${
                    selectedSupplier.id === supplier.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedSupplier(supplier)}
                >
                  <div className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 mr-3" />
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full ${supplier.avatar} flex items-center justify-center text-white font-semibold text-sm`}>
                        {supplier.initials}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{supplier.name}</div>
                        <div className="text-sm text-gray-500">{supplier.location}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{supplier.contact.name}</div>
                    <div className="text-sm text-gray-500">{supplier.contact.email}</div>
                    <div className="text-sm text-gray-500">{supplier.contact.phone}</div>
                  </div>
                  <div>
                    <Badge className={getIndustryColor(supplier.industry)}>
                      {supplier.industry}
                    </Badge>
                  </div>
                  <div>
                    <Badge className={getStatusColor(supplier.status)}>
                      {supplier.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-900">{supplier.users} users</div>
                  <div className="text-sm text-gray-500">{supplier.created}</div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500">
                Showing 1 to 5 of {supplierData.length} results
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i + 1}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(i + 1)}
                    className="w-8 h-8"
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

      {/* Supplier Details */}
      <Card>
        <CardHeader>
          <CardTitle>Supplier Management</CardTitle>
          <p className="text-sm text-gray-500">View and manage detailed supplier information</p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="supplier-details" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-xl">
              <TabsTrigger value="supplier-details">Supplier Details</TabsTrigger>
              <TabsTrigger value="associated-users">Associated Users</TabsTrigger>
              <TabsTrigger value="contracts-documents">Contracts & Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="supplier-details" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Company Header and Info */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Company Header */}
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-full ${selectedSupplier.avatar} flex items-center justify-center text-white font-bold text-xl`}>
                      {selectedSupplier.initials}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{selectedSupplier.name}</h3>
                      <p className="text-sm text-gray-500">Technology Provider</p>
                      <Badge className="mt-2 bg-green-100 text-green-800">
                        Active since Jan 2025
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-900">{selectedSupplier.address}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-blue-600 hover:underline cursor-pointer">{selectedSupplier.website}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-900">{selectedSupplier.contact.phone}</span>
                  </div>

                  {/* Company Information */}
                  <div>
                    <h4 className="text-base font-medium text-gray-900 mb-4">Company Information</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Industry</label>
                        <p className="text-sm text-gray-900">{selectedSupplier.industry}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Tax ID</label>
                        <p className="text-sm text-gray-900">{selectedSupplier.taxId}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Company Size</label>
                        <p className="text-sm text-gray-900">{selectedSupplier.companySize}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Year Founded</label>
                        <p className="text-sm text-gray-900">{selectedSupplier.yearFounded}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Primary Service</label>
                        <p className="text-sm text-gray-900">{selectedSupplier.primaryService}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Service Area</label>
                        <p className="text-sm text-gray-900">{selectedSupplier.serviceArea}</p>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <h4 className="text-base font-medium text-gray-900 mb-4">Notes</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                      {selectedSupplier.notes}
                    </p>
                  </div>
                </div>

                {/* Primary Contacts */}
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-4">Primary Contacts</h4>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                          RW
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{selectedSupplier.contact.name}</div>
                          <div className="text-sm text-gray-500">Chief Technology Officer</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{selectedSupplier.contact.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{selectedSupplier.contact.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                          SL
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Sophia Lee</div>
                          <div className="text-sm text-gray-500">Account Manager</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">sophia@acmetech.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">+1 (415) 555-2345</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="associated-users" className="space-y-6 mt-6">
              <div className="text-center py-12 text-gray-500">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Associated Users</h3>
                <p>View and manage users associated with this supplier.</p>
              </div>
            </TabsContent>

            <TabsContent value="contracts-documents" className="space-y-6 mt-6">
              <div className="text-center py-12 text-gray-500">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contracts & Documents</h3>
                <p>Manage contracts and documents for this supplier.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}