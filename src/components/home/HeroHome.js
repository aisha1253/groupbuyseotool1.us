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
                        Get shared access to the SEO platforms you rely on for keyword research, audits, backlink checks and rank tracking. Our group buy SEO tools plans are made for freelancers, agencies and solopreneurs who want the data without paying full price for every subscription.
                    </p>
                    <div className="gb-hero__actions">
                        <a href="#pricing" className="gb-btn gb-btn-primary">View Plans</a>
                        <a href="#tools" className="gb-btn gb-btn-secondary">See Available Tools</a>
                    </div>
                    <ul className="gb-hero__meta">
                        <li>Multiple SEO tools in one place</li>
                        <li>Reliable uptime you can plan around</li>
                        <li>Support when you need it</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;
