# 🧬 Biochemie Lernplattform – DPU Vorklinik

Eine interaktive, vollständig clientseitige Lernplattform für das Biochemie-Curriculum der DPU Vorklinik. Keine Installation, kein Backend – einfach `index.html` öffnen.

![Platform Preview](https://img.shields.io/badge/Status-Active-green) ![License: MIT](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

| Feature | Beschreibung |
|---|---|
| 📋 **Übersicht** | Thematische Karten, Lernziele und Merkhilfen für jede VL |
| 🃏 **Karteikarten** | Flip-Cards mit Kategoriefiltern, Shuffle und Keyboard-Navigation |
| ❓ **Quiz** | Multiple-Choice Quiz pro VL mit Sofort-Feedback und Score |
| 📊 **Tabellen** | Übersichtstabellen mit Vergleichsinformationen |
| 🎓 **Prüfungsmodus** | SRS-basiertes Lernsystem (Wieder/Gut/Perfekt) mit allen VLs |
| 🔍 **Suchfunktion** | Live-Suche über alle Karten, Übersichten und Tabellen |
| 📈 **Fortschrittsbalken** | Lokale Verfolgung besuchter VLs und Quiz-Abschlüsse |
| 📊 **Statistiken** | Übersicht über Quiz-Ergebnisse und schwächste Karten |
| 🌙 **Dark/Light Mode** | Automatisches Theme-Switching |

## 📚 Kursstruktur

```
Teil I+II:   Bausteine (B01–B13)         → Chemische Grundlagen
Teil III:    Proteine & Enzyme (VL01–09) → Struktur, Funktion, Kinetik
Teil IV:     Proteinanalytik (P01–P03)   → Herstellung, MS, Strukturaufklärung
Teil V:      Proteostase (V01–V09)       → Faltung, Abbau, Neurodegeneration
Teil VI:     Ausgewählte Proteine (A01–07) → Hb, EZM, Kollagen
Teil VII:    Signaltransduktion (S01–02) → GPCR, MAPK, PI3K
```

**Gesamt: 43 Vorlesungseinheiten** mit jeweils:
- 4 Themenkarten (Übersicht)
- 3–5 Lernziele
- 1 Mnemonic/Merkhilfe
- 6–10 Karteikarten (Flip-Cards)
- 3–4 Quiz-Fragen (Multiple Choice)
- 1–3 Vergleichstabellen

## 🚀 Quickstart

```bash
# Option 1: Direkt im Browser öffnen
open index.html

# Option 2: Lokaler Dev-Server (empfohlen für volle Funktionalität)
npx serve .
# → http://localhost:3000

# Option 3: Python HTTP-Server
python3 -m http.server 8080
# → http://localhost:8080
```

## 📁 Projektstruktur

```
lernplattform-proteine/
├── index.html              # Hauptanwendung (vollständig inline, kein Build nötig)
├── README.md               # Diese Datei
├── .gitignore              # Git-Ignore Konfiguration
├── package.json            # Optional: npm scripts für lokalen Server
└── pdfs/                   # Zusammenfassungs-PDFs (Teil I–VII)
    ├── Teil_I_II_Bausteine.pdf
    ├── Teil_III_Proteine_Enzyme.pdf
    ├── Teil_IV_Proteinanalytik.pdf
    ├── Teil_V_Proteostase.pdf
    ├── Teil_VI_Ausgewaehlte_Proteine.pdf
    └── Teil_VII_Signaltransduktion.pdf
```

> **Hinweis:** Die gesamte Anwendungslogik (HTML, CSS, JavaScript, alle Daten) ist in einer einzigen `index.html` eingebettet. Kein Build-Prozess, keine Dependencies, kein Backend erforderlich.

## ⌨️ Tastaturkürzel

| Tastenkombination | Aktion |
|---|---|
| `←` / `→` | Vorherige / Nächste Karteikarte |
| `Space` / `↑` / `↓` | Karteikarte umdrehen |
| `Escape` | Suche schließen |

## 💾 localStorage

Die Plattform nutzt localStorage für:

| Key | Inhalt |
|---|---|
| `biochemie_progress` | Besuchte VLs, Quiz-Abschlüsse |
| `biochemie_stats` | Quiz-Scores, Übungsanzahl, schwächste Karten |
| `biochemie_srs` | SRS-Intervalle für Prüfungsmodus |

Alle Daten bleiben lokal auf dem Gerät.

## 🎓 Prüfungsmodus & SRS

Der Prüfungsmodus implementiert den **SM-2 Algorithmus** (Spaced Repetition):

- **Wieder** → Morgen nochmal (Intervall = 1 Tag)
- **Gut** → In einigen Tagen (Intervall wächst moderat)
- **Perfekt** → In Wochen (Intervall wächst stark)

Karten, die als "Wieder" bewertet wurden, werden in der aktuellen Session nach 3–5 Karten wieder eingeschoben.

## 🔍 Suchfunktion

Die Suche durchsucht parallel:
- **Karteikarten** (Vorder- und Rückseite)
- **Übersicht** (Thementitel und alle Bullet-Points)
- **Tabellen** (Titel und alle Zellinhalte)

Klick auf ein Suchergebnis öffnet direkt die entsprechende VL im richtigen Tab.

## 📄 Lizenz

MIT License – freie Verwendung zu Lernzwecken.

---

*Erstellt für das Biochemie-Curriculum der DPU Vorklinik. Alle Inhalte basieren auf dem offiziellen Kursmaterial.*
