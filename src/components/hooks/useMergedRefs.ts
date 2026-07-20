"use client";
import { MutableRefObject, RefCallback } from "react";

export default function useMergedRefs<T>(
  ...refs: (MutableRefObject<T | null> | RefCallback<T> | null)[]
): RefCallback<T> {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(value);
      } else {
        ref.current = value;
      }
    });
  };
}
