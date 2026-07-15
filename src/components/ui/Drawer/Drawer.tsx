"use client";

export default function Drawer({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`
fixed
top-0
right-0
h-screen
w-[350px]
bg-white
z-[100]
transition-transform
${open ? "translate-x-0" : "translate-x-full"}
`}
    >
      {children}
    </div>
  );
}
