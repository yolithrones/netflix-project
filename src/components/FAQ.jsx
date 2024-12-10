import React, { useState } from 'react';
import './style.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,200 to ₦3,900 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device. You can also watch on your TV through streaming devices like Chromecast, Roku, Apple TV, and more."
    },
    {
      question: "Is Netflix good for kids?",
      answer: "Yes, Netflix offers a wide variety of content suitable for kids of all ages, including children's shows, movies, and documentaries. You can create a separate profile for your child with parental controls to limit access to age-appropriate content."
    }
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
