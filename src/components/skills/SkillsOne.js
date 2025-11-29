import React, { useEffect } from 'react';
import Link from 'next/link';

const SkillsOne = () => {

    useEffect(() => {

        // Popular Causes Progress Bar
        if ($(".count-bar").length) {
            $(".count-bar").appear(
                function() {
                    var el = $(this);
                    var percent = el.data("percent");
                    $(el).css("width", percent).addClass("counted");
                }, {
                    accY: -50
                }
            );
        }

        //Progress Bar / Levels
        if ($(".progress-levels .progress-box .bar-fill").length) {
            $(".progress-box .bar-fill").each(
                function() {
                    $(".progress-box .bar-fill").appear(function() {
                        var progressWidth = $(this).attr("data-percent");
                        $(this).css("width", progressWidth + "%");
                    });
                }, {
                    accY: 0
                }
            );
        }
          
    }, []);

    return (
        <>
            {/* skill one start */}
            <div className="skill-one">
                <div className="row no-gutters">
                    <div className="col-xl-6">
                        <div className="skill-side__left">
                            <div className="skill__img-animation1">
                                <img src="/assets/img/skill/round-top.png" alt="img" />
                            </div>
                            <div className="skill-left__img wow fadeInLeft" data-wow-delay=".3s">
                                <img src="/assets/img/skill/skill-img-1.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="skill-side__right">
                            <div className="skill__img-animation2">
                                <img src="/assets/img/skill/angle-right.png" alt="img" />
                            </div>
                            <div className="skill__img-animation3">
                                <img src="/assets/img/skill/close-1.png" alt="img" />
                            </div>
                            <div className="skill__img-animation4">
                                <img src="/assets/img/skill/close-2.png" alt="img" />
                            </div>
                            <div className="skill__img-animation5">
                                <img src="/assets/img/skill/angle-bottom.png" alt="img" />
                            </div>
                            <h2 className="section-title__one-title wow fadeInUp" data-wow-delay=".3s">Empowering Your Digital Success with Premium SEO Tools</h2>
                            <p className="section-title__one-tagline wow fadeInUp" data-wow-delay=".5s">Access the world's leading SEO tools at unbeatable prices. Our group buy <br /> platform provides you with premium tools like Ahrefs, SEMrush, Moz, and 50+ <br /> more to accelerate your website's growth and online visibility.</p>
                            <div className="skill-one__progress wow fadeInUp" data-wow-delay=".7s">
                                <div className="skill-one__progress-single">
                                    <h4 className="skill-one__progress-title">Customer Satisfaction</h4>
                                    <div className="bar">
                                        <div className="bar-inner bar-bg-1 count-bar counted" data-percent="98%">
                                            <div className="count-text">98%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-one__progress-single">
                                    <h4 className="skill-one__progress-title">Tools Availability</h4>
                                    <div className="bar">
                                        <div className="bar-inner bar-bg-2 count-bar counted" data-percent="99%">
                                            <div className="count-text">99%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-one__progress-single">
                                    <h4 className="skill-one__progress-title">Cost Savings</h4>
                                    <div className="bar">
                                        <div className="bar-inner bar-bg-3 count-bar counted" data-percent="95%">
                                            <div className="count-text">95%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href="/pricing" className="thm-btn-2 rr-bounce-up mt-55 wow fadeInUp" data-wow-delay=".9s">View Pricing Plans</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* skill one end */}
        </>
    )
}

export default SkillsOne;