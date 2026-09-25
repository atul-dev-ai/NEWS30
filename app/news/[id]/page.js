import Link from "next/link";
import { dummyStories } from "../../../data/mock";

export default async function NewsDetail({ params }) {
  // Await the params resolution for Next.js 15
  const { id } = await params;
  const story = dummyStories.find((s) => s.id === id) || dummyStories[0];

  return (
    <div className="news-detail-page container mt-6">
      <div className="category-badge-small">{story.category}</div>
      <h1 className="text-3xl lg:text-4xl font-bold mt-2">{story.headline}</h1>
      <div className="text-muted text-sm mt-2 mb-6">
        {story.publishedTime}
      </div>

      {story.heroImage && (
        <div 
          className="hero-image rounded-md mb-6" 
          style={{ backgroundImage: `url(${story.heroImage})`, height: '300px', backgroundSize: 'cover', backgroundPosition: 'center' }} 
        />
      )}

      <div className="ai-summary card mb-8 p-4 bg-gray-50 border-l-4 border-primary-600">
        <div className="text-primary font-bold text-sm mb-2 flex items-center gap-2">
          <span>✨</span> AI Summary
        </div>
        <p className="text-base leading-relaxed">{story.summary}</p>
        <p className="text-xs text-muted mt-4">
          AI-generated summary based on the cited source. Please verify important information with the original article.
        </p>
      </div>

      <div className="key-facts mb-8">
        <h3 className="text-xl font-bold border-b pb-2 mb-4">📌 Key Facts</h3>
        <ul className="list-disc pl-5 text-base">
          <li><strong>Who:</strong> Government / Authorities</li>
          <li><strong>What:</strong> New policies announced</li>
          <li><strong>When:</strong> Upcoming month</li>
        </ul>
      </div>

      <div className="sources mb-8">
        <h3 className="text-xl font-bold border-b pb-2 mb-4">📰 Sources</h3>
        <div className="flex flex-col gap-4">
          {story.sources?.map((src) => (
            <div key={src.id} className="card p-4">
              <div className="font-bold text-primary">{src.name}</div>
              <div className="text-sm mt-1">{src.originalHeadline}</div>
            </div>
          ))}
        </div>
        
        <Link href={`/story/${story.id}`} className="block text-center bg-gray-100 p-3 rounded-md mt-6 font-medium hover:bg-gray-200">
          একই খবরের অন্যান্য মাধ্যম দেখুন →
        </Link>
      </div>
    </div>
  );
}
