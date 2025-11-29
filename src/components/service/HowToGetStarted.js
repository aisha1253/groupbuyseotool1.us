import React from 'react';
import Link from 'next/link';
import { HowToGetStartedData } from '@/data/service';

const HowToGetStarted = () => {
    return (
        <>
            {/* how to get started section start */}
            <div className="service-three pt-140 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center mb-50 wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__two-title">How to Get Started</h2>
                            <p className="mt-20">Simple Steps to Access Premium SEO Tools</p>
                        </div>
                    </div>
                    <div className="row">
                        {HowToGetStartedData.map((item, i) => (
                            <div key={i} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="service-three__single mb-30">
                                    <div className="service-three__single-img">
                                        <img src={item.icon} alt={item.alt} />
                                    </div>
                                    <h3><Link href={item.link}>{item.heading}</Link></h3>
                                    <p>{item.description}</p>
                                    <span>{item.service_no}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* how to get started section end */}
        </>
    )
}

export default HowToGetStarted;

