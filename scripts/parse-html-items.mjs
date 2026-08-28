import fs from "fs";

const html = fs.readFileSync("scratch_tablets.html", "utf-8");

// Regex to capture product cards, links, images, and prices
// In IndiaMART category pages:
// <a href="/medicospharma/pharmaceutical-tablets.html#23144520573">
// <img src="...">
// product name and price tags

const links = [];
const linkRegex = /href=["'](\/medicospharma\/[^"']*#(\d+))["'][^>]*>(.*?)<\/a>/gi;
let m;
while ((m = linkRegex.exec(html)) !== null) {
  const [_, href, id, innerText] = m;
  const name = innerText.replace(/<[^>]+>/g, "").trim();
  if (name && !name.toLowerCase().includes("view") && !name.toLowerCase().includes("more")) {
    links.push({ id, name, href });
  }
}

console.log("Unique links count:", links.length);

// Deduplicate
const unique = [];
const seen = new Set();
for (const item of links) {
  if (!seen.has(item.id)) {
    seen.add(item.id);
    unique.push(item);
  }
}

console.log("Unique Products in Pharmaceutical Tablets Page:", unique.length);
unique.forEach((u, i) => console.log(`${i + 1}. [ID: ${u.id}] ${u.name}`));
