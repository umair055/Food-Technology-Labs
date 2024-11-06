'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pizza, Salad, Clock, Truck, CalendarCheck } from 'lucide-react'


const faqs = [
  {
    question: "What cuisines do you offer?",
    answer: "We offer a wide variety of cuisines including Italian, Japanese, Mexican, Indian, and American. Our diverse menu caters to all taste preferences.",
    icon: <Pizza className="w-6 h-6 text-orange-500" />
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes, we offer vegetarian, vegan, gluten-free, and dairy-free options. Please inform our staff about any allergies or dietary requirements when ordering.",
    icon: <Salad className="w-6 h-6 text-green-500" />
  },
  {
    question: "What are your opening hours?",
    answer: "We are open Monday to Friday from 11 AM to 10 PM, and on weekends from 10 AM to 11 PM. Last orders are taken 30 minutes before closing time.",
    icon: <Clock className="w-6 h-6 text-blue-500" />
  },
  {
    question: "Do you offer delivery services?",
    answer: "Yes, we offer delivery within a 5-mile radius. You can order through our website or popular food delivery apps. Minimum order and delivery fees may apply.",
    icon: <Truck className="w-6 h-6 text-red-500" />
  },
  {
    question: "Can I make a reservation?",
    answer: "You can make a reservation through our website, by phone, or using popular restaurant booking apps. We recommend booking in advance for weekends and special occasions.",
    icon: <CalendarCheck className="w-6 h-6 text-purple-500" />
  }
]

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(null)

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
                staggerChildren: 0.2
              }
            }
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
                  show: { opacity: 1, y: 0 }
                }}
              >
                <div className="faq-item">
                  <div
                    onClick={() => setExpandedIndex(expandedIndex === `item-${index}` ? null : `item-${index}`)}
                    className="faq-header"
                  >
                    <div className="flex items-center space-x-3">
                      {faq.icon}
                      <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedIndex === `item-${index}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="faq-content">
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="faq-answer"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
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
  )
}
