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

export const INSTAGRAM_HANDLE = "kamara.zip";
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
    slug: "lost-tote",
    name: "LOST TOTE",
    price: 22,
    category: "BAGS",
    sizes: ["OS"],
    description:
      "16oz canvas tote. Interior pocket, long handles, prints on both sides.",
    image: "/products/tote-lost.svg",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
