import Link from 'next/link';

export default function NewsCard({ story, variant = 'default' }) {
  const { id, headline, summary, category, publishedTime, heroImage, primarySource, sources } = story;

  if (variant === 'featured') {
    return (
      <Link href={`/news/${id}`} className="card news-card featured">
        <div className="card-image" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="category-badge">{category}</div>
        </div>
        <div className="card-content">
          <h2 className="text-2xl font-bold">{headline}</h2>
          <p className="text-muted text-base mt-2">{summary}</p>
          <div className="card-meta mt-4 flex items-center justify-between">
            <span className="text-sm font-medium">📰 {primarySource} • {publishedTime}</span>
            {sources && sources.length > 1 && (
              <span className="text-xs badge-sources">{sources.length} Sources</span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/news/${id}`} className={`card news-card ${variant}`}>
      {heroImage && (
        <div className="card-image-small" style={{ backgroundImage: `url(${heroImage})` }} />
      )}
      <div className="card-content">
        <div className="category-badge-small">{category}</div>
        <h3 className="text-lg font-bold mt-1">{headline}</h3>
        <div className="card-meta mt-2 flex items-center justify-between">
          <span className="text-xs font-medium">📰 {primarySource} • {publishedTime}</span>
        </div>
      </div>
    </Link>
  );
}
