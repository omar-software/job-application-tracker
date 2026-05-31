export type ApplicationStatus = "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER";

export interface JobApplication {
  id?: number;
  companyName: string;
  jobTitle: string;
  jobUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  status: ApplicationStatus;
  applicationDate?: string;
  notes: string;
}

export interface JobOffer {
  id: number;
  companyName: string;
  jobTitle: string;
  location: string;
  jobType: string;
  description: string;
  jobUrl: string;
}