import React from 'react';

const BreadcrumbTwo = ({ heading = "About Us", currentPage = "About" }) => {
    return (
        <section className="gb-hero" style={{ minHeight: 'auto', padding: '110px 0 64px' }}>
            <div className="gb-hero__glow gb-hero__glow--1" aria-hidden="true" />
            <div className="gb-hero__grid" aria-hidden="true" />
            <div className="container">
                <div className="gb-hero__inner">
                    <h1 className="gb-hero__brand" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
                        {heading}
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,.8)', fontWeight: 600, margin: 0 }}>
                        {currentPage}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BreadcrumbTwo;
