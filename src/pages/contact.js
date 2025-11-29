import SEO from "../common/seo/Seo";
import HeaderFour from "../common/header/HeaderFour";
import ContactInfo from "../components/contact/ContactInfo";
import FooterFour from "../common/footer/FooterFour";

export default function ContactPage() {
	return (
		<>
			<SEO pageTitle={"Contact Us - Group Buy SEO Tools"} />
			<HeaderFour />
			<ContactInfo />
			<FooterFour />
		</>
	);
}