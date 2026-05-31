import axios from "axios";
import type { JobApplication } from "../types/JobApplication";

const API_URL = "http://localhost:8080/api/applications";

// Alle Bewerbungen vom Backend laden
export async function getApplications() {
  const response = await axios.get<JobApplication[]>(API_URL);
  return response.data;
}

// Neue Bewerbung an das Backend senden
export async function createApplication(application: JobApplication) {
  const response = await axios.post<JobApplication>(API_URL, application);
  return response.data;
}

// Bewerbung im Backend aktualisieren
export async function updateApplication(id: number, application: JobApplication) {
  const response = await axios.put<JobApplication>(`${API_URL}/${id}`, application);
  return response.data;
}

// Bewerbung im Backend loeschen
export async function deleteApplication(id: number) {
  await axios.delete(`${API_URL}/${id}`);
}