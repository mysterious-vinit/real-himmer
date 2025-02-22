import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Himmer Media</h3>
            <p className="text-muted-foreground">
              Data-driven influencer marketing solutions for modern brands.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about">
                <span className="text-muted-foreground hover:text-foreground">About Us</span>
              </Link>
              <Link href="/services">
                <span className="text-muted-foreground hover:text-foreground">Services</span>
              </Link>
              <Link href="/contact">
                <span className="text-muted-foreground hover:text-foreground">Contact</span>
              </Link>
              <Link href="/faq">
                <span className="text-muted-foreground hover:text-foreground">FAQ</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <p>Email: vinit@himmermedia.com</p>
              <p>Phone: 9810119935</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Influencers</h4>
            <a 
              href="https://shorturl.at/QDrj6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              Apply for Collaborations
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Himmer Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
