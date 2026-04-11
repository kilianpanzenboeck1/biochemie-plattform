// =========================================================
// MNEMONICS & LERNZIELE DATA
// One mnemonic + 3-5 Lernziele per VL
// =========================================================

const MNEMONICS = {
  // === TEIL III: PROTEINE & ENZYME ===
  vl01: {
    mnemonic: '🧠 "Alle Proteine Sind Tolle Funktions-Maschinen" → Struktur (Primär→Quartär), Funktion (Transport, Enzym, Signal, Strukturell, Motor)',
    tip: 'Merke: Proteine sind die Arbeitstiere der Zelle — jede Funktion hat ein eigenes Protein!'
  },
  vl02: {
    mnemonic: '🔬 "Gel Läuft Immer Sehr Präzise" → Gelelektrophorese, Lyse, Isoelektrischer Punkt, SDS-PAGE, Proteinreinigung',
    tip: 'SDS-PAGE: "Strom Drückt Durch Gel" — kleine Proteine zuerst!'
  },
  vl03: {
    mnemonic: '🔗 "Prima! Sekundäre Helices Brauchen Bindungen" → Primärstruktur (AS-Sequenz), Sekundär (α-Helix, β-Faltblatt), H-Brücken',
    tip: 'α-Helix: 3,6 AS pro Windung — merke: "36er Helix"'
  },
  vl04: {
    mnemonic: '🌀 "Tertiär Quillt Über Disulfid-Brücken" → Tertiärstruktur (Faltung), Quartär (Untereinheiten), Disulfidbrücken',
    tip: 'Quartärstruktur = mehrere Polypeptidketten → wie Hämoglobin (α₂β₂)'
  },
  vl05: {
    mnemonic: '🌳 "Evolution Baut Datenbanken" → Evolutionäre Verwandtschaft, Bioinformatik, BLAST/UniProt-Datenbanken',
    tip: 'Homologe Proteine: gleiche Funktion, verschiedene Organismen → konservierte Kernsequenzen'
  },
  vl06: {
    mnemonic: '⚡ "Enzyme Katalysieren Super Schnell" → Enzymklassen (EC-Nummern), katalytischer Mechanismus, Substratbindung',
    tip: '6 Enzymklassen: "Oxidiert Transferiert Hydrolysiert — Lysed, Isomerisiert, Ligiert" (OT-H-LIL)'
  },
  vl07: {
    mnemonic: '🔑 "Säuren-Basen Koordinieren Metall-Kofaktoren" → Säure-Base-Katalyse, kovalente Katalyse, Metallionen als Cofaktoren',
    tip: 'Chymotrypsin: Ser-His-Asp → "Sehe-Hier-Dass" die katalytische Triade'
  },
  vl08: {
    mnemonic: '📊 "Km Und Vmax Sind Michaelis-Konstanten" → Michaelis-Menten-Kinetik, Km, Vmax, Lineweaver-Burk',
    tip: 'Km = Substratkonzentration bei ½ Vmax — niedriger Km = hohe Affinität!'
  },
  vl09: {
    mnemonic: '🎛️ "Allostere Inhibitoren Regulieren Feedback" → Allosterie, kompetitive/nichtkompetitive Hemmung, Feedback-Inhibition',
    tip: 'Allosterie: "Allo = anderer Ort" — Effektorbindung ≠ aktives Zentrum'
  },

  // === TEIL I+II: BAUSTEINE ===
  b01: {
    mnemonic: '⚛️ "Protonen Elektronen Neutronen Formen Atome" → Atomaufbau, Orbitale, Elektronenkonfiguration',
    tip: 'Valenzelektronen bestimmen Bindungsverhalten — C hat 4, N hat 3, O hat 2!'
  },
  b02: {
    mnemonic: '🔗 "Kohlen-Wasserstoff Funktioniert Ordentlich" → Kohlenwasserstoffe, funktionelle Gruppen (OH, COOH, NH₂, SH)',
    tip: 'Merke COOH: "Carnivores Essen Organische Omas Hungrig" = Carboxylgruppe'
  },
  b03: {
    mnemonic: '🪞 "Isomere Sehen Gleich Aus, Sind Aber Verschieden" → Konstitutions-, Stereoisomerie, R/S-Nomenklatur, Enantiomere',
    tip: 'L-Aminosäuren: "L wie Links" — biologisch aktiv! D-Form selten in Natur.'
  },
  b04: {
    mnemonic: '🤝 "Nicht-Kovalente WW Halten Strukturen Zusammen" → H-Brücken, van-der-Waals, ionische WW, hydrophober Effekt',
    tip: 'Stärke: Kovalent > Ionisch > H-Brücke > van-der-Waals — "Kann Ich Hören Viele"'
  },
  b05: {
    mnemonic: '💧 "Wasser Ist Polar, Hydrophob Flieht" → Dipol, H-Brücken, hydrophober Effekt, Lösungsmittel',
    tip: '"Similia similibus solvuntur" — Gleiches löst Gleiches: Polar löst Polar!'
  },
  b06: {
    mnemonic: '🧪 "pH Kontrolliert Biochemische Reaktionen" → pH-Wert, Henderson-Hasselbalch, Puffersysteme, Titrationskurven',
    tip: 'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) — "Puffer arbeiten bei pH ≈ pKa"'
  },
  b07: {
    mnemonic: '🌊 "Diffusion Osmose: Konzentration Regiert" → Fick\'sches Gesetz, Osmose, osmotischer Druck, Tonizität',
    tip: 'Osmose: Wasser fließt immer vom niedrigen zum hohen osmotischen Druck!'
  },
  b08: {
    mnemonic: '🏙️ "Zellen: Prokaryoten Eukaryoten Unterscheiden Sich" → Zellorganellen, Membran, Zellkern, Cytoskelett',
    tip: 'Pro vs. Eu: "Pro = primitiv, kein Kern" — Eu hat echten Kern (eu = echt)'
  },
  b09: {
    mnemonic: '🧬 "Nukleotide Bilden DNA RNA" → Purine (A,G), Pyrimidine (C,T,U), Phosphodiesterbindung, komplementäre Basen',
    tip: 'Purine sind größer (2 Ringe): "Pur-In kommt Groß an" — A & G sind Purine'
  },
  b10: {
    mnemonic: '🍬 "Kohlenhydrate Geben Energie" → Monosaccharide, Disaccharide, Polysaccharide, glykosidische Bindung',
    tip: 'Glucose, Galactose, Fructose — "G, G, F": alle C₆H₁₂O₆, aber verschiedene OH-Positionen'
  },
  b11: {
    mnemonic: '🔥 "Thermodynamik: ΔG Bestimmt Reaktionsrichtung" → freie Enthalpie, Enthalpie, Entropie, Gleichgewichtskonstante',
    tip: 'ΔG < 0 → exergonisch (spontan) → "Minus Geht Gerne" = Energie wird frei'
  },
  b12: {
    mnemonic: '🛢️ "Fettsäuren Lagern Energie In Lipiden" → gesättigt/ungesättigt, Triglyceride, Phospholipide, Doppelmembran',
    tip: 'Gesättigte FS: gestreckt, stapelbar → fest (Butter). Ungesättigt: Knick → flüssig (Öl)!'
  },
  b13: {
    mnemonic: '🧩 "Aminosäuren Bauen Proteine Auf" → 20 proteinogene AS, Struktur (NH₂-CHR-COOH), Peptidbindung, pKa-Werte',
    tip: 'Essentielle AS: "Valin Leucin Isoleucin Threonin Methionin Lysin Phenylalanin Tryptophan Histidin" → "VLIT-M-KFWH"'
  },

  // === TEIL IV: PROTEINANALYTIK ===
  p01: {
    mnemonic: '🏭 "Proteine Herstellen: Auftrennen, Reinigen" → rekombinante Expression, Chromatographie (IEC, SEC, AC), SDS-PAGE',
    tip: 'IMAC = Immobilisierte Metallaffinitätschromatographie → His-Tag bindet Ni²⁺-Säule'
  },
  p02: {
    mnemonic: '⚖️ "Massen-Spektrometer Identifiziert Proteine" → Ionisierung (ESI, MALDI), Massenanalysator, Peptid-Fingerprint',
    tip: 'MALDI-TOF: "Matrix Assistiert, Laser Desorption, Ionisierung — Time of Flight"'
  },
  p03: {
    mnemonic: '🔭 "Röntgen NMR Cryo-EM Enthüllen Strukturen" → Röntgenkristallographie, NMR-Spektroskopie, Cryo-Elektronenmikroskopie',
    tip: 'Auflösung: Cryo-EM → NMR (nur kleine Proteine) → Röntgen (braucht Kristall)'
  },

  // === TEIL V: PROTEOSTASE ===
  v01: {
    mnemonic: '🤸 "Chaperone Helfen Proteinen Falten" → Faltung, Chaperone (Hsp70, Hsp90, GroEL), Faltungstrichter',
    tip: 'Chaperone: "Begleiter" — verhindern Aggregation, aber falten nicht selbst!'
  },
  v02: {
    mnemonic: '🏗️ "Ribosomen Bauen Proteine Kotranslational" → Translation, Ribosom (40S/60S), tRNA, Peptidkette, SRP',
    tip: 'SRP erkennt Signalpeptid → dirigiert Ribosom ans ER → "Signal Recognition Particle"'
  },
  v03: {
    mnemonic: '✂️ "Prozessierung Modifiziert Proteine Post-Translational" → Glykosylierung, Phosphorylierung, proteolytische Spaltung, GPI-Anker',
    tip: 'N-Glykosylierung am Asn: "N wie Nase" — an N-X-S/T Sequon'
  },
  v04: {
    mnemonic: '🏷️ "Ubiquitin Proteasom System Baut Ab" → Ubiquitinierung (E1-E2-E3), Proteasom (26S), Polyubiquitinkette',
    tip: 'Lys48-Ubiquitinkette → Abbau im Proteasom. Lys63-Kette → Signaling!'
  },
  v05: {
    mnemonic: '🚗 "Autophagie Frisst Zellmüll" → Makroautophagie, Autophagosom, Lysosom, mTOR-Hemmung, selektive Autophagie',
    tip: 'mTOR aktiv → Autophagie AUS. mTOR inaktiv (Hunger) → Autophagie AN!'
  },
  v06: {
    mnemonic: '⚡ "Mitochondrien: Proteine Importieren, Energie Produzieren" → TOM/TIM-Komplex, Mitochondrien-Targeting-Sequenz, OXPHOS',
    tip: 'Präsequenz (N-terminal) → nach Import abgespalten → "Eintrittskarte wird zerrissen"'
  },
  v07: {
    mnemonic: '🧱 "Sequestrierung Verhindert Aggregation" → Proteinaggregat, Aggresomen, Inklusionskörperchen, molekulare Siebe',
    tip: 'Aggresomen = "Müllhalde" der Zelle — Proteine werden hierher dirigiert wenn UPS überlastet'
  },
  v08: {
    mnemonic: '⏳ "Proteostase Altert Mit Der Zeit" → UPS-Abbau, Autophagie, Redox-Stress, Carbonylierung, Lipofuszin',
    tip: 'Carbonylierung = irreversible Oxidation von Proteinen → Marker für Alterung'
  },
  v09: {
    mnemonic: '🧠 "Neurodegeneration: Fehlgefaltete Proteine Häufen Sich" → Amyloid, Prionen, α-Synuclein, Tau, Alzheimer, Parkinson',
    tip: 'Amyloid-β (Alzheimer) und α-Synuclein (Parkinson) bilden beide β-Faltblatt-reiche Fibrillen!'
  },

  // === TEIL VI: AUSGEWÄHLTE PROTEINE ===
  a01: {
    mnemonic: '💪 "Myoglobin: Muskel Speichert Sauerstoff" → Häm-Gruppe, Fe²⁺, hyperbolische O₂-Bindungskurve, Mb vs. Hb',
    tip: 'Myoglobin: 1 Untereinheit, hyperbolische Kurve → kein Kooperativität!'
  },
  a02: {
    mnemonic: '🔴 "Hämoglobin Transportiert O₂ Kooperativ" → α₂β₂-Tetramer, T/R-Zustand, Kooperativität, Hill-Koeffizient',
    tip: 'Hämoglobin: sigmoide Kurve (Hill n≈2,8) → Kooperativität durch Allosterie'
  },
  a03: {
    mnemonic: '🌡️ "pH, CO₂, BPG Beeinflussen O₂-Affinität" → Bohr-Effekt, CO₂/H⁺, 2,3-BPG, Temperatur',
    tip: 'Bohr-Effekt: niedriger pH → rechtsverschiebung → O₂-Abgabe ins Gewebe!'
  },
  a04: {
    mnemonic: '🧬 "Hämoglobinopathien: Sichelzell HbS Thalassämie" → Sichelzellanämie (Glu6Val), HbA/HbF/HbS, Thalassämien',
    tip: 'HbS: Glutamat → Valin an Position 6 der β-Kette → hydrophob → Aggregation bei Deoxygenierung'
  },
  a05: {
    mnemonic: '🏗️ "EZM: Kollagen Elastin Proteoglykane Fibronektin" → extrazelluläre Matrix, Strukturproteine, Zell-Matrix-Interaktion',
    tip: 'EZM-Rezeptoren: Integrine → verbinden Zytoskelett mit EZM!'
  },
  a06: {
    mnemonic: '🌀 "Kollagen Dreifachhelix, Elastin Dehnt Sich" → Kollagentypen, Hydroxyprolin, Tropocollagen, Elastin, Desmosine',
    tip: 'Kollagen: Gly-X-Y Tripeptid → "Glycin Xtra Yield" — Gly muss innen sein (eng!)'
  },
  a07: {
    mnemonic: '🦴 "GAGs Und Knochen: Polysaccharide Mineralisieren" → Glykosaminoglykane, Proteoglykane, Hydroxylapatit, Osteoporose',
    tip: 'GAGs: "Riesige Polyanionen" → binden Wasser und Kationen → Gelmatrix in EZM'
  },

  // === TEIL VII: SIGNALTRANSDUKTION ===
  s01: {
    mnemonic: '📡 "Signale Werden Empfangen Verstärkt Weitergeleitet" → Ligand-Rezeptor, GPCR, RTK, Second Messenger, Signal-Kaskaden',
    tip: 'GPCR-Zyklus: Ligand → G-Protein → Effektor → Second Messenger → Antwort'
  },
  s02: {
    mnemonic: '🔗 "cAMP PKA MAPK PI3K Ras Signalisieren" → cAMP/PKA, MAPK-Kaskade, Ras/Raf/MEK/ERK, PI3K/Akt, Ca²⁺/CaM',
    tip: 'Ras ist ein GTPase-Switch: "Ras-GTP = AN, Ras-GDP = AUS" → Hydrolyse schaltet ab'
  }
};

