import Link from 'next/link';

export default function GlobalHeader() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo">
          NEWS30
        </Link>
        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">🔍</button>
          <button className="icon-btn" aria-label="Notifications">🔔</button>
          <button className="icon-btn mobile-menu" aria-label="Menu">☰</button>
        </div>
      </div>
    </header>
  );
}
