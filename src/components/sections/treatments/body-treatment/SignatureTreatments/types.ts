export interface TreatmentRow {
  id: string;
  title: string;
  description?: string;
  price: string;
  href?: string;
}

export interface TreatmentCard {
  id: string;
  title: string;
  description: string;
  areas?: string[];
  rows: TreatmentRow[];
  fullWidth?: boolean;
}

export interface InfoCard {
  id: string;
  title: string;
  description: string;
  href?: string;
}
