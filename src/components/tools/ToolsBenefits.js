import React from 'react';

const ToolsBenefits = () => {
    const benefits = [
        {
            icon: "/assets/img/services/service-3-1.svg",
            title: "Cost-Effective Solutions",
            description: "Group buy SEO tools provide affordable access for small businesses and individuals who cannot afford premium tools individually. By pooling resources, members can access premium SEO tools at a fraction of the cost."
        },
        {
            icon: "/assets/img/services/service-3-2.svg",
            title: "Access to Premium Tools",
            description: "Get instant access to premium SEO tools that would otherwise be too expensive. Most premium SEO tools have high subscription fees, which can be challenging for small businesses or individual website owners."
        },
        {
            icon: "/assets/img/services/service-3-3.svg",
            title: "Collaborative Learning",
            description: "Join a community of like-minded individuals who share knowledge and best practices. Collaborate with other members, learn from their experience, and improve your SEO skills together."
        },
        {
            icon: "/assets/img/services/service-3-1.svg",
            title: "Multiple Tools Access",
            description: "Get access to 50+ SEO tools including keyword research, backlink analysis, rank tracking, site audits, content optimization, and many other essential digital marketing tools in one subscription."
        }
    ];

    return (
        <>
            {/* tools benefits start */}
            <div className="tools-benefits pt-120 pb-120" style={{background: '#f9f9f9'}}>
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-xl-12 text-center">
                            <h2 className="section-title__two-title wow fadeInUp" data-wow-delay=".3s">
                                Benefits of Our Group Buy SEO Tools
                            </h2>
                            <p className="mt-20 wow fadeInUp" data-wow-delay=".5s">
                                Why thousands of businesses choose our platform for their SEO needs
                            </p>
                        </div>
                    </div>

                    <div className="row" style={{gap: '0', rowGap: '30px'}}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay={`${0.3 + (index * 0.1)}s`} style={{paddingLeft: '15px', paddingRight: '15px'}}>
                                <div className="benefit-card" style={{
                                    background: 'white',
                                    borderRadius: '15px',
                                    padding: '40px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    transition: 'transform 0.3s ease',
                                    height: '100%'
                                }}>
                                    <div className="benefit-icon" style={{
                                        marginBottom: '20px'
                                    }}>
                                        <img src={benefit.icon} alt={benefit.title} style={{width: '60px', height: '60px'}} />
                                    </div>
                                    <h3 style={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        marginBottom: '15px',
                                        color: '#333'
                                    }}>
                                        {benefit.title}
                                    </h3>
                                    <p style={{
                                        color: '#666',
                                        lineHeight: '1.8',
                                        fontSize: '16px'
                                    }}>
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* tools benefits end */}
        </>
    );
};

export default ToolsBenefits;

