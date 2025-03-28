const fs = require("fs");
const path = require("path");

const baseUrl = "https://dennisturco.com";

const pages = [
  "",
  "progetti",
  "servizi",
  "carriera",
  "studi",
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

const filePath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(filePath, sitemapContent);

console.log("Sitemap generata con successo!");
