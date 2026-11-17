import React from 'react';

const cards = [
    {
        title: 'SEO Freelancers',
        text: 'Research keywords, examine competitors, and prepare data-informed recommendations for client projects while keeping your software costs manageable.',
    },
    {
        title: 'Digital Marketing Agencies',
        text: 'Explore multiple SEO platforms for competitor research, content planning, backlink analysis, and other recurring agency tasks.',
    },
    {
        title: 'Local SEO Professionals',
        text: 'Research location-specific keywords, examine local competitors, and discover opportunities to improve websites targeting particular cities or service areas.',
    },
    {
        title: 'Solopreneurs and Website Owners',
        text: 'Find keyword opportunities, plan useful content, and investigate website optimization issues without maintaining an expensive collection of separate subscriptions.',
    },
    {
        title: 'SEO Beginners',
        text: 'Learn how keyword research, competitor analysis, site auditing, and content optimization work by practicing with accessible SEO software.',
    },
];

const AudienceHome = () => {
    return (
        <section id="audience" className="gb-section gb-section--tint">
            <div className="container">
                <div className="gb-section__head">
                    <h2>SEO Tools for Freelancers, Agencies, and Growing Businesses</h2>
                    <p>
                        Whether you are learning SEO, managing client campaigns, or improving your own website, our plans are designed for different workflows and experience levels.
                    </p>
                </div>
                <div className="gb-features gb-features--five">
                    {cards.map((card) => (
                        <article key={card.title} className="gb-feature">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AudienceHome;
