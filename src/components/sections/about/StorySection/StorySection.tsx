import StoryCard from "./StoryCard";
import { stories } from "./StorySection.data";
import StoryQuote from "./StoryQuote";

export default function StorySection() {
  return (
    <>
      {stories.map((story) => (
        <div key={story.id}>
          <StoryCard story={story} />

          {story.quote && <StoryQuote quote={story.quote} />}
        </div>
      ))}
    </>
  );
}
