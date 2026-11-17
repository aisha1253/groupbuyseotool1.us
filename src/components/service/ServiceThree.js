import React from 'react';
import Link from 'next/link';
import { ServiceThreeData } from '@/data/service';

const icons = ['fa-solid fa-coins', 'fa-solid fa-layer-group', 'fa-solid fa-chart-line'];

const ServiceThree = () => {
    return (
        <section className="gb-section">
            <div className="container">
                <div className="gb-section__head">
                    <div className="gb-eyebrow">Why group buy</div>
                    <h2>Get found. Get cited. Grow faster.</h2>
                    <p>Understanding Group Buy SEO Tools — premium data and workflows without enterprise pricing.</p>
                    <div style={{ marginTop: 24 }}>
                        <a
                            href="https://seotoolsgroupbuy.us/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gb-btn gb-btn-blue"
                        >
                            Explore now
                        </a>
                    </div>
                </div>

                <div className="gb-features">
                    {ServiceThreeData.map((item, i) => (
                        <article key={item.id || i} className="gb-feature">
                            <span className="gb-feature__num">{item.service_no}</span>
                            <div className="gb-feature__icon">
                                <i className={icons[i % icons.length]} aria-hidden="true" />
                            </div>
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

export default ServiceThree;
