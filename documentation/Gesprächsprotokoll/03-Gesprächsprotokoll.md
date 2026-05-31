# Gesprächsprotokoll – 3. Termin mit Herrn Prof. Dr. Becking

**Datum:** 27.05.2026  
**Aufgeschrieben von:** Leonardo Parrino  
**Projekt:** Mars Logistik Verwaltung [ALS]  
**Thema:** Feedback zum Projektproposal und weitere Umsetzung

---

## 1. Anlass des Gesprächs

Im Rahmen des Projektproposal-Termins hat unsere Gruppe den aktuellen Projektvorschlag zur **Mars Logistik Verwaltung [ALS]** vorgestellt.

Im Vortrag standen vor allem der Projektkern, die Case Study, die Fokussierung auf zwei zentrale Businessprozesse, die Use Cases, die technische Architektur, die Spezifikation und die nächsten Projektschritte im Vordergrund.

Der Schwerpunkt lag darauf, den Zusammenhang aus Businessprozess, Datenbank, API und Weboberfläche verständlich darzustellen.

Das Lastenheft und Pflichtenheft waren bereits ausführlich vorhanden, wurden im Vortrag aber nur kurz eingeordnet. Der Grund dafür war, dass diese Dokumente sehr umfangreich und eher dokumentationslastig sind. Die begrenzte Präsentationszeit wurde deshalb bewusst stärker für die anschaulicheren Projektbestandteile genutzt.

Die vollständigen Spezifikationsunterlagen sollen später im Rahmen der Endabgabe mit abgegeben werden.

---

## 2. Vorgestellte Hauptprozesse

In der Präsentation wurden zwei zentrale Businessprozesse vorgestellt:

1. **Kritische Ressourcen überwachen und Nachschub auslösen**
2. **Überschüssige Ressourcen an externe Unternehmen verkaufen**

Der erste Prozess bezieht sich auf die Versorgungssicherheit der Marskolonie. Dabei sollen Bestände geprüft, Mindestbestände verglichen, kritische Ressourcen sichtbar gemacht und Nachschubbedarf fachlich vorbereitet werden.

Der zweite Prozess bezieht sich auf die wirtschaftliche Nutzung von Überschüssen. Dabei sollen Bestände geprüft, Mindestreserven gesichert, Überschüsse erkannt, Verkaufspotenzial bewertet und eine externe Abgabe vorbereitet werden.

Herr Prof. Dr. Becking hat bestätigt, dass die Fokussierung auf diese beiden Hauptprozesse wie zuvor besprochen umgesetzt wurde und in dieser Form sinnvoll ist.

Damit bleibt der Projektumfang klar begrenzt und die weitere Umsetzung kann gezielt auf diese beiden Prozesse ausgerichtet werden.

---

## 3. Einordnung von Lastenheft und Pflichtenheft

Das Lastenheft und Pflichtenheft sind bereits ausführlich, detailliert und präzise vorhanden.

Im Vortrag wurden sie nur kurz im Rahmen der Spezifikation eingeordnet, da eine vollständige Vorstellung dieser Dokumente den zeitlichen Rahmen gesprengt hätte.

Für die weitere Arbeit ist wichtig, Herrn Prof. Dr. Becking klar zu kommunizieren, dass diese Dokumente nicht fehlen, sondern bereits ausgearbeitet wurden.

Das Lastenheft beschreibt die Anforderungen aus Kundensicht. Dabei soll deutlich werden, welche fachlichen Anforderungen wichtig sind und welche Priorität sie haben.

Das Pflichtenheft dient der Gruppe als Grundlage, um die technische Umsetzung und den Aufwand besser einschätzen zu können.

---

## 4. Feedback zur BPMN-Modellierung

Zur BPMN-Modellierung wurde angemerkt, dass die Darstellung grundsätzlich übersichtlich ist.

Gleichzeitig soll die BPMN-Modellierung für die Endabgabe voraussichtlich noch detaillierter beschrieben und fachlich genauer ausgearbeitet werden.

Dabei wurde deutlich, dass die BPMN-Darstellung nicht der kritischste Punkt ist, weil die technische Umsetzung hinter dem Projekt bereits stark wirkt.

Trotzdem strebt die Gruppe an, auch bei der BPMN-Modellierung das bestmögliche Ergebnis zu erreichen.

---

## 5. Wichtiges Feedback zur technischen Umsetzung

Ein besonders wichtiger Punkt war der Datenbankzugriff über **Stored Procedures**.

Herr Prof. Dr. Becking hat deutlich gemacht, dass der Zugriff auf die Datenbank nicht direkt über beliebige SQL-Abfragen aus der Anwendung heraus erfolgen soll.

Stattdessen soll die Anwendung die benötigten Datenbankfunktionen über Stored Procedures nutzen.

Das bedeutet für die weitere Umsetzung:

1. Die Weboberfläche soll nicht direkt die gesamte Datenbanklogik enthalten.
2. Die fachliche Logik soll kontrolliert über Datenbankprozeduren bereitgestellt werden.
3. Die API soll die Web-App mit den benötigten Daten versorgen.
4. Die eigentlichen Datenbankoperationen sollen sauber über Stored Procedures angebunden werden.
5. Businessprozesse, API und Datenbankprozeduren müssen klar zusammenpassen.

Dieser Punkt ist für die weitere technische Umsetzung besonders wichtig.

---

## 6. Allgemeines Feedback an alle Gruppen

Allgemein wurde nochmal erklärt, dass ein Lastenheft aus Sicht des Kunden geschrieben werden soll.

Dort soll stehen, was fachlich gebraucht wird und welche Priorität die einzelnen Anforderungen haben.

Das Pflichtenheft ist anschließend stärker für die Projektgruppe selbst relevant. Es hilft dabei, den technischen Aufwand einzuschätzen und die geplante Umsetzung nachvollziehbar zu machen.

---

## 7. Konsequenz für die weitere Arbeit

Die Gruppe soll die vorhandenen Unterlagen sauber einordnen und für die Endabgabe vollständig vorbereiten.

Besonders wichtig sind dabei:

1. Herrn Prof. Dr. Becking klar zeigen, dass Lastenheft und Pflichtenheft bereits ausführlich vorhanden sind
2. Lastenheft und Pflichtenheft später vollständig mit abgeben
3. BPMN-Modellierung für die Endabgabe genauer beschreiben
4. Businessprozesse, Datenbank, API und Weboberfläche weiterhin klar zusammenführen
5. Datenbankzugriffe konsequent über Stored Procedures planen
6. die nächsten Projektschritte sauber dokumentieren

---

## 8. Nächste Aufgabe

Die Ergebnisse und das Feedback sollen ausformuliert und anschließend in ILIAS hochgeladen werden.

Damit wird dokumentiert, dass das Feedback aus dem Projektproposal aufgenommen und in die weitere Projektplanung eingeordnet wurde.

---

## 9. Wichtigste Erkenntnis

Das Projekt hat bereits eine starke technische Grundlage.

Lastenheft und Pflichtenheft sind bereits ausführlich vorhanden, müssen aber gegenüber Herrn Prof. Dr. Becking klar als bestehende Detaildokumente kommuniziert werden.

Die BPMN-Modellierung soll für die Endabgabe noch detaillierter beschrieben werden, obwohl die technische Umsetzung des Projekts bereits positiv wirkt.

Der wichtigste technische Punkt ist, dass der Zugriff auf die Datenbank über Stored Procedures erfolgen soll.

Entscheidend ist, dass am Ende fachliche Anforderungen, ausgewählte Businessprozesse, Datenbank, Stored Procedures, API und Weboberfläche sauber zusammenpassen.