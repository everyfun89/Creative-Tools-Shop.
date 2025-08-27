const fs = require('fs');
const path = require('path');

// Hier zet je alle categorieën (behalve "All")
const categories = [
  "Kids",
  "Adults",
  "Drawing",
  "Crafts",
  "Trends",
  "New",
  "Organizers",
  "Handy",
  "Christmas",
  "Birthday",
  "Special",
  "DIY"
];

const appDir = path.join(process.cwd(), 'app');

categories.forEach(category => {
  const dir = path.join(appDir, category.toLowerCase());
  
  // Maak map aan als die nog niet bestaat
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Map aangemaakt: ${dir}`);
  }

  // Maak page.js bestand aan
  const filePath = path.join(dir, 'page.js');
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
