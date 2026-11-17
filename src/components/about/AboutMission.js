import React from 'react';

const points = [
    {
        title: 'Make SEO More Affordable',
        text: 'Help individuals and businesses explore premium SEO tools access without the cost of maintaining several separate subscriptions.',
        icon: 'fa-solid fa-coins',
    },
    {
        title: 'Simplify Tool Access',
        text: 'Bring useful research, optimization, and marketing tools into one convenient place with clear plan options.',
        icon: 'fa-solid fa-layer-group',
    },
    {
        title: 'Support Everyday SEO Work',
        text: 'Help customers spend less time searching for affordable software and more time improving websites, creating content, and understanding competitors.',
        icon: 'fa-solid fa-chart-line',
    },
];

const AboutMission = () => {
    return (
        <section id="mission" className="gb-section gb-section--tint">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Better Tools. Smarter Budgets. More Possibilities.</h2>
                    <p>
                        Our mission is simple: help more people access the SEO tools they need to research, compete, and grow online. We believe your ability to do meaningful SEO work should depend on your skills and effort, not just your software budget.
                    </p>
                </div>
                <div className="gb-features">
                    {points.map((point) => (
                        <article key={point.title} className="gb-feature">
                            <div className="gb-feature__icon" aria-hidden="true">
                                <i className={point.icon} />
                            </div>
                            <h3>{point.title}</h3>
                            <p>{point.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMission;
