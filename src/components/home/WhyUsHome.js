import React from 'react';

const points = [
    {
        title: 'Consistent Access Focus',
        text: 'We work to keep included tools accessible and assist customers when problems occur. Since tools use shared access, occasional interruptions, provider restrictions, and usage limits may apply.',
    },
    {
        title: 'Helpful Customer Support',
        text: 'Get assistance with common access problems, setup instructions, and plan-related questions through our available support channels.',
    },
    {
        title: 'Affordable Monthly Pricing',
        text: 'Our shared access plans offer a budget-friendly alternative to maintaining multiple individual SEO software subscriptions.',
    },
    {
        title: 'Straightforward Setup',
        text: 'Choose your plan, complete your purchase, and follow the access instructions once your subscription is ready to use.',
    },
    {
        title: 'Clear Access Conditions',
        text: 'Understand the tools, features, and shared usage conditions included in your plan. We encourage customers to review access limitations and avoid storing sensitive project information in shared accounts.',
    },
];

const WhyUsHome = () => {
    return (
        <section id="why-us" className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Why Choose Our Group Buy SEO Tools?</h2>
                    <p>
                        At groupbuyseotool, our focus is on making SEO software more affordable, accessible, and practical for people managing websites and digital marketing projects.
                    </p>
                </div>
                <div className="gb-why-grid">
                    {points.map((point, i) => (
                        <article key={point.title} className="gb-why">
                            <span className="gb-why__index">0{i + 1}</span>
                            <h3>{point.title}</h3>
                            <p>{point.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsHome;
