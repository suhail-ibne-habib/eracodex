"use client";
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "Tell me about your agency?",
    answer: "Eracodex is a premium design and development agency focused on creating high-converting, aesthetically stunning digital experiences. We partner with creators and brands to elevate their visual identity."
  },
  {
    question: "What if I don't get the results?",
    answer: "We stand by the quality of our work. If you're not seeing the expected improvements in engagement or conversion, we'll review the data together and iterate on our designs until we hit your goals."
  },
  {
    question: "Tell me about your content plan?",
    answer: "Our content plans are tailored to your specific audience and platform. We analyze your niche, competitor landscape, and brand voice to develop a consistent, high-impact content schedule."
  },
  {
    question: "Why wouldn't I hire a freelancer?",
    answer: "While freelancers are great for single tasks, an agency provides a dedicated team of specialists (designers, developers, strategists) ensuring cohesive branding, faster turnaround times, and reliable long-term support."
  },
  {
    question: "Do you provide ongoing automation support?",
    answer: "Yes, we don't just set it and forget it. We provide ongoing maintenance and optimization for all n8n and custom API workflows to ensure your systems scale with your business."
  },
  {
    question: "Can you migrate our existing data to GHL?",
    answer: "Absolutely. We specialize in seamless CRM migrations, ensuring all your lead data, pipelines, and automation sequences are transferred correctly without any downtime."
  },
  {
    question: "What services will you provide?",
    answer: "We offer end-to-end digital services including custom UI/UX design, full-stack web development, workflow automation (n8n/GHL), brand identity creation, social media strategy, and high-end digital assets."
  },
  {
    question: "Tell me about your workflow?",
    answer: "Our workflow is transparent and collaborative. It starts with a deep-dive discovery call, followed by system architecture planning, high-fidelity prototyping, and finally, robust development and automation setup."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>ANY QUERIES YOU HAVE</span>
          <h2 className={styles.title}>
            <span className={styles.mutedText}>Questions You May </span>
            <span className={styles.highlightText}>Ask</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.accordionHeader}>
                  <h3 className={styles.question}>{faq.question}</h3>
                  <div className={styles.iconWrapper}>
                    <svg 
                      className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div 
                  className={styles.accordionBody}
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                >
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
