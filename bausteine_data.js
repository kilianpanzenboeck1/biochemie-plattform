// =========================================================
// BAUSTEINE DES LEBENS — B01–B13 DATA
// =========================================================

// VL Meta for Bausteine
const B_META = {
  b01: { label: 'B01', title: 'Atome und Moleküle', color: 'tag-blue', emoji: '⚛️' },
  b02: { label: 'B02', title: 'Kohlenwasserstoffe & funktionelle Gruppen', color: 'tag-teal', emoji: '🔗' },
  b03: { label: 'B03', title: 'Vielfalt durch Isomerie', color: 'tag-green', emoji: '🔄' },
  b04: { label: 'B04', title: 'Nicht-kovalente Wechselwirkungen', color: 'tag-purple', emoji: '🧲' },
  b05: { label: 'B05', title: 'Ohne Wasser kein Leben', color: 'tag-teal', emoji: '💧' },
  b06: { label: 'B06', title: 'pH-Wert, Säuren, Basen & Puffer', color: 'tag-orange', emoji: '⚗️' },
  b07: { label: 'B07', title: 'Diffusion und Osmose', color: 'tag-yellow', emoji: '🌊' },
  b08: { label: 'B08', title: 'Zellen — Organisation des Lebens', color: 'tag-green', emoji: '🔬' },
  b09: { label: 'B09', title: 'Nukleotide & Nukleinsäuren', color: 'tag-blue', emoji: '🧬' },
  b10: { label: 'B10', title: 'Kohlenhydrate', color: 'tag-orange', emoji: '🍬' },
  b11: { label: 'B11', title: 'Thermodynamik biochemischer Systeme', color: 'tag-red', emoji: '🔥' },
  b12: { label: 'B12', title: 'Fettsäuren und Lipide', color: 'tag-yellow', emoji: '🫙' },
  b13: { label: 'B13', title: 'Einführung Aminosäuren & Proteine', color: 'tag-purple', emoji: '🧪' },
};

