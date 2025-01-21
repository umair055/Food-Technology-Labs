"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Pizza,
  Salad,
  Clock,
  Calculator,
  PenTool,
  Globe,
  ShieldCheck,
  Mail,
  TrendingUp,
  BookOpen,
  PawPrint,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What services does Food Technology Labs offer?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        We provide a range of services, including Food Safety & Quality
        Consulting, Meal Planning, Farm-to-Table Consulting, AI Solutions for
        Food Businesses, Recipe Development, Food Photography & Styling, Market
        Research, and more. Visit our{" "}
        <Link href="/services">Services Page</Link> for details.
      </motion.p>
    ),
    icon: <Pizza stroke="black" className="w-6 h-6 text-orange-500" />,
  },
  {
    question: "Do you provide customized solutions for businesses?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        Yes, we specialize in creating tailored solutions to meet the unique
        needs of each client. From dietary planning for special needs to
        AI-based solutions, we work closely with you to achieve your goals.
      </motion.p>
    ),
    icon: <Salad stroke="black" className="w-6 h-6 text-green-500" />,
  },
  {
    question: "What are your opening hours?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        We are open Monday to Friday from 11 AM to 10 PM, and on weekends from
        10 AM to 11 PM. Last orders are taken 30 minutes before closing time.
      </motion.p>
    ),
    icon: <Clock stroke="black" className="w-6 h-6 text-blue-500" />,
  },
  {
    question: "Are your calculators and tools free to use?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        Most of our food-related calculators and tools are available for free to
        support food enthusiasts and professionals. Premium tools may require a
        subscription.
      </motion.p>
    ),
    icon: <Calculator stroke="black" className="w-6 h-6 text-red-500" />,
  },
  {
    question: "Can I contribute content to your blog?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        Absolutely! We welcome guest writers with expertise in food, technology,
        and nutrition. Check out our{" "}
        <Link to="/write-for-us">Write for Us</Link> page for guidelines and
        submission details.
      </motion.p>
    ),
    icon: <PenTool stroke="black" className="w-6 h-6 text-purple-500" />,
  },
  {
    question: "Do you offer international consulting services?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        Yes, our consulting services, including food safety, quality management,
        and market research, are available globally. Contact us to discuss your
        requirements.
      </motion.p>
    ),
    icon: <Globe stroke="black" className="w-6 h-6 text-teal-500" />,
  },
  {
    question: "How do you ensure the quality of your services?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        Our team comprises industry experts with extensive experience. We follow
        the latest industry standards, conduct thorough testing, and provide
        data-driven recommendations to ensure top-quality outcomes.
      </motion.p>
    ),
    icon: <ShieldCheck stroke="black" className="w-6 h-6 text-purple-500" />,
  },
  {
    question: "How can I contact Food Technology Labs?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        You can reach us via email at foodtechnologylabs@gmail.com or fill out
        the contact form on our <Link to="/contact-us">Contact Us</Link> page.
      </motion.p>
    ),
    icon: <Mail stroke="black" className="w-6 h-6 text-blue-500" />,
  },
  {
    question: "Do you have solutions for pet food businesses?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        Yes, we offer consulting for pet food products, focusing on safety,
        nutrition, and market trends.
      </motion.p>
    ),
    icon: <PawPrint stroke="black" className="w-6 h-6 text-orange-500" />,
  },
  {
    question: "What kind of affiliate programs do you participate in?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        We partner with trusted brands and services through affiliate marketing
        programs to recommend relevant food products, tools, and technology.
      </motion.p>
    ),
    icon: <TrendingUp stroke="black" className="w-6 h-6 text-green-500" />,
  },
  {
    question: "How can I stay updated with the latest food trends?",
    answer: (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="faq-answer"
      >
        Follow our blog for regular updates, industry insights, and innovative
        trends in food technology and services.
      </motion.p>
    ),
    icon: <BookOpen stroke="black" className="w-6 h-6 text-purple-500" />,
  },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="faq-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          Hungry for Answers?
        </motion.h2>
        <motion.div
          className="faq-container"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <div className="faq-item">
                  <div
                    onClick={() => {
                      console.log(index);
                      setExpandedIndex(
                        expandedIndex === `item-${index}`
                          ? null
                          : `item-${index}`
                      );
                    }}
                    className="faq-header"
                  >
                    <div className="flex items-center space-x-3">
                      {faq.icon}
                      <span
                        style={{ color: "#000000" }}
                        className="text-lg font-medium"
                      >
                        {faq.question}
                      </span>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedIndex === `item-${index}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="faq-content">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
