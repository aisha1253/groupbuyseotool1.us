import React, { useState } from 'react';

const QuoteFormTwo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const whatsappNumber = '15205636362';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMessage = `*New Contact Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="gb-contact">
            <div className="container">
                <div className="gb-contact__grid">
                    <div className="gb-contact__panel">
                        <h3>Ask anything. Get real answers.</h3>
                        <p>
                            Talk to our team about plans, tool access, or agency needs — we reply fast on WhatsApp.
                        </p>
                    </div>
                    <div className="gb-contact__form">
                        <div className="gb-eyebrow">Contact</div>
                        <h2>Get in touch</h2>
                        <p>Tell us what you need and we&apos;ll help you pick the right plan.</p>
                        <form onSubmit={handleSubmit} className="contact-quote-form">
                            <div className="row">
                                <div className="col-xl-6">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        placeholder="Your phone"
                                    />
                                </div>
                                <div className="col-xl-6">
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Your subject"
                                    />
                                </div>
                                <div className="col-xl-12">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Type your message..."
                                        required
                                    />
                                    <button type="submit" className="contact-btn">
                                        <i className="fab fa-whatsapp" style={{ marginRight: 8 }} />
                                        Send via WhatsApp
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteFormTwo;
