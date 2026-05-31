\# Job Application Tracker



A full-stack portfolio project for managing job offers and incoming job applications.



The application provides a small job portal where users can view job offers, submit an application, and an admin area where submitted applications can be reviewed, filtered, updated, and deleted.



\## Project Goal



This project was built as a personal portfolio project to demonstrate practical full-stack development skills using technologies commonly requested in the German software development job market.



\## Features



\### Public Job Portal



\* Display example job offers

\* Open an application form for a selected job offer

\* Submit applicant data

\* Store submitted applications in a PostgreSQL database



\### Admin Area



\* View all incoming applications

\* See applicant details

\* Filter applications by status

\* Update application status

\* Delete applications



\### Database \& DevOps



\* PostgreSQL database running with Docker

\* pgAdmin for browser-based database management

\* Docker Compose setup for local development



\## Tech Stack



\### Backend



\* Java

\* Spring Boot

\* Spring Web

\* Spring Data JPA

\* PostgreSQL

\* Maven



\### Frontend



\* React

\* TypeScript

\* Vite

\* Axios

\* CSS



\### Database \& Tools



\* PostgreSQL

\* Docker

\* Docker Compose

\* pgAdmin

\* Git

\* GitHub



\## Project Structure



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

│   ├── package.json

│   └── vite.config.ts

│

├── docker-compose.yml

├── README.md

├── LICENSE

└── .gitignore

```



\## Backend API Endpoints



| Method | Endpoint                 | Description               |

| ------ | ------------------------ | ------------------------- |

| GET    | `/api/health`            | Backend health check      |

| GET    | `/api/applications`      | Get all applications      |

| GET    | `/api/applications/{id}` | Get one application by ID |

| POST   | `/api/applications`      | Create a new application  |

| PUT    | `/api/applications/{id}` | Update an application     |

| DELETE | `/api/applications/{id}` | Delete an application     |



\## Application Status Values



```text

APPLIED

INTERVIEW

REJECTED

OFFER

```



\## Local Setup



\### 1. Clone the Repository



```bash

git clone https://github.com/omar-software/job-application-tracker.git

cd job-application-tracker

```



\### 2. Start PostgreSQL and pgAdmin with Docker



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



PostgreSQL connection data:



```text

Host: postgres

Port: 5432

Database: job\_application\_db

Username: postgres

Password: postgres

```



\## Backend Setup



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

.\\mvnw spring-boot:run

```



The backend runs on:



```text

http://localhost:8080

```



Health check:



```text

http://localhost:8080/api/health

```



\## Frontend Setup



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



The frontend runs on a Vite port, for example:



```text

http://localhost:5173

```



or



```text

http://localhost:5174

```



\## Database Access with pgAdmin



Open:



```text

http://localhost:5050

```



Then open:



```text

Servers

> Job Application DB

> Databases

> job\_application\_db

> Schemas

> public

> Tables

> job\_applications

```



To view stored applications:



```text

Right click job\_applications

> View/Edit Data

> All Rows

```



\## Example Workflow



1\. Open the frontend.

2\. Select a job offer.

3\. Click `Bewerben`.

4\. Fill out the application form.

5\. Submit the application.

6\. Open the admin area.

7\. Review, filter, update, or delete the application.

8\. Open pgAdmin to inspect the stored database record.



\## Portfolio Focus



This project demonstrates:



\* Building REST APIs with Spring Boot

\* Connecting React with a backend API

\* Persisting data with PostgreSQL

\* Using Docker Compose for local infrastructure

\* Managing database data with pgAdmin

\* Implementing a simple admin workflow

\* Structuring a full-stack project for GitHub



\## German CV Description



\*\*Bewerbungsportal mit Admin-Bereich – Full-Stack Web Application\*\*

Java · Spring Boot · React · TypeScript · PostgreSQL · Docker · pgAdmin · REST API · GitHub



Entwicklung einer Full-Stack-Webanwendung zur Anzeige von Jobangeboten und Verwaltung eingehender Bewerbungen.

Implementierung eines Spring-Boot-Backends mit REST-API, PostgreSQL-Datenbank und Spring Data JPA.

Entwicklung eines React-TypeScript-Frontends mit Jobangeboten, Bewerbungsformular und Admin-Bereich.

Integration von Docker Compose zur lokalen Bereitstellung von PostgreSQL und pgAdmin.

Umsetzung von CRUD-Funktionen, Statusverwaltung und Datenbankeinsicht über pgAdmin.

Veröffentlichung auf GitHub inklusive strukturierter Projektdokumentation.



\## License



All rights reserved.



This project is a personal portfolio project. The source code is publicly visible for demonstration purposes only. Copying, modifying, distributing, or using this software without permission is not allowed.



