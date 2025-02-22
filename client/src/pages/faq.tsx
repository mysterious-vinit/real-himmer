import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is influencer marketing?",
    answer: "Influencer marketing is a form of social media marketing where brands collaborate with content creators who have established credibility and audience engagement to promote products or services."
  },
  {
    question: "How do you select influencers for campaigns?",
    answer: "We use a data-driven approach to select influencers based on audience demographics, engagement rates, content quality, and brand alignment. We ensure authentic partnerships that resonate with your target audience."
  },
  {
    question: "What metrics do you track?",
    answer: "We track key performance indicators including engagement rates, reach, impressions, click-through rates, conversions, and ROI. Our comprehensive analytics help measure campaign success and optimize future strategies."
  },
  {
    question: "How long does a typical campaign last?",
    answer: "Campaign duration varies based on objectives, but typically ranges from 2-8 weeks. We work with you to determine the optimal timeline for achieving your marketing goals."
  },
  {
    question: "What platforms do you work with?",
    answer: "We work across all major social media platforms including Instagram, TikTok, YouTube, and LinkedIn. Platform selection is based on your target audience and campaign objectives."
  },
  {
    question: "How do I become an influencer partner?",
    answer: "Influencers can apply through our online application form. We review all applications and select partners based on content quality, engagement metrics, and audience authenticity."
  },
  {
    question: "What types of brands do you work with?",
    answer: "We work with brands across various industries including fashion, beauty, technology, lifestyle, and more. Our focus is on creating authentic partnerships that deliver value to both brands and audiences."
  },
  {
    question: "How do you measure campaign success?",
    answer: "We establish clear KPIs at the start of each campaign and provide detailed reports tracking performance against these metrics. Our analytics tools measure both quantitative and qualitative campaign outcomes."
  }
];

export default function FAQ() {
  return (
    <div className="py-16">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Everything you need to know about working with Himmer Media
        </p>

        <Accordion type="single" collapsible className="mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            We're here to help. Contact us for more information.
          </p>
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
