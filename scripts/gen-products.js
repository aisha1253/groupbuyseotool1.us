const fs = require("fs");
const path = require("path");

const rows = [
  ["AHREF$ Combo", 13],
  ["Lite plan", 207],
  ["Small plan", 4],
  ["Student plan", 92],
  ["Basic plan", 10],
  ["Standard plan", 6],
  ["Ecom PLAN", 95],
  ["VIP Plan", 96],
  ["Mega Pack", 97],
  ["Extension Tools", 2],
  ["Writer's Pack", 11],
  ["Amazon Tools Plan", 98],
  ["Designer's Pack", 12],
  ["Ahrefs SEO Tool Bar", 99],
  ["AHREF$ Combo Unlimited", 100],
  ["Ahrefs mega plan", 101],
  ["Ahrefs + screaming frog", 102],
  ["SEMRU$H Combo Pack", 103],
  ["SEMRUSH", 104],
  ["Semrush Private", 170],
  ["SEMRUSH ONE (export)", 171],
  ["Custome plan", 177],
  ["Ahrefs with Seo tool bar", 172],
  ["Moz", 19],
  ["Netflix", 120],
  ["Netflix Logins", 178],
  ["KWFINDER", 15],
  ["MAJESTIC", 31],
  ["Helium10", 16],
  ["Jungle Scout", 39],
  ["Jasper Ai", 27],
  ["Quetext", 17],
  ["Graammaarly", 105],
  ["Envato Elements", 32],
  ["Chatgpt plus", 106],
  ["Chatgpt", 107],
  ["Storyblocks", 22],
  ["spamzilla", 23],
  ["keywordtool.io", 24],
  ["Unbounce", 111],
  ["Ecomhunt", 42],
  ["Freepik", 29],
  ["Screaming frog", 110],
  ["Buzzsumo", 25],
  ["Bypass GPT", 65],
  ["AdSpy Subscription", 109],
  ["Adobe Creative Cloud", 119],
  ["CANVA pro", 108],
  ["Udemy", 34],
  ["Neuron Writer", 30],
  ["CapCut Pro", 35],
  ["Agency plan (1)", 128],
  ["Agency plan (2)", 129],
  ["Keyword Revaeler", 166],
  ["WordAi", 130],
  ["WordTune", 131],
  ["WordHero", 132],
  ["Vyond", 20],
  ["AmzTrackers", 133],
  ["Linkedin Learning (Lynda)", 134],
  ["Ispionage", 135],
  ["frase.io", 26],
  ["Spin Rewriter", 136],
  ["Indexification", 46],
  ["Keywords Everywhere", 114],
  ["Answer The Public", 60],
  ["SpyFu", 59],
  ["SaleHoo", 137],
  ["Coursera", 48],
  ["Exploding topics", 138],
  ["Sell the trend", 72],
  ["Woorank", 139],
  ["Videoblocks", 140],
  ["Ubersuggest", 70],
  ["SkillShare", 141],
  ["SerpStat", 56],
  ["SEO Profiler", 142],
  ["Pillbanana", 143],
  ["Pexda", 144],
  ["Cbengine", 145],
  ["Quillbot", 43],
  ["Article Builder", 146],
  ["Article Forge", 28],
  ["BuzzStream", 147],
  ["Copymatic.ai", 148],
  ["Surfer Seo", 169],
  ["Prime Video", 121],
  ["SEOptimer", 149],
  ["SEO SITE CHECKUP", 75],
  ["You Ai", 55],
  ["Claude Ai", 52],
  ["Hix Ai", 118],
  ["SmartCopy", 150],
  ["Closerscopy", 151],
  ["Copy ai", 36],
  ["Writerzen", 152],
  ["Writesonic", 61],
  ["Rytr me", 153],
  ["Jenni Ai", 154],
  ["Vecteezy", 73],
  ["Designs AI", 155],
  ["Picsart", 86],
  ["Fotojet", 156],
  ["Invideo io", 54],
  ["GPL - Themes/Plugin WordPress", 127],
  ["Chaupal tv", 157],
  ["Viral Launch", 158],
  ["Niche Scraper", 80],
  ["SEMSCOOP", 159],
  ["Picmonkey", 160],
  ["Epidemicsound", 161],
  ["SLIDEBEAN", 162],
  ["SE Ranking", 87],
  ["WordTracker", 163],
  ["Motionarray", 76],
  ["Prezi", 164],
  ["Turnitin student account", 205],
  ["Turnitin with Ai Detector", 125],
  ["Leonardo AI", 51],
  ["Renderforest", 63],
  ["Icon Scout", 69],
  ["Scribd Premium", 112],
  ["Sider Ai", 165],
  ["Similarweb", 57],
  ["WriteHuman", 50],
  ["Aherfs Plan", 206],
  ["Agency Unlimited plan", 179],
  ["AHREF$ Combo Special plan", 180],
  ["HeyGen AI", 124],
  ["Grok Ai", 66],
  ["Google One Ultra Plan", 181],
  ["CapCut", 122],
  ["BigSpy pro Subscription", 115],
  ["Spyhero Subscription", 116],
  ["gamma app pro", 117],
  ["Midjourney", 123],
  ["Team plan", 175],
  ["screaming frog special offer", 182],
  ["Elevenlabs", 173],
  ["Semrush + Kwfinder", 183],
  ["Themes and plugins Tool", 126],
  ["YouTube premium global", 174],
  ["Prowly", 184],
  ["SORA", 168],
  ["vidiq", 82],
  ["Murf Ai", 167],
  ["Tuberanker", 185],
  ["Alexa", 186],
  ["TextWizard", 187],
  ["Katteb AI", 188],
  ["pepper content", 189],
  ["Pipio", 190],
  ["FreshDrop", 191],
  ["Stencil", 192],
  ["pizap", 193],
  ["Crunchyroll", 194],
  ["Animoto", 195],
  ["Pictory", 196],
  ["SMHack", 197],
  ["LSIGraph", 198],
  ["Creative Fabrica", 85],
  ["GraphicStock", 199],
  ["Ahrefs premium plan", 176],
  ["Mega+bar+semrush", 200],
  ["Ahrefs Combo", 201],
  ["Rewritify", 202],
  ["Semrush premium", 203],
  ["LinkedIn Sales Navigator advance", 204],
];

