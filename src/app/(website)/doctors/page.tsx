import type { Metadata } from "next";
import DoctorSection from "@/src/components/sections/home/DoctorSection";

export const metadata: Metadata = {
  title: "Our Practitioners | Waldor Clinic",
  description:
    "Meet the aestheticians and medical practitioners behind Waldor Clinic — the specialists who deliver every treatment and consultation.",
};

export default function DoctorsPage() {
  return (
    <section className="p-2 lg:p-4 overflow-hidden">
      <DoctorSection headingAs="h1" layout="grid" />
    </section>
  );
}
