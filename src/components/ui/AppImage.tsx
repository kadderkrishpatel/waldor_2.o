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
    />
  );
}
