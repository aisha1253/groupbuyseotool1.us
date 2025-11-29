import SEO from "../common/seo/Seo";
import HeaderFour from "../common/header/HeaderFour";
import ToolsGrid from "../components/tools/ToolsGrid";
import ToolsBenefits from "../components/tools/ToolsBenefits";
import FooterFour from "../common/footer/FooterFour";

export default function ToolsPage() {
	return (
		<>
			<SEO pageTitle={"SEO Tools - Premium Tools at Affordable Prices"} />
			<HeaderFour />
			<ToolsGrid />
			<ToolsBenefits />
			<FooterFour />
		</>
	);
}

