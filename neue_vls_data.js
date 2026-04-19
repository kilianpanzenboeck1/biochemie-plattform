// =========================================================
// NEUE VLS DATA — Teil IV, V, VI, VII
// P01–P03 (Proteinanalytik, orange)
// V01–V09 (Proteostase, indigo)
// A01–A07 (Ausgewählte Proteine, rose)
// S01–S02 (Signalwege, green)
// =========================================================

// ---- META ----
const P_META = {
  p01: { label: 'P01', title: 'Herstellung & Auftrennung von Proteinextrakten', color: 'tag-orange', emoji: '🧫' },
  p02: { label: 'P02', title: 'Identifizierung von Proteinen & Massenspektrometrie', color: 'tag-orange', emoji: '🔬' },
  p03: { label: 'P03', title: 'Aufklärung der Proteinstruktur', color: 'tag-orange', emoji: '🧩' },
};

const V_META = {
  v01: { label: 'V01', title: 'Proteinfaltung', color: 'tag-indigo', emoji: '🌀' },
  v02: { label: 'V02', title: 'Proteinbiosynthese – Translation', color: 'tag-indigo', emoji: '🔄' },
  v03: { label: 'V03', title: 'Posttranslationale Prozessierung & Sortierung', color: 'tag-indigo', emoji: '📦' },
  v04: { label: 'V04', title: 'Proteinabbau – Einführung & UPS', color: 'tag-indigo', emoji: '♻️' },
  v05: { label: 'V05', title: 'Proteinabbau – Autophagie', color: 'tag-indigo', emoji: '🔁' },
  v06: { label: 'V06', title: 'Proteinabbau an & in Mitochondrien', color: 'tag-indigo', emoji: '⚡' },
  v07: { label: 'V07', title: 'Proteinsequestrierung & Proteinaggregation', color: 'tag-indigo', emoji: '🧱' },
  v08: { label: 'V08', title: 'Proteostase & Altern', color: 'tag-indigo', emoji: '⏳' },
  v09: { label: 'V09', title: 'Neurodegenerative Proteinfehlfaltungs-Erkrankungen', color: 'tag-indigo', emoji: '🧠' },
};

const A_META = {
  a01: { label: 'A01', title: 'Myoglobin – Struktur & O₂-Speicherung', color: 'tag-rose', emoji: '💪' },
  a02: { label: 'A02', title: 'Hämoglobin – Struktur & Kooperativität', color: 'tag-rose', emoji: '🩸' },
  a03: { label: 'A03', title: 'Einflussfaktoren der O₂-Affinität von Hämoglobin', color: 'tag-rose', emoji: '📉' },
  a04: { label: 'A04', title: 'Hämoglobinopathien', color: 'tag-rose', emoji: '🧬' },
  a05: { label: 'A05', title: 'Proteine der extrazellulären Matrix', color: 'tag-rose', emoji: '🕸️' },
  a06: { label: 'A06', title: 'Kollagen & Elastin', color: 'tag-rose', emoji: '🦴' },
  a07: { label: 'A07', title: 'GAGs, Proteoglykane & anorganische Strukturen', color: 'tag-rose', emoji: '🔩' },
};

const S_META = {
  s01: { label: 'S01', title: 'Grundsätze zellulärer Kommunikation & Signalwege', color: 'tag-green', emoji: '📡' },
  s02: { label: 'S02', title: 'Intrazelluläre Signalkaskaden', color: 'tag-green', emoji: '⚗️' },
};

// =========================================================
// OVERVIEW DATA
// =========================================================
const P_OVERVIEW = {
  p01: { topics: [
    { icon: '🔬', color: 'var(--orange-bg)', title: 'Zellaufschluss & Subfraktionierung', points: [
      'Aufschluss durch Mixer, Ultraschall, osmotischen Schock, Druckänderung',
      'Denaturierende Detergenzien (SDS, 16-BAC): irreversibel, für Aktivitätsstudien ungeeignet',
      'Nicht-denaturierende Detergenzien (Triton X-100, NP-40): für Struktur- & Interaktionsstudien',
      'Ammoniumsulfat-Fällung: Aussalzeffekt, reversibel → native Proteine aufreinigbar'
    ], formula: null },
    { icon: '🧪', color: 'var(--teal-bg)', title: 'Chromatographie', points: [
      'Gelfiltrierung: Auftrennung nach Größe (kleine Moleküle dringen in Poren ein)',
      'Ionenaustausch: nach Ladung (Kationen-/Anionenaustauscher)',
      'Affinitätschromatographie: nach spezifischer Bindung an matrixgebundenen Liganden',
      'Ultrafiltration & Dialyse: Aufkonzentrierung und Pufferwechsel'
    ], formula: null },
    { icon: '⚡', color: 'var(--blue-bg)', title: 'Elektrophorese', points: [
      'SDS-PAGE (denaturierend): Auftrennung nach Größe (kDa); Coomassie-Färbung',
      'IEF (Isoelektrische Fokussierung): nach pI, pH-Gradient, bis 10 kV',
      '2D-Gelelektrophorese (2-DE): 1. IEF, 2. SDS-PAGE → hochauflösend',
      'BN-PAGE: native Bedingungen, Proteinkomplexe bleiben erhalten (Atmungskette)'
    ], formula: null },
    { icon: '📏', color: 'var(--yellow-bg)', title: 'Konzentrationsbestimmung & Zentrifugation', points: [
      'Bradford-Test: Coomassie G-250, Absorptionsshift 470 nm → 595 nm',
      'Differenzielle Zentrifugation: schrittweise nach Sedimentationsvermögen (Svedberg, S)',
      'Dichtegradientenzentrifugation: nach Dichte und Sedimentationskoeffizient',
      'TCA-Fällung (10% w/v): denaturierend, irreversibel; Aceton/Ethanol: meist irreversibel'
    ], formula: null },
  ]},
  p02: { topics: [
    { icon: '🔎', color: 'var(--orange-bg)', title: 'Antikörper-basierter Nachweis', points: [
      'Western Blot: SDS-PAGE → Transfer auf Membran → Primär-AK → Sekundär-AK-Enzym → Farbreaktion',
      'ELISA (Sandwich): quantitativer Proteinnachweis in Lösung, Enzym-gekoppelter AK',
      'Immunfluoreszenz: Lokalisierung in Zellen; Abbe-Limit ~200 nm; Stokes-Verschiebung',
      'Immungold-TEM: kolloidales Gold am Sekundär-AK → hochauflösende Lokalisierung'
    ], formula: null },
    { icon: '🏋️', color: 'var(--blue-bg)', title: 'Massenspektrometrie – Grundlagen', points: [
      'Vorgehen: Gelbande → Trypsin-Verdau (spaltet nach Lys/Arg) → Peptide → MS',
      'MALDI-TOF: Laser-Ionisierung in Matrix, Trennung nach m/z (Flugzeit)',
      'ESI: Elektrospray-Ionisierung, gekoppelt mit Ionenfallen/Quadrupol/TOF',
      'PMF (Peptidmassenfingerprint): Datenbankabgleich → Proteinidentifizierung'
    ], formula: null },
    { icon: '🔗', color: 'var(--purple-bg)', title: 'MS/MS & Proteomik', points: [
      'MS/MS: 2 Massenspektrometer in Reihe + Kollisionszelle → Aminosäuresequenzierung',
      'LC-MS/MS: Goldstandard; HPLC-Auftrennung + kontinuierliche MS/MS-Analyse',
      'Proteomanalyse: Subfraktionierung → 2-DE oder LC → MS-Identifizierung',
      'Detektierbar: Phosphorylierungen, Ubiquitinylierungen, Glykosylierungen (PTMs)'
    ], formula: null },
    { icon: '🗺️', color: 'var(--teal-bg)', title: 'MALDI Imaging & Klinik', points: [
      'MALDI Imaging: in-situ-Ionisierung direkt aus Gewebeschnitt → 2D-Proteinverteilung',
      'Kompatibel mit histologischer Färbung; Unterscheidung Tumor vs. Stroma möglich',
      'Western Blot klinisch: HIV-Bestätigungstest, Prion-Diagnostik',
      'ELISA: Hormone, HIV, Allergiediagnostik, Zytokinmessungen'
    ], formula: null },
  ]},
  p03: { topics: [
    { icon: '🔡', color: 'var(--orange-bg)', title: 'Edman-Abbau (Primärstruktur)', points: [
      'Schritt 1: Kupplung der α-Aminogruppe mit Phenylisothiocyanat (PTC, alkalisch)',
      'Schritt 2: Spaltung der Peptidbindung → ATZ-Derivat (sauer)',
      'Schritt 3: Konvertierung zur stabilen PTH-Aminosäure → chromatographische ID',
      'Hochautomatisiert; auch MS/MS zur Primärstruktur einsetzbar'
    ], formula: null },
    { icon: '💎', color: 'var(--blue-bg)', title: 'Röntgenkristallographie', points: [
      'Röntgenbeugung an Proteinkristallen; Wellenlänge ~1 Å = kovalente Bindungslänge',
      'Fourier-Transformation → 3D-Elektronendichtekarte → Polypeptidkette einpassen',
      'Momentaufnahme der Struktur; keine Dynamik darstellbar',
      'Grundlage für strukturbasiertes Wirkstoffdesign'
    ], formula: null },
    { icon: '📡', color: 'var(--purple-bg)', title: 'NMR-Spektroskopie', points: [
      'Atomkerne (¹H, ¹³C, ¹⁵N) im Magnetfeld → Radiowellen-Resonanz',
      'Chemische Verschiebung (ppm) und Spin-Spin-Kopplung → Abstände & Winkel',
      '2D-NMR für komplexe Proteine; ermöglicht zeitabhängige Untersuchungen (Ligandenbindung)',
      'Grenze: bis ca. 30 kDa; für Struktur und Dynamik gleichzeitig'
    ], formula: null },
    { icon: '🧊', color: 'var(--teal-bg)', title: 'Kryo-EM & AFM', points: [
      'Kryo-EM: TEM bei ≤ −150 °C; tausende Aufnahmen → 3D-Rekonstruktion (Einzelpartikelmethode)',
      'Auch für hochkomplexe Strukturen (Ribosomen, Ionenkanäle, Virushüllproteine)',
      'AFM: Spitze rastert Oberfläche → 3D-Topographie im Nanometerbereich',
      'Cdc48/p97 (AAA-ATPase, Ubiquitin-Prozesse) mittels AFM strukturell analysiert'
    ], formula: null },
  ]},
};

