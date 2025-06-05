import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Book, FileText, Video, Code } from "lucide-react";

export default function Documentation() {
  return (
    <div className="space-y-6">
      {/* Search and Quick Actions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-10"
              />
            </div>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              New Document
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Documentation Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Book className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Getting Started</h3>
            <p className="text-sm text-gray-500">Quick start guides and tutorials</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">API Reference</h3>
            <p className="text-sm text-gray-500">Complete API documentation</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Video Tutorials</h3>
            <p className="text-sm text-gray-500">Step-by-step video guides</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Examples</h3>
            <p className="text-sm text-gray-500">Code examples and samples</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Authentication Guide</h4>
                  <p className="text-sm text-gray-500">Complete guide to API authentication</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Updated 2 hours ago</p>
                <Button variant="link" size="sm">View</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">API Reference v2.0</h4>
                  <p className="text-sm text-gray-500">Complete API endpoint documentation</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Updated 1 day ago</p>
                <Button variant="link" size="sm">View</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Book className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Quick Start Guide</h4>
                  <p className="text-sm text-gray-500">Get started with our API in 5 minutes</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Updated 2 days ago</p>
                <Button variant="link" size="sm">View</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
