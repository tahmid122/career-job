export interface JobType {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  tags: string[];
  experience: number;
  skills: string[];
  deadline: string;
  type: "Internship" | "Full time" | "Contract" | "Part time";
  responsibilities: string[];
  requirements: string[];
  salary?: string;
}
