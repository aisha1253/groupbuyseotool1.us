import React from 'react';

const AboutGroupBuy = () => {
    return (
        <>
            {/* about group buy start */}
            <div className="about-group-buy pt-200 pb-120">
                <div className="container">
                    {/* Main About Section */}
                    <div className="row mb-80">
                        <div className="col-xxl-12">
                            <div className="about-intro text-center wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section-title__two-title mb-30" style={{fontSize: '42px'}}>About Us</h2>
                                <p style={{fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '30px', maxWidth: '900px', margin: '0 auto'}}>
                                    We are the best provider of group buy SEO tools that help small businesses, enterprises, and bloggers to rank at the top. With our premium group buy SEO tools, you can analyze your websites and remove problems and bugs. You can choose your own pricing plan and start ranking your business.
                                </p>
                                <a 
                                    href="https://seotoolsgroupbuy.us/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '15px 35px',
                                        backgroundColor: '#3A57FC',
                                        color: '#fff',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        border: '2px solid #3A57FC',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        marginTop: '20px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#054ADA';
                                        e.target.style.borderColor = '#054ADA';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#3A57FC';
                                        e.target.style.borderColor = '#3A57FC';
                                    }}
                                >
                                    Explore Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="row mb-80">
                        <div className="col-xxl-12">
                            <div className="about-services wow fadeInUp" data-wow-delay=".5s" style={{
                                background: 'linear-gradient(135deg, #3A57FC 0%, #FF8800 100%)',
                                borderRadius: '20px',
                                padding: '50px',
                                color: 'white'
                            }}>
                                <p style={{fontSize: '18px', lineHeight: '1.8', marginBottom: '30px'}}>
                                    We offer services to UK, US, Canada, Europe, and Asia. Our aim is to help businesses that are unable to afford SEO tools—that's why we offer SEO tools group buy at cheap rates. Our group buy SEO tools are here to help you improve the ranking of your websites, find CPA top selling items on the market. So, buy our SEO tools to exponentially grow your sales and business.
                                </p>
                                <p style={{fontSize: '18px', lineHeight: '1.8', marginBottom: '30px'}}>
                                    At Group Buy SEO Tools, we are a team of dedicated professionals with years of experience in the digital marketing industry. Our goal is to provide our clients with high-quality, affordable SEO tools that will help them improve their online presence and increase their website traffic.
                                </p>
                                <div style={{textAlign: 'center'}}>
                                    <a 
                                        href="https://seotoolsgroupbuy.us/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-block',
                                            padding: '15px 35px',
                                            backgroundColor: '#fff',
                                            color: '#3A57FC',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            border: '2px solid #fff',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#fff';
                                        }}
                                    >
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission, Vision, Values */}
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 wow fadeInUp" data-wow-delay=".3s">
                            <div className="about-value-card mb-30" style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '40px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                height: '100%',
                                border: '2px solid #3A57FC'
                            }}>
                                <div className="icon mb-30">
                                    <img src="/assets/img/services/service-3-1.svg" alt="Mission" style={{width: '60px', height: '60px'}} />
                                </div>
                                <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#333'}}>Our Mission</h3>
                                <p style={{fontSize: '16px', lineHeight: '1.8', color: '#666'}}>
                                    To democratize access to premium SEO tools by making them affordable for small businesses, freelancers, and individual website owners. We believe that everyone should have access to the tools they need to succeed online, regardless of their budget.
                                </p>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="about-value-card mb-30" style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '40px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                height: '100%',
                                border: '2px solid #FF8800'
                            }}>
                                <div className="icon mb-30">
                                    <img src="/assets/img/services/service-3-2.svg" alt="Vision" style={{width: '60px', height: '60px'}} />
                                </div>
                                <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#333'}}>Our Vision</h3>
                                <p style={{fontSize: '16px', lineHeight: '1.8', color: '#666'}}>
                                    To become the leading provider of group buy SEO tools, helping thousands of businesses worldwide improve their online presence and achieve their digital marketing goals through affordable access to premium tools.
                                </p>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="about-value-card mb-30" style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '40px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                height: '100%',
                                border: '2px solid #3A57FC'
                            }}>
                                <div className="icon mb-30">
                                    <img src="/assets/img/services/service-3-3.svg" alt="Values" style={{width: '60px', height: '60px'}} />
                                </div>
                                <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#333'}}>Our Values</h3>
                                <p style={{fontSize: '16px', lineHeight: '1.8', color: '#666'}}>
                                    We are committed to providing reliable, high-quality services with excellent customer support. We believe in transparency, affordability, and helping our customers succeed in their digital marketing endeavors.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="row mt-60">
                        <div className="col-xxl-12 text-center wow fadeInUp" data-wow-delay=".9s">
                            <a 
                                href="https://seotoolsgroupbuy.us/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '15px 35px',
                                    backgroundColor: '#3A57FC',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    border: '2px solid #3A57FC',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#054ADA';
                                    e.target.style.borderColor = '#054ADA';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#3A57FC';
                                    e.target.style.borderColor = '#3A57FC';
                                }}
                            >
                                Explore Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* about group buy end */}
        </>
    );
};

export default AboutGroupBuy;

