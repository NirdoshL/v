"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "What materials do you use in your clothing?",
    answer:
      "We use a variety of high-quality, sustainable materials in our clothing. This includes organic cotton, recycled polyester, Tencel, and bamboo fabrics. All our materials are carefully selected for their durability, comfort, and minimal environmental impact.",
  },
  {
    question: "How do I care for my garments?",
    answer:
      "Care instructions vary depending on the specific garment and material. Generally, we recommend washing in cold water, avoiding bleach, and hanging to dry when possible. Always check the care label on each item for specific instructions.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on the destination. You can view shipping options and costs at checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unworn items in their original condition with tags attached. Returns are free for domestic orders. For international orders, customers are responsible for return shipping costs.",
  },
  {
    question: "Are your clothes true to size?",
    answer:
      "We strive to provide accurate sizing, but fit can vary depending on the style and material. We recommend checking our size guide for each item before purchasing. If you're between sizes, we generally recommend sizing up for a more comfortable fit.",
  },
  {
    question: "Do you have a physical store?",
    answer:
      "Yes, we have a flagship store located in the heart of the city. You can find our address and opening hours on our Contact page. We also have pop-up shops occasionally - follow our social media for announcements!",
  },
  {
    question: "How sustainable are your manufacturing processes?",
    answer:
      "Sustainability is at the core of our business. We use eco-friendly dyes, minimize water usage, and ensure fair labor practices throughout our supply chain. We're constantly working to improve our processes and reduce our environmental footprint.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Yes, we offer gift wrapping services for a small additional fee. You can select this option at checkout. Our gift wrap is made from recycled materials and is itself recyclable.",
  },
];

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className=" mt-8">
          <Accordion
            type="multiple"
            value={openItems}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg overflow-hidden"
              >
                <AccordionTrigger
                  onClick={() => toggleAccordion(`item-${index}`)}
                  className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-50"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-gray-700 bg-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-500">
              No matching questions found. Please try a different search term.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-4">Still have questions?</p>
          <Link
            href={"/contact"}
            className="px-5 py-2 bg-[#ff4f00] text-secondary rounded-md "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