// ---- OVERVIEW DATA BAUSTEINE ----
const B_OVERVIEW = {
  b01: {
    topics: [
      { icon: '⚛️', color: 'var(--accent-bg)', title: 'Atome & Elemente', points: [
        'Element definiert durch Ordnungszahl (Protonenzahl)',
        'Isotope: gleiche Protonenzahl, verschiedene Neutronenzahl',
        'Elemente des Lebens: O(65%), C(18.5%), H(9.5%), N(3.3%) = 96.3%',
        'Radioisotope: ³H, ³⁵S, ³²P, ¹³C/¹⁵N für NMR'
      ], formula: null },
      { icon: '🔋', color: 'var(--purple-bg)', title: 'Elektronenhülle & Bindung', points: [
        'Quantenzahlen: n (Größe), l (Gestalt), ml (Orientierung), ms (Spin)',
        'Pauli-Prinzip: max. 2 Elektronen/Orbital',
        'Kovalente Bindung: gemeinsame Elektronen (Elektronenteilung)',
        'Ionische Bindung: Elektronenübertragung → Kationen/Anionen'
      ], formula: null },
      { icon: '🔺', color: 'var(--teal-bg)', title: 'Hybridisierung & σ/π-Bindungen', points: [
        'sp³: tetraedrisch 109.5° (CH₄, H₂O, NH₃)',
        'sp²: trigonal-planar 120° (Ethen, C=C)',
        'sp¹: linear 180° (Ethin, C≡C)',
        'σ-Bindung: Einfachbindung; π-Bindung: zusätzlich bei Doppel-/Dreifachbindung'
      ], formula: null },
      { icon: '📊', color: 'var(--yellow-bg)', title: 'Elektronegativität & Polarität', points: [
        'Skala: F > O > Cl > N > C = S > H = P',
        'Polare Bindung: Δ EN > 0.5',
        'Delokalisierte π-Bindungen: Benzol (Mesomerie)',
        'Zelluläre Zusammensetzung: Wasser 80%, Proteine 10-15%, Lipide 2-5%'
      ], formula: null },
    ]
  },
  b02: {
    topics: [
      { icon: '⛽', color: 'var(--accent-bg)', title: 'Kohlenwasserstoffe', points: [
        'Aliphatisch: Alkane (ges.), Alkene (C=C), Alkine (C≡C)',
        'Aromatisch: zyklisch, planar, delokalisiertes π-System',
        'Beispiele: Benzol, Indol, Imidazol, Purin, Pyrimidin, Phenol',
        'Aromatische AS: Phe (Benzol), Tyr (Phenol), His (Imidazol), Trp (Indol)'
      ], formula: null },
      { icon: '⚗️', color: 'var(--teal-bg)', title: 'Einfache funktionelle Gruppen', points: [
        'Hydroxyl (R-OH), Thiol (R-SH), Amino (R-NH₂)',
        'Carbonyl: Aldehyd (R-CHO) & Keton (R-CO-R\')',
        'Carboxyl (R-COOH): Säuregruppe',
        'Oxidationsstufen C: Alkan(−3) → Formaldehyd(0) → CO₂(+4)'
      ], formula: null },
      { icon: '🔗', color: 'var(--green-bg)', title: 'Zusammengesetzte funktionelle Gruppen', points: [
        'Ester (COOH+OH → Fette), Thioester (COOH+SH → Acetyl-CoA)',
        'Phosphatester (P+OH → Ser/Thr/Tyr-Phosphorylierung)',
        'Phosphodiester (DNA/RNA-Rückgrat), Säureamid (→Peptidbindung)',
        'Halbacetal (zyklische Monosaccharide), Disulfid (2×Cys → Cystin)'
      ], formula: null },
      { icon: '💧', color: 'var(--orange-bg)', title: 'Kondensation & Hydrolyse', points: [
        'Kondensation: 2 Mol. − H₂O → Verbindung (benötigt Energie)',
        'Hydrolyse: Spaltung + H₂O (spontan, energetisch begünstigt)',
        'Energiereiche Bindungen: Thioester, Säureanhydrid, Phosphorsäureanhydrid (ATP)',
        'Nukleinbasen: Purine (Adenin, Guanin), Pyrimidine (Cytosin, Uracil, Thymin)'
      ], formula: null },
    ]
  },
  b03: {
    topics: [
      { icon: '🔄', color: 'var(--accent-bg)', title: 'Isomerietypen', points: [
        'Konstitutionsisomere: verschiedene Konnektivität (Ethanol vs. Dimethylether)',
        'Stereoisomere: gleiche Konnektivität, verschiedene Raumanordnung',
        'Konfigurationsisomere: nicht ohne Bindungsbruch ineinander überführbar',
        'Konformationsisomere: freie Drehbarkeit um C-C-Einfachbindung'
      ], formula: null },
      { icon: '🪞', color: 'var(--teal-bg)', title: 'Enantiomere & Diastereomere', points: [
        'Enantiomere: Spiegelbild-Isomere (nicht superponierbar)',
        'D/L-Nomenklatur; Racemat = 50:50-Gemisch beider Enantiomere',
        'Diastereomere: kein Spiegelbild; Epimere: nur 1 Stereozentrum unterschiedlich',
        'cis-trans-Isomerie: keine freie Drehbarkeit um C=C (Maleinsäure/Fumarsäure)'
      ], formula: null },
      { icon: '🌿', color: 'var(--green-bg)', title: 'Biologische Bedeutung', points: [
        'D-Carvon = Kümmelgeruch; L-Carvon = Minzegeruch (Enantiomere!)',
        'Contergan (Thalidomid): R=sedativ, S=teratogen → Racemat katastrophal',
        'L-Aminosäuren (alle kanonischen AS außer Glycin)',
        'D-Glukose in Natur; L-Glukose biologisch inaktiv'
      ], formula: null },
      { icon: '🧠', color: 'var(--purple-bg)', title: 'Prionen & Konformationsisomere', points: [
        'Konformationsisomere: gestaffelt (bevorzugt) vs. ekliptisch',
        'Prionen/Prionoide: pathogene Konformationsänderungen von PrP',
        'Prionkrankheiten: Creutzfeldt-Jakob (CJD/BSE)',
        'Prionoide bei Alzheimer (Aβ), Parkinson (α-Synuclein), Huntington'
      ], formula: null },
    ]
  },
  b04: {
    topics: [
      { icon: '⚡', color: 'var(--accent-bg)', title: 'Hierarchie der Bindungsstärken', points: [
        'Kovalent >> ionisch > H-Brücken > van-der-Waals',
        'Ionisch wesentlich stärker als nicht-kovalente WW',
        'Nicht-kovalente WW: additiv → biologisch sehr bedeutsam',
        'Ionische WW: Coulombsches Gesetz F = k·q₁·q₂/r²'
      ], formula: 'F = k · q₁ · q₂ / r²' },
      { icon: '💧', color: 'var(--teal-bg)', title: 'Wasserstoffbrücken', points: [
        'Donor (δ+, N-H oder O-H) → Akzeptor (freies Elektronenpaar)',
        'Elektrostatische WW (nicht rein ionisch)',
        'α-Helix: intramolekulare H-Brücken (CO(i)–NH(i+4))',
        'β-Faltblatt: intermolekulare H-Brücken zwischen Strängen'
      ], formula: null },
      { icon: '🌐', color: 'var(--green-bg)', title: 'Van-der-Waals-Kräfte', points: [
        'Permanente Dipol-Dipol-WW (polare Moleküle)',
        'Londonsche Dispersionskräfte: spontan induzierte Dipole',
        'Basenstapelung DNA: v.a. Londonsche Dispersionskräfte',
        'Kurze Reichweite, proportional zu 1/r⁶'
      ], formula: null },
      { icon: '🔬', color: 'var(--purple-bg)', title: 'Biologische Bedeutung', points: [
        'Korrekte Proteinfaltung (Tertiärstruktur)',
        'DNA/RNA-Stabilisierung (H-Brücken + Basenstapelung)',
        'Spezifität von Makromolekülkomplexen (Enzym-Substrat)',
        'Ermöglichen Transportprozesse, Metabolismus, Signalwege'
      ], formula: null },
    ]
  },
  b05: {
    topics: [
      { icon: '💧', color: 'var(--accent-bg)', title: 'Struktur des Wassers', points: [
        'Tetraedische Symmetrie, Dipolmolekül (O: δ−, H: δ+)',
        'Sowohl H-Brücken-Donor als auch -Akzeptor',
        'Eis: perfekte H-Brücken-Symmetrie → geringer dicht als Wasser',
        'Grotthuss-Mechanismus: springende Protonenweiterleitung'
      ], formula: null },
      { icon: '🌡️', color: 'var(--teal-bg)', title: 'Physikalische Eigenschaften', points: [
        'Dichteanomalie: höchste Dichte bei +4°C → Eis schwimmt',
        'Hohe Wärmekapazität (4.18 J/g·K) → Temperaturpuffer',
        'Kohäsion: Kapillarwirkung, hohe Oberflächenspannung',
        'Verdunstungskälte wichtig für Temperaturregulation'
      ], formula: null },
      { icon: '🛢️', color: 'var(--green-bg)', title: 'Hydrophober Effekt', points: [
        'Unpolare Moleküle zwingen Wasser in Ordnung (−ΔS des Wassers)',
        'Aggregation unpolarer Moleküle → Minimierung der Oberfläche → +ΔS',
        'Treibende Kraft für Biomembranbildung aus Phospholipiden',
        'Proteinfaltung: hydrophobe AS nach innen, hydrophile nach außen'
      ], formula: null },
      { icon: '🔬', color: 'var(--purple-bg)', title: 'Lipide & Membranen', points: [
        'Amphiphile Phospholipide: polare Kopfgruppe + unpolare Fettsäuren',
        'Gesättigte FS (Stearinsäure): fest bei RT; ungesättigte (Ölsäure, cis): flüssig',
        'Biomembranbildung: hydrophober Effekt treibt Doppelschicht-Bildung',
        'Myoglobin: hydrophile AS (blau) außen, hydrophobe (gelb) innen'
      ], formula: null },
    ]
  },
  b06: {
    topics: [
      { icon: '⚗️', color: 'var(--accent-bg)', title: 'pH & Autoprotolyse', points: [
        'Autoprotolyse: Kw = [H⁺][OH⁻] = 10⁻¹⁴ (bei 25°C)',
        'pH = −lg[H⁺]; physiolog. Werte: Blut 7.4, Zytosol 7.0',
        'Lysosomen pH 4.5–5.0; Mageninhalt pH 1–2',
        'Brønsted-Lowry: Säure = H⁺-Donor; Base = H⁺-Akzeptor'
      ], formula: 'pH = −lg[H⁺]' },
      { icon: '📐', color: 'var(--teal-bg)', title: 'pKa & Stärke', points: [
        'Ka = [A⁻][H⁺]/[AH]; pKa = −lg Ka',
        'Kleiner pKa → stärkere Säure',
        'Schwache Säuren: nur teilweise dissoziiert',
        'Wasser = Ampholyt: kann Säure und Base sein'
      ], formula: 'Ka = [A⁻][H⁺] / [AH]' },
      { icon: '🛡️', color: 'var(--green-bg)', title: 'Puffersysteme', points: [
        'Puffer: schwache Säure + konjugierte Base',
        'Henderson-Hasselbalch: pH = pKa − lg([AH]/[A⁻])',
        'Optimale Pufferwirkung bei pH = pKa',
        'Blutpuffer: CO₂/HCO₃⁻; pKa = 6.1 → pH 7.4'
      ], formula: 'pH = pKa − lg([AH]/[A⁻])' },
      { icon: '🏥', color: 'var(--orange-bg)', title: 'Klinische Bedeutung', points: [
        'Azidose: pH ≤ 7.35 (respiratorisch oder metabolisch)',
        'Alkalose: pH ≥ 7.45',
        'Blutpuffer-Berechnung: pH = 6.1 − lg(1.2mM/24mM) = 7.4',
        'Physiolog. pH-Werte streng geregelt (Enzyme pH-empfindlich)'
      ], formula: null },
    ]
  },
  b07: {
    topics: [
      { icon: '🌊', color: 'var(--accent-bg)', title: 'Diffusion', points: [
        'Entropie-getrieben: Konzentrationsgradient wird abgebaut',
        'Passiv (keine Energie) oder erleichtert (Transporter)',
        'Fick\'sches Gesetz: proportional zu Δc, 1/Membrandicke, Fläche',
        'Kleine unpolare Moleküle: direkte Membranpassage'
      ], formula: null },
      { icon: '⚖️', color: 'var(--teal-bg)', title: 'Osmose', points: [
        'Semipermeabel: Membran lässt Wasser, nicht Osmolyte durch',
        'Netto-Wasserfluss zur höheren Osmolyt-Konzentration',
        'Osmotischer Druck: π = n/V · RT',
        'Isotonisch (NaCl 0.9%) = 308 mosmol/L'
      ], formula: null },
      { icon: '🔴', color: 'var(--green-bg)', title: 'Tonizität von Zellen', points: [
        'Hypertonisch: Wasserverlust → Schrumpfen (Krenierung)',
        'Isotonisch: Gleichgewicht (keine Volumenänderung)',
        'Hypotonisch: Wassereinfluss → Schwellen/Platzen (Lyse)',
        'Isotonische NaCl: 9 g/L = 154 mmol/L = 308 mosmol/L'
      ], formula: null },
      { icon: '🏥', color: 'var(--purple-bg)', title: 'Klinische Relevanz', points: [
        'Infusionslösungen müssen isotonisch sein',
        'Nierenfunktion: osmotische Konzentration des Harns',
        'Zelluläres Volumen hängt von Osmolalität ab',
        'Pflanzen: Turgor durch hypotonisches Zellinnere'
      ], formula: null },
    ]
  },
  b08: {
    topics: [
      { icon: '🌱', color: 'var(--accent-bg)', title: 'Ursprung des Lebens', points: [
        'Miller-Experiment (1953): Uratmosphäre → Aminosäuren, Nukleotide',
        'RNA-Welt: Ribonukleotide → Urgene (RNA) → Ribozyme → Protobionten',
        'LUCA (Last Universal Common Ancestor) → Bacteria, Archaea, Eukarya',
        'Merkmale des Lebens: Metabolismus, Reizaufnahme, Bewegung, Vermehrung'
      ], formula: null },
      { icon: '🦠', color: 'var(--teal-bg)', title: 'Prokaryoten vs. Eukaryoten', points: [
        'Prokaryoten: kein Zellkern, kein ER; Beispiel E. coli',
        'Eukaryoten: Zellkern + Membrankompartimente',
        'Zelltheorie: Zelle = kleinste lebende Einheit; omnis cellula e cellula',
        'Endosymbiose: Proteobacteria → Mitochondrien; Cyanobacteria → Chloroplasten'
      ], formula: null },
      { icon: '🔬', color: 'var(--green-bg)', title: 'Eukaryotische Organellen', points: [
        'Zellkern: Replikation, Transkription; Nukleolus (Ribosomen-Biogenese)',
        'ER (rau + Ribosomen / glatt), Golgi-Apparat (Proteinsortierung)',
        'Mitochondrien: Zellatmung; Lysosomen: pH 4.5–5, hydrolytische Enzyme',
        'Zytoskelett: Mikrofilamente (Aktin), Mikrotubuli (Tubulin), Intermediärfilamente'
      ], formula: null },
      { icon: '🧬', color: 'var(--purple-bg)', title: 'Zellkern & Chromatin', points: [
        'Kernhülle: 2 Membranen + perinukleärer Raum, Kernlamina',
        'Kernporen: 30–100 nm, Kernimport/-export',
        'Euchromatin (aktiv transkribiert) vs. Heterochromatin (inaktiv)',
        'Nukleosomen: DNA um Histonoktamer; 23 Chromosomenpaare beim Menschen'
      ], formula: null },
    ]
  },
  b09: {
    topics: [
      { icon: '🧱', color: 'var(--accent-bg)', title: 'Nukleotidstruktur', points: [
        'Nukleotid = Nukleobase + Zucker (Ribose/Desoxyribose) + Phosphat',
        'Purine: Adenin (A), Guanin (G); Pyrimidine: Cytosin (C), Uracil (U), Thymin (T)',
        'DNA: Desoxyribose + T; RNA: Ribose + U',
        'Phosphodiester-Rückgrat: 5\'→3\'-Richtung'
      ], formula: null },
      { icon: '🔁', color: 'var(--teal-bg)', title: 'DNA-Doppelhelix', points: [
        'Watson-Crick: antiparallel, rechtsgängig',
        'A-T: 2 H-Brücken; G-C: 3 H-Brücken',
        'Basen innen (hydrophob), Zucker-Phosphat außen (hydrophil)',
        'Große + kleine Furche; Stabilisierung durch Basenstapelung (vdW)'
      ], formula: null },
      { icon: '📖', color: 'var(--green-bg)', title: 'DNA vs. RNA', points: [
        'DNA: Desoxyribose, T statt U, Doppelstrang, Erbinformation',
        'RNA: Ribose, U statt T, meist Einzelstrang',
        'mRNA (Botschaft), tRNA (Transport), rRNA (Ribosom), snRNA (Spleißen)',
        'Basenpaarung: immer Purin mit Pyrimidin (antiparallel)'
      ], formula: null },
      { icon: '🔬', color: 'var(--purple-bg)', title: 'Nukleotide als Coenzyme', points: [
        'ATP: universeller Energieträger (Phosphorsäureanhydrid)',
        'NAD⁺/NADH, FAD/FADH₂: Redox-Coenzyme',
        'NADP⁺/NADPH: Anabolismus, Fettsäuresynthese',
        'cAMP, cGMP: second messengers'
      ], formula: null },
    ]
  },
  b10: {
    topics: [
      { icon: '🍬', color: 'var(--accent-bg)', title: 'Monosaccharide', points: [
        'Allgemeinformel: (CH₂O)n; Aldosen/Ketosen',
        'D-Glukose: α-Anomer (32%) und β-Anomer (66%), Mutarotation',
        'Fischer-Projektion (Kette) ↔ Haworth-Formel (Ring, Halbacetal)',
        'D-Fruktose: α/β-Furanoseformen (5-Ring)'
      ], formula: null },
      { icon: '🔗', color: 'var(--teal-bg)', title: 'Glykosidische Bindung', points: [
        'N-glykosidisch: Nukleinbasen (N an C1)',
        'O-glykosidisch: Zucker-Zucker (z.B. Maltose, Saccharose)',
        'Nach Bindungsbildung: keine Mutarotation mehr möglich',
        'α(1→4): Stärke/Glykogen; β(1→4): Cellulose'
      ], formula: null },
      { icon: '🔧', color: 'var(--green-bg)', title: 'Modifizierte Monosaccharide', points: [
        'Glukuronsäure: C6-Oxidation (Entgiftung, Proteoglykane)',
        'Glukosamin/N-Acetyl-Glukosamin: Chitin, Heparin',
        'Sialinsäure (N-Acetylneuraminsäure): Ganglioside, Zellkommunikation',
        'Inositol: Phosphatidylinositol (Membranlipide, second messenger)'
      ], formula: null },
      { icon: '🏥', color: 'var(--orange-bg)', title: 'Klinische Bedeutung', points: [
        'Diabetes mellitus: Blutglukose-Normalwert 70–110 mg/dL (3.9–6.1 mM)',
        'WHO 1999: DM bei Nüchternglukose ≥ 7.0 mM oder 2h ≥ 11.1 mM (75g OGTT)',
        'Hemiacetal → Ringform: keine freie Aldehydgruppe → kein Tollens-Test bei Glykosid',
        'Lactose-Intoleranz: fehlende Laktase → β(1→4)-Glukosid kann nicht gespalten werden'
      ], formula: null },
    ]
  },
  b11: {
    topics: [
      { icon: '🌡️', color: 'var(--accent-bg)', title: 'Thermodynamik-Grundlagen', points: [
        'Enthalpie H: Wärmeinhalt; ΔH < 0: exotherm',
        'Entropie S: Unordnung/Wahrscheinlichkeit; ΔS > 0 bevorzugt',
        'Gibb\'sche Freie Energie: G ≡ H − TS',
        'ΔG < 0: exergon/spontan; ΔG > 0: endergon; ΔG = 0: Gleichgewicht'
      ], formula: 'ΔG = ΔH − TΔS' },
      { icon: '⚡', color: 'var(--teal-bg)', title: 'Biochemischer Standardzustand', points: [
        'ΔG°\': biochemischer Standard (pH=7, [H₂O]=55.5M, T=298K)',
        'ΔG = ΔG°\' + RT·ln K (K = [Produkte]/[Edukte])',
        'ΔG°\' = −RT·ln Keq (Gleichgewichtskonstante)',
        'Knallgasreaktion: 2H₂ + O₂ → 2H₂O; ΔG°\' = −237 kJ/mol'
      ], formula: "ΔG°' = −RT · ln Keq" },
      { icon: '🔋', color: 'var(--green-bg)', title: 'Energetische Beispiele', points: [
        'ATP-Synthese: ΔG°\' = +30.5 kJ/mol (endergon)',
        'Glukoseoxidation: ΔG°\' = −2840 kJ/mol (exergon)',
        'Fettsäureoxidation: ΔG°\' = −9770 kJ/mol (sehr exergon)',
        'Kopplung: exergone Reaktion treibt endergone an (ATP-Kopplung)'
      ], formula: null },
      { icon: '⚗️', color: 'var(--orange-bg)', title: 'Kinetik vs. Thermodynamik', points: [
        'Thermodynamik: bestimmt Richtung/Gleichgewicht (ΔG)',
        'Kinetik: bestimmt Geschwindigkeit (ΔG‡, Aktivierungsenergie)',
        'Enzyme senken ΔG‡, verändern ΔG nicht',
        'Enthalpie/Entropie-Beiträge oft gegenläufig (Entropie-Enthalpie-Kompensation)'
      ], formula: null },
    ]
  },
  b12: {
    topics: [
      { icon: '🫙', color: 'var(--accent-bg)', title: 'Fettsäurenomenklatur', points: [
        'IUPAC: Carboxylende C1; ω-Nomenklatur: vom Methylende',
        'Stearinsäure 18:0; Ölsäure 18:1 Δ9 (ω-9)',
        'α-Linolensäure 18:3 (ω-3); Linolsäure 18:2 (ω-6)',
        'Amphiphil: hydrophile Carboxylgruppe + hydrophobe Kohlenwasserstoffkette'
      ], formula: null },
      { icon: '🌡️', color: 'var(--teal-bg)', title: 'Schmelzpunkte & cis/trans', points: [
        'Mehr Doppelbindungen → niedrigerer Schmelzpunkt',
        'cis-Konfiguration → Knick in Kette → schlechtere Packung → flüssig',
        'trans-Fettsäuren: nicht natürlich, erhöhtes Herz-Kreislauf-Risiko',
        'Gesättigte FS: gerader Stab → festes Fett (Butter); ungesättigte: Öl'
      ], formula: null },
      { icon: '⚕️', color: 'var(--green-bg)', title: 'Essenzielle Fettsäuren & Eikosanoide', points: [
        'Essenzielle FS: Linolsäure (ω-6), Linolensäure (ω-3), Arachidonsäure (ω-6)',
        'Arachidonsäure (20:4) → Eikosanoide',
        'Prostaglandine, Prostacycline: Entzündung, Schmerz, Fieber',
        'Thromboxane (Aggregation), Leukotriene (Allergie, Asthma)'
      ], formula: null },
      { icon: '📚', color: 'var(--purple-bg)', title: 'Lipidklassen', points: [
        'Isoprenoide/Terpene: Vit A, D, E, K; Steroide: Cholesterin, Hormone',
        'Triacylglycerine: 3 FS + Glycerol (Energiespeicher)',
        'Phospholipide: Glycerophospholipide (GPLs) + Sphingophospholipide (SMS)',
        'Glykolipide: Cerebroside, Ganglioside (Zellkommunikation, Blutgruppen)'
      ], formula: null },
    ]
  },
  b13: {
    topics: [
      { icon: '🧪', color: 'var(--accent-bg)', title: 'Grundstruktur der Aminosäuren', points: [
        'Cα + H + NH₂ + COOH + variable Seitenkette R',
        'Alle L-α-Aminosäuren (außer Glycin, kein Stereozentrum)',
        'Zwitterion bei physiolog. pH: NH₃⁺ + COO⁻',
        'Isoelektrischer Punkt pI: pH mit Nettoladung = 0'
      ], formula: null },
      { icon: '📊', color: 'var(--teal-bg)', title: 'Klassifikation der 20 AS', points: [
        'Unpolar: Gly, Ala, Val, Leu, Ile, Met, Pro, Phe, Tyr, Trp',
        'Polar: Ser, Thr, Cys (→Disulfid=Cystin), Asn, Gln',
        'Negativ geladen: Asp (D), Glu (E)',
        'Positiv geladen: Lys (K), Arg (R), His (H)'
      ], formula: null },
      { icon: '⚗️', color: 'var(--green-bg)', title: 'Säure-Base-Eigenschaften', points: [
        'Ampholyte: AS wirken als Säure und Base',
        'Glycin pI = 6.0; saure AS (Asp, Glu): pI < 7; basische AS: pI > 7',
        'pKa1 (COOH) ≈ 2; pKa2 (NH₃⁺) ≈ 9–10',
        'Titrationskurve zeigt pKa-Werte und pI'
      ], formula: null },
      { icon: '🏗️', color: 'var(--orange-bg)', title: 'Klinische & biochemische Bedeutung', points: [
        'Disulfidbrücke: Cys → Cystin (oxidativ); stabilisiert Tertiärstruktur',
        'Selenocystein (21. AS) und Pyrrolysin (22. AS): nicht-kanonisch',
        'Pro: Imino-AS, kein freies NH₂ → bricht α-Helices',
        'His: pKa ≈ 6 → bei phys. pH halb protoniert → ideal für Katalyse'
      ], formula: null },
    ]
  },
};

