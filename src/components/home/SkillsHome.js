import React from 'react';

const SkillsHome = () => {
    return (
        <section id="skills" className="gb-section">
            <div className="container">
                <div className="gb-empower">
                    <div className="gb-empower__visual">
                        <img
                            src="/assets/img/skill/skill-img-1.png"
                            alt="Build practical SEO skills with research tools"
                            width={640}
                            height={480}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="gb-empower__copy">
                        <div className="gb-eyebrow">Learn. Practice. Improve.</div>
                        <h2>Build Practical SEO Skills with Powerful Research Tools</h2>
                        <p>
                            Understanding SEO becomes easier when you can explore real search data and practice using relevant software. With groupbuyseotool, you can explore premium seo tools access for keyword analysis, competitor research, content planning, and technical SEO tasks through affordable shared plans.
                        </p>
                        <p>
                            Whether you are preparing your first SEO project or refining your workflow for existing clients, practical experience can help you make better use of research tools and build confidence in your decisions.
                        </p>
                        <a href="#tools" className="gb-btn gb-btn-primary">
                            Explore SEO Tools
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsHome;
