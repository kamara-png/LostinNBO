import Link from "next/link";
import { BRAND_NAME, INSTAGRAM_HANDLE } from "@/data/products";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3 className="footer-title">{BRAND_NAME.toUpperCase()}</h3>
          <p className="footer-tagline">
            LOST IN THE NOISE. DRESSED FOR IT ANYWAY.
          </p>
        </div>
        <div>
          <h3 className="footer-title">ORDER</h3>
          <ul className="footer-links">
            <li>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM ↗
              </a>
            </li>
            <li>
              <a
                href={`https://ig.me/m/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                DM TO ORDER ↗
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">SITE</h3>
          <ul className="footer-links">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/#shop">SHOP</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {BRAND_NAME.toUpperCase()}</span>
        <span>NO REFUNDS. NO RULES.</span>
      </div>
    </footer>
  );
}
