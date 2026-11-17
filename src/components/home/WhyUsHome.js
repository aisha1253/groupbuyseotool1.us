import React from 'react';

const points = [
    {
        title: 'Dependable Uptime',
        text: 'We keep our tools available so you are not stuck waiting when a deadline is close.',
    },
    {
        title: 'Responsive Support',
        text: 'If something does not work as expected, our team is here to help you get back on track.',
    },
    {
        title: 'Fair, Affordable Pricing',
        text: 'Our plans are priced for freelancers and agencies, so you can access more tools without stretching your budget.',
    },
    {
        title: 'Instant Access',
        text: 'Once your order is complete, you can get set up quickly and start using your tools without delays.',
    },
    {
        title: 'Secure Experience',
        text: 'Your account details and payments are handled with care, so you can focus on your work with confidence.',
    },
];

const WhyUsHome = () => {
    return (
        <section id="why-us" className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Why SEO Professionals Choose Us</h2>
                    <p>Here is what you can expect when you use groupbuyseotool for your daily SEO work.</p>
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
