import React from 'react';
import Link from 'next/link';

const ContactHome = () => {
    return (
        <section id="contact" className="gb-section gb-contact-cta">
            <div className="container">
                <div className="gb-contact-cta__box">
                    <h2>Not Sure Which Plan Fits You?</h2>
                    <p>
                        Tell us about your work and we will help you choose the right plan. We reply quickly and keep things simple.
                    </p>
                    <Link href="/contact" className="gb-btn gb-btn-primary">
                        Talk to Our Team
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactHome;
