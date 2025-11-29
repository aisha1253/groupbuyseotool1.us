import SEO from "../common/seo/Seo";
import HeaderFour from "../common/header/HeaderFour";
import AboutGroupBuy from "../components/about/AboutGroupBuy";
import HorizontalAccordion from "../components/horizontal-accordion/HorizontalAccordion";
import CounterOne from "../components/counter/CounterOne";
import FooterFour from "../common/footer/FooterFour";

export default function AboutPage() {
	return (
		<>
			<SEO pageTitle={"About Us - Group Buy SEO Tools"} />
			<HeaderFour />
			<AboutGroupBuy />
			<HorizontalAccordion />
			<CounterOne />
			<FooterFour />
		</>
	);
}