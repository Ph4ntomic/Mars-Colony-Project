# AP12 – Spezifikation
# Lastenheft und Pflichtenheft

Projekt: Mars Logistik Verwaltung [ALS]  
Version: 1.0  
Stand: 05.05.2026  
Praktikumsgruppe: [1]

---

## 1. Zweck des Dokuments

Dieses Dokument beschreibt, welche Funktionen Mars Logistik Verwaltung [ALS] bereitstellt und wie diese Funktionen technisch umgesetzt werden.

Das Lastenheft beschreibt die Anforderungen aus Sicht der Kolonieleitung.

Das Pflichtenheft beschreibt die technische Umsetzung mit den bereits vorhandenen und weiterentwickelten Bestandteilen aus Web-App, PHP-API, MariaDB, SQL-Dateien und Stored Procedures.

Die Spezifikation basiert auf dem vorhandenen Projektstand, der bereits überarbeitet, optimiert und erweitert wurde.

Ziel ist es, die vorhandenen technischen Funktionen fachlich sauber den sechs festgelegten Businessprozessen zuzuordnen und deren wirtschaftlichen Nutzen sichtbar zu machen.

---

## 2. Projektkontext

Mars Logistik Verwaltung [ALS] ist ein datenbankgestütztes Verwaltungssystem für die Logistik einer Marskolonie.

Die Marskolonie benötigt eine zuverlässige Verwaltung von Ressourcen, Lagerbeständen, Fahrzeugen, Transportmissionen, Energieversorgung und Personal.

Das Projekt basiert auf folgenden vorhandenen Bestandteilen:

| Bestandteil | Status |
|---|---|
| Web-App | vorhanden |
| PHP-API | vorhanden |
| SQL-Dateien | vorhanden |
| Stored Procedures | vorhanden / weiter ausbaubar |
| MariaDB-Datenbank | vorhanden |
| VPS | vorhanden |
| Businessprozesse | festgelegt |
| BPMN-Modelle | passend zu den Businessprozessen zu erstellen |
| Dokumentation | vorhanden und weiter zu optimieren |

VPS bedeutet Virtual Private Server, auf Deutsch: virtueller privater Server.

Ein VPS ist ein gemieteter Server im Internet, auf dem eigene Dienste betrieben werden können. In diesem Projekt läuft darauf die MariaDB-Datenbank für Mars Logistik Verwaltung [ALS].

---

## 3. Festgelegte Businessprozesse

| Nr. | Businessprozess | Ziel |
|---:|---|---|
| 1 | Kritische Ressourcen überwachen und Nachschub auslösen | Versorgungsengpässe früh erkennen und Gegenmaßnahmen einleiten |
| 2 | Transportmissionen planen und auswerten | Missionen, Fahrzeuge, Strecken und Ladung auswertbar machen |
| 3 | Energieengpass erkennen und Lastverteilung einleiten | Energieversorgung überwachen und Engpässe sichtbar machen |
| 4 | Ablaufende oder riskante Lagerbestände priorisiert verbrauchen | Lagerverluste vermeiden und Bestände wirtschaftlich nutzen |
| 5 | Personal- und Arbeitseinsätze ressourcenbasiert planen | Mitarbeitende, Rollen und Einsatzkapazitäten auswertbar machen |
| 6 | Überschüssige Ressourcen an externe Partner verkaufen | Ressourcenüberschüsse wirtschaftlich nutzbar machen |

---

## 4. Lastenheft

Das Lastenheft beschreibt die Anforderungen aus Sicht der Kolonieleitung.

Prioritätsskala:

| Priorität | Bedeutung |
|---:|---|
| 1 | Muss-Anforderung |
| 2 | Wichtige Anforderung |
| 3 | Optionale Erweiterung |

---

### 4.1 Funktionale Anforderungen

