package com.omarsoftware.jobapplication.controller;

import com.omarsoftware.jobapplication.model.JobApplication;
import com.omarsoftware.jobapplication.service.JobApplicationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class JobApplicationController {

    private final JobApplicationService jobApplicationService;

    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    // Alle Bewerbungen anzeigen
    @GetMapping
    public List<JobApplication> getAllApplications() {
        return jobApplicationService.getAllApplications();
    }

    // Neue Bewerbung erstellen
    @PostMapping
    public JobApplication createApplication(@RequestBody JobApplication jobApplication) {
        return jobApplicationService.createApplication(jobApplication);
    }
}