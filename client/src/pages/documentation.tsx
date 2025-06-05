import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Book, 
  FileText, 
  Video, 
  Code, 
  Copy, 
  Play,
  ChevronRight,
  Lock,
  Globe,
  Database,
  Settings,
  User,
  CreditCard,
  BarChart3,
  Shield
} from "lucide-react";

const sidebarItems = [
  { id: "introduction", label: "Introduction", icon: Book },
  { id: "authentication", label: "Authentication", icon: Lock },
  { id: "getting-started", label: "Getting Started", icon: Play },
  { id: "users", label: "Users", icon: User },
  { id: "organizations", label: "Organizations", icon: Globe },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "webhooks", label: "Webhooks", icon: Database },
  { id: "errors", label: "Errors", icon: Shield },
  { id: "rate-limiting", label: "Rate Limiting", icon: Settings }
];

const codeExamples = {
  curl: `curl -X GET "https://api.example.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
  
  javascript: `const response = await fetch('https://api.example.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const users = await response.json();
console.log(users);`,

  python: `import requests

url = "https://api.example.com/v1/users"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
users = response.json()
print(users)`,

  php: `<?php
$url = "https://api.example.com/v1/users";
$headers = [
    "Authorization: Bearer YOUR_API_KEY",
    "Content-Type: application/json"
];

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
$users = json_decode($response, true);
curl_close($curl);

print_r($users);
?>`
};

export default function Documentation() {
  const [selectedSection, setSelectedSection] = useState("introduction");
  const [selectedLanguage, setSelectedLanguage] = useState("curl");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "introduction":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">API Documentation</h1>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800">
                  Welcome to the APISIX Manager API documentation. This comprehensive guide will help you integrate our API into your applications efficiently.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our REST API enables you to programmatically manage users, organizations, billing, and analytics. 
                All API endpoints are accessed via HTTPS and are located at <code className="bg-gray-100 px-2 py-1 rounded">api.example.com</code>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Base URL</h2>
              <div className="bg-gray-50 border rounded-lg p-4 font-mono text-sm">
                https://api.example.com/v1
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Content Type</h2>
              <p className="text-gray-600 mb-4">
                All requests should be made with the <code className="bg-gray-100 px-2 py-1 rounded">Content-Type</code> header set to <code className="bg-gray-100 px-2 py-1 rounded">application/json</code>.
              </p>
            </div>
          </div>
        );

      case "authentication":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Authentication</h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                The API uses API keys for authentication. Include your API key in the Authorization header of every request.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">API Key</h2>
              <p className="text-gray-600 mb-4">
                You can find your API key in your account settings. Keep your API key secret and never expose it in client-side code.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-yellow-600" />
                  <span className="font-medium text-yellow-800">Security Note</span>
                </div>
                <p className="text-yellow-700">
                  Never expose your API key in client-side code or commit it to version control.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Request Header</h3>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Example Request</h2>
              <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="php">PHP</TabsTrigger>
                </TabsList>
                
                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang} className="mt-4">
                    <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                        <code>{code}</code>
                      </pre>
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(code)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        );

      case "users":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Users</h1>
              <p className="text-gray-600 leading-relaxed">
                The Users API allows you to manage user accounts, retrieve user information, and handle user-related operations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">List Users</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800">GET</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/users</code>
              </div>
              <p className="text-gray-600 mb-6">Retrieve a list of all users in your organization.</p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Parameter</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Type</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">limit</td>
                        <td className="px-4 py-2 text-sm">integer</td>
                        <td className="px-4 py-2 text-sm">Number of users to return (default: 20, max: 100)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">offset</td>
                        <td className="px-4 py-2 text-sm">integer</td>
                        <td className="px-4 py-2 text-sm">Number of users to skip</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">status</td>
                        <td className="px-4 py-2 text-sm">string</td>
                        <td className="px-4 py-2 text-sm">Filter by user status (active, inactive)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-medium text-gray-900">Response</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm"><code>{`{
  "data": [
    {
      "id": "user_123",
      "email": "john@example.com",
      "name": "John Doe",
      "status": "active",
      "created_at": "2025-01-15T10:30:00Z",
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "meta": {
    "total": 150,
    "limit": 20,
    "offset": 0
  }
}`}</code></pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Create User</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800">POST</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/users</code>
              </div>
              <p className="text-gray-600 mb-6">Create a new user account.</p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Request Body</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm"><code>{`{
  "email": "jane@example.com",
  "name": "Jane Smith",
  "role": "user",
  "organization_id": "org_456"
}`}</code></pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Get User</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800">GET</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/users/{`{id}`}</code>
              </div>
              <p className="text-gray-600 mb-6">Retrieve a specific user by ID.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Update User</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-yellow-100 text-yellow-800">PUT</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/users/{`{id}`}</code>
              </div>
              <p className="text-gray-600 mb-6">Update an existing user's information.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Delete User</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-red-100 text-red-800">DELETE</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/users/{`{id}`}</code>
              </div>
              <p className="text-gray-600 mb-6">Permanently delete a user account.</p>
            </div>
          </div>
        );

      case "getting-started":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Getting Started</h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get up and running with our API in just a few minutes. This guide will walk you through the basics of making your first API call.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Start</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-medium text-gray-900">Get your API key</h3>
                    <p className="text-sm text-gray-600">Sign up for an account and retrieve your API key from the dashboard.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-medium text-gray-900">Make your first request</h3>
                    <p className="text-sm text-gray-600">Use your API key to authenticate and make your first API call.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-medium text-gray-900">Handle the response</h3>
                    <p className="text-sm text-gray-600">Process the JSON response and integrate the data into your application.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your First API Call</h2>
              <p className="text-gray-600 mb-4">Here's a simple example to get you started:</p>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`curl -X GET "https://api.example.com/v1/users" \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json"`}</code></pre>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">SDK and Libraries</h2>
              <p className="text-gray-600 mb-4">We provide official SDKs for popular programming languages:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-gray-900">JavaScript/Node.js</h3>
                  <code className="text-sm text-gray-600">npm install @example/api-client</code>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-gray-900">Python</h3>
                  <code className="text-sm text-gray-600">pip install example-api-client</code>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-gray-900">PHP</h3>
                  <code className="text-sm text-gray-600">composer require example/api-client</code>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-gray-900">Ruby</h3>
                  <code className="text-sm text-gray-600">gem install example-api-client</code>
                </div>
              </div>
            </div>
          </div>
        );

      case "organizations":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Organizations</h1>
              <p className="text-gray-600 leading-relaxed">
                Organizations allow you to group users and manage resources collectively. Each organization has its own settings, billing, and access controls.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">List Organizations</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800">GET</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/organizations</code>
              </div>
              <p className="text-gray-600 mb-6">Retrieve a list of organizations you have access to.</p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Response</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm"><code>{`{
  "data": [
    {
      "id": "org_123",
      "name": "Acme Corporation",
      "slug": "acme-corp",
      "plan": "enterprise",
      "status": "active",
      "created_at": "2025-01-01T00:00:00Z",
      "settings": {
        "billing_email": "billing@acme.com",
        "technical_contact": "tech@acme.com"
      }
    }
  ]
}`}</code></pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Create Organization</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800">POST</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/organizations</code>
              </div>
              <p className="text-gray-600 mb-6">Create a new organization.</p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Request Body</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm"><code>{`{
  "name": "New Organization",
  "slug": "new-org",
  "billing_email": "billing@neworg.com",
  "plan": "professional"
}`}</code></pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Organization Members</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800">GET</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/organizations/{`{id}`}/members</code>
              </div>
              <p className="text-gray-600 mb-6">List all members of an organization.</p>
            </div>
          </div>
        );

      case "billing":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Billing</h1>
              <p className="text-gray-600 leading-relaxed">
                Manage billing information, subscriptions, and usage data for your organization.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Billing Information</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800">GET</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/billing</code>
              </div>
              <p className="text-gray-600 mb-6">Retrieve current billing information and subscription details.</p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Response</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm"><code>{`{
  "subscription": {
    "id": "sub_123",
    "plan": "professional",
    "status": "active",
    "current_period_start": "2025-01-01T00:00:00Z",
    "current_period_end": "2025-02-01T00:00:00Z",
    "amount": 9900,
    "currency": "usd"
  },
  "usage": {
    "api_calls": {
      "used": 150000,
      "limit": 1000000,
      "overage": 0
    },
    "storage": {
      "used": 2048,
      "limit": 10240,
      "unit": "mb"
    }
  },
  "next_invoice": {
    "amount_due": 9900,
    "due_date": "2025-02-01T00:00:00Z"
  }
}`}</code></pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Update Payment Method</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-yellow-100 text-yellow-800">PUT</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/billing/payment-method</code>
              </div>
              <p className="text-gray-600 mb-6">Update the default payment method for your subscription.</p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Request Body</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm"><code>{`{
  "token": "tok_visa_1234",
  "type": "card"
}`}</code></pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">List Invoices</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800">GET</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/billing/invoices</code>
              </div>
              <p className="text-gray-600 mb-6">Retrieve a list of all invoices for your organization.</p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Analytics</h1>
              <p className="text-gray-600 leading-relaxed">
                Access detailed analytics and metrics about your API usage, performance, and user behavior.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Usage Analytics</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800">GET</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/analytics/usage</code>
              </div>
              <p className="text-gray-600 mb-6">Get detailed usage statistics for your API calls.</p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Parameter</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Type</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">start_date</td>
                        <td className="px-4 py-2 text-sm">string</td>
                        <td className="px-4 py-2 text-sm">Start date for analytics (ISO 8601 format)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">end_date</td>
                        <td className="px-4 py-2 text-sm">string</td>
                        <td className="px-4 py-2 text-sm">End date for analytics (ISO 8601 format)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-mono">granularity</td>
                        <td className="px-4 py-2 text-sm">string</td>
                        <td className="px-4 py-2 text-sm">Data granularity (hour, day, week, month)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-medium text-gray-900">Response</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm"><code>{`{
  "data": [
    {
      "timestamp": "2025-01-15T00:00:00Z",
      "total_requests": 1250,
      "successful_requests": 1180,
      "failed_requests": 70,
      "average_response_time": 145,
      "bandwidth_used": 2048576
    }
  ],
  "summary": {
    "total_requests": 45000,
    "success_rate": 94.4,
    "average_response_time": 132
  }
}`}</code></pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Error Analytics</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800">GET</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/analytics/errors</code>
              </div>
              <p className="text-gray-600 mb-6">Analyze error patterns and trends in your API usage.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Performance Metrics</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800">GET</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/analytics/performance</code>
              </div>
              <p className="text-gray-600 mb-6">Get detailed performance metrics including response times and throughput.</p>
            </div>
          </div>
        );

      case "webhooks":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Webhooks</h1>
              <p className="text-gray-600 leading-relaxed">
                Webhooks allow you to receive real-time notifications when specific events occur in your account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Create Webhook</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800">POST</Badge>
                <code className="bg-gray-100 px-2 py-1 rounded">/webhooks</code>
              </div>
              <p className="text-gray-600 mb-6">Create a new webhook endpoint to receive event notifications.</p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Request Body</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm"><code>{`{
  "url": "https://your-app.com/webhooks",
  "events": [
    "user.created",
    "user.updated",
    "user.deleted",
    "billing.subscription.updated"
  ],
  "description": "Main webhook endpoint",
  "active": true
}`}</code></pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Webhook Events</h2>
              <p className="text-gray-600 mb-4">Available webhook events that you can subscribe to:</p>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Event</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">user.created</td>
                      <td className="px-4 py-2 text-sm">Triggered when a new user is created</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">user.updated</td>
                      <td className="px-4 py-2 text-sm">Triggered when user information is updated</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">billing.subscription.updated</td>
                      <td className="px-4 py-2 text-sm">Triggered when subscription changes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">api.usage.threshold</td>
                      <td className="px-4 py-2 text-sm">Triggered when usage thresholds are reached</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Webhook Payload</h2>
              <p className="text-gray-600 mb-4">Example webhook payload structure:</p>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "id": "evt_123",
  "type": "user.created",
  "created": "2025-01-15T10:30:00Z",
  "data": {
    "object": {
      "id": "user_456",
      "email": "john@example.com",
      "name": "John Doe",
      "status": "active"
    }
  }
}`}</code></pre>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Webhook Security</h2>
              <p className="text-gray-600 mb-4">
                We sign webhook payloads with a secret key. Verify the signature to ensure the webhook is from us.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-yellow-600" />
                  <span className="font-medium text-yellow-800">Security Note</span>
                </div>
                <p className="text-yellow-700">
                  Always verify webhook signatures to prevent malicious requests.
                </p>
              </div>
            </div>
          </div>
        );

      case "rate-limiting":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Rate Limiting</h1>
              <p className="text-gray-600 leading-relaxed">
                Our API implements rate limiting to ensure fair usage and maintain service quality for all users.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Rate Limit Headers</h2>
              <p className="text-gray-600 mb-4">
                Every API response includes headers with your current rate limit status:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Header</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">X-RateLimit-Limit</td>
                      <td className="px-4 py-2 text-sm">The maximum number of requests allowed per window</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">X-RateLimit-Remaining</td>
                      <td className="px-4 py-2 text-sm">The number of requests remaining in the current window</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">X-RateLimit-Reset</td>
                      <td className="px-4 py-2 text-sm">Unix timestamp when the rate limit window resets</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Rate Limits by Plan</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Plan</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Rate Limit</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm">Free</td>
                      <td className="px-4 py-2 text-sm">1,000 requests</td>
                      <td className="px-4 py-2 text-sm">1 hour</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm">Starter</td>
                      <td className="px-4 py-2 text-sm">10,000 requests</td>
                      <td className="px-4 py-2 text-sm">1 hour</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm">Professional</td>
                      <td className="px-4 py-2 text-sm">100,000 requests</td>
                      <td className="px-4 py-2 text-sm">1 hour</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm">Enterprise</td>
                      <td className="px-4 py-2 text-sm">Custom limits</td>
                      <td className="px-4 py-2 text-sm">Configurable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Handling Rate Limits</h2>
              <p className="text-gray-600 mb-4">
                When you exceed your rate limit, you'll receive a 429 status code:
              </p>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1642694400

