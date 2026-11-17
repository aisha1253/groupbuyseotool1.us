import React from 'react';

const cards = [
    {
        title: 'Freelancers',
        text: 'Pitch with real data, deliver better audits and keep your tool costs under control.',
    },
    {
        title: 'Agencies',
        text: 'Give your team access to the platforms they need for research and reporting without a large software bill for every seat.',
    },
    {
        title: 'Local SEO Professionals',
        text: "Research local keywords, check competitors in each service area and track rankings for your clients' businesses.",
    },
    {
        title: 'Solopreneurs and Site Owners',
        text: 'Plan content, find gaps and watch your own rankings without hiring an expert for every question.',
    },
    {
        title: 'SEO Beginners',
        text: 'Practice on the same kind of tools the professionals use and build real skills faster.',
    },
];

const AudienceHome = () => {
    return (
        <section id="audience" className="gb-section gb-section--tint">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Made for People Who Do SEO for a Living, or Want To</h2>
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