const V_OVERVIEW = {
  v01: { topics: [
    { icon: '🌀', color: 'var(--indigo-bg)', title: 'Grundlagen der Proteinfaltung', points: [
      'Faltungsinformation liegt vollständig in der Aminosäuresequenz (Primärstruktur)',
      'Faltungstrichter-Modell: metastabile Intermediate → energetisch stabiler Endzustand',
      'Stabilisierung durch: H-Brücken, ionische WW, van-der-Waals, Disulfidbrücken, hydrophoben Effekt',
      'Reversible Denaturierung von Ribonuklease A (Harnstoff + β-Mercaptoethanol) belegt Sequenz-Prinzip'
    ], formula: null },
    { icon: '🛡️', color: 'var(--blue-bg)', title: 'Chaperone – Klassen & Funktion', points: [
      'Hsp40 erkennt fehlgefaltete Proteine → übergibt an Hsp70 (ATP-abhängig)',
      'Hsp60 (Chaperonin): käfigartiger Komplex → geschützte Faltungsumgebung',
      'Hsp90: klammerartige Umfassung unter ATP-Verbrauch; für Signalproteine wichtig',
      'Hsp104 (Hefe): Disaggregase; künstliche Varianten lösen humane Aggregate auf'
    ], formula: null },
    { icon: '🔧', color: 'var(--teal-bg)', title: 'Spezifische Faltungshelfer', points: [
      'PDI (Protein-Disulfid-Isomerase): Bildung & Umordnung von Disulfidbrücken im ER',
      'Peptidyl-Prolyl-cis/trans-Isomerasen: Isomerisierung von Prolin-Peptidbindungen',
      'Chaperone in verschiedenen Kompartimenten: Zytosol, ER, Mitochondrien, Plastiden',
      'ATP-Verbrauch für Faltungskontrolle ist essenziell für Zellgesundheit'
    ], formula: null },
    { icon: '⚠️', color: 'var(--rose-bg)', title: 'Fehlfaltung & Proteinopathien', points: [
      'Fehlfaltung → loss of function + toxic gain of function (hydrophobe Areale exponiert)',
      'Proteinopathien: Anreicherung aggregierter Proteine in/außerhalb von Zellen',
      'Prionen & Prionoide: verschiedene Konformationen; Prionoide breiten sich intrinsisch aus',
      'Therapeutisch: Hsp104-Varianten, Chaperone-Induktoren bei neurodegenerativen Erkrankungen'
    ], formula: null },
  ]},
  v02: { topics: [
    { icon: '🔡', color: 'var(--indigo-bg)', title: 'Genetischer Code & tRNA', points: [
      '64 Codons → 20 Aminosäuren; degeneriert (synonyme Codons); universell',
      'Start-Codon AUG (Met); 3 Stopp-Codons: UAA, UAG, UGA',
      'tRNA: Kleeblattstruktur, Anticodon + CCA-3\'-Ende (trägt Aminosäure)',
      'Wobble-Basenpaarungen: Inosin bindet U, C oder A → weniger tRNA-Typen nötig'
    ], formula: null },
    { icon: '🏗️', color: 'var(--blue-bg)', title: 'Ribosomstruktur & Translation', points: [
      'Eukaryoten: 80S = 40S (18S + 33 Proteine) + 60S (5S/5.8S/28S + 49 Proteine)',
      'Prokaryoten: 70S = 30S (16S + 21 Proteine) + 50S (5S/23S + 34 Proteine)',
      'Drei Bindestellen: A (Aminoacyl), P (Peptidyl), E (Exit)',
      'Einbaugeschwindigkeit: 10–20 AS/s; Fehlerquote: 1 Fehler/10.000 AS'
    ], formula: null },
    { icon: '⚙️', color: 'var(--teal-bg)', title: 'Initiations- & Elongationsfaktoren', points: [
      'Initiation Eukaryoten: Kozak-Sequenz (5\'-CCRCCAUGG-3\'), eIF-4 (5\'-Kappe), eIF-2-GTP (Initiator-tRNA)',
      'Initiation Prokaryoten: Shine-Dalgarno-Sequenz + IF-2-GTP + fMet-tRNA',
      'Elongation: eEF-1α-GTP (bringt Aminoacyl-tRNA) → Peptidbindung → eEF-2-GTP (Translokation)',
      'Termination: Stopp-Codon → eRF-GTP → Peptidkette freigesetzt'
    ], formula: null },
    { icon: '💊', color: 'var(--rose-bg)', title: 'Regulation & Antibiotika', points: [
      'Diphterietoxin: ADP-Ribosylierung von eEF-2 → Translation stoppt; 1 Molekül tötet eine Zelle',
      'Tetracyclin: blockiert tRNA-Bindung an A-Stelle (30S); Chloramphenicol: Peptidyltransferase (50S)',
      'miRNA (21–23 nt): bindet 3\'-UTR → Translationshemmung oder mRNA-Abbau',
      'IRP1 + IRE: Eisenmangel → Translationshemmung (5\'-UTR) oder mRNA-Stabilisierung (3\'-UTR)'
    ], formula: null },
  ]},
  v03: { topics: [
    { icon: '📍', color: 'var(--indigo-bg)', title: 'Proteinsortierungs-Signale', points: [
      'Lipidanker: Myristoylierung (C14, N-terminal, ko-translational), Prenylierung (Ras: Farnesyl), Palmitoylierung (reversibel)',
      'Kernimport: NLS + Importin-αβ + Ran-GTP → Cargo-Freisetzung im Kern',
      'Mitochondrien: MTS (15–35 AS, amphipatische α-Helix) → TOM/TIM-Komplex; MPP spaltet MTS ab',
      'Peroxisomen: PTS1 = C-terminales SKL-Tripeptid → PEX5 → DTM-Insertion'
    ], formula: null },
    { icon: '🏭', color: 'var(--blue-bg)', title: 'Sekretorischer Weg & ER', points: [
      'SRP erkennt N-terminale Signalsequenz → Translation pausiert → SRP-Rezeptor im ER',
      'Sec61-Translokon → Signalpeptidase spaltet ab → Faltung im ER (BiP, PDI, PPI)',
      'N-Glykosylierung: 14-Zuckerrest-Oligosaccharid auf Dolichol → en bloc auf Asn-X-Ser/Thr',
      'O-Glykosylierung im Golgi: kürzere Ketten (3–4 Reste) an Ser/Thr'
    ], formula: null },
    { icon: '📬', color: 'var(--teal-bg)', title: 'Golgi & Lysosomale Sortierung', points: [
      'Golgi: cis → medial → trans; KDEL-Retentionssignal für ER-Proteine (BiP, PDI)',
      'COP-II: anterograd ER→Golgi (Sar1); COP-I: retrograd Golgi→ER (Arf)',
      'M6P-Signal: Phosphotransferase markiert lysosomale Enzyme → Clathrin-Vesikel → Lysosom',
      'Lysosomen: pH 4–5; Cathepsine, Nukleasen, Phosphatasen; 200 nm–0,5 µm'
    ], formula: null },
    { icon: '🚨', color: 'var(--rose-bg)', title: 'Klinische Bezüge', points: [
      'I-Zell-Erkrankung: fehlende M6P-Markierung → lysosomale Enzyme ins Blut sekretiert',
      'Zellweger-Syndrom: Mutation in PEX5 → keine Peroxisomen → Tod im 1. Lebensjahr',
      'Familiäre Hypercholesterinämie: LDL-Rezeptormutation → LDL-Akkumulation → Atherosklerose',
      'ABO-Blutgruppen: terminale Glykosylierung bestimmt Antigene (A/B/H/0)'
    ], formula: null },
  ]},
  v04: { topics: [
    { icon: '🏷️', color: 'var(--indigo-bg)', title: 'Ubiquitin & Ubiquitinylierung', points: [
      'Ubiquitin: 8,5 kDa, 76 AS, 7 Lysinreste (K6/11/27/29/33/48/63) + Met1',
      'E1 (1 im Menschen) → E2 (~40) → E3 (~600) → kovalente Verknüpfung mit Substrat',
      'K48-Ketten → proteasomaler Abbau; K63-Ketten → Autophagie, DNA-Reparatur',
      'DUBs (>90, 5 Klassen): editieren Ketten, können Proteine vor Abbau retten'
    ], formula: null },
    { icon: '⚙️', color: 'var(--blue-bg)', title: '26S-Proteasom & Cdc48', points: [
      '26S = 20S-core (α₁₋₇ + β₁₋₇ Ringe) + 1–2 × 19S-recognition particle (Basis + Deckel)',
      '20S: Chymotrypsin-, Trypsin- und Caspase-ähnliche Proteaseaktivität',
      'Cdc48/VCP/p97: Homohexamer; segregiert membrangebundene Proteine → Proteasom',
      'ERAD (ER), MAD (Mitochondrien), pERAD, INM-Abbau: alle Cdc48-abhängig'
    ], formula: null },
    { icon: '📋', color: 'var(--teal-bg)', title: 'Substratspezifität & N-End-Regel', points: [
      'HECT-E3: übernehmen Ub vom E2 selbst; RING-E3: direkter Transfer E2→Substrat',
      'N-End-Regel: destabilisierende N-terminale AS (Arg, Asp, Glu) vs. stabilisierende (Met, Ser)',
      'PEST-Motive und Degrons (destruction boxes): interne Instabilitätssignale',
      'E3-Ligasen an allen subzellulären Lokalisierungen (Zytosol, ER, Golgi, Mitochondrien)'
    ], formula: null },
    { icon: '💊', color: 'var(--rose-bg)', title: 'Klinik & Bedeutung des UPS', points: [
      'Multiples Myelom: hoher UPS-Bedarf durch Genomabweichungen → Proteasom-Inhibitoren klinisch',
      'Neurodegenerative Erkrankungen: fehlgefaltete Aggregate überlasten UPS → proteotoxische Krise',
      'UPS reguliert: Zellzyklus, Apoptose, Immunsystem, synaptische Plastizität',
      'Pharmakologische UPS-Aktivierung als Therapieansatz bei Alzheimer, Parkinson, ALS'
    ], formula: null },
  ]},
  v05: { topics: [
    { icon: '🔁', color: 'var(--indigo-bg)', title: 'Drei Arten der Autophagie', points: [
      'Makroautophagie: Phagophore → Autophagosom (Doppelmembran) → Autophagolysosom → Abbau',
      'Mikroautophagie: direkte Einstülpung der lysosomalen Membran → Vesikelabschnürung',
      'CMA (Chaperon-vermittelt): KFERQ-Motiv → Hsc70-Komplex → LAMP-2A → Lysosom-Import',
      'p62/SQSTM1: Adaptor, verbindet K63-ubiquitinylierte Substrate mit LC3/Atg8 auf Phagophore'
    ], formula: null },
    { icon: '🎛️', color: 'var(--blue-bg)', title: 'Regulation durch mTORC1', points: [
      'TORC1/mTORC1: Nährstoffsensor; Nährstoffmangel → TORC1-Inhibition → Atg13 dephosphoryliert → Autophagie',
      'Rapamycin: pharmakologischer TORC1-Inhibitor → induziert Autophagie',
      'Atg8/LC3: Ubiquitin-ähnliches Protein → PE-Konjugation → Phagoporenmembran',
      'Atg12-Atg5-Atg16-Komplex (E3-Analogon) katalysiert Atg8-PE-Konjugation'
    ], formula: null },
    { icon: '🗑️', color: 'var(--teal-bg)', title: 'Selektive Autophagie-Substrate', points: [
      'Mitophagie (Mitochondrien), Pexophagie (Peroxisomen), Xenophagie (Pathogene)',
      'Aggrephagie: Proteinaggregate via p62/LC3-Adaptor in Autophagosom',
      'Cross-talk UPS ↔ Autophagie: K48 → Proteasom; K63 → Autophagie (aber Überlappung)',
      'Spermidin: natürliches Polyamin, induziert Autophagie, cardio- & neuroprotektiv'
    ], formula: null },
    { icon: '⏳', color: 'var(--rose-bg)', title: 'Autophagie & Altern', points: [
      'Dietary restriction (+100% S. cerevisiae, +21% C. elegans) verlängert Lebensspanne',
      'Rapamycin: +19% C. elegans; Torin 1: +60% Drosophila (Median)',
      'Urolithin A: +45% C. elegans; Spermidin: +15–30% je nach Organismus',
      'Klinisch: Autophagie-Induktoren (Rilmenidin, Metformin, Trehalose) bei Neurodegeneration'
    ], formula: null },
  ]},
  v06: { topics: [
    { icon: '⚡', color: 'var(--indigo-bg)', title: 'Klassen mitochondrialer Proteasen', points: [
      'Intrinsische Mitoproteasen: permanent in Mitochondrien; eigenständige Proteaseaktivität',
      'Pseudo-Mitoproteasen: in Mitochondrien, aber keine eigenständige Proteaseaktivität',
      'Transiente Mitoproteasen: nur situativ rekrutiert (Caspasen, Calpaine, USP-Proteasen)',
      'LONP (Heptamer), CLPXP (6 ClpX + 6 ClpP), iAAA, mAAA, HTRA2: alle AAA-Familie'
    ], formula: null },
    { icon: '🏗️', color: 'var(--blue-bg)', title: 'Lokalisation & MAD', points: [
      'Matrix: LONP, CLPXP; Innenmembran: iAAA (IMS-seitig), mAAA (Matrix-seitig)',
      'Intermembranraum: HTRA2 (Ser-Protease, bei oxidativem Stress aktiv)',
      'MAD: Mitochondrien-assoziierter Proteinabbau; 4–5 Wege, alle enden im 26S-Proteasom',
      'Msp1/Doa1/Vms1/TOM-abhängige MAD-Wege; alle Cdc48-abhängig'
    ], formula: null },
    { icon: '🔄', color: 'var(--teal-bg)', title: 'UPS-Qualitätskontrolle & MAGIC', points: [
      'Zytosolisches UPS kontrolliert mitochondrialen Proteinimport (Stau am TOM/TIM)',
      'MAGIC: Hsp104 löst zytosolische Aggregate → Import in mitochondriale Matrix → Abbau',
      'Überlastung MAGIC → mitochondriale Schädigung → erhöhte Mitophagie-Rate',
      'Stressantworten: mitoCPR, NRF1, Hsf1, ERα-Signalwege verstärken UPS'
    ], formula: null },
    { icon: '🏥', color: 'var(--rose-bg)', title: 'Klinische Bezüge', points: [
      'AFG3L2-Defekt → SCA28 (dominante Ataxie) und Spastische Ataxie-Neuropathie-Syndrom',
      'LONP1-Defekt → CODAS-Syndrom (cerebral, ocular, dental, auricular, skeletal)',
      'HTRA2-Mutation → Parkinson Typ 13; PARK7/DJ-1 → Parkinson Typ 7',
      'SPG7 (mAAA/Paraplegin) → Spastische Paraplegie; Perrault-Syndrom (CLPP-Defekt)'
    ], formula: null },
  ]},
  v07: { topics: [
    { icon: '🧱', color: 'var(--indigo-bg)', title: 'Physiologische Aggregattypen', points: [
      'CytoQ: zytosolisch; INQ: intranukleär (Abbau via UPS)',
      'JUNQ: perinukleär (Abbau via UPS); IPOD: an Vakuole (Abbau via Lysosomen/Vakuole)',
      'Aggresomen (Säugerzellen): am MTOC; dynamisch; Abbau via UPS + Makroautophagie',
      'Aggregate sind dynamisch: Proteine können neu gefaltet oder abgebaut werden'
    ], formula: null },
    { icon: '🔗', color: 'var(--blue-bg)', title: 'Ubiquitin & Aggrephagie', points: [
      'Ubiquitin markiert Aggregate für UPS-Abbau oder Aggrephagie',
      'Aggrephagie: Cue5/SQSTM1 verbindet ubiquitylierte Aggregate mit Atg8/LC3 → Autophagie',
      'p62/SQSTM1: erkennt K63-Substrate → LC3-Kopplung → Einschluss in Phagophore',
      'Exosomen (30–150 nm): Sekretion aggregierter Proteine via MVB → extrazelluläre Ausbreitung'
    ], formula: null },
    { icon: '🔬', color: 'var(--teal-bg)', title: 'Asymmetrische Zellteilung', points: [
      'Proteinaggregate bevorzugt in Mutterzelle zurückgehalten → Tochterzellen sind frisch',
      'Mechanismen: Bindung an Aktin, Vakuole, Nucleus; asymmetrische ER/Mitochondrien-Vererbung',
      'PQC nimmt in alten Mutterzellen ab → zelluläres Altern',
      'Stammzellen: können symmetrisch (2 identisch) oder asymmetrisch teilen'
    ], formula: null },
    { icon: '🧠', color: 'var(--rose-bg)', title: 'Prionartige Ausbreitung & Klinik', points: [
      'Neuronen sekretieren Aggregate als Exosomen → Mikroglia abbauen (protektiv) ODER',
      'Extrazelluläre Anreicherung → Aufnahme durch benachbarte Neuronen → ZNS-Ausbreitung',
      'Proteine: Tau (Alzheimer), SOD1 (ALS), TDP-43 (ALS/FTD), PrPSc (Prionkrankheiten)',
      'Akkumulation in alten Zellen durch nachlassende PQC → Funktionsverlust'
    ], formula: null },
  ]},
  v08: { topics: [
    { icon: '⚖️', color: 'var(--indigo-bg)', title: 'Proteostase-Netzwerk', points: [
      'Proteostase = Fließgleichgewicht: Biosynthese + Faltung + Lokalisation vs. Abbau + Aggregation',
      'Beeinflussung durch interne Faktoren (Metabolismus, Zelltyp) und Umwelt (Hitze, Strahlung, Toxine)',
      'Hitzeschockantwort (HSR): HSF1 → Kernimport → HSE-Bindung → HSP-Gentranskription',
      'UPRER und UPRmito: kompartimentspezifische Stressantworten auf fehlgefaltete Proteine'
    ], formula: null },
    { icon: '⚡', color: 'var(--blue-bg)', title: 'ROS & oxidativer Stress', points: [
      'ROS: O₂⁻ (Superoxid), OH• (Hydroxyl), H₂O₂, ROO•; RNS: NO•, NO₂•',
      'Herkunft: Atmungskette, NADPH-Oxidasen, Fenton-Reaktion, Entzündung, Strahlung',
      'Direkte Proteinschäden + mittelbare Schäden (DNA/RNA, Transkription, Proteasom)',
      'Schutz: SOD → H₂O₂; Katalase → H₂O; Glutathion, Ascorbinsäure als Antioxidantien'
    ], formula: null },
    { icon: '🍬', color: 'var(--teal-bg)', title: 'Maillard-Reaktion & Alterstheorien', points: [
      'Nicht-enzymatische Glykierung: Lys + Glukose → Schiff-Base → Amadori → AGE (Quervernetzung)',
      'AGE: extrazelluläre Proteine, Blutgefäße, Augenlinse; bei Diabetes verstärkt',
      'Mitochondriale Theorie: mtDNA-Schäden → defekte Atmungskette → mehr ROS → Teufelskreis',
      '3 Alterstheorien: Freie-Radikal-, Mitochondriale-, Proteostase-Theorie (alle verknüpft)'
    ], formula: null },
    { icon: '🏥', color: 'var(--rose-bg)', title: 'Klinische Bezüge', points: [
      'Diabetes: AGE-Bildung → Mikro-/Makroangiopathie, Retinopathie, Katarakt',
      'Neurodegenerative Erkrankungen als Folge gestörter Proteostase (→ VL09)',
      'Antioxidative Therapie: Glutathion, Ascorbinsäure, SOD-Mimetika gegen altersbedingte Schäden',
      'Rückgang der Proteostase-Kapazität variiert zwischen Zell- und Gewebetypen'
    ], formula: null },
  ]},
  v09: { topics: [
    { icon: '🧠', color: 'var(--indigo-bg)', title: 'Neurodegenerative Erkrankungen', points: [
      'Fortschreitender Verlust neuronaler Aktivitäten; häufig tödlich; Altern = Hauptrisikofaktor',
      'Charakteristika: Proteinaggregate, mitochondriale Dysfunktion, ROS, gestörte Proteostase',
      'Klassifikation nach Aggregatprotein: β-Amyloid, α-Synuclein, Tau, Polyglutamin, TDP-43/FUS',
      'Modellorganismen: Hefe, Drosophila, C. elegans, Maus, Säugerzellkulturen'
    ], formula: null },
    { icon: '🔍', color: 'var(--blue-bg)', title: 'Alzheimer-Erkrankung (AD)', points: [
      'Erstbeschreibung: Alois Alzheimer 1907; frühe Degeneration Hippocampus CA1',
      'β-Amyloid-Kaskadenhypothese: APP + β-Sekretase + γ-Sekretase → Aβ42/40 → Plaques',
      'Neurofibrilläre Bündel: hyperphosphoryliertes Tau (intra); extrazellulär Aβ-Plaques',
      'APOE ε4: Risikofaktor für sporadische AD (>60 J.); APP/PSEN1/PSEN2 → familiäre AD (<60 J.)'
    ], formula: null },
    { icon: '💪', color: 'var(--teal-bg)', title: 'ALS & andere Proteinopathien', points: [
      'ALS: häufigste Motoneuronenerkrankung; 1–3/100.000/Jahr; Überleben 3–5 Jahre',
      '~90% der ALS-Patienten: TDP-43-Ablagerungen in Motoneuronen (Kern→Zytoplasma)',
      'TDP-43: RNA-bindendes Kernprotein; Verlust → gestörter RNA-Metabolismus + UPS-Überlastung',
      'Parkinson: α-Synuclein (Lewy-Körperchen); Huntington: Polyglutamin; Prionkrankheiten: PrPSc'
    ], formula: null },
    { icon: '🔬', color: 'var(--rose-bg)', title: 'Forschung & Therapieansätze', points: [
      'Hefemodelle: Knock-in menschlicher Krankheitsgene → genomweite Suppressorensuche',
      'β-Amyloid-gerichtete Antikörpertherapien bisher in klinischen Studien gescheitert',
      'Therapeutische Ansätze: Hsp104-Varianten, AMPK-Induktoren, mTORC1-Inhibitoren',
      'Genetik: ~80% der AD-Fälle haben genetische Komponente; ~10% familiäre ALS'
    ], formula: null },
  ]},
};

