import React from "react";
import { getCartUrl } from "@/data/products";

const plans = [
  {
    name: "Lite Plan",
    price: "10",
    productId: 207,
    desc: "Essentials to start ranking and researching.",
    tools: ["SMRu$H", "Canva", "Grammarly", "Woorank", "Spin Rewriter"],
    popular: false,
  },
  {
    name: "Small Plan",
    price: "15",
    productId: 4,
    desc: "Best value for freelancers and small teams.",
    tools: ["SMRu$H", "Moz Pro", "Majestic", "Ubersuggest", "Spyfu"],
    popular: true,
  },
  {
    name: "Mega Plan",
    price: "50",
    productId: 97,
    desc: "Full stack access for agencies and power users.",
    tools: ["ARHFE$", "SMRu$H", "Moz Pro", "Ubersuggest", "Majestic"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="gb-section gb-pricing">
      <div className="container">
        <div className="gb-section__head">
          <div className="gb-eyebrow">Pricing</div>
          <h2>Choose your unfair advantage</h2>
          <p>
            Access premium SEO tools at affordable prices — Buy Now goes
            straight to cart.
          </p>
        </div>

        <div className="gb-price-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`gb-price${plan.popular ? " gb-price--popular" : ""}`}
            >
              {plan.popular && <div className="gb-price__badge">Popular</div>}
              <div className="gb-price__name">{plan.name}</div>
              <div className="gb-price__amount">
                <span className="cur">$</span>
                <span className="num">{plan.price}</span>
                <span className="per">/month</span>
              </div>
              <p className="gb-price__desc">{plan.desc}</p>
              <ul className="gb-price__list">
                {plan.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
                <li className="more">+ More tools</li>
              </ul>
              <a
                href={getCartUrl(plan.productId)}
                target="_blank"
                rel="noopener noreferrer"
                className={`gb-btn ${
                  plan.popular ? "gb-btn-primary" : "gb-btn-blue"
                }`}
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
