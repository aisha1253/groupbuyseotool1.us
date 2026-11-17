import React from 'react';

const cards = [
    {
        img: '/assets/img/showcase/gb-keyword-research.jpg',
        title: 'Keyword Research',
        text: 'Find search terms your audience actually uses, check their difficulty and build a content plan around real demand.',
        w: 800,
        h: 600,
    },
    {
        img: '/assets/img/showcase/gb-backlink-intel.jpg',
        title: 'Backlink Intel',
        text: 'See who links to you and your competitors, then spot the link opportunities worth chasing.',
        w: 800,
        h: 600,
    },
    {
        img: '/assets/img/showcase/gb-rank-tracking.jpg',
        title: 'Rank Tracking',
        text: 'Monitor your positions over time so you know exactly which pages are moving and which need attention.',
        w: 800,
        h: 600,
    },
    {
        img: '/assets/img/showcase/gb-content-workflows.jpg',
        title: 'Content Workflows',
        text: 'Plan, optimize and refine your content with data to back every headline, heading and topic choice.',
        w: 800,
        h: 600,
    },
];

const ToolkitHome = () => {
    return (
        <section id="toolkit" className="gb-section gb-showcase">
            <div className="container">
                <div className="gb-section__head">
                    <h2>The Toolkit Behind Your Next Ranking Win</h2>
                    <p>
                        From Ahrefs group buy and Semrush group buy access to other tools in your plan, groupbuyseotool brings the essentials together so you can work faster.
                    </p>
                </div>
                <div className="gb-showcase__grid">
                    {cards.map((card) => (
                        <article key={card.title} className="gb-showcase__card">
                            <div className="gb-showcase__media">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    width={card.w}
                                    height={card.h}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="gb-showcase__body">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolkitHome;