const A_OVERVIEW = {
  a01: { topics: [
    { icon: '💪', color: 'var(--rose-bg)', title: 'Myoglobin – Struktur', points: [
      '153 Aminosäuren, 8 α-Helices (A–H), monomeres Protein (kein kooperativer Effekt)',
      'Prosthetische Gruppe: Häm (Porphyrin-Ring mit Fe²⁺, 6 Koordinationsstellen)',
      'Fe²⁺: 4 N-Atome Porphyrin + proximales Histidin + O₂-Bindestelle',
      'Distales Histidin: stabilisiert O₂-Bindung (H-Brücke); reduziert CO-Affinität'
    ], formula: null },
    { icon: '📈', color: 'var(--blue-bg)', title: 'Hyperbolische Bindungskurve', points: [
      'YS = pO₂ / (pO₂ + p50); hyperbolisch (kein Kooperativitäts-Effekt)',
      'p50 = 2,8 Torr → sehr hohe O₂-Affinität',
      'Myoglobin ist schlechtes Transportmolekül: bindet O₂ zu fest',
      'Funktion: O₂-Speicher + Puffer im Muskel; gibt O₂ erst bei sehr niedrigem Gewebe-pO₂ ab'
    ], formula: null },
    { icon: '⚠️', color: 'var(--teal-bg)', title: 'CO-Vergiftung & Klinik', points: [
      'CO: 25.000× höhere Affinität an freies Häm als O₂; 250× an Globin-gebundenes Häm',
      'Distales Histidin reduziert CO-Affinität → schützende Funktion der Proteinumgebung',
      'Metmyoglobin (Fe³⁺): kann kein O₂ binden; relevant bei Fleischverfärbung',
      'Myoglobinurie bei Rhabdomyolyse → Nierenschaden'
    ], formula: null },
    { icon: '🌱', color: 'var(--yellow-bg)', title: 'Evolution der Globin-Familie', points: [
      'Aus einem Urgen durch Genduplikation: O₂-Speicher (Myoglobin) + O₂-Transporter (Hb α/β)',
      '3D-Struktur der Globine hoch konserviert (Myoglobin als Referenz)',
      'Alle Globine: 8 α-Helices, Häm-Bindetasche, proximales und distales Histidin',
      'Übergang Monomer (Mb) → Tetramer (Hb) ermöglicht allosterische Kooperativität'
    ], formula: null },
  ]},
  a02: { topics: [
    { icon: '🩸', color: 'var(--rose-bg)', title: 'Hämoglobin-Struktur', points: [
      'α₂β₂-Tetramer (HbA): 4 Untereinheiten, je eine Hämgruppe = 4 O₂-Bindestellen',
      'T-Form (tense, desoxy): Fe²⁺ leicht oberhalb des Porphyrin-Rings, gespannt',
      'R-Form (relaxed, oxy): Fe²⁺ planar im Porphyrin-Ring eingebettet',
      'T→R-Übergang: Helix F bewegt sich; α₁β₁-/α₂β₂-Protomer dreht sich um 15°'
    ], formula: null },
    { icon: '📈', color: 'var(--blue-bg)', title: 'Sigmoidale Bindungskurve', points: [
      'p50 = 26 Torr; arteriell: ~98 Torr (fast vollständig gesättigt)',
      'Venös: ~30 Torr → Hb gibt O₂ ans Gewebe ab',
      'Sigmoidal durch homotropen Kooperativitätseffekt: O₂-Bindung erhöht Affinität der Nachbarn',
      'Effizienter O₂-Transport: viel O₂ aufnehmen in Lunge, viel abgeben im Gewebe'
    ], formula: null },
    { icon: '⚙️', color: 'var(--teal-bg)', title: 'Kooperativitätsmodelle', points: [
      'Symmetriemodell: Tetramer entweder vollständig T oder R; je mehr O₂ → wahrscheinlicher R',
      'Sequenzmodell: eine Untereinheit wechselt T→R und beeinflusst Nachbarn positiv',
      'Homotrop-allosterischer Effekt: Substrat (O₂) selbst ist Effektor',
      'Quartärstruktur essenziell: Monomer würde hyperbolisch binden (wie Myoglobin)'
    ], formula: null },
    { icon: '🔬', color: 'var(--yellow-bg)', title: 'Genduplikation & Evolution', points: [
      'Hb entstand aus Myoglobin-Urgen durch zwei Genduplikationen (α- und β-Kette)',
      '3D-Struktur der Globine hochkonserviert von Wirbeltieren bis zu niederen Organismen',
      'HbA (adult, α₂β₂) → normaler O₂-Transport; HbF (fetal, α₂γ₂) → höhere Affinität',
      'Verschiedene Hb-Isoformen in Embryonal- und Fetalentwicklung'
    ], formula: null },
  ]},
  a03: { topics: [
    { icon: '⚗️', color: 'var(--rose-bg)', title: 'Bohr-Effekt & CO₂', points: [
      'Bohr-Effekt: pH↓ (H⁺ steigt) → O₂-Affinität↓ → erleichterte O₂-Abgabe im Gewebe',
      'Molekular: Protonierung β₁ His146 → H-Brücke mit β₁ Asp94 → T-Form stabilisiert',
      'CO₂ direkt: Carbamat-Bildung an Aminogruppen → negativ geladen → T-Form stabilisiert',
      'CO₂-Transport: Carboanhydrase → HCO₃⁻ + H⁺; HbH⁺ transportiert H⁺ zur Lunge'
    ], formula: null },
    { icon: '📉', color: 'var(--blue-bg)', title: 'BPG – allosterische Regulation', points: [
      '2,3-BPG: Nebenprodukt Glykolyse in Erythrozyten; negativer heterotrop-allosterischer Effektor',
      'BPG bindet in zentraler Pore des Tetramers (T-Form): 8 kationische Gruppen der β-Ketten',
      'R-Form: Pore zu eng → kein BPG-Binding → BPG stabilisiert T-Form',
      'BPG ermöglicht O₂-Abgabe ans Gewebe; ohne BPG hat gereinigtes Hb zu hohe Affinität'
    ], formula: null },
    { icon: '🏔️', color: 'var(--teal-bg)', title: 'Höhenanpassung & HbF', points: [
      'Höhe: niedrigerer pO₂ → mehr BPG-Produktion → p50 steigt von 26 auf 31 Torr',
      'Langfristig: mehr Erythrozyten + mehr Hb pro Erythrozyt',
      'HbF (α₂γ₂): γ-Kette bindet BPG schlechter als β-Kette → höhere O₂-Affinität',
      'HbF-Funktion: O₂-Transfer von mütterlichem HbA auf Feten; nach Geburt Ersatz durch HbA'
    ], formula: null },
    { icon: '💊', color: 'var(--yellow-bg)', title: 'Klinische Bedeutung', points: [
      'Bohr-Effekt: O₂-Abgabe im metabolisch aktiven Muskel (pH↓ durch CO₂ + Laktat)',
      'BPG steigt bei Anämie, Hypoxie, Höhenaufenthalt → Akklimatisierung',
      'Transfusion: gelagerte Erythrozyten verlieren BPG → erhöhte Affinität → schlechtere O₂-Abgabe',
      'HbF klinisch: Neugeborenen-Ikterus; bei Sichelzellanämie erst nach HbF→HbA-Umstellung Symptome'
    ], formula: null },
  ]},
  a04: { topics: [
    { icon: '🧬', color: 'var(--rose-bg)', title: 'Sichelzellanämie', points: [
      'Punktmutation: Glu6 → Val6 in β-Kette → Hämoglobin S (HbS)',
      'Deoxy-HbS bildet unlösliche Fasern → Sichelform → Kapillarverschluss, hämolytische Anämie',
      'Malariaschutz heterozygot: Ansäuerung befallener Erythrozyten → Bohr-Effekt → schnellere HbS-Polymerbildung → Milzabbau',
      '5–7% der Weltbevölkerung sind Träger von Hb-Defekten'
    ], formula: null },
    { icon: '⚖️', color: 'var(--blue-bg)', title: 'Thalassämien', points: [
      'α-Thalassämie: zu wenig α-Ketten → β₄-Tetramer (HbH) → hohe O₂-Affinität ohne Kooperativität',
      'β-Thalassämie: zu wenig β-Ketten → α-Ketten aggregieren → Erythrozyten-Zerstörung',
      'Klinik: Anämie, Erschöpfung, Milz-/Leberfehlfunktion; Spektrum je nach genetischer Variante',
      'Autosomal rezessiv; Transfusionspflicht bei schwerer Form'
    ], formula: null },
    { icon: '🔬', color: 'var(--teal-bg)', title: 'Weitere Hb-Varianten', points: [
      'Nach Entdeckungsort benannt: Boston, Kansas, Yakima, Hammersmith, Bristol, Milwaukee',
      'Molekulare Effekte: Schwächung Hämbindung, Methämoglobinbildung, T/R-Gleichgewicht',
      'HbH (β₄-Tetramer): hyperbolische Kurve, kaum O₂-Abgabe im Gewebe',
      'Methämoglobin (Fe³⁺): kein O₂-Transport möglich (Oxidation von Fe²⁺ zu Fe³⁺)'
    ], formula: null },
    { icon: '💊', color: 'var(--yellow-bg)', title: 'Klinik & Therapie', points: [
      'Sichelzellanämie: vaso-okklusive Krisen, Infarkte, hämolytische Anämie, Schmerzkrisen',
      'Malaria-Endemiegebiete: balancierter Polymorphismus (HbS heterozygot)',
      'Thalassämie-Diagnostik: Blutbild, Hb-Elektrophorese, Gentest',
      'Gentherapie-Ansätze: funktionelle β-Kette via Lentivirus-Vektor oder CRISPR/Cas9'
    ], formula: null },
  ]},
  a05: { topics: [
    { icon: '🕸️', color: 'var(--rose-bg)', title: 'Komponenten der ECM', points: [
      '4 Hauptkomponenten: Kollagen/Elastin (Zugstabilität), GAGs (Druckelastizität), anorganische Strukturen, Glykoproteine (Verankerung)',
      'Glykoproteine: Laminin, Fibronektin → verankern ECM an Plasmamembran via Integrine',
      'Zelltypen: Fibroblasten (Bindegewebe), Chondroblasten (Knorpel), Osteoblasten (Knochen)',
      'ECM-Funktion: strukturelle Stütze, Zell-Zell-Kommunikation, Migration, Differenzierung'
    ], formula: null },
    { icon: '🦴', color: 'var(--blue-bg)', title: 'Knochen & Hydroxylapatit', points: [
      'Knochen: 70 % Hydroxylapatit [Ca₅(PO₄)₃OH], 20 % organisch (Kollagen), 10 % Wasser',
      'Osteoblasten: bilden Osteoid → Mineralisierung durch Ca²⁺/Phosphat → Hydroxylapatit',
      'Osteoklasten: Integrin-Bindung → HCl (ATP-Protonenpumpe + Cl⁻) + MMP-9/Cathepsin K',
      'Carboanhydrase: CO₂ + H₂O → H⁺ + HCO₃⁻ → HCl-Produktion in Osteoklasten'
    ], formula: null },
    { icon: '🔩', color: 'var(--teal-bg)', title: 'GAGs & Proteoglykane', points: [
      'GAG: repetitive Disaccharideinheiten (Aminozucker + Uronsäure); stark negativ geladen',
      '4 Typen: Hyaluronsäure (frei), Chondroitin-/Dermatansulfat, Keratansulfat, Heparansulfat',
      'Aggrecan (250 kDa): >100 GAG-Ketten; Aggrecan-Hyaluronsäure-Komplex = gelartige Grundsubstanz',
      'GAGs binden Wasser (Kationen + Hydrathüllen) → verantwortlich für Druckelastizität'
    ], formula: null },
    { icon: '🏥', color: 'var(--yellow-bg)', title: 'Pathologische Zustände', points: [
      'Osteogenesis imperfecta: Typ-I-Kollagenmangel → erhöhte Knochenbrüchigkeit (Glasknochenkrankheit)',
      'Ehlers-Danlos-Syndrom: Kollagenmutationen → überdehnbare Haut, überstreckbare Gelenke',
      'Skorbut: Vitamin-C-Mangel → keine Hydroxylierung → Kollagensynthesestörung',
      'Osteoporose: Ungleichgewicht Osteoblasten/Osteoklasten (impliziert durch Mechanismus)'
    ], formula: null },
  ]},
  a06: { topics: [
    { icon: '🦴', color: 'var(--rose-bg)', title: 'Kollagen – Struktur', points: [
      'Häufigstes Protein im Körper (25 % aller Proteine); >40 Isoformen, >25 verschiedene Trimere',
      'Tripelhelix: 3 linksgängige Einzelhelices → rechtsgängige Superhelix; Durchmesser 1,5 nm',
      'Aminosäuremotiv: Gly-X-Y (X oft Pro, Y oft Hydroxyprolin); 300 Wiederholungen/Monomer',
      'Hydroxyprolin: H-Brücken zwischen Strängen → Tripelhelix-Stabilität; Vitamin-C-abhängig'
    ], formula: null },
    { icon: '🏗️', color: 'var(--blue-bg)', title: 'Kollagen-Biosynthese (8 Schritte)', points: [
      '1. Translation am rER → 2. Hydroxylierung (Vit. C) → 3. Glykosylierung → 4. Tripelhelix',
      '5. Vesikeltransport (Golgi) → 6. Exozytose → 7. Propeptidabspaltung → Tropokollagen',
      '8. Quervernetzung zu Kollagenfibrillen (Fibrillogenese) → Kollagenfasern',
      'Abbau: Matrix-Metalloproteasen (MMP, Zink-haltig, 23 Varianten); bei Wundheilung'
    ], formula: null },
    { icon: '💨', color: 'var(--teal-bg)', title: 'Elastin – Struktur & Funktion', points: [
      'Elastin verleiht Zugelastizität (Haut, Lunge, Blutgefäße); kann vielfach gedehnt werden',
      'Mechanismus: hydrophobe Bereiche entfalten sich bei Zug → Rückfaltung ohne Kraft',
      'Quervernetzung: Lysinreste extrazellulär kovalent verknüpft → Faserstabilität',
      'Fibrilline: Glykoproteine; Elastinmonomere assoziieren mit Mikrofibrillen (aus Fibrillin)'
    ], formula: null },
    { icon: '🏥', color: 'var(--yellow-bg)', title: 'Klinische Bezüge', points: [
      'Skorbut: Vitamin-C-Mangel → gestörte Hydroxylierung → fehlende Kollagenbildung',
      'Osteogenesis imperfecta: Typ-I-Kollagen-Defekt → Knochen brechen leichter',
      'Ehlers-Danlos-Syndrom: Kollagenmutationen → Bindegewebsschwäche',
      'Marfan-Syndrom: Fibrillin-1-Mutation → Aortenaneurysmen, Linsenluxation'
    ], formula: null },
  ]},
  a07: { topics: [
    { icon: '🔩', color: 'var(--rose-bg)', title: 'GAG-Typen & Biosynthese', points: [
      'GAG = unverzweigte Polysaccharide: Aminozucker + Uronsäure; stark negativ geladen',
      'Hyaluronsäure (frei, nicht proteingebunden); Chondroitin-/Dermatansulfat; Keratansulfat; Heparansulfat',
      'O-Glykosylierung im Golgi: Verbindungstetrasaccharid (Xyl-Gal-Gal-GlcUA) an Serin',
      'Aggrecan (250 kDa): >100 GAG-Ketten → Aggrecan-Hyaluronsäure-Komplex via Link-Protein'
    ], formula: null },
    { icon: '💧', color: 'var(--blue-bg)', title: 'Druckelastizität & Funktion', points: [
      'Hohe negative Ladungsdichte → bindet Kationen + Hydrathüllen → viel Wasser eingelagert',
      'GAGs/Proteoglykane = gelartige Grundsubstanz → verantwortlich für Druckelastizität',
      'Gelenkflüssigkeit, Knorpel: GAG-Grundsubstanz federt Druckbelastung ab',
      'Heparin: stark sulfatiert → antikoagulant (bindet Antithrombin III)'
    ], formula: null },
    { icon: '⛏️', color: 'var(--teal-bg)', title: 'Knochenstoffwechsel', points: [
      'Knochen: 70 % Hydroxylapatit, 20 % Kollagen, 10 % Wasser',
      'Osteoblasten bilden Osteoid → Mineralisierung; Osteoklasten bauen Knochen ab (Resorptionslakunen)',
      'Carboanhydrase: CO₂ + H₂O → H⁺ + HCO₃⁻; ATP-Protonenpumpe + Cl⁻-Austauscher → HCl',
      'Knorpel: faserverstärktes Gel (Proteoglykane + Kollagen; kein Hydroxylapatit)'
    ], formula: null },
    { icon: '🏥', color: 'var(--yellow-bg)', title: 'Klinische Bezüge', points: [
      'Osteoporose: Ungleichgewicht Osteoblasten/Osteoklasten → Bisphosphonate hemmen Osteoklasten',
      'Mucopolysaccharidosen: GAG-Abbaustörungen → Akkumulation in Lysosomen',
      'Carboanhydrase-Hemmer: beeinflussen Osteoklasten-Säuerungsmechanismus',
      'Heparansulfat-Proteoglykane: Kofaktoren für Wachstumsfaktoren (FGF, VEGF)'
    ], formula: null },
  ]},
};

