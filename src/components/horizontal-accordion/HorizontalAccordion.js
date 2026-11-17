import React from 'react';
import Link from 'next/link';

const items = [
    {
        title: 'Superb Uptime',
        text: 'Access any SEO tool through our self-developed program with 99.9% uptime — built for daily workflows.',
    },
    {
        title: 'Premium Support',
        text: '24/7 help via Skype, live chat and tickets. Most queries answered within a couple of hours.',
    },
    {
        title: 'Lowest Price',
        text: 'High-quality service at an amazing monthly rate. No hidden charges — just transparent group buying.',
    },
    {
        title: 'Instant Access',
        text: 'Get into the platform within seconds after payment. No waiting, no complicated setup.',
    },
    {
        title: 'Secure & Safe',
        text: 'No shady installs or VPS requirements. Original group-buy access that keeps your work safe.',
    },
];

const HorizontalAccordion = () => {
    return (
        <section className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <div className="gb-eyebrow">Platform edge</div>
                    <h2>Bigger scale. Bigger advantage.</h2>
                    <p>Everything that makes Group Buy SEO Tools the smarter way to run research, content and outreach.</p>
                    <div style={{ marginTop: 24 }}>
                        <Link
                            href="https://seotoolsgroupbuy.us/"
                            className="gb-btn gb-btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Explore now
                        </Link>
                    </div>
                </div>

                <div className="gb-why-grid">
                    {items.map((item, i) => (
                        <article key={item.title} className="gb-why">
                            <span className="gb-why__index">0{i + 1}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HorizontalAccordion;
