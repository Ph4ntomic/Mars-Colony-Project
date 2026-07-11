# AP17 – Implementierung vorbereitet

Status: abgeschlossen

## Ziel

Eine technologische Infrastruktur für den Implementierungsprozess wurde ausgewählt und aufgesetzt.

## Vorbereitete Infrastruktur

Für die Umsetzung der Mars Logistik Verwaltung wurde eine Webanwendungsstruktur mit getrenntem Frontend, Backend und Datenbankbereich vorbereitet.

| Bereich | Umsetzung |
|---|---|
| Frontend | React mit TypeScript und Vite |
| Backend | PHP-REST-API |
| Datenbank | MySQL / MariaDB mit SQL-Build-Skripten |
| Datenzugriff | PDO; `get_sql_result` ruft Stored Procedures per `CALL` auf, ältere SQL-Dateipfade bleiben als Fallback/Altstand vorhanden |
| Versionierung | GitHub mit Branches, Commits und Pull Requests |
| Organisation | ClickUp, Discord und regelmäßige Abstimmung im Praktikum |

## Technische Vorbereitung

Das Repository enthält die grundlegende Projektstruktur für die Implementierung:

- `src/` für Frontend-Komponenten, Seiten und Hilfsfunktionen
- `api/` für PHP-Backend, Login und REST-API
- `sql/` für Datenbankskripte, SQL-Abfragen und Stored Procedures
- `documentation/` für Arbeitspakete, Spezifikation, Businessprozesse und Projektdokumentation

Die Webanwendung kann Daten über die REST-API abrufen. Das Backend prüft den CSRF-Token und gibt Ergebnisse als JSON an das Frontend zurück. Im aktuellen Code ruft `get_sql_result` die vorhandenen Stored Procedures generisch per `CALL` auf. Ältere direkte SQL-Datei-Ausführungen bleiben über `get_sql_result_old` und einzelne `runSqlFile()`-Aktionen im Code erhalten.

## Bezug zu den Businessprozessen

Die vorbereitete Infrastruktur unterstützt den aktuellen Projektfokus auf zwei Businessprozesse:

1. **Kritische Ressourcen überwachen und Nachschub auslösen**
2. **Überschüssige Ressourcen an externe Unternehmen verkaufen**

Die SQL- und Stored-Procedure-Struktur ist nach fachlichen Bereichen gegliedert. Dadurch können Abfragen für BP1 und BP2 getrennt gepflegt und in der Dokumentation nachvollziehbar beschrieben werden.

Für den BP1-Applikationsbezug wurden außerdem zwei Dashboarddiagramme, die Tabelle `BESTANDSBEWEGUNG` einschließlich Migration und die Nachbestellungsansicht vorbereitet. Für BP2 ist eine Verkaufsansicht mit den Schritten Überschuss, Verkaufspotenzial und externe Abgabe vorhanden.

## Abgrenzung

AP17 beschreibt die Vorbereitung der Implementierungsumgebung. Eine vollständige Fertigstellung aller Funktionen ist nicht Bestandteil dieses Arbeitspakets.

Nicht dokumentiert werden geheime Zugangsdaten, Passwörter, Tokens oder private Serverkonfigurationen.

## Ergebnis

Die technische Grundlage ist vorbereitet und die generische Stored-Procedure-Anbindung ist im aktuellen API-Stand vorhanden. Offen bleibt vor allem die technische Härtung durch eine explizite Procedure-Whitelist und die Vereinheitlichung der älteren SQL-Dateipfade.

## Dauer

Dauer: 2 Tage
