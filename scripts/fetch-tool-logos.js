const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const OUT_DIR = path.join(__dirname, "..", "public", "assets", "img", "tools");
fs.mkdirSync(OUT_DIR, { recursive: true });

/** Map product names → official brand domain for logo fetch */
const DOMAIN_BY_NAME = {
  "AHREF$ Combo": "ahrefs.com",
  "Lite plan": "semrush.com",
  "Small plan": "semrush.com",
  "Student plan": "semrush.com",
  "Basic plan": "semrush.com",
  "Standard plan": "semrush.com",
  "Ecom PLAN": "helium10.com",
  "VIP Plan": "ahrefs.com",
  "Mega Pack": "ahrefs.com",
  "Extension Tools": "chrome.google.com",
  "Writer's Pack": "jasper.ai",
  "Amazon Tools Plan": "helium10.com",
  "Designer's Pack": "canva.com",
  "Ahrefs SEO Tool Bar": "ahrefs.com",
  "AHREF$ Combo Unlimited": "ahrefs.com",
  "Ahrefs mega plan": "ahrefs.com",
  "Ahrefs + screaming frog": "ahrefs.com",
  "SEMRU$H Combo Pack": "semrush.com",
  SEMRUSH: "semrush.com",
  "Semrush Private": "semrush.com",
  "SEMRUSH ONE (export)": "semrush.com",
  "Custome plan": "semrush.com",
  "Ahrefs with Seo tool bar": "ahrefs.com",
  Moz: "moz.com",
  Netflix: "netflix.com",
  "Netflix Logins": "netflix.com",
  KWFINDER: "kwfinder.com",
  MAJESTIC: "majestic.com",
  Helium10: "helium10.com",
  "Jungle Scout": "junglescout.com",
  "Jasper Ai": "jasper.ai",
  Quetext: "quetext.com",
  Graammaarly: "grammarly.com",
  "Envato Elements": "elements.envato.com",
  "Chatgpt plus": "chatgpt.com",
  Chatgpt: "chatgpt.com",
  Storyblocks: "storyblocks.com",
  spamzilla: "spamzilla.io",
  "keywordtool.io": "keywordtool.io",
  Unbounce: "unbounce.com",
  Ecomhunt: "ecomhunt.com",
  Freepik: "freepik.com",
  "Screaming frog": "screamingfrog.co.uk",
  Buzzsumo: "buzzsumo.com",
  "Bypass GPT": "bypassgpt.com",
  "AdSpy Subscription": "adspy.com",
  "Adobe Creative Cloud": "adobe.com",
  "CANVA pro": "canva.com",
  Udemy: "udemy.com",
  "Neuron Writer": "neuronwriter.com",
  "CapCut Pro": "capcut.com",
  "Agency plan (1)": "ahrefs.com",
  "Agency plan (2)": "ahrefs.com",
  "Keyword Revaeler": "keywordrevealer.com",
  WordAi: "wordai.com",
  WordTune: "wordtune.com",
  WordHero: "wordhero.co",
  Vyond: "vyond.com",
  AmzTrackers: "amztracker.com",
  "Linkedin Learning (Lynda)": "linkedin.com",
  Ispionage: "ispionage.com",
  "frase.io": "frase.io",
  "Spin Rewriter": "spinrewriter.com",
  Indexification: "indexification.com",
  "Keywords Everywhere": "keywordseverywhere.com",
  "Answer The Public": "answerthepublic.com",
  SpyFu: "spyfu.com",
  SaleHoo: "salehoo.com",
  Coursera: "coursera.org",
  "Exploding topics": "explodingtopics.com",
  "Sell the trend": "sellthetrend.com",
  Woorank: "woorank.com",
  Videoblocks: "videoblocks.com",
  Ubersuggest: "neilpatel.com",
  SkillShare: "skillshare.com",
  SerpStat: "serpstat.com",
  "SEO Profiler": "seoprofiler.com",
  Pillbanana: "pillbanana.com",
  Pexda: "pexda.com",
  Cbengine: "cbengine.com",
  Quillbot: "quillbot.com",
  "Article Builder": "articlebuilder.net",
  "Article Forge": "articleforge.com",
  BuzzStream: "buzzstream.com",
  "Copymatic.ai": "copymatic.ai",
  "Surfer Seo": "surferseo.com",
  "Prime Video": "primevideo.com",
  SEOptimer: "seoptimer.com",
  "SEO SITE CHECKUP": "seositecheckup.com",
  "You Ai": "you.com",
  "Claude Ai": "claude.ai",
  "Hix Ai": "hix.ai",
  SmartCopy: "smartly.io",
  Closerscopy: "closerscopy.com",
  "Copy ai": "copy.ai",
  Writerzen: "writerzen.net",
  Writesonic: "writesonic.com",
  "Rytr me": "rytr.me",
  "Jenni Ai": "jenni.ai",
  Vecteezy: "vecteezy.com",
  "Designs AI": "designs.ai",
  Picsart: "picsart.com",
  Fotojet: "fotojet.com",
  "Invideo io": "invideo.io",
  "GPL - Themes/Plugin WordPress": "wordpress.org",
  "Chaupal tv": "chaupal.tv",
  "Viral Launch": "viral-launch.com",
  "Niche Scraper": "nichescraper.com",
  SEMSCOOP: "semscoop.com",
  Picmonkey: "picmonkey.com",
  Epidemicsound: "epidemicsound.com",
  SLIDEBEAN: "slidebean.com",
  "SE Ranking": "seranking.com",
  WordTracker: "wordtracker.com",
  Motionarray: "motionarray.com",
  Prezi: "prezi.com",
  "Turnitin student account": "turnitin.com",
  "Turnitin with Ai Detector": "turnitin.com",
  "Leonardo AI": "leonardo.ai",
  Renderforest: "renderforest.com",
  "Icon Scout": "iconscout.com",
  "Scribd Premium": "scribd.com",
  "Sider Ai": "sider.ai",
  Similarweb: "similarweb.com",
  WriteHuman: "writehuman.ai",
  "Aherfs Plan": "ahrefs.com",
  "Agency Unlimited plan": "ahrefs.com",
  "AHREF$ Combo Special plan": "ahrefs.com",
  "HeyGen AI": "heygen.com",
  "Grok Ai": "x.ai",
  "Google One Ultra Plan": "one.google.com",
  CapCut: "capcut.com",
  "BigSpy pro Subscription": "bigspy.com",
  "Spyhero Subscription": "spyhero.com",
  "gamma app pro": "gamma.app",
  Midjourney: "midjourney.com",
  "Team plan": "ahrefs.com",
  "screaming frog special offer": "screamingfrog.co.uk",
  Elevenlabs: "elevenlabs.io",
  "Semrush + Kwfinder": "semrush.com",
  "Themes and plugins Tool": "wordpress.org",
  "YouTube premium global": "youtube.com",
  Prowly: "prowly.com",
  SORA: "openai.com",
  vidiq: "vidiq.com",
  "Murf Ai": "murf.ai",
  Tuberanker: "tuberanker.com",
  Alexa: "alexa.com",
  TextWizard: "textwizard.ai",
  "Katteb AI": "katteb.com",
  "pepper content": "peppercontent.io",
  Pipio: "pipio.ai",
  FreshDrop: "freshdrop.com",
  Stencil: "getstencil.com",
  pizap: "pizap.com",
  Crunchyroll: "crunchyroll.com",
  Animoto: "animoto.com",
  Pictory: "pictory.ai",
  SMHack: "smhack.io",
  LSIGraph: "lsigraph.com",
  "Creative Fabrica": "creativefabrica.com",
  GraphicStock: "graphicstock.com",
  "Ahrefs premium plan": "ahrefs.com",
  "Mega+bar+semrush": "ahrefs.com",
  "Ahrefs Combo": "ahrefs.com",
  Rewritify: "rewritify.ai",
  "Semrush premium": "semrush.com",
  "LinkedIn Sales Navigator advance": "linkedin.com",
};