| ID | Businessprozess | Anforderung | Priorität | Status |
|---|---|---|---:|---|
| LH-01 | Kritische Ressourcen überwachen und Nachschub auslösen | Das System soll Ressourcen anzeigen, die unter dem Mindestbestand liegen. | 1 | vorhandene SQL-/DB-Grundlage |
| LH-02 | Kritische Ressourcen überwachen und Nachschub auslösen | Das System soll Ressourcen mit Lagerinformationen anzeigen. | 1 | vorhandene SQL-/DB-Grundlage |
| LH-03 | Kritische Ressourcen überwachen und Nachschub auslösen | Das System soll Nachschubbedarf fachlich erkennbar machen. | 1 | vorhandene SQL-/DB-Grundlage |
| LH-04 | Transportmissionen planen und auswerten | Das System soll Transportmissionen mit Fahrzeugen, Strecken und Status anzeigen. | 1 | vorhandene SQL-/DB-Grundlage |
| LH-05 | Transportmissionen planen und auswerten | Das System soll aktive und inaktive Fahrzeuge auswertbar machen. | 1 | vorhandene SQL-/DB-Grundlage |
| LH-06 | Transportmissionen planen und auswerten | Das System soll Flottenstatus und Fahrzeugverfügbarkeit für logistische Entscheidungen nutzbar machen. | 2 | vorhandene SQL-/DB-Grundlage |
| LH-07 | Energieengpass erkennen und Lastverteilung einleiten | Das System soll aktuelle Energiekennzahlen anzeigen. | 1 | vorhandene SQL-/DB-Grundlage |
| LH-08 | Energieengpass erkennen und Lastverteilung einleiten | Das System soll Energiequellen nach Städten auswertbar machen. | 2 | vorhandene SQL-/DB-Grundlage |
| LH-09 | Energieengpass erkennen und Lastverteilung einleiten | Das System soll mögliche Energieversorgungslücken sichtbar machen. | 2 | vorhandene SQL-/DB-Grundlage |
| LH-10 | Ablaufende oder riskante Lagerbestände priorisiert verbrauchen | Das System soll riskante Lagerbestände anzeigen. | 1 | vorhandene SQL-/DB-Grundlage |
| LH-11 | Ablaufende oder riskante Lagerbestände priorisiert verbrauchen | Das System soll Ressourcen mit erhöhtem Risiko sichtbar machen. | 1 | vorhandene SQL-/DB-Grundlage |
| LH-12 | Personal- und Arbeitseinsätze ressourcenbasiert planen | Das System soll Mitarbeitende anzeigen. | 2 | vorhandene SQL-/DB-Grundlage |
| LH-13 | Personal- und Arbeitseinsätze ressourcenbasiert planen | Das System soll Mitarbeitende nach Rolle, Beruf und Arbeitszeit auswertbar machen. | 2 | vorhandene SQL-/DB-Grundlage |
| LH-14 | Überschüssige Ressourcen an externe Partner verkaufen | Das System soll vorhandene Ressourcenübersichten als Grundlage für Verkaufsentscheidungen bereitstellen. | 3 | aus vorhandenen Ressourcenabfragen ableitbar |
| LH-15 | Überschüssige Ressourcen an externe Partner verkaufen | Das System soll verkaufbare Überschüsse aus Bestand, Mindestbestand und Lagerdaten ableitbar machen. | 3 | Erweiterung / wirtschaftlicher Ausbau |
| LH-16 | Übergreifend | Das System soll eine Weboberfläche mit Dashboard und Tabellenansichten bereitstellen. | 1 | vorhanden |
| LH-17 | Übergreifend | Das System soll Daten über eine PHP-API im JSON-Format bereitstellen. | 1 | vorhanden |
| LH-18 | Übergreifend | Die vorhandenen Datenbankabfragen und Stored Procedures sollen den sechs Businessprozessen eindeutig zugeordnet sein. | 1 | zu dokumentieren und zu optimieren |

---

### 4.2 Nicht-funktionale Anforderungen

