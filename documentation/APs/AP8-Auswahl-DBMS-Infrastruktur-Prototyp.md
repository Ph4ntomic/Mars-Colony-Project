# AP8 – Auswahl DBMS, Infrastruktur und Prototyp

Status: abgeschlossen, Stand 08.07.2026

## Entscheidung

Für den aktuellen Projektstand wird **MariaDB/MySQL** verwendet. Die Datenbank läuft in der vorhandenen Serverumgebung; ein neues Oracle-Schema ist nicht erforderlich. Oracle-Skripte bleiben als Alt-/Alternativstand im Repository.

## Infrastruktur

| Bereich | Umsetzung |
|---|---|
| Frontend | React 19, TypeScript 6 und Vite 8 |
| Backend | PHP-REST-API |
| Datenbankzugriff | PDO; primär Stored-Procedure-Aufruf über `get_sql_result` |
| Datenbank | MariaDB/MySQL |
| Datenbankschema | `sql/build/mysql.sql` und `sql/build/marskolonie_mysql.sql` |
| Migration für Diagramme | `sql/build/resourceGraphsMigration.sql` |
| Sicherheit | Login, PHP-Session und CSRF-Token |
| Betrieb | vorhandene externe Serverumgebung; lokale Entwicklung über Vite |

Zugangsdaten, Tokens und private Serverdetails werden nicht dokumentiert.

## Datenbanklogik

Die fachlichen SQL-Dateien und Stored Procedures sind identisch nach `bp1`, `bp2`, `shared` und `general` strukturiert. Es bestehen 38 Query-/Procedure-Paare. Zusätzlich liegen zwei direkte Diagrammabfragen unter `sql/`.

Die aktuelle PHP-API führt über `get_sql_result` Stored Procedures per `CALL` aus. Der übergebene Dateiname wird dabei auf den Procedure-Namen reduziert, zum Beispiel `getNachschubanforderungen.sql` zu `getNachschubanforderungen()`. Die frühere SQL-Datei-Ausführung existiert weiterhin als `get_sql_result_old` und für einzelne ältere Dashboard-/Suchaktionen über `runSqlFile()`.

## Prototyp

Die Webanwendung enthält Seiten für Dashboard, Ressourcen, Nachbestellung, Verkauf, Fahrzeuge, Mitarbeitende, Städte, Bewohner und SQL-Übersicht. Für BP1 sind besonders relevant:

- Ressourcen- und Lageransichten,
- Diagramm zum Ressourcenverbrauch,
- Diagramm zum Verhältnis von Bestand und Mindestbestand,
- Nachbestellungsansicht mit Such-, Filter- und Detaildarstellung,
- BP1-Abfragen und passende Stored Procedures.

BP2 wird durch Verkaufstabellen, Beispieldaten, drei fachliche Stored Procedures und eine dreistufige Verkaufsansicht unterstützt. Ein vollständiges Vertrags-, Rechnungs- oder Zahlungsmodul gehört nicht zum aktuellen Kern.

## Ergebnis

DBMS, Infrastruktur und Prototyp sind für den Projektumfang festgelegt. Die technische Linie ist React/TypeScript → PHP-API → Stored Procedures bzw. ältere SQL-Datei-Fallbacks → MariaDB/MySQL.

## Dauer

Dauer: 2 Tage