{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Try again later.",
    "retry_after": 3600
  }
}`}</code></pre>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Implement Exponential Backoff</h3>
                  <p className="text-sm text-gray-600">
                    When you receive a 429 response, wait before retrying. Use exponential backoff to avoid overwhelming the API.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Monitor Rate Limit Headers</h3>
                  <p className="text-sm text-gray-600">
                    Check the rate limit headers in every response to track your usage and prevent hitting limits.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Cache Responses</h3>
                  <p className="text-sm text-gray-600">
                    Cache API responses when possible to reduce the number of requests needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "errors":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Errors</h1>
              <p className="text-gray-600 leading-relaxed">
                Our API uses conventional HTTP response codes to indicate success or failure of API requests.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">HTTP Status Codes</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Code</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">200</td>
                      <td className="px-4 py-2 text-sm">OK - Request successful</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">201</td>
                      <td className="px-4 py-2 text-sm">Created - Resource created successfully</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">400</td>
                      <td className="px-4 py-2 text-sm">Bad Request - Invalid request parameters</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">401</td>
                      <td className="px-4 py-2 text-sm">Unauthorized - Invalid or missing authentication</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">403</td>
                      <td className="px-4 py-2 text-sm">Forbidden - Insufficient permissions</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">404</td>
                      <td className="px-4 py-2 text-sm">Not Found - Resource not found</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">429</td>
                      <td className="px-4 py-2 text-sm">Too Many Requests - Rate limit exceeded</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">500</td>
                      <td className="px-4 py-2 text-sm">Internal Server Error - Server error</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Error Response Format</h2>
              <p className="text-gray-600 mb-4">
                All error responses follow a consistent format and include detailed information about the error.
              </p>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "error": {
    "code": "validation_error",
    "message": "The request could not be completed due to validation errors",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      },
      {
        "field": "name",
        "message": "Name must be at least 2 characters long"
      }
    ]
  }
}`}</code></pre>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">API Documentation</h1>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800">
                  Welcome to the APISIX Manager API documentation. This comprehensive guide will help you integrate our API into your applications efficiently.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our REST API enables you to programmatically manage users, organizations, billing, and analytics. 
                All API endpoints are accessed via HTTPS and are located at <code className="bg-gray-100 px-2 py-1 rounded">api.example.com</code>.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">API Documentation</h2>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search..." className="pl-10 text-sm" />
          </div>
        </div>
        
        <nav className="px-4 pb-6">
          <ul className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setSelectedSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                      selectedSection === item.id 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