| ID | Anforderung | Priorität | Status |
|---|---|---:|---|
| NFA-01 | Die Weboberfläche soll übersichtlich und demonstrierbar sein. | 1 | vorhanden |
| NFA-02 | Die Anwendung soll vorhandene SQL-Dateien und Stored Procedures nutzen. | 1 | vorhanden |
| NFA-03 | Die Datenbank liegt auf einer MariaDB auf einem VPS. | 1 | vorhanden |
| NFA-04 | VPS bedeutet Virtual Private Server, also virtueller privater Server im Internet. | 1 | vorhanden |
| NFA-05 | Der Zugriff auf Daten soll über die PHP-API erfolgen. | 1 | vorhanden |
| NFA-06 | Der Datenaustausch zwischen API und Web-App soll über JSON erfolgen. | 2 | vorhanden |
| NFA-07 | Vorhandene SQL-Dateien und Stored Procedures sollen fachlich den Businessprozessen zugeordnet werden. | 1 | zu dokumentieren |
| NFA-08 | Die vorhandene Datenbanklogik soll in Web-App, BPMN und Präsentation nachvollziehbar in Szene gesetzt werden. | 1 | zu optimieren |
| NFA-09 | Die vorhandenen Funktionen sollen wirtschaftlichen Nutzen sichtbar machen. | 2 | zu optimieren |
| NFA-10 | Fehlerfälle sollen verständlich angezeigt werden. | 3 | optional |

---

## 5. Pflichtenheft

Das Pflichtenheft beschreibt die technische Umsetzung aus Sicht des Projektteams.

PT = Personentag  
Restaufwand = geschätzter Aufwand ab aktuellem Projektstand

| ID | Bezug | Technische Umsetzung | Vorhandener Repo-/DB-Bezug | Restaufwand |
|---|---|---|---|---:|
| PH-01 | LH-01, LH-02, LH-03 | Die vorhandenen Ressourcenabfragen und passenden Datenbankfunktionen werden für Ressourcenwarnung, Lagerübersicht und Nachschubbedarf genutzt. | `getRessourcesBelowMin.sql`, `getRessourcenWithLager.sql`, `getStorageResourceSummary.sql` | 1 PT |
| PH-02 | LH-04, LH-05, LH-06 | Die vorhandenen Missions- und Fahrzeugabfragen werden für Transportübersicht, Fahrzeugstatus und Flottenbewertung genutzt. | `getMissionsBericht.sql`, `getActiveVehicles.sql`, `getVehiclesByStatus.sql`, `getFlotte.sql` | 1 PT |
| PH-03 | LH-07, LH-08, LH-09 | Die vorhandenen Energieabfragen werden für Energieübersicht, Engpassbewertung und stadtbezogene Energieauswertung genutzt. | `getCurrentEnergieLeistung.sql`, `getEnergySourcesByCity.sql`, `getCitiesWithoutEnergySource.sql` | 1 PT |
| PH-04 | LH-10, LH-11 | Die vorhandenen Lager- und Risikoabfragen werden für riskante Bestände und Lagerpriorisierung genutzt. | `getLagerVersorgungAtRisk.sql`, `getRessourcesAtRisk.sql`, `getAllLager.sql` | 1 PT |
| PH-05 | LH-12, LH-13 | Die vorhandenen Mitarbeiterabfragen werden für Personalübersicht, Rollenauswertung und Arbeitszeitanalyse genutzt. | `getAllEmployees.sql`, `getMitarbeiterRolle.sql`, `getMitarbeiterByBeruf.sql`, `getAvgWorkTimeByBeruf.sql` | 1 PT |
| PH-06 | LH-14, LH-15 | Verkaufsentscheidungen werden zunächst aus vorhandenen Ressourcen- und Lagerdaten abgeleitet. Dadurch wird sichtbar, welche Ressourcen wirtschaftlich verwertet werden könnten. | `getRessourcenWithLager.sql`, `getRessourcesBelowMin.sql`, `getStorageResourceSummary.sql` | 1 PT |
| PH-07 | LH-16 | Die vorhandene Web-App wird als zentrale Oberfläche für Dashboard, Tabellenansichten und Prozessdarstellung genutzt. | React, TypeScript, Vite, Tailwind CSS | 1 PT |
| PH-08 | LH-17 | Die vorhandene PHP-API stellt Datenbankergebnisse für die Web-App bereit. | PHP-API, JSON, CSRF-Token | 1 PT |
| PH-09 | LH-18, NFA-07 | Die vorhandenen SQL-Dateien und Stored Procedures werden den sechs Businessprozessen zugeordnet und dokumentiert. | SQL-Dateien / Stored Procedures / Doku / BPMN-Bezug | 1 PT |
| PH-10 | NFA-08, NFA-09 | Die vorhandene Datenbanklogik wird fachlich optimiert und in Web-App, BPMN-Modellen und Präsentation als wirtschaftlich nutzbare Prozessunterstützung sichtbar gemacht. | MariaDB / SQL-Dateien / Stored Procedures / PHP-API | 2 PT |

