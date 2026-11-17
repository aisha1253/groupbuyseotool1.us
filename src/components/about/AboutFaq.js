import React, { useState } from 'react';

export const aboutFaqItems = [
    {
        q: 'What is groupbuyseotool?',
        a: 'Group Buy SEO Tools is an independent platform offering shared access to multiple SEO and digital marketing tools through affordable plans. It is designed for freelancers, marketers, agencies, and website owners who want to work with useful software while managing their subscription costs.',
    },
    {
        q: 'Are you affiliated with Ahrefs, Semrush or Moz?',
        a: 'No. We operate independently and are not affiliated with Ahrefs, Semrush, Moz, or other third party software providers. Our service provides shared access options, and the experience may differ from purchasing an individual subscription directly from a tool provider.',
    },
    {
        q: 'Who is this service for?',
        a: 'Our service is designed for SEO freelancers, digital marketing agencies, local SEO specialists, solopreneurs, website owners, and beginners. It is particularly useful for people exploring affordable ways to access research and optimization tools.',
    },
    {
        q: 'Is access shared?',
        a: 'Yes. Our service is based on a shared or group access model rather than providing each customer with a separate individual subscription to every tool. Available features, usage limits, and access methods depend on the selected tool and plan.',
    },
    {
        q: 'How fast can I start?',
        a: 'Access time depends on your order confirmation, selected plan, and the availability of included tools. Once your access is ready, follow the provided setup instructions. If you experience a delay or need assistance, contact our support team.',
    },
    {
        q: 'How do I get support?',
        a: 'You can contact our support team through the support or contact options available on our website. Share your order details and describe your question or access issue so the team can assist you more effectively.',
    },
];

const AboutFaq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <section id="about-faq" className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="gb-faq">
                    {aboutFaqItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        const panelId = `about-faq-panel-${index}`;
                        const buttonId = `about-faq-button-${index}`;
                        return (
                            <div key={item.q} className={`gb-faq__item${isOpen ? ' is-open' : ''}`}>
                                <h3 className="gb-faq__q">
                                    <button
                                        id={buttonId}
                                        type="button"
                                        className="gb-faq__button"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => toggle(index)}
                                    >
                                        <span>{item.q}</span>
                                        <span className="gb-faq__icon" aria-hidden="true">
                                            {isOpen ? '-' : '+'}
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    hidden={!isOpen}
                                    className="gb-faq__a"
                                >
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutFaq;
