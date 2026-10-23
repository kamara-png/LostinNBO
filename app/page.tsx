import Marquee from "@/components/Marquee";
import ShopSection from "@/components/ShopSection";
import { INSTAGRAM_HANDLE } from "@/data/products";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            LOST
            <br />
            IN
            <br />
            NBO
          </h1>
          <p className="hero-sub">
            STREETWEAR FOR THE OVERSIZED ERA. NO CARTS. NO CHECKOUTS.
            <br />
            PICK YOUR PIECE — ORDER STRAIGHT THROUGH INSTAGRAM DM.
          </p>
          <div className="hero-actions">
            <a href="#shop" className="btn btn-primary">
              SHOP THE DROP ↓
            </a>
            <a
              href={`https://ig.me/m/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              DM TO ORDER ↗
            </a>
          </div>
        </div>
      </section>

      <Marquee text="NEW DROP LIVE ★ ORDER VIA INSTAGRAM DM ★ NO CARTS ★ NO RULES" />

      <ShopSection />

      <section className="how">
        <h2 className="section-title">HOW TO ORDER</h2>
        <div className="steps">
          <div className="step">
            <span className="step-num">01</span>
            <h3>PICK A PIECE</h3>
            <p>Click any item and select your size.</p>
          </div>
          <div className="step">
            <span className="step-num">02</span>
            <h3>HIT ORDER</h3>
            <p>Copy the order message and open the DM.</p>
          </div>
          <div className="step">
            <span className="step-num">03</span>
            <h3>SEND &amp; FLEX</h3>
            <p>We confirm, you pay, we ship. Done.</p>
          </div>
        </div>
      </section>
    </>
  );
}
