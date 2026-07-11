# AP16 – Architekturentwurf

Status: abgeschlossen, Stand 08.07.2026

## Ziel

Die Architektur der Mars Logistik Verwaltung wird nachvollziehbar in Frontend, API, Datenbanklogik und Datenbank getrennt.

## Ist-Architektur

```text
React-/TypeScript-Webanwendung
            |
            | HTTPS / JSON, X-CSRF-Token
            v
       PHP-REST-API
            |
            | PDO + CALL <Procedure>()
            v
        Stored Procedures
            |
            v
    MariaDB-/MySQL-Datenbank
```

| Ebene | Aktueller Stand |
|---|---|
| Frontend | React 19, TypeScript 6, Vite 8 |
| Oberfläche | Tailwind CSS 3, Material UI und Recharts |
| API / Backend | `api/restApi.php`, `api/login.php` und `api/server.php` |
| Datenzugriff | PDO; `get_sql_result` ruft Stored Procedures generisch per `CALL` auf |
| Datenbank | MariaDB/MySQL |
| Sicherheit | Login, PHP-Session, einstündige Frontend-Anmeldung und CSRF-Token mit 24 Stunden Laufzeit |

Das Frontend lädt Daten über die REST-API. Bis auf `generate_csrf` erwarten API-Anfragen den CSRF-Token im Header `X-CSRF-Token`. Die API gibt JSON zurück. Für ältere direkte SQL-Dateizugriffe existieren weiterhin `get_sql_result_old` und einzelne `runSqlFile()`-Aktionen.

## Datenbankzugriffe

Das dritte Gesprächsprotokoll legt Stored Procedures als technischen Datenbankzugriff fest. Der aktuelle Code setzt diesen Pfad über `get_sql_result` um:

```text
Webanwendung → PHP-REST-API → Stored Procedures → MariaDB/MySQL
```

Im Repository bestehen 38 Query-/Stored-Procedure-Paare. Besonders relevant für BP1 sind:

- `getRessourcesBelowMin()`
- `getRessourcesAtRisk()`
- `getNachschubanforderungen()`
- `getRessourcenWithLager()`

Der API-Parameter `file` wird dabei auf einen Procedure-Namen reduziert, zum Beispiel `getNachschubanforderungen.sql` zu `getNachschubanforderungen()`. Die Procedure muss in der verwendeten MariaDB vorhanden sein. Eine feste Whitelist pro Businessprozess ist im aktuellen Repository nicht umgesetzt.

## Businessprozessbezug

BP1 wird in der Abschlusspräsentation als Kette aus Use Case, Businessprozess, finalem BPMN-v11-Modell, Stored Procedures und Applikationsbezug gezeigt. Dashboard, Ressourcenseite und Nachbestellungsseite unterstützen diesen Bezug mit Verbrauch, Bestand-gegen-Mindestbestand, Lagerbezug und vorbereiteten Nachschubanforderungen.

BP2 bleibt datenbankseitig durch Überschuss-, Bewertungs- und Verkaufsstrukturen abgedeckt und wird zusätzlich über die Verkaufsansicht `Sales` sichtbar. In der Abschlusspräsentation steht BP2 aber nicht im Mittelpunkt.

## Ergebnis

Die Architektur ist als Frontend, PHP-REST-API, Stored Procedures bzw. ältere SQL-Fallbacks und MariaDB/MySQL dokumentiert. Offene technische Härtungspunkte sind eine explizite Procedure-Whitelist und die Vereinheitlichung der älteren `runSqlFile()`-Aktionen.

## Dauer

Dauer: 2 Tage