function categorize(name) {
  const lower = name.toLowerCase();

  if (
    /plan|pack|combo|agency|mega pack|lite plan|small plan|student|basic|standard|vip|ecom plan|extension tools|writer's pack|designer's pack|amazon tools|ahrefs mega|ahrefs premium|ahrefs combo|ahref\$|semrush premium|semrush \+|mega\+bar|custome|unlimited|special plan|ahrefs with|ahrefs \+|team plan|aherfs plan|google one/.test(
      lower
    )
  ) {
    return "Plans";
  }
  if (
    /ai|chatgpt|claude|jasper|quillbot|writesonic|jenni|grok|heygen|midjourney|sora|leonardo|copy ai|neuron|frase|bypass|writehuman|sider|katteb|murf|elevenlabs|wordai|wordtune|wordhero|rytr|writerzen|copymatic|smartcopy|closerscopy|textwizard|pepper|rewritify|hix|you ai/.test(
      lower
    )
  ) {
    return "AI & Writing";
  }
  if (
    /canva|envato|freepik|adobe|picsart|fotojet|vyond|vecteezy|designs|picmonkey|stencil|pizap|animoto|pictory|invideo|capcut|renderforest|icon scout|motionarray|epidemic|graphicstock|creative fabrica|prezi|slidebean|gamma|storyblocks|videoblocks/.test(
      lower
    )
  ) {
    return "Design & Video";
  }
  if (
    /helium|jungle|ecomhunt|sell the trend|amz|viral launch|niche scraper|salehoo|freshdrop/.test(
      lower
    )
  ) {
    return "Amazon & Ecommerce";
  }
  if (
    /netflix|prime video|chaupal|crunchyroll|youtube premium|udemy|coursera|skillshare|scribd|linkedin learning|linkedin sales/.test(
      lower
    )
  ) {
    return "Learning & Streaming";
  }
  return "SEO Tools";
}

const seen = new Set();
const products = [];

for (const [name, id] of rows) {
  if (seen.has(id)) continue;
  seen.add(id);
  const category = categorize(name);
  products.push({
    id,
    name,
    productId: id,
    cartUrl: `https://seogroupsbuy.com/users/cart/index/product/id/${id}/c/`,
    category,
    icon: `/assets/img/services/service-3-${(products.length % 3) + 1}.svg`,
    description: `Get instant shared access to ${name} through groupbuyseotool. Click Buy Now to add this product directly to your cart.`,
    tags: [category, "Buy Now"],
  });
}

const out = `export const CART_BASE = "https://seogroupsbuy.com/users/cart/index/product/id";

export function getCartUrl(productId) {
  return \`\${CART_BASE}/\${productId}/c/\`;
}

export const ProductsData = ${JSON.stringify(products, null, 2)};

export const ToolsData = ProductsData;

export const PlansData = ProductsData.filter((p) => p.category === "Plans");

export const FeaturedPlanIds = {
  lite: 207,
  small: 4,
  mega: 97,
};
`;

const target = path.join(__dirname, "..", "src", "data", "products.js");
fs.writeFileSync(target, out);
console.log("Wrote", products.length, "products to", target);
console.log(
  "Plans:",
  products.filter((p) => p.category === "Plans").length
);
