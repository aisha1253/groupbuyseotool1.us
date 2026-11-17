import React from 'react';
import Link from 'next/link';
import { HowToGetStartedData } from '@/data/service';

const HowToGetStarted = () => {
    return (
        <section className="gb-section gb-section--tint">
            <div className="container">
                <div className="gb-section__head">
                    <div className="gb-eyebrow">Get started</div>
                    <h2>How to get started</h2>
                    <p>Four simple steps to unlock premium SEO tools.</p>
                </div>

                <div className="gb-steps">
                    {HowToGetStartedData.map((item, i) => (
                        <article key={item.id || i} className="gb-step">
                            <h3>
                                <Link href={item.link}>{item.heading}</Link>
                            </h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowToGetStarted;
