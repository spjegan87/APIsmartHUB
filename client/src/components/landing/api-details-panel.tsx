import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Activity, 
  Clock, 
  TrendingUp, 
  Shield, 
  Users, 
  Database,
  Zap,
  CheckCircle,
  AlertCircle,
  XCircle
} from "lucide-react"

interface ApiMetric {
  id: string
  name: string
  endpoint: string
  status: "active" | "warning" | "error"
  requests: number
  responseTime: number
  uptime: number
  lastUpdated: string
}

const mockApiData: ApiMetric[] = [
  {
    id: "1",
    name: "User Authentication API",
    endpoint: "/api/v1/auth",
    status: "active",
    requests: 12450,
    responseTime: 45,
    uptime: 99.9,
    lastUpdated: "2 minutes ago"
  },
  {
    id: "2", 
    name: "Payment Processing API",
    endpoint: "/api/v1/payments",
    status: "warning",
    requests: 8230,
    responseTime: 120,
    uptime: 98.5,
    lastUpdated: "5 minutes ago"
  },
  {
    id: "3",
    name: "Data Analytics API",
    endpoint: "/api/v1/analytics",
    status: "active",
    requests: 15670,
    responseTime: 32,
    uptime: 99.8,
    lastUpdated: "1 minute ago"
  },
  {
    id: "4",
    name: "Notification Service API",
    endpoint: "/api/v1/notifications",
    status: "error",
    requests: 3400,
    responseTime: 250,
    uptime: 95.2,
    lastUpdated: "10 minutes ago"
  }
]

export function ApiDetailsPanel() {
  const [selectedApi, setSelectedApi] = useState<ApiMetric>(mockApiData[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockApiData.length)
      setSelectedApi(mockApiData[(currentIndex + 1) % mockApiData.length])
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "warning":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Activity className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "warning":
        return "bg-yellow-500"
      case "error":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* API List */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-500" />
            Live API Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockApiData.map((api, index) => (
              <div
                key={api.id}
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  selectedApi.id === api.id
                    ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700"
                    : "bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => {
                  setSelectedApi(api)
                  setCurrentIndex(index)
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(api.status)}
                    <div>
                      <p className="font-medium text-sm text-gray-900 dark:text-white">
                        {api.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                        {api.endpoint}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {api.requests.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">requests</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Selected API Details */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-500" />
              {selectedApi.name}
            </CardTitle>
            <Badge variant={selectedApi.status === "active" ? "default" : selectedApi.status === "warning" ? "secondary" : "destructive"}>
              {selectedApi.status.toUpperCase()}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(selectedApi.status)}`}></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Last updated {selectedApi.lastUpdated}
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Requests
                </span>
              </div>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {selectedApi.requests.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">last 24h</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Response Time
                </span>
              </div>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {selectedApi.responseTime}ms
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">average</p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Uptime
                </span>
              </div>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {selectedApi.uptime}%
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">last 30 days</p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Active Users
                </span>
              </div>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {Math.floor(selectedApi.requests / 10)}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">unique</p>
            </div>
          </div>

          {/* Endpoint Details */}
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Endpoint
              </span>
            </div>
            <code className="text-sm bg-gray-800 text-green-400 px-2 py-1 rounded font-mono">
              {selectedApi.endpoint}
            </code>
          </div>

          {/* Action Button */}
          <Button className="w-full">
            View Detailed Analytics
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}