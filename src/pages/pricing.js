import SEO from "../common/seo/Seo";
import HeaderFour from "../common/header/HeaderFour";
import FooterFour from "../common/footer/FooterFour";
import HowToGetStarted from "../components/service/HowToGetStarted";
import { getCartUrl, PlansData } from "../data/products";

const featuredIds = new Set([207, 4, 97]);
const otherPlans = PlansData.filter((p) => !featuredIds.has(p.productId));

const plans = [
    {
        name: 'Lite Plan',
        price: '10',
        productId: 207,
        desc: 'Essentials to start ranking and researching.',
        popular: false,
        tools: [
            'SMRu$H', 'Canva', 'Grammarly', 'Woorank', 'Spin Rewriter',
            'Ubersuggest', 'Ispionage', 'StockUnlimited', 'CBEngine',
            'Buzzstream', 'Unbounce', 'Quillbot AI',
        ],
    },
    {
        name: 'Small Plan',
        price: '15',
        productId: 4,
        desc: 'Best value for freelancers and small teams.',
        popular: true,
        tools: [
            'SMRu$H', 'Moz Pro', 'Majestic', 'Ubersuggest', 'Spyfu',
            'Ispionage', 'KwFinder', 'Pexda', 'SaleHoo', 'StockUnlimited',
            'Spin Rewriter', 'Grammarly', 'Buzzsumo', 'Indexifications',
            'Lynda', 'Woorank', 'Envato Elements', 'Skills Share',
            'Spamzilla', 'Cognitive SEO', 'Canva Pro', 'Crello',
            'CBEngine', 'Buzzstream', 'Vyond', 'LongTailPro',
            'Article Builder', 'WordAi', 'Seo Profiler', 'SE Ranking',
            'Themes/Plugin WordPress', 'Spinner Português', 'Fotojet',
            'Audioblocks', 'Storyblocks', 'Videoblocks', 'Unbounce',
            'Quillbot', 'Chat GPT',
        ],
    },
    {
        name: 'Mega Plan',
        price: '50',
        productId: 97,
        desc: 'Full stack access for agencies and power users.',
        popular: false,
        tools: [
            'ARHFE$', 'SMRu$H', 'Moz Pro', 'Ubersuggest', 'Majestic',
            'keywordtool.io', 'KwFinder', 'Grammarly', 'Helium 10',
            'Jungle Scout', 'Chat GPT', 'Spyfu', 'EcomHunt', 'Ispionage',
            'Pexda', 'SaleHoo', 'StockUnlimited', 'Spin Rewriter',
            'Buzzsumo', 'Netflix', 'Indexifications', 'Lynda', 'Woorank',
            'Envato Elements', 'Skills Share', 'Freepik', 'Spamzilla',
            'Cognitive SEO', 'Canva Pro', 'Crello', 'CBEngine',
            'Buzzstream', 'Sellthetrend', 'Vyond', 'LongTailPro',
            'Article Builder', 'WordAi', 'Seo Profiler', 'SE Ranking',
            'Themes/Plugin WordPress', 'Spinner Português', 'Fotojet',
            'Audioblocks', 'Storyblocks', 'Videoblocks', 'Unbounce',
            'Jasper Ai', 'Quillbot', 'Chat GPT',
        ],
    },
];

const PricingPage = () => {
    return (
        <>
            <SEO pageTitle={"Pricing Plans - Group Buy SEO Tools"} />
            <HeaderFour />

            <section className="gb-hero" style={{ minHeight: 'auto', padding: '110px 0 70px' }}>
                <div className="gb-hero__glow gb-hero__glow--1" aria-hidden="true" />
                <div className="gb-hero__grid" aria-hidden="true" />
                <div className="container">
                    <div className="gb-hero__inner">
                        <div className="gb-eyebrow" style={{ color: '#FFD199' }}>Pricing</div>
                        <h1 className="gb-hero__brand" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
                            Complete <span>pricing plans</span>
                        </h1>
                        <p className="gb-hero__lead">
                            Choose the perfect plan for your SEO needs — orange energy, blue precision.
                        </p>
                    </div>
                </div>
            </section>

            <section className="gb-section gb-pricing">
                <div className="container">
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
                                <ul className="gb-price__list" style={{ maxHeight: 360, overflowY: 'auto' }}>
                                    {plan.tools.map((tool) => (
                                        <li key={tool}>{tool}</li>
                                    ))}
                                </ul>
                                <a
                                    href={getCartUrl(plan.productId)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`gb-btn ${plan.popular ? 'gb-btn-primary' : 'gb-btn-blue'}`}
                                >
                                    Buy Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="gb-section gb-section--tint">
                <div className="container">
                    <div className="gb-section__head">
                        <h2>More plans &amp; packs</h2>
                        <p>
                            Every plan below uses Buy Now — opens cart directly with that product (no tracking params).
                        </p>
                    </div>
                    <div className="gb-price-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
                        {otherPlans.map((plan) => (
                            <article key={plan.productId} className="gb-price">
                                <div className="gb-price__name" style={{ fontSize: '1.05rem' }}>{plan.name}</div>
                                <p className="gb-price__desc" style={{ minHeight: 'auto' }}>
                                    Shared group buy access. Click Buy Now to add this plan to your cart.
                                </p>
                                <a
                                    href={plan.cartUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="gb-btn gb-btn-blue"
                                >
                                    Buy Now
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <HowToGetStarted />
            <FooterFour />
        </>
    );
};

export default PricingPage;
