import { asset } from "@/src/lib/assets";
import { DoctorSectionProps } from "./DoctorSection.types";

export const doctorSectionData: DoctorSectionProps = {
  eyebrow: "Your Trusted Practitioner",
  heading: {
    before: "Meet the Aestheticians Behind",
    highlight: "Your Glass Skin",
  },
  description:
    "Great skin isn’t luck; it’s a discipline. Discover the specialists who sculpt, refine and deliver the glowing transformations our clients rave about.",
  doctors: [
    {
      name: "Abbie",
      role: "Lead Aesthetician",
      image: asset("/assets/waldor/team-1.png"),
      slug: "sara-todd",
    },
    {
      name: "Marsi",
      role: "Senior Aesthetic Practitioner",
      image: asset("/assets/waldor/team-2.png"),
      slug: "emily-carter",
    },
    {
      name: "Beatrice",
      role: "Senior Aesthetic Practitioner",
      image: asset("/assets/waldor/team-3.png"),
      slug: "jenny-wilson",
    },
    {
      name: "Hend",
      role: "Senior Aesthetic Practitioner",
      image: asset("/assets/waldor/team-4.png"),
      slug: "martha-jackson",
    },
    {
      name: "Dr. Irene",
      role: "Medical Director",
      image: asset("/assets/waldor/team-5.png"),
      slug: "team-member-5",
    },
    {
      name: "Dr. Azadeh",
      role: "Aesthetic Doctor",
      image: asset("/assets/waldor/team-6.png"),
      slug: "team-member-6",
    },
    {
      name: "Brooke",
      role: "Front of House",
      image: asset("/assets/waldor/team-7.png"),
      slug: "team-member-7",
    },
    {
      name: "Emily",
      role: "Front of House",
      image: asset("/assets/waldor/team-8.png"),
      slug: "team-member-8",
    },
    {
      name: "Hedieh",
      role: "Clinic Manager",
      image: asset("/assets/waldor/team-9.png"),
      slug: "team-member-9",
    },
  ],
};
