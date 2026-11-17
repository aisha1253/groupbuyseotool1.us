import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';

const FaqGroupBuy = () => {
    return (
        <>
            {/* faq group buy start */}
            <div className="faq-group-buy pt-200 pb-120">
                <div className="container">
                    {/* Hero Section */}
                    <div className="row mb-60">
                        <div className="col-xl-12 text-center">
                            <h1 className="section-title__two-title wow fadeInUp" data-wow-delay=".3s" style={{fontSize: '48px', marginBottom: '20px'}}>
                                Frequently Asked Questions
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s" style={{fontSize: '18px', color: '#666', marginBottom: '30px'}}>
                                Find answers to common questions about our Group Buy SEO Tools services
                            </p>
                            <a 
                                href="https://seotoolsgroupbuy.us/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="wow fadeInUp"
                                data-wow-delay=".7s"
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

                    {/* General Questions */}
                    <div className="row mb-50">
                        <div className="col-xl-12">
                            <div className="faq-category wow fadeInUp" data-wow-delay=".3s">
                                <h2 style={{fontSize: '32px', marginBottom: '30px', color: '#333', fontWeight: 'bold'}}>General Questions</h2>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What does Group Buy SEO Tools offer?</Accordion.Header>
                                        <Accordion.Body>
                                            We offer premium SEO, PPC, Ecommerce, and Spy tools for freelancers, bloggers, and small business owners. If you want to be listed in search engines, optimize your ads, study products or competitors, then our SEO tools group buy service is the perfect solution for you.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What is an SEO group buy tool?</Accordion.Header>
                                        <Accordion.Body>
                                            An SEO group buy tool is a platform that provides access to premium SEO tools at a significantly lower price than their original cost. Group buy tools work by pooling resources and purchasing bulk licenses for various SEO tools, then reselling access to individual users at affordable rates.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How is SEO group buy different from individual subscriptions?</Accordion.Header>
                                        <Accordion.Body>
                                            SEO group buy allows users to access premium SEO tools at a lower cost by sharing resources and purchasing bulk licenses. Individual subscriptions are more expensive but offer exclusive access to the tools for a specific period. Group buy provides the same functionality at a fraction of the cost.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Are SEO group buy tools legal?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, using SEO group buy tools is completely legal. The group buy provider purchases legitimate subscriptions to the tools, and users access the tools through the provider's secure system. However, it's important to choose a reputable provider that maintains proper licensing agreements.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    {/* How It Works */}
                    <div className="row mb-50">
                        <div className="col-xl-12">
                            <div className="faq-category wow fadeInUp" data-wow-delay=".3s">
                                <h2 style={{fontSize: '32px', marginBottom: '30px', color: '#333', fontWeight: 'bold'}}>How It Works</h2>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How does the access system work?</Accordion.Header>
                                        <Accordion.Body>
                                            We offer One-Click Access for all operating systems and Firefox Browser for some tools. We share VPS (RDP) for those who don't want to use the browser on their PC or Mac users. Tools shared via one-click access can be used on Windows, Linux, Mac, ChromeBook, and even on mobile phones.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Will I get usernames and passwords?</Accordion.Header>
                                        <Accordion.Body>
                                            No, we don't share usernames or passwords directly. You will use our SEO Group Buy Tools via our secure system, which contains all tool logins, so you don't need individual logins for any tools. However, some tools can be shared via direct login credentials when necessary.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Do you provide individual accounts for each user?</Accordion.Header>
                                        <Accordion.Body>
                                            No, we offer shared SEO group buy tools, which means sharing accounts with other users. We purchase multiple-tool subscriptions and then share them with users at significantly reduced rates, making premium tools affordable for everyone.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Do you provide private accounts?</Accordion.Header>
                                        <Accordion.Body>
                                            No, we don't share private accounts as this is an SEO Group Buy service. All tools are shared with multiple users to keep costs low. This shared model allows us to offer premium tools at incredibly affordable prices.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    {/* Account & Sharing */}
                    <div className="row mb-50">
                        <div className="col-xl-12">
                            <div className="faq-category wow fadeInUp" data-wow-delay=".3s">
                                <h2 style={{fontSize: '32px', marginBottom: '30px', color: '#333', fontWeight: 'bold'}}>Account & Sharing</h2>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Can I share my account access?</Accordion.Header>
                                        <Accordion.Body>
                                            No, sharing is strictly not allowed. You're already paying a significantly reduced price. If you need multiple accounts for your office and home, you can easily purchase multiple subscriptions at our affordable rates. If you're interested in reselling our tools, please contact us at admin@groupbuyseotool.us
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What happens if I share my account?</Accordion.Header>
                                        <Accordion.Body>
                                            We have an advanced monitoring system that detects account sharing. Once we detect any unauthorized sharing, your account will be permanently banned without refund. We take this policy seriously to maintain service quality for all legitimate users.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How does your monitoring system work?</Accordion.Header>
                                        <Accordion.Body>
                                            We employ one of the most sophisticated monitoring systems in the industry. It tracks access patterns, IP addresses, and usage behavior to detect any unauthorized account sharing. This ensures fair access for all paying subscribers.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    {/* Technical Issues */}
                    <div className="row mb-50">
                        <div className="col-xl-12">
                            <div className="faq-category wow fadeInUp" data-wow-delay=".3s">
                                <h2 style={{fontSize: '32px', marginBottom: '30px', color: '#333', fontWeight: 'bold'}}>Technical Issues</h2>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What happens if a tool doesn't work?</Accordion.Header>
                                        <Accordion.Body>
                                            We maintain multiple accounts for each SEO tool. If one account is not working, you can seamlessly switch to another account for the same tool. This redundancy ensures you won't face interruptions when accessing your SEO Tools Group Buy plans.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Do you offer service for Mac users?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes! Our service works on all major platforms including Windows, MAC, Google Chrome OS, and almost all major flavors of Linux. We provide VPS access for Mac users to use portable browsers, ensuring seamless functionality across all devices.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How often are the SEO group buy tools updated?</Accordion.Header>
                                        <Accordion.Body>
                                            The frequency of tool updates varies depending on the tool provider. However, most SEO group buy tools are updated regularly to ensure users have access to the latest features and functionalities. We maintain active subscriptions to provide you with up-to-date tools.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Are the SEO group buy tools reliable?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, absolutely! We maintain 99.9% uptime and use legitimate, licensed versions of all tools. We've built our reputation on providing reliable access to genuine SEO tools. Our monitoring systems and backup accounts ensure consistent service availability.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="row mb-50">
                        <div className="col-xl-12 text-center wow fadeInUp" data-wow-delay=".3s">
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

                    {/* Pricing & Payment */}
                    <div className="row mb-50">
                        <div className="col-xl-12">
                            <div className="faq-category wow fadeInUp" data-wow-delay=".3s">
                                <h2 style={{fontSize: '32px', marginBottom: '30px', color: '#333', fontWeight: 'bold'}}>Pricing & Payment</h2>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Do you offer refunds?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, we offer a 24-hour refund policy without any questions for new users. For existing users, if tools are not working properly, you can get a partial refund by contacting our support team. We're committed to customer satisfaction.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How much can I save by using SEO group buy tools?</Accordion.Header>
                                        <Accordion.Body>
                                            You can save anywhere from 50% to 90% off the regular price of premium SEO tools. For example, if individual subscriptions would cost you $500-$1000 per month, our group buy plans start at just $10-$50 per month, giving you access to the same tools.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Is the SEO group buy a one-time purchase?</Accordion.Header>
                                        <Accordion.Body>
                                            No, SEO group buy is a subscription-based service. Users pay a monthly or yearly fee to access the platform and its tools. This allows us to maintain active licenses and provide continuous access to updated versions of all tools.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Can I cancel my subscription anytime?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, you can cancel your SEO group buy tool subscription at any time. We don't believe in locking you into long-term contracts. Simply contact our support team, and we'll process your cancellation request promptly.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    {/* Tools & Features */}
                    <div className="row mb-50">
                        <div className="col-xl-12">
                            <div className="faq-category wow fadeInUp" data-wow-delay=".3s">
                                <h2 style={{fontSize: '32px', marginBottom: '30px', color: '#333', fontWeight: 'bold'}}>Tools & Features</h2>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Is there a limit to the number of SEO tools I can access?</Accordion.Header>
                                        <Accordion.Body>
                                            The number of SEO tools you can access depends on your chosen pricing plan. Our plans range from basic access to comprehensive packages with 50+ premium tools. Check our pricing page to find the plan that best suits your needs.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Can I trust the data provided by SEO group buy tools?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes! The data provided by our SEO group buy tools is completely reliable and accurate. We use legitimate, licensed versions of all tools, ensuring you get the same quality data as if you purchased the tools individually. Our tools access the same databases and APIs as the original subscriptions.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What SEO tools are included in the group buy?</Accordion.Header>
                                        <Accordion.Body>
                                            We provide access to 50+ premium SEO tools including AHREFS, SEMrush, Moz Pro, Majestic, Grammarly, Canva Pro, ChatGPT, Ubersuggest, SpyFu, and many more. Each plan offers different combinations of tools to match various business needs and budgets.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="row mb-60">
                        <div className="col-xl-12">
                            <div className="faq-category wow fadeInUp" data-wow-delay=".3s">
                                <h2 style={{fontSize: '32px', marginBottom: '30px', color: '#333', fontWeight: 'bold'}}>Support</h2>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How do I choose the right SEO group buy provider?</Accordion.Header>
                                        <Accordion.Body>
                                            When choosing an SEO group buy provider, look for: (1) Access to the tools you need, (2) Good reputation and reviews, (3) Reliable 24/7 customer support, (4) High uptime guarantee (99.9%+), (5) Trial period or money-back guarantee. We offer all of these features to ensure your satisfaction.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How can I contact support?</Accordion.Header>
                                        <Accordion.Body>
                                            We offer 24/7 premium support through multiple channels including Skype, Live Chat, and Ticket Support. All your queries will be answered within a couple of hours. You can also email us at admin@groupbuyseotool.us for any assistance.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="row mb-50">
                        <div className="col-xl-12 text-center wow fadeInUp" data-wow-delay=".3s">
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

                    {/* Contact CTA */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="faq-cta wow fadeInUp" data-wow-delay=".3s" style={{
                                background: 'linear-gradient(135deg, #3A57FC 0%, #FF8800 100%)',
                                borderRadius: '20px',
                                padding: '60px 40px',
                                textAlign: 'center',
                                color: 'white'
                            }}>
                                <h2 style={{color: 'white', marginBottom: '20px', fontSize: '36px'}}>Still Have Questions?</h2>
                                <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '30px', fontSize: '18px'}}>
                                    Can't find the answer you're looking for? Our support team is here to help you 24/7.
                                </p>
                                <Link href="/contact" className="thm-btn-2" style={{
                                    background: 'white',
                                    color: '#3A57FC',
                                    padding: '15px 40px',
                                    borderRadius: '30px',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontWeight: 'bold',
                                    fontSize: '16px'
                                }}>
                                    Contact Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq group buy end */}
        </>
    );
};

export default FaqGroupBuy;

