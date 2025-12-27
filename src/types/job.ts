export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Internship" | "Full-time";
  description: string;
  salary?: string;
}
