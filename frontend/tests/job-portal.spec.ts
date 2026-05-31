import { test, expect } from "@playwright/test";

test("zeigt die Jobangebote an", async ({ page }) => {
  // Startseite oeffnen
  await page.goto("/");

  // Pruefen, ob die Ueberschrift sichtbar ist
  await expect(page.getByText("Bewerbungsportal")).toBeVisible();

  // Pruefen, ob Beispieljobs angezeigt werden
  await expect(page.getByText("Junior Java Developer")).toBeVisible();
  await expect(page.getByText("Frontend Developer React")).toBeVisible();
  await expect(page.getByText("IT Support Specialist")).toBeVisible();
});

test("kann eine Bewerbung absenden", async ({ page }) => {
  // Startseite oeffnen
  await page.goto("/");

  // Bewerbung fuer den ersten Job starten
  await page.getByRole("button", { name: "Bewerben" }).first().click();

  // Formular ausfuellen
  await page.getByPlaceholder("Vorname").fill("Max");
  await page.getByPlaceholder("Nachname").fill("Mustermann");
  await page.getByPlaceholder("E-Mail").fill("max.mustermann@test.de");
  await page.getByPlaceholder("Telefon").fill("015112345678");
  await page.getByPlaceholder("Kurzes Anschreiben").fill("Ich interessiere mich fuer diese Stelle.");

  // Bewerbung absenden
  await page.getByRole("button", { name: "Bewerbung absenden" }).click();

  // Erfolgsmeldung pruefen
  await expect(page.getByText("Ihre Bewerbung wurde erfolgreich gesendet.")).toBeVisible();
});

test("zeigt Bewerbungen im Admin Bereich an", async ({ page }) => {
  // Startseite oeffnen
  await page.goto("/");

  // In den Admin Bereich wechseln
  await page.getByRole("button", { name: "Admin Bereich" }).click();

  // Admin Bereich pruefen
  await expect(page.getByText("Admin Bereich - Eingegangene Bewerbungen")).toBeVisible();
});