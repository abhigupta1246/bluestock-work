import React, { useState } from "react";

const faqs = [
  {
    question: "How to subscribe to  an IPO?",
    answer: (
      <ul className="list-disc pl-5 text-sm mt-2">
        <li>Step 1: Login to your respective service provider.</li>
        <li>Step 2: Click on the IPO button.</li>
        <li>Step 3: Select the IPO you want to bid and enter the relevant details.</li>
        <li>Step4: Your subscription will be completed once you make the payment or give permission.</li>
      </ul>
    ),
  },
  { question: "Should I buy an IPO first day?", answer: null },
  { question: "What are the upcoming IPO’s 2021 in India?", answer: null },
  { question: "How do you know if an IPO is good?", answer: null },
  { question: "How to check IPO start date?", answer: null },
  { question: "What is issue size?", answer: null },
  { question: "How many shares in a lot?", answer: null },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mt-40 mb-8 font-[Poppins] bg-gray-50 py-12">
      <div className="w-[344px] mx-auto">
        <h2 className="text-2xl font-semibold text-[#1E1E1E] mb-1 text-left">Frequently Asked Questions?</h2>
        <p className="text-gray-600 text-sm mb-8 text-left">Find answers to common questions that come in your mind related to IPO.</p>
      </div>
      <div className="flex flex-col">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[10px] shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] px-7 py-6 w-[344px] mx-auto min-h-[100px] flex flex-col justify-center items-center font-[Poppins] my-16"
            style={{ backgroundColor: '#fff' }}
          >
            <div
              className="w-full flex flex-row items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span className="flex-1 text-center font-semibold text-[15px]">
                {faq.question}
              </span>
              <span className="text-2xl text-gray-400 ml-2 select-none flex-shrink-0">
                {openIndex === idx ? '–' : '+'}
              </span>
            </div>
            {openIndex === idx && faq.answer && (
              <div className="mt-4 w-full flex justify-center items-center text-center font-semibold text-[15px]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 