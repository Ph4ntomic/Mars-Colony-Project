# To-do - Dokumentation der Stored-Procedure-Anbindung

Status: final eingeordnet; technische Haertungspunkte offen
Stand: 08.07.2026

Dieses Dokument haelt fest, wie die urspruengliche To-do-Liste zur Stored-Procedure-Anbindung im finalen Repository-Stand einzuordnen ist.

## Aktueller Ist-Stand

| Bereich | Stand |
|---|---|
| Hauptpfad in `api/restApi.php` | `get_sql_result` reduziert den Parameter `file` auf den Procedure-Namen und fuehrt `CALL <Procedure>()` ueber PDO aus. |
| Rueckgabeformat | Erfolgreiche Aufrufe liefern JSON mit `result`. |
| CSRF | Alle Aktionen ausser `generate_csrf` erwarten `X-CSRF-Token`. |
| Alte SQL-Dateipfade | `get_sql_result_old`, `get_all_tables`, `get_sql_files` und einzelne Dashboard-/Suchaktionen nutzen weiterhin `runSqlFile()`. |
| Procedure-Dateien | 38 Dateien unter `sql/storedProcedure/`, gespiegelt zu 38 lesbaren Query-Dateien unter `sql/queries/`. |
| Direkte Diagrammabfragen | `sql/getResourceConsumptionHistory.sql` und `sql/getResourceStockLevels.sql` liegen weiter als direkte SQL-Dateien vor. |
| Feste BP1-API-Actions | Nicht umgesetzt; der aktuelle Stand nutzt den generischen `get_sql_result`-Pfad. |
| Procedure-Whitelist | Nicht umgesetzt; das bleibt ein sinnvoller Haertungspunkt. |
| Fehlerformat | Aktuell wird bei Procedure-Fehlern ein JSON-Fehler mit HTTP 500 und Datenbankmeldung geliefert, aber kein eigenes Fehlercode-Schema. |

## Dokumentation aktualisiert

- `README.md`
- `documentation/README.md`
- `documentation/datenbankabfragen-v4.md`
- `documentation/lastenheft-und-pflichtenheft-v2.md`
- `documentation/APs/AP8-Auswahl-DBMS-Infrastruktur-Prototyp.md`
- `documentation/APs/AP9-Revision-Implementierung.md`
- `documentation/APs/AP10-Revision-Use-Cases.md`
- `documentation/APs/AP11-BPMN-Modellierung-BP1-Kritische RessourcenÜberwachenUndNachschubAuslösen.md`
- `documentation/APs/AP11-BPMN-Modellierung-BP2-Ueberschuessige-Ressourcen-an-externe-Unternehmen-verkaufen.md`
- `documentation/APs/AP16-Architektur-Entwurf.md`
- `documentation/APs/AP17-Implementierung-vorbereitet.md`
- `documentation/APs/AP20-Applikation-fertiggestellt.md`
- `documentation/APs/AP21-Software-getestet.md`
- `documentation/APs/AP22-Vorstellung-vorbereitet.md`
- `documentation/APs/AP23-Projektbericht-erstellen.md`
- `documentation/APs/APFinalALS.md`

## Verbleibende technische Restpunkte

Diese Punkte sind keine Dokumentationsblocker, sondern moegliche technische Nacharbeiten:

- Explizite Whitelist fuer erlaubte Procedure-Namen in `get_sql_result` ergaenzen.
- Dashboard-Diagrammabfragen entweder als Stored Procedures bereitstellen oder konsequent ueber den SQL-Datei-Fallback fuehren.
- Aeltere `runSqlFile()`-Aktionen vereinheitlichen oder klar als Legacy-Endpunkte kennzeichnen.
- Einheitliches Fehlercode-Schema fuer fehlgeschlagene Procedure-Aufrufe definieren.
- Importablauf der Stored Procedures fuer eine frische MariaDB-Instanz dokumentieren oder automatisieren.

Historische Dateien unter `documentation/archive/` bleiben grundsaetzlich als Entwicklungshistorie erhalten. Eine alte Formulierung zu Prognosefunktionen wurde sprachlich neutralisiert.
