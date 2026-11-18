import React, { useMemo, useState } from "react";
import Link from "next/link";
import { SingleToolsData, getProductPrice } from "@/data/products";

/** 3 rows × 4 columns on desktop */
const PREVIEW_COUNT = 12;

const SingleToolsHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(() => {
    const set = new Set(SingleToolsData.map((t) => t.category));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = SingleToolsData.filter((tool) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch = tool.name.toLowerCase().includes(q);
    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const hasMore = filtered.length > PREVIEW_COUNT;
  const visible =
    showAll || !hasMore ? filtered : filtered.slice(0, PREVIEW_COUNT);

  const onSearch = (value) => {
    setSearchTerm(value);
    setShowAll(false);
  };

  const onCategory = (cat) => {
    setSelectedCategory(cat);
    setShowAll(false);
  };

  return (
    <section id="single-tools" className="gb-section gb-single-tools">
      <div className="container">
        <div className="gb-section__head">
          <h2>Individual SEO Tools — Buy Now, Go Straight to Cart</h2>
          <p>
            Prefer a single tool instead of a full plan? Browse every available
            tool below and click Buy Now to add it directly to your cart.
          </p>
        </div>

        <div className="gb-tools-controls">
          <input
            type="search"
            className="gb-tools-search"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search single tools"
          />
          <div className="gb-tools-cats" role="tablist" aria-label="Tool categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`gb-tools-cat${
                  selectedCategory === cat ? " is-active" : ""
                }`}
                onClick={() => onCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="gb-tools-grid">
          {visible.map((tool) => {
            const price = getProductPrice(tool.productId);
            return (
              <article key={tool.productId} className="gb-tool-card">
                <div className="gb-tool-card__brand">
                  <img
                    src={tool.logo || tool.icon}
                    alt={`${tool.name} logo`}
                    className="gb-tool-card__logo"
                    width={40}
                    height={40}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "/assets/img/services/service-3-1.svg";
                    }}
                  />
                  <div className="gb-tool-card__top">
                    <span className="gb-tool-card__cat">{tool.category}</span>
                    <h3>{tool.name}</h3>
                    {price && (
                      <span className="gb-tool-card__price">{price}</span>
                    )}
                  </div>
                </div>
                <div className="gb-tool-card__actions">
                  <a
                    href={tool.cartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gb-btn gb-btn-primary"
                  >
                    Buy Now
                  </a>
                  <Link
                    href={`/tools/${tool.productId}`}
                    className="gb-btn gb-btn-outline"
                  >
                    View Detail
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="gb-note" style={{ textAlign: "center" }}>
            No tools match your search.
          </p>
        )}

        {hasMore && (
          <div className="gb-tools-more">
            <button
              type="button"
              className="gb-btn gb-btn-blue"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
            >
              {showAll
                ? "Show Less"
                : `See More (${filtered.length - PREVIEW_COUNT} more)`}
            </button>
          </div>
        )}

        <p className="gb-note">
          Showing {visible.length} of {filtered.length} single tools.
          Plans are listed in the pricing section above.
        </p>
      </div>
    </section>
  );
};

export default SingleToolsHome;
