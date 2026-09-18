import Image from "next/image";
import Link from "next/link";

interface DoctorCardProps {
  slug: string;
  image: string;
  name: string;
  role: string;
}

export default function DoctorCard({
  slug,
  image,
  name,
  role,
}: DoctorCardProps) {
  return (
    <Link
      data-reveal
      data-direction="left"
      href="/doctors"
      className="group relative block aspect-[411/530] overflow-hidden rounded-[32px] bg-[#515D59]"
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="eager"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#28302D] via-[#28302D]/10 to-transparent" />

      <div className="absolute bottom-8 left-8 z-10">
        <h3 className="text-[32px] text-[#BEC2C0]">{name}</h3>

        <p className="mt-2 text-sm text-[#7D8582]">{role}</p>
      </div>
    </Link>
  );
}
