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

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Map aangemaakt: ${dirPath}`);
  }

  const filePath = path.join(dirPath, 'index.js'); // pages gebruiken index.js
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `
export default function ${category.replace(/\s/g, '')}Page() {
  const introText = "Welkom bij de categorie ${category}! Hier vind je alle items die relevant zijn.";
  
  return (
    <main>
      <h1>${category}</h1>
      <p>{introText}</p>
    </main>
  );
}
    `.trim());
    console.log(`index.js aangemaakt voor ${category}`);
  }
});

console.log("Alle categoriepagina's zijn aangemaakt!");
