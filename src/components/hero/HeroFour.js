import React from "react";

const HeroFour = () => {
    return (
        <section className="gb-hero">
            <div className="gb-hero__glow gb-hero__glow--1" aria-hidden="true" />
            <div className="gb-hero__glow gb-hero__glow--2" aria-hidden="true" />
            <div className="gb-hero__grid" aria-hidden="true" />

            <div className="container">
                <div className="gb-hero__inner">
                    <div className="gb-eyebrow" style={{ color: '#FFD199' }}>
                        Search · AI · Growth
                    </div>
                    <h1 className="gb-hero__brand">
                        Group Buy <span>SEO Tools</span>
                    </h1>
                    <p className="gb-hero__lead">
                        Be found everywhere search happens. Access Ahrefs, Semrush, Moz and 50+ premium tools — at a fraction of the cost.
                    </p>
                    <div className="gb-hero__actions">
                        <a href="/pricing" className="gb-btn gb-btn-primary">
                            Explore Plans
                        </a>
                        <a href="/tools" className="gb-btn gb-btn-secondary">
                            Explore tools
                        </a>
                    </div>
                    <div className="gb-hero__meta">
                        <div>
                            <strong>50+</strong>
                            Premium tools
                        </div>
                        <div>
                            <strong>99.9%</strong>
                            Uptime
                        </div>
                        <div>
                            <strong>24/7</strong>
                            Live support
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroFour;
