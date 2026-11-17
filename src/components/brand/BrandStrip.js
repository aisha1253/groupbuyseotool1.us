import React from 'react';

const brands = [
    'Ahrefs',
    'Semrush',
    'Moz Pro',
    'Majestic',
    'SpyFu',
    'Ubersuggest',
    'Grammarly',
    'Canva Pro',
    'Surfer SEO',
    'Keyword Tool',
];

const BrandStrip = () => {
    const loop = [...brands, ...brands];
    return (
        <div className="gb-logos">
            <div className="gb-logos__label">Trusted toolkit marketers use every day</div>
            <div className="gb-logos__track-wrap">
                <div className="gb-logos__track">
                    {loop.map((name, i) => (
                        <span key={`${name}-${i}`} className="gb-logos__item">{name}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandStrip;
