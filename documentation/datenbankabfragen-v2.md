# Datenbankabfragen v2

Stand: 14.05.2026

Diese Datei beschreibt die Datenbankabfragen, die für den aktuellen Projektfokus der Mars Logistik Verwaltung [ALS] relevant sind.

Nach dem Feedback von Prof. Dr. Becking werden nicht mehr alle vorhandenen SQL-Abfragen gleich stark dokumentiert. Im Mittelpunkt stehen nur noch die Abfragen und Datenbankstrukturen, die direkt zu den zwei ausgewählten Businessprozessen passen:

1. **Kritische Ressourcen überwachen und Nachschub auslösen**
2. **Überschüssige Ressourcen an externe Unternehmen verkaufen**

Die alte vollständige SQL-Übersicht liegt im Archiv:

`documentation/archive/datenbankabfragen-v1.md`

---

## 1. Einordnung

Die Datenbankabfragen sind keine eigenen Use Cases. Sie unterstützen die Use Cases technisch, indem sie Daten aus der Datenbank bereitstellen.

| Ebene | Beispiel |
|---|---|
| Businessprozess | Kritische Ressourcen überwachen und Nachschub auslösen |
| Use Case | Kritische Ressourcen anzeigen |
| Datenbankabfrage | Ressourcen mit Menge unter Mindestbestand auslesen |

Für die Präsentation und weitere Dokumentation sollen deshalb nur die Abfragen im Vordergrund stehen, die den zwei Businessprozessen direkt helfen.

---

## 2. Relevante Abfragen nach Businessprozess

| Businessprozess | Relevante Abfragen / Tabellen | Zweck |
|---|---|---|
| Kritische Ressourcen überwachen und Nachschub auslösen | `getRessourcesBelowMin.sql`, `getRessourcenWithLager.sql`, `getStorageResourceSummary.sql`, `getRessourcesAtRisk.sql` | Bestände anzeigen, kritische Ressourcen erkennen, Lagerbezug prüfen und Nachschubbedarf ableiten. |
| Überschüssige Ressourcen an externe Unternehmen verkaufen | `getRessourcenWithLager.sql`, `getStorageResourceSummary.sql`, `EXTERNES_UNTERNEHMEN`, `RESSOURCEN_UEBERSCHUSS_BEWERTUNG`, `RESSOURCEN_VERKAUF`, `RESSOURCEN_VERKAUF_POSITION` | Überschüsse fachlich bewerten und eine externe Abgabe vorbereiten. |

---

## 3. Abfragen für Prozess 1

### 3.1 `getRessourcesBelowMin.sql`

**Zweck**  
Diese Abfrage erkennt Ressourcen, deren aktuelle Menge unter dem definierten Mindestbestand liegt.

**Unterstützter Use Case**  
Kritische Ressourcen anzeigen

**Fachliche Bedeutung**  
Die Kolonieleitung kann sehen, welche Ressourcen kritisch sind und bei welchen Beständen Nachschubbedarf entstehen kann.

**Benötigte Daten**

| Datenfeld | Bedeutung |
|---|---|
| Ressource | Welche Ressource ist betroffen? |
| Menge | Wie viel ist aktuell vorhanden? |
| Mindestbestand | Ab wann wird die Ressource kritisch? |
| Lagerbezug | Wo befindet sich die Ressource? |

**Bezug zum Businessprozess**  
Diese Abfrage ist der zentrale technische Einstieg für Prozess 1. Wenn eine Ressource unter dem Mindestbestand liegt, wird der fachliche Ablauf zur Prüfung und Nachschubvorbereitung ausgelöst.

---

### 3.2 `getRessourcenWithLager.sql`

**Zweck**  
Diese Abfrage zeigt, welche Ressourcen in welchem Lager vorhanden sind.

**Unterstützte Use Cases**

- Ressourcenbestand anzeigen
- Nachschubbedarf erkennen
- Überschüssige Ressourcen anzeigen

**Fachliche Bedeutung**  
Die Abfrage verbindet Ressourcen mit ihrem Lagerort. Dadurch kann nachvollzogen werden, ob eine Ressource an anderer Stelle der Kolonie verfügbar ist oder ob externe Nachschubmaßnahmen vorbereitet werden müssen.

**Benötigte Daten**

| Datenfeld | Bedeutung |
|---|---|
| Lager-ID | Standort der Ressource |
| Ressourcentyp | Art der Ressource |
| Menge | vorhandene Menge |
| Einheit | Mengeneinheit, zum Beispiel KG, Liter oder Stück |

**Bezug zum Businessprozess**  
Für Prozess 1 hilft die Abfrage bei der Prüfung interner Verfügbarkeit. Für Prozess 2 ist sie Grundlage, um mögliche Überschüsse mit Lagerbezug sichtbar zu machen.

---

### 3.3 `getStorageResourceSummary.sql`

**Zweck**  
Diese Abfrage fasst Lagerbestände zusammen und zeigt pro Lager, wie viele Ressourcen und Mengen vorhanden sind.

**Unterstützte Use Cases**

- Ressourcenbestand anzeigen
- Nachschubbedarf erkennen
- Überschüssige Ressourcen anzeigen

**Fachliche Bedeutung**  
Die Abfrage liefert eine Managementsicht auf Lager. Sie eignet sich besonders für Dashboards, weil nicht jede einzelne Ressource isoliert betrachtet wird, sondern Lager zusammenfassend bewertet werden können.

**Benötigte Daten**

| Datenfeld | Bedeutung |
|---|---|
| Lager-ID | Lagerstandort |
| Lagertyp | fachliche Art des Lagers |
| Anzahl Ressourcen | wie viele Ressourcenarten dort liegen |
| Gesamtmenge | zusammengefasste Menge |
| Gesamtgewicht | physische Belastung des Lagers |
| Gesamtvolumen | benötigter Lagerraum |

