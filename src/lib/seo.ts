import type { Metadata } from "next";

export function generateSEO({
  title,

  description,
}: {
  title: string;

  description: string;
}): Metadata {
  return {
    title,

    description,

    openGraph: {
      title,

      description,
    },
  };
}
