import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone,
  ExternalLink 
} from "lucide-react";

export default function Contact() {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Get in touch to discuss how we can help grow your brand
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <a 
                href="mailto:vinit@himmermedia.com"
                className="text-lg text-muted-foreground hover:text-foreground"
              >
                vinit@himmermedia.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <a 
                href="tel:9810119935"
                className="text-lg text-muted-foreground hover:text-foreground"
              >
                9810119935
              </a>
            </CardContent>
          </Card>
        </div>

        {/* For Influencers Section */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">For Influencers</h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating with our partner brands? Apply through our influencer application form.
            </p>
            <a 
              href="https://shorturl.at/QDrj6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                Apply Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Office Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24"
            alt="Himmer Media Office"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
