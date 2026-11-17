import React from 'react';

const cards = [
    {
        title: 'Affordable SEO Tool Access',
        text: 'Get access to useful tools through budget friendly shared plans. If you are searching for cheap seo tools, our service offers an alternative to purchasing multiple full price subscriptions.',
        icon: 'fa-solid fa-tags',
    },
    {
        title: 'Multiple SEO Tools in One Place',
        text: 'Explore tools for keyword research, backlink analysis, competitor insights, content optimization, and more. Looking for ahrefs group buy or semrush group buy access? Browse our current catalog to check available tools, features, and plan details.',
        icon: 'fa-solid fa-toolbox',
    },
    {
        title: 'Simple Setup and Access',
        text: 'Choose a plan, complete your order, and follow the provided access instructions. Activation requirements and access times may vary depending on the selected tools.',
        icon: 'fa-solid fa-bolt',
    },
    {
        title: 'Helpful Customer Support',
        text: 'Need assistance understanding a plan or accessing a tool? Our support team can help with common access questions, setup guidance, and troubleshooting.',
        icon: 'fa-solid fa-headset',
    },
    {
        title: 'Plans That Fit Your Needs',
        text: 'Find a plan that matches your workflow and budget. Whether you need a few research tools or a broader selection, compare available options before making your decision.',
        icon: 'fa-solid fa-sliders',
    },
    {
        title: 'Built for Real SEO Work',
        text: 'Use accessible research tools to investigate keywords, review competitors, plan content, and improve your SEO process. Our service is designed around the everyday needs of independent professionals and growing businesses.',
        icon: 'fa-solid fa-briefcase',
    },
];

const AboutOffer = () => {
    return (
        <section id="what-we-offer" className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Everything You Need to Work Smarter with SEO</h2>
                    <p>
                        From keyword discovery to competitor research, our shared access plans help you explore practical SEO tools without stretching your budget.
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
            </div>
        </section>
    );
};

export default AboutOffer;
