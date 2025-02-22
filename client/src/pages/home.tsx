import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChartBar, Users, Trophy, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Data-Driven Influencer Marketing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with your audience through authentic partnerships and measurable results
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Influencer Marketing?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Authentic Reach</h3>
                <p className="text-muted-foreground">
                  Connect with engaged audiences through trusted voices in your niche
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <ChartBar className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Measurable Impact</h3>
                <p className="text-muted-foreground">
                  Track performance with detailed analytics and clear ROI metrics
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Trophy className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Brand Growth</h3>
                <p className="text-muted-foreground">
                  Build lasting relationships and expand your brand presence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e"
                alt="Marketing success"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We combine data analytics with creative strategy to deliver campaigns that resonate with your target audience and drive real results.
              </p>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
