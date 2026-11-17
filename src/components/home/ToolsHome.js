import React from 'react';

const cards = [
    {
        title: 'Keyword and SERP Research',
        text: 'Discover relevant search terms, evaluate keyword difficulty, and examine search results. Build content strategies around topics your audience is searching for.',
        icon: 'fa-solid fa-magnifying-glass',
    },
    {
        title: 'Backlink Analysis',
        text: 'Explore backlink profiles, review referring domains, and examine competitor link sources. Identify potential outreach opportunities and understand how websites build authority.',
        icon: 'fa-solid fa-link',
    },
    {
        title: 'Technical Site Audits',
        text: 'Find technical SEO issues, examine site health, and identify optimization opportunities. Use available audit tools to investigate broken links, crawl problems, and on-page SEO factors.',
        icon: 'fa-solid fa-stethoscope',
    },
    {
        title: 'Keyword Rank Tracking',
        text: 'Monitor search visibility, examine keyword positions, and compare performance over time using the tracking capabilities available in your selected plan.',
        icon: 'fa-solid fa-arrow-up-right-dots',
    },
    {
        title: 'Competitor SEO Research',
        text: 'Explore competing websites, research their ranking keywords, and discover content opportunities. Use competitor insights to make more informed SEO decisions.',
        icon: 'fa-solid fa-users',
    },
    {
        title: 'Content Optimization',
        text: 'Research relevant topics, organize keyword ideas, and improve content structure. Create pages that better address search intent and provide useful information to readers.',
        icon: 'fa-solid fa-pen-to-square',
    },
];

const ToolsHome = () => {
    return (
        <section id="tools" className="gb-section gb-section--tint">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Essential SEO Tools for Research, Analysis, and Growth</h2>
                    <p>
                        From ahrefs group buy and semrush group buy options to keyword, content, and competitor research platforms, explore tools that can support different stages of your SEO workflow.
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
                    Tool availability, usage limits, and supported features vary by plan. Review the included tools and access conditions before ordering.
                </p>
            </div>
        </section>
    );
};

export default ToolsHome;
