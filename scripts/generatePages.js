const fs = require('fs');
const path = require('path');

// Slugify functie voor nette URL mappen
const slugify = str =>
  str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

// Alle categorieën (inclusief All)
const categories = [
  "All",
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

// App directory (Next.js app router)
const appDir = path.join(process.cwd(), 'app');

categories.forEach(category => {
  const dir = path.join(appDir, slugify(category));

  // Maak map aan als die nog niet bestaat
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📂 Map aangemaakt: ${dir}`);
  }

  // Component naam zonder spaties
  const componentName = category.replace(/\s/g, '') + "Page";

  // Inhoud van page.js
  const content = `
export default function ${componentName}() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">${category}</h1>
      <p className="text-gray-600">Hier komt de content voor ${category}.</p>
    </main>
  );
}
  `.trim();

  // Pad naar page.js
  const filePath = path.join(dir, 'page.js');

  // Maak bestand alleen als het nog niet bestaat
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ page.js aangemaakt voor ${category}`);
  } else {
    console.log(`⚠️  page.js bestaat al voor ${category}, overgeslagen`);
  }
});

console.log("🎉 Alle categorieën zijn verwerkt!");