// ---- FLASHCARDS B01–B13 ----
const B_CARDS = [
  // B01 – Atome und Moleküle
  { id:'b01_1', vl:'b01', cat:'Atome', q:'Welche 4 Elemente machen ~96% des menschlichen Körpers aus?', a:'O (65%), C (18.5%), H (9.5%), N (3.3%) — zusammen 96.3% der Körpermasse.' },
  { id:'b01_2', vl:'b01', cat:'Atome', q:'Was unterscheidet Isotope voneinander?', a:'Isotope haben dieselbe Protonenzahl (gleiches Element), aber verschiedene Neutronenzahl → verschiedene Massenzahl. z.B. ¹H, ²H (Deuterium), ³H (Tritium).' },
  { id:'b01_3', vl:'b01', cat:'Atome', q:'Welche Radioisotope werden in der Biochemie eingesetzt?', a:'³H (Tritium), ³⁵S, ³²P als Radiomarkierungen; ¹³C und ¹⁵N für NMR-Spektroskopie.' },
  { id:'b01_4', vl:'b01', cat:'Bindung', q:'Was besagt das Pauli-Prinzip?', a:'Jedes Orbital kann maximal 2 Elektronen mit entgegengesetztem Spin aufnehmen. Kein Orbital wird doppelt besetzt, bevor alle Orbitale einfach besetzt sind (Hund\'sche Regel).' },
  { id:'b01_5', vl:'b01', cat:'Bindung', q:'Was ist der Unterschied zwischen ionischer und kovalenter Bindung?', a:'Ionisch: Elektron wird von einem Atom auf das andere übertragen → Kation + Anion. Kovalent: Elektronen werden geteilt (gemeinsames Elektronenpaar).' },
  { id:'b01_6', vl:'b01', cat:'Hybridisierung', q:'Welche Geometrie hat ein sp³-hybridisiertes Kohlenstoffatom?', a:'Tetraedrisch, Bindungswinkel 109.5°. Beispiele: CH₄ (Methan), C in Alkanen.' },
  { id:'b01_7', vl:'b01', cat:'Hybridisierung', q:'Was ist sp²-Hybridisierung und wann tritt sie auf?', a:'sp²: trigonal-planar, 120°. Bei Doppelbindungen (C=C, C=O). Beispiel: Ethen, Carbonylgruppen. Das p-Orbital bleibt unhybridisiert → bildet π-Bindung.' },
  { id:'b01_8', vl:'b01', cat:'Hybridisierung', q:'Nenne den Unterschied zwischen σ- und π-Bindung.', a:'σ-Bindung: axiale Überlappung, freie Drehbarkeit, in JEDER Bindung. π-Bindung: laterale Überlappung, keine Drehbarkeit, NUR in Doppel- oder Dreifachbindungen.' },
  { id:'b01_9', vl:'b01', cat:'Elektronegativität', q:'Ordne nach Elektronegativität: F, O, N, C, H.', a:'F > O > Cl > N > C = S > H = P. Fluor ist das elektronegativste Element.' },
  { id:'b01_10', vl:'b01', cat:'Elektronegativität', q:'Was sind delokalisierte π-Elektronen am Beispiel Benzol?', a:'Benzol (C₆H₆): 6 p-Elektronen sind über den Ring delokalisiert (Mesomerie). Alle C-C-Bindungen gleich lang (1.39 Å). Höhere Stabilität als lokalisierte Doppelbindungen.' },

  // B02 – Kohlenwasserstoffe
  { id:'b02_1', vl:'b02', cat:'Aromaten', q:'Was sind die Kriterien für einen aromatischen Ring?', a:'Zyklisch, planar, vollständig konjugiertes π-System, Hückel-Regel: 4n+2 π-Elektronen (n=0,1,2…). Beispiel: Benzol (6 π-e⁻), Imidazol, Purin.' },
  { id:'b02_2', vl:'b02', cat:'Funktionelle Gruppen', q:'Was ist eine Thioestergruppe und wo kommt sie vor?', a:'Thioester: Carboxylgruppe + Thiol-Gruppe (R-CO-S-R\'). Energiereiche Bindung! Beispiel: Acetyl-CoA (Thioester zwischen Acetylrest und CoA-SH). Wichtig im Energiestoffwechsel.' },
  { id:'b02_3', vl:'b02', cat:'Funktionelle Gruppen', q:'Was ist der Unterschied zwischen Phosphatester und Phosphodiester?', a:'Phosphatester: eine OH-Gruppe des Phosphats verestert (z.B. Serin-Phosphorylierung). Phosphodiester: zwei OH-Gruppen verestert → Rückgrat von DNA/RNA.' },
  { id:'b02_4', vl:'b02', cat:'Kondensation', q:'Was ist Kondensation in der Biochemie? Nenne ein Beispiel.', a:'Kondensation = Verknüpfung zweier Moleküle unter Abspaltung von H₂O. Benötigt Energie (endergon). Beispiel: Peptidbindung (COOH + NH₂ → Säureamid + H₂O).' },
  { id:'b02_5', vl:'b02', cat:'Oxidationsstufen', q:'Wie ändern sich die Oxidationsstufen von C: Methan → CO₂?', a:'Methan −4 → Methanol −2 → Formaldehyd 0 → Ameisensäure +2 → CO₂ +4. Oxidation = Entfernung von H oder Hinzufügen von O → Oxidationsstufe steigt.' },
  { id:'b02_6', vl:'b02', cat:'Nukleinbasen', q:'Welche Nukleinbasen sind Purine, welche Pyrimidine?', a:'Purine (Doppelring): Adenin (A), Guanin (G). Pyrimidine (Einfachring): Cytosin (C), Uracil (U, RNA), Thymin (T, DNA).' },
  { id:'b02_7', vl:'b02', cat:'Funktionelle Gruppen', q:'Was ist ein Halbacetal und wann entsteht es?', a:'Halbacetal: Aldehyd + OH → C(OH)(OR)H. Entsteht bei zyklischen Monosacchariden (Fischer → Haworth). Ermöglicht die Ringschlussreaktion von Glukose.' },

  // B03 – Isomerie
  { id:'b03_1', vl:'b03', cat:'Isomerie', q:'Was ist der Unterschied zwischen Konstitutions- und Stereoisomeren?', a:'Konstitutionsisomere: gleiche Summenformel, verschiedene Konnektivität (Bindungspartner). Stereoisomere: gleiche Konnektivität, verschiedene räumliche Anordnung.' },
  { id:'b03_2', vl:'b03', cat:'Enantiomere', q:'Was ist ein Racemat?', a:'Racemat = 50:50-Gemisch der beiden Enantiomere einer chiralen Verbindung. Optisch inaktiv (dreht polarisiertes Licht nicht). Beispiel: Contergan-Gemisch (Thalidomid).' },
  { id:'b03_3', vl:'b03', cat:'Enantiomere', q:'Was unterscheidet D- von L-Aminosäuren?', a:'D/L-Nomenklatur nach räumlicher Anordnung am Cα (bezogen auf Glycerinaldehyd als Standard). Biologisch kommen fast ausschließlich L-α-Aminosäuren vor.' },
  { id:'b03_4', vl:'b03', cat:'Diastereomere', q:'Was sind Epimere? Nenne ein Beispiel.', a:'Epimere: Diastereomere, die sich nur an einem Stereozentrum unterscheiden. Beispiel: D-Glukose/D-Mannose (Epimere an C2); D-Glukose/D-Galaktose (Epimere an C4).' },
  { id:'b03_5', vl:'b03', cat:'cis-trans', q:'Warum kann es bei Doppelbindungen cis-trans-Isomerie geben?', a:'Keine freie Drehbarkeit um C=C-Doppelbindung (π-Bindung). cis: gleiche Gruppen auf gleicher Seite; trans: auf gegenüberliegenden Seiten. Beispiel: Maleinsäure (cis) vs. Fumarsäure (trans).' },
  { id:'b03_6', vl:'b03', cat:'Biologische Bedeutung', q:'Warum war die Thalidomid-Katastrophe (Contergan) chemisch so bedeutsam?', a:'Thalidomid als Racemat verkauft: R-Enantiomer sedativ/antiemetisch, S-Enantiomer teratogen (fruchtschädigend). Zeigte: einzelne Enantiomere können völlig verschiedene biologische Wirkungen haben.' },
  { id:'b03_7', vl:'b03', cat:'Prionen', q:'Was sind Prionen und wie unterscheiden sie sich von normalen Proteinen?', a:'Prionen = infektiöse Proteinpartikel ohne Nukleinsäure. PrP (normales Protein) → PrPsc (Scrapie, pathogene Konformation). Krankheiten: CJD, BSE, Kuru. Pathogene Konformation "infiziert" normale Proteine.' },

  // B04 – Nicht-kovalente WW
  { id:'b04_1', vl:'b04', cat:'Bindungsstärken', q:'Ordne diese Bindungstypen nach Stärke.', a:'Kovalent (150–400 kJ/mol) >> ionisch (~20 kJ/mol in Wasser) > Wasserstoffbrücken (2–40 kJ/mol) > vdW (~0.1–10 kJ/mol).' },
  { id:'b04_2', vl:'b04', cat:'H-Brücken', q:'Was ist Voraussetzung für eine Wasserstoffbrücke?', a:'H-Brücken-Donor: Atom mit δ+ H (z.B. O-H, N-H). Akzeptor: Atom mit freiem Elektronenpaar (O, N). Die H-Brücke = elektrostatische WW zwischen δ+H und dem Akzeptor.' },
  { id:'b04_3', vl:'b04', cat:'H-Brücken', q:'Wie werden α-Helices und β-Faltblätter durch H-Brücken stabilisiert?', a:'α-Helix: intramolekulare H-Brücken (CO(i)–NH(i+4)). β-Faltblatt: intermolekulare H-Brücken zwischen Strängen (antiparallel oder parallel). Alle CO und NH beteiligt.' },
  { id:'b04_4', vl:'b04', cat:'vdW', q:'Was sind Londonsche Dispersionskräfte?', a:'Spontane temporäre Dipole in unpolaren Molekülen → induzieren Dipole in Nachbarmolekülen. Sehr kurze Reichweite (~0.3–0.4 nm). Wichtig bei Basenstapelung in DNA und in hydrophoben Kernbereichen.' },
  { id:'b04_5', vl:'b04', cat:'Ionisch', q:'Wie beschreibt das Coulombsche Gesetz ionische WW?', a:'F = k·q₁·q₂/r². Kraft proportional zu Ladungen, umgekehrt proportional zu Abstand². In Wasser (ε≈80) stark abgeschwächt vs. Vakuum.' },

  // B05 – Wasser
  { id:'b05_1', vl:'b05', cat:'Wasserstruktur', q:'Warum ist Wasser ein Dipolmolekül?', a:'O ist elektronegativer als H → gemeinsame e⁻ liegen näher an O → O: δ−, H: δ+. Winkel 104.5° (sp³, 2 freie e⁻-Paare). → Wasser ist polar.' },
  { id:'b05_2', vl:'b05', cat:'Wasserstruktur', q:'Warum ist Eis weniger dicht als flüssiges Wasser?', a:'Im Eis bildet jedes H₂O 4 H-Brücken in perfekter tetraedrischer Symmetrie → offene, gitterartige Struktur → geringere Dichte. Beim Schmelzen bricht ein Teil der H-Brücken → dichter. Maximale Dichte bei 4°C.' },
  { id:'b05_3', vl:'b05', cat:'Hydrophober Effekt', q:'Erkläre den hydrophoben Effekt entropischt.', a:'Unpolare Moleküle in Wasser zwingen H₂O-Moleküle in geordnete Hüllen (−ΔS des Wassers). Aggregation der unpolaren Moleküle → Oberfläche ↓ → Ordnung des Wassers ↓ → +ΔS → thermodynamisch begünstigt.' },
  { id:'b05_4', vl:'b05', cat:'Membranen', q:'Wie führt der hydrophobe Effekt zur Biomembranbildung?', a:'Amphiphile Phospholipide: polar Kopfgruppe (hydrophil) + 2 Fettsäureschwänze (hydrophob). In Wasser → Aggregation zu Doppelschicht: hydrophobe Schwänze innen, hydrophile Köpfe außen. Entropiebegünstigt.' },
  { id:'b05_5', vl:'b05', cat:'Eigenschaften', q:'Nenne 3 biologisch wichtige Eigenschaften des Wassers.', a:'(1) Hohe Wärmekapazität → Temperaturpuffer. (2) Kohäsion/Kapillarwirkung → Wassertransport. (3) Dichteanomalie (Eis schwimmt) → Leben unter Eis. (4) Gutes Lösungsmittel für Ionen/polare Moleküle.' },

  // B06 – pH / Säuren / Puffer
  { id:'b06_1', vl:'b06', cat:'pH', q:'Was ist Autoprotolyse des Wassers?', a:'H₂O ⇌ H⁺ + OH⁻. Gleichgewichtskonstante: Kw = [H⁺][OH⁻] = 10⁻¹⁴. Bei pH 7: [H⁺] = [OH⁻] = 10⁻⁷ M = neutral.' },
  { id:'b06_2', vl:'b06', cat:'pH', q:'Welche pH-Werte haben Blut, Zytosol und Lysosomen?', a:'Blut/Extrazellularflüssigkeit: pH 7.4. Zytosol: pH ~7.0. Lysosomen: pH 4.5–5.0 (saure Hydrolasen aktiv). Mageninhalt: pH 1–2.' },
  { id:'b06_3', vl:'b06', cat:'Säure-Base', q:'Was ist der pKa-Wert?', a:'pKa = −lg Ka; Ka = [A⁻][H⁺]/[AH]. Kleiner pKa → stärkere Säure (Ka größer). Bei pH = pKa: 50% AH, 50% A⁻ (gleiche Konzentration beider Formen).' },
  { id:'b06_4', vl:'b06', cat:'Puffer', q:'Erkläre das Henderson-Hasselbalch-Prinzip.', a:'pH = pKa − lg([AH]/[A⁻]). Ein Puffer funktioniert am besten bei pH ≈ pKa (±1 pH-Einheit). Blutpuffer CO₂/HCO₃⁻: pKa = 6.1, Verhältnis 1.2/24 → pH = 6.1 + 1.3 = 7.4.' },
  { id:'b06_5', vl:'b06', cat:'Klinik', q:'Definiere Azidose und Alkalose.', a:'Azidose: pH ≤ 7.35 (respiratorisch: CO₂↑; metabolisch: HCO₃⁻↓). Alkalose: pH ≥ 7.45. Normaler Blut-pH: 7.35–7.45. Abweichungen lebensgefährlich (Enzymfunktion gestört).' },

  // B07 – Diffusion & Osmose
  { id:'b07_1', vl:'b07', cat:'Diffusion', q:'Was treibt die Diffusion an?', a:'Entropie: Konzentrationsgradient wird spontan abgebaut (2. Hauptsatz). Kein Energieeinsatz nötig. Netto-Fluss immer von hoher zu niedriger Konzentration, bis Gleichgewicht.' },
  { id:'b07_2', vl:'b07', cat:'Osmose', q:'Was ist Osmose und warum fließt Wasser?', a:'Osmose = gerichteter H₂O-Fluss durch semipermeable Membran. Wasser fließt zur Seite mit höherer Osmolyt-Konzentration (niedrigerer Wasserkonzentration). Treibkraft: osmotischer Druck.' },
  { id:'b07_3', vl:'b07', cat:'Tonizität', q:'Was passiert mit einer roten Blutzelle in hypotonischer NaCl?', a:'Hypotonisch: weniger Osmolyte außen als innen → Wasser strömt in Zelle → Schwellung → Hämolyse (Platzen). Lösung: Wasser nur mit 0.9% NaCl (= isotonisch = 308 mosmol/L).' },
  { id:'b07_4', vl:'b07', cat:'Klinik', q:'Wie ist isotonische NaCl-Lösung definiert?', a:'Isotonisch: 9 g/L = 0.9 Gew.-% NaCl = 154 mmol/L NaCl = 308 mosmol/L (entspricht Blutosmolalität). Keine Nettoflüsse über die Membran.' },

  // B08 – Zellen
  { id:'b08_1', vl:'b08', cat:'Zelltheorie', q:'Was besagt die Zelltheorie?', a:'(1) Die Zelle ist die kleinste strukturelle, funktionelle und vermehrungsfähige Einheit des Lebens. (2) Alle Lebewesen bestehen aus Zellen. (3) omnis cellula e cellula (jede Zelle entsteht aus einer Zelle).' },
  { id:'b08_2', vl:'b08', cat:'Evolution', q:'Was zeigte das Stanley-Miller-Experiment (1953)?', a:'Simulation der Uratmosphäre (CH₄, NH₃, H₂, H₂O, elektrische Entladungen) → spontane Bildung von Aminosäuren, Nukleotiden und anderen Biomolekülen → abiotische Synthese möglich.' },
  { id:'b08_3', vl:'b08', cat:'Prokaryoten', q:'Was unterscheidet Prokaryoten von Eukaryoten?', a:'Prokaryoten: kein Zellkern, kein membranumhülltes ER/Golgi, kleinere Ribosomen (70S). Eukaryoten: Zellkern mit Kernhülle, Membranorganellen (ER, Golgi, Mitochondrien), 80S-Ribosomen.' },
  { id:'b08_4', vl:'b08', cat:'Endosymbiose', q:'Was besagt die Endosymbiontentheorie?', a:'Mitochondrien: entstammen α-Proteobacteria (Endosymbiose vor ~2 Mrd. Jahren). Chloroplasten: entstammen Cyanobacteria. Belege: eigene DNA, eigene Ribosomen (70S), doppelte Membran.' },
  { id:'b08_5', vl:'b08', cat:'Organellen', q:'Was ist die Funktion des Nukleolus?', a:'Nukleolus: Unterstruktur im Zellkern, Ort der rRNA-Synthese und Ribosomenbiogenese. Produziert 60S und 40S ribosomale Untereinheiten (→ 80S Ribosom im Zytoplasma).' },
  { id:'b08_6', vl:'b08', cat:'Chromatin', q:'Was ist der Unterschied zwischen Euchromatin und Heterochromatin?', a:'Euchromatin: aufgelockertes Chromatin, aktiv transkribiert. Heterochromatin: kondensiert, inaktiv, gen-arm. Nukleosomen: DNA um Histonoktamer (H2A, H2B, H3, H4).' },

  // B09 – Nukleotide & Nukleinsäuren
  { id:'b09_1', vl:'b09', cat:'Nukleotide', q:'Aus welchen 3 Bestandteilen besteht ein Nukleotid?', a:'Nukleotid = Nukleobase + Pentosezucker (Ribose oder Desoxyribose) + Phosphatgruppe(n). Nukleosid = Nukleobase + Zucker (ohne Phosphat).' },
  { id:'b09_2', vl:'b09', cat:'DNA-Struktur', q:'Beschreibe die Watson-Crick-Doppelhelix.', a:'Antiparallel (5\'→3\' und 3\'→5\'), rechtsgängig. Basen innen (Basenstapelung), Zucker-Phosphat außen. A-T: 2 H-Brücken; G-C: 3 H-Brücken. Große + kleine Furche.' },
  { id:'b09_3', vl:'b09', cat:'Basenpaarung', q:'Welche Basen paaren miteinander und durch wie viele H-Brücken?', a:'A–T (DNA) / A–U (RNA): 2 H-Brücken. G–C: 3 H-Brücken. Immer Purin mit Pyrimidin (antiparallel, komplementär).' },
  { id:'b09_4', vl:'b09', cat:'DNA vs RNA', q:'Was sind die 3 chemischen Unterschiede zwischen DNA und RNA?', a:'(1) Zucker: Desoxyribose (DNA) vs. Ribose (RNA). (2) Base: Thymin T (DNA) vs. Uracil U (RNA). (3) Strang: meist Doppelstrang (DNA) vs. Einzelstrang (RNA).' },
  { id:'b09_5', vl:'b09', cat:'Nukleotide als Coenzyme', q:'Welche Rolle spielen Nukleotide über die Erbinformation hinaus?', a:'ATP: universeller Energieträger. NAD⁺/NADH, FAD/FADH₂: Redox-Coenzyme. cAMP/cGMP: second messengers in Signalkaskaden. CoA (enthält ADP): Acylgruppentransfer.' },

  // B10 – Kohlenhydrate
  { id:'b10_1', vl:'b10', cat:'Monosaccharide', q:'Was ist Mutarotation bei Glukose?', a:'Mutarotation = spontaner Wechsel zwischen α- und β-Anomer in Lösung über die offenkettige Form. Glukose: α-D-Glukose (32%) ⇌ offenkettig ⇌ β-D-Glukose (66%).' },
  { id:'b10_2', vl:'b10', cat:'Monosaccharide', q:'Was ist der Unterschied zwischen α- und β-D-Glukose?', a:'α-Anomer: C1-OH axial (im Sesselkonformer). β-Anomer: C1-OH äquatorial. Unterschied: Konfiguration am anomeren C1 (Halbacetal-C). β-Glukose stabiler (weniger 1,3-axiale WW).' },
  { id:'b10_3', vl:'b10', cat:'Glykosidische Bindung', q:'Was ist eine glykosidische Bindung und welche Typen gibt es?', a:'Glykosidische Bindung: anomeres C (C1) eines Monosaccharids reagiert mit OH oder NH₂. O-glykosidisch: Zucker-Zucker (Maltose, Lactose, Cellulose). N-glykosidisch: Zucker-Nukleinbase (Nukleotide).' },
  { id:'b10_4', vl:'b10', cat:'Diabetes', q:'Wann spricht man von Diabetes mellitus nach WHO 1999?', a:'Nüchternglukose ≥ 7.0 mmol/L (≥126 mg/dL) ODER Glukose ≥ 11.1 mmol/L 2h nach 75g OGTT. Normalwert: 70–110 mg/dL (3.9–6.1 mM).' },
  { id:'b10_5', vl:'b10', cat:'Modifizierte Monosaccharide', q:'Was ist N-Acetylglukosamin (GlcNAc) und wo kommt es vor?', a:'Glukosamin mit Acetylgruppe am N. Baustein von Chitin (Insekten/Pilze), Heparin (Antikoagulans), Peptidoglykanen (bakterielle Zellwand). Ebenfalls in N-Acetylneuraminsäure (Sialinsäure).' },

  // B11 – Thermodynamik
  { id:'b11_1', vl:'b11', cat:'Grundlagen', q:'Was ist die Gibbs-Freie-Energie G?', a:'G = H − TS. ΔG = ΔH − TΔS. ΔG < 0: spontan (exergon). ΔG > 0: nicht spontan (endergon). ΔG = 0: Gleichgewicht. Vereinigt Enthalpie (H) und Entropie (S).' },
  { id:'b11_2', vl:'b11', cat:'Grundlagen', q:'Was ist der biochemische Standardzustand (ΔG°\')?', a:'ΔG°\' = Standard-Freie-Energie unter biochemischen Bedingungen: pH = 7 (statt pH 0), [H₂O] = 55.5 M (konstant), T = 298K, alle anderen Stoffe 1 M.' },
  { id:'b11_3', vl:'b11', cat:'Reaktionen', q:'Wie hängen ΔG°\' und die Gleichgewichtskonstante zusammen?', a:"ΔG°' = −RT·ln Keq. Großes Keq → ΔG°' sehr negativ → Reaktion stark exergon. R = 8.314 J/mol·K. Bei ΔG°' = 0: Keq = 1 (keine Vorzugsrichtung)." },
  { id:'b11_4', vl:'b11', cat:'Beispiele', q:'Welche ΔG°\'-Werte haben ATP-Synthese vs. Glukoseoxidation?', a:"ATP-Synthese: ΔG°' = +30.5 kJ/mol (endergon, benötigt Kopplung an exergone Reaktion). Glukoseoxidation (Glykolyse+Citratcyclus): ΔG°' ≈ −2840 kJ/mol. Fettsäureoxidation: ≈ −9770 kJ/mol." },
  { id:'b11_5', vl:'b11', cat:'Entropie', q:'Nenne ein Beispiel für Entropie im biochemischen Kontext.', a:'Hydrophober Effekt: Entropiezunahme des Wassers treibt Proteinfaltung. Proteinentfaltung (Denaturierung): Entropiezunahme des Proteins, aber Entropiearnahme des Wassers. Insgesamt: Faltung entropisch wegen Wasser begünstigt.' },

  // B12 – Fettsäuren & Lipide
  { id:'b12_1', vl:'b12', cat:'Fettsäuren', q:'Was bedeutet die Notation 18:2 (ω-6) bei Fettsäuren?', a:'18: Kohlenstoffanzahl; 2: Anzahl Doppelbindungen; ω-6: erste Doppelbindung am 6. C vom Methylende. = Linolsäure. Essenziell: muss mit Nahrung aufgenommen werden.' },
  { id:'b12_2', vl:'b12', cat:'Schmelzpunkte', q:'Warum haben ungesättigte Fettsäuren niedrigere Schmelzpunkte?', a:'cis-Doppelbindungen verursachen Knicke → schlechtere Packung → weniger Kontaktfläche → schwächere vdW-Kräfte → niedrigerer Schmelzpunkt. Ölsäure (18:1): flüssig bei RT; Stearinsäure (18:0): fest.' },
  { id:'b12_3', vl:'b12', cat:'Essenzielle Fettsäuren', q:'Welche Fettsäuren sind essenziell und was bedeutet das?', a:'Essenziell = vom Menschen nicht selbst synthetisierbar → Nahrungszufuhr nötig. Essenziell: Linolsäure (18:2, ω-6), α-Linolensäure (18:3, ω-3), Arachidonsäure (20:4, ω-6, semi-essenziell).' },
  { id:'b12_4', vl:'b12', cat:'Eikosanoide', q:'Was sind Eikosanoide? Nenne 4 Gruppen.', a:'Eikosanoide = C₂₀-Derivate der Arachidonsäure. Gruppen: Prostaglandine (Entzündung, Schmerz, Fieber), Prostacycline (Vasodilatation), Thromboxane (Thrombozytenaggregation), Leukotriene (Allergie, Asthma).' },
  { id:'b12_5', vl:'b12', cat:'Lipidklassen', q:'Was sind Triacylglycerine und welche Funktion haben sie?', a:'3 Fettsäuren + Glycerol über Esterbindungen. Wichtigste Energiespeicher (9 kcal/g vs. 4 kcal/g bei KH/Proteinen). Wasserunlöslich → effizient. In Fettzellen (Adipozyten) gespeichert.' },
  { id:'b12_6', vl:'b12', cat:'Lipidklassen', q:'Was sind Ganglioside und welche Funktion haben sie?', a:'Ganglioside = Glykolipide mit Sialinsäureresten. Wichtig für Zellkommunikation, Nervensignalübertragung. ABO-Blutgruppenantigene sind Glykolipide. GM1-Gangliosid: Cholera-Toxin-Rezeptor.' },

  // B13 – Einführung AS & Proteine
  { id:'b13_1', vl:'b13', cat:'Aminosäuren', q:'Was ist die allgemeine Grundstruktur einer Aminosäure?', a:'Zentrales Cα mit: H-Atom, Aminogruppe (NH₂), Carboxylgruppe (COOH), variable Seitenkette R. Bei physiolog. pH: Zwitterion (NH₃⁺ + COO⁻).' },
  { id:'b13_2', vl:'b13', cat:'Aminosäuren', q:'Welche Aminosäure hat kein Stereozentrum und warum?', a:'Glycin (Gly/G): R = H. Beide Substituenten am Cα sind identisch (H) → kein chirales Zentrum → kein D/L-Unterschied. Kleinste Aminosäure.' },
  { id:'b13_3', vl:'b13', cat:'Aminosäuren', q:'Was ist der isoelektrische Punkt (pI)?', a:'pI = pH, an dem die Nettoladung der AS = 0. Bei pI ist die Zwitterion-Form dominant. Glycin: pI = 6.0. Saure AS (Asp, Glu): pI < 7. Basische AS (Lys, Arg, His): pI > 7.' },
  { id:'b13_4', vl:'b13', cat:'Klassifikation', q:'Welche Aminosäuren haben einen unpolaren aromatischen Ring in der Seitenkette?', a:'Phenylalanin (Phe/F), Tyrosin (Tyr/Y), Tryptophan (Trp/W). (Histidin hat Imidazol, ist aber positiv geladen.) Alle absorbieren bei ~280 nm (→ Proteinnachweis).' },
  { id:'b13_5', vl:'b13', cat:'Klassifikation', q:'Welche 2 negativ geladenen Aminosäuren gibt es?', a:'Aspartat (Asp/D), pKa ≈ 3.9; Glutamat (Glu/E), pKa ≈ 4.2. Beide haben zusätzliche Carboxylgruppe in der Seitenkette. Bei pH 7 fast vollständig deprotoniert → negativ geladen.' },
  { id:'b13_6', vl:'b13', cat:'Besonderheiten', q:'Warum bricht Prolin α-Helices?', a:'Prolin = Imino-Aminosäure: N-Atom im Ring eingebunden → kein freies NH. Dadurch: keine H-Brücke als Donor möglich → kann nicht in α-Helix integriert werden. Führt zur Knickstelle in der Polypeptidkette.' },
];

