import Image from "next/image";

interface Props {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export default function ExperienceCard({
  title,
  description,
  icon,
  className = "",
}: Props) {
  return (
    <div
      data-reveal
      data-direction="left"
      className={`group z-12 w-full rounded-[20px] bg-[#F8F2EA] p-6 shadow-xl flex flex-col gap-3 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:bg-white ${className}`}
    >
      <div className="flex items-center gap-3">
        <Image
          src={icon}
          alt=""
          width={40}
          height={40}
          className="shrink-0 transition-transform duration-300 ease-out group-hover:scale-110"
          sizes="40px"
          loading="eager"
        />

        <h3 className="font-heading text-[22px] leading-[28px] text-[#2F302B]">
          {title}
        </h3>
      </div>

      <p className="font-hanken text-[15px] leading-7 text-[#7C6A56]">
        {description}
      </p>
    </div>
  );
}
