import React, { useEffect } from 'react';

const TestimonialTwo = () => {

    useEffect(() => {

        // Testimonial Two
        if ($(".testimonial-two__active").length) {
            $(".testimonial-two__active").owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                dots: true,
                margin: 10,
                animateOut: 'fadeOutDown',
                animateIn: 'fadeInDown',
            });
        }
          
    }, []);

    return (
        <>
            {/* testimonial two start */}
            <div className="testimonial-two pt-110">
                <div className="container">
                    <div className="row">
                        <div className="mb-70">
                            <h2 className="section-title__two-title text-center wow fadeInUp" data-wow-delay=".3s">What Our Customers Say About <br /> Group Buy SEO Tools</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="testimonial-two__wrapper">
                                <div className="testimonial-two__img">
                                    <img src="/assets/img/testimonial/quote-icon.svg" alt="quote icon" />
                                </div>
                                <div className="testimonial-two__active owl-carousel">
                                    <div className="testimonial-two__single">
                                        <p>"This group buy service has been a game-changer for my digital marketing agency. Access to premium tools like Ahrefs and SEMrush at such affordable prices has helped us scale our SEO campaigns without breaking the bank. Highly recommended for anyone serious about SEO!"</p>
                                        <h4>John Mitchell</h4>
                                        <span>Digital Marketing Manager</span>
                                    </div>
                                    <div className="testimonial-two__single">
                                        <p>"I've been using this service for over 6 months now and the uptime is incredible. Having access to 50+ premium SEO tools for just a fraction of the cost has transformed how I manage my client projects. Customer support is responsive and helpful too!"</p>
                                        <h4>Sarah Thompson</h4>
                                        <span>SEO Consultant</span>
                                    </div>
                                    <div className="testimonial-two__single">
                                        <p>"As a small business owner, I couldn't afford individual subscriptions to all these tools. This group buy platform gave me access to professional-grade SEO tools that helped me improve my website's ranking significantly. Best investment I've made for my business!"</p>
                                        <h4>Michael Rodriguez</h4>
                                        <span>E-commerce Business Owner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial two end */}
        </>
    )
}

export default TestimonialTwo;