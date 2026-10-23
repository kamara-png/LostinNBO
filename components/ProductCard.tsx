import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="product-card">
      <div className="product-card-img">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
        />
      </div>
      <div className="product-card-info">
        <div className="product-card-meta">
          <span className="product-card-name">{product.name}</span>
          {product.tag && (
            <span
              className={`product-tag product-tag-${product.tag.toLowerCase()}`}
            >
              {product.tag}
            </span>
          )}
        </div>
        <span className="product-card-price">${product.price}</span>
      </div>
      <div className="product-card-cta">VIEW / ORDER →</div>
    </Link>
  );
}
