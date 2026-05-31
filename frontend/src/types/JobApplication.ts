export type ApplicationStatus = "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER";

export interface JobApplication {
  id?: number;
  companyName: string;
  jobTitle: string;
  jobUrl: string;
  status: ApplicationStatus;
  applicationDate: string;
  notes: string;
}