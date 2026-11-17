const fs = require("fs");
const t = fs.readFileSync("src/data/products.js", "utf8");
const logos = [...t.matchAll(/"logo":\s*"([^"]+)"/g)].map((m) => m[1]);
const missing = logos.filter((l) => !fs.existsSync("public" + l));
console.log("logos", logos.length, "missingFiles", missing.length);
if (missing.length) console.log(missing.slice(0, 10));
