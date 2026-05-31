# Job Application Tracker

A full-stack portfolio project for managing job offers and incoming job applications.

The application provides a small job portal where users can view job offers, submit an application, and an admin area where submitted applications can be reviewed, filtered, updated, and deleted.

## Project Goal

This project was built as a personal portfolio project to demonstrate practical full-stack development skills using technologies commonly requested in the German software development job market.

The focus of this project is not only CRUD development, but also a realistic development workflow with database management, automated end-to-end testing, CI, and a basic security scan.

## Features

### Public Job Portal

* Display example job offers
* Open an application form for a selected job offer
* Submit applicant data
* Store submitted applications in a PostgreSQL database

### Admin Area

* View all incoming applications
* See applicant details
* Filter applications by status
* Update application status
* Delete applications

### Database and DevOps

* PostgreSQL database running with Docker
* pgAdmin for browser-based database management
* Docker Compose setup for local development
* GitHub Actions workflow for automated test execution

### Testing and Security

* Playwright end-to-end tests with TypeScript
* HTML test report with Playwright
* OWASP ZAP Baseline Scan against the local frontend
* Security reports excluded from Git

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Web
* Spring Data JPA
* PostgreSQL
* Maven

### Frontend

* React
* TypeScript
* Vite
* Axios
* CSS
* Playwright

### Database, DevOps and Tools

* PostgreSQL
* Docker
* Docker Compose
* pgAdmin
* Git
* GitHub
* GitHub Actions
* OWASP ZAP

## Project Structure

```text
job-application-tracker
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── mvnw
│
├── frontend
│   ├── src
│   ├── tests
│   ├── package.json
│   ├── playwright.config.ts
│   └── vite.config.ts
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── docker-compose.yml
├── README.md
├── LICENSE
└── .gitignore
```

## Backend API Endpoints

| Method | Endpoint                 | Description               |
| ------ | ------------------------ | ------------------------- |
| GET    | `/api/health`            | Backend health check      |
| GET    | `/api/applications`      | Get all applications      |
| GET    | `/api/applications/{id}` | Get one application by ID |
| POST   | `/api/applications`      | Create a new application  |
| PUT    | `/api/applications/{id}` | Update an application     |
| DELETE | `/api/applications/{id}` | Delete an application     |

## Application Status Values

```text
APPLIED
INTERVIEW
REJECTED
OFFER
```

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/omar-software/job-application-tracker.git
cd job-application-tracker
```

### 2. Start PostgreSQL and pgAdmin with Docker

```bash
docker compose up -d
```

PostgreSQL runs on:

```text
localhost:5432
```

pgAdmin runs on:

```text
http://localhost:5050
```

pgAdmin login:

```text
Email: admin@jobtracker.de
Password: admin
```

PostgreSQL connection data in pgAdmin:

```text
Host: postgres
Port: 5432
Database: job_application_db
Username: postgres
Password: postgres
```

## Backend Setup

Go to the backend folder:

```bash
cd backend
```

Start the Spring Boot backend:

```bash
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
.\mvnw spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

Health check:

```text
http://localhost:8080/api/health
```

## Frontend Setup

Go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

If the port is already in use, Vite may start the application on another port, for example:

```text
http://localhost:5174
```

## Database Access with pgAdmin

Open:

```text
http://localhost:5050
```

Then open:

```text
Servers
> Job Application DB
> Databases
> job_application_db
> Schemas
> public
> Tables
> job_applications
```

To view stored applications:

```text
Right click job_applications
> View/Edit Data
> All Rows
```

## Example Workflow

1. Open the frontend.
2. Select a job offer.
3. Click `Bewerben`.
4. Fill out the application form.
5. Submit the application.
6. Open the admin area.
7. Review, filter, update, or delete the application.
8. Open pgAdmin to inspect the stored database record.

## Testing, CI and Security

### Playwright End-to-End Tests

The project includes automated end-to-end tests with Playwright and TypeScript.

The tests cover:

* Displaying job offers
* Submitting a job application
* Opening the admin area

Run tests locally:

```bash
cd frontend
npx playwright test
```

Open the Playwright HTML report:

```bash
npx playwright show-report
```

Example local test result:

```text
3 passed
```

### GitHub Actions CI

A GitHub Actions workflow is included to run Playwright tests automatically on push and pull requests.

Workflow file:

```text
.github/workflows/playwright.yml
```

The CI workflow includes:

* Checkout repository
* Setup Java
* Start Spring Boot backend
* Setup Node.js
* Install frontend dependencies
* Install Playwright browser
* Run Playwright tests

### OWASP ZAP Baseline Scan

A basic OWASP ZAP Baseline Scan was executed against the local frontend application.

The scan was performed using Docker:

```bash
docker run --rm -t -v ${PWD}/security-reports:/zap/wrk ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t http://host.docker.internal:5173 -r zap-report.html
```

The generated report is stored locally in:

```text
security-reports/zap-report.html
```

The `security-reports` folder is excluded from Git because scan reports may contain local environment details.

### OWASP ZAP Scan Summary

```text
High: 0
Medium: 2
Low: 5
Informational: 2
```

The reported findings are mainly related to missing security headers while running the React application on the local Vite development server.

## Portfolio Focus

This project demonstrates:

* Building REST APIs with Spring Boot
* Connecting React with a backend API
* Persisting data with PostgreSQL
* Using Docker Compose for local infrastructure
* Managing database data with pgAdmin
* Implementing a job application workflow
* Implementing an admin area
* Writing automated end-to-end tests with Playwright
* Running tests in GitHub Actions CI
* Performing a basic OWASP ZAP security scan
* Structuring a full-stack project for GitHub

## German CV Description

**Bewerbungsportal mit Admin-Bereich – Full-Stack Web Application**
Java · Spring Boot · React · TypeScript · PostgreSQL · Docker · pgAdmin · Playwright · GitHub Actions · OWASP ZAP · REST API

Entwicklung einer Full-Stack-Webanwendung zur Anzeige von Jobangeboten und Verwaltung eingehender Bewerbungen.
Implementierung eines Spring-Boot-Backends mit REST-API, Spring Data JPA und PostgreSQL-Datenbank.
Entwicklung eines React-TypeScript-Frontends mit Bewerbungsformular, Admin-Bereich, Statusverwaltung und Filterfunktion.
Integration von Docker Compose zur lokalen Bereitstellung von PostgreSQL und pgAdmin.
Erstellung automatisierter End-to-End-Tests mit Playwright und TypeScript.
Einrichtung einer GitHub-Actions-CI-Pipeline zur automatisierten Testausführung.
Durchführung eines OWASP-ZAP-Baseline-Scans zur grundlegenden Sicherheitsprüfung der lokalen Webanwendung.
Analyse typischer Security-Header-Hinweise aus dem lokalen Vite-Development-Server.
Veröffentlichung auf GitHub inklusive professioneller README-Dokumentation und Portfolio-Lizenz.

## License

All rights reserved.

This project is a personal portfolio project. The source code is publicly visible for demonstration purposes only. Copying, modifying, distributing, or using this software without permission is not allowed.
