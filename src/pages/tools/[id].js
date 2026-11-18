import Link from "next/link";
import SEO from "@/common/seo/Seo";
import HeaderFour from "@/common/header/HeaderFour";
import FooterFour from "@/common/footer/FooterFour";
import { ProductsData, getProductPrice } from "@/data/products";

const details = [
  {
    icon: "fa-solid fa-bolt",
    title: "Simple Access Process",
    text: "Choose this tool, complete your order, and follow the access instructions you receive. Activation and availability depend on the selected tool.",
  },
  {
    icon: "fa-solid fa-coins",
    title: "Lower Monthly Costs",
    text: "Use this tool through affordable shared access instead of paying for a full individual subscription, so it fits into a smaller SEO budget.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Support When You Need Help",
    text: "Have a question about access or setup? Contact our support team for guidance and troubleshooting whenever you need it.",
  },
];

const ToolDetailPage = ({ tool }) => {
  const price = getProductPrice(tool.productId);

  const included = [
    `Shared group buy access to ${tool.name} instead of a full individual subscription`,
    "Buy Now adds this tool straight to your cart so checkout takes a few clicks",
    "Access instructions are shared with you once your order is confirmed",
    "Runs in your browser, so there is nothing heavy to download and install",
    "A lower monthly cost than the standard single-user subscription",
    "Our support team is available any time you need setup help",
  ];

  const steps = [
    {
      title: "Choose This Tool",
      text: `Review the information on this page and tap Buy Now to add ${tool.name} to your cart.`,
    },
    {
      title: "Complete Your Order",
      text: "Finish the checkout on the cart page using the payment option that suits you best.",
    },
    {
      title: "Receive Access",
      text: "Follow the access instructions shared with you to sign in and start working.",
    },
    {
      title: "Get Help If Needed",
      text: "Reach out to support with any setup question so you can start using the tool with confidence.",
    },
  ];

  const specs = [
    { label: "Tool", value: tool.name },
    { label: "Category", value: tool.category },
    { label: "Access Type", value: "Shared group buy access" },
    { label: "Pricing", value: price || "Shown on the cart page" },
    { label: "Purchase", value: "Add to cart with Buy Now" },
    { label: "Support", value: "Included" },
  ];

  return (
    <>
      <SEO pageTitle={`${tool.name} - Buy Now`} />
      <HeaderFour />

      <section
        className="gb-hero gb-detail-hero"
        style={{ minHeight: "auto", paddingTop: "120px", paddingBottom: "80px" }}
      >
        <div className="gb-hero__glow gb-hero__glow--1" aria-hidden="true" />
        <div className="gb-hero__glow gb-hero__glow--2" aria-hidden="true" />
        <div className="gb-hero__grid" aria-hidden="true" />
        <div className="container">
          <div className="gb-detail-hero__inner">
            <aside className="gb-detail-hero__aside">
              <div className="gb-detail-hero__logocard">
                <img
                  src={tool.logo || tool.icon}
                  alt={`${tool.name} logo`}
                  onError={(e) => {
                    e.currentTarget.src = "/assets/img/services/service-3-1.svg";
                  }}
                />
                <span className="gb-detail-hero__badge">{tool.category}</span>
                <p className="gb-detail-hero__logoname">{tool.name}</p>
                <p className="gb-detail-hero__logosub">Shared Group Buy Access</p>
              </div>
            </aside>

            <div className="gb-detail-hero__main">
              <span className="gb-eyebrow">{tool.category}</span>
              <h1 className="gb-hero__brand">{tool.name}</h1>
              {price && <p className="gb-hero__price">{price}</p>}
              <p className="gb-hero__lead">{tool.description}</p>
              <div className="gb-hero__actions">
                <a
                  href={tool.cartUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gb-btn gb-btn-primary"
                >
                  Buy Now
                </a>
                <Link href="/#single-tools" className="gb-btn gb-btn-secondary">
                  Back to All Tools
                </Link>
              </div>
              <ul className="gb-hero__meta">
                <li>{tool.category}</li>
                <li>Shared Group Buy Access</li>
                <li>Support When You Need Help</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="gb-section">
        <div className="container">
          <div className="gb-section__head">
            <h2>{tool.name} Details</h2>
            <p>
              Everything you need to know about this tool is below. Buy Now adds
              it directly to your cart, and you can complete the order on the
              checkout page.
            </p>
          </div>

          <div className="gb-features">
            {details.map((item) => (
              <article key={item.title} className="gb-feature">
                <div className="gb-feature__icon" aria-hidden="true">
                  <i className={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gb-section gb-section--tint">
        <div className="container">
          <div className="gb-section__head">
            <h2>What Is Included With {tool.name}</h2>
            <p>
              Here is a quick look at what you get when you order this tool
              through groupbuyseotool.
            </p>
          </div>

          <div className="gb-checklist">
            {included.map((item) => (
              <div key={item} className="gb-checklist__item">
                <i className="fa-solid fa-circle-check" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gb-section">
        <div className="container">
          <div className="gb-section__head">
            <h2>How It Works</h2>
            <p>
              From choosing {tool.name} to signing in, the whole process takes
              only a few steps.
            </p>
          </div>

          <div className="gb-steps">
            {steps.map((step) => (
              <article key={step.title} className="gb-step">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gb-section gb-section--tint">
        <div className="container">
          <div className="gb-section__head">
            <h2>{tool.name} at a Glance</h2>
            <p>
              A short summary of this tool so you can confirm it matches what
              you need before you order.
            </p>
          </div>

          <div className="gb-table-wrap">
            <table className="gb-table">
              <tbody>
                {specs.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="gb-tools-more">
            <a
              href={tool.cartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gb-btn gb-btn-primary"
            >
              Buy Now
            </a>
          </div>

          <p className="gb-note" style={{ textAlign: "center" }}>
            Looking for a full package instead?{" "}
            <Link href="/#pricing">Compare the available plans.</Link>
          </p>
        </div>
      </section>

      <FooterFour />
    </>
  );
};

export async function getStaticPaths() {
  const ids = Array.from(
    new Set(ProductsData.map((product) => String(product.productId)))
  );

  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const tool = ProductsData.find(
    (product) => String(product.productId) === String(params.id)
  );

  if (!tool) {
    return { notFound: true };
  }

  return { props: { tool } };
}

export default ToolDetailPage;
