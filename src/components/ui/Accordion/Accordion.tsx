"use client";
import { useState } from "react";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
border-b
border-[#D8CBB8]
py-5
"
    >
      <button
        onClick={() => setOpen(!open)}
        className="
w-full
flex
justify-between
text-left
"
      >
        <span>{title}</span>

        <span>+</span>
      </button>

      {open && (
        <div
          className="
mt-5
text-[#836C4E]
"
        >
          {children}
        </div>
      )}
    </div>
  );
}
