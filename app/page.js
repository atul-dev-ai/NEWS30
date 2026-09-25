import Link from "next/link";
import NewsCard from "../components/NewsCard";
import { dummyStories, breakingNews, categories } from "../data/mock";
import "./home.css";

export default function Home() {
  const featuredStory = dummyStories[0];
  const otherStories = dummyStories.slice(1);

  return (
    <div className="home-page">
      {/* Category Nav - Horizontal Scroll */}
      <div className="category-scroll border-b">
        <div className="container flex gap-6 overflow-x-auto py-2">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/category/${cat.id}`} className="text-sm font-medium whitespace-nowrap">
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Breaking News */}
      {breakingNews && (
        <div className="breaking-news">
          <div className="container py-2 text-sm font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
            {breakingNews}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mt-6">
        <h2 className="text-xl font-bold mb-4">আজকের প্রধান খবর</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <NewsCard story={featuredStory} variant="featured" />
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold border-b pb-2">⚡ আজকের সংক্ষিপ্ত খবর</h3>
            {otherStories.map((story, idx) => (
              <NewsCard key={story.id} story={story} variant="default" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
