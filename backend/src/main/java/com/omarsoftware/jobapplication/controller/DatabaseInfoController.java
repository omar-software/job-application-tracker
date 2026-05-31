package com.omarsoftware.jobapplication.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.util.HashMap;
import java.util.Map;

@RestController
public class DatabaseInfoController {

    private final DataSource dataSource;

    public DatabaseInfoController(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    // Ein einfacher Endpunkt zum Anzeigen von Datenbankinformationen
    @GetMapping("/api/database-info")
    public Map<String, String> getDatabaseInfo() throws Exception {
        Map<String, String> info = new HashMap<>();

        try (Connection connection = dataSource.getConnection()) {
            DatabaseMetaData metaData = connection.getMetaData();

            info.put("databaseProductName", metaData.getDatabaseProductName());
            info.put("databaseProductVersion", metaData.getDatabaseProductVersion());
            info.put("databaseUrl", metaData.getURL());
            info.put("databaseUser", metaData.getUserName());
        }

        return info;
    }
}