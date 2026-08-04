import { asset } from "@/src/lib/assets";
import { DoctorSectionProps } from "./DoctorSection.types";

export const doctorSectionData: DoctorSectionProps = {
  eyebrow: "OUR SKIN VANGUARDS",
  heading: {
    before: "Meet the Estheticians Behind",
    highlight: "Your Best Skin Days",
  },
  description:
    "Great skin isn’t luck; it’s a discipline. Discover the specialists who sculpt, refine and deliver the glowing transformations our clients rave about.",
  doctors: [
    {
      name: "Sara Todd",
      role: "Skin Care Specialist",
      image: asset("/assets/waldor/est-1.jpg"),
      slug: "sara-todd",
    },
    {
      name: "Emily Carter",
      role: "Aesthetic Doctor",
      image: asset("/assets/waldor/est-2.jpg"),
      slug: "emily-carter",
    },
    {
      name: "Jenny Wilson",
      role: "Hair Restoration Specialist",
      image: asset("/assets/waldor/est-3.jpg"),
      slug: "jenny-wilson",
    },
    {
      name: "Martha Jackson",
      role: "Cosmetic Physician",
      image: asset("/assets/waldor/est-4.jpg"),
      slug: "martha-jackson",
    },
  ],
};
