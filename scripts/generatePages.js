// scripts/generateCategoryPages.js
const fs = require('fs');
const path = require('path');

// All categories in your menu
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

// Unique text for each category
const categoryTexts = {
  "All": "Check out all products in our shop, from creative to practical!",
  "New": "Discover the newest additions to our collection.",
  "DIY": "Do-it-yourself projects and materials for your creativity.",
  "Special": "Special items for unique moments.",
  "Kids": "Fun and creative items for children.",
  "Adults": "Inspiration and tools for adults.",
  "Drawing": "Everything you need for drawing and sketching.",
  "Crafts": "Materials and ideas for craft projects.",
  "Trends": "Follow the latest trends in creative design.",
  "Organizers": "Smart solutions to keep everything tidy.",
  "Handy": "Useful tools for everyday life.",
  "Christmas": "Festive items for the Christmas season.",
  "Birthday": "Gifts and decorations for birthdays."
};

// Use pages directory instead of app directory
const pagesDir = path.join(process.cwd(), 'pages');

categories.forEach(category => {
  // Folder name in lowercase without spaces
  const dirName = category.toLowerCase().replace(/\s+/g, '-');
  const dirPath = path.join(pagesDir, dirName);

  // Create folder if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Folder created: ${dirPath}`);
  }

  // Create index.js if it doesn't exist
  const filePath = path.join(dirPath, 'index.js');
  if (!fs.existsSync(filePath)) {
    const introText = categoryTexts[category] || "Welcome to this category!";
    const content = `
export default function ${category.replace(/\s/g, '')}Page() {
  const introText = "${introText}";

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>${category}</h1>
      <p>{introText}</p>
    </main>
  );
}
    `.trim();

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`index.js created for ${category}`);
  }
});

console.log("All category pages have been created!");
