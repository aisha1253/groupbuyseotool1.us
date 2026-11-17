import React from 'react';

const SkillsHome = () => {
    return (
        <section id="skills" className="gb-section gb-section--tint">
            <div className="container">
                <div className="gb-empower">
                    <div className="gb-empower__visual">
                        <img
                            src="/assets/img/skill/skill-img-1.png"
                            alt="SEO skills growth with premium tools"
                            width={640}
                            height={480}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="gb-empower__copy">
                        <h2>Build Your SEO Skills with the Tools the Pros Use</h2>
                        <p>
                            Learning SEO is easier when you can practice on real platforms. With groupbuyseotool, you get premium SEO tools access that lets you test strategies, review live data and grow your skills without a large upfront investment. Whether you are landing your first client or managing your fiftieth, the right tools make your work sharper.
                        </p>
                        <a href="#pricing" className="gb-btn gb-btn-primary">
                            Start Learning with Real Tools
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsHome;
