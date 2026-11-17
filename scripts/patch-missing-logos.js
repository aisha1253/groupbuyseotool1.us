const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "..", "src", "data", "products.js");
let src = fs.readFileSync(productsPath, "utf8");

const missing = [
  "Bypass GPT",
  "SEO Profiler",
  "Article Builder",
  "TextWizard",
  "Pipio",
  "FreshDrop",
  "pizap",
  "SMHack",
];

function slugify(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

for (const name of missing) {
  const logo = `/assets/img/tools/${slugify(name)}.png`;
  const file = path.join(__dirname, "..", "public", logo.replace(/^\//, ""));
  if (!fs.existsSync(file)) {
    console.log("missing file", file);
    continue;
  }
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `("name":\\s*"${escaped}"[\\s\\S]*?"icon":\\s*")([^"]+)(")`
  );
  if (!re.test(src)) {
    console.log("no match", name);
    continue;
  }
  src = src.replace(re, `$1${logo}$3`);
  const logoRe = new RegExp(
    `("name":\\s*"${escaped}"[\\s\\S]*?"icon":\\s*"${logo.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    )}")`
  );
  src = src.replace(logoRe, (m) => {
    if (m.includes('"logo"')) return m;
    return `${m},\n    "logo": "${logo}"`;
  });
  console.log("patched", name);
}

fs.writeFileSync(productsPath, src);
console.log("done");
