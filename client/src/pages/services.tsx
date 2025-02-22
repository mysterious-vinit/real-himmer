import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  BarChart2, 
  Users, 
  Video,
  LineChart,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Campaign Strategy",
    description: "Data-driven campaign planning tailored to your brand objectives",
    icon: BarChart2,
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd"
  },
  {
    title: "Influencer Matchmaking",
    description: "Connect with authentic creators who align with your brand values",
    icon: Users,
    image: "https://images.unsplash.com/photo-1649105703438-0992d6844823"
  },
  {
    title: "Content Creation",
    description: "High-quality, engaging content that resonates with your audience",
    icon: Video,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive performance tracking and ROI analysis",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968"
  }
];

const process = [
  "Initial Consultation",
  "Strategy Development",
  "Influencer Selection",
  "Campaign Planning",
  "Content Creation",
  "Campaign Launch",
  "Performance Monitoring",
  "Results Analysis"
];

export default function Services() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive influencer marketing solutions to help your brand grow
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.title}>
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <service.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
          <Link href="/contact">
            <Button size="lg">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
