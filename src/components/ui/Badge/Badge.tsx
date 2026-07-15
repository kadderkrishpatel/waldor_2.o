export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
    inline-flex
    px-4
    py-2
    rounded-full
    bg-[#E3E5E5]
    text-[#997B4E]
    text-xs
    font-bold
    uppercase
    "
    >
      {children}
    </span>
  );
}
