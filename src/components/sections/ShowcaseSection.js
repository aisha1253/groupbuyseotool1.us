import React from 'react';
import Link from 'next/link';

const cards = [
    {
        img: '/assets/img/showcase/gb-keyword-research.jpg',
        title: 'Keyword research',
        text: 'Find high-intent keywords with Semrush-class data depth.',
    },
    {
        img: '/assets/img/showcase/gb-backlink-intel.jpg',
        title: 'Backlink intel',
        text: 'Map authority like Ahrefs — competitors, gaps, and wins.',
    },
    {
        img: '/assets/img/showcase/gb-rank-tracking.jpg',
        title: 'Rank tracking',
        text: 'Watch visibility move across search and AI answers.',
    },
    {
        img: '/assets/img/showcase/gb-content-workflows.jpg',
        title: 'Content workflows',
        text: 'Brief, write and optimize with the same premium stack.',
    },
];

const ShowcaseSection = () => {
    return (
        <section className="gb-section gb-showcase">
            <div className="container">
                <div className="gb-section__head">
                    <div className="gb-eyebrow">Toolkit in action</div>
                    <h2>See what you unlock with group buy access</h2>
                    <p>Real workflows powered by the same platforms marketers trust every day.</p>
                </div>

                <div className="gb-showcase__grid">
                    {cards.map((card) => (
                        <article key={card.title} className="gb-showcase__card">
                            <div className="gb-showcase__media">
                                <img src={card.img} alt={card.title} />
                            </div>
                            <div className="gb-showcase__body">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="gb-showcase__cta">
                    <Link href="/tools" className="gb-btn gb-btn-blue">
                        Browse all tools
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
