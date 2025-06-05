export const mockMetrics = {
  totalCalls: "2.4M",
  activeAPIs: 47,
  errorRate: "0.02%",
  avgResponseTime: "142ms",
  callsGrowth: "12% from last week",
  apisGrowth: "3 new this month",
  errorImprovement: "Down 0.5%",
  responseImprovement: "18ms faster"
};

export const mockTopAPIs = [
  {
    id: 1,
    name: "User Authentication",
    endpoint: "/api/v1/auth",
    calls: "847K",
    growth: "+15%",
    status: "healthy"
  },
  {
    id: 2,
    name: "Payment Processing",
    endpoint: "/api/v1/payments",
    calls: "234K",
    growth: "+8%",
    status: "healthy"
  },
  {
    id: 3,
    name: "Product Catalog",
    endpoint: "/api/v1/products",
    calls: "156K",
    growth: "+22%",
    status: "warning"
  },
  {
    id: 4,
    name: "Email Service",
    endpoint: "/api/v1/email",
    calls: "89K",
    growth: "-3%",
    status: "error"
  }
];

export const mockRecentActivity = [
  {
    id: 1,
    type: "create",
    description: "New API endpoint created: /users/profile",
    timestamp: "2 minutes ago",
    user: "John Doe"
  },
  {
    id: 2,
    type: "update",
    description: "Schema validation updated for Orders API",
    timestamp: "15 minutes ago",
    user: "Sarah Wilson"
  },
  {
    id: 3,
    type: "user",
    description: "New user role assigned: API Developer",
    timestamp: "1 hour ago",
    user: "Mike Chen"
  },
  {
    id: 4,
    type: "alert",
    description: "Rate limit exceeded for Payment API",
    timestamp: "2 hours ago",
    user: "System"
  }
];

export const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@company.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
    initials: "JD"
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    role: "Developer",
    status: "Active",
    lastActive: "1 day ago",
    initials: "SW"
  },
  {
    id: 3,
    name: "Mike Chen",
    email: "mike.chen@company.com",
    role: "Viewer",
    status: "Inactive",
    lastActive: "3 days ago",
    initials: "MC"
  }
];

export const mockBillingData = {
  currentPlan: "Professional",
  amount: 99,
  billing: "monthly",
  apiCalls: { used: 2400000, limit: 5000000 },
  teamMembers: { used: 12, limit: 25 },
  nextInvoice: {
    amount: 114,
    date: "March 15, 2024",
    items: [
      { description: "Professional Plan", amount: 99 },
      { description: "Extra API calls", amount: 15 }
    ]
  }
};

export const mockChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [{
    label: "API Calls",
    data: [120000, 190000, 300000, 500000, 200000, 300000, 450000],
    borderColor: "#0066FF",
    backgroundColor: "rgba(0, 102, 255, 0.1)",
    tension: 0.4,
    fill: true
  }]
};
