import React from 'react';
import Link from 'next/link';

const AboutHero = () => {
    return (
        <section id="about-hero" className="gb-hero" style={{ minHeight: 'auto', padding: '120px 0 80px' }}>
            <div className="gb-hero__glow gb-hero__glow--1" aria-hidden="true" />
            <div className="gb-hero__glow gb-hero__glow--2" aria-hidden="true" />
            <div className="gb-hero__grid" aria-hidden="true" />
            <div className="container">
                <div className="gb-hero__inner">
                    <h1 className="gb-hero__brand" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
                        Meet <span>groupbuyseotool</span>, Your Smarter Way to Access SEO Tools
                    </h1>
                    <p className="gb-hero__lead">
                        Great SEO work should not require an expensive collection of software subscriptions. We make group buy seo tools more accessible through affordable shared access plans, helping freelancers, agencies, and website owners research keywords, analyze competitors, and improve their SEO workflows.
                    </p>
                    <div className="gb-hero__actions">
                        <Link href="/pricing" className="gb-btn gb-btn-primary">
                            Explore Our Plans
                        </Link>
                        <Link href="/tools" className="gb-btn gb-btn-secondary">
                            Browse SEO Tools
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
