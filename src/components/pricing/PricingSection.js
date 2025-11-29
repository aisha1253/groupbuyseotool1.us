import React, { useEffect } from 'react';
import Link from 'next/link';

const PricingSection = () => {
    useEffect(() => {
        // Fix for countup error - prevent execution
        if (typeof window !== 'undefined') {
            // Disable countup to prevent errors
            window.countUpDisabled = true;
        }
    }, []);

    return (
        <>
            {/* pricing section start */}
            <div className="pricing-section pt-140 pb-120" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center mb-50 wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__two-title" style={{color: 'white'}}>Choose Your Perfect Plan</h2>
                            <p className="mt-20" style={{color: 'rgba(255,255,255,0.8)'}}>Access premium SEO tools at affordable prices</p>
                        </div>
                    </div>
                    <div className="row">
                        {/* Lite Plan */}
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div className="pricing-single mb-30" style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '40px 30px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                <div className="pricing-single__header text-center mb-30">
                                    <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '20px'}}>Lite Plan</h3>
                                    <div className="pricing-single__price" style={{marginBottom: '30px'}}>
                                        <span className="currency" style={{fontSize: '24px', color: '#667eea'}}>$</span>
                                        <span className="amount" style={{fontSize: '48px', fontWeight: 'bold', color: '#667eea'}}>10</span>
                                        <span className="period" style={{fontSize: '16px', color: '#666'}}>/Month</span>
                                    </div>
                                </div>
                                <div className="pricing-single__content">
                                    <ul className="pricing-single__list" style={{listStyle: 'none', padding: 0, marginBottom: '30px'}}>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ SMRu$H</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Canva</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Grammarly</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Woorank</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spin Rewriter</li>
                                        <li style={{padding: '8px 0', color: '#667eea', fontWeight: 'bold'}}>+ More Tools</li>
                                    </ul>
                                    <div className="pricing-single__btn text-center">
                                        <a href="https://members.seotoolsgroupbuy.us/signup" target="_blank" rel="noopener noreferrer" className="rr-btn-style-1" style={{
                                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                            color: 'white',
                                            padding: '12px 30px',
                                            borderRadius: '25px',
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                            transition: 'transform 0.3s ease'
                                        }}>Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small Plan */}
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="pricing-single mb-30" style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '40px 30px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                border: '2px solid #667eea',
                                transform: 'scale(1.05)'
                            }}>
                                <div className="pricing-single__header text-center mb-30">
                                    <div style={{background: '#667eea', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', display: 'inline-block', marginBottom: '15px'}}>POPULAR</div>
                                    <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '20px'}}>Small Plan</h3>
                                    <div className="pricing-single__price" style={{marginBottom: '30px'}}>
                                        <span className="currency" style={{fontSize: '24px', color: '#667eea'}}>$</span>
                                        <span className="amount" style={{fontSize: '48px', fontWeight: 'bold', color: '#667eea'}}>15</span>
                                        <span className="period" style={{fontSize: '16px', color: '#666'}}>/Month</span>
                                    </div>
                                </div>
                                <div className="pricing-single__content">
                                    <ul className="pricing-single__list" style={{listStyle: 'none', padding: 0, marginBottom: '30px'}}>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ SMRu$H</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Moz Pro</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Majestic</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Ubersuggest</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spyfu</li>
                                        <li style={{padding: '8px 0', color: '#667eea', fontWeight: 'bold'}}>+ More Tools</li>
                                    </ul>
                                    <div className="pricing-single__btn text-center">
                                        <a href="https://members.seotoolsgroupbuy.us/signup" target="_blank" rel="noopener noreferrer" className="rr-btn-style-1" style={{
                                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                            color: 'white',
                                            padding: '12px 30px',
                                            borderRadius: '25px',
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                            transition: 'transform 0.3s ease'
                                        }}>Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mega Plan */}
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="pricing-single mb-30" style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '40px 30px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                <div className="pricing-single__header text-center mb-30">
                                    <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '20px'}}>Mega Plan</h3>
                                    <div className="pricing-single__price" style={{marginBottom: '30px'}}>
                                        <span className="currency" style={{fontSize: '24px', color: '#667eea'}}>$</span>
                                        <span className="amount" style={{fontSize: '48px', fontWeight: 'bold', color: '#667eea'}}>50</span>
                                        <span className="period" style={{fontSize: '16px', color: '#666'}}>/Month</span>
                                    </div>
                                </div>
                                <div className="pricing-single__content">
                                    <ul className="pricing-single__list" style={{listStyle: 'none', padding: 0, marginBottom: '30px'}}>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ ARHFE$</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ SMRu$H</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Moz Pro</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Ubersuggest</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Majestic</li>
                                        <li style={{padding: '8px 0', color: '#667eea', fontWeight: 'bold'}}>+ More Tools</li>
                                    </ul>
                                    <div className="pricing-single__btn text-center">
                                        <a href="https://members.seotoolsgroupbuy.us/signup" target="_blank" rel="noopener noreferrer" className="rr-btn-style-1" style={{
                                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                            color: 'white',
                                            padding: '12px 30px',
                                            borderRadius: '25px',
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                            transition: 'transform 0.3s ease'
                                        }}>Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* pricing section end */}
        </>
    )
}

export default PricingSection;
