import React from 'react';

const plans = [
    {
        name: 'Lite',
        price: '10',
        desc: 'An affordable starting point for SEO beginners, bloggers, and independent freelancers who need access to essential research, writing, and optimization tools.',
        tools: ['Semrush', 'Canva', 'Grammarly', 'WooRank', 'Spin Rewriter'],
        cta: 'View Lite Plan',
        popular: false,
    },
    {
        name: 'Small',
        price: '15',
        desc: 'A practical choice for freelancers and growing businesses managing multiple websites or client projects. Explore a wider selection of research, analysis, and optimization tools.',
        tools: ['Semrush', 'Moz Pro', 'Majestic', 'Ubersuggest', 'SpyFu'],
        cta: 'View Small Plan',
        popular: true,
    },
    {
        name: 'Mega',
        price: '50',
        desc: 'Designed for agencies, experienced SEO professionals, and users who need broader access to research and marketing tools across different projects.',
        tools: ['Ahrefs', 'Semrush', 'Moz Pro', 'Ubersuggest', 'Majestic'],
        cta: 'View Mega Plan',
        popular: false,
    },
];

const PricingHome = () => {
    return (
        <section id="pricing" className="gb-section gb-pricing">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Affordable SEO Tool Plans for Every Stage of Your Work</h2>
                    <p>
                        Choose a shared access plan based on your budget, the tools you need, and the type of SEO projects you manage.
                    </p>
                </div>
                <div className="gb-price-grid">
                    {plans.map((plan) => (
                        <article
                            key={plan.name}
                            className={`gb-price${plan.popular ? ' gb-price--popular' : ''}`}
                        >
                            {plan.popular && <div className="gb-price__badge">Popular</div>}
                            <h3 className="gb-price__name">{plan.name}</h3>
                            <div className="gb-price__amount">
                                <span className="cur">$</span>
                                <span className="num">{plan.price}</span>
                                <span className="per">/month</span>
                            </div>
                            <p className="gb-price__desc">{plan.desc}</p>
                            <ul className="gb-price__list">
                                {plan.tools.map((tool) => (
                                    <li key={tool}>{tool}</li>
                                ))}
                                <li className="more">More Available Tools</li>
                            </ul>
                            <a
                                href="https://members.seotoolsgroupbuy.us/signup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`gb-btn ${plan.popular ? 'gb-btn-primary' : 'gb-btn-blue'}`}
                            >
                                {plan.cta}
                            </a>
                        </article>
                    ))}
                </div>
                <p className="gb-note">
                    Not sure which plan fits your workflow? Compare the included tools, available features, and usage conditions, or contact our support team before choosing.
                </p>
            </div>
        </section>
    );
};

export default PricingHome;
