import React from 'react';

const steps = [
    {
        title: 'Choose Your Plan',
        text: 'Compare Lite, Small and Mega, then pick the one that fits your workload and budget.',
    },
    {
        title: 'Complete Your Order',
        text: 'Check out in a few minutes and create your account.',
    },
    {
        title: 'Receive Your Access Details',
        text: 'You get your login information quickly, so there is no long waiting period.',
    },
    {
        title: 'Start Working',
        text: 'Open your tools and begin keyword research, audits and reporting right away.',
    },
];

const HowItWorksHome = () => {
    return (
        <section id="how-it-works" className="gb-section">
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

export default HowItWorksHome;
