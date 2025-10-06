import { Activity, Camera, ChartBar, ShoppingBag, Users, Bell, Shield, TrendingUp } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Point of Sale",
      description: "Fast and intuitive sales recording with real-time inventory tracking",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: ChartBar,
      title: "Analytics Dashboard",
      description: "Daily and monthly reports with visual charts and insights",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Instant sales alerts to manager's device via push notifications",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Camera,
      title: "CCTV Integration",
      description: "Live customer monitoring through connected IP cameras",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Users,
      title: "Role-based Access",
      description: "Secure authentication for managers and attendants",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Shield,
      title: "Secure Backend",
      description: "Cloud-powered database with automatic backups",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <header className="border-b bg-card/80 backdrop-blur-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Smart Chemist
              </h1>
            </div>
            <Badge variant="secondary" className="text-sm">
              Management System
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            <span>Full-Stack Pharmacy Solution</span>
          </div>
          <h2 className="text-6xl font-bold tracking-tight">
            Modern Pharmacy
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Management Platform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete point-of-sale system with real-time notifications, analytics dashboards, 
            and CCTV monitoring - all in one secure platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 text-center border-2 border-primary/20">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Pharmacy?</h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            This system is being built in phases. Starting with the core POS system, 
            authentication, and progressing to analytics and CCTV integration.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline" className="text-sm px-4 py-2">React + TypeScript</Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">Lovable Cloud Backend</Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">Real-time Updates</Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">Secure Authentication</Badge>
          </div>
        </div>
      </main>

      <footer className="border-t mt-20 bg-card/50">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Powered by Lovable Cloud • Secure & Scalable</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
