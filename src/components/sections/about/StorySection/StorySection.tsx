import StoryCard from "./StoryCard";
import { stories } from "./StorySection.data";

export default function StorySection() {
  return (
    <>
      {stories.map((story) => (
        <div key={story.id}>
          <StoryCard story={story} />

          {story.quote && (
            <div
              data-reveal
              data-direction="right"
              className="bg-[#ECE0D1] py-28 m-2 lg:m-4 rounded-[32px]"
            >
              <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2
                  data-reveal
                  data-direction="left"
                  className="font-fraunces italic text-4xl font-[400] leading-tight text-[#3D4844] lg:text-6xl"
                >
                  "{story.quote.title}"
                </h2>

                <p
                  data-reveal
                  data-direction="left"
                  className="mx-auto mt-8 max-w-xl text-lg text-[#7D6A4E]"
                >
                  {story.quote.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
