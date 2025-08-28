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

const appDir = path.join(process.cwd(), 'app');

categories.forEach(category => {
  // Naam map in lowercase zonder spaties
  const dirName = category.toLowerCase().replace(/\s+/g, '-');
  const dirPath = path.join(appDir, dirName);

  // Maak map aan als die nog niet bestaat
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Map aangemaakt: ${dirPath}`);
  }

  // Maak page.js bestand aan als het nog niet bestaat
  const filePath = path.join(dirPath, 'page.js');
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `
export default function ${category.replace(/\s/g, '')}Page() {
  return (
    <main>
      <h1>${category}</h1>
      <p>Hier komt de content voor ${category}.</p>
    </main>
  );
}
    `.trim());
    console.log(`page.js aangemaakt voor ${category}`);
  }
});

console.log("Alle categoriepagina's zijn aangemaakt!");
