package com.omarsoftware.jobapplication.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    // Ein einfacher Endpunkt zum Testen, ob das Backend läuft
    @GetMapping("/api/health")
    public String healthCheck() {
        return "Backend läuft erfolgreich";
    }
}
