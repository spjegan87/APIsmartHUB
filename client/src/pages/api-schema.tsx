import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Folder, FileCode, Play, AlertCircle } from "lucide-react";

export default function ApiSchema() {
  const [showDemo, setShowDemo] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const defaultSchema = `{
  "openapi": "3.0.0",
  "info": {
    "title": "User API",
    "version": "1.0.0"
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
      }
    }
  },
  "components": {
    "schemas": {
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "email": {
            "type": "string"
          }
        }
      }
    }
  }
}`;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>API Schema Editor</CardTitle>
            <div className="flex space-x-3">
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
                      src="https://editor.swagger.io/" 
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
            </div>
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
    </div>
  );
}
