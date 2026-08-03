import { asset } from "@/src/lib/assets";

export const teamData = {
  eyebrow: "MEET THE TEAM",
  before: "The people",
  highlight: "who listen first",
  description:
    "Expertise, empathy and genuine human connection are not a strapline here—they are the hiring criteria. The clinician who assesses you is the clinician who treats you.",
  image: asset("/assets/waldor/about-hero.jpg"), // Replace with your image
};

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sara Todd",
    designation: "Skin Care Specialist",
    image: asset("/assets/waldor/team-1.jpg"),
  },
  {
    id: 2,
    name: "Sara Todd",
    designation: "Skin Care Specialist",
    image: asset("/assets/waldor/team-2.jpg"),
  },
  {
    id: 3,
    name: "Sara Todd",
    designation: "Skin Care Specialist",
    image: asset("/assets/waldor/team-3.jpg"),
  },
  {
    id: 4,
    name: "Sara Todd",
    designation: "Skin Care Specialist",
    image: asset("/assets/waldor/team-4.jpg"),
  },
  {
    id: 5,
    name: "Sara Todd",
    designation: "Skin Care Specialist",
    image: asset("/assets/waldor/team-5.jpg"),
  },
  {
    id: 6,
    name: "Sara Todd",
    designation: "Skin Care Specialist",
    image: asset("/assets/waldor/team-6.jpg"),
  },
];
