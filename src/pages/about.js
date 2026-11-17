import Head from 'next/head';
import dynamic from 'next/dynamic';
import { aboutFaqItems } from '../components/about/AboutFaq';

const HeaderFour = dynamic(() => import('../common/header/HeaderFour'), { ssr: true });
const AboutHero = dynamic(() => import('../components/about/AboutHero'), { ssr: true });
const AboutWhoWeAre = dynamic(() => import('../components/about/AboutWhoWeAre'), { ssr: true });
const AboutMission = dynamic(() => import('../components/about/AboutMission'), { ssr: true });
const AboutOffer = dynamic(() => import('../components/about/AboutOffer'), { ssr: true });
const AboutAudience = dynamic(() => import('../components/about/AboutAudience'), { ssr: true });
const AboutWhyUs = dynamic(() => import('../components/about/AboutWhyUs'), { ssr: true });
const AboutHowWeWork = dynamic(() => import('../components/about/AboutHowWeWork'), { ssr: true });
const AboutTrust = dynamic(() => import('../components/about/AboutTrust'), { ssr: true });
const AboutCta = dynamic(() => import('../components/about/AboutCta'), { ssr: true });
const AboutFaq = dynamic(() => import('../components/about/AboutFaq'), { ssr: true });
const FooterFour = dynamic(() => import('../common/footer/FooterFour'), { ssr: true });

const SITE_URL = 'https://groupbuyseotool1.us';
const PAGE_TITLE = 'About groupbuyseotool | Shared SEO Tools Made Accessible';
const PAGE_DESCRIPTION =
    'Discover groupbuyseotool, an independent service offering shared access to SEO tools with affordable plans, clear setup guidance, and helpful support.';

const ABOUT_FOOTER_BLURB =
    'groupbuyseotool helps freelancers, agencies, and website owners explore affordable shared access to useful SEO and marketing tools. Discover practical options for your SEO workflow without maintaining multiple individual premium subscriptions.';

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'groupbuyseotool',
    url: SITE_URL,
    email: 'admin@groupbuyseotool.us',
    description: PAGE_DESCRIPTION,
};

const aboutPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: PAGE_TITLE,
    url: `${SITE_URL}/about`,
    description: PAGE_DESCRIPTION,
    isPartOf: {
        '@type': 'WebSite',
        name: 'groupbuyseotool',
        url: SITE_URL,
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aboutFaqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
        },
    })),
};

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>{PAGE_TITLE}</title>
                <meta name="description" content={PAGE_DESCRIPTION} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${SITE_URL}/about`} />

                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content={`${SITE_URL}/about`} />
                <meta property="og:title" content={PAGE_TITLE} />
                <meta property="og:description" content={PAGE_DESCRIPTION} />
                <meta property="og:site_name" content="groupbuyseotool" />
                <meta property="og:image" content={`${SITE_URL}/assets/img/logo/logo.png`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={PAGE_TITLE} />
                <meta name="twitter:description" content={PAGE_DESCRIPTION} />
                <meta name="twitter:image" content={`${SITE_URL}/assets/img/logo/logo.png`} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            </Head>

            <HeaderFour />
            <main>
                <AboutHero />
                <AboutWhoWeAre />
                <AboutMission />
                <AboutOffer />
                <AboutAudience />
                <AboutWhyUs />
                <AboutHowWeWork />
                <AboutTrust />
                <AboutCta />
                <AboutFaq />
            </main>
            <FooterFour blurb={ABOUT_FOOTER_BLURB} />
        </>
    );
}
