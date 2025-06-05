import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CreditCard, DollarSign, TrendingUp, AlertTriangle, Calendar, Users } from "lucide-react";

const billingAnalytics = {
  currentPeriod: {
    revenue: 24750,
    growth: "+18.3%",
    customers: 347,
    newCustomers: 23,
    churnRate: "2.1%",
    avgRevenuePerUser: 71.33
  },
  subscriptionBreakdown: [
    { plan: "Free", users: 1247, revenue: 0, percentage: 72 },
    { plan: "Basic", users: 234, revenue: 4680, percentage: 13.5 },
    { plan: "Professional", users: 189, revenue: 18711, percentage: 10.9 },
    { plan: "Enterprise", users: 67, revenue: 20100, percentage: 3.6 }
  ],
  usageMetrics: {
    apiCalls: { used: 247500000, limit: 500000000, cost: 3712.50 },
    bandwidth: { used: 2.3, limit: 10, cost: 115.00, unit: "TB" },
    storage: { used: 847, limit: 2000, cost: 42.35, unit: "GB" },
    teamMembers: { used: 23, limit: 50, cost: 230.00 }
  },
  recentTransactions: [
    {
      id: 1,
      customer: "Acme Corp",
      plan: "Enterprise",
      amount: 299.00,
      status: "paid",
      date: "2024-06-05",
      invoice: "INV-2024-001247"
    },
    {
      id: 2,
      customer: "TechStart Inc",
      plan: "Professional",
      amount: 99.00,
      status: "paid",
      date: "2024-06-04",
      invoice: "INV-2024-001246"
    },
    {
      id: 3,
      customer: "DevCo Ltd",
      plan: "Basic",
      amount: 29.00,
      status: "pending",
      date: "2024-06-04",
      invoice: "INV-2024-001245"
    }
  ]
};

export function EnhancedBillingDashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "failed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Free": return "bg-gray-100 text-gray-800";
      case "Basic": return "bg-blue-100 text-blue-800";
      case "Professional": return "bg-purple-100 text-purple-800";
      case "Enterprise": return "bg-gold-100 text-gold-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Revenue Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Revenue Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-5 h-5 text-green-600 mr-1" />
                <span className="text-2xl font-bold text-gray-900">
                  ${billingAnalytics.currentPeriod.revenue.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Monthly Revenue</p>
              <div className="flex items-center justify-center text-green-600 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                {billingAnalytics.currentPeriod.growth}
              </div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-blue-600 mr-1" />
                <span className="text-2xl font-bold text-gray-900">
                  {billingAnalytics.currentPeriod.customers}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Total Customers</p>
              <p className="text-blue-600 text-sm">+{billingAnalytics.currentPeriod.newCustomers} this month</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                ${billingAnalytics.currentPeriod.avgRevenuePerUser.toFixed(2)}
              </div>
              <p className="text-sm text-gray-600 mb-1">ARPU</p>
              <p className="text-purple-600 text-sm">Average Revenue Per User</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {billingAnalytics.currentPeriod.churnRate}
              </div>
              <p className="text-sm text-gray-600 mb-1">Churn Rate</p>
              <p className="text-amber-600 text-sm">Monthly customer churn</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Breakdown & Usage Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subscription Plans */}
        <Card>
          <CardHeader>
            <CardTitle>Subscription Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {billingAnalytics.subscriptionBreakdown.map((plan, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge className={getPlanColor(plan.plan)}>
                      {plan.plan}
                    </Badge>
                    <div>
                      <p className="font-medium text-gray-900">{plan.users} users</p>
                      <p className="text-sm text-gray-500">{plan.percentage}% of total</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${plan.revenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Usage Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Usage & Costs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">API Calls</span>
                  <span className="text-sm font-medium">${billingAnalytics.usageMetrics.apiCalls.cost}</span>
                </div>
                <Progress value={(billingAnalytics.usageMetrics.apiCalls.used / billingAnalytics.usageMetrics.apiCalls.limit) * 100} className="mb-1" />
                <p className="text-xs text-gray-500">
                  {(billingAnalytics.usageMetrics.apiCalls.used / 1000000).toFixed(1)}M / {(billingAnalytics.usageMetrics.apiCalls.limit / 1000000)}M calls
                </p>
              </div>

              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Bandwidth</span>
                  <span className="text-sm font-medium">${billingAnalytics.usageMetrics.bandwidth.cost}</span>
                </div>
                <Progress value={(billingAnalytics.usageMetrics.bandwidth.used / billingAnalytics.usageMetrics.bandwidth.limit) * 100} className="mb-1" />
                <p className="text-xs text-gray-500">
                  {billingAnalytics.usageMetrics.bandwidth.used} / {billingAnalytics.usageMetrics.bandwidth.limit} {billingAnalytics.usageMetrics.bandwidth.unit}
                </p>
              </div>

              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Storage</span>
                  <span className="text-sm font-medium">${billingAnalytics.usageMetrics.storage.cost}</span>
                </div>
                <Progress value={(billingAnalytics.usageMetrics.storage.used / billingAnalytics.usageMetrics.storage.limit) * 100} className="mb-1" />
                <p className="text-xs text-gray-500">
                  {billingAnalytics.usageMetrics.storage.used} / {billingAnalytics.usageMetrics.storage.limit} {billingAnalytics.usageMetrics.storage.unit}
                </p>
              </div>

              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Team Members</span>
                  <span className="text-sm font-medium">${billingAnalytics.usageMetrics.teamMembers.cost}</span>
                </div>
                <Progress value={(billingAnalytics.usageMetrics.teamMembers.used / billingAnalytics.usageMetrics.teamMembers.limit) * 100} className="mb-1" />
                <p className="text-xs text-gray-500">
                  {billingAnalytics.usageMetrics.teamMembers.used} / {billingAnalytics.usageMetrics.teamMembers.limit} members
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Recent Transactions
            </CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {billingAnalytics.recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.customer}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={getPlanColor(transaction.plan)} variant="outline">
                        {transaction.plan}
                      </Badge>
                      <span className="text-xs text-gray-500 font-mono">{transaction.invoice}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${transaction.amount.toFixed(2)}</p>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                  <Badge className={getStatusColor(transaction.status)}>
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}