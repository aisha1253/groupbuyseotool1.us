import React from 'react';

const stats = [
    { value: '$10/mo', label: 'Plans Starting From', source: 'Affordable shared access' },
    { value: '3', label: 'Pricing Plans', source: 'Lite, Small, and Mega' },
    { value: 'Multiple', label: 'SEO Tool Options', source: 'Research and optimization tools' },
    { value: 'Support', label: 'Customer Assistance', source: 'Help with access and setup' },
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
                        <span className="gb-bigdata__badge">Better Research. Smarter Decisions.</span>
                        <h2 className="gb-bigdata__title">
                            Make SEO Decisions with Data, Not Guesswork
                        </h2>
                        <p className="gb-bigdata__text">
                            Effective SEO begins with understanding what people search for, how competitors perform, and where your website can improve. With access to relevant SEO research platforms, you can explore keyword opportunities, examine backlink profiles, investigate technical issues, and develop more informed optimization strategies.
                        </p>
                        <p className="gb-bigdata__text">
                            Use these insights to plan useful content, evaluate competing websites, and support your SEO recommendations with research rather than assumptions.
                        </p>
                        <a href="#tools" className="gb-bigdata__link">Explore Available SEO Tools</a>
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
