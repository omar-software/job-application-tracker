package com.omarsoftware.jobapplication.controller;

import com.omarsoftware.jobapplication.model.JobApplication;
import com.omarsoftware.jobapplication.repository.JobApplicationRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DatabaseViewerController {

    private final JobApplicationRepository jobApplicationRepository;

    public DatabaseViewerController(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    // Alle Daten aus der Bewerbungstabelle im Browser anzeigen
    @GetMapping("/api/database/applications")
    public List<JobApplication> showApplicationsTable() {
        return jobApplicationRepository.findAll();
    }
}