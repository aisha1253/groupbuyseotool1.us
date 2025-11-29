import React, { useState } from 'react';

const QuoteFormTwo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    // WhatsApp number (contact page se same number)
    const whatsappNumber = '15205636362'; // +1 (520) 563‑6362

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // WhatsApp message format
        const whatsappMessage = `*New Contact Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
        
        // WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            {/* quote form one start */}
            <div className="quote-form-one pt-160">
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
                                    <img src="/assets/img/quote-form/bg-2.png" alt="" />
                                    <div className="quote-form-one__img-animation1">
                                        <img src="/assets/img/quote-form/quote-img-1.png" alt="quote img" />
                                    </div>
                                    <div className="quote-form-one__img-animation2">
                                        <img src="/assets/img/quote-form/quote-img-2.png" alt="quote img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="quote-form-one__content">
                                    <h2 className="quote-form-one__title">Get in touch</h2>
                                    <p className="mb-40">Projects case study environmental stewardship has impacted economical.</p>
                                    <form onSubmit={handleSubmit} className="contact-quote-form">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="rounded-0" 
                                                    placeholder="Your name"
                                                    required 
                                                />
                                            </div>
                                            <div className="col-xl-6">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="rounded-0" 
                                                    placeholder="Your email"
                                                    required 
                                                />
                                            </div>
                                            <div className="col-xl-6">
                                                <input 
                                                    type="text" 
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="rounded-0" 
                                                    placeholder="Your phone" 
                                                />
                                            </div>
                                            <div className="col-xl-6">
                                                <input 
                                                    type="text" 
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="rounded-0" 
                                                    placeholder="Your subject" 
                                                />
                                            </div>
                                            <div className="col-xl-12">
                                                <textarea 
                                                    name="message" 
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="rounded-0" 
                                                    placeholder="Type your message..."
                                                    required
                                                ></textarea>
                                                <button type="submit" className="contact-btn rr-bounce-up rounded-0">
                                                    <i className="fab fa-whatsapp" style={{marginRight: '8px'}}></i>
                                                    Send via WhatsApp
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

export default QuoteFormTwo;