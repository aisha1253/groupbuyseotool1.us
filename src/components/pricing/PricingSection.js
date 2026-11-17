import React from 'react';

const plans = [
    {
        name: 'Lite Plan',
        price: '10',
        desc: 'Essentials to start ranking and researching.',
        tools: ['SMRu$H', 'Canva', 'Grammarly', 'Woorank', 'Spin Rewriter'],
        popular: false,
        delay: '.3s',
    },
    {
        name: 'Small Plan',
        price: '15',
        desc: 'Best value for freelancers and small teams.',
        tools: ['SMRu$H', 'Moz Pro', 'Majestic', 'Ubersuggest', 'Spyfu'],
        popular: true,
        delay: '.5s',
    },
    {
        name: 'Mega Plan',
        price: '50',
        desc: 'Full stack access for agencies and power users.',
        tools: ['ARHFE$', 'SMRu$H', 'Moz Pro', 'Ubersuggest', 'Majestic'],
        popular: false,
        delay: '.7s',
    },
];

const PricingSection = () => {
    return (
        <section className="gb-section gb-pricing">
            <div className="container">
                <div className="gb-section__head">
                    <div className="gb-eyebrow">Pricing</div>
                    <h2>Choose your unfair advantage</h2>
                    <p>Access premium SEO tools at affordable prices — cancel anytime.</p>
                </div>

                <div className="gb-price-grid">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`gb-price${plan.popular ? ' gb-price--popular' : ''}`}
                        >
                            {plan.popular && <div className="gb-price__badge">Popular</div>}
                            <div className="gb-price__name">{plan.name}</div>
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
                                Buy now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