Geschätzter Restaufwand: 11 Personentage

---

## 6. Zuordnung: Businessprozess zu vorhandenen Datenbankfunktionen

| Businessprozess | Vorhandene SQL-Dateien / Datenbanklogik | Zweck |
|---|---|---|
| Kritische Ressourcen überwachen und Nachschub auslösen | `getRessourcesBelowMin.sql`, `getRessourcenWithLager.sql`, `getStorageResourceSummary.sql` | Erkennt Ressourcen unter Mindestbestand und zeigt Ressourcen mit Lagerinformationen. |
| Transportmissionen planen und auswerten | `getMissionsBericht.sql`, `getActiveVehicles.sql`, `getVehiclesByStatus.sql`, `getFlotte.sql` | Zeigt Missionen, Fahrzeuge, Flottenstatus und Fahrzeugverfügbarkeit. |
| Energieengpass erkennen und Lastverteilung einleiten | `getCurrentEnergieLeistung.sql`, `getEnergySourcesByCity.sql`, `getCitiesWithoutEnergySource.sql` | Liefert Energiekennzahlen, Energiequellen und mögliche Versorgungslücken. |
| Ablaufende oder riskante Lagerbestände priorisiert verbrauchen | `getLagerVersorgungAtRisk.sql`, `getRessourcesAtRisk.sql`, `getAllLager.sql` | Zeigt riskante Lagerbestände, Ressourcenrisiken und Lagerdaten. |
| Personal- und Arbeitseinsätze ressourcenbasiert planen | `getAllEmployees.sql`, `getMitarbeiterRolle.sql`, `getMitarbeiterByBeruf.sql`, `getAvgWorkTimeByBeruf.sql` | Zeigt Mitarbeitende, Rollen, Berufe und Arbeitszeitauswertung. |
| Überschüssige Ressourcen an externe Partner verkaufen | `getRessourcenWithLager.sql`, `getRessourcesBelowMin.sql`, `getStorageResourceSummary.sql` | Nutzt vorhandene Ressourcen- und Lagerdaten als Grundlage für wirtschaftliche Verkaufsentscheidungen. |

---

## 7. Wirtschaftlicher Nutzen der Businessprozesse

| Businessprozess | Wirtschaftlicher Nutzen |
|---|---|
| Kritische Ressourcen überwachen und Nachschub auslösen | Verhindert teure Notfallmaßnahmen und Ausfälle lebenswichtiger Ressourcen. |
| Transportmissionen planen und auswerten | Senkt Kosten durch bessere Nutzung von Fahrzeugen, Strecken und Ladung. |
| Energieengpass erkennen und Lastverteilung einleiten | Verhindert Produktionsausfälle und schützt kritische Infrastruktur. |
| Ablaufende oder riskante Lagerbestände priorisiert verbrauchen | Reduziert Verluste durch Ablauf, Beschädigung oder unnötige Lagerhaltung. |
| Personal- und Arbeitseinsätze ressourcenbasiert planen | Verbessert die Auslastung von Mitarbeitenden und reduziert Fehlplanung. |
| Überschüssige Ressourcen an externe Partner verkaufen | Macht Überschüsse wirtschaftlich nutzbar und erzeugt zusätzliche Einnahmen. |

---

## 8. Minimaler Kernumfang

Damit der Projektumfang realistisch bleibt, wird der sichere Kernumfang auf vorhandene und bereits vorbereitete Funktionen konzentriert.

