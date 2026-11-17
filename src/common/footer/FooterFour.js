import React from 'react';
import Link from 'next/link';

const DEFAULT_BLURB =
    'groupbuyseotool offers affordable group access to premium SEO tools for freelancers, agencies and solopreneurs. We are an independent service and are not affiliated with Ahrefs, Semrush or Moz.';

const FooterFour = ({ blurb = DEFAULT_BLURB }) => {
    return (
        <footer>
            <div className="footer-four">
                <div className="container">
                    <div className="footer-top pt-120 pb-55">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                                <div className="footer__widget footer-col-1 mb-30">
                                    <div className="footer-widget__column footer-widget__about">
                                        <div className="footer-widget__about-logo">
                                            <Link href="/">
                                                <img src="/assets/img/logo/logo-white.png" alt="Group Buy SEO Tools" />
                                            </Link>
                                        </div>
                                        <p className="footer-widget__about-text">
                                            {blurb}
                                        </p>
                                        <div className="social-hvr">
                                            <a href="/" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="/" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="/" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-5">
                                <div className="footer__widget mb-30">
                                    <h3 className="footer-widget__title">Product</h3>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/tools">SEO Tools</Link></li>
                                        <li><Link href="/pricing">Pricing</Link></li>
                                        <li><Link href="/about">About</Link></li>
                                        <li><Link href="/faq">FAQ</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-5">
                                <div className="footer__widget mb-30">
                                    <h3 className="footer-widget__title">Support</h3>
                                    <ul>
                                        <li><Link href="/contact">Contact</Link></li>
                                        <li><Link href="/faq">Help Center</Link></li>
                                        <li><Link href="/pricing">Plans</Link></li>
                                        <li><Link href="/tools">Tools list</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                                <div className="footer__widget footer-col-4 mb-30">
                                    <h3 className="footer-widget__title">Stay ahead</h3>
                                    <div className="footer-subscriber-form">
                                        <form action="#" onSubmit={(e) => e.preventDefault()}>
                                            <input type="email" placeholder="Enter your email" />
                                            <button type="submit" aria-label="Subscribe">
                                                <i className="fa-light fa-arrow-right"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="subscriber-agreement">
                                        <input type="checkbox" name="agree" id="agree" />
                                        <p>I agree to the <Link href="/">Privacy Policy</Link>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="copyright">
                                    <p>© {new Date().getFullYear()} Group Buy SEO Tools. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-bottom-menu">
                                    <ul>
                                        <li><Link href="/">Privacy Policy</Link></li>
                                        <li><Link href="/">Terms of Service</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterFour;
