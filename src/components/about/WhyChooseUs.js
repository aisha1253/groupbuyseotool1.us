import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: "/assets/img/services/service-3-1.svg",
            title: "Superb Uptime",
            description: "You can easily access any SEO tools with our special self-developed program with 99.9% uptime."
        },
        {
            icon: "/assets/img/services/service-3-2.svg",
            title: "Premium Support 24/7",
            description: "With our 24/7 support, all your queries will be answered in a couple of hours via Skype, Live Chat & Ticket Support."
        },
        {
            icon: "/assets/img/services/service-3-3.svg",
            title: "Lowest Price Ever",
            description: "High-quality service at an amazing monthly rate which is super affordable. No hidden charges make us the best group buy SEO tools provider."
        },
        {
            icon: "/assets/img/services/service-3-1.svg",
            title: "SEO, PPC, Forum",
            description: "Buy Premium Private SEO, PPC, Spy accounts like Research Tool, STM Forum, Moz, Spyfu, and Adplexity at a Low price."
        },
        {
            icon: "/assets/img/services/service-3-2.svg",
            title: "Instant Access",
            description: "We offer instant access to our self-developed program within seconds upon payment."
        },
        {
            icon: "/assets/img/services/service-3-3.svg",
            title: "Secure and Safe",
            description: "Nothing to worry about—no questionable installation program, or any sort of VPS. Our original SEO buy group tools are safe."
        }
    ];

    return (
        <>
            {/* why choose us start */}
            <div className="why-choose-us pt-120 pb-120" style={{background: '#f9f9f9'}}>
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-xl-12 text-center">
                            <h2 className="section-title__two-title wow fadeInUp" data-wow-delay=".3s">
                                Why Choose Group Buy SEO Tools
                            </h2>
                            <p className="mt-20 wow fadeInUp" data-wow-delay=".5s" style={{fontSize: '18px', color: '#666'}}>
                                Discover what makes us the preferred choice for thousands of businesses
                            </p>
                        </div>
                    </div>

                    <div className="row" style={{gap: '0', rowGap: '30px'}}>
                        {features.map((feature, index) => (
                            <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay={`${0.3 + (index * 0.1)}s`} style={{paddingLeft: '15px', paddingRight: '15px'}}>
                                <div className="service-three__single" style={{
                                    background: 'white',
                                    borderRadius: '15px',
                                    padding: '40px 30px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease',
                                    height: '100%',
                                    position: 'relative'
                                }}>
                                    <div className="service-three__single-img" style={{marginBottom: '25px'}}>
                                        <img src={feature.icon} alt={feature.title} style={{width: '60px', height: '60px'}} />
                                    </div>
                                    <h3 style={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        marginBottom: '15px',
                                        color: '#333'
                                    }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{
                                        color: '#666',
                                        lineHeight: '1.8',
                                        fontSize: '16px',
                                        marginBottom: '20px'
                                    }}>
                                        {feature.description}
                                    </p>
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '30px',
                                        right: '30px',
                                        fontSize: '48px',
                                        fontWeight: 'bold',
                                        color: 'rgba(102, 126, 234, 0.1)'
                                    }}>
                                        0{index + 1}.
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* why choose us end */}
        </>
    );
};

export default WhyChooseUs;