const S_OVERVIEW = {
  s01: { topics: [
    { icon: '📡', color: 'var(--green-bg)', title: 'Direkte & indirekte Kommunikation', points: [
      'Direkt: Gap Junctions (Connexone), juxtakrin (Selektine, Integrine, Cadherine)',
      'Indirekt: autokrin, parakrin, synaptisch, endokrin (hormonal)',
      'Extrazelluläre Vesikel (EVs): lösliche + Membranproteine kombiniert; alle Kommunikationstypen',
      '3 Schritte: (1) Erkennung, (2) Signalkaskade, (3) zelluläre Antwort'
    ], formula: null },
    { icon: '⚙️', color: 'var(--blue-bg)', title: 'Rezeptorklassen', points: [
      'GPCR: 7 Transmembranhelices; G-Protein als molekularer Schalter (GDP inaktiv, GTP aktiv)',
      'RTK (Rezeptor-Tyrosinkinasen): inaktive Monomere → Ligand → Dimerisierung → Phosphorylierung',
      'Liganden-gesteuerte Ionenkanäle: Na⁺/Ca²⁺; zentrale Rolle im Nervensystem',
      'Kernrezeptoren: löslich im Zytoplasma; lipophile Liganden (Steroide, Schilddrüsenhormone)'
    ], formula: null },
    { icon: '🔊', color: 'var(--teal-bg)', title: 'Second Messenger', points: [
      'cAMP: aus ATP durch Adenylatcyclase; → PKA-Aktivierung; Abbau durch Phosphodiesterase',
      'Ca²⁺, DAG, IP3: aus PIP2 durch Phospholipase C; IP3 → Ca²⁺-Freisetzung aus ER',
      'cGMP: Guanylatcyclase → PKG → Relaxation glatter Gefäßmuskelzellen',
      '~60 % aller Medikamente wirken über GPCR-Signalwege'
    ], formula: null },
    { icon: '📣', color: 'var(--yellow-bg)', title: 'Biologische Grundprinzipien', points: [
      'Signalverstärkung: 1 Adrenalin → 10² G-Proteine → 10⁴ cAMP → 10⁸ Glukose-1-phosphat',
      'Zellspezifität: gleicher Botenstoff → verschiedene Antworten in verschiedenen Zelltypen',
      'Multiple Antworten: ein Botenstoff → mehrere parallele Signalwege über Gerüstproteine',
      'Cholera: Choleratoxin → dauerhaft aktives Gs → massiver cAMP-Anstieg → Wasserverlust'
    ], formula: null },
  ]},
  s02: { topics: [
    { icon: '⚗️', color: 'var(--green-bg)', title: 'GPCR-Signalwege', points: [
      'Trimere G-Proteine: α, β, γ; Ligand → GDP→GTP-Austausch → Aktivierung',
      'Gs → Adenylatcyclase ↑ → cAMP → PKA; Gi → Adenylatcyclase ↓',
      'Gq → PLCβ → IP3 + DAG → Ca²⁺ + PKC; Rho-GTPasen → Rho-Kinasen',
      'Abschalten: GTPase-Aktivität des G-Proteins; Rezeptor-Endozytose; Phosphodiesterase'
    ], formula: null },
    { icon: '🔗', color: 'var(--blue-bg)', title: 'RTK- & PI3K/Ras-Wege', points: [
      'RTK: Ligand → Dimerisierung → Transautophosphorylierung → SH2-Domänen-Rekrutierung',
      'PI3K → PIP3 → PKB/AKT → Wachstum, Proliferation, Zellzyklus',
      'PLCγ → IP3 + DAG → PKC + CaM-Kinasen',
      'Ras → MAP-Kinase-Kaskade (MAPKKK → MAPKK → MAPK) → Genexpression'
    ], formula: null },
    { icon: '🧬', color: 'var(--teal-bg)', title: 'JAK/STAT, TGFβ & Kernrezeptoren', points: [
      'JAK/STAT: Zytokin → JAK-Kreuzphosphorylierung → STAT → Kernimport → Transkription',
      'SOCS (Zytosol) + PIAS (Kern) als negative Regulatoren des JAK/STAT-Weges',
      'TGFβ/Smad: TGFβ → Smad2/3-Phosphorylierung → Komplex mit Smad4 → Kern; Smad7 inhibitorisch',
      'Kernrezeptoren: Steroidhormone (Homodimer, HRE); Schilddrüse/VitD/Retinsäure (Heterodimer)'
    ], formula: null },
    { icon: '💊', color: 'var(--yellow-bg)', title: 'Klinische Bezüge', points: [
      'PKB/AKT: häufig in Tumorzellen überexprimiert (Protoonkogen) → Krebstherapeutika',
      'JAK2-Mutation bei Polycythaemia vera; JAK-Inhibitoren (Ruxolitinib) therapeutisch',
      'Sildenafil (Viagra): Phosphodiesterase-Hemmer → cGMP↑ → PKG → Vasodilatation',
      'AMPK: therapeutisches Ziel Typ-2-Diabetes (Metformin aktiviert AMPK → Glukoseaufnahme↑)'
    ], formula: null },
  ]},
};

// =========================================================
// KARTEIKARTEN
// =========================================================
const P_CARDS = [
  // P01
  { id:'p01_1', vl:'p01', cat:'Methode', q:'Was misst der Bradford-Test und wie funktioniert er?', a:'Proteinkonzentration: Coomassie-Brilliant-Blau G-250 bildet Komplexe mit Proteinen → Absorptionsmaximum verschiebt sich von 470 nm (ungebunden, rot) auf 595 nm (blau).' },
  { id:'p01_2', vl:'p01', cat:'Methode', q:'Worin unterscheiden sich SDS-PAGE und BN-PAGE?', a:'SDS-PAGE: denaturierend, trennt nach Größe (kDa). BN-PAGE: native Bedingungen, Proteinkomplexe bleiben erhalten (z.B. Atmungskettenkomplexe I–IV).' },
  { id:'p01_3', vl:'p01', cat:'Methode', q:'Welches Prinzip liegt der isoelektrischen Fokussierung (IEF) zugrunde?', a:'Auftrennung nach isoelektrischem Punkt (pI): im pH-Gradienten wandern Proteine bis zum Punkt, wo ihre Nettoladung null ist (pI). Spannung bis 10 kV, denaturierend mit Harnstoff.' },
  { id:'p01_4', vl:'p01', cat:'Methode', q:'Was ist 2D-Gelelektrophorese (2-DE)?', a:'Kombination: 1. Dimension IEF (nach Ladung/pI), 2. Dimension SDS-PAGE (nach Größe). Hochauflösende Trennung komplexer Proteingemische; ermöglicht Vergleich von Proteomen.' },
  { id:'p01_5', vl:'p01', cat:'Chromatographie', q:'Wie funktioniert Affinitätschromatographie?', a:'Auftrennung nach spezifischer Bindung an matrixgebundenen Liganden/Substrat/Antikörper. Elution durch Überschuss freier Ligand oder pH-Änderung. Basis für Produktion therapeutischer Antikörper.' },
  { id:'p01_6', vl:'p01', cat:'Zentrifugation', q:'Unterschied differenzielle Zentrifugation vs. Dichtegradientenzentrifugation?', a:'Differenziell: schrittweise stärkere Zentrifugation → Auftrennung nach Sedimentationsvermögen (Svedberg, S). Dichtegradienten: Trennung nach Dichte UND Sedimentationskoeffizient; Partikel bleiben bei eigener Dichte stehen.' },

  // P02
  { id:'p02_1', vl:'p02', cat:'Immunologie', q:'Wie funktioniert ein Western Blot?', a:'SDS-PAGE → Elektrotransfer auf Nitrozellulose-/PVDF-Membran → Absättigung mit Milchpulver → Primärantikörper (spezifisch) → Sekundärantikörper (Enzym-gekoppelt) → Farbreaktion.' },
  { id:'p02_2', vl:'p02', cat:'Immunologie', q:'Was ist der Unterschied zwischen ELISA und Western Blot?', a:'ELISA: quantitativer Nachweis von Proteinen in Lösung (Sandwich-ELISA). Western Blot: qualitativer/semiquantitativer Nachweis nach elektrophoretischer Auftrennung. ELISA sensibler und skalierbarer.' },
  { id:'p02_3', vl:'p02', cat:'MS', q:'Was ist Trypsin und warum wird es in der MS-Analytik eingesetzt?', a:'Trypsin ist eine Endopeptidase, die nach Lysin (K) und Arginin (R) spaltet. Erzeugt charakteristische Peptide definierter Masse → Grundlage für Peptidmassenfingerprint (PMF) und MS/MS.' },
  { id:'p02_4', vl:'p02', cat:'MS', q:'Was ist der Unterschied zwischen MALDI-TOF und ESI?', a:'MALDI-TOF: Matrix-assistierte Laser-Desorption + Flugzeitanalyse; für gereinigte Proben. ESI (Elektrosprayionisierung): gekoppelt mit LC (LC-MS/MS); für komplexe Gemische; kontinuierliche Ionisierung.' },
  { id:'p02_5', vl:'p02', cat:'MS', q:'Was leistet Tandemmassenspektrometrie (MS/MS)?', a:'2 Massenspektrometer + Kollisionszelle (Helium): MS-1 trennt nach m/z, Peptide werden fragmentiert, MS-2 analysiert Fragmente → Aminosäuresequenzierung möglich; auch komplexe Gemische identifizierbar.' },
  { id:'p02_6', vl:'p02', cat:'Imaging', q:'Was ist MALDI Imaging und was ist sein klinisches Potenzial?', a:'Punkt-für-Punkt-Abrasterung eines Gewebeschnitts per MALDI → 2D-Verteilung von Proteinen/Peptiden im Gewebe. Potenzial: Revolution der Histologie/Pathologie, Unterscheidung Tumorzellen vs. Stroma (analytische Pathologie).' },

  // P03
  { id:'p03_1', vl:'p03', cat:'Methode', q:'Welche 3 Schritte umfasst der Edman-Abbau?', a:'1. Kupplung: α-Aminogruppe + Phenylisothiocyanat (PTC) unter alkalischen Bedingungen. 2. Spaltung: saure Bedingungen → ATZ-Derivat. 3. Konvertierung: stabile PTH-Aminosäure → chromatographische Identifizierung.' },
  { id:'p03_2', vl:'p03', cat:'Methode', q:'Warum kann die Röntgenkristallographie keine Dynamik zeigen?', a:'Röntgenstrukturanalyse liefert eine Momentaufnahme: Röntgenbeugung am Kristall ergibt eine mittlere Elektronendichteverteilung. Bewegungen und zeitabhängige Prozesse sind nicht darstellbar (→ dafür NMR geeignet).' },
  { id:'p03_3', vl:'p03', cat:'Methode', q:'Bis zu welcher Größe ist NMR für Proteine geeignet und was ist der Vorteil?', a:'NMR: bis ca. 30 kDa. Vorteil gegenüber Röntgenkristallographie: ermöglicht Untersuchung zeitabhängiger Phänomene (Proteindynamik, Ligandenbindung) in Lösung.' },
  { id:'p03_4', vl:'p03', cat:'Methode', q:'Welches Prinzip nutzt die Kryo-Elektronenmikroskopie (Kryo-EM)?', a:'TEM bei ≤ −150 °C: tausende Aufnahmen desselben Objekts aus verschiedenen Perspektiven → computergestützte 3D-Rekonstruktion (Einzelpartikelmethode). Anwendbar auch für komplexe Strukturen (Ribosomen, Virushüllproteine).' },
  { id:'p03_5', vl:'p03', cat:'Methode', q:'Was ist AFM und welche Information liefert es?', a:'Rasterkraftmikroskopie (Atomic Force Microscopy): mikroskopische Spitze rastert Oberfläche → interatomare Kräfte lenken Blattfeder aus → 3D-Topographie im Nanometerbereich. Beispiel: Strukturanalyse von Cdc48/p97 (AAA-ATPase).' },
];

