import React from 'react';

const cards = [
    {
        title: 'Keyword and SERP Research',
        text: 'Find search terms, check difficulty and see who already ranks for them before you create a single page.',
        icon: 'fa-solid fa-magnifying-glass',
    },
    {
        title: 'Backlink Analysis',
        text: 'Review your link profile, study competitor links and find new opportunities worth reaching out for.',
        icon: 'fa-solid fa-link',
    },
    {
        title: 'Site Audits',
        text: 'Spot technical issues, broken pages and on page problems that may be holding your rankings back.',
        icon: 'fa-solid fa-stethoscope',
    },
    {
        title: 'Rank Tracking',
        text: 'Follow keyword positions over time and see which pages are gaining ground or slipping.',
        icon: 'fa-solid fa-arrow-up-right-dots',
    },
    {
        title: 'Competitor Research',
        text: 'See what your competitors rank for, where their traffic comes from and what content is working for them.',
        icon: 'fa-solid fa-users',
    },
    {
        title: 'Content Optimization',
        text: 'Shape your articles and landing pages with data so every heading and topic has a reason to be there.',
        icon: 'fa-solid fa-pen-to-square',
    },
];

const ToolsHome = () => {
    return (
        <section id="tools" className="gb-section gb-section--tint">
            <div className="container">
                <div className="gb-section__head">
                    <h2>SEO Tools You Can Work With</h2>
                    <p>
                        Our plans cover the main areas of day to day SEO work. From Ahrefs group buy and Semrush group buy access to other popular platforms, you get tools for research, analysis and tracking in one place.
                    </p>
                </div>
                <div className="gb-features gb-features--six">
                    {cards.map((card) => (
                        <article key={card.title} className="gb-feature">
                            <div className="gb-feature__icon" aria-hidden="true">
                                <i className={card.icon} />
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </article>
                    ))}
                </div>
                <p className="gb-note">
                    Tool availability can differ by plan. Please check the plan details before you order.
                </p>
            </div>
        </section>
    );
};

export default ToolsHome;
