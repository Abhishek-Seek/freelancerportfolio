"use client";

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React, { useState } from 'react';

const faqData = [
    {
        question: "1. What’s the benefit of hiring a freelance digital marketer?",
        answer: "You get direct access to the expert, faster execution, flexible pricing, and tailored strategies without agency bloat.",
    },
    {
        question: "2. How soon can I expect results?",
        answer: "SEO results typically take 2–4 months. Google Ads and social media ads can generate leads within days.",
    },
    {
        question: "3. Do you offer monthly packages?",
        answer: "Yes. I offer custom plans for SEO, PPC, social media, or bundled packages based on your goals",
    },
    {
        question: "4. Can you handle both design and marketing?",
        answer: "Absolutely. I offer web design, development, and full digital marketing execution in one place.",
    },
    {
        question: "5. Is reporting included?",
        answer: "Yes. You’ll receive detailed monthly reports for SEO, ads, and social media performance.",
    },
    {
        question: "6. Do you work with clients outside Bangalore?",
        answer: "Yes, I work remotely with clients across India and globally.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (


        <div className='px-2 lg:px-40 bg-white'>
            <h1 className='text-3xl lg:text-4xl text-center font-bold pt-10 lg:pb-16 text-black'>Frequently <span className='text-blue-400'>Asked Questions</span> (FAQs)</h1>
            <div className="grid grid-cols-1 py-10 gap-6">
                {faqData.map((faq, index) => (
                    <Card key={index}>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggle(index)}
                        >
                            <h1 className="text-xl font-semibold">{faq.question}</h1>
                            {openIndex === index ? (
                                <MinusOutlined className="text-2xl bg-blue-400 rounded-full !text-white" />
                            ) : (
                                <PlusOutlined className="text-2xl !text-blue-400 rounded-full" />
                            )}
                        </div>

                        {openIndex === index && (
                            <div className="mt-4 text-lg text-gray-600">{faq.answer}</div>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Faq;
