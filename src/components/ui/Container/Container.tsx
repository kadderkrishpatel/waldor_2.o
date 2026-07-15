export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
    container
    mx-auto
    px-6
    lg:px-[60px]
    ${className}
    `}
    >
      {children}
    </div>
  );
}
