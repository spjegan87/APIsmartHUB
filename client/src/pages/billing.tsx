import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  CreditCard, 
  FileText, 
  Settings, 
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
  Check,
  X,
  Calendar,
  Bell,
  HelpCircle,
  MessageSquare
} from "lucide-react";

const billingData = {
  currentSubscription: {
    plan: "Professional",
    amount: 99,
    billing: "monthly",
    nextBilling: "June 15, 2025"
  },
  paymentMethod: {
    type: "Visa",
    last4: "4242",
    expires: "12/26"
  },
  usageMetrics: {
    apiUsage: { used: 5430000, limit: 10000000 },
    storage: { used: 78, limit: 100 },
    teamMembers: { used: 8, limit: 15 },
    projects: { used: 12, limit: 25 }
  }
};

const usageAnalytics = [
  { month: "Jan", usage: 4.2, revenue: 47.28, requests: 128000, users: 31.28 },
  { month: "Feb", usage: 5.1, revenue: 43.78, requests: 135000, users: 28.67 },
  { month: "Mar", usage: 6.3, revenue: 52.45, requests: 142000, users: 34.12 },
  { month: "Apr", usage: 7.8, revenue: 48.92, requests: 158000, users: 29.85 },
  { month: "May", usage: 9.2, revenue: 56.33, requests: 167000, users: 37.91 }
];

const billingHistory = [
  { date: "June 1, 2025", invoice: "INV-2025-006", amount: "$99.00", status: "Paid" },
  { date: "May 1, 2025", invoice: "INV-2025-005", amount: "$99.00", status: "Paid" },
  { date: "April 1, 2025", invoice: "INV-2025-004", amount: "$99.00", status: "Paid" },
  { date: "March 1, 2025", invoice: "INV-2025-003", amount: "$99.00", status: "Paid" },
  { date: "February 1, 2025", invoice: "INV-2025-002", amount: "$99.00", status: "Paid" }
];

const plans = [
  {
    name: "Starter",
    price: 49,
    features: [
      "Up to 5 million API calls",
      "5 team members",
      "Basic analytics",
      "Email support",
      "Standard rate limits"
    ],
    current: false
  },
  {
    name: "Professional",
    price: 99,
    features: [
      "Up to 10 million API calls",
      "15 team members", 
      "Advanced analytics",
      "Priority support",
      "Custom rate limits",
      "API monitoring"
    ],
    current: true,
    popular: true
  },
  {
    name: "Enterprise",
    price: 299,
    features: [
      "Unlimited API calls",
      "Unlimited team members",
      "Custom analytics",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
      "SSO integration"
    ],
    current: false
  }
];

