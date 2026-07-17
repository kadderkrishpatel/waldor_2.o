interface Props {
  children: React.ReactNode;
}

export default function FormLabel({ children }: Props) {
  return (
    <label className="mb-3 block text-xs font-bold tracking-[2px] uppercase text-[#C5A375]">
      {children}
    </label>
  );
}
