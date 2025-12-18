import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calculator,
  BookOpen,
  Apple,
  Sparkles,
  Heart,
  HelpCircle,
  ArrowRight,
  Flower2,
  Shield,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Period Calculator",
    description: "Track your cycle, predict your next period, and understand your fertile window.",
    path: "/calculator",
    color: "bg-period/10 text-period",
  },
  {
    icon: BookOpen,
    title: "Learn About Menstruation",
    description: "Understand what menstruation is, why it happens, and what's normal.",
    path: "/education",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Apple,
    title: "Food & Nutrition",
    description: "Discover foods that help before, during, and after your period.",
    path: "/nutrition",
    color: "bg-fertile/10 text-fertile",
  },
  {
    icon: Sparkles,
    title: "Hygiene Tips",
    description: "Learn about menstrual products, hygiene practices, and self-care.",
    path: "/hygiene",
    color: "bg-ovulation/10 text-ovulation",
  },
  {
    icon: Heart,
    title: "Mental Wellness",
    description: "Tips for managing mood changes, stress, and embracing body positivity.",
    path: "/wellness",
    color: "bg-safe/10 text-safe",
  },
  {
    icon: HelpCircle,
    title: "FAQ & Myths",
    description: "Get answers to common questions and bust period myths.",
    path: "/faq",
    color: "bg-accent text-accent-foreground",
  },
];

const stats = [
  { icon: Users, value: "50%", label: "of world population menstruates" },
  { icon: Flower2, value: "450+", label: "periods in a lifetime" },
  { icon: Shield, value: "100%", label: "natural & healthy process" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
              <Flower2 className="w-4 h-4" />
              <span>Your Trusted Menstrual Health Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-slide-up">
              Understanding Your Body,{" "}
              <span className="text-gradient">Embracing Your Cycle</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Empowering you with knowledge about menstruation, nutrition, hygiene, and wellness. 
              Because every woman deserves to understand her body.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/calculator">
                  <Calculator className="w-5 h-5" />
                  Calculate My Period
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/education">
                  <BookOpen className="w-5 h-5" />
                  Start Learning
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive guides designed to help you understand and manage your menstrual health with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.path}>
                <Card className="h-full group hover:shadow-glow transition-all duration-300 border-border/50 bg-card hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Track Your Cycle?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Use our free period calculator to predict your next period, fertile window, and ovulation day.
          </p>
          <Button asChild size="xl" className="bg-card text-primary hover:bg-card/90 shadow-lg">
            <Link to="/calculator">
              <Calculator className="w-5 h-5" />
              Start Now - It's Free
            </Link>
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            <strong>Medical Disclaimer:</strong> The information provided on this website is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
