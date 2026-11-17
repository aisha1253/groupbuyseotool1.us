import React from 'react';
import Link from 'next/link';

const ContactHome = () => {
    return (
        <section id="contact" className="gb-section gb-contact-cta">
            <div className="container">
                <div className="gb-contact-cta__box">
                    <h2>Find the Right SEO Tools for Your Next Project</h2>
                    <p>
                        Not sure whether Lite, Small, or Mega is the right choice? Tell us which tools you need and what kind of SEO work you do. Our support team can help you understand your options before you order.
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
