import React, { useState } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './sidebar';
import Link from 'next/link';

const HeaderFour = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <header>
                <div id="header-sticky" className="header-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                <div className="header__main-content-wrapper d-flex align-items-center justify-content-between p-relative">
                                    <div className="header__main-left">
                                        <div className="header__logo">
                                            <Link href="/" className="logo-dark">
                                                <img
                                                    src="/assets/img/logo/logo-white.png"
                                                    alt="groupbuyseotool logo"
                                                    width={180}
                                                    height={42}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="main-menu d-none d-xl-block text-center">
                                        <nav id="mobile-menu" aria-label="Primary">
                                            <NavMenu />
                                        </nav>
                                    </div>
                                    <div className="header__main-right">
                                        <a
                                            href="/pricing"
                                            className="gb-btn gb-btn-primary gb-header-cta"
                                        >
                                            Explore Plans
                                        </a>
                                        <button
                                            onClick={() => setIsActive(true)}
                                            className="side-toggle"
                                            aria-label="Open menu"
                                        >
                                            <span className="menu__bar">
                                                <span className="bar-icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Sidebar isActive={isActive} setIsActive={setIsActive} />
            <div className="body-overlay"></div>
        </>
    );
};

export default HeaderFour;