| Kernfunktion | Status |
|---|---|
| Ressourcenübersicht | vorhanden / SQL-Grundlage vorhanden |
| Kritische Ressourcen unter Mindestbestand | vorhanden / SQL-Grundlage vorhanden |
| Fahrzeug- und Missionsübersicht | vorhanden / SQL-Grundlage vorhanden |
| Energieübersicht | vorhanden / SQL-Grundlage vorhanden |
| Riskante Lagerbestände | vorhanden / SQL-Grundlage vorhanden |
| Mitarbeiterübersicht | vorhanden / SQL-Grundlage vorhanden |
| Web-App-Darstellung | vorhanden |
| PHP-API-Anbindung | vorhanden |
| SQL-Dateien / Stored Procedures | vorhanden / weiter zu optimieren |
| Zuordnung zu Businessprozessen | zu dokumentieren |
| BPMN-Modelle | passend zu erstellen |

---

## 9. Erweiterungsumfang

Diese Punkte sind sinnvoll, aber nicht zwingend für die erste funktionsfähige Version.

| Erweiterung | Nutzen |
|---|---|
| Vollständiges Verkaufsmodul | macht Ressourcenüberschüsse direkt abrechenbar |
| Neue Verkaufstab|---|---|
| Vollständiges Verkaufsmodul | macht Ressourcenüberschüsse direkt abrechenbar |
| Neue Verkaufstabellen | ermöglicht saubere Dokumentation externer Verkäufe |
| Erweiterte Dashboard-Kennzahlen | macht wirtschaftlichen Nutzen besser sichtbar |
| Optimierte Stored-Procedures-Struktur | verbessert Wartbarkeit und Präsentierbarkeit |
| Einfache Rollenlogik | verbessert Realismus der Anwendung |
| Komplexe Routenoptimierung | kann Transportkosten weiter senken |
| KI-basierte Nachschubentscheidung | langfristiger Ausbau, aktuell zu groß |
| Echtzeit-Sensorik | langfristiger Ausbau, keine reale Hardware vorhanden |

---

## 10. Technologie

| Bereich | Umsetzung |
|---|---|
| Frontend | React |
| Sprache | TypeScript |
| Build Tool / Entwicklungsserver | Vite |
| Styling | Tailwind CSS |
| Backend / API | PHP-API |
| Datenbank | MariaDB auf einem VPS |
| VPS | Virtual Private Server, also ein virtueller privater Server im Internet |
| Datenbanklogik | vorhandene SQL-Dateien und Stored Procedures |
| Datenaustausch | JSON |
| Sicherheit | CSRF-Token für API-Anfragen |

---

## 11. Abgrenzung

| Nicht im Kernumfang | Grund |
|---|---|
| Neues Oracle-Schema | Nicht notwendig, da bereits eine MariaDB auf einem VPS eingerichtet ist. |
| PL/SQL | Nicht passend, da PL/SQL Oracle-spezifisch ist. |
| Komplett neue Datenbankstruktur | Nicht notwendig, weil bereits eine technische Grundlage vorhanden ist. |
| Vollständiges Zahlungssystem | Verkauf wird zunächst wirtschaftlich vorbereitet, aber nicht vollständig abgerechnet. |
| Komplexe Routenoptimierung | Optionaler Ausbau. |
| Vollständiges Rollen- und Rechtesystem | Für Version 1.0 nicht zwingend erforderlich. |
| Echtzeit-Sensorik | Keine reale Sensorhardware vorhanden. |

---

## 12. Abnahmekriterien

