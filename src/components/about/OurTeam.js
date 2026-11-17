import React from 'react';

const OurTeam = () => {
    const teamMembers = [
        {
            image: "/assets/img/team/team-1.jpg",
            name: "John Smith",
            position: "CEO & Founder",
            description: "With over 10 years of experience in digital marketing, John founded Group Buy SEO Tools to make premium SEO tools accessible to everyone."
        },
        {
            image: "/assets/img/team/team-2.jpg",
            name: "Sarah Johnson",
            position: "CTO",
            description: "Sarah leads our technical team and ensures our platform runs smoothly with 99.9% uptime and secure access to all tools."
        },
        {
            image: "/assets/img/team/team-3.jpg",
            name: "Mike Davis",
            position: "Customer Success Manager",
            description: "Mike ensures our customers get the best support and help them maximize the value of our SEO tools for their businesses."
        }
    ];

    return (
        <>
            {/* our team start */}
            <div className="our-team pt-120 pb-120">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-xl-12 text-center">
                            <h2 className="section-title__two-title wow fadeInUp" data-wow-delay=".3s">
                                Meet Our Team
                            </h2>
                            <p className="mt-20 wow fadeInUp" data-wow-delay=".5s" style={{fontSize: '18px', color: '#666'}}>
                                Dedicated professionals committed to your success
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${0.3 + (index * 0.2)}s`}>
                                <div className="team-card mb-30" style={{
                                    background: 'white',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease',
                                    height: '100%'
                                }}>
                                    <div className="team-image" style={{
                                        width: '100%',
                                        height: '300px',
                                        overflow: 'hidden'
                                    }}>
                                        <img 
                                            src={member.image} 
                                            alt={member.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <div style={{padding: '30px'}}>
                                        <h3 style={{
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            marginBottom: '10px',
                                            color: '#333'
                                        }}>
                                            {member.name}
                                        </h3>
                                        <p style={{
                                            fontSize: '16px',
                                            color: '#3A57FC',
                                            fontWeight: '600',
                                            marginBottom: '15px'
                                        }}>
                                            {member.position}
                                        </p>
                                        <p style={{
                                            fontSize: '15px',
                                            lineHeight: '1.7',
                                            color: '#666'
                                        }}>
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* our team end */}
        </>
    );
};

export default OurTeam;

