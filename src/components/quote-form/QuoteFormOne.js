import React, { useState } from 'react';

const QuoteFormOne = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create WhatsApp message
        const whatsappMessage = `Hello! I'm interested in your SEO Group Buy services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message: ${formData.message}`;

        // Encode message for WhatsApp URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = "15205636362"; // WhatsApp number without + and spaces
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            {/* quote form one start */}
            <div className="quote-form-one pt-240 pb-160">
                <div className="quote-form-one__wrapper">
                    <div className="quote-form-one__img1">
                        <img src="/assets/img/quote-form/shape1.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img2">
                        <img src="/assets/img/quote-form/shape2.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img3">
                        <img src="/assets/img/quote-form/shape3.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img4">
                        <img src="/assets/img/quote-form/shape4.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img5">
                        <img src="/assets/img/quote-form/shape5.svg" alt="img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 wow fadeInLeft" data-wow-delay=".3s">
                                <div className="quote-form-one__img">
                                    <img src="/assets/img/quote-form/bg-1.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="quote-form-one__content wow fadeInUp" data-wow-delay=".3s">
                                    <form onSubmit={handleSubmit} className="contact-quote-form">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Your name" 
                                                    required 
                                                />
                                            </div>
                                            <div className="col-xl-6">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Your email" 
                                                    required 
                                                />
                                            </div>
                                            <div className="col-xl-6">
                                                <input 
                                                    type="tel" 
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="Your phone" 
                                                />
                                            </div>
                                            <div className="col-xl-6">
                                                <input 
                                                    type="text" 
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    placeholder="Your subject" 
                                                />
                                            </div>
                                            <div className="col-xl-12">
                                                <textarea 
                                                    name="message" 
                                                    id="message" 
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder="Type your message..." 
                                                    required
                                                ></textarea>
                                                <button type="submit" className="contact-btn rr-bounce-up" style={{
                                                    whiteSpace: 'nowrap',
                                                    padding: '15px 30px',
                                                    fontSize: '15px',
                                                    minWidth: 'auto',
                                                    width: 'auto',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }}>
                                                    <i className="fab fa-whatsapp" style={{marginRight: '8px', fontSize: '18px'}}></i>
                                                    <span style={{whiteSpace: 'nowrap'}}>Send via WhatsApp</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* quote form one end */}
        </>
    )
}

export default QuoteFormOne;