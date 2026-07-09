# 04 - Generischer Stored-Procedure-Aufruf im API-Ist-Stand

Stand: 2026-07-08

Status: beschlossen / final eingeordnet

## Entscheidung

Der aktuelle Repository-Stand wird als PHP-REST-API mit generischem Stored-Procedure-Aufruf dokumentiert.

`api/restApi.php` nutzt im Hauptpfad `get_sql_result`, reduziert den Parameter `file` auf den Procedure-Namen und fuehrt anschliessend `CALL <Procedure>()` ueber PDO aus.

Beispiel:

```text
get_sql_result&file=getNachschubanforderungen.sql
→ CALL getNachschubanforderungen()
```

## Begruendung

Das entspricht dem finalen Codezustand nach dem Fork-Sync. Die bisherige Dokumentation beschrieb noch die fruehere Situation, in der die PHP-API hauptsaechlich SQL-Dateien ueber `runSqlFile()` ausfuehrte und die Stored-Procedure-Anbindung als offen galt.

## Konsequenzen

- Die Architektur wird als React/TypeScript-Frontend, PHP-REST-API, Stored Procedures und MariaDB/MySQL beschrieben.
- `get_sql_result_old` und einzelne `runSqlFile()`-Aktionen bleiben als Alt-/Fallbackpfade dokumentiert.
- Es werden keine festen BP1-API-Actions behauptet, weil der aktuelle Code einen generischen Procedure-Namen aus dem URL-Parameter nutzt.
- Eine explizite Procedure-Whitelist ist nicht umgesetzt und bleibt ein sinnvoller Haertungspunkt.
- Die Seiten `Restock` und `Sales` werden als sichtbarer Applikationsbezug fuer BP1 und BP2 dokumentiert.
- Diagrammabfragen unter `sql/` muessen bei Nutzung des Procedure-Hauptpfads als gleichnamige Procedures importiert sein oder ueber den SQL-Datei-Fallback ausgefuehrt werden.

## Restpunkte

- Procedure-Whitelist fuer `get_sql_result` ergaenzen.
- Aeltere SQL-Dateipfade vereinheitlichen oder klar als Legacy-Endpunkte kennzeichnen.
- Einheitliches Fehlercode-Schema fuer Procedure-Fehler definieren.
- Import der Stored Procedures fuer eine frische MariaDB-Instanz automatisieren oder dokumentieren.
