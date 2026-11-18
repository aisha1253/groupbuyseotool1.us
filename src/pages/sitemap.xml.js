import { ProductsData } from "@/data/products";

const SITE_URL = "https://groupbuyseotool.us";

const STATIC_PAGES = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/tools", changefreq: "daily", priority: "0.9" },
  { path: "/pricing", changefreq: "weekly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.6" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
];

function buildSitemap(lastmod) {
  const staticUrls = STATIC_PAGES.map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path === "/" ? "/" : page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  );

  const productIds = Array.from(
    new Set(ProductsData.map((product) => String(product.productId)))
  );

  const toolUrls = productIds.map(
    (id) => `  <url>
    <loc>${SITE_URL}/tools/${id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...toolUrls].join("\n")}
</urlset>
`;
}

const Sitemap = () => null;

export async function getServerSideProps({ res }) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const xml = buildSitemap(lastmod);

  res.setHeader("Content-Type", "application/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(xml);
  res.end();

  return { props: {} };
}

export default Sitemap;