**Bezug zum Businessprozess**  
Für Prozess 1 unterstützt die Abfrage die Übersicht über verfügbare Lagerressourcen. Für Prozess 2 kann sie helfen, Lager mit möglichen Überschüssen oder hoher Belastung zu erkennen.

---

### 3.4 `getRessourcesAtRisk.sql`

**Zweck**  
Diese Abfrage erkennt Ressourcen, deren Ablaufdatum bald erreicht wird.

**Unterstützter Use Case**  
Kritische Ressourcen anzeigen

**Fachliche Bedeutung**  
Eine Ressource kann nicht nur wegen zu geringer Menge kritisch sein, sondern auch wegen eines nahenden Ablaufdatums. Diese Abfrage ergänzt deshalb die Mindestbestandsprüfung um eine zeitliche Risikoperspektive.

**Benötigte Daten**

| Datenfeld | Bedeutung |
|---|---|
| Ressource | welche Ressource betroffen ist |
| Ablaufdatum | wann die Ressource kritisch wird |
| Lager-ID | wo die Ressource liegt |

**Bezug zum Businessprozess**  
Die Abfrage unterstützt Prozess 1, weil sie zusätzliche Risiken im Bestand sichtbar macht. Sie ist nicht der Hauptauslöser für Nachschub, aber eine sinnvolle Ergänzung für die Ressourcenüberwachung.

---

## 4. Datenbankstrukturen für Prozess 2

Für den Prozess „Überschüssige Ressourcen an externe Unternehmen verkaufen“ reichen reine Ressourcen- und Lagerabfragen nicht vollständig aus. Deshalb wurden neue Tabellen ergänzt, die den Verkaufsprozess fachlich vorbereiten.

| Tabelle | Zweck |
|---|---|
| `EXTERNES_UNTERNEHMEN` | Speichert externe Firmen, die Ressourcen kaufen oder übernehmen können. |
| `RESSOURCEN_UEBERSCHUSS_BEWERTUNG` | Dokumentiert, welche Ressource in welchem Lager als Überschuss bewertet wurde. |
| `RESSOURCEN_VERKAUF` | Speichert einen vorbereiteten Verkauf oder eine externe Abgabe. |
| `RESSOURCEN_VERKAUF_POSITION` | Speichert einzelne Ressourcenpositionen eines vorbereiteten Verkaufs. |

Diese Tabellen sind keine vollständige Abrechnungslösung. Sie dienen dazu, Überschüsse nachvollziehbar zu bewerten und eine mögliche externe Abgabe vorzubereiten.

---

## 5. Beispielhafte Daten für Prozess 2

| Bereich | Beispieldaten |
|---|---|
| Externe Unternehmen | Deutsche Mars Bau GmbH, Deutsche Mars Versorgung AG |
| Überschussbewertungen | Eisenerz aus Lager 2, Aluminiumplatten aus Lager 2 |
| Vorbereiteter Verkauf | Verkauf an Deutsche Mars Bau GmbH |
| Verkaufspositionen | 3000 KG Eisenerz, 120 Stück Aluminiumplatten |

Diese Beispieldaten sind bewusst einfach gehalten, damit der Verkaufsprozess in der Präsentation schnell erklärt werden kann.

---

## 6. Mögliche Auswertung für Ressourcenüberschüsse

Eine eigene SQL-Datei für Überschüsse kann aus den vorhandenen Ressourcen- und Lagerdaten abgeleitet werden.

Fachliche Logik:

```text
verkaufbare Menge = aktuelle Menge - Mindestreserve
```

Nur wenn die verkaufbare Menge größer als 0 ist, kann eine Ressource als möglicher Überschuss betrachtet werden.

Beispielhafte Auswertung:

| Prüfschritt | Bedeutung |
|---|---|
| aktuelle Menge prüfen | Wie viel ist vorhanden? |
| Mindestreserve prüfen | Wie viel muss intern erhalten bleiben? |
| Differenz berechnen | Welche Menge könnte abgegeben werden? |
| Lagerbezug prüfen | Aus welchem Lager kann die Ressource entnommen werden? |
| Bewertung speichern | Ergebnis in `RESSOURCEN_UEBERSCHUSS_BEWERTUNG` dokumentieren. |

---

## 7. Nicht mehr im Hauptfokus

Die folgenden Abfragebereiche sind weiterhin vorhanden, stehen aber nicht mehr im Mittelpunkt der aktuellen Revision:

| Bereich | Grund |
|---|---|
| Bewohnerabfragen | Kein direkter Bezug zu den zwei ausgewählten Businessprozessen. |
| Mitarbeiterübersichten | Nur unterstützend relevant, aber kein Hauptprozess. |
| Fahrzeug- und Flottenabfragen | Gehören eher zu einem eigenen Transportprozess. |
| Stadt- und Energieabfragen | Fachlich interessant, aber nach Feedback nicht Teil des aktuellen Kernumfangs. |
| allgemeine Dashboard-Kennzahlen | Können später ergänzt werden, sind aber nicht zentral für AP10 bis AP13. |

Die vollständige frühere Liste bleibt im Archiv erhalten.

---

## 8. Kurzfazit

Die Datenbankabfragen v2 sind auf den aktuellen Projektfokus reduziert.

Für Prozess 1 stehen Ressourcenbestand, Mindestbestand, Lagerbezug und Risikobestände im Vordergrund. Für Prozess 2 werden dieselben Ressourcen- und Lagerdaten genutzt, zusätzlich aber durch Verkaufstabellen und Beispieldaten ergänzt.

Damit passen Datenbankabfragen, Use Cases, BPMN, Spezifikation und Proposal besser zusammen.
