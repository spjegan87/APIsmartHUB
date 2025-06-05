import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2, 
  Shield, 
  BarChart3, 
  Clock, 
  Users, 
  Database,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  FileCode,
  Settings
} from "lucide-react"

export function ApiFeaturesShowcase() {
  const features = [
    {
      icon: Code2,
      title: "Smart API Schema Design",
      description: "Visual schema editor with auto-validation and optimization suggestions",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced authentication, authorization, and threat protection",
      color: "text-green-500", 
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive monitoring with custom dashboards and alerts",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: Clock,
      title: "Performance Optimization",
      description: "Automatic caching, rate limiting, and response time optimization",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Role-based access control with audit trails and team workflows",
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Seamless integration with databases and external services",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    }
  ]

  const apiStats = [
    { label: "APIs Managed", value: "50K+", icon: Globe },
    { label: "Requests/Month", value: "1.2B+", icon: TrendingUp },
    { label: "Uptime SLA", value: "99.99%", icon: Zap },
    { label: "Response Time", value: "<50ms", icon: Clock }
  ]

  return (
    <div className="space-y-12">
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card key={index} className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Animated background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Icon className="w-full h-full" />
              </div>
            </Card>
          )
        })}
      </div>

      {/* API Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Trusted by Developers Worldwide</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Join thousands of companies using our platform to build, secure, and scale their APIs
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {apiStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Code Example Section */}
      <Card className="bg-gray-900 text-white overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-white">
              <FileCode className="w-5 h-5 text-green-400" />
              Quick Integration
            </CardTitle>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
              Easy Setup
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-gray-400 text-xs">terminal</span>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-green-400">$</span>
                <span className="text-blue-400"> npm install </span>
                <span className="text-yellow-300">@apimanager/sdk</span>
              </div>
              <div className="text-gray-400"># Initialize your API</div>
              <div>
                <span className="text-purple-400">import</span>
                <span className="text-white"> &#123; ApiManager &#125; </span>
                <span className="text-purple-400">from</span>
                <span className="text-green-300"> '@apimanager/sdk'</span>
              </div>
              <div></div>
              <div>
                <span className="text-blue-400">const</span>
                <span className="text-white"> api = </span>
                <span className="text-purple-400">new</span>
                <span className="text-yellow-300"> ApiManager</span>
                <span className="text-white">(&#123;</span>
              </div>
              <div className="ml-4">
                <span className="text-red-400">apiKey</span>
                <span className="text-white">: </span>
                <span className="text-green-300">'your-api-key'</span>
                <span className="text-white">,</span>
              </div>
              <div className="ml-4">
                <span className="text-red-400">endpoint</span>
                <span className="text-white">: </span>
                <span className="text-green-300">'https://api.example.com'</span>
              </div>
              <div>
                <span className="text-white">&#125;)</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View Documentation
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Try Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}