const V_CARDS = [
  // V01
  { id:'v01_1', vl:'v01', cat:'Grundlagen', q:'Wo liegt die Information für die 3D-Struktur eines Proteins?', a:'Vollständig in der Primärstruktur (Aminosäuresequenz). Belegt durch reversible Denaturierung von Ribonuklease A mit Harnstoff + β-Mercaptoethanol → spontane Rückfaltung nach Entfernen der Reagenzien.' },
  { id:'v01_2', vl:'v01', cat:'Chaperone', q:'Wie funktioniert das Hsp40/Hsp70-System?', a:'Hsp40 erkennt fehlgefaltete Proteine → übergibt an ATP-gebundenes Hsp70 → ATP-Hydrolyse → Hsp70 umfasst Substrat → ADP→ATP-Austausch (durch NEF) → korrekt gefaltetes Protein wird freigesetzt.' },
  { id:'v01_3', vl:'v01', cat:'Chaperone', q:'Was ist die Besonderheit von Hsp104?', a:'Hsp104 (Hefe) ist eine ATP-abhängige Disaggregase: löst Proteinaggregate auf. Künstlich hergestellte Hsp104-Varianten können auch humane Proteinaggregate auflösen → potenzieller therapeutischer Ansatz bei Neurodegeneration.' },
  { id:'v01_4', vl:'v01', cat:'Fehlfaltung', q:'Was sind die Folgen von Proteinfehlfaltung?', a:'(1) Loss of function: gefaltetes Protein fehlt. (2) Toxic gain of function: exponierte hydrophobe Areale wechselwirken unkontrolliert mit anderen Proteinen → Teufelskreis der Aggregation → Proteinopathien (Alzheimer, Parkinson, ALS).' },
  { id:'v01_5', vl:'v01', cat:'Chaperone', q:'Was ist der Unterschied zwischen Prionen und Prionoiden?', a:'Prionen: infektiöse Proteinaggregate, übertragbar auf andere Individuen (PrPSc). Prionoide: ähnliche Selbstvermehrung, breiten sich aber nur innerhalb eines Individuums aus (z.B. Tau, α-Synuclein, TDP-43).' },

  // V02
  { id:'v02_1', vl:'v02', cat:'Genetischer Code', q:'Wie viele Codons gibt es und wie viele Aminosäuren kodieren sie?', a:'64 Codons → 20 kanonische Aminosäuren (degenerierter Code). 3 Stopp-Codons: UAA, UAG, UGA. Start-Codon: AUG (Methionin).' },
  { id:'v02_2', vl:'v02', cat:'Ribosom', q:'Wie ist das eukaryotische Ribosom aufgebaut?', a:'80S = 40S (kleine Untereinheit: 18S-rRNA + 33 Proteine) + 60S (große Untereinheit: 5S, 5.8S, 28S-rRNA + 49 Proteine). Drei Bindestellen: A (Aminoacyl), P (Peptidyl), E (Exit).' },
  { id:'v02_3', vl:'v02', cat:'Translation', q:'Welche Rolle spielt eIF-2 bei der Initiation?', a:'eIF-2-GTP bringt die Initiator-Met-tRNA zur kleinen Untereinheit (40S). Bei Häm-Mangel phosphoryliert eine Kinase eIF-2-GDP → Translation wird blockiert (z.B. bei Anämie/Erythropoese).' },
  { id:'v02_4', vl:'v02', cat:'Regulation', q:'Wie hemmt Diphterietoxin die Translation?', a:'ADP-Ribosylierung des modifizierten Histidins (Diphtamid) an eEF-2 → Translation stoppt. Extrem potent: 1 Molekül reicht für die gesamte Zelle.' },
  { id:'v02_5', vl:'v02', cat:'Regulation', q:'Wie regulieren miRNAs die Translation?', a:'miRNAs (21–23 nt) binden komplementär an die 3\'-UTR der Ziel-mRNA → Translationshemmung oder mRNA-Abbau. Ein zentraler Regulationsmechanismus für Genexpression in Eukaryoten.' },
  { id:'v02_6', vl:'v02', cat:'Fakten', q:'Wie schnell und wie fehlerfrei arbeiten Ribosomen?', a:'Einbaugeschwindigkeit: 10–20 Aminosäuren/Sekunde. Fehlerquote: 1 Fehler pro 10.000 Aminosäuren. Jede mRNA wird ca. 4.500-mal translatiert.' },

  // V03
  { id:'v03_1', vl:'v03', cat:'Sortierung', q:'Was sind die drei Haupttransportmechanismen für Proteine zu ihren Zielorten?', a:'(1) Gesteuert (gated): Kernimport über Kernporen. (2) Transmembran: ER, Mitochondrien, Peroxisomen. (3) Vesikulär: ER → Golgi → Plasmamembran/Lysosomen/Sekretion.' },
  { id:'v03_2', vl:'v03', cat:'Kernimport', q:'Wie funktioniert der Ran-GTPase-Zyklus beim Kernimport?', a:'Importin-αβ-Heterodimer + NLS-Cargo → ins Kern. Ran-GEF im Kern: Ran-GTP bindet Importin-β → Cargo-Freisetzung. Ran-GAP im Zytosol: GTP-Hydrolyse → Ran-GDP → Importin kehrt zurück.' },
  { id:'v03_3', vl:'v03', cat:'ER', q:'Was ist das KDEL-Signal und welche Funktion hat es?', a:'C-terminales KDEL-Motiv auf ER-residenten Proteinen (z.B. BiP, PDI). KDEL-Rezeptor im Golgi bindet KDEL → COP-I-Vesikel transportieren Proteine retrograd zurück ins ER.' },
  { id:'v03_4', vl:'v03', cat:'Lysosom', q:'Wie werden lysosomale Enzyme zu den Lysosomen sortiert?', a:'M6P-Signal: Phosphotransferase im cis-Golgi fügt GlcNAc-Phosphat an Mannose an → freie Mannose-6-Phosphat-Reste → M6P-Rezeptor im TGN → Clathrin-Vesikel → späte Endosomen/Lysosomen.' },
  { id:'v03_5', vl:'v03', cat:'Klinik', q:'Was ist die I-Zell-Erkrankung (Mukolipidose II)?', a:'Mutation in N-Acetylglukosamin-Phosphotransferase → keine M6P-Markierung lysosomaler Enzyme → Enzyme fälschlicherweise sezerniert → Akkumulation unverdauter Substrate in Lysosomen (inclusion bodies) → geistige Retardierung, Skelettdefekte.' },

  // V04
  { id:'v04_1', vl:'v04', cat:'Ubiquitin', q:'Was ist Ubiquitin und wie ist es aufgebaut?', a:'Kleines, ubiquitär vorkommendes Protein: 8,5 kDa, 76 Aminosäuren, 7 Lysine (K6/11/27/29/33/48/63) + Met1. Sequenz hochkonserviert in allen Eukaryoten.' },
  { id:'v04_2', vl:'v04', cat:'UPS', q:'Welche Bedeutung haben K48- und K63-Polyubiquitin-Ketten?', a:'K48-Ketten: primäres Signal für proteasomalen Abbau. K63-Ketten: primär für Autophagie, DNA-Reparatur. Andere Lysine (K11, K27, K29): für Lokalisation, Aktivierung, Transkriptionsregulation.' },
  { id:'v04_3', vl:'v04', cat:'UPS', q:'Was ist der Unterschied zwischen HECT-E3 und RING-E3-Ligasen?', a:'HECT-E3: übernehmen Ubiquitin vom E2 selbst und heften es dann ans Substrat. RING-E3: ermöglichen direkten Transfer von E2 auf das Substrat (keine intermediäre Ubiquitin-Bindung an E3).' },
  { id:'v04_4', vl:'v04', cat:'UPS', q:'Wie ist das 26S-Proteasom aufgebaut?', a:'26S = 20S-core particle (CP; 2× α₁₋₇ + 2× β₁₋₇ Ringe; Chymotrypsin-, Trypsin-, Caspase-ähnliche Aktivität) + 1–2 × 19S-recognition particle (RP; Basis + Deckel; Substratbindung, Ub-Abspaltung).' },
  { id:'v04_5', vl:'v04', cat:'UPS', q:'Was ist Cdc48/VCP/p97 und warum ist es klinisch relevant?', a:'AAA-ATPase-Homohexamer; segregiert membrangebundene Proteine → Proteasom. Relevant für: ERAD (ER), MAD (Mitochondrien), Ribosomen-Qualitätskontrolle. VCP-Mutationen → Einschlusskörperchen-Myopathie (IBM) und FTD.' },

  // V05
  { id:'v05_1', vl:'v05', cat:'Autophagie', q:'Welche drei Arten der Autophagie gibt es?', a:'(1) Makroautophagie: Phagophore → Autophagosom → Autophagolysosom. (2) Mikroautophagie: direkte lysosomale Membraneinsstülpung. (3) CMA: KFERQ-Motiv → Hsc70 → LAMP-2A → direkter Import ins Lysosom.' },
  { id:'v05_2', vl:'v05', cat:'Regulation', q:'Wie reguliert mTORC1 die Autophagie?', a:'mTORC1 (Nährstoffsensor): bei Nährstoffen aktiv → phosphoryliert Atg13 → keine PAS-Bildung → Autophagie gehemmt. Bei Nährstoffmangel: mTORC1 inaktiv → Atg13 dephosphoryliert → PAS → Autophagie-Initiation. Rapamycin = pharmakologischer mTORC1-Inhibitor.' },
  { id:'v05_3', vl:'v05', cat:'Regulation', q:'Welche Rolle spielt p62/SQSTM1?', a:'p62 ist ein Autophagie-Adaptor: erkennt K63-ubiquitinylierte Substrate → bindet gleichzeitig Atg8/LC3 auf der Phagophore → Einschluss des Substrats in das Autophagosom. Verknüpft UPS und Autophagie.' },
  { id:'v05_4', vl:'v05', cat:'Altern', q:'Wie beeinflusst Spermidin die Lebensspanne?', a:'Spermidin ist ein natürliches Polyamin, induziert Autophagie. Verlängert Lebensspanne in S. cerevisiae und C. elegans (+15%), Drosophila (+30%). Zudem cardioprotektiv (Blutdrucksenkung) und neuroprotektiv beim Menschen.' },

  // V06
  { id:'v06_1', vl:'v06', cat:'Mitochondrien', q:'Welche drei Klassen mitochondrialer Proteasen gibt es?', a:'(1) Intrinsische Mitoproteasen: permanent in Mitochondrien, eigenständige Proteaseaktivität (LONP, CLPXP, iAAA, mAAA, HTRA2). (2) Pseudo-Mitoproteasen: kommen vor, aber keine Aktivität. (3) Transiente: situativ rekrutiert (Caspasen, Calpaine).' },
  { id:'v06_2', vl:'v06', cat:'Mitochondrien', q:'Wie ist LONP aufgebaut?', a:'LONP (Lon-Protease): Homoheptamer aus 7 identischen Untereinheiten. Jede Untereinheit: N-terminale Substratbindungsdomäne + AAA-ATPase-Domäne + C-terminale Protease-Domäne. Lokalisierung: mitochondriale Matrix.' },
  { id:'v06_3', vl:'v06', cat:'MAD', q:'Was ist der MAGIC-Mechanismus?', a:'Mitochondria As Guardian In Cytosol: Hsp104 löst zytosolische Proteinaggregate ATP-abhängig auf → Import über TOM/TIM in die mitochondriale Matrix → Abbau durch mitochondriale Proteasen. Überlastung → mitochondriale Schädigung + Mitophagie.' },

  // V07
  { id:'v07_1', vl:'v07', cat:'Aggregate', q:'Welche 4 physiologischen Aggregattypen gibt es in Hefe?', a:'CytoQ (zytosolisch), INQ (intranukleär), JUNQ (perinukleär/juxtanukleär), IPOD (an Vakuolen). INQ + JUNQ → Abbau via UPS; IPOD → Abbau via Vakuolen/Lysosomen.' },
  { id:'v07_2', vl:'v07', cat:'Mechanismen', q:'Was sind Aggresomen und wo befinden sie sich?', a:'Aggresomen: perinukleäre Proteinaggregate an Mikrotubuli-organisierendem Zentrum (MTOC) in Säugerzellen. Dynamisch; Abbau via UPS und Makroautophagie. Entstehen bei Überlastung der Proteinstase.' },
  { id:'v07_3', vl:'v07', cat:'Klinik', q:'Wie breiten sich Proteinaggregate im ZNS aus?', a:'Neuronen sekretieren Aggregate als Exosomen (30–150 nm) → Mikroglia können abbauen (protektiv) ODER extrazelluläre Anreicherung → benachbarte Neuronen nehmen auf → prionartige Ausbreitung (Tau, SOD1, TDP-43, PrPSc).' },

  // V08
  { id:'v08_1', vl:'v08', cat:'Proteostase', q:'Was ist Proteostase und was beeinflusst sie?', a:'Proteostase = Protein-Homöostase: Fließgleichgewicht zwischen Biosynthese/Faltung/Lokalisation und Abbau/Fehlfaltung/Aggregation. Beeinflusst durch: Metabolismus, Zelltyp, Hitze, Kälte, Strahlung, Toxine, Infektionen.' },
  { id:'v08_2', vl:'v08', cat:'Stressantwort', q:'Wie funktioniert die Hitzeschockantwort (HSR)?', a:'Fehlgefaltete Proteine angereichert → Sensoren rekrutieren HSF1 → HSF1 ins Kern → bindet Hitzeschock-Elemente (HSE) → HSP-Gentranskription ↑ → mehr Chaperone zur Bekämpfung fehlgefalteter Proteine.' },
  { id:'v08_3', vl:'v08', cat:'ROS', q:'Was ist die Maillard-Reaktion in biologischem Kontext?', a:'Nicht-enzymatische Glykierung: Lysinrest eines Proteins + Glukose → Schiff-Base → Amadori-Produkt → Quervernetzung (AGE = Advanced Glycation End Products). Bei Diabetes verstärkt. AGEs schädigen Blutgefäße, EZM, Augenlinse.' },
  { id:'v08_4', vl:'v08', cat:'Altern', q:'Welche drei Alterstheorien gibt es?', a:'1. Freie-Radikal-Theorie: ROS schädigen DNA/Membranen/Proteine. 2. Mitochondriale Theorie: mtDNA-Mutationen → defekte Atmungskette → mehr ROS → Teufelskreis. 3. Proteostase-Theorie: Proteinschäden akkumulieren → Funktionsverlust. Alle drei sind miteinander verknüpft.' },

  // V09
  { id:'v09_1', vl:'v09', cat:'Alzheimer', q:'Was sind die zwei molekularen Hauptpathologien bei Alzheimer?', a:'(1) Extrazelluläre neuritische Plaques: aggregiertes β-Amyloid (Aβ42/40) → entsteht aus APP durch β-Sekretase + γ-Sekretase. (2) Intrazelluläre neurofibrilläre Bündel: hyperphosphoryliertes Tau (Mikrotubuli-assoziiertes Protein).' },
  { id:'v09_2', vl:'v09', cat:'ALS', q:'Was ist TDP-43 und warum ist es bei ALS relevant?', a:'TDP-43 (43 kDa): RNA-bindendes Kernprotein; reguliert Transkription, Spleißen, RNA-Export. Bei ALS: Verlagerung vom Kern ins Zytoplasma → Aggregation → loss of function + toxic gain of function → gestörter RNA-Metabolismus, UPS/Autophagie überlastet.' },
  { id:'v09_3', vl:'v09', cat:'Genetik', q:'Welche genetischen Risikofaktoren gibt es bei Alzheimer?', a:'Familiäre AD (<60 J.): Mutationen in APP, PSEN1, PSEN2 (γ-Sekretase-Untereinheiten) → nur 5% aller Fälle. Sporadische AD (>60 J.): APOE ε4-Variante als Risikofaktor. ~80% der AD-Fälle haben genetische Komponente.' },
];