| ID | Kriterium |
|---|---|
| AK-01 | Kritische Ressourcen unter Mindestbestand werden angezeigt oder über vorhandene Abfragen nachweisbar. |
| AK-02 | Ressourcen mit Lagerinformationen werden angezeigt oder über vorhandene Abfragen nachweisbar. |
| AK-03 | Fahrzeug- und Missionsdaten werden angezeigt oder über vorhandene Abfragen nachweisbar. |
| AK-04 | Energiekennzahlen werden angezeigt oder über vorhandene Abfragen nachweisbar. |
| AK-05 | Energiequellen oder Energieversorgungslücken sind auswertbar. |
| AK-06 | Riskante Lagerbestände werden angezeigt oder über vorhandene Abfragen nachweisbar. |
| AK-07 | Mitarbeitende und Rollen werden angezeigt oder über vorhandene Abfragen nachweisbar. |
| AK-08 | Ressourcenübersichten können als Grundlage für Verkaufsentscheidungen genutzt werden. |
| AK-09 | Die Web-App ist lauffähig und demonstrierbar. |
| AK-10 | Die PHP-API liefert Daten im JSON-Format. |
| AK-11 | Die vorhandenen SQL-Dateien und Stored Procedures sind den sechs Businessprozessen zugeordnet. |
| AK-12 | Der wirtschaftliche Nutzen der sechs Businessprozesse ist in Dokumentation und Präsentation nachvollziehbar. |
| AK-13 | Die Umsetzung kann im Abschluss mit Lastenheft und Pflichtenheft abgeglichen werden. |

---

## 13. Aufwandsschätzung für AP12

| Aufgabe | Aufwand |
|---|---:|
| Vorhandene Funktionen prüfen | 0,5 PT |
| SQL-Dateien und Stored Procedures den sechs Businessprozessen zuordnen | 0,5 PT |
| Lastenheft aus vorhandenem und überarbeitetem Projektstand ableiten | 0,5 PT |
| Pflichtenheft aus vorhandenem und überarbeitetem Projektstand ableiten | 0,5 PT |
| Wirtschaftlichen Nutzen je Businessprozess ergänzen | 0,5 PT |
| Technologie und Abgrenzung ergänzen | 0,5 PT |
| Kontrolle und Formatierung | 0,5 PT |

Gesamtaufwand AP12: 3,5 Personentage

---

## 14. Kurzfazit

Mars Logistik Verwaltung [ALS] unterstützt die sechs festgelegten Businessprozesse: kritische Ressourcen überwachen und Nachschub auslösen, Transportmissionen planen und auswerten, Energieengpässe erkennen und Lastverteilung einleiten, ablaufende oder riskante Lagerbestände priorisiert verbrauchen, Personal- und Arbeitseinsätze ressourcenbasiert planen sowie überschüssige Ressourcen an externe Partner verkaufen.

Die Spezifikation wurde nicht auf einer leeren Planung aufgebaut, sondern aus dem bereits vorhandenen und überarbeiteten Projektstand weiterentwickelt.

Bereits vorhanden sind eine Web-App, eine PHP-API, SQL-Abfragen, Stored Procedures, Datenbankstrukturen, technische Dokumentation und eine MariaDB auf einem Virtual Private Server. Diese Bestandteile wurden fachlich neu geordnet, optimiert und den sechs Businessprozessen zugeordnet.

Der Schwerpunkt liegt nicht darin, alles neu zu entwickeln, sondern die vorhandenen Funktionen gezielt in Szene zu setzen. Die bestehenden SQL-Abfragen und Stored Procedures sollen die Geschäftsprozesse sichtbar unterstützen, wirtschaftlichen Nutzen erzeugen und die Logistikentscheidungen der Marskolonie datenbankgestützt verbessern.

Die weitere Arbeit besteht vor allem darin, die vorhandenen technischen Bestandteile sauber mit den BPMN-Modellen, der Web-App, der PHP-API und den Businessprozessen zu verbinden.

Der zentrale Schwerpunkt ist die wirtschaftliche Nutzung der vorhandenen Datenbankfunktionen: Die Daten sollen nicht nur verwaltet, sondern gezielt zur Kostenreduktion, Lageroptimierung, Transportplanung und Verwertung von Ressourcenüberschüssen eingesetzt werden.

Dadurch wird Mars Logistik Verwaltung [ALS] zu einem nachvollziehbaren System, das Ressourcenengpässe erkennt, Transportkosten senkt, Lagerverluste reduziert, Personal effizienter einsetzt und überschüssige Ressourcen wirtschaftlich nutzbar macht.