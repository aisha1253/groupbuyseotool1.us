import React from 'react';
import Link from 'next/link';
import { ServiceThreeData } from '@/data/service';

const ServiceThree = () => {
    return (
        <>
            {/* service three start */}
            <div className="service-three pt-140 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center mb-50 wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__two-title">Benefits of Using SEO Tools</h2>
                            <p className="mt-20" style={{marginBottom: '25px'}}>Understanding Group Buy SEO Tools</p>
                            <a 
                                href="https://seotoolsgroupbuy.us/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '15px 35px',
                                    backgroundColor: '#667eea',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    border: '2px solid #667eea',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#5568d3';
                                    e.target.style.borderColor = '#5568d3';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#667eea';
                                    e.target.style.borderColor = '#667eea';
                                }}
                            >
                                Explore Now
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        {ServiceThreeData.map((item, i) => (
                            <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay={item.delay}>
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
            {/* service three end */}
        </>
    )
}

export default ServiceThree;