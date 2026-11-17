import React from 'react';
import Link from 'next/link';
import QuoteFormOne from '../quote-form/QuoteFormOne';

const ContactInfo = () => {
    const contactChannels = [
        {
            icon: "fa-envelope",
            title: "Email Support",
            value: "admin@groupbuyseotool.us",
            subtitle: "24/7 Support Available",
            color: "#3A57FC"
        },
        {
            icon: "fa-comments",
            title: "Live Chat",
            value: "Available on our website",
            subtitle: "Quick response time",
            color: "#FF8800"
        },
        {
            icon: "fa-brands fa-whatsapp",
            title: "WhatsApp Support",
            value: "+1 (520) 563‑6362",
            subtitle: "Direct communication",
            color: "#25D366"
        },
        {
            icon: "fa-ticket",
            title: "Ticket System",
            value: "Create support tickets",
            subtitle: "Track your requests",
            color: "#FF8800"
        }
    ];

    const helpServices = [
        {
            icon: "/assets/img/services/service-3-1.svg",
            title: "Technical Support",
            description: "Get help with tool access, technical issues, and platform navigation. Our technical team is available to assist you with any problems you encounter.",
            features: ["Tool access issues", "Platform navigation", "Browser compatibility", "Account setup"]
        },
        {
            icon: "/assets/img/services/service-3-2.svg",
            title: "General Inquiries",
            description: "Have questions about our services, pricing, or features? Our support team can provide detailed information about all our offerings.",
            features: ["Service information", "Pricing questions", "Feature explanations", "Account management"]
        },
        {
            icon: "/assets/img/services/service-3-3.svg",
            title: "SEO Guidance",
            description: "Need help with SEO strategies or tool recommendations? Our experts can guide you on the best practices and tool usage.",
            features: ["SEO strategy advice", "Tool recommendations", "Best practices", "Optimization tips"]
        },
        {
            icon: "/assets/img/services/service-3-1.svg",
            title: "Billing Support",
            description: "Questions about payments, refunds, or subscription management? Our billing team is here to help with all financial matters.",
            features: ["Payment issues", "Refund requests", "Subscription changes", "Invoice queries"]
        }
    ];

    const responseTimes = [
        { channel: "Live Chat", time: "0-2 minutes", description: "Immediate response during business hours" },
        { channel: "Email Support", time: "2-4 hours", description: "Detailed responses to your queries" },
        { channel: "Support Tickets", time: "4-8 hours", description: "Tracked support for complex issues" },
        { channel: "WhatsApp Support", time: "1-2 hours", description: "Direct communication with our team" }
    ];

    return (
        <>
            {/* contact info start */}
            <div className="contact-info-section pt-120 pb-120">
                <div className="container">
                    {/* Get in Touch Header */}
                    <div className="row mb-60" style={{marginTop: '40px'}}>
                        <div className="col-xl-12 text-center">
                            <h2 className="section-title__two-title wow fadeInUp" data-wow-delay=".3s">Get in Touch</h2>
                            <p className="mt-20 wow fadeInUp" data-wow-delay=".5s" style={{fontSize: '18px', color: '#666'}}>
                                Get in touch with our support team for any questions or assistance.
                            </p>
                        </div>
                    </div>

                    {/* Contact Channels */}
                    <div className="row mb-80">
                        {contactChannels.map((channel, index) => (
                            <div key={index} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${0.3 + (index * 0.1)}s`}>
                                <div className="contact-channel-card mb-30" style={{
                                    background: 'white',
                                    borderRadius: '15px',
                                    padding: '35px 25px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    textAlign: 'center',
                                    height: '100%',
                                    transition: 'transform 0.3s ease',
                                    border: `2px solid ${channel.color}`
                                }}>
                                    <div className="icon mb-20" style={{
                                        width: '70px',
                                        height: '70px',
                                        background: channel.color,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto'
                                    }}>
                                        <i className={`fas ${channel.icon}`} style={{fontSize: '32px', color: 'white'}}></i>
                                    </div>
                                    <h3 style={{fontSize: '22px', fontWeight: 'bold', marginBottom: '10px', color: '#333'}}>{channel.title}</h3>
                                    <p style={{fontSize: '16px', color: '#3A57FC', fontWeight: '600', marginBottom: '8px'}}>{channel.value}</p>
                                    <p style={{fontSize: '14px', color: '#666'}}>{channel.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form placed after contact channel boxes */}
                    <div className="row mb-80">
                        <div className="col-xl-12">
                            <QuoteFormOne />
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="row mb-80">
                        <div className="col-xl-12">
                            <div className="business-hours wow fadeInUp" data-wow-delay=".3s" style={{
                                background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                                borderRadius: '20px',
                                padding: '50px 40px',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                border: '1px solid #e9ecef',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Background Pattern */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    right: '-50px',
                                    width: '100px',
                                    height: '100px',
                                    background: 'linear-gradient(45deg, #3A57FC, #FF8800)',
                                    borderRadius: '50%',
                                    opacity: '0.1'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-30px',
                                    left: '-30px',
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(45deg, #FF8800, #3A57FC)',
                                    borderRadius: '50%',
                                    opacity: '0.1'
                                }}></div>
                                
                                <h2 style={{
                                    color: '#333', 
                                    marginBottom: '40px', 
                                    fontSize: '32px', 
                                    textAlign: 'center', 
                                    fontWeight: 'bold',
                                    position: 'relative',
                                    zIndex: '1'
                                }}>Business Hours</h2>
                                
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 mb-30" style={{textAlign: 'center'}}>
                                        <div style={{
                                            background: 'white',
                                            padding: '25px 20px',
                                            borderRadius: '15px',
                                            border: '2px solid #e9ecef',
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                                            transition: 'all 0.3s ease',
                                            position: 'relative',
                                            zIndex: '1'
                                        }}>
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                background: 'linear-gradient(45deg, #3A57FC, #FF8800)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 15px',
                                                color: 'white',
                                                fontSize: '20px'
                                            }}>
                                                <i className="fas fa-calendar-week"></i>
                                            </div>
                                            <h4 style={{color: '#333', marginBottom: '10px', fontSize: '18px', fontWeight: '600'}}>Monday - Friday</h4>
                                            <p style={{fontSize: '16px', color: '#3A57FC', fontWeight: '600'}}>9:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30" style={{textAlign: 'center'}}>
                                        <div style={{
                                            background: 'white',
                                            padding: '25px 20px',
                                            borderRadius: '15px',
                                            border: '2px solid #e9ecef',
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                                            transition: 'all 0.3s ease',
                                            position: 'relative',
                                            zIndex: '1'
                                        }}>
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                background: 'linear-gradient(45deg, #3A57FC, #FF8800)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 15px',
                                                color: 'white',
                                                fontSize: '20px'
                                            }}>
                                                <i className="fas fa-calendar-day"></i>
                                            </div>
                                            <h4 style={{color: '#333', marginBottom: '10px', fontSize: '18px', fontWeight: '600'}}>Saturday</h4>
                                            <p style={{fontSize: '16px', color: '#3A57FC', fontWeight: '600'}}>10:00 AM - 4:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 mb-30" style={{textAlign: 'center'}}>
                                        <div style={{
                                            background: 'white',
                                            padding: '25px 20px',
                                            borderRadius: '15px',
                                            border: '2px solid #e9ecef',
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                                            transition: 'all 0.3s ease',
                                            position: 'relative',
                                            zIndex: '1'
                                        }}>
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                background: 'linear-gradient(45deg, #dc3545, #ff6b6b)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 15px',
                                                color: 'white',
                                                fontSize: '20px'
                                            }}>
                                                <i className="fas fa-calendar-times"></i>
                                            </div>
                                            <h4 style={{color: '#333', marginBottom: '10px', fontSize: '18px', fontWeight: '600'}}>Sunday</h4>
                                            <p style={{fontSize: '16px', color: '#dc3545', fontWeight: '600'}}>Closed</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{
                                    background: 'linear-gradient(135deg, #3A57FC 0%, #FF8800 100%)',
                                    color: 'white',
                                    padding: '20px 30px',
                                    borderRadius: '15px',
                                    textAlign: 'center',
                                    marginTop: '30px',
                                    position: 'relative',
                                    zIndex: '1',
                                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
                                }}>
                                    <p style={{margin: 0, fontSize: '16px', fontWeight: '500'}}>
                                        <i className="fas fa-clock" style={{marginRight: '10px', fontSize: '18px'}}></i>
                                        Emergency support available 24/7 for critical issues
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How We Can Help You */}
                    <div className="row mb-80">
                        <div className="col-xl-12 text-center mb-50">
                            <h2 className="section-title__two-title wow fadeInUp" data-wow-delay=".3s">How We Can Help You</h2>
                        </div>
                        {helpServices.map((service, index) => (
                            <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay={`${0.3 + (index * 0.1)}s`}>
                                <div className="help-service-card mb-30" style={{
                                    background: 'white',
                                    borderRadius: '12px',
                                    padding: '25px 20px',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                                    height: '100%'
                                }}>
                                    <div className="icon mb-15">
                                        <img src={service.icon} alt={service.title} style={{width: '45px', height: '45px'}} />
                                    </div>
                                    <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#333'}}>{service.title}</h3>
                                    <p style={{color: '#666', lineHeight: '1.6', marginBottom: '15px', fontSize: '14px'}}>{service.description}</p>
                                    <ul style={{listStyle: 'none', padding: 0}}>
                                        {service.features.map((feature, i) => (
                                            <li key={i} style={{padding: '5px 0', color: '#3A57FC', fontSize: '13px'}}>
                                                <i className="fas fa-check-circle" style={{marginRight: '8px', fontSize: '12px'}}></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Answers */}
                    <div className="row mb-80">
                        <div className="col-xl-12">
                            <div className="quick-answers wow fadeInUp" data-wow-delay=".3s" style={{
                                background: '#f9f9f9',
                                borderRadius: '15px',
                                padding: '40px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{fontSize: '28px', marginBottom: '20px', color: '#333'}}>Quick Answers</h3>
                                <p style={{fontSize: '16px', color: '#666', marginBottom: '25px'}}>
                                    Before contacting us, you might find the answer in our FAQ section:
                                </p>
                                <div className="faq-links" style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
                                    <Link href="/faq" style={{
                                        background: 'white',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        color: '#3A57FC',
                                        fontWeight: '600',
                                        border: '2px solid #3A57FC',
                                        transition: 'all 0.3s ease'
                                    }}>How It Works</Link>
                                    <Link href="/faq" style={{
                                        background: 'white',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        color: '#3A57FC',
                                        fontWeight: '600',
                                        border: '2px solid #3A57FC',
                                        transition: 'all 0.3s ease'
                                    }}>Pricing & Payment</Link>
                                    <Link href="/faq" style={{
                                        background: 'white',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        color: '#3A57FC',
                                        fontWeight: '600',
                                        border: '2px solid #3A57FC',
                                        transition: 'all 0.3s ease'
                                    }}>Technical Issues</Link>
                                    <Link href="/faq" style={{
                                        background: 'white',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        color: '#3A57FC',
                                        fontWeight: '600',
                                        border: '2px solid #3A57FC',
                                        transition: 'all 0.3s ease'
                                    }}>Account Management</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Response Times */}
                    <div className="row">
                        <div className="col-xl-12 text-center mb-50">
                            <h2 className="section-title__two-title wow fadeInUp" data-wow-delay=".3s">Our Response Times</h2>
                        </div>
                        {responseTimes.map((item, index) => (
                            <div key={index} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.3 + (index * 0.1)}s`}>
                                <div className="response-time-card mb-30" style={{
                                    background: 'white',
                                    borderRadius: '15px',
                                    padding: '30px 20px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    textAlign: 'center',
                                    height: '100%',
                                    border: '1px solid #e0e0e0'
                                }}>
                                    <h4 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#333'}}>{item.channel}</h4>
                                    <p style={{fontSize: '14px', color: '#666', marginBottom: '15px'}}>{item.description}</p>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #3A57FC 0%, #FF8800 100%)',
                                        color: 'white',
                                        padding: '10px 20px',
                                        borderRadius: '25px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        display: 'inline-block'
                                    }}>
                                        {item.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* contact info end */}
        </>
    );
};

export default ContactInfo;

