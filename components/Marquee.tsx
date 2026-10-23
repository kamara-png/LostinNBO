export default function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="marquee-item">
      {text} <span className="marquee-star">★</span>
    </span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{items}</div>
    </div>
  );
}
