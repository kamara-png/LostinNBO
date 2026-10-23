const fs = require("fs");
fs.mkdirSync("public/products", { recursive: true });
const items = [
  ["tee-black", "BLACK TEE", "SHIRT"],
  ["tee-void", "VOID TEE", "SHIRT"],
  ["cargo-pants", "CARGO PANTS", "PANTS"],
  ["hoodie-dead", "DEADSTOCK HOODIE", "HOODIE"],
  ["cap-static", "STATIC CAP", "CAP"],
  ["tote-lost", "LOST TOTE", "TOTE"],
];
const shapes = {
  SHIRT:
    '<path d="M350 250 L450 200 L550 200 L650 250 L700 350 L620 400 L620 750 L380 750 L380 400 L300 350 Z" fill="none" stroke="#110B0B" stroke-width="14"/><path d="M450 200 C470 260 530 260 550 200" fill="none" stroke="#110B0B" stroke-width="14"/>',
  PANTS:
    '<path d="M380 200 L620 200 L660 750 L540 750 L500 450 L460 750 L340 750 Z" fill="none" stroke="#110B0B" stroke-width="14"/><line x1="500" y1="200" x2="500" y2="450" stroke="#110B0B" stroke-width="10"/>',
  HOODIE:
    '<path d="M350 280 L450 220 L550 220 L650 280 L710 400 L620 440 L620 760 L380 760 L380 440 L290 400 Z" fill="none" stroke="#110B0B" stroke-width="14"/><path d="M430 220 C450 140 550 140 570 220" fill="none" stroke="#110B0B" stroke-width="14"/><rect x="430" y="600" width="140" height="90" fill="none" stroke="#110B0B" stroke-width="12"/>',
  CAP:
    '<path d="M300 450 C300 280 700 280 700 450 L700 500 L300 500 Z" fill="none" stroke="#110B0B" stroke-width="14"/><path d="M300 500 C200 500 180 560 180 580 L420 580" fill="none" stroke="#110B0B" stroke-width="14"/>',
  TOTE:
    '<rect x="350" y="300" width="300" height="400" fill="none" stroke="#110B0B" stroke-width="14"/><path d="M420 300 C420 180 580 180 580 300" fill="none" stroke="#110B0B" stroke-width="14"/>',
};
for (const [slug, name, type] of items) {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><rect width="1000" height="1000" fill="#F5F2EC"/><line x1="0" y1="0" x2="1000" y2="1000" stroke="#ddd" stroke-width="2"/><line x1="1000" y1="0" x2="0" y2="1000" stroke="#ddd" stroke-width="2"/>' +
    shapes[type] +
    '<rect x="60" y="60" width="260" height="70" fill="#110B0B"/><text x="80" y="110" font-family="Arial Black,Arial" font-size="40" font-weight="900" fill="#F5F2EC">' +
    type +
    '</text><text x="500" y="900" text-anchor="middle" font-family="Arial Black,Arial" font-size="56" font-weight="900" fill="#110B0B">' +
    name +
    '</text><text x="500" y="955" text-anchor="middle" font-family="Arial" font-size="28" fill="#110B0B">[ PLACEHOLDER ]</text></svg>';
  fs.writeFileSync("public/products/" + slug + ".svg", svg);
}
console.log("done");
