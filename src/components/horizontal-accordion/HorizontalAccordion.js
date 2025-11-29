import React, { useEffect } from 'react';
import Link from 'next/link';

const HorizontalAccordion = () => {
    
    useEffect(() => {

        function mediaSize() {
            /* Set the matchMedia */
            if (window.matchMedia('(min-width: 768px)').matches) {
                const panels = document.querySelectorAll('.col-custom')
                panels.forEach(panel => {
                    panel.addEventListener('click', () => {
                        removeActiveClasses()
                        panel.classList.add('active')
                    })
                })
    
                function removeActiveClasses() {
                    panels.forEach(panel => {
                        panel.classList.remove('active')
                    })
                }
    
            } else {
                /* Reset for CSS changes â€“ Still need a better way to do this! */
                $(".col-custom ").addClass("active");
            }
        };
        /* Call the function */
        mediaSize();
        /* Attach the function to the resize event listener */
        window.addEventListener('resize', mediaSize, false);
            
    }, []);
    return (
        <>
            {/* horizontal accordion start */}
            <div className="horizontal-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section-title__two d__column-two mb-50 wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section-title__two-title">Understanding Group Buy SEO Tools</h2>
                                <div className="section-title__two-right">
                                    <Link href="https://seotoolsgroupbuy.us/" className="thm-btn-2 rr-bounce-up" target="_blank" rel="noopener noreferrer">Explore Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row-custom-wrapper wow fadeInUp" data-wow-delay=".5s">
                            <div className="row-custom">
                                <div className="col-custom active">
                                    <div className="rr-panel-item">
                                        <div className="rr-panel-content">
                                            <h4 className="rr-panel-title child-one">01. Superb Uptime</h4>
                                        </div>
                                    </div>
                                    <div className="rr-panel-item-2">
                                        <div className="rr-panel-content-2">
                                            <h4 className="rr-panel-title-2">Superb Uptime</h4>
                                            <div className="rr-panel-content__img">
                                                <img src="/assets/img/accordion/1.jpg" alt="img" />
                                                <h3>You can easily access any SEO tools with our special self-developed program with 99.9% uptime.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom">
                                    <div className="rr-panel-item">
                                        <div className="rr-panel-content">
                                            <h4 className="rr-panel-title child-one">02. Premium Support</h4>
                                        </div>
                                    </div>
                                    <div className="rr-panel-item-2">
                                        <div className="rr-panel-content-2">
                                            <h4 className="rr-panel-title-2">Premium Support 24/7</h4>
                                            <div className="rr-panel-content__img">
                                                <img src="/assets/img/accordion/2.jpg" alt="img" />
                                                <h3>With our 24/7 support, all your queries will be answered in a couple of hours via Skype, Live Chat & Ticket Support.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom">
                                    <div className="rr-panel-item">
                                        <div className="rr-panel-content">
                                            <h4 className="rr-panel-title child-one">03. Lowest Price</h4>
                                        </div>
                                    </div>
                                    <div className="rr-panel-item-2">
                                        <div className="rr-panel-content-2">
                                            <h4 className="rr-panel-title-2">Lowest Price Ever</h4>
                                            <div className="rr-panel-content__img">
                                                <img src="/assets/img/accordion/3.jpg" alt="img" />
                                                <h3>High-quality service at an amazing monthly rate which is super affordable. No hidden charges make us the best group buy SEO tools provider.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom">
                                    <div className="rr-panel-item">
                                        <div className="rr-panel-content">
                                            <h4 className="rr-panel-title child-one">04. Instant Access</h4>
                                        </div>
                                    </div>
                                    <div className="rr-panel-item-2">
                                        <div className="rr-panel-content-2">
                                            <h4 className="rr-panel-title-2">Instant Access</h4>
                                            <div className="rr-panel-content__img">
                                                <img src="/assets/img/accordion/4.jpg" alt="img" />
                                                <h3>We offer instant access to our self-developed program within seconds upon payment.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom">
                                    <div className="rr-panel-item">
                                        <div className="rr-panel-content">
                                            <h4 className="rr-panel-title child-one">05. Secure & Safe</h4>
                                        </div>
                                    </div>
                                    <div className="rr-panel-item-2">
                                        <div className="rr-panel-content-2">
                                            <h4 className="rr-panel-title-2">Secure and Safe</h4>
                                            <div className="rr-panel-content__img">
                                                <img src="/assets/img/accordion/5.jpg" alt="img" />
                                                <h3>Nothing to worry about—no questionable installation program, or any sort of VPS. Our original SEO buy group tools are safe.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* horizontal accordion end */}
        </>
    )
}

export default HorizontalAccordion;