# 01 - PR 63: Prisma-Umstellung und REST-API

Stand: 2026-06-11

## Merkpunkte

- Die geplante Umstellung auf Prisma wurde im Review zu PR #63 bestätigt.
- Tom / CyZeTLC kümmert sich um die REST-API-Logik und das passende Routing.
- Änderungen an `api/restApi.php`, API-Routing oder API-Pfadlogik sollen deshalb nicht nebenbei in SQL-, BP- oder Doku-PRs landen.
- Die SQL-/BP1-/BP2-Struktur, Stored Procedures und fachliche Dokumentation bleiben unabhängig davon relevant.

## Für spätere Arbeit

Vor der Abgabe sollte die Dokumentation nochmal gezielt geprüft werden, damit die Beschreibungen zu Prisma, REST-API, Datenbanklogik, BP1/BP2 und finaler Architektur zusammenpassen.

## Umsetzung in PR #63

Die REST-API-Änderungen wurden mit Commit `accdd43` wieder entfernt. Die SQL-/BP1-/BP2-Struktur bleibt erhalten.
