import React, { useState } from 'react';

export const faqItems = [
    {
        q: 'What is groupbuyseotool?',
        a: 'It is a service that gives you shared access to premium SEO tools at a lower cost than buying each subscription yourself. You choose a plan, get your access details and start working.',
    },
    {
        q: 'What are group buy SEO tools?',
        a: 'Group buy means several users share the cost of a premium tool, so everyone pays less than they would for a private subscription. It is popular with freelancers and small agencies who need more than one tool.',
    },
    {
        q: 'Is the access shared with other users?',
        a: 'Yes. Access is shared, which is how we keep prices low. Fair use applies so every member gets a smooth experience.',
    },
    {
        q: 'Are you affiliated with Ahrefs, Semrush or Moz?',
        a: 'No. We are an independent service and not partnered with or endorsed by any tool provider. Their names are used only to describe the kind of tools available.',
    },
    {
        q: 'How quickly can I start after ordering?',
        a: 'Once your order is confirmed, you receive your access details and can begin working quickly.',
    },
    {
        q: 'Which tools are included in each plan?',
        a: 'Tool availability differs by plan. The current list is shown on the pricing section, so you can compare before you order.',
    },
    {
        q: 'What if a tool stops working?',
        a: 'Contact our support team and tell us which tool is affected. We will look into it and work to get you back up and running.',
    },
    {
        q: 'Can I upgrade my plan later?',
        a: 'Yes, you can move to a higher plan when your workload grows. Contact us and we will help you switch.',
    },
];

const FaqHome = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <section id="faq" className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="gb-faq">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        const panelId = `faq-panel-${index}`;
                        const buttonId = `faq-button-${index}`;
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

export default FaqHome;
