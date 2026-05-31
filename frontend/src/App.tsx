import { useEffect, useState } from "react";
import type { ApplicationStatus, JobApplication, JobOffer } from "./types/JobApplication";
import {
  createApplication,
  deleteApplication,
  getApplications,
  updateApplication,
} from "./services/applicationService";
import "./App.css";

const jobOffers: JobOffer[] = [
  {
    id: 1,
    companyName: "Tech Solutions GmbH",
    jobTitle: "Junior Java Developer",
    location: "Koeln",
    jobType: "Vollzeit",
    description: "Entwicklung von REST APIs mit Java und Spring Boot.",
    jobUrl: "https://example.com/java-job",
  },
  {
    id: 2,
    companyName: "WebFactory Berlin",
    jobTitle: "Frontend Developer React",
    location: "Berlin",
    jobType: "Hybrid",
    description: "Entwicklung moderner Benutzeroberflaechen mit React und TypeScript.",
    jobUrl: "https://example.com/react-job",
  },
  {
    id: 3,
    companyName: "Digital Service AG",
    jobTitle: "IT Support Specialist",
    location: "Hamburg",
    jobType: "Teilzeit",
    description: "Bearbeitung von IT-Anfragen und Unterstuetzung interner Benutzer.",
    jobUrl: "https://example.com/support-job",
  },
];

function App() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobOffer | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);

  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "ALL">("ALL");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  // Bewerbungen beim Start der Seite laden
  useEffect(() => {
    loadApplications();
  }, []);

  // Daten vom Backend laden
  async function loadApplications() {
    const data = await getApplications();
    setApplications(data);
  }

  // Status fuer die Anzeige auf Deutsch umwandeln
  function getStatusText(applicationStatus: ApplicationStatus) {
    if (applicationStatus === "APPLIED") {
      return "Beworben";
    }

    if (applicationStatus === "INTERVIEW") {
      return "Vorstellungsgespraech";
    }

    if (applicationStatus === "REJECTED") {
      return "Absage";
    }

    return "Angebot";
  }

  // Formular fuer eine Stelle oeffnen
  function handleApplyClick(job: JobOffer) {
    setSelectedJob(job);
    setShowAdmin(false);
  }

  // Bewerbungsformular schliessen
  function handleCancelApplication() {
    setSelectedJob(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCoverLetter("");
  }

  // Neue Bewerbung speichern
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!selectedJob) {
      return;
    }

    const newApplication: JobApplication = {
      companyName: selectedJob.companyName,
      jobTitle: selectedJob.jobTitle,
      jobUrl: selectedJob.jobUrl,
      firstName,
      lastName,
      email,
      phone,
      coverLetter,
      status: "APPLIED",
      notes: "Neue Bewerbung ueber das Jobportal",
    };

    await createApplication(newApplication);
    await loadApplications();

    handleCancelApplication();
    alert("Ihre Bewerbung wurde erfolgreich gesendet.");
  }

  // Status einer Bewerbung aktualisieren
  async function handleStatusChange(
    application: JobApplication,
    newStatus: ApplicationStatus
  ) {
    if (!application.id) {
      return;
    }

    const updatedApplication: JobApplication = {
      ...application,
      status: newStatus,
    };

    await updateApplication(application.id, updatedApplication);
    await loadApplications();
  }

  // Bewerbung loeschen
  async function handleDelete(id: number) {
    await deleteApplication(id);
    await loadApplications();
  }

  // Bewerbungen nach Status filtern
  const filteredApplications =
    statusFilter === "ALL"
      ? applications
      : applications.filter((application) => application.status === statusFilter);

  return (
    <div className="page">
      <header className="header">
        <h1>Bewerbungsportal</h1>
        <p>Mini Job Portal mit Bewerbungsmanagement.</p>

        <div className="header-actions">
          <button onClick={() => setShowAdmin(false)}>Jobangebote</button>
          <button onClick={() => setShowAdmin(true)}>Admin Bereich</button>
        </div>
      </header>

      <main className="content">
        {!showAdmin && !selectedJob && (
          <section className="card">
            <h2>Aktuelle Jobangebote</h2>

            <div className="job-list">
              {jobOffers.map((job) => (
                <div className="job-card" key={job.id}>
                  <h3>{job.jobTitle}</h3>
                  <p>Unternehmen: {job.companyName}</p>
                  <p>Standort: {job.location}</p>
                  <p>Arbeitsmodell: {job.jobType}</p>
                  <p>{job.description}</p>

                  <button onClick={() => handleApplyClick(job)}>
                    Bewerben
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {!showAdmin && selectedJob && (
          <section className="card">
            <h2>Bewerbung fuer {selectedJob.jobTitle}</h2>
            <p>Unternehmen: {selectedJob.companyName}</p>

            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                placeholder="Vorname"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Nachname"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />

              <input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Telefon"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />

              <textarea
                placeholder="Kurzes Anschreiben"
                value={coverLetter}
                onChange={(event) => setCoverLetter(event.target.value)}
                required
              />

              <button type="submit">Bewerbung absenden</button>
              <button type="button" className="secondary-button" onClick={handleCancelApplication}>
                Abbrechen
              </button>
            </form>
          </section>
        )}

        {showAdmin && (
          <section className="card">
            <div className="list-header">
              <h2>Admin Bereich - Eingegangene Bewerbungen</h2>

              <select
                className="filter-select"
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(event.target.value as ApplicationStatus | "ALL")
                }
              >
                <option value="ALL">Alle Status</option>
                <option value="APPLIED">Beworben</option>
                <option value="INTERVIEW">Vorstellungsgespraech</option>
                <option value="REJECTED">Absage</option>
                <option value="OFFER">Angebot</option>
              </select>
            </div>

            {filteredApplications.length === 0 ? (
              <p>Noch keine Bewerbungen vorhanden.</p>
            ) : (
              <div className="application-list">
                {filteredApplications.map((application) => (
                  <div className="application-item" key={application.id}>
                    <div className="application-info">
                      <h3>{application.jobTitle}</h3>
                      <p>Unternehmen: {application.companyName}</p>
                     <p>
  Bewerber:{" "}
  {application.firstName || application.lastName
    ? `${application.firstName} ${application.lastName}`
    : "Keine Angabe"}
</p>
<p>E-Mail: {application.email || "Keine Angabe"}</p>
<p>Telefon: {application.phone || "Keine Angabe"}</p>
<p>Status: {getStatusText(application.status)}</p>
<p>Datum: {application.applicationDate || "Keine Angabe"}</p>
<p>Anschreiben: {application.coverLetter || "Keine Angabe"}</p>
                    </div>

                    <div className="application-actions">
                      <select
                        value={application.status}
                        onChange={(event) =>
                          handleStatusChange(
                            application,
                            event.target.value as ApplicationStatus
                          )
                        }
                      >
                        <option value="APPLIED">Beworben</option>
                        <option value="INTERVIEW">Vorstellungsgespraech</option>
                        <option value="REJECTED">Absage</option>
                        <option value="OFFER">Angebot</option>
                      </select>

                      {application.id && (
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(application.id!)}
                        >
                          Loeschen
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;