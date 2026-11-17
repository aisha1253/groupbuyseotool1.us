import React from 'react';

const steps = [
    {
        title: 'Choose Your Plan',
        text: 'Compare Lite, Small, and Mega to find a plan that matches your preferred tools, available budget, and SEO requirements.',
    },
    {
        title: 'Complete Your Order',
        text: 'Select your subscription, review the order details, and complete the checkout process.',
    },
    {
        title: 'Receive Access Instructions',
        text: 'After your order is confirmed and access is ready, follow the provided instructions to open your included tools.',
    },
    {
        title: 'Start Your SEO Work',
        text: 'Use your available tools for keyword research, competitor analysis, backlink checks, content planning, and other supported tasks.',
    },
];

const HowItWorksHome = () => {
    return (
        <section id="how-it-works" className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Get Started with SEO Tools in Four Simple Steps</h2>
                    <p>
                        Our ordering process is designed to help you compare plans, understand your access options, and begin working with the tools included in your subscription.
                    </p>
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

export default HowItWorksHome;
