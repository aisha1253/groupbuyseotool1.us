import SEO from "../common/seo/Seo";
import HeaderFour from "../common/header/HeaderFour";
import FaqGroupBuy from "../components/faq/FaqGroupBuy";
import FooterFour from "../common/footer/FooterFour";

export default function FaqPage() {
	return (
		<>
			<SEO pageTitle={"FAQ - Group Buy SEO Tools"} />
			<HeaderFour />
			<FaqGroupBuy />
			<FooterFour />
		</>
	);
}