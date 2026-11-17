import React from 'react';

const points = [
    {
        title: 'Access Reliability Matters',
        text: 'We aim to provide consistent access to the tools included in our plans. Because access is shared, certain tools may occasionally experience provider restrictions, usage limits, or temporary interruptions.',
    },
    {
        title: 'Support When You Need Guidance',
        text: 'Getting started with unfamiliar tools can be confusing. Our support service helps customers understand access instructions and resolve common issues.',
    },
    {
        title: 'Pricing That Makes Sense',
        text: 'Compare available plans and included tools before ordering. Our shared access approach is intended to make SEO software more approachable for budget conscious users.',
    },
    {
        title: 'A Straightforward Getting Started Process',
        text: 'No complicated purchasing journey. Select a suitable plan, complete your order, and follow the instructions to begin using your included tools once access is available.',
    },
    {
        title: 'A Clear and Responsible Access Experience',
        text: 'We believe customers should understand what they are purchasing. Review tool availability, shared access conditions, feature limitations, and plan information before subscribing, and avoid entering sensitive information into shared tools.',
    },
];

const AboutWhyUs = () => {
    return (
        <section id="why-choose-us" className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <h2>A Practical Choice for Your SEO Workflow</h2>
                    <p>
                        At groupbuyseotool, we focus on what matters most to customers: affordable pricing, straightforward access, useful tools, and reliable assistance when questions arise.
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

export default AboutWhyUs;
