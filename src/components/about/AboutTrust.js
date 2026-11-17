import React from 'react';
import Link from 'next/link';

const AboutTrust = () => {
    return (
        <section id="trust" className="gb-section gb-section--dark gb-comparison-dark">
            <div className="container">
                <div className="gb-section__head">
                    <h2>Independent Service. Clear Expectations.</h2>
                    <p>
                        Group Buy SEO Tools is an independent shared access service and is not affiliated with Ahrefs, Semrush, Moz, or any other third party software provider. All product names and trademarks belong to their respective owners. Tool availability, features, usage limits, and access conditions may differ from individual subscriptions and can vary by plan.
                    </p>
                    <p className="gb-note" style={{ marginTop: 20 }}>
                        Have questions before ordering? Review our{' '}
                        <Link href="/pricing" style={{ color: '#FFD199' }}>
                            available plans
                        </Link>{' '}
                        or{' '}
                        <Link href="/contact" style={{ color: '#FFD199' }}>
                            contact our support team
                        </Link>{' '}
                        for clarification.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutTrust;
