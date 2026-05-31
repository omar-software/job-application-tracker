package com.omarsoftware.jobapplication.service;

import com.omarsoftware.jobapplication.model.JobApplication;
import com.omarsoftware.jobapplication.repository.JobApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    // Eine einzelne Bewerbung nach ID suchen
    public Optional<JobApplication> getApplicationById(Long id) {
        return jobApplicationRepository.findById(id);
    }

    // Eine neue Bewerbung speichern
    public JobApplication createApplication(JobApplication jobApplication) {
        return jobApplicationRepository.save(jobApplication);
    }

    // Eine vorhandene Bewerbung aktualisieren
    public Optional<JobApplication> updateApplication(Long id, JobApplication updatedApplication) {
        Optional<JobApplication> existingApplication = jobApplicationRepository.findById(id);

        if (existingApplication.isEmpty()) {
            return Optional.empty();
        }

        JobApplication jobApplication = existingApplication.get();

        jobApplication.setCompanyName(updatedApplication.getCompanyName());
        jobApplication.setJobTitle(updatedApplication.getJobTitle());
        jobApplication.setJobUrl(updatedApplication.getJobUrl());
        jobApplication.setStatus(updatedApplication.getStatus());
        jobApplication.setApplicationDate(updatedApplication.getApplicationDate());
        jobApplication.setNotes(updatedApplication.getNotes());

        JobApplication savedApplication = jobApplicationRepository.save(jobApplication);

        return Optional.of(savedApplication);
    }

    // Eine Bewerbung löschen
    public boolean deleteApplication(Long id) {
        if (!jobApplicationRepository.existsById(id)) {
            return false;
        }

        jobApplicationRepository.deleteById(id);
        return true;
    }
}