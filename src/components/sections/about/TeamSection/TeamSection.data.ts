import { asset } from "@/src/lib/assets";

export const teamData = {
  eyebrow: "MEET THE TEAM",
  before: "The people",
  highlight: "who listen first",
  description:
    "Every WALDOR practitioner is trained across our full range of Korean and Japanese technologies, and our signature protocols, HydraGlass  ™ included, are performed by all of them. Your treatment is never limited by who you see. What you will notice is what each of them is drawn to.",
  image: asset("/assets/waldor/about-hero.jpg"), // Replace with your image
};

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  description: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Abbie",
    designation: "Lead Aesthetician",
    description:
      "Abbie believes the treatment is only half the result. She is drawn to microneedling and the precision it takes to do it beautifully, and she has a real fondness for congested skin, the kind that needs proper extraction work before anything else can be built on top of it. Clearing acne and blackheads is, in her words, the satisfying part. What follows is the aftercare journey she maps out around it, exactly what your skin needs in the days and weeks afterwards. Clients tend to leave her room understanding their own skin properly, often for the first time.",
    image: asset("/assets/waldor/team-1.png"),
  },
  {
    id: 2,
    name: "Marsi",
    designation: "Senior Aesthetic Practitioner",
    description:
      "Marsi is at her best with lifting and tightening technologies, HIFU above all. She has a particular eye for body transformation, designing considered programmes for clients who want results that build gradually and last.",
    image: asset("/assets/waldor/team-2.png"),
  },
  {
    id: 3,
    name: "Beatrice",
    designation: "Senior Aesthetic Practitioner",
    description:
      "Beatrice works at the level the eye cannot see. She is drawn to regenerative aesthetics, to polynucleotides (PDRN) and exosomes, and to the AI 4D analysis that shows what skin is actually doing beneath the surface.",
    image: asset("/assets/waldor/team-3.png"),
  },
  {
    id: 4,
    name: "Hend",
    designation: "Senior Aesthetic Practitioner",
    description:
      "Hend builds the plan around the person in front of her before she settles on a single setting. She is drawn to laser resurfacing and pigment work, to the glass skin protocols, and to reading the skin as it changes.",
    image: asset("/assets/waldor/team-4.png"),
  },
  {
    id: 5,
    name: "Dr. Irene",
    designation: "Medical Director",
    description:
      "Dr Irene leads the clinical side of WALDOR. She came to aesthetics from dentistry, which sounds like a departure and is in fact an advantage. Dental training studies the anatomy of the face in a way few other disciplines do.",
    image: asset("/assets/waldor/team-5.png"),
  },
  {
    id: 6,
    name: "Dr. Azadeh",
    designation: "Aesthetic Doctor",
    description:
      "With more than 15 years of experience in aesthetic medicine and injectables, Dr Azadeh takes a considered, holistic approach to facial aesthetics.",
    image: asset("/assets/waldor/team-6.png"),
  },
  {
    id: 7,
    name: "Brooke",
    designation: "Front of House",
    description:
      "Brooke excels in innovative lifting and tightening techniques, especially HIFU. With a keen focus on body transformation, she crafts tailored programs for clients addressing persistent concerns.",
    image: asset("/assets/waldor/team-7.png"),
  },
  {
    id: 8,
    name: "Emily",
    designation: "Front of House",
    description:
      "Emily is passionate about skincare and believes that understanding your skin is crucial for achieving the best results. She loves exploring innovative treatments and is particularly interested in preventative care.",
    image: asset("/assets/waldor/team-8.png"),
  },
  {
    id: 9,
    name: "Hedieh",
    designation: "Clinic Manager",
    description:
      "Hedieh is a visionary in the field of skincare, focusing on innovative techniques that go beyond the visible. She explores the potential of advanced materials like polynucleotides and exosomes.",
    image: asset("/assets/waldor/team-9.png"),
  },
];
