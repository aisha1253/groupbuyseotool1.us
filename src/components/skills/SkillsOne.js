import React, { useEffect } from 'react';
import Link from 'next/link';

const bars = [
    { title: 'Customer Satisfaction', percent: 98 },
    { title: 'Tools Availability', percent: 99 },
    { title: 'Cost Savings', percent: 95 },
];

const SkillsOne = () => {
    useEffect(() => {
        const fills = document.querySelectorAll('.gb-bar__fill');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        el.style.width = `${el.dataset.percent}%`;
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.4 }
        );
        fills.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="gb-section gb-section--tint">
            <div className="container">
                <div className="gb-empower">
                    <div className="gb-empower__visual">
                        <img src="/assets/img/skill/skill-img-1.png" alt="SEO growth dashboard" />
                    </div>
                    <div className="gb-empower__copy">
                        <div className="gb-eyebrow">Performance</div>
                        <h2>Empowering your digital success with premium SEO tools</h2>
                        <p>
                            Access the world&apos;s leading SEO tools at unbeatable prices. Our group buy platform
                            gives you Ahrefs, Semrush, Moz and 50+ more — so you can grow visibility across search and AI.
                        </p>
                        {bars.map((bar) => (
                            <div key={bar.title} className="gb-bar">
                                <div className="gb-bar__top">
                                    <span>{bar.title}</span>
                                    <span>{bar.percent}%</span>
                                </div>
                                <div className="gb-bar__track">
                                    <div
                                        className="gb-bar__fill"
                                        data-percent={bar.percent}
                                        style={{ width: 0 }}
                                    />
                                </div>
                            </div>
                        ))}
                        <Link href="/pricing" className="gb-btn gb-btn-primary" style={{ marginTop: 20 }}>
                            View pricing plans
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsOne;
