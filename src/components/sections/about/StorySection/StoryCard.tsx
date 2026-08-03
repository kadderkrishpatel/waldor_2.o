"use client";
import Image from "next/image";
import { Story } from "./StorySection.data";
import { Eyebrow, Heading, Description } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

interface Props {
  story: Story;
}

export default function StoryCard({ story }: Props) {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="bg-brand-dark py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {story.image && (
            <div className="relative mb-20 h-[650px] overflow-hidden rounded-3xl">
              <Image
                data-reveal
                data-direction="right"
                src={story.image}
                alt={story.title}
                fill
                className="object-cover h-[650px]"
              />
            </div>
          )}

          {story.title && (
            <Eyebrow variant="secondary">
              {story.number}. {story.title.toUpperCase()}
            </Eyebrow>
          )}

          {story.beforeHeadingParagraph && (
            <div className="mt-10 space-y-6">
              {story.beforeHeadingParagraph.map((paragraph, index) => (
                <Description key={index}>{paragraph}</Description>
              ))}
            </div>
          )}

          {(story.before || story.highlight) && (
            <Heading
              as="h2"
              className="mt-6 lg:text-[48px]"
              before={story.before}
              highlight={story.highlight}
            />
          )}

          <div className="mt-10 space-y-6">
            {story.paragraphs.map((paragraph, index) => (
              <Description key={index}>{paragraph}</Description>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
