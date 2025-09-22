
import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Eye,
  EyeOff,
  AlertCircle,
  Code,
  Shield,
  BarChart3,
  Users,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Lock,
  Check,
} from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (username === "infinitiapi" && password === "Infi@123") {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: "infinitiapi",
          name: "John Doe",
          email: "john@company.com",
          role: "Administrator",
        }),
      );
      setLocation("/");
    } else {
      setError("Invalid username or password. Please try again.");
    }

    setIsLoading(false);
  };

  const features = [
    {
      icon: Code,
      title: "Schema Management",
      description: "Design, validate, and version your API schemas with ease",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      delay: "animation-delay-100"
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Secure your APIs with advanced authentication and authorization",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      delay: "animation-delay-200"
    },
    {
      icon: BarChart3,
      title: "Analytics & Monitoring",
      description: "Real-time insights and performance monitoring",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      delay: "animation-delay-300"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Manage users, roles, and permissions efficiently",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      delay: "animation-delay-400"
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime", color: "text-blue-600" },
    { value: "10k+", label: "APIs Managed", color: "text-emerald-600" },
    { value: "500+", label: "Organizations", color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-pink-400/50 rounded-full animate-pulse animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Landing content */}
        <div className="space-y-8 animate-fade-in-left">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6 group">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                <Globe className="w-7 h-7" />
              </div>
              <span className="ml-4 text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                APIsmartHUB
              </span>
            </div>
            
            <div className="relative">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Powerful API Management
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  Made Simple
                </span>
              </h1>
              <div className="absolute -top-4 -right-4 text-yellow-400 animate-bounce">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Streamline your API lifecycle with comprehensive management,
              documentation, monitoring, and analytics in one unified platform.
            </p>
          </div>

          {/* Feature highlights with animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-fade-in-up ${feature.delay} cursor-pointer`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Statistics with animations */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${800 + index * 200}ms`}}>
                <div className={`text-4xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="text-center pb-6 relative">
              <div className="absolute top-4 right-4">
                <Zap className="w-6 h-6 text-yellow-500 animate-pulse" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-2">
                Welcome Back
              </CardTitle>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Sign in to your APIsmartHUB account
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                {error && (
                  <Alert className="border-red-200 bg-red-50 animate-shake">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-700">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2 group">
                  <Label
                    htmlFor="username"
                    className="text-sm font-medium text-gray-700 group-focus-within:text-blue-600 transition-colors"
                  >
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="h-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/80"
                    required
                  />
                </div>

                <div className="space-y-2 group">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 group-focus-within:text-blue-600 transition-colors"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="h-12 pr-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/80"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-4 hover:bg-gray-100 rounded-r-md transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 group">
                      Sign In
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>

                <div className="text-center pt-4 space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
                    <Check className="w-4 h-4" />
                    Demo credentials available below
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 font-medium">Demo Access:</p>
                    <div className="flex justify-center gap-4">
                      <span className="font-mono text-sm bg-gray-100 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer">
                        infinitiapi
                      </span>
                      <span className="font-mono text-sm bg-gray-100 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer">
                        Infi@123
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