// =========================================================
// LERNZIELE DATA
// 3-5 Lernziele per VL
// =========================================================

const LERNZIELE = {
  // === TEIL III: PROTEINE & ENZYME ===
  vl01: [
    'Die vier Strukturebenen von Proteinen (Primär- bis Quartärstruktur) benennen und unterscheiden',
    'Die wichtigsten Proteinfunktionen (Transport, Enzym, Strukturprotein, Signal, Motor) mit Beispielen erläutern',
    'Den Unterschied zwischen globulären und fibrillären Proteinen erklären',
    'Die 20 proteinogenen Aminosäuren in Gruppen (polar/unpolar, geladen) einteilen'
  ],
  vl02: [
    'Das Prinzip der SDS-PAGE und nativen PAGE erklären und anwenden',
    'Chromatographiemethoden (Größenausschluss, Ionenaustausch, Affinitätschromatographie) unterscheiden',
    'Den isoelektrischen Punkt (pI) berechnen und seine Bedeutung für die Trennung erläutern',
    'Reinigungsschritte und Reinigungsprotokoll für ein rekombinantes Protein beschreiben'
  ],
  vl03: [
    'Die Primärstruktur als Sequenz von Aminosäuren und ihre Bedeutung für höhere Strukturebenen erklären',
    'α-Helix und β-Faltblatt (Struktur, stabilisierende Kräfte, Vorkommen) beschreiben',
    'Ramachandran-Diagramm interpretieren und erlaubte Diederwinkel angeben',
    'Strukturmotive wie Helix-Turn-Helix oder β-Hairpin erkennen und beschreiben'
  ],
  vl04: [
    'Tertiärstruktur als 3D-Faltung durch nicht-kovalente Wechselwirkungen und Disulfidbrücken erklären',
    'Quartärstruktur mit Beispielen (Hämoglobin, Kollagen) beschreiben',
    'Den Einfluss von Disulfidbrücken auf Proteinstabilität erläutern',
    'Domänen als eigenständige Faltungseinheiten mit Funktion beschreiben'
  ],
  vl05: [
    'Das Konzept der Proteinevolution und Homologie erklären',
    'Bioinformatische Werkzeuge (BLAST, UniProt, PDB) für die Proteinanalyse nutzen',
    'Sequenzalignments (paarweise vs. multipel) interpretieren',
    'Konservierte Sequenzbereiche und ihre funktionelle Bedeutung erkennen'
  ],
  vl06: [
    'Die sechs Enzymklassen (EC-Nummern) mit Beispielen benennen',
    'Das Michaelis-Menten-Modell erläutern und Km sowie Vmax definieren',
    'Enzymkatalyse mechanistisch erklären (Übergangszustand-Stabilisierung, aktives Zentrum)',
    'Cofaktoren und Coenzyme (NAD⁺, FAD, Coenzym A) unterscheiden'
  ],
  vl07: [
    'Säure-Base-Katalyse, kovalente Katalyse und Metallionenkatalyse mit Beispielen erklären',
    'Den Mechanismus von Chymotrypsin (katalytische Triade Ser-His-Asp) beschreiben',
    'Die Bedeutung von Übergangszustandsanaloga als Enzyminhibitoren erläutern',
    'Unterschied zwischen Cosubstrat und prosthetischer Gruppe erklären'
  ],
  vl08: [
    'Michaelis-Menten-Kinetik mathematisch beschreiben und Lineweaver-Burk-Plot anwenden',
    'Km und Vmax experimentell bestimmen',
    'Allosterische Enzyme von Michaelis-Menten-Enzymen unterscheiden',
    'Hill-Gleichung und Hill-Koeffizient interpretieren'
  ],
  vl09: [
    'Kompetitive, unkompetitive und nichtkompetitive Inhibition kinetisch unterscheiden',
    'Allosterische Regulation und Feedback-Inhibition erklären',
    'Kovalente Modifikation (Phosphorylierung) als Regulationsmechanismus beschreiben',
    'Isoenzyme und ihre physiologische Bedeutung erläutern'
  ],

  // === TEIL I+II: BAUSTEINE ===
  b01: [
    'Atomaufbau (Protonen, Neutronen, Elektronen) und Elektronenkonfiguration erklären',
    'Orbitale (s, p, d) und Hybridisierung (sp³, sp², sp) beschreiben',
    'Kovalente, ionische und metallische Bindungen unterscheiden',
    'Elektronegatvität und Polarität von Bindungen erläutern'
  ],
  b02: [
    'Die wichtigsten funktionellen Gruppen in Biomolekülen (OH, COOH, NH₂, SH, Phosphat) benennen',
    'Alkane, Alkene, Alkine und aromatische Verbindungen unterscheiden',
    'IUPAC-Nomenklatur für einfache organische Verbindungen anwenden',
    'Reaktivität funktioneller Gruppen in biologischen Reaktionen einschätzen'
  ],
  b03: [
    'Konstitutions-, Konfigurations- und Konformationsisomerie unterscheiden',
    'R/S-Nomenklatur und D/L-System für Aminosäuren anwenden',
    'Biologische Relevanz von Stereoisomerie (L-AS, D-Zucker) erklären',
    'Enantiomere und Diastereomere voneinander unterscheiden'
  ],
  b04: [
    'Nicht-kovalente Wechselwirkungen (H-Brücken, van-der-Waals, ionisch, hydrophob) erklären',
    'Die relative Stärke nicht-kovalenter Kräfte einordnen',
    'Hydrophoben Effekt als Entropie-getriebene Kraft erläutern',
    'Bedeutung dieser Wechselwirkungen für Proteinfaltung und DNA-Doppelhelix'
  ],
  b05: [
    'Besondere Eigenschaften des Wassers (Dipol, H-Brücken, hohe Wärmekapazität) erklären',
    'Hydrophile vs. hydrophobe Moleküle unterscheiden',
    'Amphiphile Moleküle (Phospholipide, Seifen) und Mizellbildung beschreiben',
    'Hydratationshüllen und ihre Bedeutung für Ionenlösung erläutern'
  ],
  b06: [
    'pH-Wert und Protonenkonzentration berechnen',
    'Henderson-Hasselbalch-Gleichung anwenden',
    'Puffersysteme (Phosphat-, Bicarbonat-, Histidinpuffer) beschreiben',
    'Titrationskurven von schwachen Säuren interpretieren'
  ],
  b07: [
    'Ficksches Diffusionsgesetz erklären und anwenden',
    'Osmose und osmotischen Druck (van-t-Hoff-Gleichung) erläutern',
    'Isotone, hyper- und hypotonische Lösungen unterscheiden',
    'Bedeutung von Osmose für Zellvolumenregulation beschreiben'
  ],
  b08: [
    'Prokaryotische und eukaryotische Zellen strukturell vergleichen',
    'Zellorganellen (Mitochondrien, ER, Golgi, Lysosom) und ihre Funktionen beschreiben',
    'Endomembransystem und Vesikeltransport erläutern',
    'Cytoskelett (Aktin, Mikrotubuli, Intermediärfilamente) beschreiben'
  ],
  b09: [
    'Aufbau von Nukleotiden (Base, Zucker, Phosphat) erklären',
    'Purine (A, G) und Pyrimidine (C, T, U) unterscheiden',
    'Komplementäre Basenpaarung (Watson-Crick) und DNA-Doppelhelix beschreiben',
    'Unterschiede zwischen DNA und RNA in Struktur und Funktion erläutern'
  ],
  b10: [
    'Mono-, Di- und Polysaccharide mit Beispielen unterscheiden',
    'Glykosidische Bindungen (α vs. β) und ihre biologischen Konsequenzen erklären',
    'Stärke, Glykogen und Cellulose strukturell und funktionell vergleichen',
    'Glykoproteine und Glykolipide als Zelloberflächenmoleküle beschreiben'
  ],
  b11: [
    'Erste und zweite Hauptsatz der Thermodynamik auf biologische Systeme anwenden',
    'Freie Enthalpie (ΔG) und ihre Bedeutung für Reaktionsspontanität erklären',
    'ATP als universeller Energieträger und Kopplung exergonischer/endergonischer Reaktionen',
    'Gleichgewichtskonstante und ΔG° miteinander verknüpfen'
  ],
  b12: [
    'Gesättigte und ungesättigte Fettsäuren strukturell unterscheiden',
    'Triglyceride, Phospholipide und Sphingolipide im Vergleich beschreiben',
    'Phospholipid-Doppelschicht als Grundlage biologischer Membranen erklären',
    'Steroide (Cholesterol) und ihre biologischen Funktionen benennen'
  ],
  b13: [
    'Allgemeine Struktur einer Aminosäure (NH₂-CHR-COOH) beschreiben',
    'Aminosäuren nach Seitenkettenpolariät und Ladung klassifizieren',
    'Peptidbindung (Bildung, Resonanzstruktur, Planarität) erklären',
    'pKa-Werte von AS-Seitenketten und ihre Bedeutung für Enzymkatalyse beschreiben'
  ],

  // === TEIL IV: PROTEINANALYTIK ===
  p01: [
    'Methoden der rekombinanten Proteinexpression (E. coli, Hefe, Säugerzellen) vergleichen',
    'Prinzipien von Affinitäts-, Größenausschluss- und Ionenaustauschchromatographie erklären',
    'SDS-PAGE und Westernblot als analytische Methoden beschreiben',
    'Reinigungsprotokoll mit spezifischer Aktivität und Reinigungsfaktor berechnen'
  ],
  p02: [
    'Prinzip der Massenspektrometrie (Ionisierung, Massenanalysator, Detektion) erklären',
    'MALDI-TOF und ESI-MS unterscheiden und Anwendungsgebiete nennen',
    'Peptid-Massenfingerprint und Datenbanksuche für Proteinidentifikation beschreiben',
    'Tandem-MS (MS/MS) für Sequenzierung von Peptiden erläutern'
  ],
  p03: [
    'Röntgenkristallographie als Methode zur Proteinstrukturaufklärung erläutern',
    'NMR-Spektroskopie und Cryo-EM als komplementäre Strukturmethoden beschreiben',
    'Auflösung und Anwendungsgrenzen der drei Hauptmethoden vergleichen',
    'Bedeutung öffentlicher Strukturdatenbanken (PDB) für die Biochemie erklären'
  ],

  // === TEIL V: PROTEOSTASE ===
  v01: [
    'Proteinfaltung als thermodynamisch getriebenen Prozess (Anfinsen-Dogma) erklären',
    'Chaperone (Hsp70, Hsp90, GroEL/GroES) und ihre Mechanismen beschreiben',
    'Faltungstrichter-Modell und Energielandschaft der Proteinfaltung darstellen',
    'Fehlfaltung und Aggregation als molekulare Grundlage von Krankheiten erläutern'
  ],
  v02: [
    'Kotranslationale Faltung und das Signal Recognition Particle (SRP) beschreiben',
    'Ribosomen-assoziierte Chaperone (RAC, NAC) und ihre Funktion erklären',
    'ER-Import von Proteinen (Signalpeptid, Translokon) und N-Glykosylierung im ER beschreiben',
    'Qualitätskontrolle im ER (Calnexin/Calreticulin-Zyklus) erläutern'
  ],
  v03: [
    'Posttranslationale Modifikationen (Phosphorylierung, Glykosylierung, Ubiquitinierung) mit Funktion benennen',
    'Proteolytische Spaltung als irreversible Aktivierung (Proenzyme → Enzyme) beschreiben',
    'GPI-Anker und ihre Bedeutung für Membranproteine erklären',
    'Golgi-Apparat und sekretorischen Weg für Glykoproteinprozessierung beschreiben'
  ],
  v04: [
    'Das Ubiquitin-Proteasom-System (UPS) mit allen Komponenten beschreiben',
    'E1-, E2-, E3-Enzyme in der Ubiquitinierungskaskade unterscheiden',
    'Verschiedene Ubiquitinkettenlängen und -typen (Lys48, Lys63) und ihre Signalwirkung erläutern',
    '26S-Proteasom (19S + 20S) strukturell und funktionell beschreiben'
  ],
  v05: [
    'Makroautophagie, Mikroautophagie und chaperon-vermittelte Autophagie unterscheiden',
    'Autophagosom-Bildung und Fusion mit dem Lysosom beschreiben',
    'mTOR als Hauptregulator der Autophagie und seine Regulation erläutern',
    'Selektive Autophagie (Mitophagie, Pexophagie) mit Beispielen beschreiben'
  ],
  v06: [
    'TOM/TIM-Komplex und mitochondrialen Importweg für Kernproteine beschreiben',
    'Mitochondriale Targeting-Sequenz (MTS) und ihre Prozessierung erklären',
    'Bedeutung des mitochondrialen Membranpotentials für den Proteinimport erläutern',
    'Mitochondriale Qualitätskontrolle (Mitophagie, AAA-Proteasen) beschreiben'
  ],
  v07: [
    'Mechanismen der Proteinaggregation und amyloide Fibrillenbildung erklären',
    'Sequestrierung in Aggresomen als zelluläre Schutzreaktion beschreiben',
    'Einschlusskörperchen (Lewy-Körper, Tau-Aggregate) in neurodegenerativen Erkrankungen benennen',
    'Amyloid-Struktur (kreuzβ-Motiv) als gemeinsames Merkmal vieler Aggregate beschreiben'
  ],
  v08: [
    'Altersbedingten Rückgang der Proteostase (UPS, Autophagie, Chaperone) beschreiben',
    'Carbonylierung, Lipidperoxidation und Nitrosylierung als Altersmarker erläutern',
    'Lipofuszin als nicht abbaubares Aggregat im Alter beschreiben',
    'Zusammenhang zwischen Proteostase-Kollaps und Neurodegeneration erläutern'
  ],
  v09: [
    'Amyloid-β-Peptid und Tau-Protein bei der Alzheimer-Krankheit beschreiben',
    'α-Synuclein und Lewy-Körper bei der Parkinson-Krankheit erläutern',
    'Prionen als infektiöse fehlgefaltete Proteine (PrPᶜ → PrPˢᶜ) beschreiben',
    'Gemeinsame molekulare Mechanismen neurodegenerativer Erkrankungen nennen'
  ],

  // === TEIL VI: AUSGEWÄHLTE PROTEINE ===
  a01: [
    'Struktur und Funktion des Myoglobins (Häm-Gruppe, Fe²⁺, Globin) beschreiben',
    'Hyperbolische O₂-Bindungskurve von Myoglobin erklären',
    'Funktion von Myoglobin als O₂-Speicher im Muskel erläutern',
    'Unterschied zwischen Myoglobin (1 Untereinheit) und Hämoglobin (4 Untereinheiten) erklären'
  ],
  a02: [
    'Quartärstruktur des Hämoglobins (α₂β₂-Tetramer) beschreiben',
    'T-Zustand (deoxy, gespannt) und R-Zustand (oxy, entspannt) unterscheiden',
    'Kooperativität der O₂-Bindung und sigmoide Bindungskurve erklären',
    'Hill-Koeffizient als Maß für Kooperativität interpretieren'
  ],
  a03: [
    'Bohr-Effekt (pH und CO₂ senken O₂-Affinität) mechanistisch erläutern',
    '2,3-Bisphosphoglycerat (BPG) als allosterischer Effektor von Hämoglobin beschreiben',
    'Temperaturabhängigkeit der O₂-Affinität und klinische Bedeutung erklären',
    'Anpassung des fetalen Hämoglobins (HbF) an intrauterine Bedingungen beschreiben'
  ],
  a04: [
    'Molekulare Ursache der Sichelzellanämie (Glu6Val in β-Kette) erklären',
    'Unterschied zwischen HbA, HbS, HbC und HbF beschreiben',
    'α- und β-Thalassämien als quantitative Hämoglobindefekte erläutern',
    'Malariaschutz durch Hämoglobinopathien (Heterozygotenvorteil) beschreiben'
  ],
  a05: [
    'Hauptkomponenten der extrazellulären Matrix (Kollagen, Elastin, GAGs, Fibronektin) benennen',
    'Integrine als Rezeptoren für EZM-Proteine und Verbindung zum Zytoskelett erläutern',
    'Funktionen der EZM (Strukturgebung, Zellmigration, Signalgebung) beschreiben',
    'Matrixmetalloproteasen (MMPs) und Gewebeumbau erklären'
  ],
  a06: [
    'Tripelhelix-Struktur des Kollagens und Bedeutung von Glycin und Hydroxyprolin erklären',
    'Kollagenbiosynthese (Prokollagen → Tropokollagen → Kollagenfibrillen) beschreiben',
    'Elastin-Struktur (Desmosine, random-coil → Dehnung/Entspannung) erläutern',
    'Klinische Relevanz von Kollagenmangel (Skorbut, Osteogenesis imperfecta) beschreiben'
  ],
  a07: [
    'Glykosaminoglykane (Hyaluronsäure, Chondroitinsulfat, Heparansulfat) unterscheiden',
    'Proteoglykane als GAG-Protein-Konjugate beschreiben',
    'Knochenmineralisierung (Hydroxylapatit-Einlagerung in Kollagen-Matrix) erläutern',
    'Osteoporose als Ungleichgewicht zwischen Knochenauf- und -abbau beschreiben'
  ],

  // === TEIL VII: SIGNALTRANSDUKTION ===
  s01: [
    'Prinzipien der Signaltransduktion (Ligand, Rezeptor, Second Messenger, Antwort) erklären',
    'GPCRs, RTKs und nukleare Rezeptoren als Rezeptorklassen unterscheiden',
    'G-Protein-Zyklus (GDP/GTP-Austausch, intrinsische GTPase) beschreiben',
    'Signalamplifikation und -integration in Kaskaden erläutern'
  ],
  s02: [
    'cAMP/PKA-Signalweg vollständig beschreiben (GPCR → Gs → AC → cAMP → PKA → Substrat)',
    'MAPK-Kaskade (Ras → Raf → MEK → ERK) und ihre Funktion in Zellproliferation erklären',
    'PI3K/Akt-Signalweg und seine Rolle in Überleben und Wachstum beschreiben',
    'Calcium/Calmodulin-Signalweg und Rolle von IP₃ und DAG als Second Messenger erläutern'
  ]
};
