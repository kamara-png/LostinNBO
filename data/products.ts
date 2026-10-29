export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  sizes: string[];
  description: string;
  image: string;
  tag?: string;
};

export const INSTAGRAM_HANDLE = "lostinnbo";
export const BRAND_NAME = "Lostinnbo";

export const dmLink = `https://ig.me/m/${INSTAGRAM_HANDLE}`;

export function orderMessage(product: Product, size: string) {
  return `Hi ${BRAND_NAME}! I want to order:\n${product.name} — $${product.price}\nSize: ${size}\nIs it available?`;
}

export const products: Product[] = [
  {
    slug: "black-tee",
    name: "BLACK TEE",
    price: 30,
    category: "SHIRTS",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Heavyweight 100% cotton tee. Boxy cut, screen-printed graphic. Built to outlive the trend cycle.",
    image: "/products/tee-black.svg",
    tag: "NEW",
  },
  {
    slug: "void-tee",
    name: "VOID TEE",
    price: 32,
    category: "SHIRTS",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Washed-out black tee with cracked print. Garment-dyed, pre-shrunk, zero compromise.",
    image: "/products/tee-void.svg",
  },
  {
    slug: "faded-tee",
    name: "FADED TEE",
    price: 34,
    category: "SHIRTS",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Sun-bleached heavyweight tee. Each fade is one of one, because no two ever age the same.",
    image: "/products/tee-black.svg",
    tag: "NEW",
  },
  {
    slug: "noise-tee",
    name: "NOISE TEE",
    price: 30,
    category: "SHIRTS",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Distorted front print on a relaxed body. Drops slightly longer in the hem.",
    image: "/products/tee-void.svg",
  },
  {
    slug: "double-tee",
    name: "DOUBLE TEE",
    price: 36,
    category: "SHIRTS",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Layered double-hem tee. Two weights of cotton stitched as one piece.",
    image: "/products/tee-black.svg",
    tag: "HOT",
  },
  {
    slug: "cargo-pants",
    name: "CARGO PANTS",
    price: 65,
    category: "PANTS",
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Double-knee cargo pants. Six pockets, adjustable cuffs, reinforced stitching throughout.",
    image: "/products/cargo-pants.svg",
    tag: "HOT",
  },
  {
    slug: "washed-cargo",
    name: "WASHED CARGO",
    price: 70,
    category: "PANTS",
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Enzyme-washed cargos with a broken-in drape from the first wear.",
    image: "/products/cargo-pants.svg",
  },
  {
    slug: "utility-pants",
    name: "UTILITY PANTS",
    price: 72,
    category: "PANTS",
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Straight-leg utility pant. Webbing belt, zip pockets, bar-tacked stress points.",
    image: "/products/cargo-pants.svg",
    tag: "NEW",
  },
  {
    slug: "deadstock-hoodie",
    name: "DEADSTOCK HOODIE",
    price: 75,
    category: "HOODIES",
    sizes: ["S", "M", "L", "XL"],
    description:
      "450gsm fleece hoodie. Oversized fit, double-lined hood, ribbed cuffs. Heavy by design.",
    image: "/products/hoodie-dead.svg",
  },
  {
    slug: "static-hoodie",
    name: "STATIC HOODIE",
    price: 78,
    category: "HOODIES",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Pigment-dyed fleece with a cracked chest print. Cut wide through the shoulder.",
    image: "/products/hoodie-dead.svg",
    tag: "NEW",
  },
  {
    slug: "zip-hoodie",
    name: "ZIP HOODIE",
    price: 82,
    category: "HOODIES",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Full-zip version of the heavyweight fleece. Two-way zip, kangaroo pockets.",
    image: "/products/hoodie-dead.svg",
    tag: "HOT",
  },
  {
    slug: "static-cap",
    name: "STATIC CAP",
    price: 28,
    category: "CAPS",
    sizes: ["OS"],
    description:
      "Unstructured 6-panel cap with embroidered logo. Strap-back, one size fits most.",
    image: "/products/cap-static.svg",
  },
  {
    slug: "noise-cap",
    name: "NOISE CAP",
    price: 26,
    category: "CAPS",
    sizes: ["OS"],
    description:
      "Washed twill cap with a low profile. Curved brim, tonal embroidery.",
    image: "/products/cap-static.svg",
  },
  {
    slug: "dad-cap",
    name: "DAD CAP",
    price: 24,
    category: "CAPS",
    sizes: ["OS"],
    description:
      "Soft crown, pre-curved brim, brass slider. The everyday one.",
    image: "/products/cap-static.svg",
    tag: "NEW",
  },
  {
    slug: "lost-tote",
    name: "LOST TOTE",
    price: 22,
    category: "BAGS",
    sizes: ["OS"],
    description:
      "16oz canvas tote. Interior pocket, long handles, prints on both sides.",
    image: "/products/tote-lost.svg",
  },
  {
    slug: "noise-tote",
    name: "NOISE TOTE",
    price: 24,
    category: "BAGS",
    sizes: ["OS"],
    description:
      "Overprinted canvas tote. Full-bleed graphic that wraps the whole bag.",
    image: "/products/tote-lost.svg",
    tag: "HOT",
  },
  {
    slug: "mesh-tote",
    name: "MESH TOTE",
    price: 26,
    category: "BAGS",
    sizes: ["OS"],
    description:
      "Reinforced mesh body with a canvas base. Folds flat, holds everything.",
    image: "/products/tote-lost.svg",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
