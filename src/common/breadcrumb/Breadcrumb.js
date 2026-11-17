import React from 'react';
import Link from 'next/link';

const Breadcrumb = ({ heading = "About Us", currentPage = "About" }) => {
    return (
        <section className="gb-hero" style={{ minHeight: 'auto', padding: '110px 0 64px' }}>
            <div className="gb-hero__glow gb-hero__glow--1" aria-hidden="true" />
            <div className="gb-hero__glow gb-hero__glow--2" aria-hidden="true" />
            <div className="gb-hero__grid" aria-hidden="true" />
            <div className="container">
                <div className="gb-hero__inner">
                    <h1 className="gb-hero__brand" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
                        {heading}
                    </h1>
                    <div
                        className="page-header__menu"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 10,
                            color: 'rgba(255,255,255,.8)',
                            fontWeight: 600,
                        }}
                    >
                        <Link href="/" style={{ color: '#FFD199', textDecoration: 'none' }}>
                            Home
                        </Link>
                        <span aria-hidden="true">/</span>
                        <span>{currentPage}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;
