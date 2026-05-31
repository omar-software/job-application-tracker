package com.omarsoftware.jobapplication.service;

import com.omarsoftware.jobapplication.model.JobApplication;
import com.omarsoftware.jobapplication.repository.JobApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobApplicationService {

    private final JobApplicationRepository jobApplicationRepository;

    public JobApplicationService(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    // Alle Bewerbungen aus der Datenbank laden
    public List<JobApplication> getAllApplications() {
        return jobApplicationRepository.findAll();
    }

    // Eine neue Bewerbung speichern
    public JobApplication createApplication(JobApplication jobApplication) {
        return jobApplicationRepository.save(jobApplication);
    }
}