import React, { useState } from 'react';

export const faqItems = [
    {
        q: 'What is groupbuyseotool?',
        a: 'Group Buy SEO Tools is an independent service that provides shared access to a selection of SEO and digital marketing platforms through affordable subscription plans. It is designed for freelancers, agencies, beginners, and website owners who want access to useful research software without purchasing every tool individually.',
    },
    {
        q: 'What are group buy SEO tools?',
        a: 'Group buy SEO tools are software access services that use a shared subscription model. Instead of purchasing a separate individual subscription for every platform, customers choose a shared access plan that includes selected tools, subject to available features and usage restrictions.',
    },
    {
        q: 'Is the access shared with other users?',
        a: 'Yes. Our service operates through a shared access model. This means accounts, available features, and usage allowances may differ from individual subscriptions purchased directly from software providers. Review your chosen plan\'s access conditions before ordering.',
    },
    {
        q: 'Are you affiliated with Ahrefs, Semrush, or Moz?',
        a: 'No. Group Buy SEO Tools is an independent service and is not affiliated with Ahrefs, Semrush, Moz, or other third-party software providers. All product names and trademarks belong to their respective owners.',
    },
    {
        q: 'How quickly can I start after ordering?',
        a: 'Access timing depends on order confirmation, the selected plan, and tool availability. Once your subscription is ready, you can follow the provided setup instructions. Contact support if you experience a delay or need help getting started.',
    },
    {
        q: 'Which SEO tools are included in each plan?',
        a: 'Tool selection depends on your subscription. Lite, Small, and Mega offer different combinations of SEO and marketing software. Visit the pricing section or individual plan details to review current inclusions, available features, and usage limits.',
    },
    {
        q: 'What happens if a tool stops working?',
        a: 'If an included tool becomes unavailable or does not work as expected, contact our support team with the relevant details. We can help investigate access issues and provide available troubleshooting guidance. Some interruptions may depend on third-party providers.',
    },
    {
        q: 'Can I upgrade my plan later?',
        a: 'You can review other available plans as your SEO requirements change. If you want to switch from your current subscription, contact support to confirm the available upgrade options and any applicable conditions.',
    },
];

const FaqHome = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <section id="faq" className="gb-section gb-section--tint">
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
