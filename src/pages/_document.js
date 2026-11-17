import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-6QMNYLTS06"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-6QMNYLTS06');
                        `,
                    }}
                />
                <meta name="google-site-verification" content="vVMo50rX8Acnln0wSH7fPbC7Cb31FzB7vKYRDCPbuG0" />
                {/* favicons Icons */}
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/logo/favicon.png" />
                <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />

                <link rel="stylesheet" href="/assets/css/animate.min.css" />
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
                <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
                <link rel="stylesheet" href="/assets/css/nice-select.css" />
                <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="/assets/css/slick.css" />
                <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
                <link rel="stylesheet" href="/assets/css/seoq-core.css" />
                <link rel="stylesheet" href="/assets/css/seoq-unit.css" />
                <link rel="stylesheet" href="/assets/css/seoq-updater.css" />
                <link rel="stylesheet" href="/assets/css/gbseo-platform.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script  src="/assets/js/jquery-3.6.0.min.js"></script>
                <script src="/assets/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/js/imagesloaded.pkgd.min.js"></script>
                <script src="/assets/js/isotope.pkgd.min.js"></script>
                <script src="/assets/js/jquery.appear.min.js"></script>
                <script src="/assets/js/jquery.countup.min.js"></script>
                <script src="/assets/js/jquery.magnific-popup.min.js"></script>
                <script src="/assets/js/jquery.waypoints.min.js"></script>
                <script src="/assets/js/nice-select.js"></script>
                <script src="/assets/js/owl.carousel.min.js"></script>
                <script src="/assets/js/slick.min.js"></script>
                <script src="/assets/js/swiper-bundle.min.js"></script>
                <script src="/assets/js/wow.min.js"></script>
                <script src="/assets/js/main.js"></script>
            </body>
        </Html>
    )
}
