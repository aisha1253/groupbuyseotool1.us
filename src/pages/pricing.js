import SEO from "../common/seo/Seo";
import HeaderFour from "../common/header/HeaderFour";
import FooterFour from "../common/footer/FooterFour";
import HowToGetStarted from "../components/service/HowToGetStarted";

const PricingPage = () => {
    return (
        <>
            <SEO pageTitle={"Pricing Plans - Group Buy SEO Tools"} />
            <HeaderFour />
            
            {/* pricing page start */}
            <div className="pricing-page pt-140 pb-120" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center mb-50 wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__two-title" style={{color: 'white'}}>Complete Pricing Plans</h2>
                            <p className="mt-20" style={{color: 'rgba(255,255,255,0.8)'}}>Choose the perfect plan for your SEO needs</p>
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
                                    <ul className="pricing-single__list" style={{listStyle: 'none', padding: 0, marginBottom: '30px', maxHeight: '400px', overflowY: 'auto'}}>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ SMRu$H</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Canva</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Grammarly</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Woorank</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spin Rewriter</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Ubersuggest</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Ispionage</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ StockUnlimited</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ CBEngine</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Buzzstream</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Unbounce</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Quillbot AI</li>
                                    </ul>
                                    <div className="pricing-single__btn text-center">
                                        <a href="#" className="rr-btn-style-1" style={{
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
                                    <ul className="pricing-single__list" style={{listStyle: 'none', padding: 0, marginBottom: '30px', maxHeight: '400px', overflowY: 'auto'}}>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ SMRu$H</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Moz Pro</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Majestic</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Ubersuggest</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spyfu</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Ispionage</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ KwFinder</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Pexda</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ SaleHoo</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ StockUnlimited</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spin Rewriter</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Grammarly</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Buzzsumo</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Indexifications</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Lynda</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Woorank</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Envato Elements</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Skills Share</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spamzilla</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Cognitive SEO</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Canva Pro</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Crello</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ CBEngine</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Buzzstream</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Vyond</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ LongTailPro</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Article Builder</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ WordAi</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Seo Profiler</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ SE Ranking</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Themes/Plugin WordPress</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spinner Português</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Fotojet</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Audioblocks</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Storyblocks</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Videoblocks</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Unbounce</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Quillbot</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Chat GPT</li>
                                    </ul>
                                    <div className="pricing-single__btn text-center">
                                        <a href="#" className="rr-btn-style-1" style={{
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
                                    <ul className="pricing-single__list" style={{listStyle: 'none', padding: 0, marginBottom: '30px', maxHeight: '400px', overflowY: 'auto'}}>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ ARHFE$</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ SMRu$H</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Moz Pro</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Ubersuggest</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Majestic</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ keywordtool.io</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ KwFinder</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Grammarly</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Helium 10</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Jungle Scout</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Chat GPT</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spyfu</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ EcomHunt</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Ispionage</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Pexda</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ SaleHoo</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ StockUnlimited</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spin Rewriter</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Buzzsumo</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Netflix</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Indexifications</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Lynda</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Woorank</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Envato Elements</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Skills Share</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Freepik</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spamzilla</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Cognitive SEO</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Canva Pro</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Crello</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ CBEngine</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Buzzstream</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Sellthetrend</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Vyond</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ LongTailPro</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Article Builder</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ WordAi</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Seo Profiler</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ SE Ranking</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Themes/Plugin WordPress</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Spinner Português</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Fotojet</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Audioblocks</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Storyblocks</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Videoblocks</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Unbounce</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Jasper Ai</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Quillbot</li>
                                        <li style={{padding: '8px 0', borderBottom: '1px solid #f0f0f0', color: '#333'}}>✓ Chat GPT</li>
                                    </ul>
                                    <div className="pricing-single__btn text-center">
                                        <a href="#" className="rr-btn-style-1" style={{
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
            {/* pricing page end */}
            
            {/* how to get started section */}
            <HowToGetStarted />
            {/* how to get started section end */}
            
            <FooterFour />
        </>
    );
};

export default PricingPage;