# Hochwuchstherapie

Wachstumsdämpfung bei konstitutionellem Hochwuchs.
Kinderorthopädie im Emil-von-Behring-Krankenhaus.

Rechner für den Zeitpunkt der kompletten Epiphyseodese von distalem Femur und
proximaler Tibia, um eine definierte Endgröße zu erreichen. Multiplier-Methode
nach Paley. Läuft vollständig im Browser, offline, ohne Server und ohne
Datenübertragung.

Die Oberfläche besteht aus zwei umrandeten Blöcken:

**1 · Prognose ohne Eingriff** — aus Geschlecht, Alter (oder Geburtsdatum)
und aktueller Körpergröße wird die zu erwartende Endgröße berechnet.
Alter werden in Jahren und Monaten eingegeben; Monatsangaben über 11
laufen korrekt über.

**2 · Epiphyseodese** — hier wird zwischen drei Fragen umgeschaltet:

- *sofort* — welche Reduktion und welche Endgröße ein Eingriff zum
  heutigen Zeitpunkt ergäbe, aufgeteilt nach distalem Femur und
  proximaler Tibia
- *zu einem Zeitpunkt* — dasselbe für ein frei gewähltes Operationsalter
  bzw. Operationsdatum
- *für eine Zielgröße* — der Zeitpunkt, zu dem das verbleibende knienahe
  Wachstum genau der erforderlichen Reduktion entspricht, mit Zeitfenster
  aus der Prognoseunsicherheit

## Veröffentlichen

1. Neues Repository anlegen, z. B. `Epiphysiodese`. Sichtbarkeit: public
   (GitHub Pages ist bei privaten Repos kostenpflichtig).
2. Alle Dateien dieses Ordners in den Hauptzweig hochladen —
   `index.html` muss im Wurzelverzeichnis liegen.
3. **Settings → Pages → Source: Deploy from a branch**, Branch `main`,
   Ordner `/ (root)`, speichern.
4. Nach ein bis zwei Minuten ist die Seite unter
   `https://pitsche-patsche.github.io/Epiphysiodese/` erreichbar.

## Auf dem Home-Bildschirm ablegen

- **iPhone:** Seite in **Safari** öffnen (nicht Chrome), Teilen-Symbol →
  *Zum Home-Bildschirm*.
- **Android:** Seite in Chrome öffnen, Drei-Punkte-Menü → *App installieren*
  bzw. *Zum Startbildschirm hinzufügen*.

Danach startet der Rechner im Vollbild und funktioniert ohne Netz.

## Aktualisieren

Geänderte Dateien hochladen **und** in `sw.js` die Zeile
`const VERSION = 'v1';` hochzählen. Ohne diese Änderung liefert der
Service Worker weiter die alte, zwischengespeicherte Fassung aus.

## Modell

Restwachstum je Segment = Länge × (M − 1). Die distale Femurfuge trägt rund
71 % des Femurwachstums, die proximale Tibiafuge rund 57 % des
Tibiawachstums. Segmentlängen werden aus der Körpergröße geschätzt
(Femur 27 %, Tibia 22 % der Stehhöhe). Der Zeitpunkt wird per Bisektion so
gesucht, dass die Summe beider Anteile der erforderlichen Reduktion
entspricht.

Im Diagramm markiert die gepunktete senkrechte Linie das aktuelle Alter, der
grüne Punkt den errechneten Zeitpunkt. In der Tabelle ist die Zeile des
aktuellen Alters eingerahmt; bereits verstrichene Zeilen sind blass gesetzt.

## Wichtig

Die Multiplikatortabellen am Anfang des `<script>`-Blocks in `index.html`
sind **Näherungswerte** und vor klinischem Einsatz gegen die
Originalpublikation zu ersetzen (Paley et al., *The multiplier method for
prediction of adult height*, J Pediatr Orthop 2004).

Die altersbasierten Multiplikatoren sind vor dem Wachstumsschub am
zuverlässigsten und verlieren in der Entscheidungsphase an Präzision
(maximale SD des Vorhersagefehlers 7,0 cm bei Jungen mit 13,5 Jahren,
5,6 cm bei Mädchen mit 11,5 Jahren; für Extremitätenlängen 3,9 bzw. 3,2 cm).
Ab Beginn des Wachstumsschubs ist das Skelettalter dem chronologischen Alter
überlegen.

Rechenhilfe, kein Ersatz für Ganzbeinaufnahme, Skelettalterbestimmung und
klinische Beurteilung.

## Kontakt

Kinderorthopädie im Emil-von-Behring-Krankenhaus
<beb-kinderorthopaedie@helios-gesundheit.de>
