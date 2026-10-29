import Link from "next/link";
import Image from "next/image";
import { BRAND_NAME, INSTAGRAM_HANDLE } from "@/data/products";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <Image
          src="/logo.svg"
          alt={`${BRAND_NAME} logo`}
          width={48}
          height={48}
          priority
        />
        <span className="brand-name">{BRAND_NAME.toUpperCase()}</span>
      </Link>
      <nav className="site-nav">
        <ThemeToggle />
        <Link href="/#shop">SHOP</Link>
        <a
          href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-ig"
        >
          INSTAGRAM ↗
        </a>
      </nav>
    </header>
  );
}
