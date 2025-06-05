import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockBillingData } from "@/lib/mock-data";

export default function Billing() {
  const { currentPlan, amount, billing, apiCalls, teamMembers, nextInvoice } = mockBillingData;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentPlan} Plan</h3>
                  <p className="text-gray-600">Perfect for growing businesses</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">${amount}</p>
                  <p className="text-gray-500">per {billing === 'monthly' ? 'month' : 'year'}</p>
                </div>
              </div>
              
              {/* Usage Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">API Calls Used</p>
                  <div className="flex items-end mt-2">
                    <p className="text-2xl font-bold text-gray-900">{(apiCalls.used / 1000000).toFixed(1)}M</p>
                    <p className="text-sm text-gray-500 ml-2">/ {apiCalls.limit / 1000000}M</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(apiCalls.used / apiCalls.limit) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Team Members</p>
                  <div className="flex items-end mt-2">
                    <p className="text-2xl font-bold text-gray-900">{teamMembers.used}</p>
                    <p className="text-sm text-gray-500 ml-2">/ {teamMembers.limit}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(teamMembers.used / teamMembers.limit) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button>Upgrade Plan</Button>
                <Button variant="outline">View All Plans</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Next Invoice */}
        <Card>
          <CardHeader>
            <CardTitle>Next Invoice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {nextInvoice.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">{item.description}</span>
                  <span className="font-medium">${item.amount.toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${nextInvoice.amount.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Due on {nextInvoice.date}</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Feb 15, 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Professional Plan</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$99.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge>Paid</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button variant="link" size="sm" className="text-primary hover:text-blue-700">
                      Download
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jan 15, 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Professional Plan</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$99.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge>Paid</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button variant="link" size="sm" className="text-primary hover:text-blue-700">
                      Download
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
