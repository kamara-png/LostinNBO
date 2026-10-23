"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const FILTER_ALL = "ALL";

const categories = [
  FILTER_ALL,
  ...Array.from(new Set(products.map((product) => product.category))),
];

export default function ShopSection() {
  const [active, setActive] = useState(FILTER_ALL);

  const filtered = useMemo(
    () =>
      active === FILTER_ALL
        ? products
        : products.filter((product) => product.category === active),
    [active],
  );

  return (
    <section id="shop" className="shop">
      <div className="section-head">
        <h2 className="section-title">THE DROP</h2>
        <div className="shop-tools">
          <p className="section-count">
            {filtered.length} {filtered.length === 1 ? "ITEM" : "ITEMS"}
          </p>
          <div
            className="filter-row"
            role="group"
            aria-label="Filter by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="filter-btn"
                data-active={category === active ? "true" : "false"}
                aria-pressed={category === active}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
