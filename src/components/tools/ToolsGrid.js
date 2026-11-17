import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ToolsData } from "@/data/products";

const ToolsGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(ToolsData.map((t) => t.category));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filteredTools = ToolsData.filter((tool) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q);
    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="tools-grid pt-200 pb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-12 text-center">
              <h2
                className="section-title__two-title wow fadeInUp"
                data-wow-delay=".3s"
              >
                Access Premium SEO Tools at Affordable Prices
              </h2>
              <p className="mt-20 wow fadeInUp" data-wow-delay=".5s">
                {ToolsData.length}+ tools and plans — Buy Now adds the product
                straight to your cart.
              </p>
            </div>
          </div>

          <div className="row mb-50">
            <div className="col-xl-12">
              <div
                className="tools-search-filter wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="search-box" style={{ marginBottom: "30px" }}>
                  <input
                    type="text"
                    placeholder="Search tools and plans..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "15px 20px",
                      borderRadius: "10px",
                      border: "1px solid #e0e0e0",
                      fontSize: "16px",
                    }}
                  />
                </div>
                <div
                  className="category-filter"
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      style={{
                        padding: "10px 20px",
                        borderRadius: "25px",
                        border: "none",
                        background:
                          selectedCategory === category
                            ? "linear-gradient(45deg, #3A57FC, #FF8800)"
                            : "#f5f5f5",
                        color: selectedCategory === category ? "white" : "#333",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.productId}
                className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay={`${0.1 + (index % 9) * 0.05}s`}
              >
                <div
                  className="tool-card mb-30"
                  style={{
                    background: "white",
                    borderRadius: "15px",
                    padding: "30px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="tool-icon" style={{ marginBottom: "20px" }}>
                    <img
                      src={tool.logo || tool.icon}
                      alt={`${tool.name} logo`}
                      width={56}
                      height={56}
                      loading="lazy"
                      style={{
                        width: "56px",
                        height: "56px",
                        objectFit: "contain",
                        borderRadius: "12px",
                        background: "#F5F7FC",
                        padding: "6px",
                      }}
                      onError={(e) => {
                        e.currentTarget.src =
                          "/assets/img/services/service-3-1.svg";
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      marginBottom: "15px",
                      color: "#333",
                    }}
                  >
                    {tool.name}
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: "20px",
                      lineHeight: "1.6",
                      flexGrow: 1,
                    }}
                  >
                    {tool.description}
                  </p>
                  <div className="tool-tags" style={{ marginBottom: "16px" }}>
                    {tool.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          display: "inline-block",
                          padding: "5px 12px",
                          background: "#f0f0f0",
                          borderRadius: "15px",
                          fontSize: "12px",
                          marginRight: "8px",
                          marginBottom: "8px",
                          color: "#3A57FC",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={tool.cartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gb-btn gb-btn-primary"
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <p className="text-center mt-40" style={{ color: "#666" }}>
              No tools match your search.
            </p>
          )}

          <div className="row mt-60">
            <div className="col-xl-12 text-center">
              <div
                className="tools-cta wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  background:
                    "linear-gradient(135deg, #3A57FC 0%, #FF8800 100%)",
                  borderRadius: "20px",
                  padding: "50px 30px",
                  color: "white",
                }}
              >
                <h2 style={{ color: "white", marginBottom: "20px" }}>
                  Looking for a full plan?
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    marginBottom: "30px",
                    fontSize: "18px",
                  }}
                >
                  Compare Lite, Small, and Mega Pack plans — Buy Now goes
                  straight to cart.
                </p>
                <Link
                  href="/pricing"
                  className="thm-btn-2"
                  style={{
                    background: "white",
                    color: "#3A57FC",
                    padding: "15px 40px",
                    borderRadius: "30px",
                    textDecoration: "none",
                    display: "inline-block",
                    fontWeight: "bold",
                    transition: "transform 0.3s ease",
                  }}
                >
                  View Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsGrid;
