import React from "react";

const HeroFour = () => {

    return (
        <>
            {/* hero four start */}
            <div className="hero-four d-flex align-items-end" style={{paddingTop: '80px', paddingBottom: '60px'}}>
                <div className="hero-four__img-1">
                    <img src="/assets/img/shape/4.svg" alt="shape img" />
                </div>
                <div className="hero-four__img-2">
                    <img src="/assets/img/shape/2.svg" alt="shape img" />
                </div>
                <div className="hero-four__img-3">
                    <img src="/assets/img/shape/3.svg" alt="shape img" />
                </div>
                <div className="hero-four__img-4">
                    <img src="/assets/img/shape/1.svg" alt="shape img" />
                </div>
                <div className="hero-four__img-5">
                    <img src="/assets/img/shape/10.svg" alt="shape img" />
                </div>
                <div className="hero-four__img-6">
                    <img src="/assets/img/hero/hero-4-6.png" alt="shape" />
                </div>
                <div className="hero-four__img-7">
                    <img src="/assets/img/hero/hero-4-7.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xxl-6 col-xl-7">
                            <div className="hero-four__content">
                                <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{fontSize: '48px', fontWeight: 'bold', color: '#333', marginBottom: '20px'}}>Group Buy SEO Tools</h2>
                                <p className="wow fadeInUp" data-wow-delay=".5s" style={{fontSize: '20px', color: '#666', marginBottom: '30px'}}>Access Premium SEO Tools at Unbeatable Prices</p>
                                <form action="#" className="wow fadeInUp" data-wow-delay=".7s" onSubmit={(e) => { e.preventDefault(); window.open('https://seotoolsgroupbuy.us/', '_blank'); }}>
                                    <input type="text" placeholder="seotoolsgroupbuy.us" readOnly value="seotoolsgroupbuy.us" style={{padding: '15px 20px', borderRadius: '8px', border: '1px solid #ddd', marginRight: '10px', cursor: 'default'}} />
                                    <button type="submit" className="rr-btn-style-1">Explore Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-5 text-center text-xl-end">
                            <div className="hero-four__right">
                                <div className="hero-four__img wow fadeInRight" data-wow-delay=".7s">
                                    <div className="hero-four__img0">
                                        <img src="/assets/img/hero/hero-bg-4.png" alt="hero img" />
                                    </div>
                                    <div className="hero-four__img1">
                                        <img src="/assets/img/hero/hero-4-1.png" alt="shape" />
                                    </div>
                                    <div className="hero-four__img2">
                                        <img src="/assets/img/hero/hero-4-2.png" alt="shape" />
                                    </div>
                                    <div className="hero-four__img3">
                                        <img src="/assets/img/hero/hero-4-3.png" alt="shape" />
                                    </div>
                                    <div className="hero-four__img4">
                                        <img src="/assets/img/hero/hero-4-4.png" alt="shape" />
                                    </div>
                                    <div className="hero-four__img5">
                                        <img src="/assets/img/hero/hero-4-5.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero four end */}
        </>
    )
}

export default HeroFour;