const A_CARDS = [
  // A01 – Myoglobin
  { id:'a01_1', vl:'a01', cat:'Struktur', q:'Wie ist Myoglobin aufgebaut?', a:'Monomeres Protein: 153 Aminosäuren, 8 α-Helices (A–H). Prosthetische Gruppe: Häm (Porphyrin-Ring mit zentralem Fe²⁺). Fe²⁺ hat 6 Koordinationsstellen: 4 N-Atome Porphyrin + proximales Histidin + O₂.' },
  { id:'a01_2', vl:'a01', cat:'Funktion', q:'Warum ist Myoglobin kein guter O₂-Transporter?', a:'Hyperbolische Bindungskurve (p50 = 2,8 Torr): sehr hohe O₂-Affinität. Myoglobin gibt O₂ erst bei extrem niedrigem Muskel-pO₂ ab → Funktion als O₂-Speicher und Puffer, nicht als Transporter.' },
  { id:'a01_3', vl:'a01', cat:'CO-Vergiftung', q:'Warum ist CO gefährlich, aber weniger als erwartet?', a:'CO hat 25.000× höhere Affinität an freies Häm als O₂. An Globin-gebundenes Häm jedoch nur 250× (distales Histidin reduziert CO-Affinität durch sterische Hinderung) → Proteinumgebung schützt partiell.' },
  // A02 – Hämoglobin
  { id:'a02_1', vl:'a02', cat:'Struktur', q:'Was ist die Quartärstruktur von HbA und wie viele O₂-Moleküle bindet es?', a:'α₂β₂-Tetramer (HbA = adultes Hämoglobin). 4 Untereinheiten, je eine Hämgruppe → 4 O₂-Bindestellen. p50 = 26 Torr (viel höher als Myoglobin: 2,8 Torr).' },
  { id:'a02_2', vl:'a02', cat:'Kooperativität', q:'Warum ist die Sauerstoffbindungskurve von Hämoglobin sigmoidal?', a:'Homotrop-allosterischer Effekt (Kooperativität): Bindung eines O₂ erhöht die Affinität der benachbarten Untereinheiten durch T→R-Konformationsänderung. Sigmoidal ermöglicht effizienten O₂-Transport (viel aufnehmen/abgeben mit kleinem pO₂-Unterschied).' },
  { id:'a02_3', vl:'a02', cat:'Konformation', q:'Was passiert bei der T→R-Konformationsänderung in Hämoglobin?', a:'Beim T→R-Übergang: Helix F (trägt proximales His + Fe²⁺) bewegt sich. Das α₁β₁-/α₂β₂-Protomerpaar dreht sich um 15°. Fe²⁺ verlagert sich von knapp oberhalb des Porphyrin-Rings (T) in die Porphyrin-Ebene (R).' },
  // A03 – Einflussfaktoren
  { id:'a03_1', vl:'a03', cat:'Bohr-Effekt', q:'Was ist der Bohr-Effekt?', a:'Sinkender pH-Wert (steigende H⁺-Konzentration) erniedrigt die O₂-Affinität von Hämoglobin → erleichterte O₂-Abgabe im Gewebe. Molekular: Protonierung β₁ His146 → H-Brücke mit β₁ Asp94 → T-Form stabilisiert.' },
  { id:'a03_2', vl:'a03', cat:'BPG', q:'Was ist 2,3-BPG und wie wirkt es?', a:'2,3-Bisphosphoglycerat: Nebenprodukt der Glykolyse in Erythrozyten. Negativer heterotrop-allosterischer Regulator: bindet in zentraler Pore des Tetramers (T-Form) → stabilisiert T-Form → erniedrigt O₂-Affinität → ermöglicht O₂-Abgabe ans Gewebe.' },
  { id:'a03_3', vl:'a03', cat:'HbF', q:'Warum hat fetales Hämoglobin (HbF) höhere O₂-Affinität als HbA?', a:'HbF = α₂γ₂-Tetramer: γ-Kette bindet BPG schlechter als β-Kette (struktureller Unterschied) → weniger T-Form-Stabilisierung → höhere O₂-Affinität. Funktion: O₂-Transfer von mütterlichem HbA auf Feten.' },
  // A04 – Hämoglobinopathien
  { id:'a04_1', vl:'a04', cat:'Sichelzelle', q:'Welche Mutation liegt bei der Sichelzellanämie vor und welche Konsequenz hat sie?', a:'Punktmutation: Glu6 → Val6 in der β-Kette (Hb β6 Glu→Val) → Hämoglobin S (HbS). Im Desoxyzustand: hydrophobe Valinreste bilden Kontaktstellen → unlösliche HbS-Fasern → Erythrozyten deformieren (Sichelform) → Kapillarverschluss, hämolytische Anämie.' },
  { id:'a04_2', vl:'a04', cat:'Thalassämie', q:'Wie unterscheiden sich α- und β-Thalassämie?', a:'α-Thalassämie: zu wenig α-Ketten → β₄-Tetramer (HbH): hyperbolische Bindungskurve, kaum O₂-Abgabe. β-Thalassämie: zu wenig β-Ketten → überschüssige α-Ketten aggregieren unlöslich → Erythrozyten-Zerstörung → Anämie.' },
  // A05 – EZM
  { id:'a05_1', vl:'a05', cat:'ECM', q:'Welche 4 Hauptkomponenten hat die extrazelluläre Matrix?', a:'(1) Kollagen + Elastin (Protofilamente: Zugstabilität/Elastizität), (2) Glykosaminoglykane/Proteoglykane (Druckelastizität), (3) Anorganische kristalline Strukturen (Festigkeit: Knochen, Knorpel), (4) Glykoproteine (Laminin, Fibronektin: Membranverankerung).' },
  { id:'a05_2', vl:'a05', cat:'Knochen', q:'Aus welchen Anteilen besteht Knochen und welche Funktion haben sie?', a:'70 % Hydroxylapatit [Ca₅(PO₄)₃OH] (Druckstabilität), 20 % Kollagen (Zugfestigkeit), 10 % Wasser. Osteoblasten bilden Knochen; Osteoklasten bauen ab (Resorptionslakunen + HCl + MMP-9/Cathepsin K).' },
  // A06 – Kollagen & Elastin
  { id:'a06_1', vl:'a06', cat:'Kollagen', q:'Was ist das Aminosäuremotiv von Kollagen und warum ist Glycin wichtig?', a:'Gly-X-Y-Motiv (X = oft Pro, Y = oft Hydroxyprolin); 300 Wiederholungen/Monomer. Glycin (kleinste AS) an jeder 3. Position essenziell: ermöglicht enge Packung in der Tripelhelix-Mitte.' },
  { id:'a06_2', vl:'a06', cat:'Kollagen', q:'Warum ist Vitamin C für die Kollagensynthese notwendig?', a:'Vitamin C (Ascorbinsäure) ist Kofaktor der Prolyl-Hydroxylase: Hydroxylierung von Prolin → Hydroxyprolin. Hydroxyprolin ermöglicht H-Brücken zwischen Strängen der Tripelhelix. Vitamin-C-Mangel → Skorbut.' },
  { id:'a06_3', vl:'a06', cat:'Elastin', q:'Wie verleiht Elastin Geweben Elastizität?', a:'Hydrophobe Bereiche entfalten sich bei Zug und falten sich ohne Krafteinwirkung kompakt zurück (entropische Rückstellkraft). Quervernetzung über Lysinreste extrazellulär → gibt Faser Stabilität. Fibrilline als Gerüst.' },
  // A07 – GAGs & anorganische Strukturen
  { id:'a07_1', vl:'a07', cat:'GAG', q:'Was ist Aggrecan und wie ist es organisiert?', a:'Aggrecan (250 kDa): Proteoglykan-Kernprotein mit >100 GAG-Ketten (Chondroitin- + Keratansulfat). Viele Aggrecane binden über Link-Protein an ein Hyaluronsäure-Molekül → riesiger Superkomplex → gelartige Grundsubstanz der ECM → Druckelastizität.' },
  { id:'a07_2', vl:'a07', cat:'Osteoklasten', q:'Wie lösen Osteoklasten Hydroxylapatit auf?', a:'Osteoklasten binden via Integrine an Knochen → bilden Resorptionslakunen → Carboanhydrase: CO₂ + H₂O → H⁺ + HCO₃⁻; H⁺ über ATP-Protonenpumpe → HCl → löst Hydroxylapatit auf. MMP-9 + Cathepsin K bauen organischen Anteil ab.' },
];

const S_CARDS = [
  { id:'s01_1', vl:'s01', cat:'Kommunikation', q:'Welche vier Arten indirekter zellulärer Kommunikation gibt es?', a:'(1) Autokrin: Zelle reagiert auf eigene Botenstoffe. (2) Parakrin: benachbarte Zellen reagieren. (3) Synaptisch: Neurotransmitter über Synapse. (4) Endokrin: Hormone über Blutbahn zu entfernten Organen.' },
  { id:'s01_2', vl:'s01', cat:'Rezeptoren', q:'Welche 4 Rezeptorklassen gibt es in der Signaltransduktion?', a:'(1) GPCR (7 Transmembranhelices, G-Protein). (2) RTK (Rezeptor-Tyrosinkinasen, Dimerisierung). (3) Liganden-gesteuerte Ionenkanäle (Na⁺/Ca²⁺). (4) Kernrezeptoren (löslich, lipophile Liganden wie Steroide).' },
  { id:'s01_3', vl:'s01', cat:'Verstärkung', q:'Wie stark kann ein Signalmolekül die zelluläre Antwort verstärken?', a:'Beispiel Adrenalin: 1 Molekül → 10² aktive G-Proteine → 10² Adenylatcyclasen → 10⁴ cAMP → 10⁴ PKA → 10⁵ Phosphorylasekinase → 10⁶ Glykogenphosphorylase → 10⁸ Glukose-1-phosphat-Moleküle.' },
  { id:'s02_1', vl:'s02', cat:'GPCR', q:'Welche drei G-Protein-Typen gibt es und was aktivieren sie?', a:'Gs: aktiviert Adenylatcyclase → cAMP ↑. Gi: hemmt Adenylatcyclase → cAMP ↓. Gq: aktiviert PLCβ → IP3 + DAG → Ca²⁺ + PKC.' },
  { id:'s02_2', vl:'s02', cat:'RTK', q:'Wie verläuft die Aktivierung eines RTK?', a:'Ligand bindet → 2 RTK-Monomere dimerisieren → Transautophosphorylierung der Tyrosinreste → SH2-Domänen-Adapterproteine binden phosphorylierte Tyrosine → Aktivierung von PI3K, PLCγ, Ras → Downstream-Kaskaden.' },
  { id:'s02_3', vl:'s02', cat:'JAK/STAT', q:'Wie wird der JAK/STAT-Signalweg abgeschaltet?', a:'SOCS-Proteine (Suppressor of Cytokine Signaling): hemmen STAT-Phosphorylierung im Zytosol. PIAS-Proteine (Protein Inhibitors of Activated STATs): hemmen die Enhancer-Wirkung aktivierter STATs im Kern.' },
  { id:'s02_4', vl:'s02', cat:'Klinik', q:'Wie wirkt Sildenafil (Viagra) auf molekularer Ebene?', a:'Sildenafil hemmt Phosphodiesterase → cGMP wird nicht abgebaut → cGMP ↑ → PKG aktiviert → Relaxation glatter Gefäßmuskelzellen → Vasodilatation (im Bereich der Schwellkörper und der Lunge).' },
];

