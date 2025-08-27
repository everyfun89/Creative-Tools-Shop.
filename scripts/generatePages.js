const fs = require("fs");
const path = require("path");

// Alle menu-items behalve "All"
const pages = [
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
  "Birthday",
];

pages.forEach((page) => {
  const fileName = page.toLowerCase() + ".js";
  const filePath = path.join(__dirname, "..", "pages", fileName);

  const content = `export default function ${page}() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">${page} Products</h1>
    </div>
  );
}
`;

  // Check of bestand al bestaat
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created ${fileName}`);
  } else {
    console.log(`${fileName} already exists`);
  }
});
