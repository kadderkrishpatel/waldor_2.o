"use client";
import React, { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);

      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);

      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        px-5
        "
      onClick={onClose}
    >
      <div
        className="
            relative
            w-full
            max-w-lg
            rounded-3xl
            bg-white
            p-8
            shadow-xl
            "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="
                absolute
                right-5
                top-5
                text-gray-500
                hover:text-black
                "
        >
          ✕
        </button>

        {title && (
          <h2
            className="
                    mb-6
                    text-2xl
                    font-semibold
                    "
          >
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>
  );
}
