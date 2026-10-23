import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="hero-title">404</h1>
      <p className="hero-sub">THIS PAGE IS LOST. LIKE THE NAME.</p>
      <Link href="/" className="btn btn-primary">
        BACK HOME ←
      </Link>
    </div>
  );
}
