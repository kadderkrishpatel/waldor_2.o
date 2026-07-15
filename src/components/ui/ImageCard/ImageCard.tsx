import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description?: string;
}

export default function ImageCard({ image, title, description }: Props) {
  return (
    <div
      className="
group
rounded-[28px]
overflow-hidden
"
    >
      <div
        className="
relative
h-[420px]
"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
object-cover
group-hover:scale-105
transition
duration-500
"
        />
      </div>

      <div
        className="
p-6
"
      >
        <h3
          className="
text-2xl
text-[#28302D]
"
        >
          {title}
        </h3>

        {description && (
          <p
            className="
mt-3
text-[#836C4E]
"
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
