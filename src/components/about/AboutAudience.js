import React from 'react';

const cards = [
    {
        title: 'Freelancers',
        text: 'Research keywords, analyze competitors, and support client projects without managing several expensive software subscriptions.',
    },
    {
        title: 'Digital Marketing Agencies',
        text: 'Explore cost conscious tool access options for keyword analysis, reporting preparation, content research, and everyday SEO workflows.',
    },
    {
        title: 'Local SEO Professionals',
        text: 'Find tools to research location based keywords, study local competitors, and identify opportunities to improve local search visibility.',
    },
    {
        title: 'Solopreneurs and Website Owners',
        text: "Work on your own website's SEO, explore content opportunities, and make more informed optimization decisions.",
    },
    {
        title: 'SEO Beginners',
        text: 'Start learning keyword research, competitor analysis, and other essential SEO skills with more approachable tool access options.',
    },
];

const AboutAudience = () => {
    return (
        <section id="who-we-serve" className="gb-section gb-section--tint">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Built for People Who Take SEO Seriously</h2>
                    <p>
                        Whether you work independently or manage multiple projects, our service helps you find tools that match your goals and budget.
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

export default AboutAudience;
