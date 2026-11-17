import React from 'react';

const steps = [
    {
        title: 'Choose Your Plan',
        text: 'Explore our available plans, compare included SEO tools, and select an option that fits your needs.',
    },
    {
        title: 'Place Your Order',
        text: 'Complete the checkout process for your selected plan and review your order details.',
    },
    {
        title: 'Get Your Access',
        text: 'Once your order is confirmed and access is ready, follow the provided instructions to use your included tools.',
    },
    {
        title: 'Start Your SEO Work',
        text: 'Begin researching keywords, exploring competitor data, planning content, and working on your SEO projects within the available tool features and limits.',
    },
];

const AboutHowWeWork = () => {
    return (
        <section id="how-we-work" className="gb-section gb-section--tint">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Get Started in Four Simple Steps</h2>
                </div>
                <div className="gb-steps">
                    {steps.map((step) => (
                        <article key={step.title} className="gb-step">
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutHowWeWork;
