import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Shield, Zap, Users } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating API Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-mono">
          GET /api/users
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-mono">
          200 OK
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
        <div className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm font-mono">
          POST /api/data
        </div>
      </div>
      
      <div className="relative px-6 py-24 mx-auto max-w-7xl">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Next-Gen API Management
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful API Management
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline your API lifecycle with our comprehensive management platform. 
            Monitor, secure, and scale your APIs with enterprise-grade tools and real-time insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Code className="w-8 h-8 text-blue-500" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white">Smart Schema</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Auto-validate & optimize</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Shield className="w-8 h-8 text-green-500" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white">Enterprise Security</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Bank-grade protection</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Users className="w-8 h-8 text-purple-500" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white">Team Collaboration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Built for teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}