// =========================================================
// QUIZ-FRAGEN
// =========================================================
const P_QUIZ = [
  { id:'pq01_1', vl:'p01', q:'Bei welcher Wellenlänge absorbiert der Coomassie-Protein-Komplex im Bradford-Test?', opts:['470 nm','540 nm','595 nm','620 nm'], correct:2, exp:'Coomassie G-250 verschiebt sein Absorptionsmaximum von 470 nm (ungebunden, rot) auf 595 nm (proteingebunden, blau).' },
  { id:'pq01_2', vl:'p01', q:'Welches Elektrophoreseverfahren eignet sich zur Analyse nativer Proteinkomplexe wie der Atmungskette?', opts:['SDS-PAGE','IEF','BN-PAGE','Agarosegel'], correct:2, exp:'BN-PAGE (Blaue Nativgelelektrophorese): native Bedingungen → Proteinkomplexe bleiben erhalten (z.B. Atmungskettenkomplexe I–IV).' },
  { id:'pq01_3', vl:'p01', q:'Was trennt die isoelektrische Fokussierung (IEF)?', opts:['nach Größe','nach Ladung/pI','nach Hydrophobizität','nach Dichte'], correct:1, exp:'IEF trennt nach isoelektrischem Punkt (pI): Proteine wandern im pH-Gradienten bis zur Position, an der ihre Nettoladung null ist.' },
  { id:'pq02_1', vl:'p02', q:'Welches Enzym wird im Westernblot typischerweise als Reporterenzym am Sekundärantikörper verwendet?', opts:['Lysozym','Alkalische Phosphatase','Trypsin','Katalase'], correct:1, exp:'Sekundärantikörper sind mit Enzymen wie Alkalischer Phosphatase (AP) oder Meerrettich-Peroxidase (HRP) gekoppelt → Farbreaktion (z.B. Formazan).' },
  { id:'pq02_2', vl:'p02', q:'Was ist der Peptidmassenfingerprint (PMF)?', opts:['Gelelektrophorese nach Peptidfragmenten','Datenbankabgleich charakteristischer Peptidmassen nach Trypsin-Verdau','Sequenzierung via Edman-Abbau','Immunfluoreszenz mit peptidspezifischen Antikörpern'], correct:1, exp:'PMF: charakteristische Peptide nach Trypsin-Verdau werden per MALDI-TOF gemessen → Spektrum mit Proteindatenbank abgeglichen → Proteinidentifizierung.' },
  { id:'pq03_1', vl:'p03', q:'Welche Methode kann Proteindynamik in Lösung zeigen?', opts:['Röntgenkristallographie','Kryo-EM','NMR-Spektroskopie','AFM'], correct:2, exp:'NMR ermöglicht zeitabhängige Untersuchungen in Lösung (Proteindynamik, Ligandenbindung). Röntgenkristallographie liefert nur Momentaufnahmen.' },
  { id:'pq03_2', vl:'p03', q:'Was misst die chemische Verschiebung in der NMR-Spektroskopie?', opts:['Molekülgröße in kDa','Resonanzfrequenzunterschied je nach elektronischer Umgebung (ppm)','Absorptionsmaximum des Proteins','Sedimentationskoeffizient'], correct:1, exp:'Chemische Verschiebung (ppm = parts per million): unterschiedliche Resonanzfrequenzen gleicher Atomkerne je nach elektronischer Umgebung → Information über lokale Struktur.' },
];

const V_QUIZ = [
  { id:'vq01_1', vl:'v01', q:'Welcher Faktor ist für die Auflösung von Proteinaggregaten in der Hefe zuständig?', opts:['Hsp70','Hsp90','Hsp60','Hsp104'], correct:3, exp:'Hsp104 ist eine ATP-abhängige Disaggregase. Künstliche Hsp104-Varianten können auch humane Proteinaggregate auflösen → potenzieller Therapieansatz.' },
  { id:'vq01_2', vl:'v01', q:'Was ist toxic gain of function bei Proteinfehlfaltung?', opts:['Das Protein verliert seine Funktion','Exponierte hydrophobe Areale wechselwirken unkontrolliert → Teufelskreis der Aggregation','Das Protein wird überexprimiert','Die Aminosäuresequenz wird verändert'], correct:1, exp:'Toxic gain of function: fehlgefaltete Proteine haben exponierte hydrophobe Bereiche, die unkontrolliert mit anderen Proteinen interagieren → Aggregation → pathologisch.' },
  { id:'vq02_1', vl:'v02', q:'Mit welcher Geschwindigkeit arbeiten Ribosomen bei der Translation?', opts:['1–2 AS/s','10–20 AS/s','100–200 AS/s','1–2 AS/min'], correct:1, exp:'Ribosomen bauen ca. 10–20 Aminosäuren pro Sekunde ein. Fehlerquote: 1/10.000 AS. Jede mRNA wird ca. 4.500-mal translatiert.' },
  { id:'vq02_2', vl:'v02', q:'Welche Stopp-Codons gibt es in der eukaryotischen Translation?', opts:['UAA, UAG, UGA','UAA, UAG, UCA','UAA, UAG, AUG','UAG, UGA, GUA'], correct:0, exp:'3 Stopp-Codons: UAA, UAG, UGA. Im mitochondrialen Code weichen einige Codons ab: UGA = Trp, AGA und AGG = Stopp.' },
  { id:'vq03_1', vl:'v03', q:'Welches Signal markiert lysosomale Proteine für ihren Transport?', opts:['KDEL','NLS','Mannose-6-Phosphat (M6P)','SKL'], correct:2, exp:'M6P (Mannose-6-Phosphat): Phosphotransferase im cis-Golgi markiert lysosomale Enzyme → M6P-Rezeptor im TGN → Clathrin-Vesikel → Lysosomen.' },
  { id:'vq04_1', vl:'v04', q:'Wie viele E3-Ligasen gibt es im Menschen?', opts:['1','~40','~600','~9.000'], correct:2, exp:'Im Menschen: 1 E1, ~40 E2, aber ~600 verschiedene E3-Ligasen → hohe Substratspezifität des UPS. E3-Ligasen bestimmen, welches Protein ubiquitinyliert wird.' },
  { id:'vq04_2', vl:'v04', q:'Welcher Polyubiquitin-Kettentyp signalisiert proteasomalen Abbau?', opts:['K11','K27','K48','K63'], correct:2, exp:'K48-Polyubiquitin-Ketten: primäres Signal für proteasomalen Abbau. K63-Ketten: primär für Autophagie und DNA-Reparatur.' },
  { id:'vq05_1', vl:'v05', q:'Welcher Mechanismus unterscheidet CMA von Makro- und Mikroautophagie?', opts:['CMA nutzt kein Lysosom','CMA erkennt Proteine via KFERQ-Motiv + Hsc70 → LAMP-2A → direkter Import','CMA bildet Autophagosomen','CMA ist eine Form des proteasomalen Abbaus'], correct:1, exp:'CMA (Chaperon-vermittelte Autophagie): Hsc70 erkennt KFERQ-ähnliches Motiv → Transfer zum Lysosom → Import über LAMP-2A. Kein Vesikel wird gebildet.' },
  { id:'vq06_1', vl:'v06', q:'In welchem Kompartiment ist HTRA2 lokalisiert?', opts:['Mitochondriale Matrix','Innenmembran (matrix-seitig)','Intermembranraum','Äußere Mitochondrienmembran'], correct:2, exp:'HTRA2 ist eine Serin-Protease im Intermembranraum der Mitochondrien. Sie wird bei oxidativem Stress aktiv.' },
  { id:'vq07_1', vl:'v07', q:'An welcher subzellulären Struktur bilden sich Aggresomen in Säugerzellen?', opts:['Endoplasmatisches Retikulum','Golgi-Apparat','Mikrotubuli-organisierendes Zentrum (MTOC)','Mitochondrien'], correct:2, exp:'Aggresomen entstehen perinukleär am MTOC (Mikrotubuli-organisierendes Zentrum). Sie sind dynamisch und werden via UPS und Makroautophagie abgebaut.' },
  { id:'vq08_1', vl:'v08', q:'Was sind Advanced Glycation End Products (AGEs)?', opts:['Proteasom-Untereinheiten','Quervernetzte Protein-Zucker-Addukte durch nicht-enzymatische Glykierung','Autoantikörper bei Diabetes','Reaktive Sauerstoffspezies'], correct:1, exp:'AGEs entstehen durch die Maillard-Reaktion: Lysin + Glukose → Schiff-Base → Amadori → AGE (Quervernetzung). Bei Diabetes verstärkt. Schädigen Blutgefäße, EZM, Augenlinse.' },
  { id:'vq09_1', vl:'v09', q:'Durch welche Mutation entsteht Alzheimer in der familiären Form (early-onset)?', opts:['APOE ε4-Variante','Mutationen in APP, PSEN1 oder PSEN2','TDP-43 Kernexport','SOD1-Mutation'], correct:1, exp:'Familiäre AD (früh): Mutationen in APP, PSEN1 (Presenilin-1) oder PSEN2 (Presenilin-2, γ-Sekretase-Untereinheiten) → vermehrte Aβ42-Produktion. APOE ε4 ist Risikofaktor für sporadische AD.' },
];

const A_QUIZ = [
  { id:'aq01_1', vl:'a01', q:'Welche Sauerstoffbindungskurve hat Myoglobin?', opts:['Sigmoidal','Hyperbolisch','Linear','Exponentiell'], correct:1, exp:'Myoglobin ist ein Monomer → kein kooperativer Effekt → hyperbolische Bindungskurve. YS = pO₂ / (pO₂ + p50); p50 = 2,8 Torr.' },
  { id:'aq02_1', vl:'a02', q:'Um wie viel Grad dreht sich das α₁β₁-/α₂β₂-Protomerpaar beim T→R-Übergang?', opts:['5°','10°','15°','30°'], correct:2, exp:'Beim T→R-Übergang dreht sich das α₁β₁-/α₂β₂-Protomerpaar um 15°. Gleichzeitig bewegt sich Helix F (mit Fe²⁺ + proximalem His) → Fe²⁺ verlagert sich in die Porphyrin-Ebene.' },
  { id:'aq03_1', vl:'a03', q:'Welchen p50-Wert hat normales Hämoglobin (HbA) ohne Anpassung?', opts:['2,8 Torr','20 Torr','26 Torr','50 Torr'], correct:2, exp:'p50 von HbA = 26 Torr. Bei Höhenanpassung (BPG-Anstieg): p50 steigt auf 31 Torr. Myoglobin: 2,8 Torr.' },
  { id:'aq03_2', vl:'a03', q:'Welche Hämoglobin-Form hat höhere O₂-Affinität: HbA oder HbF?', opts:['HbA (α₂β₂)','HbF (α₂γ₂)','Beide gleich','Hängt von pH ab'], correct:1, exp:'HbF hat höhere O₂-Affinität als HbA, weil die γ-Kette BPG schlechter bindet als die β-Kette → weniger T-Form-Stabilisierung → rechts-Verschiebung der Bindungskurve.' },
  { id:'aq04_1', vl:'a04', q:'Welche Aminosäure ist bei Sichelzellanämie verändert?', opts:['Glu6 → Lys6','Glu6 → Val6','Val6 → Glu6','Phe → Ser'], correct:1, exp:'HbS: Glu6 → Val6 in der β-Kette (hydrophil → hydrophob). Im Desoxyzustand bilden die hydrophoben Valinreste Kontaktstellen → unlösliche HbS-Fasern → Sichelform.' },
  { id:'aq05_1', vl:'a05', q:'Welche Zellen produzieren die ECM im Knochengewebe?', opts:['Fibroblasten','Chondroblasten','Osteoblasten','Osteoklasten'], correct:2, exp:'Osteoblasten bilden die ECM des Knochengewebes (Osteoid → Mineralisierung). Fibroblasten → Bindegewebe; Chondroblasten → Knorpel; Osteoklasten → Abbau.' },
  { id:'aq06_1', vl:'a06', q:'Wie viele Schritte umfasst die Kollagen-Biosynthese?', opts:['3','5','8','12'], correct:2, exp:'8 Schritte: Translation am rER → Hydroxylierung → Glykosylierung → Tripelhelix → Golgi-Transport → Exozytose → Propeptidabspaltung → Quervernetzung (Fibrillogenese).' },
  { id:'aq07_1', vl:'a07', q:'Welche Zusammensetzung hat Hydroxylapatit (Formel)?', opts:['Ca₃(PO₄)₂','Ca₅(PO₄)₃OH','Ca₂(SO₄)₂','CaCO₃'], correct:1, exp:'Hydroxylapatit: Ca₅(PO₄)₃OH. Knochen: 70 % Hydroxylapatit, 20 % organisch (v.a. Kollagen), 10 % Wasser.' },
];

const S_QUIZ = [
  { id:'sq01_1', vl:'s01', q:'Wie viel Prozent der aktuell verwendeten Medikamente wirken über GPCR-Signalwege?', opts:['~10 %','~30 %','~60 %','~90 %'], correct:2, exp:'Bis zu 60 % aller heute verwendeten Medikamente entfalten ihre Wirkung über die Beeinflussung von G-Protein-vermittelten Signalwegen (GPCRs).' },
  { id:'sq01_2', vl:'s01', q:'Wie viele cAMP-Moleküle aktivieren eine PKA?', opts:['1','2','4','8'], correct:2, exp:'PKA ist inaktiv als R₂C₂-Tetramer. 4 cAMP-Moleküle binden (2 pro R-Untereinheit) → Dissoziation in 2 aktive katalytische Untereinheiten.' },
  { id:'sq02_1', vl:'s02', q:'Welcher Signalweg ist zentral für die Immunantwort und bei hämatologischen Neoplasien fehlreguliert?', opts:['TGFβ/Smad','PI3K/PKB','JAK/STAT','Kernrezeptoren'], correct:2, exp:'JAK/STAT-Signalweg: zentral für Zytokin-/Interferon-Signaltransduktion. JAK2-Mutationen bei Polycythaemia vera; JAK-Inhibitoren (Ruxolitinib) therapeutisch eingesetzt.' },
  { id:'sq02_2', vl:'s02', q:'Wodurch wird PKG aktiviert?', opts:['cAMP','DAG','cGMP','IP3'], correct:2, exp:'PKG (Proteinkinase G) wird durch cGMP aktiviert. cGMP entsteht durch Guanylatcyclase (membrangebunden: ANP; löslich: NO). PKG bewirkt Relaxation glatter Gefäßmuskelzellen.' },
];

