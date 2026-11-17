import React from 'react';

const plans = [
    {
        name: 'Lite',
        price: '10',
        desc: 'Lite suits beginners and solo freelancers who want affordable access to core SEO tools without a big monthly commitment.',
        tools: ['SMRu$H', 'Canva', 'Grammarly', 'Woorank', 'Spin Rewriter'],
        popular: false,
    },
    {
        name: 'Small',
        price: '15',
        desc: 'Small fits growing freelancers and small teams who need more room to handle multiple projects and clients.',
        tools: ['SMRu$H', 'Moz Pro', 'Majestic', 'Ubersuggest', 'Spyfu'],
        popular: true,
    },
    {
        name: 'Mega',
        price: '50',
        desc: 'Mega is made for agencies and heavy users who want the broadest tool selection our plans offer in one place.',
        tools: ['ARHFE$', 'SMRu$H', 'Moz Pro', 'Ubersuggest', 'Majestic'],
        popular: false,
    },
];

const PricingHome = () => {
    return (
        <section id="pricing" className="gb-section gb-pricing">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Simple Plans for Every Stage of Your SEO Work</h2>
                    <p>Pick the plan that matches how you work today and move up when your workload grows.</p>
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
                                <li className="more">+ More tools</li>
                            </ul>
                            <a
                                href="https://members.seotoolsgroupbuy.us/signup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`gb-btn ${plan.popular ? 'gb-btn-primary' : 'gb-btn-blue'}`}
                            >
                                View Plans
                            </a>
                        </article>
                    ))}
                </div>
                <p className="gb-note">
                    Not sure which one to pick? Start with the plan closest to your current workload. You can always change later.
                </p>
            </div>
        </section>
    );
};

export default PricingHome;
