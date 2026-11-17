import React from 'react';

const stats = [
    { value: '50+', label: 'Premium SEO tools', source: 'In one subscription' },
    { value: '99.9%', label: 'Platform uptime', source: 'Self-developed access' },
    { value: '50K+', label: 'Happy marketers', source: 'Worldwide members' },
    { value: '24/7', label: 'Live support', source: 'Chat · Skype · Ticket' },
];

const BigDataHome = () => {
    return (
        <section
            id="big-data"
            className="gb-bigdata"
            style={{ backgroundImage: 'url(/assets/img/backgrounds/gbseo-bigdata-bg.jpg)' }}
        >
            <div className="gb-bigdata__overlay" aria-hidden="true" />
            <div className="container gb-bigdata__inner">
                <div className="gb-bigdata__top">
                    <div>
                        <span className="gb-bigdata__badge">Big Data, Shared Access</span>
                        <h2 className="gb-bigdata__title">
                            Make Decisions with Real SEO Data, Not Guesswork
                        </h2>
                        <p className="gb-bigdata__text">
                            Good SEO starts with good information. With access to industry standard platforms, you can study search demand, competitor strategies and backlink profiles in detail. That means better proposals for clients, smarter content plans for your own sites and fewer decisions made on instinct alone.
                        </p>
                        <a href="#tools" className="gb-bigdata__link">Explore the Tools</a>
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

export default BigDataHome;
