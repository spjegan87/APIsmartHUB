import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricsCards } from "@/components/dashboard/metrics-cards";
import { UsageChart } from "@/components/dashboard/usage-chart";
import { TopAPIs } from "@/components/dashboard/top-apis";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { HeroSection } from "@/components/landing/hero-section";
import { ApiDetailsPanel } from "@/components/landing/api-details-panel";
import { ApiFeaturesShowcase } from "@/components/landing/api-features-showcase";
import { Footer } from "@/components/landing/footer";
import { ApiTrafficOverview } from "@/components/dashboard/api-traffic-overview";
import { ActiveUsersMonitor } from "@/components/dashboard/active-users-monitor";
import { CredentialMonitoring } from "@/components/dashboard/credential-monitoring";
import { AccessControlInsights } from "@/components/dashboard/access-control-insights";
import { SchemaValidation } from "@/components/dashboard/schema-validation";
import { LogAnalysis } from "@/components/dashboard/log-analysis";
import { EnhancedBillingDashboard } from "@/components/dashboard/enhanced-billing-dashboard";

export default function Dashboard() {
  return (
    <div className="space-y-0">
      {/* Hero Landing Section */}
      <HeroSection />
      
      {/* Main Dashboard Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
          {/* Live API Details Panel */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Real-Time API Monitoring
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Monitor your APIs in real-time with comprehensive metrics and insights
              </p>
            </div>
            <ApiDetailsPanel />
          </div>

          {/* Features Showcase */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Powerful API Management Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to build, secure, and scale your APIs
              </p>
            </div>
            <ApiFeaturesShowcase />
          </div>

          {/* Key Metrics Overview */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Dashboard Analytics
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive insights into your API performance and usage
              </p>
            </div>
            <MetricsCards />
          </div>
          
          {/* Comprehensive Dashboard Tabs */}
          <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">API Traffic</TabsTrigger>
          <TabsTrigger value="users">Active Users</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="schema">Schema</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UsageChart />
            <TopAPIs />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivity />
            
            {/* AI Insights Panel */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  🧠
                </div>
                <h3 className="text-lg font-semibold text-gray-900 ml-3">AI Insights</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Performance Optimization</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Your authentication API shows 15% slower response times during peak hours. 
                    Consider implementing caching.
                  </p>
                  <button className="text-xs bg-primary text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Usage Pattern</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Detected unusual traffic spike on weekends. Consider auto-scaling configuration.
                  </p>
                  <button className="text-xs bg-primary text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="traffic" className="mt-6">
          <ApiTrafficOverview />
        </TabsContent>
        
        <TabsContent value="users" className="mt-6">
          <ActiveUsersMonitor />
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 gap-6">
            <CredentialMonitoring />
            <AccessControlInsights />
          </div>
        </TabsContent>
        
        <TabsContent value="schema" className="mt-6">
          <SchemaValidation />
        </TabsContent>
        
        <TabsContent value="logs" className="mt-6">
          <LogAnalysis />
        </TabsContent>
        
        <TabsContent value="billing" className="mt-6">
          <EnhancedBillingDashboard />
        </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
