package com.omarsoftware.jobapplication.repository;

import com.omarsoftware.jobapplication.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
}
