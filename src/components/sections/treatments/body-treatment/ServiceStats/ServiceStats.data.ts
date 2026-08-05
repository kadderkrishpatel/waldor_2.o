export interface ServiceStat {
  id: string;
  value: string;
  label: string;
  isLast?: boolean;
  specialValue?: string;
}

export const serviceStats: ServiceStat[] = [
  {
    id: "clients",
    value: "1000+",
    label: "Trusted by clients",
  },
  {
    id: "rating",
    value: "4.9",
    specialValue: "★ ★ ★ ★ ★",
    label: "Google Ratings",
  },
  {
    id: "experience",
    value: "15+",
    label: "Years of experience",
    isLast: true,
  },
];
