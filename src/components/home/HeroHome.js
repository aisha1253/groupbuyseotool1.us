import React from 'react';

const HeroHome = () => {
    return (
        <section id="hero" className="gb-hero">
            <div className="gb-hero__glow gb-hero__glow--1" aria-hidden="true" />
            <div className="gb-hero__glow gb-hero__glow--2" aria-hidden="true" />
            <div className="gb-hero__grid" aria-hidden="true" />
            <div className="container">
                <div className="gb-hero__inner">
                    <h1 className="gb-hero__brand">
                        Access Premium SEO Tools for Less with <span>groupbuyseotool</span>
                    </h1>
                    <p className="gb-hero__lead">
                        Get affordable shared access to popular SEO platforms for keyword research, competitor analysis, backlink checks, site audits, and rank tracking. Our group buy seo tools plans help freelancers, agencies, and website owners work with useful research tools without paying for multiple individual subscriptions.
                    </p>
                    <div className="gb-hero__actions">
                        <a href="#pricing" className="gb-btn gb-btn-primary">Explore Pricing Plans</a>
                        <a href="#single-tools" className="gb-btn gb-btn-secondary">Browse Available Tools</a>
                    </div>
                    <ul className="gb-hero__meta">
                        <li>Multiple SEO Tools in One Place</li>
                        <li>Affordable Shared Access Plans</li>
                        <li>Helpful Customer Support</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;
