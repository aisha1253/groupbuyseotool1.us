import React from 'react';

const cards = [
    {
        img: '/assets/img/showcase/gb-keyword-research.jpg',
        title: 'Keyword Research',
        text: "Discover relevant keywords, explore search demand, and evaluate ranking competition. Use research insights to plan website pages and content that match your audience's needs.",
        w: 800,
        h: 600,
    },
    {
        img: '/assets/img/showcase/gb-backlink-intel.jpg',
        title: 'Backlink Intelligence',
        text: 'Examine referring domains, study competitor backlink profiles, and identify potential link-building opportunities to investigate further.',
        w: 800,
        h: 600,
    },
    {
        img: '/assets/img/showcase/gb-rank-tracking.jpg',
        title: 'Ranking Insights',
        text: 'Review keyword positions, compare search visibility, and track changes using the capabilities available in your selected SEO tools.',
        w: 800,
        h: 600,
    },
    {
        img: '/assets/img/showcase/gb-content-workflows.jpg',
        title: 'Content Workflows',
        text: 'Research topics, evaluate competing pages, and organize content ideas. Build a more structured approach to blog posts, landing pages, and website optimization.',
        w: 800,
        h: 600,
    },
];

const ToolkitHome = () => {
    return (
        <section id="toolkit" className="gb-section gb-showcase gb-section--tint">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Your Essential SEO Toolkit in One Place</h2>
                    <p>
                        From keyword discovery to competitor analysis, groupbuyseotool brings together shared access options for tools that support practical research, optimization, and website growth strategies.
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
