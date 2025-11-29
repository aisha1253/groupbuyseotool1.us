import SEO from "../common/seo/Seo";
import dynamic from 'next/dynamic';

const HeaderFour = dynamic(() => import("../common/header/HeaderFour"), { ssr: true });
const HeroFour = dynamic(() => import("../components/hero/HeroFour"), { ssr: true });
const ServiceThree = dynamic(() => import("../components/service/ServiceThree"), { ssr: true });
const HorizontalAccordion = dynamic(() => import("../components/horizontal-accordion/HorizontalAccordion"), { ssr: true });
const CounterOne = dynamic(() => import("../components/counter/CounterOne"), { ssr: true });
const SkillsOne = dynamic(() => import("../components/skills/SkillsOne"), { ssr: true });
const PricingSection = dynamic(() => import("../components/pricing/PricingSection"), { ssr: true });
const HowToGetStarted = dynamic(() => import("../components/service/HowToGetStarted"), { ssr: true });
const QuoteFormTwo = dynamic(() => import("../components/quote-form/QuoteFormTwo"), { ssr: true });
const FooterFour = dynamic(() => import("../common/footer/FooterFour"), { ssr: true });

export default function Home() {
	return (
		<>
			<SEO pageTitle={"Group Buy SEO Tools - Best Digital Marketing Tools"} />
			<HeaderFour />
			<HeroFour />
			<ServiceThree />
			<PricingSection />
			<HowToGetStarted />
			<HorizontalAccordion />
			<CounterOne />
			<SkillsOne />
			<QuoteFormTwo />
			<FooterFour />
		</>
	);
}