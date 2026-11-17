import React from 'react';
import Link from 'next/link';

const stats = [
    { value: '50+', label: 'Premium SEO tools', source: 'In one subscription' },
    { value: '99.9%', label: 'Platform uptime', source: 'Self-developed access' },
    { value: '50K+', label: 'Happy marketers', source: 'Worldwide members' },
    { value: '24/7', label: 'Live support', source: 'Chat · Skype · Ticket' },
];

const BigDataSection = () => {
    return (
        <section
            className="gb-bigdata"
            style={{ backgroundImage: 'url(/assets/img/backgrounds/gbseo-bigdata-bg.jpg)' }}
        >
            <div className="gb-bigdata__overlay" aria-hidden="true" />
            <div className="container gb-bigdata__inner">
                <div className="gb-bigdata__top">
                    <div>
                        <span className="gb-bigdata__badge">GROUP BUY BIG DATA</span>
                        <h2 className="gb-bigdata__title">
                            Lead with tools that see further, faster, and deeper
                        </h2>
                        <p className="gb-bigdata__text">
                            With shared access to Ahrefs, Semrush, Moz and 50+ premium platforms, you get
                            enterprise-grade keyword, backlink and competitor data — without enterprise pricing.
                        </p>
                        <Link href="/tools" className="gb-bigdata__link">
                            Explore our tools →
                        </Link>
                    </div>
                </div>

                <div className="gb-bigdata__stats">
                    {stats.map((stat) => (
                        <div key={stat.label} className="gb-bigdata__stat">
                            <div className="gb-bigdata__value">{stat.value}</div>
                            <div className="gb-bigdata__label">{stat.label}</div>
                            <div className="gb-bigdata__source">{stat.source}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BigDataSection;