// =========================================================
// TABELLEN
// =========================================================
const P_TABLES = {
  p01_methoden: {
    title: 'Proteintrennmethoden im Überblick', vl: 'p01',
    headers: ['Methode', 'Trennprinzip', 'Bedingungen', 'Anwendung'],
    rows: [
      ['SDS-PAGE', 'Größe (kDa)', 'Denaturierend', 'Standard-Proteintrennung'],
      ['IEF', 'Isoelektrischer Punkt (pI)', 'Denaturierend (Harnstoff)', '1. Dimension der 2-DE'],
      ['2-DE', 'IEF + SDS-PAGE', 'Denaturierend', 'Proteomvergleiche'],
      ['BN-PAGE', 'Größe/Ladung', 'Nativ', 'Proteinkomplexe (Atmungskette)'],
      ['Gelfiltrierung', 'Größe', 'Nativ/Denaturierend', 'Entsalzung, Größenbestimmung'],
      ['Ionenaustausch', 'Ladung', 'Nativ', 'Aufreinigung geladener Proteine'],
      ['Affinitätschromatographie', 'Spezifische Bindung', 'Nativ', 'Antikörper, His-Tag-Proteine'],
    ],
    tags: {}
  },
  p02_ms_methoden: {
    title: 'Massenspektrometrie-Methoden', vl: 'p02',
    headers: ['Methode', 'Ionisierung', 'Analysator', 'Anwendung'],
    rows: [
      ['MALDI-TOF', 'Laser (Matrix-gestützt)', 'Flugzeit (Time of Flight)', 'PMF, gereinigte Proben'],
      ['ESI', 'Elektrospray', 'Quadrupol/Ionenfalle/TOF', 'Komplexe Gemische, LC-Kopplung'],
      ['LC-MS/MS', 'ESI (kontinuierlich)', 'Tandem-MS (2 × MS + Kollisionszelle)', 'Proteomanalyse (Goldstandard)'],
      ['MALDI Imaging', 'Laser (in situ)', 'TOF', 'Räumliche Proteinverteilung im Gewebe'],
    ],
    tags: {}
  },
  p03_strukturmethoden: {
    title: 'Strukturaufklärungsmethoden im Vergleich', vl: 'p03',
    headers: ['Methode', 'Prinzip', 'Auflösung / Grenze', 'Besonderheit'],
    rows: [
      ['Röntgenkristallographie', 'Röntgenbeugung an Kristallen', '~1 Å; Kristallisierung nötig', 'Momentaufnahme; kein dynamisches Bild'],
      ['NMR-Spektroskopie', 'Kernspinresonanz (¹H/¹³C/¹⁵N)', 'Bis ~30 kDa', 'Dynamik, Ligandenbindung in Lösung möglich'],
      ['Kryo-EM', 'TEM bei ≤ −150 °C', 'Zwischen NMR und Röntgenkristallographie', 'Auch für große Komplexe (Ribosomen, Viren)'],
      ['AFM', 'Mechanisches Rastern', 'Nanometerbereich', 'Oberflächen-Topographie, Proteindynamik'],
      ['Edman-Abbau', 'Chemische Sequenzierung', 'N-Terminus, schrittweise', 'Nur Primärstruktur (N-Terminus)'],
    ],
    tags: {}
  },
};

const V_TABLES = {
  v01_chaperone: {
    title: 'Chaperone und ihre Funktionen', vl: 'v01',
    headers: ['Chaperon', 'Klasse', 'Mechanismus', 'Lokalisation'],
    rows: [
      ['Hsp40', 'Kochaperon', 'Erkennt fehlgefaltete Proteine → übergibt an Hsp70', 'Zytosol, Kern, ER, Mitochondrien'],
      ['Hsp70', 'Klasse 70', 'ATP-Hydrolyse → umfasst Substrat; NEF → Freisetzung', 'Zytosol, ER (BiP), Mitochondrien (mtHsp70)'],
      ['Hsp60', 'Chaperonin', 'Käfig-Komplex; geschützte Faltungsumgebung', 'Mitochondrien (Matrix)'],
      ['Hsp90', 'Klasse 90', 'Klammerartige Umfassung; ATP-abhängig; für Signalproteine', 'Zytosol'],
      ['Hsp104', 'Disaggregase', 'ATP-abhängige Auflösung von Aggregaten', 'Hefe-Zytosol'],
      ['PDI', 'Faltungshelfer', 'Disulfidbrücken-Bildung und -Umordnung', 'ER-Lumen'],
    ],
    tags: {}
  },
  v04_ubiquitin: {
    title: 'Ubiquitin-Kettentypen und ihre Funktionen', vl: 'v04',
    headers: ['Kettentyp', 'Signal für', 'Relevante Prozesse'],
    rows: [
      ['K48-Ketten', 'Proteasomaler Abbau', 'Primärweg für Proteinabbau im UPS'],
      ['K63-Ketten', 'Autophagie, DNA-Reparatur', 'Aggrephagie über p62/LC3'],
      ['K11-Ketten', 'Zellzyklus-Regulation', 'APC/C-Komplex-Signale'],
      ['K27/K29-Ketten', 'Mitochondrien-Abbau (MAD)', 'Mitochondriale Qualitätskontrolle'],
      ['Monoubiquitin', 'Endozytose, Histon-Regulation', 'PCNA (DNA-Reparatur), EGFR'],
    ],
    tags: {}
  },
  v05_autophagie: {
    title: 'Autophagie-Arten im Vergleich', vl: 'v05',
    headers: ['Typ', 'Substrat-Erkennung', 'Membranquelle', 'Spezifisches Merkmal'],
    rows: [
      ['Makroautophagie', 'Via Adaptoren (p62/LC3)', 'Phagophore (Doppelmembranvesikel)', 'Kann Organellen abbauen (Mitophagie, Xenophagie)'],
      ['Mikroautophagie', 'Direkt (Einsstülpung)', 'Lysosomale Membran selbst', 'Kein separates Vesikel'],
      ['CMA', 'KFERQ-Motiv + Hsc70', 'LAMP-2A als Translokationskanal', 'Selektiv für entfaltete Monomere'],
    ],
    tags: {}
  },
  v08_alterstheorien: {
    title: 'Alterstheorien im Vergleich', vl: 'v08',
    headers: ['Theorie', 'Hauptmechanismus', 'Teufelskreis', 'Therapeutischer Ansatz'],
    rows: [
      ['Freie-Radikal-Theorie', 'ROS schädigen DNA, Membranen, Proteine', 'ROS → Schäden → mehr ROS', 'Antioxidantien (SOD, Katalase, Glutathion)'],
      ['Mitochondriale Theorie', 'mtDNA-Mutationen → defekte Atmungskette', 'Defekte AC → mehr ROS → mehr mtDNA-Schäden', 'Mitochondrien-Schutz, Mitophagie-Induktion'],
      ['Proteostase-Theorie', 'Akkumulation von Proteinschäden', 'Aggregate überwältigen PQC → mehr Schäden', 'Chaperone, UPS-Aktivatoren, Autophagie-Induktoren'],
    ],
    tags: {}
  },
};

const A_TABLES = {
  a02_haemoglobin: {
    title: 'Myoglobin vs. Hämoglobin', vl: 'a02',
    headers: ['Eigenschaft', 'Myoglobin', 'Hämoglobin (HbA)'],
    rows: [
      ['Struktur', 'Monomer (1 Kette)', 'Tetramer (α₂β₂)'],
      ['p50', '2,8 Torr', '26 Torr'],
      ['Bindungskurve', 'Hyperbolisch', 'Sigmoidal'],
      ['Kooperativität', 'Nein', 'Ja (homotrop-allosterisch)'],
      ['Hauptfunktion', 'O₂-Speicher im Muskel', 'O₂-Transport im Blut'],
      ['Allosterische Regulation', 'Keine', 'Bohr-Effekt, BPG, CO₂, HbF'],
    ],
    tags: {}
  },
  a03_einflussfaktoren: {
    title: 'Einflussfaktoren auf die O₂-Affinität von Hämoglobin', vl: 'a03',
    headers: ['Faktor', 'Effekt auf O₂-Affinität', 'Mechanismus', 'Physiologische Bedeutung'],
    rows: [
      ['pH ↓ (Bohr-Effekt)', 'Erniedrigt', 'H⁺ protoniert β₁ His146 → T-Form stabilisiert', 'O₂-Abgabe im metabolisch aktiven Gewebe'],
      ['CO₂ (direkt)', 'Erniedrigt', 'Carbamat-Bildung → T-Form', 'Zusatzeffekt zum Bohr-Effekt im Gewebe'],
      ['BPG ↑', 'Erniedrigt', 'Bindet T-Form-Pore (8 kationische Gruppen)', 'O₂-Abgabe im Gewebe; Höhenanpassung'],
      ['HbF (γ-Kette)', 'Erhöht (vs. HbA)', 'γ-Kette bindet BPG schlechter', 'O₂-Transfer Mutter → Fetus'],
      ['Höhe (BPG↑)', 'Erniedrigt (p50 ↑)', 'BPG steigt von 26 auf 31 Torr', 'Kurzfristige Höhenanpassung'],
    ],
    tags: {}
  },
  a04_haemoglobinopathien: {
    title: 'Hämoglobinopathien im Vergleich', vl: 'a04',
    headers: ['Erkrankung', 'Ursache', 'Molekularer Effekt', 'Klinik'],
    rows: [
      ['Sichelzellanämie', 'Glu6→Val6 (β-Kette)', 'Deoxy-HbS bildet Fasern → Sichelform', 'Vaso-okklusive Krisen, hämolytische Anämie'],
      ['α-Thalassämie', 'Zu wenig α-Ketten', 'β₄-Tetramer (HbH): hyperbolisch, kein O₂-Release', 'Anämie; mild bis transfusionspflichtig'],
      ['β-Thalassämie', 'Zu wenig β-Ketten', 'α-Ketten aggregieren in Erythrozyten', 'Anämie, Milz-/Leberfehlfunktion'],
      ['Methämoglobinämie', 'Fe²⁺ → Fe³⁺', 'Kein O₂-Transport mehr', 'Zyanose; Therapie: Methylenblau'],
    ],
    tags: {}
  },
  a06_kollagen_biosynthese: {
    title: 'Kollagen-Biosynthese (8 Schritte)', vl: 'a06',
    headers: ['Schritt', 'Ort', 'Vorgang'],
    rows: [
      ['1', 'Raues ER', 'Translation der α-Ketten (mit Propeptiden und Signalsequenz)'],
      ['2', 'ER-Lumen', 'Hydroxylierung von Pro → Hydroxyprolin (Vitamin-C-abhängig)'],
      ['3', 'ER-Lumen', 'Glykosylierung der Hydroxylreste'],
      ['4', 'ER-Lumen', 'Tripelhelix-Bildung → tripelhelikales Prokollagen'],
      ['5', 'Golgi', 'Vesikeltransport und weitere Modifikationen'],
      ['6', 'Extrazellulär', 'Exozytose des Prokollagens'],
      ['7', 'Extrazellulär', 'Propeptidabspaltung → Tropokollagen (spontane Aggregation)'],
      ['8', 'Extrazellulär', 'Quervernetzung → Kollagenfibrillen → Kollagenfasern (Fibrillogenese)'],
    ],
    tags: {}
  },
};

const S_TABLES = {
  s01_rezeptoren: {
    title: 'Rezeptorklassen der Signaltransduktion', vl: 's01',
    headers: ['Klasse', 'Lokalisation', 'Liganden', 'Signalmolekül', 'Beispiel'],
    rows: [
      ['GPCR', 'Plasmamembran (7 TM-Helices)', 'Hydrophil (Hormone, Neurotransmitter)', 'cAMP, IP3/DAG, Ca²⁺', 'Adrenalinrezeptor (β-AR)'],
      ['RTK', 'Plasmamembran', 'Wachstumsfaktoren (EGF, PDGF)', 'PIP3, Ras/MAPK', 'EGFR, PDGFR'],
      ['Liganden-Ionenkanal', 'Plasmamembran', 'Neurotransmitter', 'Na⁺/Ca²⁺-Einstrom', 'Nicotinischer ACh-Rezeptor'],
      ['Kernrezeptor', 'Zytoplasma/Kern', 'Lipophile Hormone, Vitamin D', 'Direkte Transkription', 'Glucocorticoid-Rezeptor'],
    ],
    tags: {}
  },
  s02_proteinkinasen: {
    title: 'Wichtige Proteinkinasen der Signaltransduktion', vl: 's02',
    headers: ['Kinase', 'Aktivator', 'Funktion', 'Klinische Relevanz'],
    rows: [
      ['PKA', 'cAMP (4 Moleküle)', 'Kohlenhydrat-/Lipidstoffwechsel; CREB-Aktivierung', 'Cholera (Gs-Dauerstimulation)'],
      ['PKB/AKT', 'PIP3', 'Wachstum, Proliferation, Zellzyklus', 'Häufig in Tumorzellen überexprimiert'],
      ['PKC', 'Ca²⁺ + DAG', 'Zellproliferation, Zytokinbildung', 'Fehlregulation in Tumorzellen; Phorbolester'],
      ['PKG', 'cGMP', 'Relaxation glatter Gefäßmuskelzellen', 'Sildenafil → cGMP↑ → PKG → Vasodilatation'],
      ['AMPK', 'AMP (Energiemangel)', 'Biosynthesen↓; Autophagie↑; Mitochondrienbiosynthese', 'Typ-2-Diabetes: Metformin → AMPK-Aktivierung'],
      ['JAK', 'Zytokin-Rezeptor', 'STAT-Phosphorylierung → Immunantwort', 'JAK2-Mutation bei Polycythaemia vera'],
    ],
    tags: {}
  },
};
const MUG1_OVERVIEW_DATA = {
  m01: {
    lernziele: [
      'Hauptansätze der Medizinischen Psychologie und Medizinischen Soziologie beschreiben und abgrenzen.',
      'Wesentliche Handlungsfelder der beiden Fächer benennen.',
      'Ebenen der Gesundheitsversorgung unterscheiden und zentrale Akteure zuordnen.',
      'Das biopsychosoziale Krankheitsmodell beschreiben.'
    ],
    topics: [
      'Medizinische Psychologie: Erleben und Verhalten im medizinischen Kontext.',
      'Medizinische Soziologie: soziale Strukturen und Einflüsse auf Gesundheit und Krankheit.',
      'Biopsychosoziales Modell als Verbindung körperlicher, psychischer und sozialer Faktoren.',
      'Gesundheitsversorgung auf Mikro-, Meso-, Makro- und Supraebene.'
    ]
  },

  m02: {
    lernziele: [
      'Normbegriffe von Gesundheit und Krankheit erklären.',
      'Kausale Risikofaktoren und Risikoindikatoren unterscheiden.',
      'Gesundheitsbezogene Lebensqualität beschreiben.',
      'Subjektive Krankheitstheorien und ihre Auswirkungen erläutern.'
    ],
    topics: [
      'Gesundheit und Krankheit aus medizinischer, subjektiver und gesellschaftlicher Perspektive.',
      'Befund und Befinden können voneinander abweichen.',
      'ICD, DSM und ICF klassifizieren Krankheit unterschiedlich.',
      'Stigmatisierung psychisch Kranker beeinflusst Versorgung und Teilhabe.'
    ]
  },

  m03: {
    lernziele: [
      'Gesundheitsverhalten sozialpsychologisch und soziologisch skizzieren.',
      'Rollen, Normen und Einstellungen als Einflussfaktoren erklären.',
      'Schutz- und Risikofaktoren benennen.',
      'Modelle gesundheitsrelevanten Verhaltens anwenden.'
    ],
    topics: [
      'Gesundheitsverhalten wird durch Rollen, Normen, Einstellungen und Interaktion geprägt.',
      'Soziale Unterstützung ist ein zentraler Schutzfaktor.',
      'Resilienz, Selbstwirksamkeit und Optimismus fördern gesundheitsrelevantes Verhalten.',
      'Salutogenese und sozialpsychologische Modelle erklären Gesundheitsverhalten.'
    ]
  }
};
