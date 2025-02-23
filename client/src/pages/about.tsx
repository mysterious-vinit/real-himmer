import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  const team = [
    {
      name: "Vinit Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      name: "Saheel Akbar",
      role: "Strategy Director",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    },
    {
      name: "Siddharth Karnwal",
      role: "Analytics Lead",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    },
    {
      name: "Gaurav Tyagi",
      role: "Video and Design",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      name: "Kunal Singh",
      role: "Editor Trainee",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Atul Tripathi",
      role: "Execution and Communication",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
  ];

  return (
    <div className="py-16">
      <div className="container">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground">
            To revolutionize brand marketing through data-driven influencer partnerships that create authentic connections and measurable results.
          </p>
        </motion.div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We envision a future where brands and influencers collaborate seamlessly to create meaningful content that resonates with audiences and drives real business growth.
            </p>
            <p className="text-lg text-muted-foreground">
              Through innovative technology and strategic partnerships, we're building a more transparent and effective influencer marketing ecosystem.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
