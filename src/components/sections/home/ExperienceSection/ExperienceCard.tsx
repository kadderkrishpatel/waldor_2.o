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
      className={`z-2 absolute w-[300px] rounded-[20px] bg-[#F8F2EA] p-7 shadow-xl flex flex-col gap-[20px] ${className}`}
    >
      <Image src={icon} alt={title} width={48} height={48} />

      <h3 className="font-heading fmt-5 text-[28px] leading-[36px] text-[#2F302B]">
        {title}
      </h3>

      <p className="font-hanken text-[15px] leading-7 text-[#7C6A56]">{description}</p>
    </div>
  );
}