// ---- QUIZ B01–B13 ----
const B_QUIZ = [
  // B01
  { id:'bq01_1', vl:'b01', q:'Welches Element ist im menschlichen Körper mengenmäßig am häufigsten?', opts:['Kohlenstoff','Wasserstoff','Sauerstoff','Stickstoff'], correct:2, exp:'Sauerstoff macht 65% der Körpermasse aus (v.a. in H₂O). Kohlenstoff 18.5%, Wasserstoff 9.5%, Stickstoff 3.3%.' },
  { id:'bq01_2', vl:'b01', q:'Welche Hybridisierung hat sp²-Kohlenstoff?', opts:['Tetraedrisch, 109.5°','Trigonal-planar, 120°','Linear, 180°','Oktaedrisch, 90°'], correct:1, exp:'sp²: drei Bindungspartner, trigonal-planar, 120°. Ein p-Orbital bleibt unhybridisiert → bildet π-Bindung. Beispiel: Ethen, Carbonylgruppen.' },
  { id:'bq01_3', vl:'b01', q:'Welche Aussage zu Isotopen ist korrekt?', opts:['Gleiche Neutronenzahl, verschiedene Protonenzahl','Gleiche Protonenzahl, verschiedene Neutronenzahl','Gleiche Massenzahl, verschiedene Protonenzahl','Isotope haben immer verschiedene Elemente'], correct:1, exp:'Isotope: gleiche Protonenzahl (gleiches Element), verschiedene Neutronenzahl → verschiedene Massenzahl. ¹H, ²H, ³H sind alle Wasserstoffisotope.' },
  { id:'bq01_4', vl:'b01', q:'Ordne nach Elektronegativität (höchste zuerst):', opts:['C > N > O > F','F > O > N > C','O > F > N > C','N > O > F > C'], correct:1, exp:'Elektronegativität: F > O > Cl > N > C = S > H = P. Fluor ist das elektronegativste Element überhaupt.' },

  // B02
  { id:'bq02_1', vl:'b02', q:'Was ist die energiereichste funktionelle Gruppe unter diesen?', opts:['Ether','Hydroxyl','Thioester','Ester'], correct:2, exp:'Thioester (z.B. Acetyl-CoA) sind energiereicher als normale Ester. Die C-S-Bindung ist reaktiver als C-O. Wichtig im Energiestoffwechsel (Acetyl-CoA als "aktivierte Essigsäure").' },
  { id:'bq02_2', vl:'b02', q:'Welche Nukleinbasen sind Pyrimidine?', opts:['Adenin und Guanin','Cytosin, Uracil und Thymin','Adenin, Cytosin und Thymin','Guanin und Thymin'], correct:1, exp:'Pyrimidine (1 Ring): Cytosin (C), Uracil (U, in RNA), Thymin (T, in DNA). Purine (2 Ringe): Adenin (A), Guanin (G).' },
  { id:'bq02_3', vl:'b02', q:'Was ist Kondensation in der Biochemie?', opts:['Spaltung von Bindungen durch Wasser','Verknüpfung zweier Moleküle unter Wasserabspaltung','Übertragung von Phosphatgruppen','Oxidation von Kohlenstoff'], correct:1, exp:'Kondensation = Anknüpfung zweier Moleküle mit Abspaltung von H₂O. Endergon, benötigt Energie. Hydrolyse ist die umgekehrte Reaktion (exergon, spontan).' },

  // B03
  { id:'bq03_1', vl:'b03', q:'Was ist ein Racemat?', opts:['Reines Enantiomer','50:50-Gemisch beider Enantiomere','Ein Diastereomer','Eine optisch aktive Verbindung'], correct:1, exp:'Racemat = äquimolares Gemisch beider Enantiomere. Optisch inaktiv, da beide Formen die Polarisation in entgegengesetzte Richtungen drehen und sich aufheben.' },
  { id:'bq03_2', vl:'b03', q:'Wie unterscheiden sich D- und L-Glukose biologisch?', opts:['Identische Wirkung','D-Glukose wird metabolisiert, L-Glukose nicht','L-Glukose süßer','Beide werden gleich gut verdaut'], correct:1, exp:'Enzyme sind stereoselektiv. Nur D-Glukose wird von Glykolyse-Enzymen erkannt. L-Glukose ist biologisch inaktiv. Gleiches gilt für L-Aminosäuren (biologisch aktiv) vs. D-Aminosäuren.' },
  { id:'bq03_3', vl:'b03', q:'Warum war Contergan (Thalidomid) als Racemat so problematisch?', opts:['Beide Enantiomere toxisch','R-Enantiomer teratogen, S-Enantiomer wirksam','S-Enantiomer teratogen, R-Enantiomer wirksam','Racemisierung im Körper unmöglich'], correct:2, exp:'R-Thalidomid: sedativ/antiemetisch (wirksam). S-Thalidomid: teratogen (fruchtschädigend). Als Racemat verabreicht → katastrophale Missbildungen. Im Körper interkonvertieren die Enantiomere.' },

  // B04
  { id:'bq04_1', vl:'b04', q:'Welche Kräfte stabilisieren die DNA-Doppelhelix hauptsächlich?', opts:['Kovalente Bindungen','Ionische Bindungen','H-Brücken + Basenstapelung (vdW)','Disulfidbrücken'], correct:2, exp:'DNA-Helix stabilisiert durch: H-Brücken (A-T: 2, G-C: 3) zwischen komplementären Basen + Basenstapelung (Londonsche Dispersionskräfte, vdW zwischen gestapelten Basen).' },
  { id:'bq04_2', vl:'b04', q:'Was ist ein H-Brücken-Donor?', opts:['Atom mit freiem Elektronenpaar','Atom mit δ+H (z.B. O-H oder N-H)','Negativ geladenes Ion','Unpolare Bindung'], correct:1, exp:'H-Brücken-Donor: Atom, das ein δ+ H-Atom trägt (O-H, N-H). Akzeptor: Atom mit freiem Elektronenpaar (O, N). Wasser ist sowohl Donor als auch Akzeptor.' },

  // B05
  { id:'bq05_1', vl:'b05', q:'Warum schwimmt Eis auf Wasser?', opts:['Eis enthält Luftblasen','Eis bildet mehr H-Brücken → offenere Struktur → weniger dicht','Wasser ist bei 0°C dichter als Eis','Eis hat mehr Elektronen'], correct:1, exp:'Im Eis: jede H₂O bildet 4 H-Brücken in perfekter Tetraederanordnung → weniger dicht als flüssiges Wasser (0.917 g/cm³ vs. ~1 g/cm³). Maximale Dichte des Wassers: 4°C.' },
  { id:'bq05_2', vl:'b05', q:'Was ist die treibende Kraft für die Biomembranbildung?', opts:['Kovalente Bindungen zwischen Phospholipiden','Elektrostatische Abstoßung','Hydrophober Effekt (Entropiezugewinn)','H-Brücken der Kopfgruppen'], correct:2, exp:'Der hydrophobe Effekt treibt amphiphile Phospholipide zur Doppelschicht: hydrophobe Schwänze innen → Wasser muss keine Ordnungsstruktur bilden → Entropiezugewinn.' },

  // B06
  { id:'bq06_1', vl:'b06', q:'Was ist Kw (Ionenprodukt des Wassers)?', opts:['[H⁺]² = 10⁻⁷','[H⁺][OH⁻] = 10⁻¹⁴','[H⁺] + [OH⁻] = 1','[H⁺]/[OH⁻] = 14'], correct:1, exp:'Kw = [H⁺][OH⁻] = 10⁻¹⁴ (bei 25°C). Autoprotolyse: H₂O ⇌ H⁺ + OH⁻. Neutral: pH = 7 → [H⁺] = [OH⁻] = 10⁻⁷ M.' },
  { id:'bq06_2', vl:'b06', q:'Bei welchem pH liegt der optimale Pufferbereich?', opts:['pKa ± 2','pKa ± 1','pKa ± 3','Immer pH 7'], correct:1, exp:'Optimale Pufferwirkung: pH = pKa ± 1. Bei pH = pKa: 50% Säure + 50% Base → beide Pufferkapazitäten maximal. Henderson-Hasselbalch: pH = pKa − lg([AH]/[A⁻]).' },

  // B07
  { id:'bq07_1', vl:'b07', q:'Was treibt Osmose an?', opts:['Elektrostatische Kräfte','Konzentrationsunterschied der Osmolyte → Nettofluss von Wasser','ATP-Verbrauch','pH-Gradient'], correct:1, exp:'Osmose: Wasser fließt spontan durch semipermeable Membran von niedrig → hoch konzentrierter Lösung (ausgedrückt in Osmolyten). Treibkraft: chemisches Potential des Wassers.' },
  { id:'bq07_2', vl:'b07', q:'Was sind 308 mosmol/L?', opts:['Hyperosmolar für Blut','Hypoosomolar für Blut','Isotonisch (entspricht Blutosmolalität)','Letale Konzentration'], correct:2, exp:'308 mosmol/L = isotonisch mit Blut (Blutosmolalität ~285-295 mosmol/kg). Entspricht 154 mmol/L NaCl = 0.9% NaCl-Lösung. Keine Nettoflüsse über Zellmembranen.' },

  // B08
  { id:'bq08_1', vl:'b08', q:'Welche Organelle entstand durch Endosymbiose aus Proteobacteria?', opts:['Zellkern','Lysosomen','Mitochondrien','Golgi-Apparat'], correct:2, exp:'Mitochondrien: entstammen α-Proteobacteria (~2 Mrd. Jahre). Belege: eigene DNA (zirkulär, wie Bakterien), 70S-Ribosomen, doppelte Membran. Chloroplasten: aus Cyanobacteria.' },
  { id:'bq08_2', vl:'b08', q:'Was ist die Funktion des Nukleolus?', opts:['DNA-Replikation','Proteinsynthese','rRNA-Synthese und Ribosomen-Biogenese','mRNA-Export'], correct:2, exp:'Nukleolus: Unterstruktur im Zellkern, Synthese von rRNA, Assemblierung der ribosomalen Untereinheiten (60S + 40S → 80S im Zytoplasma).' },
  { id:'bq08_3', vl:'b08', q:'Was zeigt das Miller-Experiment?', opts:['Leben entstand auf dem Mars','Abiotische Synthese von Biomolekülen aus Uratmosphäre möglich','DNA ist die erste Informationsmoleküle','Zellen entstehen spontan'], correct:1, exp:'Miller-Experiment (1953): H₂O, CH₄, NH₃, H₂ + elektr. Entladungen → Aminosäuren, Nukleotide, Saccharide. Zeigt: Bausteine des Lebens entstehen abiotisch.' },

  // B09
  { id:'bq09_1', vl:'b09', q:'Welche Zuckerbasis hat RNA, welche DNA?', opts:['RNA: Desoxyribose; DNA: Ribose','RNA: Ribose; DNA: Desoxyribose','Beide Ribose','Beide Desoxyribose'], correct:1, exp:'RNA enthält Ribose (2\'-OH-Gruppe). DNA enthält Desoxyribose (kein 2\'-OH). Die 2\'-OH macht RNA chemisch weniger stabil aber funktionell vielseitiger.' },
  { id:'bq09_2', vl:'b09', q:'Wie viele H-Brücken verbinden G-C vs. A-T?', opts:['G-C: 2, A-T: 3','G-C: 3, A-T: 2','G-C: 3, A-T: 3','G-C: 2, A-T: 2'], correct:1, exp:'G-C: 3 H-Brücken (G-Amino zu C-Carbonyl, G-Carbonyl zu C-Amino, G-N1 zu C-N3). A-T: 2 H-Brücken. → GC-reiche DNA stabiler (höhere Schmelztemperatur Tm).' },

  // B10
  { id:'bq10_1', vl:'b10', q:'Was ist Mutarotation?', opts:['Abbau von Glukose','Oxidation der Aldehydgruppe','Spontaner Wechsel zwischen α- und β-Anomer','Phosphorylierung von Glukose'], correct:2, exp:'Mutarotation: spontane Interkonversion zwischen α-Anomer (32%) und β-Anomer (66%) über die offenkettige Form (Aldehydform). Nur bei freien Hemiacetalen (Monosacchariden) möglich.' },
  { id:'bq10_2', vl:'b10', q:'Welcher Grenzwert definiert Diabetes mellitus (WHO 1999, Nüchternwert)?', opts:['≥ 5.0 mM','≥ 6.1 mM','≥ 7.0 mM','≥ 11.1 mM'], correct:2, exp:'DM: Nüchternglukose ≥ 7.0 mmol/L (≥126 mg/dL). IFG (gestörte Nüchternglukose): 6.1–6.9 mM. Normalwert: < 6.1 mM (< 110 mg/dL).' },

  // B11
  { id:'bq11_1', vl:'b11', q:'Was bedeutet ΔG < 0?', opts:['Reaktion ist endergon','Reaktion benötigt Aktivierungsenergie','Reaktion ist exergon/spontan','Gleichgewicht erreicht'], correct:2, exp:'ΔG < 0: exergon → Reaktion läuft spontan ab, Energie wird frei. ΔG > 0: endergon, nicht spontan (benötigt Energiezufuhr). ΔG = 0: Gleichgewicht.' },
  { id:'bq11_2', vl:'b11', q:'Wie viel ΔG°\' hat die ATP-Synthese?', opts:['−30.5 kJ/mol','0 kJ/mol','+30.5 kJ/mol','−2840 kJ/mol'], correct:2, exp:"ATP-Synthese (ADP + Pi → ATP): ΔG°' = +30.5 kJ/mol (endergon). Wird durch Kopplung an exergone Reaktionen (z.B. Protonengradienten an der ATP-Synthase) ermöglicht." },

  // B12
  { id:'bq12_1', vl:'b12', q:'Warum haben trans-Fettsäuren negative Gesundheitseffekte?', opts:['Sie sind gesättigter','Sie erhöhen LDL und senken HDL → erhöhtes Herz-Kreislauf-Risiko','Sie enthalten mehr Kalorien','Sie hemmen die Fettsäuresynthese'], correct:1, exp:'Trans-Fettsäuren (z.B. aus partieller Hydrierung) erhöhen LDL ("schlechtes" Cholesterin) und senken HDL ("gutes" Cholesterin) → erhöhtes Atherosklerose-Risiko. In der EU kennzeichnungspflichtig.' },
  { id:'bq12_2', vl:'b12', q:'Was sind Eikosanoide und woher stammen sie?', opts:['20-C-Zucker aus Glukose','Steroide aus Cholesterin','C₂₀-Lipidmediatoren aus Arachidonsäure','Phospholipide der Membran'], correct:2, exp:'Eikosanoide = Derivate der Arachidonsäure (20:4 ω-6). Gruppen: Prostaglandine (Entz., Schmerz), Prostacycline (Vasodilatation), Thromboxane (Aggregation), Leukotriene (Allergie).' },

  // B13
  { id:'bq13_1', vl:'b13', q:'Was ist ein Zwitterion bei Aminosäuren?', opts:['AS mit Nettoladung +1','AS mit Nettoladung −1','AS mit gleichzeitig protonierter Amino- und deprotonierter Carboxylgruppe (Nettoladung 0)','AS ohne Ladung'], correct:2, exp:'Bei physiolog. pH (7): COOH deprotoniert → COO⁻; NH₂ protoniert → NH₃⁺. Nettoladung = 0 (Zwitterion). Dominiert im isoelektrischen Punkt pI.' },
  { id:'bq13_2', vl:'b13', q:'Welche AS hat den niedrigsten pI?', opts:['Glycin (pI 6)','Lysin (pI 9.7)','Glutamat (pI 3.2)','Arginin (pI 10.8)'], correct:2, exp:'Saure AS haben zusätzliche Carboxylgruppe → überschüssige negative Ladung → pI unter 7. Glu: pI ≈ 3.2. Asp: pI ≈ 2.8. Basische AS (Lys, Arg, His): pI > 7.' },
  { id:'bq13_3', vl:'b13', q:'Warum ist His für die Enzymkatalyse besonders wertvoll?', opts:['Kleinstes Aminosäure','pKa ≈ 6 → bei pH 7 halb protoniert → kann als Säure und Base fungieren','Bildet Disulfidbrücken','Sehr hydrophob'], correct:1, exp:'His (Imidazol-Seitenkette): pKa ≈ 6. Bei physiolog. pH 7: ~10% protoniert (Säurefunktion) / ~90% deprotoniert (Basenfunktion). Ideal für Protonenrelais in Enzym-Triaden (z.B. Trypsin: Asp-His-Ser).' },
];

