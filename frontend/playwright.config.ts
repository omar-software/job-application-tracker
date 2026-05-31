import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  // Tests laufen nacheinander, damit der Einstieg einfacher bleibt
  fullyParallel: false,

  // Basis-URL fuer das React Frontend
  use: {
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
  },

  // Lokalen Frontend-Server fuer Tests starten
  webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 5173",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});