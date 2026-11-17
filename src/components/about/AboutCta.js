import React from 'react';
import Link from 'next/link';

const AboutCta = () => {
    return (
        <section id="about-cta" className="gb-section gb-contact-cta">
            <div className="container">
                <div className="gb-contact-cta__box">
                    <h2>Ready to Make Your SEO Budget Work Harder?</h2>
                    <p>
                        Explore affordable shared SEO tool plans and find the tools that fit your projects, workflow, and budget.
                    </p>
                    <Link href="/pricing" className="gb-btn gb-btn-primary">
                        View Available Plans
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutCta;
