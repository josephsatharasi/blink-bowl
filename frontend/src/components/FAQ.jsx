import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What products are available on SchoolMart?',
      answer: 'We offer a comprehensive range of educational products including notebooks, textbooks, reference books, study materials for competitive exams, stationery items, art supplies, school bags, backpacks, lunch boxes, water bottles, and various other educational accessories. Our catalog is organized by class levels (elementary to high school) and academic streams to help you find exactly what you need.',
    },
    {
      question: 'Can I filter products by class or stream?',
      answer: 'Absolutely! Our platform is intelligently organized by class levels (1st to 12th grade) and academic streams (Science, Commerce, Arts). You can easily navigate through categories, apply filters, and use our search functionality to find products specific to your educational requirements. This makes shopping quick and efficient.',
    },
    {
      question: 'Are study materials downloadable?',
      answer: 'Currently, we focus on physical products that are delivered to your doorstep. However, we are working on introducing digital downloadable study materials, e-books, and online resources in the near future. Stay tuned to our website and subscribe to our newsletter for updates on new features and product launches.',
    },
    {
      question: 'Is this platform suitable for all students?',
      answer: 'Yes! SchoolMart caters to students of all levels - from elementary school children to high school students, as well as those preparing for competitive exams like JEE, NEET, and other entrance tests. We also serve parents looking for quality educational materials and institutions requiring bulk orders.',
    },
    {
      question: 'How do I contact support?',
      answer: 'We offer multiple ways to reach our dedicated support team. You can contact us through our Contact page form, email us at info@schoolmart.com or support@schoolmart.com, call us at +1 234 567 8900, or use our live chat feature available on the website. Our support team is available Monday to Friday, 9 AM to 6 PM, and Saturday 10 AM to 4 PM.',
    },
    {
      question: 'What are your delivery and return policies?',
      answer: 'We offer fast delivery within 2-3 business days for most locations. Shipping is free on orders above $50. We have a hassle-free 7-day return policy - if you\'re not satisfied with your purchase, you can return it within 7 days of delivery for a full refund or exchange. Products must be in original condition with tags intact.',
    },
    {
      question: 'Do you offer discounts for students?',
      answer: 'Yes! We regularly offer student discounts, seasonal sales, and special promotions. Students can get up to 50% off on selected items. We also have a loyalty program where you earn points on every purchase that can be redeemed for discounts on future orders. Sign up for our newsletter to stay updated on the latest deals and offers.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <FaQuestionCircle className="text-white text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about SchoolMart
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 group"
              >
                <span className="font-semibold text-lg text-gray-800 pr-8 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition-all duration-300 ${
                  openIndex === index ? 'bg-blue-600' : ''
                }`}>
                  {openIndex === index ? (
                    <HiChevronUp className={`text-xl ${
                      openIndex === index ? 'text-white' : 'text-blue-600'
                    } group-hover:text-white transition-colors`} />
                  ) : (
                    <HiChevronDown className="text-xl text-blue-600 group-hover:text-white transition-colors" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
          <p className="text-lg text-gray-700 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
