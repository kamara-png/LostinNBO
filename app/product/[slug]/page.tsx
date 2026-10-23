import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/data/products";
import OrderSection from "@/components/OrderSection";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="product-page">
      <div className="product-crumbs">
        <Link href="/#shop">← BACK TO SHOP</Link>
      </div>

      <div className="product-layout">
        <div className="product-gallery">
          <div className="product-main-img">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              priority
            />
          </div>
        </div>

        <div className="product-details">
          <p className="product-category">{product.category}</p>
          <h1 className="product-name">{product.name}</h1>
          {product.tag && (
            <span
              className={`product-tag product-tag-${product.tag.toLowerCase()}`}
            >
              {product.tag}
            </span>
          )}
          <p className="product-price">${product.price}</p>
          <p className="product-desc">{product.description}</p>

          <OrderSection product={product} />

          <ul className="product-notes">
            <li>SHIPPING WORLDWIDE VIA INSTAGRAM ARRANGEMENT</li>
            <li>PAYMENT CONFIRMED IN DM BEFORE DISPATCH</li>
            <li>ALL SALES FINAL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
