// scripts/generateCategoryPages.js
const fs = require('fs');
const path = require('path');

// Alle categorieën van je menu
const categories = [
  "All",
  "New",
  "DIY",
  "Special",
  "Kids",
  "Adults",
  "Drawing",
  "Crafts",
  "Trends",
  "Organizers",
  "Handy",
  "Christmas",
  "Birthday"
];

// Gebruik pages-dir in plaats van app-dir
const pagesDir = path.join(process.cwd(), 'pages');

categories.forEach(category => {
  // Naam map in lowercase zonder spaties
  const dirName = category.toLowerCase().replace(/\s+/g, '-');
  const dirPath = path.join(pagesDir, dirName);

  // Maak map aan als die nog niet bestaat
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Map aangemaakt: ${dirPath}`);
  }

  // Maak index.js aan als die nog niet bestaat
  const filePath = path.join(dirPath, 'index.js');
  if (!fs.existsSync(filePath)) {
    const content = `
export default function ${category.replace(/\s/g, '')}Page() {
  const introText = "Welkom bij de categorie ${category}! Hier vind je alle items die relevant zijn.";

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>${category}</h1>
      <p>{introText}</p>
    </main>
  );
}
    `.trim();

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`index.js aangemaakt voor ${category}`);
  }
});

console.log("Alle categoriepagina's zijn aangemaakt!");
