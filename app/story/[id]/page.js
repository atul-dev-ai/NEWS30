import Link from "next/link";
import { dummyStories } from "../../../data/mock";

export default async function StoryCluster({ params }) {
  const { id } = await params;
  const story = dummyStories.find((s) => s.id === id) || dummyStories[0];

  return (
    <div className="story-cluster-page container mt-6">
      <div className="flex items-center gap-2 text-sm font-bold text-muted mb-4 uppercase tracking-widest">
        <span>একই খবর</span>
        <span className="w-full h-[1px] bg-gray-200"></span>
      </div>

      <h1 className="text-3xl font-bold mt-2">{story.headline}</h1>

      <div className="ai-summary card mt-6 mb-8 p-4 bg-gray-50 border-l-4 border-primary-600">
        <div className="text-primary font-bold text-sm mb-2 flex items-center gap-2">
          <span>✨</span> AI Summary
        </div>
        <p className="text-base leading-relaxed">{story.summary}</p>
      </div>

      <div className="sources-covered">
        <div className="flex items-center justify-between mb-4 border-b pb-2">
          <h3 className="text-xl font-bold">Covered By</h3>
          <span className="badge-sources font-bold text-xs">{story.sources?.length} Sources</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {story.sources?.map((src) => (
            <div key={src.id} className="card p-4 hover:border-primary-600 transition-colors cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📰</span>
                <span className="font-bold">{src.name}</span>
              </div>
              <p className="text-sm font-medium">{src.originalHeadline}</p>
              <div className="mt-4 text-primary text-sm font-bold">
                Read Original →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