// ---- TABLES B01–B13 ----
const B_TABLES = {
  elemente_des_lebens: {
    title: 'Elemente des Lebens & zelluläre Zusammensetzung',
    vl: 'b01',
    headers: ['Element', 'Anteil Körper', 'Anteil Zelle', 'Besonderheit'],
    rows: [
      ['Sauerstoff (O)', '65%', '—', 'Hauptsächlich in H₂O'],
      ['Kohlenstoff (C)', '18.5%', '—', 'Grundgerüst aller Biomoleküle'],
      ['Wasserstoff (H)', '9.5%', '—', 'In H₂O + allen org. Molekülen'],
      ['Stickstoff (N)', '3.3%', '—', 'In Proteinen (Amide), Nukleinsäuren'],
      ['Wasser', '—', '80–85%', 'Lösungsmittel, Reaktant'],
      ['Proteine', '—', '10–15%', 'Nach Wasser häufigste Fraktion'],
      ['Lipide', '—', '2–5%', 'Membranen, Energiespeicher'],
      ['Nukleinsäuren', '—', '~1%', 'DNA + RNA'],
      ['Polysaccharide', '—', '0.1–1%', 'Zucker, Strukturpolymere'],
      ['Ionen', '—', '~1.5%', 'Na⁺, K⁺, Ca²⁺, Mg²⁺, Cl⁻, PO₄³⁻'],
    ],
    tags: {}
  },
  hybridisierung: {
    title: 'Hybridisierung & Bindungsgeometrie',
    vl: 'b01',
    headers: ['Hybridisierung', 'Geometrie', 'Winkel', 'Beispiel', 'Bindungstyp'],
    rows: [
      ['sp³', 'Tetraedrisch', '109.5°', 'CH₄, NH₃, H₂O, C-C-Einfachbindung', 'σ-Bindungen'],
      ['sp²', 'Trigonal-planar', '120°', 'Ethen (C=C), Carboxylgruppe, Benzol', 'σ + π (aus p-Orbital)'],
      ['sp¹', 'Linear', '180°', 'Ethin (C≡C), CO₂, HCN', 'σ + 2 π'],
    ],
    tags: {}
  },
  funktionelle_gruppen: {
    title: 'Funktionelle Gruppen im Überblick',
    vl: 'b02',
    headers: ['Gruppe', 'Formel', 'Eigenschaften', 'Beispiel im Körper'],
    rows: [
      ['Hydroxyl', 'R-OH', 'Polar, H-Brücken-Donor+Akzeptor', 'Serin, Threonin, Zucker'],
      ['Thiol', 'R-SH', 'Polar, schwächere H-Brücken; Disulfidbrücke', 'Cystein, CoA-SH'],
      ['Amino', 'R-NH₂', 'Polar, base; H-Brücken-Donor', 'Aminosäuren, Nukleotide'],
      ['Carboxyl', 'R-COOH', 'Säure (pKa ≈ 2–4)', 'Aminosäuren, FS, Pyruvat'],
      ['Carbonyl/Aldehyd', 'R-CHO', 'Reaktiv, Reduktionsmittel', 'Glukose (offenkettig)'],
      ['Carbonyl/Keton', 'R-CO-R\'', 'Polar, weniger reaktiv als Ald.', 'Fruktose, Pyruvat'],
      ['Phosphat', 'R-OPO₃²⁻', 'Negativ geladen, hydrophil', 'ATP, DNA-Rückgrat'],
      ['Ester', 'R-COO-R\'', 'Kondensation von COOH+OH', 'Fette (TAG), Phospholipide'],
      ['Thioester', 'R-CO-S-R\'', 'Energiereich', 'Acetyl-CoA, Succinyl-CoA'],
      ['Säureamid', 'R-CO-NH-R\'', 'Peptidbindung (planar)', 'Peptidbindung in Proteinen'],
      ['Disulfid', 'R-S-S-R\'', 'Kovalente Quervernetzung', 'Cystin (aus 2 × Cys)'],
      ['Phosphodiester', '(-O-PO₂⁻-O-)', 'Zwei Esterbindungen an P', 'DNA/RNA-Rückgrat'],
    ],
    tags: {}
  },
  isomerie_tabelle: {
    title: 'Isomerietypen im Überblick',
    vl: 'b03',
    headers: ['Typ', 'Definition', 'Trennbar?', 'Biologisches Beispiel'],
    rows: [
      ['Konstitutionsisomere', 'Gleiche Summenformel, verschiedene Bindungspartner', 'Ja', 'Ethanol vs. Dimethylether'],
      ['Enantiomere', 'Spiegelbildisomere, nicht superponierbar', 'Nur durch chirale Mittel', 'D- vs. L-Alanin; D- vs. L-Carvon'],
      ['Diastereomere', 'Stereoisomere ohne Spiegelbildbeziehung', 'Ja (verschiedene phys. Eigenschaften)', 'D-Glukose vs. D-Galaktose (Epimere an C4)'],
      ['Epimere', 'Diastereomere mit Unterschied nur an 1 Stereozentrum', 'Ja', 'Glukose/Mannose (C2); Glukose/Galaktose (C4)'],
      ['cis-trans-Isomere', 'Keine freie Drehbarkeit um C=C', 'Ja', 'Maleinsäure (cis) vs. Fumarsäure (trans)'],
      ['Konformationsisomere', 'Ineinander überführbar durch Rotation um Einfachbindung', 'Nein (Gleichgewicht)', 'Gestaffelt vs. ekliptisch; PrP vs. PrPsc'],
    ],
    tags: {}
  },
  nicht_kovalente_ww: {
    title: 'Nicht-kovalente Wechselwirkungen',
    vl: 'b04',
    headers: ['Typ', 'Stärke', 'Reichweite', 'Beschreibung', 'Biologisches Beispiel'],
    rows: [
      ['Ionisch', '~20 kJ/mol (in H₂O)', 'Mittel (~1 nm)', 'Coulombsche Anziehung', 'Asp-Lys in Proteinen; DNA-Histon'],
      ['Wasserstoffbrücken', '2–40 kJ/mol', 'Kurz (0.15–0.35 nm)', 'δ+H…Akzeptor (O, N)', 'α-Helix, β-Faltblatt, DNA (A-T, G-C)'],
      ['Dipol-Dipol', '~2–8 kJ/mol', 'Kurz', 'Permanente Dipole', 'Polare Seitenketten'],
      ['Londonsche Dispersion', '~0.1–10 kJ/mol', 'Sehr kurz (<0.5 nm)', 'Temporäre induzierte Dipole', 'Basenstapelung DNA; hydrophober Kern'],
      ['Hydrophob', 'Variabel', 'Mittel', 'Entropieeffekt (keine direkte WW)', 'Proteinfaltung, Membranen'],
    ],
    tags: {}
  },
  aminosaeuren_b13: {
    title: '20 kanonische Aminosäuren (B13)',
    vl: 'b13',
    headers: ['Aminosäure', '1-Letter', '3-Letter', 'Gruppe', 'pKa Seitenkette', 'Besonderheit'],
    rows: [
      ['Glycin', 'G', 'Gly', 'Unpolar', '—', 'Kein Stereozentrum; kleinste AS'],
      ['Alanin', 'A', 'Ala', 'Unpolar', '—', 'Häufigste AS'],
      ['Valin', 'V', 'Val', 'Unpolar', '—', 'Verzweigt, hydrophob'],
      ['Leucin', 'L', 'Leu', 'Unpolar', '—', 'Verzweigt, häufig in Coiled-coils'],
      ['Isoleucin', 'I', 'Ile', 'Unpolar', '—', 'Verzweigt, 2 Stereozentren'],
      ['Methionin', 'M', 'Met', 'Unpolar', '—', 'Startcodon (AUG); Thioether'],
      ['Prolin', 'P', 'Pro', 'Unpolar', '—', 'Imino-AS; bricht α-Helix, kein NH'],
      ['Phenylalanin', 'F', 'Phe', 'Unpolar aromatisch', '—', 'Benzylring'],
      ['Tyrosin', 'Y', 'Tyr', 'Unpolar aromatisch', '~10', 'Phenolring; Phosphorylierungsstelle'],
      ['Tryptophan', 'W', 'Trp', 'Unpolar aromatisch', '—', 'Indolring; größte AS'],
      ['Serin', 'S', 'Ser', 'Polar', '—', 'Hydroxyl; Phosphorylierungsstelle'],
      ['Threonin', 'T', 'Thr', 'Polar', '—', 'Hydroxyl; Phosphorylierungsstelle'],
      ['Cystein', 'C', 'Cys', 'Polar', '~8.3', 'Thiol; Disulfidbrücke → Cystin'],
      ['Asparagin', 'N', 'Asn', 'Polar', '—', 'Carboxamid; N-Glykosylierung'],
      ['Glutamin', 'Q', 'Gln', 'Polar', '—', 'Carboxamid; N-Transport'],
      ['Aspartat', 'D', 'Asp', 'Negativ geladen', '3.9', 'Katalyse (Aspartyl-Proteasen)'],
      ['Glutamat', 'E', 'Glu', 'Negativ geladen', '4.2', 'Neurotransmitter (ionotrop)'],
      ['Lysin', 'K', 'Lys', 'Positiv geladen', '10.5', 'Ubiquitinierung, Acetylierung'],
      ['Arginin', 'R', 'Arg', 'Positiv geladen', '12.5', 'Guanidinium, NO-Synthese'],
      ['Histidin', 'H', 'His', 'Positiv geladen (pH-abh.)', '~6', 'Katalyse; pKa ≈ 7 → ideal'],
    ],
    tags: { 'Unpolar': 'tag-blue', 'Unpolar aromatisch': 'tag-purple', 'Polar': 'tag-teal', 'Negativ geladen': 'tag-red', 'Positiv geladen': 'tag-green', 'Positiv geladen (pH-abh.)': 'tag-green' }
  },
  lipidklassen: {
    title: 'Lipidklassen im Überblick',
    vl: 'b12',
    headers: ['Klasse', 'Untergruppen', 'Funktion', 'Beispiele'],
    rows: [
      ['Fettsäuren', 'Gesättigt, einfach/mehrfach ungesättigt', 'Energiespeicher, Signalmoleküle', 'Stearinsäure (18:0), Ölsäure (18:1)'],
      ['Triacylglycerine (TAG)', 'Glycerol + 3 Fettsäuren', 'Energiespeicher (~9 kcal/g)', 'Butter, Öle, Speicherfett'],
      ['Glycerophospholipide', 'PC, PE, PS, PI', 'Membranlipide, Signaling', 'Phosphatidylcholin (Lecithin)'],
      ['Sphingophospholipide', 'SM (Sphingomyelin)', 'Myelinscheiden, Lipid Rafts', 'Sphingomyelin (Nervenzellen)'],
      ['Cerebroside', 'Glucocerebrosid, Galactocerebrosid', 'Myelinscheiden (Nervenzellen)', 'Galactocerebrosid'],
      ['Ganglioside', 'GM1, GM2, GM3...', 'Zellerkennung, Signaling', 'GM1 (Cholera-Toxin-Rez.), Blutgruppen'],
      ['Steroide', 'Cholesterin, Steroidhormone, Vitamine', 'Membranfluidität, Hormone, Signaling', 'Cholesterin, Cortisol, Testosteron, Vit D'],
      ['Eikosanoide', 'PG, TXA, LT, Prostacyclin', 'Entzündung, Schmerz, Hämostaase', 'Prostaglandin E2, Thromboxan A2'],
    ],
    tags: {}
  },
  kohlenhydrate_vergleich: {
    title: 'Wichtige Di- und Polysaccharide',
    vl: 'b10',
    headers: ['Verbindung', 'Bindung', 'Monomere', 'Funktion / Vorkommen'],
    rows: [
      ['Maltose', 'α(1→4)', 'Glukose + Glukose', 'Abbauprodukt der Stärke, Bier'],
      ['Lactose', 'β(1→4)', 'Galaktose + Glukose', 'Milchzucker; Spaltung durch Laktase'],
      ['Saccharose', 'α(1↔β2)', 'Glukose + Fruktose', 'Haushaltszucker; kein reduzierendes Ende'],
      ['Stärke (Amylose)', 'α(1→4)', 'Glukose (unverzweigt)', 'Pflanzlicher Energiespeicher'],
      ['Stärke (Amylopektin)', 'α(1→4) + α(1→6)', 'Glukose (verzweigt alle ~24-30)', 'Pflanzlicher Energiespeicher'],
      ['Glykogen', 'α(1→4) + α(1→6)', 'Glukose (stark verzweigt alle ~8-12)', 'Tier. Energiespeicher (Leber, Muskel)'],
      ['Cellulose', 'β(1→4)', 'Glukose', 'Pflanzenzellwand; von Menschen nicht verdaubar'],
      ['Chitin', 'β(1→4)', 'N-Acetylglukosamin', 'Insekten-Exoskelett, Pilzzellwand'],
    ],
    tags: {}
  },
  nukleotide_tabelle: {
    title: 'DNA vs. RNA im Vergleich',
    vl: 'b09',
    headers: ['Merkmal', 'DNA', 'RNA'],
    rows: [
      ['Zucker', 'Desoxyribose (kein 2\'-OH)', 'Ribose (2\'-OH)'],
      ['Basen', 'A, G, C, Thymin (T)', 'A, G, C, Uracil (U)'],
      ['Strang', 'Doppelstrang (i.d.R.)', 'Einzelstrang (i.d.R.)'],
      ['Stabilität', 'Stabiler (kein 2\'-OH)', 'Weniger stabil (2\'-OH → Hydrolyse)'],
      ['Funktion', 'Erbinformation (langzeitig)', 'Botschaft (mRNA), Katalyse (rRNA), Transport (tRNA)'],
      ['Ort', 'Zellkern, Mitochondrien', 'Zellkern + Zytoplasma'],
      ['Helix-Typ', 'B-DNA (Watson-Crick)', 'A-Form, Hairpin, Pseudoknoten etc.'],
    ],
    tags: {}
  },
  thermodynamik_tabelle: {
    title: 'Thermodynamische Kenngrößen wichtiger Reaktionen',
    vl: 'b11',
    headers: ['Reaktion', "ΔG°' (kJ/mol)", 'Typ', 'Bedeutung'],
    rows: [
      ['ATP-Hydrolyse (ATP → ADP + Pi)', '−30.5', 'Exergon', 'Treibt endergone Reaktionen an'],
      ['ATP-Synthese (ADP + Pi → ATP)', '+30.5', 'Endergon', 'Benötigt Kopplung (Atemkette)'],
      ['Glukose-Oxidation (Glykolyse + CA + Atmung)', '−2840', 'Sehr exergon', 'Hauptenergiequelle'],
      ['Fettsäure-Oxidation (Palmitat)', '−9770', 'Sehr exergon', '~2.4× mehr als Glukose/g'],
      ['Knallgasreaktion (2H₂ + O₂ → 2H₂O)', '−237', 'Exergon', 'Standard-Referenzreaktion'],
      ['Laktat → Pyruvat (LDH)', '+25.1', 'Endergon (→ Pyruvat)', 'Reversibel, konzentrationsabh.'],
    ],
    tags: { 'Exergon': 'tag-green', 'Sehr exergon': 'tag-green', 'Endergon': 'tag-red' }
  },
};
