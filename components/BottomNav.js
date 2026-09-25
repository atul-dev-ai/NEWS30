import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link href="/" className="nav-item">
        <span className="icon">🏠</span>
        <span className="label">Home</span>
      </Link>
      <Link href="/trending" className="nav-item">
        <span className="icon">🔥</span>
        <span className="label">Trending</span>
      </Link>
      <Link href="/bookmarks" className="nav-item">
        <span className="icon">🔖</span>
        <span className="label">Saved</span>
      </Link>
      <Link href="/profile" className="nav-item">
        <span className="icon">👤</span>
        <span className="label">Profile</span>
      </Link>
    </nav>
  );
}
