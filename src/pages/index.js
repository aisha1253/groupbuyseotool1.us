import Head from 'next/head';
import dynamic from 'next/dynamic';
import { faqItems } from '../components/home/FaqHome';

const HeaderFour = dynamic(() => import('../common/header/HeaderFour'), { ssr: true });
const HeroHome = dynamic(() => import('../components/home/HeroHome'), { ssr: true });
const BenefitsHome = dynamic(() => import('../components/home/BenefitsHome'), { ssr: true });
const ToolsHome = dynamic(() => import('../components/home/ToolsHome'), { ssr: true });
const PricingHome = dynamic(() => import('../components/home/PricingHome'), { ssr: true });
const ComparisonHome = dynamic(() => import('../components/home/ComparisonHome'), { ssr: true });
const AudienceHome = dynamic(() => import('../components/home/AudienceHome'), { ssr: true });
const HowItWorksHome = dynamic(() => import('../components/home/HowItWorksHome'), { ssr: true });
const WhyUsHome = dynamic(() => import('../components/home/WhyUsHome'), { ssr: true });
const ToolkitHome = dynamic(() => import('../components/home/ToolkitHome'), { ssr: true });
const BigDataHome = dynamic(() => import('../components/home/BigDataHome'), { ssr: true });
const SkillsHome = dynamic(() => import('../components/home/SkillsHome'), { ssr: true });
const FaqHome = dynamic(() => import('../components/home/FaqHome'), { ssr: true });
const ContactHome = dynamic(() => import('../components/home/ContactHome'), { ssr: true });
const FooterFour = dynamic(() => import('../common/footer/FooterFour'), { ssr: true });

const SITE_URL = 'https://groupbuyseotool1.us';
const PAGE_TITLE = 'groupbuyseotool: Cheap Group Buy SEO Tools for Agencies';
const PAGE_DESCRIPTION =
    'Use groupbuyseotool to get premium SEO tools access at a fraction of the cost. Ahrefs group buy, Semrush group buy and more, with instant setup.';

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'groupbuyseotool',
    url: SITE_URL,
    email: 'admin@groupbuyseotool.us',
    description: PAGE_DESCRIPTION,
};

const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'groupbuyseotool',
    url: SITE_URL,
    description: PAGE_DESCRIPTION,
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
        },
    })),
};

export default function Home() {
    return (
        <>
            <Head>
                <title>{PAGE_TITLE}</title>
                <meta name="description" content={PAGE_DESCRIPTION} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${SITE_URL}/`} />

                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content={`${SITE_URL}/`} />
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
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            </Head>

            <HeaderFour />
            <main>
                <HeroHome />
                <BenefitsHome />
                <ToolsHome />
                <PricingHome />
                <ComparisonHome />
                <AudienceHome />
                <HowItWorksHome />
                <WhyUsHome />
                <ToolkitHome />
                <BigDataHome />
                <SkillsHome />
                <FaqHome />
                <ContactHome />
            </main>
            <FooterFour />
        </>
    );
}
