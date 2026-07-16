import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function AppImage({
  src,
  alt,
  className,
  width = 800,
  height = 800,
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={false}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      loading="eager"
    />
  );
}