function slugify(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function logoUrls(domain) {
  return [
    `https://logo.clearbit.com/${domain}`,
    `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`,
    `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
  ];
}

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      },
      (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          fetchBuffer(res.headers.location).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          res.resume();
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      }
    );
    req.on("error", reject);
    req.setTimeout(20000, () => {
      req.destroy(new Error("timeout"));
    });
  });
}

async function main() {
  const productsPath = path.join(__dirname, "..", "src", "data", "products.js");
  let src = fs.readFileSync(productsPath, "utf8");

  const names = Object.keys(DOMAIN_BY_NAME);
  const results = {};
  let ok = 0;
  let fail = 0;

  for (const name of names) {
    const domain = DOMAIN_BY_NAME[name];
    const slug = slugify(name);
    const file = `${slug}.png`;
    const outPath = path.join(OUT_DIR, file);
    const publicPath = `/assets/img/tools/${file}`;

    try {
      if (!fs.existsSync(outPath) || fs.statSync(outPath).size < 100) {
        let buf = null;
        let lastErr = null;
        for (const url of logoUrls(domain)) {
          try {
            const candidate = await fetchBuffer(url);
            if (candidate && candidate.length >= 80) {
              buf = candidate;
              break;
            }
          } catch (err) {
            lastErr = err;
          }
        }
        if (!buf) throw lastErr || new Error("no logo source");
        fs.writeFileSync(outPath, buf);
      }
      results[name] = publicPath;
      ok += 1;
      process.stdout.write(".");
    } catch (e) {
      fail += 1;
      results[name] = null;
      process.stdout.write("x");
      console.error(`\nFail ${name} (${domain}): ${e.message}`);
    }
  }

  // Inject logo into each product object in products.js
  // Replace "icon": "..." with logo + keep icon as fallback path
  for (const name of names) {
    const logo = results[name];
    if (!logo) continue;
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(
      `("name":\\s*"${escaped}"[\\s\\S]*?"icon":\\s*")([^"]+)(")`
    );
    if (re.test(src)) {
      src = src.replace(re, `$1${logo}$3`);
      // Also add logo field if missing after icon line
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
    }
  }

  fs.writeFileSync(productsPath, src);

  const mapPath = path.join(__dirname, "tool-logo-map.json");
  fs.writeFileSync(mapPath, JSON.stringify(results, null, 2));

  console.log(`\nDone. ok=${ok} fail=${fail}`);
  console.log(`Logos in ${OUT_DIR}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