export default function Billing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Billing</h2>
          <p className="text-sm text-gray-500">Thursday, June 5, 2025</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download Invoice
          </Button>
          <Button>
            <CreditCard className="w-4 h-4 mr-2" />
            Update Plan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Subscription - Left 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Subscription */}
          <Card>
            <CardHeader>
              <CardTitle>Current Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{billingData.currentSubscription.plan}</h3>
                  <p className="text-gray-600">Perfect for growing teams</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">${billingData.currentSubscription.amount}</p>
                  <p className="text-gray-500">per month</p>
                </div>
              </div>

              {/* Plan Features */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">API calls per month</p>
                  <p className="text-lg font-semibold text-gray-900">10M requests</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Team members</p>
                  <p className="text-lg font-semibold text-gray-900">Up to 15 users</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Next billing</p>
                  <p className="text-lg font-semibold text-gray-900">{billingData.currentSubscription.nextBilling}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">24/7 support</p>
                  <p className="text-lg font-semibold text-gray-900">Included</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button>Change Plan</Button>
                <Button variant="outline">Cancel Subscription</Button>
              </div>
            </CardContent>
          </Card>

          {/* Usage Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">API Calls</span>
                    <span className="text-sm font-medium">{(billingData.usageMetrics.apiUsage.used / 1000000).toFixed(1)}M / {billingData.usageMetrics.apiUsage.limit / 1000000}M</span>
                  </div>
                  <Progress value={(billingData.usageMetrics.apiUsage.used / billingData.usageMetrics.apiUsage.limit) * 100} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Storage</span>
                    <span className="text-sm font-medium">{billingData.usageMetrics.storage.used}GB / {billingData.usageMetrics.storage.limit}GB</span>
                  </div>
                  <Progress value={(billingData.usageMetrics.storage.used / billingData.usageMetrics.storage.limit) * 100} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Team Members</span>
                    <span className="text-sm font-medium">{billingData.usageMetrics.teamMembers.used} / {billingData.usageMetrics.teamMembers.limit}</span>
                  </div>
                  <Progress value={(billingData.usageMetrics.teamMembers.used / billingData.usageMetrics.teamMembers.limit) * 100} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Projects</span>
                    <span className="text-sm font-medium">{billingData.usageMetrics.projects.used} / {billingData.usageMetrics.projects.limit}</span>
                  </div>
                  <Progress value={(billingData.usageMetrics.projects.used / billingData.usageMetrics.projects.limit) * 100} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Analytics</CardTitle>
              <p className="text-sm text-gray-500">Last 30 days</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">4.2M</div>
                  <p className="text-sm text-gray-600">API Calls Usage</p>
                  <p className="text-xs text-green-600">+3.1% from last week</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">47.28</div>
                  <p className="text-sm text-gray-600">Revenue utilization</p>
                  <p className="text-xs text-green-600">+5.7% from last month</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">126.08</div>
                  <p className="text-sm text-gray-600">Usage overage</p>
                  <p className="text-xs text-red-600">+8.1% from last month</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">31.28</div>
                  <p className="text-sm text-gray-600">Active users</p>
                  <p className="text-xs text-green-600">+2.4% from last week</p>
                </div>
              </div>
              
              {/* Simple chart representation */}
              <div className="h-40 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Usage trending upward</p>
                  <p className="text-xs text-gray-500">Detailed analytics available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods - Right column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• {billingData.paymentMethod.last4}</p>
                      <p className="text-sm text-gray-500">Expires {billingData.paymentMethod.expires}</p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>
                <Button variant="outline" className="w-full">Add Payment Method</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p className="font-medium">Acme Corporation</p>
                <p>123 Business St</p>
                <p>San Francisco, CA 94107</p>
                <p>United States</p>
                <Button variant="outline" size="sm" className="mt-3">Update Address</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Billing History</CardTitle>
            <div className="flex items-center gap-2">
              <Select defaultValue="2025">
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {billingHistory.map((invoice, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.invoice}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className="bg-green-100 text-green-800">{invoice.status}</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">Showing first 5 of 12 invoices</p>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Available Plans</CardTitle>
            <Button variant="outline" size="sm">Compare Plans for Current Plan</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div key={index} className={`border rounded-lg p-6 relative ${plan.current ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.current ? "outline" : "default"}
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : "Choose Plan"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Billing Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Billing Cycle</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Monthly billing</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-renew subscription</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Invoice Recipients</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Sarah Johnson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Michael Chen</span>
                </div>
                <Button variant="link" size="sm" className="p-0 h-auto text-blue-600">
                  + Add Recipient
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">Usage notifications</p>
                <p className="text-sm text-gray-500">Get notified when you're approaching your plan limits</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">Promotional offers</p>
                <p className="text-sm text-gray-500">Receive emails about new features and special offers</p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Frequently Asked Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-medium text-gray-900 mb-2">How does billing work?</h4>
              <p className="text-sm text-gray-600">You're charged at the start of each billing cycle for the upcoming period. If you upgrade or add seats, you'll be charged immediately and your existing subscription will be prorated.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-medium text-gray-900 mb-2">How do I change my plan?</h4>
              <p className="text-sm text-gray-600">You can upgrade or downgrade your plan at any time from this page. Changes take effect immediately.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-medium text-gray-900 mb-2">How are API overages charged?</h4>
              <p className="text-sm text-gray-600">API calls beyond your plan limit are charged at $0.01 per 1,000 requests. Overages are included in your next invoice.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Can I get a refund for my subscription?</h4>
              <p className="text-sm text-gray-600">We offer refunds within 30 days of your initial purchase. Contact support for assistance with refund requests.</p>
            </div>
          </div>
          
          <Button variant="outline" className="mt-6">
            View All FAQs
          </Button>
        </CardContent>
      </Card>

      {/* Need help section */}
      <Card>
        <CardHeader>
          <CardTitle>Need help with billing?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Our support team is available 24/7 to assist you with any billing questions or issues.
          </p>
          <div className="flex gap-3">
            <Button variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat Documentation
            </Button>
            <Button>
              <HelpCircle className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
