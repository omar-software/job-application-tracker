import { useEffect, useState } from "react";
import type { JobApplication, ApplicationStatus } from "./types/JobApplication";
import {
  createApplication,
  deleteApplication,
  getApplications,
} from "./services/applicationService";
import "./App.css";

function App() {
  const [applications, setApplications] = useState<JobApplication[]>([]);

  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [status, setStatus] = useState<ApplicationStatus>("APPLIED");
  const [applicationDate, setApplicationDate] = useState("");
  const [notes, setNotes] = useState("");

  // Bewerbungen beim Start der Seite laden
  useEffect(() => {
    loadApplications();
  }, []);

  // Daten vom Backend laden
  async function loadApplications() {
    const data = await getApplications();
    setApplications(data);
  }

  // Neue Bewerbung speichern
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const newApplication: JobApplication = {
      companyName,
      jobTitle,
      jobUrl,
      status,
      applicationDate,
      notes,
    };

    await createApplication(newApplication);
    await loadApplications();

    setCompanyName("");
    setJobTitle("");
    setJobUrl("");
    setStatus("APPLIED");
    setApplicationDate("");
    setNotes("");
  }

  // Bewerbung loeschen
  async function handleDelete(id: number) {
    await deleteApplication(id);
    await loadApplications();
  }

  return (
    <div className="page">
      <header className="header">
        <h1>Bewerbungsmanager</h1>
        <p>Ein einfaches Tool zur Verwaltung von Bewerbungen.</p>
      </header>

      <main className="content">
        <section className="card">
          <h2>Neue Bewerbung erfassen</h2>

          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Unternehmen"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Stellenbezeichnung"
              value={jobTitle}
              onChange={(event) => setJobTitle(event.target.value)}
              required
            />

            <input
              type="url"
              placeholder="Link zur Stellenanzeige"
              value={jobUrl}
              onChange={(event) => setJobUrl(event.target.value)}
            />

            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as ApplicationStatus)}
            >
              <option value="APPLIED">Beworben</option>
              <option value="INTERVIEW">Vorstellungsgespraech</option>
              <option value="REJECTED">Absage</option>
              <option value="OFFER">Angebot</option>
            </select>

            <input
              type="date"
              value={applicationDate}
              onChange={(event) => setApplicationDate(event.target.value)}
            />

            <textarea
              placeholder="Notizen"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />

            <button type="submit">Bewerbung speichern</button>
          </form>
        </section>

        <section className="card">
          <h2>Meine Bewerbungen</h2>

          {applications.length === 0 ? (
            <p>Noch keine Bewerbungen vorhanden.</p>
          ) : (
            <div className="application-list">
              {applications.map((application) => (
                <div className="application-item" key={application.id}>
                  <div>
                    <h3>{application.jobTitle}</h3>
                    <p>Unternehmen: {application.companyName}</p>
                    <p>Status: {application.status}</p>
                    <p>Bewerbungsdatum: {application.applicationDate}</p>
                    <p>Notizen: {application.notes}</p>

                    {application.jobUrl && (
                      <a href={application.jobUrl} target="_blank">
                        Stellenanzeige oeffnen
                      </a>
                    )}
                  </div>

                  {application.id && (
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(application.id!)}
                    >
                      Loeschen
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;