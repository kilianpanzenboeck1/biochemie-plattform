// =========================================================
// ANATOMIE 1 – DPU Vorklinik
// Modul: Bewegungsapparat & Topographische Anatomie
// =========================================================

// =========================================================
// META
// =========================================================
const AN_META = {
an01: { label: ‘Zelle & Gewebe’, color: ‘tag-teal’,   group: ‘Grundlagen’ },
an02: { label: ‘Knochen & Knorpel’, color: ‘tag-blue’,   group: ‘Grundlagen’ },
an03: { label: ‘Gelenke’,        color: ‘tag-purple’, group: ‘Grundlagen’ },
an04: { label: ‘Skelettmuskel’,  color: ‘tag-orange’, group: ‘Bewegungsapparat’ },
an05: { label: ‘Wirbelsäule’,    color: ‘tag-green’,  group: ‘Bewegungsapparat’ },
an06: { label: ‘Thorax’,         color: ‘tag-indigo’, group: ‘Rumpf’ },
an07: { label: ‘Schulter & Arm’, color: ‘tag-rose’,   group: ‘Obere Extremität’ },
an08: { label: ‘Unterarm & Hand’,color: ‘tag-yellow’, group: ‘Obere Extremität’ },
an09: { label: ‘Becken & Hüfte’, color: ‘tag-teal’,   group: ‘Untere Extremität’ },
an10: { label: ‘Knie & Unterschenkel’, color: ‘tag-blue’, group: ‘Untere Extremität’ },
an11: { label: ‘Fuß’,            color: ‘tag-purple’, group: ‘Untere Extremität’ },
an12: { label: ‘Neuroanatomie Grundlagen’, color: ‘tag-red’, group: ‘Neuroanatomie’ },
};

// =========================================================
// OVERVIEW DATA
// =========================================================
const AN_OVERVIEW = {
an01: {
title: ‘Zelle & Gewebe’,
themes: [
{ icon: ‘🔬’, title: ‘Zellbiologie’, points: [‘Zellmembran: Lipiddoppelschicht mit Proteinen’, ‘Zellorganellen: Mitochondrien, ER, Golgi, Lysosomen’, ‘Zellzyklus: G1 – S – G2 – M-Phase’, ‘Apoptose vs. Nekrose: programmierter vs. pathologischer Zelltod’] },
{ icon: ‘🧫’, title: ‘Grundgewebe’, points: [‘Epithelgewebe: Oberflächen- und Drüsenepithel’, ‘Bindegewebe: locker, straff, Fettgewebe, Knorpel, Knochen’, ‘Muskelgewebe: Skelett-, Herz-, glatte Muskulatur’, ‘Nervengewebe: Neurone und Gliazellen’] },
{ icon: ‘🧬’, title: ‘Histologie Grundlagen’, points: [‘H&E-Färbung: Hämatoxylin (basophil) – Eosin (azidophil)’, ‘Lichtmikroskopie vs. Elektronenmikroskopie’, ‘Fixierung mit Formalin erhält Zellstruktur’, ‘Paraffinschnitt als Standardverfahren’] },
{ icon: ‘⚡’, title: ‘Zell-Zell-Verbindungen’, points: [‘Tight Junctions (Zonula occludens): Abdichtung’, ‘Gap Junctions: elektrische Kopplung’, ‘Desmosomen: mechanische Verankerung’, ‘Hemidesmosomen: Verbindung zur Basalmembran’] },
]
},
an02: {
title: ‘Knochen & Knorpel’,
themes: [
{ icon: ‘🦴’, title: ‘Knochentypen’, points: [‘Röhrenknochen: Diaphyse, Epiphyse, Metaphyse’, ‘Plattenknochen: Schädel, Schulterblatt, Rippen’, ‘Kurzknochen: Handwurzel, Fußwurzel’, ‘Kompakta (Kortikalis) vs. Spongiosa (Trabekel)’] },
{ icon: ‘🔧’, title: ‘Knochenstruktur’, points: [‘Havers-System (Osteon): konzentrische Lamellen’, ‘Havers-Kanal: enthält Gefäße und Nerven’, ‘Volkmann-Kanäle: verbinden Havers-Kanäle quer’, ‘Periost: äußere Knochenhaut (gefäßreich, Wachstum)’] },
{ icon: ‘⚗️’, title: ‘Knochenstoffwechsel’, points: [‘Osteoblasten: Knochenaufbau (osteoid → mineralisiert)’, ‘Osteoklasten: Knochenabbau (RANK-L Signalweg)’, ‘Osteozyten: eingemauerte Osteoblasten, Mechanorezeptoren’, ‘Remodeling: Balance Auf- und Abbau (gestört bei Osteoporose)’] },
{ icon: ‘🧪’, title: ‘Knorpeltypen’, points: [‘Hyaliner Knorpel: Gelenke, Rippenknorpel, Trachea’, ‘Faserknorpel: Bandscheiben, Symphysis pubica’, ‘Elastischer Knorpel: Ohrmuschel, Epiglottis’, ‘Kein Perichondrium am Gelenkknorpel!’] },
]
},
an03: {
title: ‘Gelenke (Arthrologie)’,
themes: [
{ icon: ‘🔗’, title: ‘Gelenktypen’, points: [‘Synarthrose: kein Gelenkspalt (Naht, Symphyse, Synchondrose)’, ‘Diarthrose (echtes Gelenk): Gelenkspalt, Kapsel, Knorpel’, ‘Amphiarthrose: straffe Bandverbindung, wenig Bewegung’, ‘Einteilung nach Bewegungsachsen: 1-, 2-, 3-achsig’] },
{ icon: ‘🏋️’, title: ‘Gelenkmechanik’, points: [‘Freiheitsgrade: Flexion/Extension, Ab-/Adduktion, Rotation’, ‘Scharniergelenk (Ginglymus): 1-achsig (Ellbogen, Knie)’, ‘Kugelgelenk (Articulatio spheroidea): 3-achsig (Schulter, Hüfte)’, ‘Sattelgelenk: 2-achsig (Daumensattelgelenk)’] },
{ icon: ‘🛡️’, title: ‘Gelenkstruktur’, points: [‘Gelenkkapsel: Stratum fibrosum + Stratum synoviale’, ‘Synovialflüssigkeit: Hyaluronsäure-reich, Ernährung und Schmierung’, ‘Gelenkknorpel: hyalin, avaskulär, keine Nerven’, ‘Menisken: Verbesserung der Kongruenz (Knie, Kiefergelenk)’] },
{ icon: ‘⚡’, title: ‘Gelenkpathologie Grundlagen’, points: [‘Arthrose: degenerativer Knorpelabbau’, ‘Arthritis: entzündliche Gelenkerkrankung (z.B. rheumatoid)’, ‘Luxation: vollständige Trennung der Gelenkflächen’, ‘Subluxation: unvollständige Dislokation’] },
]
},
an04: {
title: ‘Skelettmuskel’,
themes: [
{ icon: ‘💪’, title: ‘Muskelaufbau’, points: [‘Muskel → Muskelbündel → Muskelfaser → Myofibrille → Sarkomere’, ‘Sarkomere: A-Band, I-Band, H-Zone, M-Linie, Z-Scheibe’, ‘Aktin (dünn) und Myosin (dick): Gleitfilamenttheorie’, ‘Sarkoplasmatisches Retikulum: Ca²⁺-Speicher’] },
{ icon: ‘⚡’, title: ‘Kontraktion’, points: [‘Aktin-Myosin-Zyklus: ATP-abhängig’, ‘Troponin-Tropomyosin: Ca²⁺-abhängige Regulation’, ‘Motorische Einheit: ein Motoneuron + seine Muskelfasern’, ‘Tetanus: Summation von Zuckungen bei hoher Frequenz’] },
{ icon: ‘🏃’, title: ‘Fasertypen’, points: [‘Typ I (slow twitch, rot): ausdauernd, oxidativ, ermüdungsresistent’, ‘Typ II a: schnell, oxidativ-glykolytisch’, ‘Typ II b/x: sehr schnell, glykolytisch, schnell ermüdend’, ‘Ausdauertraining → mehr Typ I; Krafttraining → Typ II Hypertrophie’] },
{ icon: ‘🔧’, title: ‘Muskel-Sehnen-Übergang’, points: [‘Sehne: straffes kollagenfaseriges Bindegewebe’, ‘Enthese: Sehnenansatz am Knochen (faserknorpelig)’, ‘Bursa: Schleimbeutel, Reibungsreduktion’, ‘Sehnenscheide: Gleitlager für lange Sehnen’] },
]
},
an05: {
title: ‘Wirbelsäule’,
themes: [
{ icon: ‘🦴’, title: ‘Aufbau der Wirbelsäule’, points: [‘7 Halswirbel (C1–C7), 12 Brustwirbel (T1–T12)’, ‘5 Lendenwirbel (L1–L5), Sakrum (S1–S5), Steißbein’, ‘Physiologische Krümmungen: Lordose (HWS, LWS), Kyphose (BWS, Sakrum)’, ‘Pathologisch: Hyperlordose, Hyperkyphose, Skoliose’] },
{ icon: ‘🔗’, title: ‘Wirbelaufbau’, points: [‘Wirbelkörper + Wirbelbögen = Foramen vertebrale (Wirbelkanal)’, ‘Processus spinosus, transversus, articularis’, ‘Atlas (C1): kein Körper, Massa lateralis’, ‘Axis (C2): Dens axis (Drehpunkt Kopfrotation)’] },
{ icon: ‘🛡️’, title: ‘Bandscheiben’, points: [‘Nucleus pulposus: gallertartig, 80% Wasser’, ‘Anulus fibrosus: konzentrische Kollagenlamellen’, ‘Funktion: Stoßdämpfer und Beweglichkeit’, ‘Bandscheibenvorfall: Nucleus pulposus tritt durch Anulus’] },
{ icon: ‘⚡’, title: ‘Ligamente der Wirbelsäule’, points: [‘Lig. longitudinale anterius & posterius: Vorder- und Hinterkante der WK’, ‘Ligg. flava: verbinden Wirbelbögen (elastin-reich)’, ‘Ligg. interspinalia & supraspinale: zwischen Dornfortsätzen’, ‘Membrana tectoria: kraniale Fortsetzung des Lig. long. posterius’] },
]
},
an06: {
title: ‘Thorax’,
themes: [
{ icon: ‘🫀’, title: ‘Thoraxskelett’, points: [‘12 Rippen: echte (1–7), falsche (8–10), freie (11–12)’, ‘Sternum: Manubrium, Corpus, Xiphoid’, ‘Angulus Ludovici (Manubrium-Corpus): Höhe T4/5, Karina, Aortenbogen’, ‘Rippen-Sternum-Verbindung: Synchondrose (hyaliner Knorpel)’] },
{ icon: ‘💨’, title: ‘Atemmuskulatur’, points: [‘Zwerchfell: wichtigster Inspirationsmuskel, N. phrenicus (C3–C5)’, ‘Mm. intercostales externi: Inspiration’, ‘Mm. intercostales interni: Exspiration’, ‘Accessorische Muskeln: Mm. scaleni, Sternocleidomastoideus’] },
{ icon: ‘🔍’, title: ‘Interkostalraum’, points: [‘VAN-Regel (von oben): Vena, Arteria, Nervus unter der Rippe’, ‘Pleurahöhle: Pleura parietalis und visceralis’, ‘Pleurarezessus: Sinus costodiaphragmaticus (tiefste Stelle)’, ‘Thorakozentese: immer oberhalb des unteren Rippenrandes!’] },
{ icon: ‘🏥’, title: ‘Klinische Relevanz’, points: [‘Rippenfraktur: häufig 5.–9. Rippe’, ‘Pneumothorax: Luft im Pleuraspalt → Lungenkollaps’, ‘Serienfraktur (Fensterbrust): paradoxe Atmung’, ‘Perikarderguss: Herzsilhouette auf Röntgen vergrößert’] },
]
},
an07: {
title: ‘Schulter & Arm’,
themes: [
{ icon: ‘🦾’, title: ‘Schultergelenk’, points: [‘Articulatio humeri: Kugelgelenk, 3 Freiheitsgrade’, ‘Caput humeri vs. Cavitas glenoidalis (inkongruent!)’, ‘Rotatorenmanschette: Supraspinatus, Infraspinatus, Teres minor, Subscapularis’, ‘Labrum glenoidale: vertieft die Pfanne, SLAP-Läsion möglich’] },
{ icon: ‘🔗’, title: ‘Schultergürtel’, points: [‘Clavicula: einzige knöcherne Verbindung Arm–Rumpf’, ‘AC-Gelenk (Akromioklavikulargelenk): häufig luxiert’, ‘SC-Gelenk (Sternoklavikulargelenk): Drehpunkt des Schultergürtels’, ‘Scapula: Glenoid, Akromion, Coracoid, Fossa supra-/infraspinata’] },
{ icon: ‘💪’, title: ‘Armmuskeln’, points: [‘M. deltoideus: Abduktion (Supraspinatus startet 0–15°)’, ‘M. biceps brachii: Flexion + Supination’, ‘M. triceps brachii: Extension im Ellbogen’, ‘Arteria axillaris → brachialis → radialis + ulnaris’] },
{ icon: ‘⚡’, title: ‘Plexus brachialis’, points: [‘Wurzeln C5–T1: Nn. axillaris, musculocutaneus, radialis, medianus, ulnaris’, ‘N. axillaris (C5/6): M. deltoideus, Sensibilität Schulterregion’, ‘N. radialis (C5–T1): Extensoren, Fallhand bei Läsion’, ‘N. medianus (C6–T1): Schwurhand; N. ulnaris: Krallenhand’] },
]
},
an08: {
title: ‘Unterarm & Hand’,
themes: [
{ icon: ‘🤝’, title: ‘Unterarmknochen’, points: [‘Radius (lateral) und Ulna (medial)’, ‘Proximales Radioulnargelenk: Rotation (Pronation/Supination)’, ‘Membrana interossea antebrachii: verbindet Radius und Ulna’, ‘Proc. styloideus radii & ulnae: palpierbar, klinische Orientierungspunkte’] },
{ icon: ‘✋’, title: ‘Handwurzelknochen’, points: [‘Proximale Reihe: Skaphoid, Lunatum, Triquetrum, Pisiforme’, ‘Distale Reihe: Trapezium, Trapezoid, Kapitatum, Hamatum’, ‘Skaphoid: häufigster Handwurzelknochen-Fraktur (Sturz auf Hand)’, ‘Karpaltunnel: 9 Sehnen + N. medianus (Karpaltunnelsyndrom!)’] },
{ icon: ‘🎯’, title: ‘Handmuskeln’, points: [‘Thenar: Daumenballenmuskulatur (N. medianus)’, ‘Hypothenar: Kleinfingerballenmuskulatur (N. ulnaris)’, ‘Mm. lumbricales & interossei: Feinmotorik (N. ulnaris > medianus)’, ‘Greifarten: Präzisionsgriff (Fingerkuppen) vs. Kraftgriff’] },
{ icon: ‘🔬’, title: ‘Sehnenfächer’, points: [‘6 Sehnenfächer am Handgelenk dorsal (Retinaculum extensorum)’, ‘Tabatière anatomique: Skaphoid-Fraktur-Schmerz’, ‘Flexor digitorum superficialis und profundus: Beuger’, ‘Trigger Finger: stenosierendes Sehnenscheidenentzündung’] },
]
},
an09: {
title: ‘Becken & Hüfte’,
themes: [
{ icon: ‘🦴’, title: ‘Beckenring’, points: [‘Os coxae = Ilium + Ischium + Pubis (Fusion nach Pubertät)’, ‘Symphysis pubica: Faserknorpel’, ‘Iliosakralgelenk: Amphiarthrose, wenig Bewegung’, ‘Kleines vs. großes Becken: Linea terminalis als Grenze’] },
{ icon: ‘🚺’, title: ‘Geschlechtsunterschiede’, points: [‘Weibliches Becken: breiter, flacher, Arcus pubicus > 90°’, ‘Männliches Becken: enger, tiefer, Arcus pubicus < 70°’, ‘Conjugata vera (Hebammenmaß): 11 cm minimum für Geburt’, ‘Querdurchmesser Beckeneingang: 13 cm (Frau)’] },
{ icon: ‘🏃’, title: ‘Hüftgelenk’, points: [‘Nuss-Kugelgelenk: tiefes Acetabulum → sehr stabil’, ‘Labrum acetabulare: vertieft die Pfanne zusätzlich’, ‘Fovea capitis: Bandansatz (Lig. capitis femoris, A. obturatoria)’, ‘Coxarthrose: häufigste große Gelenksarthrose’] },
{ icon: ‘💪’, title: ‘Hüftmuskeln’, points: [‘Gluteus maximus: stärkster Extensor (N. gluteus inferior)’, ‘Gluteus medius & minimus: Abduktion + Stabilisierung (Trendelenburg!)’, ‘Tractus iliotibialis: Zuggurtung lateral’, ‘Hüftbeuger: M. iliopsoas (N. femoralis + Plexus lumbalis)’] },
]
},
an10: {
title: ‘Knie & Unterschenkel’,
themes: [
{ icon: ‘🦵’, title: ‘Kniegelenk’, points: [‘Größtes Gelenk des Körpers: Femorotibialgelenk + Femoropatellargelenk’, ‘Menisci medialis & lateralis: verbessern Kongruenz, stoßdämpfend’, ‘Kreuzbänder: VKB (N-Zug) verhindert anteriore Tibia-Translation’, ‘Kollateralbänder: MCL und LCL stabilisieren medial/lateral’] },
{ icon: ‘🎯’, title: ‘Kniebandapparat’, points: [‘Vorderes Kreuzband (VKB): häufigste schwere Bandverletzung’, ‘Hinteres Kreuzband (HKB): stärker als VKB’, ‘Schubladen-Test: anterior (VKB) und posterior (HKB)’, ‘Unhappy Triad: VKB + Meniskus medialis + MCL’] },
{ icon: ‘🦴’, title: ‘Unterschenkelknochen’, points: [‘Tibia (medial, gewichtstragend) + Fibula (lateral, kein Gewicht)’, ‘Membrana interossea cruris’, ‘Malleolus medialis (Tibia) und lateralis (Fibula): Sprunggabel’, ‘Fibulafraktur: häufig bei Supinationstrauma’] },
{ icon: ‘💪’, title: ‘Unterschenkelmuskeln’, points: [‘Vorderes Kompartiment: Dorsalextensoren (N. peroneus profundus)’, ‘Laterales Kompartiment: Peronei, Eversion (N. peroneus superficialis)’, ‘Hinteres Kompartiment (oberflächl.): Wadenmuskulatur, Plantarflexion’, ‘M. triceps surae: Gastrocnemius + Soleus → Achillessehne’] },
]
},
an11: {
title: ‘Fuß’,
themes: [
{ icon: ‘🦶’, title: ‘Fußskelett’, points: [‘Tarsus (7 Knochen): Talus, Calcaneus, Os naviculare, 3 Cuneiformia, Os cuboideum’, ‘Metatarsus (5 Knochen), Phalangen (14)’, ‘Chopart-Linie: zwischen Tarsus (Talus+Calcaneus vs. Rest)’, ‘Lisfranc-Linie: Tarsometatarsalgelenke’] },
{ icon: ‘🏗️’, title: ‘Fußgewölbe’, points: [‘Längsgewölbe (medial höher): Talus als Schlussstein’, ‘Quergewölbe: Cuneiformia + Metatarsalebasen’, ‘Plattfuß (Pes planus): fehlendes Längsgewölbe’, ‘Hohlfuß (Pes cavus): überhöhtes Gewölbe’] },
{ icon: ‘⚽’, title: ‘Sprunggelenke’, points: [‘OSG (Articulatio talocruralis): Scharniergelenk, Dorsalext./Plantarflex.’, ‘USG: Inversion/Eversion (Umknick-Gelenk)’, ‘Außenbänder: ATFL, CFL, PTFL (häufig rupturiert bei Supination)’, ‘Syndesmosenriss: zwischen Tibia und Fibula’] },
{ icon: ‘🔧’, title: ‘Fußmuskeln’, points: [‘Intrinsische Muskeln: 4 Schichten plantar’, ‘M. extensor digitorum brevis: einziger dorsaler intrinsischer Muskel’, ‘Plantarfaszie: spannt Längsgewölbe (Plantarfasziitis!)’, ‘Hallux valgus: Deviation der Großzehe lateral > 15°’] },
]
},
an12: {
title: ‘Neuroanatomie Grundlagen’,
themes: [
{ icon: ‘🧠’, title: ‘ZNS-Aufbau’, points: [‘Zerebraler Kortex: 6 Schichten (Neokortex)’, ‘Gyri und Sulci vergrößern Oberfläche (Faltung)’, ‘Subkortikale Strukturen: Basalganglien, Thalamus, Hypothalamus’, ‘Kleinhirn: Gleichgewicht, Koordination, Feinabstimmung’] },
{ icon: ‘🔗’, title: ‘PNS & Nervenleitung’, points: [‘Somatisches NS: willkürliche Motorik und bewusste Sensorik’, ‘Autonomes NS: Sympathikus (fight or flight) vs. Parasympathikus’, ‘31 Spinalnerven (8C, 12T, 5L, 5S, 1Co)’, ‘Nervenfasertypen: A-alpha (schnell), A-delta, C (langsam, Schmerz)’] },
{ icon: ‘⚡’, title: ‘Aktionspotenzial’, points: [‘Ruhemembranpotenzial: –70 mV’, ‘Depolarisation: Na⁺-Einstrom (Schwelle ca. –55 mV)’, ‘Repolarisation: K⁺-Ausstrom’, ‘Saltatorische Leitung: Ranvier-Schnürringe (Myelinscheide)’] },
{ icon: ‘🏥’, title: ‘Klinische Neuroanatomie’, points: [‘Dermatom: Hautareal eines Spinalnerven’, ‘Myotom: Muskelgruppe eines Spinalnerven’, ‘Referred Pain: viszeraler Schmerz in somatisches Dermatom projiziert’, ‘Brown-Séquard-Syndrom: ipsilaterale Motorik + kontralaterale Schmerz-/Temperaturausfall’] },
]
},
};

// =========================================================
// KARTEIKARTEN
// =========================================================
const AN_CARDS = [
// AN01 – Zelle & Gewebe
{ id:‘an01_1’, vl:‘an01’, cat:‘Zellbiologie’, q:‘Welche 4 Grundgewebe gibt es im menschlichen Körper?’, a:‘1. Epithelgewebe (Deckung, Absorption, Sekretion)\n2. Bindegewebe (Stütz-, Verbindungs-, Transportfunktion)\n3. Muskelgewebe (Kontraktion)\n4. Nervengewebe (Erregungsleitung, -verarbeitung)’ },
{ id:‘an01_2’, vl:‘an01’, cat:‘Histologie’, q:‘Was zeigt die H&E-Färbung? Welche Strukturen färben sich wie?’, a:‘Hämatoxylin: basophil → blau-violett → Zellkerne, rER, Ribosomen\nEosin: azidophil → rosa → Zytoplasma, Kollagen, Muskeln\nMerke: “Kern ist lila, Rest ist rosa”’ },
{ id:‘an01_3’, vl:‘an01’, cat:‘Zell-Zell-Verbindungen’, q:‘Was sind Tight Junctions und wo sind sie besonders wichtig?’, a:‘Tight Junctions (Zonula occludens): verschmelzen Außenblätter der Zellmembranen benachbarter Zellen.\nFunktion: parazellulären Transport blockieren.\nWichtig in: Darmepithel, Blut-Hirn-Schranke, Harnblase’ },
{ id:‘an01_4’, vl:‘an01’, cat:‘Histologie’, q:‘Welche Unterschiede gibt es zwischen einschichtigem und mehrschichtigem Epithel?’, a:‘Einschichtig: alle Zellen berühren Basalmembran (z.B. Darmepithel, Endothel)\nMehrschichtig: nur Basalschicht berührt BM, oberflächliche Schichten verhornen ggf. (z.B. Haut)\nPseudogeschichtet: einschichtig, aber Kerne auf verschiedenen Höhen (z.B. Trachea)’ },

// AN02 – Knochen & Knorpel
{ id:‘an02_1’, vl:‘an02’, cat:‘Knochenstruktur’, q:‘Was ist ein Osteon (Havers-System)? Nenne seine Bestandteile.’, a:‘Struktureinheit der Kompakta.\nAufbau:\n• Havers-Kanal: zentral, enthält Blutgefäße und Nerven\n• Konzentrische Knochenlamellen drumherum\n• Osteozytenlakusen: zwischen Lamellen\n• Kanalikuli: verbinden Lakunen untereinander und mit Havers-Kanal’ },
{ id:‘an02_2’, vl:‘an02’, cat:‘Knochenstoffwechsel’, q:‘Was ist der Unterschied zwischen Osteoblasten und Osteoklasten?’, a:‘Osteoblasten:\n• Aus mesenchymalen Stammzellen\n• Bilden Osteoid (Kollagen I + Proteoglykane)\n• Mineralisierung durch Hydroxylapatit\n\nOsteoklasten:\n• Aus Monozyten-Makrophagen-Linie\n• Mehrkernig, sehr groß\n• Bilden Howship-Lakunen, RANK-L-Signalweg aktiviert sie’ },
{ id:‘an02_3’, vl:‘an02’, cat:‘Knochenentwicklung’, q:‘Was ist der Unterschied zwischen desmaler und chondraler Ossifikation?’, a:‘Desmale Ossifikation (direkt): Mesenchymzellen → Osteoblasten → Knochen. Beispiel: Schädelkalotte, Clavicula\n\nEnchondrale Ossifikation (indirekt): Knorpelmodell → Vaskularisierung → Verknöcherung. Beispiel: Röhrenknochen. Wachstum an Wachstumsfuge (Epiphysenfuge)’ },
{ id:‘an02_4’, vl:‘an02’, cat:‘Knorpeltypen’, q:‘Welche 3 Knorpeltypen gibt es? Nenne je ein Beispiel.’, a:‘1. Hyaliner Knorpel: Gelenkflächen, Rippenknorpel, Trachea, embryonales Skelett\n2. Faserknorpel: Bandscheiben (Nucleus + Anulus), Symphysis pubica, Menisken\n3. Elastischer Knorpel: Ohrmuschel, Epiglottis, Tuba auditiva\n\nMerke: Kein Perichondrium am Gelenkknorpel → schlechte Regeneration!’ },

// AN03 – Gelenke
{ id:‘an03_1’, vl:‘an03’, cat:‘Gelenktypen’, q:‘Was unterscheidet eine Synarthrose von einer Diarthrose?’, a:‘Synarthrose (unechtes Gelenk): kein Gelenkspalt, kaum/keine Bewegung\n• Naht (Sutura): z.B. Schädelnähte\n• Synchondrose: z.B. Rippenknorpel\n• Symphyse: z.B. Symphysis pubica\n\nDiarthrose (echtes Gelenk): Gelenkspalt, Gelenkknorpel, Kapsel, Synovialflüssigkeit’ },
{ id:‘an03_2’, vl:‘an03’, cat:‘Gelenkmechanik’, q:‘Nenne die Gelenktypen nach Achsenzahl mit je einem Beispiel.’, a:‘1-achsig:\n• Scharniergelenk (Ginglymus): Ellbogen, Fingergelenke\n• Zapfengelenk: Atlantoaxialgelenk (C1/C2)\n\n2-achsig:\n• Eigelenk (Kondylengelenk): Radiokarpalgelenk\n• Sattelgelenk: Daumensattelgelenk (CMC I)\n\n3-achsig:\n• Kugelgelenk: Schulter, Hüfte (Nussgelenk = tiefes Kugelgelenk)’ },
{ id:‘an03_3’, vl:‘an03’, cat:‘Gelenkstruktur’, q:‘Welche Funktion hat die Synovialflüssigkeit?’, a:‘Synovialflüssigkeit (Synovia):\n• Schmierung: reduziert Reibung der Gelenkflächen\n• Ernährung: avaskulärer Gelenkknorpel erhält Nährstoffe durch Diffusion\n• Immunschutz: Makrophagen in der Synovialmembran\n\nBesteht aus: Hyaluronsäure, Lubricin, Proteinen\nBei Arthritis: entzündlich verändert, erhöhtes Volumen’ },

// AN04 – Skelettmuskel
{ id:‘an04_1’, vl:‘an04’, cat:‘Muskelaufbau’, q:‘Erkläre den Aufbau des Sarkomer von Z-Scheibe zu Z-Scheibe.’, a:‘Z-Scheibe – I-Band (nur Aktin) – A-Band (Aktin + Myosin) – H-Zone (nur Myosin) – M-Linie (Myosin-Mitte) – A-Band – I-Band – Z-Scheibe\n\nBei Kontraktion: I-Band und H-Zone werden kürzer, A-Band bleibt gleich!\nMerke: “I shrink, H shrinks, A stays”’ },
{ id:‘an04_2’, vl:‘an04’, cat:‘Kontraktion’, q:‘Wie funktioniert der Aktin-Myosin-Zyklus? (4 Schritte)’, a:‘1. Myosinkopf (ADP+Pi gebunden) bindet an Aktin: Rigor\n2. Power Stroke: Myosinkopf klappt, bewegt Aktin, ADP+Pi wird freigesetzt\n3. ATP bindet → Myosinkopf löst sich von Aktin\n4. ATP-Hydrolyse → gespannter Zustand, Zyklus beginnt neu\n\nCa²⁺ öffnet Troponin-Tropomyosin → Bindungsstelle frei’ },
{ id:‘an04_3’, vl:‘an04’, cat:‘Fasertypen’, q:‘Was sind die Unterschiede zwischen Typ-I- und Typ-II-Muskelfasern?’, a:‘Typ I (slow, rot):\n• Langsam, oxidativ, viele Mitochondrien\n• Myoglobin-reich (rot), ermüdungsresistent\n• Ausdauerleistung, Haltungsmuskeln\n\nTyp II (fast, weiß):\n• Schnell, glykolytisch, wenig Mitochondrien\n• Schnelle Kraft, schnell ermüdend\n• Typ IIa: intermediär; Typ IIx: am schnellsten’ },

// AN05 – Wirbelsäule
{ id:‘an05_1’, vl:‘an05’, cat:‘Wirbelsäule’, q:‘Welche physiologischen Krümmungen hat die Wirbelsäule?’, a:‘Lordose (nach ventral konvex):\n• Halswirbelsäule (HWS): C1–C7\n• Lendenwirbelsäule (LWS): L1–L5\n\nKyphose (nach dorsal konvex):\n• Brustwirbelsäule (BWS): T1–T12\n• Sakrum & Steißbein\n\nMerke: “Lord, kyphos = Herr Buckel liegt auf dem Bauch”’ },
{ id:‘an05_2’, vl:‘an05’, cat:‘Bandscheiben’, q:‘Was sind Nucleus pulposus und Anulus fibrosus?’, a:‘Nucleus pulposus:\n• Gallertartiger Kern, embryonal aus Chorda dorsalis\n• 80% Wasser (nimmt mit Alter ab)\n• Druckverteilung, Stoßdämpfer\n\nAnulus fibrosus:\n• Konzentrische Kollagen-II-Lamellen\n• Hält Nucleus pulposus\n• Bei Prolaps: Nucleus drückt durch Risse → Radikulopathie’ },
{ id:‘an05_3’, vl:‘an05’, cat:‘Atlas und Axis’, q:‘Was unterscheidet Atlas (C1) und Axis (C2) von anderen Halswirbeln?’, a:‘Atlas (C1):\n• Kein Wirbelkörper, nur Massae laterales + 2 Bögen\n• Articulatio atlantooccipitalis: Nicken (Ja-Bewegung)\n\nAxis (C2):\n• Dens axis (Zahn): ragt in Atlas\n• Articulatio atlantoaxialis: Rotation (Nein-Bewegung)\n• Dens-Fraktur: Gefahr für Rückenmark!’ },

// AN06 – Thorax
{ id:‘an06_1’, vl:‘an06’, cat:‘Thoraxskelett’, q:‘Was sind echte, falsche und freie Rippen?’, a:‘Echte Rippen (1–7): direkter Knorpelansatz am Sternum\nFalsche Rippen (8–10): Knorpel vereinigt sich mit Rippe 7 → Rippenbogen\nFreie/schwimmende Rippen (11–12): kein ventraler Ansatz\n\nKlinisch: Rippenfraktur häufig 5.–9. Rippe (Schutzzone)’ },
{ id:‘an06_2’, vl:‘an06’, cat:‘Atemmuskulatur’, q:‘Welche Muskeln sind an der Inspiration beteiligt?’, a:‘Hauptmuskel: Zwerchfell (Diaphragma)\n• N. phrenicus (C3–5): “C3, 4, 5 keeps the diaphragm alive”\n• Kontraktion → Zwerchfell senkt sich → Thoraxraum ↑\n\nAkzessorisch bei tiefer Inspiration:\n• Mm. intercostales externi\n• Mm. scaleni\n• M. sternocleidomastoideus\n• Mm. pectorales’ },
{ id:‘an06_3’, vl:‘an06’, cat:‘Interkostalraum’, q:‘Was besagt die VAN-Regel beim Interkostalraum?’, a:‘VAN: Von oben nach unten im ICR unter der Rippe:\n• V = Vena intercostalis (oberste)\n• A = Arteria intercostalis\n• N = Nervus intercostalis (unterste)\n\nKlinische Relevanz: Thorakozentese/Drainage IMMER am Oberrand der unteren Rippe → Schutz der Gefäß-Nerven-Bündel!’ },

// AN07 – Schulter & Arm
{ id:‘an07_1’, vl:‘an07’, cat:‘Rotatorenmanschette’, q:‘Welche Muskeln bilden die Rotatorenmanschette? (SITS)’, a:‘S – Supraspinatus: Abduktion 0–15°, Fixierung des Caput humeri\nI – Infraspinatus: Außenrotation\nT – Teres minor: Außenrotation\nS – Subscapularis: Innenrotation\n\nFunktion: stabilisieren das Schultergelenk (Caput humeri in Pfanne)\nHäufigste Ruptur: Supraspinatus (Impingement)’ },
{ id:‘an07_2’, vl:‘an07’, cat:‘Plexus brachialis’, q:‘Aus welchen Wurzeln entsteht der Plexus brachialis? Nenne 3 wichtige Nerven.’, a:‘Wurzeln: C5–T1\n\nN. radialis (C5–T1): alle Extensoren, Fallhand bei Läsion (Humerusschaft-Fraktur)\nN. medianus (C6–T1): Fingerflexoren, Thenar, Schwurhand bei Läsion\nN. ulnaris (C8–T1): Hypothenar, Interossei, Krallenhand (4.+5. Finger)\n\nN. axillaris (C5/6): M. deltoideus, Sensibilität Schulter (Humerushals-Fraktur!)’ },
{ id:‘an07_3’, vl:‘an07’, cat:‘Schultergelenk’, q:‘Warum ist das Schultergelenk so beweglich aber instabil?’, a:‘Schultergelenk = inkongruentes Kugelgelenk:\n• Caput humeri: sehr groß\n• Cavitas glenoidalis: sehr flach, klein\n• Verhältnis Kopf:Pfanne ≈ 3:1\n\nStabilisatoren:\n• Statisch: Labrum glenoidale, Kapselbänder\n• Dynamisch: Rotatorenmanschette (wichtigster!)\n• Häufigste Luxationsrichtung: anterior-inferior’ },

// AN08 – Unterarm & Hand
{ id:‘an08_1’, vl:‘an08’, cat:‘Handwurzelknochen’, q:‘Nenne die 8 Handwurzelknochen in korrekter Reihenfolge.’, a:‘Eselsbrücke: “Ein Lump Trieb Prostitution, Trug Tiefe Christliche Haltung”\nProximal (radial→ulnar): Skaphoid, Lunatum, Triquetrum, Pisiforme\nDistal (radial→ulnar): Trapezium, Trapezoid, Kapitatum, Hamatum\n\nKlinisch: Skaphoid = häufigste Fraktur, Tastschmerz in Tabatière anatomique!’ },
{ id:‘an08_2’, vl:‘an08’, cat:‘Karpaltunnel’, q:‘Was enthält der Karpaltunnel und was ist das Karpaltunnelsyndrom?’, a:‘Karpaltunnel = unter dem Retinaculum flexorum:\n• 9 Sehnen: FDS (4×) + FDP (4×) + FPL (1×)\n• N. medianus\n\nKarpaltunnelsyndrom (KTS):\n• Kompression des N. medianus → Parästhesien 1.–3. Finger + radialer 4.\n• Nachtschmerzen, Thenar-Atrophie\n• Diagnose: Tinel-Zeichen, Phalen-Test’ },

// AN09 – Becken & Hüfte
{ id:‘an09_1’, vl:‘an09’, cat:‘Hüftgelenk’, q:‘Was ist das Trendelenburg-Zeichen und warum entsteht es?’, a:‘Trendelenburg-Zeichen: beim Einbeinstand sinkt die Hüfte der Gegenseite ab.\n\nUrsache: Schwäche/Läsion von M. gluteus medius + minimus\n(Abduktoren stabilisieren normalerweise Becken beim Gehen)\n\nLäsion von N. gluteus superior (L4–S1)\nVorkommen: Hüftarthrose, N. gluteus superior-Schaden, Duchenne-Hinken’ },
{ id:‘an09_2’, vl:‘an09’, cat:‘Becken’, q:‘Was ist der Unterschied zwischen weiblichem und männlichem Becken?’, a:‘Weibliches Becken:\n• Breiter, flacher, oval\n• Arcus pubicus > 90° (subpubischer Winkel)\n• Conjugata vera > 11 cm\n• Angepasst für Geburt\n\nMännliches Becken:\n• Enger, tiefer, herzförmig\n• Arcus pubicus < 70°\n• Muskelansätze deutlicher ausgeprägt’ },

// AN10 – Knie & Unterschenkel
{ id:‘an10_1’, vl:‘an10’, cat:‘Kniegelenk’, q:‘Was ist die Unhappy Triad? Wie entsteht sie?’, a:‘Unhappy Triad: gleichzeitige Verletzung von:\n1. Vorderes Kreuzband (VKB)\n2. Mediales Kollateralband (MCL)\n3. Medialer Meniskus\n\nMechanismus: Außenrotation + Valgus-Stress (typisch Kontaktsport, z.B. Fußball)\nErinnerungshilfe: “Unhappy = alles medial + VKB”’ },
{ id:‘an10_2’, vl:‘an10’, cat:‘Kniebänder’, q:‘Was testen Schubladen-Test, Lachman-Test und Valgus/Varus-Stress?’, a:‘Schubladen-Test: 90° Flexion\n• Anteriore Schublade → VKB\n• Posteriore Schublade → HKB\n\nLachman-Test: 20–30° Flexion, sensitiver für VKB\n\nValgus-Stress-Test: mediales Kollateralband (MCL)\nVarus-Stress-Test: laterales Kollateralband (LCL)’ },
{ id:‘an10_3’, vl:‘an10’, cat:‘Wadenmuskulatur’, q:‘Was bildet der M. triceps surae und wohin inseriert er?’, a:‘M. triceps surae = 3 Köpfe:\n1. M. gastrocnemius, Caput mediale (Femur, medial)\n2. M. gastrocnemius, Caput laterale (Femur, lateral)\n3. M. soleus (Tibia und Fibula)\n\nGemeinsame Sehne: Tendo calcaneus (Achillessehne)\nAnsatz: Tuber calcanei (Fersenbein)\nFunktion: Plantarflexion, Gastrocnemius zusätzlich Knieflexion’ },

// AN11 – Fuß
{ id:‘an11_1’, vl:‘an11’, cat:‘Fußgewölbe’, q:‘Welche Strukturen spannen das mediale Längsgewölbe?’, a:‘Passiv:\n• Plantarfaszie (Plantaraponeurose): Windlass-Mechanismus\n• Bänder: Lig. plantare longum, Lig. calcaneonaviculare (Pfannenband)\n\nAktiv:\n• M. tibialis posterior: wichtigster Gewölbe-Stabilisator\n• Kurze Fußmuskeln\n• M. peroneus longus: verstärkt das Quergewölbe\n\nBei Tibialis-posterior-Insuffizienz → erworbener Plattfuß!’ },
{ id:‘an11_2’, vl:‘an11’, cat:‘Sprunggelenke’, q:‘Was sind OSG und USG und welche Bewegungen finden dort statt?’, a:‘OSG (Articulatio talocruralis):\n• Zwischen Tibia, Fibula (Sprungbein-Gabel) und Talus\n• Scharniergelenk, 1-achsig\n• Dorsalextension (~20°) und Plantarflexion (~50°)\n\nUSG (subtalares Gelenk):\n• Talus auf Calcaneus\n• Inversion und Eversion\n• Beim Umknicken: meist Supination → ATFL-Ruptur (häufigstes Band)’ },

// AN12 – Neuroanatomie
{ id:‘an12_1’, vl:‘an12’, cat:‘Aktionspotenzial’, q:‘Beschreibe die Phasen des Aktionspotenzials.’, a:‘1. Ruhemembranpotenzial: –70 mV (K⁺ raus, Na⁺ rein tendenz)\n2. Depolarisation: Schwellenreiz → Na⁺-Kanäle öffnen → Einstrom → –55 mV → Spike bis +30 mV\n3. Repolarisation: K⁺-Kanäle öffnen → Ausstrom\n4. Hyperpolarisation: K⁺-Kanäle schließen langsam → kurz unter –70 mV\n5. Refraktärphase: absolut (kein AP möglich) → relativ (nur mit starkem Reiz)’ },
{ id:‘an12_2’, vl:‘an12’, cat:‘Dermatome’, q:‘Was sind Dermatome und warum sind sie klinisch wichtig?’, a:‘Dermatom: Hautareal, das von einem Spinalnerven sensibel versorgt wird.\n\nKlinische Relevanz:\n• Bandscheibenvorfälle: L4 (Knie), L5 (Großzehe, Fußrücken), S1 (Ferse, Fußaußenrand)\n• Herpes zoster: Entzündung entlang eines Dermatoms (Gürtelrose)\n• Referred Pain: Herzinfarkt → linker Arm (C8–T1)\n• Diagnostik von Rückenmarkschädigungen’ },
{ id:‘an12_3’, vl:‘an12’, cat:‘Nervenleitung’, q:‘Was ist saltatorische Erregungsleitung?’, a:‘Saltatorische Leitung: “sprinzende” Weiterleitung des APs von Schnürring zu Schnürring.\n\nVoraussetzung: Myelinscheide (gebildet von Schwann-Zellen im PNS, Oligodendrozyten im ZNS)\nRanvier-Schnürringe: Unterbrechungen der Myelinscheide\n\nVorteil:\n• Viel schneller: bis 120 m/s (vs. < 2 m/s unmyelinisiert)\n• Energiesparend: Na⁺/K⁺-ATPase nur an Schnürringen nötig\n\nBei Demyelinisierung (Multiple Sklerose): Leitungsverlangsamung/-block’ },
];

// =========================================================
// QUIZ
// =========================================================
const AN_QUIZ = [
// AN01
{ id:‘anq01_1’, vl:‘an01’, q:‘Was beschreibt die H&E-Färbung?’, opts:[‘Hämatoxylin färbt Kollagen rot, Eosin färbt Zellkerne blau’,‘Hämatoxylin färbt Zellkerne blau-violett, Eosin färbt Zytoplasma rosa’,‘Beide Farbstoffe färben Zellkerne blau’,‘Hämatoxylin färbt Fett, Eosin färbt Nukleinsäuren’], correct:1, exp:‘H&E-Färbung: Hämatoxylin (basophil) → Zellkerne blau-violett; Eosin (azidophil) → Zytoplasma und Kollagen rosa.’ },
{ id:‘anq01_2’, vl:‘an01’, q:‘Welche Verbindung dichtet Epithelzellen parazellulär ab?’, opts:[‘Desmosomen’,‘Gap Junctions’,‘Tight Junctions (Zonula occludens)’,‘Hemidesmosomen’], correct:2, exp:‘Tight Junctions (Zonula occludens) verschmelzen die Außenblätter benachbarter Membranen und verhindern so den parazellulären Transport.’ },

// AN02
{ id:‘anq02_1’, vl:‘an02’, q:‘Was beschreibt das Havers-System (Osteon)?’, opts:[‘Einheit der Spongiosa mit Trabekeln’,‘Struktureinheit der Kompakta mit Havers-Kanal und konzentrischen Lamellen’,‘Wachstumszone an der Epiphyse’,‘Verbindung zwischen zwei Knochen’], correct:1, exp:‘Das Osteon (Havers-System) ist die Struktureinheit der Kompakta: ein zentraler Havers-Kanal (Gefäße, Nerven) umgeben von konzentrischen Knochenlamellen.’ },
{ id:‘anq02_2’, vl:‘an02’, q:‘Welcher Knorpeltyp kommt in Bandscheiben und der Symphysis pubica vor?’, opts:[‘Hyaliner Knorpel’,‘Elastischer Knorpel’,‘Faserknorpel’,‘Verknöcherter Knorpel’], correct:2, exp:‘Faserknorpel (mit reichlich Kollagen Typ I) findet sich in mechanisch stark beanspruchten Strukturen wie Bandscheiben und der Schambeinfuge.’ },

// AN03
{ id:‘anq03_1’, vl:‘an03’, q:‘Ein Daumensattelgelenk ist ein…’, opts:[‘1-achsiges Scharniergelenk’,‘2-achsiges Sattelgelenk’,‘3-achsiges Kugelgelenk’,‘2-achsiges Eigelenk’], correct:1, exp:‘Das Daumensattelgelenk (CMC I) ist ein 2-achsiges Sattelgelenk und ermöglicht Flexion/Extension sowie Ab-/Adduktion, nicht jedoch vollständige Rotation.’ },

// AN04
{ id:‘anq04_1’, vl:‘an04’, q:‘Welches Band ändert seine Länge NICHT bei Kontraktion des Sarkomer?’, opts:[‘I-Band’,‘H-Zone’,‘A-Band’,‘Z-Scheiben-Abstand’], correct:2, exp:‘Beim Gleitfilamentmodell bleibt das A-Band (Myosinlänge) konstant. I-Band und H-Zone werden kürzer, weil Aktin über Myosin gleitet.’ },
{ id:‘anq04_2’, vl:‘an04’, q:‘Welche Muskelfasern sind ausdauernd und oxidativ?’, opts:[‘Typ II b’,‘Typ II a’,‘Typ I (slow twitch)’,‘Alle Typen gleich’], correct:2, exp:‘Typ-I-Fasern (slow twitch, rote Fasern) sind reich an Myoglobin und Mitochondrien, arbeiten oxidativ und sind sehr ermüdungsresistent.’ },

// AN05
{ id:‘anq05_1’, vl:‘an05’, q:‘Welche Bewegung findet hauptsächlich im Atlantoaxialgelenk (C1/C2) statt?’, opts:[‘Nickbewegung (Flexion)’,‘Rotation (“Nein-sagen”)’,‘Seitneigung’,‘Extensionsbewegung’], correct:1, exp:‘Im Atlantoaxialgelenk rotiert der Atlas um den Dens axis → Kopfrotation (Nein-Bewegung). Das Atlantookzipitalgelenk ermöglicht das Nicken.’ },

// AN06
{ id:‘anq06_1’, vl:‘an06’, q:‘Nach der VAN-Regel liegt die Arteria intercostalis…’, opts:[‘Oberhalb der Rippe’,‘Am Unterrand der Rippe, zwischen Vene und Nerv’,‘Am Unterrand der Rippe als unterste Struktur’,‘Inmitten des Interkostalmuskels ohne feste Lage’], correct:1, exp:‘VAN = Vene (oben), Arterie (mitte), Nerv (unten) – alle am Unterrand der Rippe. Thorakozentese am Oberrand der unteren Rippe zum Schutz!’ },

// AN07
{ id:‘anq07_1’, vl:‘an07’, q:‘Welcher Nerv wird bei einer Humerusschaft-Fraktur häufig verletzt?’, opts:[‘N. medianus’,‘N. ulnaris’,‘N. radialis’,‘N. musculocutaneus’], correct:2, exp:‘N. radialis verläuft im Sulcus nervi radialis am Humerusschaft und ist daher bei Diaphysenfrakturen oft mitbetroffen → Fallhand (Extensionsausfall).’ },
{ id:‘anq07_2’, vl:‘an07’, q:‘Welcher Muskel ist der wichtigste Abduktor der Schulter ab 15° Abduktion?’, opts:[‘Supraspinatus’,‘M. deltoideus’,‘M. infraspinatus’,‘M. biceps brachii’], correct:1, exp:‘M. deltoideus ist der stärkste Abduktor. Supraspinatus initiiert die ersten 0–15°. Bei Supraspinatus-Ruptur ist 0–15° schmerzhaft/unmöglich (schmerzhafter Bogen).’ },

// AN08
{ id:‘anq08_1’, vl:‘an08’, q:‘Welcher Handwurzelknochen ist am häufigsten frakturiert?’, opts:[‘Lunatum’,‘Triquetrum’,‘Skaphoid (Kahnbein)’,‘Kapitatum’], correct:2, exp:‘Das Skaphoid (Os scaphoideum) bricht am häufigsten, typisch beim Sturz auf die ausgestreckte Hand. Risiko: avaskuläre Nekrose durch schlechte Blutversorgung.’ },

// AN09
{ id:‘anq09_1’, vl:‘an09’, q:‘Was bedeutet ein positives Trendelenburg-Zeichen?’, opts:[‘Knieschmerz beim Einbeinstand’,‘Becken sinkt auf der Standbeinseite’,‘Becken sinkt auf der Gegenseite des Standbeins’,‘Unfähigkeit zu stehen’], correct:2, exp:‘Beim positiven Trendelenburg-Zeichen sinkt die Gegenseite (Spielbeinseite) ab → Insuffizienz der ipsilateralen Abduktoren (Gluteus medius/minimus, N. gluteus superior).’ },

// AN10
{ id:‘anq10_1’, vl:‘an10’, q:‘Was testet der Lachman-Test?’, opts:[‘Medialer Meniskus’,‘Hinteres Kreuzband’,‘Vorderes Kreuzband’,‘Laterales Kollateralband’], correct:2, exp:‘Der Lachman-Test (Knie 20–30° Flexion, anteriore Translation der Tibia) ist der sensitivste Test für eine VKB-Ruptur.’ },

// AN11
{ id:‘anq11_1’, vl:‘an11’, q:‘Welche Struktur wird beim typischen “Umknicken” (Supination) am häufigsten verletzt?’, opts:[‘Lig. deltoideum’,‘Mediales Kollateralband’,‘Lig. talofibulare anterius (ATFL)’,‘Syndesmose’], correct:2, exp:‘Das ATFL (Lig. talofibulare anterius) ist das schwächste der Außenbänder und das am häufigsten gerissene Band beim Supinationstrauma.’ },

// AN12
{ id:‘anq12_1’, vl:‘an12’, q:‘Was bewirkt die Myelinscheide bei der Nervenleitung?’, opts:[‘Verlangsamung der Leitung’,‘Saltatorische Leitung: schneller und energiesparender’,‘Ermöglicht erst das Aktionspotenzial’,‘Blockiert die K⁺-Kanäle’], correct:1, exp:‘Myelin isoliert den Axon. Das AP “springt” von Ranvier-Schnürring zu Schnürring (saltatorisch) → bis 120 m/s, energiesparend (Na⁺/K⁺-ATPase nur an Schnürringen).’ },
];

// =========================================================
// TABELLEN
// =========================================================
const AN_TABLES = {
an02: [
{
title: ‘Knochen vs. Knorpel – Vergleich’,
headers: [‘Merkmal’, ‘Knochen’, ‘Hyaliner Knorpel’],
rows: [
[‘Hauptprotein’, ‘Kollagen I’, ‘Kollagen II’],
[‘Mineralisierung’, ‘Hydroxylapatit (65%)’, ‘Keine’],
[‘Zellen’, ‘Osteoblasten / Osteoklasten / Osteozyten’, ‘Chondrozyten’],
[‘Gefäßversorgung’, ‘Gut (Havers-Kanäle)’, ‘Avaskulär’],
[‘Regeneration’, ‘Gut (Periost)’, ‘Schlecht’],
[‘Hülle’, ‘Periost’, ‘Perichondrium (außer Gelenk!)’],
]
},
{
title: ‘Knorpeltypen im Überblick’,
headers: [‘Typ’, ‘Hauptmatrix’, ‘Perichondrium’, ‘Vorkommen’],
rows: [
[‘Hyalin’, ‘Kollagen II, Proteoglykane’, ‘Ja (außer Gelenk)’, ‘Gelenke, Trachea, Rippenknorpel’],
[‘Faser’, ‘Kollagen I dominiert’, ‘Nein’, ‘Bandscheiben, Symphyse, Menisken’],
[‘Elastisch’, ‘Kollagen II + Elastin’, ‘Ja’, ‘Ohrmuschel, Epiglottis’],
]
}
],
an04: [
{
title: ‘Muskelfasertypen’,
headers: [‘Merkmal’, ‘Typ I’, ‘Typ IIa’, ‘Typ IIx’],
rows: [
[‘Geschwindigkeit’, ‘Langsam’, ‘Mittel-schnell’, ‘Sehr schnell’],
[‘Ermüdung’, ‘Resistent’, ‘Intermediär’, ‘Schnell’],
[‘Metabolismus’, ‘Oxidativ’, ‘Oxidativ-glykolytisch’, ‘Glykolytisch’],
[‘Farbe’, ‘Rot’, ‘Rot-weiß’, ‘Weiß’],
[‘Mitochondrien’, ‘Viele’, ‘Mittel’, ‘Wenige’],
[‘Einsatz’, ‘Ausdauer, Haltung’, ‘Mittelstrecke’, ‘Sprints, Kraft’],
]
}
],
an07: [
{
title: ‘Plexus brachialis – wichtige Nerven’,
headers: [‘Nerv’, ‘Wurzeln’, ‘Motorisch’, ‘Läsion’],
rows: [
[‘N. axillaris’, ‘C5/C6’, ‘M. deltoideus, Teres minor’, ‘Deltamuskel-Atrophie, Schulterrundsein’],
[‘N. musculocutaneus’, ‘C5–C7’, ‘M. biceps, brachialis, coracobrachialis’, ‘Flexionsschwäche, Supinationsschwäche’],
[‘N. radialis’, ‘C5–T1’, ‘Alle Extensoren Arm+Hand’, ‘Fallhand (Wrist drop)’],
[‘N. medianus’, ‘C6–T1’, ‘Flexoren (außer FCU+FDP 4/5), Thenar’, ‘Schwurhand, Thenar-Atrophie, KTS’],
[‘N. ulnaris’, ‘C8–T1’, ‘FCU, FDP 4/5, Hypothenar, Interossei’, ‘Krallenhand (4.+5. Finger)’],
]
}
],
an10: [
{
title: ‘Kniebandapparat – Tests und Verletzungen’,
headers: [‘Struktur’, ‘Funktion’, ‘Klinischer Test’, ‘Typischer Mechanismus’],
rows: [
[‘VKB’, ‘Verhindert anteriore Tibia-Translation’, ‘Lachman, Schublade ant.’, ‘Hyperextension, Rotation, Valgusstress’],
[‘HKB’, ‘Verhindert posteriore Tibia-Translation’, ‘Schublade post.’, ‘Sturz auf Tibia (Dashboard-Injury)’],
[‘MCL’, ‘Mediale Stabilisierung’, ‘Valgus-Stress-Test’, ‘Valgusstress, Außenrotation’],
[‘LCL’, ‘Laterale Stabilisierung’, ‘Varus-Stress-Test’, ‘Varusstress’],
[‘Meniskus med.’, ‘Kongruenz, Stoßdämpfer’, ‘McMurray, Apley’, ‘Rotation bei gebeugtem Knie’],
]
}
],
};

// =========================================================
// MNEMONICS
// =========================================================
if (typeof MNEMONICS !== ‘undefined’) {
Object.assign(MNEMONICS, {
an01: { mnemonic: ‘🧫 Grundgewebe = E-B-M-N: “Echte Bären Mögen Nudeln” → Epithel, Bindegewebe, Muskel, Nervengewebe’ },
an02: { mnemonic: ‘🦴 Osteoblasten Bauen, Osteoklasten Kratzen (OB = Aufbau, OK = Abbau)’ },
an03: { mnemonic: ‘🔗 Gelenkachsen: “Eine Schiene – Zwei Eier – Drei Kugeln” → 1-achsig=Scharnier, 2-achsig=Ei/Sattel, 3-achsig=Kugel’ },
an04: { mnemonic: ‘💪 Sarkomere bei Kontraktion: “I and H shrink, A stays” → I-Band und H-Zone kürzer, A-Band konstant’ },
an05: { mnemonic: ‘🦴 Wirbelsäule: “Hessen Brauchen Lustig Sexy Choreos” → HWS(7), BWS(12), LWS(5), Sakrum(5), Coccyx’ },
an06: { mnemonic: ‘⚡ VAN-Regel: “Viele Autos Nerven” = Vena, Arteria, Nervus (von oben) am Rippenunterrand’ },
an07: { mnemonic: ‘💪 SITS = Rotatorenmanschette: Supraspinatus, Infraspinatus, Teres minor, Subscapularis’ },
an08: { mnemonic: ‘✋ Handwurzelknochen: “Ein Lump Trieb Prostitution, Trug Tiefe Christliche Haltung” → Sk, Lu, Tri, Pi, Tra, Trd, Ka, Ha’ },
an09: { mnemonic: ‘🏃 N. phrenicus: “C3, 4, 5 keeps the diaphragm alive!” (Ausfall → Atemlähmung!)’ },
an10: { mnemonic: ‘😢 Unhappy Triad = VKB + MCL + Meniskus medialis: “Alle drei sind medial betroffen + VKB”’ },
an11: { mnemonic: ‘🦶 OSG = Plantarflexion/Dorsalextension; USG = Inversion/Eversion: “Oben streckt, Unten dreht”’ },
an12: { mnemonic: ‘⚡ Aktionspotenzial: “Depol = Na rein, Repol = K raus” – Natrium Rein = Depolarisation’ },
});
}

// =========================================================
// LERNZIELE
// =========================================================
if (typeof LERNZIELE !== ‘undefined’) {
Object.assign(LERNZIELE, {
an01: [‘Die 4 Grundgewebe und ihre Hauptfunktionen kennen’, ‘H&E-Färbung interpretieren können’, ‘Zell-Zell-Verbindungen und ihre Funktionen erklären’, ‘Unterschied zwischen einschichtigem und mehrschichtigem Epithel kennen’],
an02: [‘Den Aufbau eines Osteons beschreiben’, ‘Osteoblasten vs. Osteoklasten unterscheiden’, ‘Die 3 Knorpeltypen mit je einem Beispiel nennen’, ‘Enchondrale vs. desmale Ossifikation unterscheiden’],
an03: [‘Synarthrose vs. Diarthrose definieren’, ‘Gelenktypen nach Achsenzahl mit Beispielen nennen’, ‘Funktion der Synovialflüssigkeit erklären’, ‘Arthrose vs. Arthritis unterscheiden’],
an04: [‘Den Aufbau des Sarkomers von Z zu Z beschreiben’, ‘Den Aktin-Myosin-Zyklus in 4 Schritten erklären’, ‘Typ I vs. Typ II Muskelfasern unterscheiden’, ‘SITS-Muskeln der Rotatorenmanschette nennen’],
an05: [‘Die Wirbelzahl pro Segment nennen’, ‘Atlas und Axis anatomisch beschreiben’, ‘Nucleus pulposus vs. Anulus fibrosus unterscheiden’, ‘Physiologische Krümmungen benennen’],
an06: [‘Echte, falsche und freie Rippen definieren’, ‘Die VAN-Regel erklären und klinisch anwenden’, ‘Das Zwerchfell und seine Innervation beschreiben’, ‘Pneumothorax anatomisch erklären’],
an07: [‘Die SITS-Muskeln der Rotatorenmanschette nennen’, ‘Plexus brachialis Wurzeln (C5–T1) kennen’, ‘N. radialis-, N. medianus- und N. ulnaris-Läsion klinisch unterscheiden’, ‘Schultergelenk: Stabilisatoren nennen’],
an08: [‘Die 8 Handwurzelknochen in Reihenfolge nennen’, ‘Inhalt des Karpaltunnels und KTS erklären’, ‘Thenar (N. medianus) vs. Hypothenar (N. ulnaris) unterscheiden’, ‘Skaphoid-Fraktur: Risiko und Diagnostik kennen’],
an09: [‘Trendelenburg-Zeichen erklären’, ‘Weibliches vs. männliches Becken unterscheiden’, ‘Das Hüftgelenk als Nussgelenk beschreiben’, ‘Gluteus medius/minimus Funktion kennen’],
an10: [‘Die Unhappy Triad nennen’, ‘Lachman-Test und Schubladen-Test erklären’, ‘M. triceps surae und Achillessehne beschreiben’, ‘Kniegelenkstabilisatoren nennen’],
an11: [‘OSG vs. USG: Lage und Bewegungen beschreiben’, ‘Das mediale Längsgewölbe und seine Stabilisatoren erklären’, ‘ATFL als häufigstes verletztes Band kennen’, ‘Hallux valgus und Plattfuß erklären’],
an12: [‘Aktionspotenzial in Phasen beschreiben’, ‘Saltatorische Leitung erklären’, ‘Dermatomkonzept klinisch anwenden (L4, L5, S1)’, ‘Somatisches vs. autonomes Nervensystem unterscheiden’],
});
}

// =========================================================
// REGISTER IN SUBJECTS
// =========================================================
if (typeof SUBJECTS !== ‘undefined’) {
SUBJECTS[‘anatomie1’] = {
id: ‘anatomie1’,
name: ‘Anatomie 1’,
subtitle: ‘DPU Vorklinik’,
icon: ‘🫀’,
accentColor: ‘#e11d48’,
localStoragePrefix: ‘anatomie1’,
sidebarGroups: [
{
id: ‘grundlagen’,
label: ‘Teil I · Grundlagen’,
color: ‘#14b8a6’,
items: [
{ vl: ‘an01’, code: ‘AN01’, title: ‘Zelle & Gewebe’ },
{ vl: ‘an02’, code: ‘AN02’, title: ‘Knochen & Knorpel’ },
{ vl: ‘an03’, code: ‘AN03’, title: ‘Gelenke’ },
{ vl: ‘an04’, code: ‘AN04’, title: ‘Skelettmuskel’ },
]
},
{
id: ‘rumpf’,
label: ‘Teil II · Rumpf & Wirbelsäule’,
color: ‘#6366f1’,
items: [
{ vl: ‘an05’, code: ‘AN05’, title: ‘Wirbelsäule’ },
{ vl: ‘an06’, code: ‘AN06’, title: ‘Thorax’ },
]
},
{
id: ‘obere’,
label: ‘Teil III · Obere Extremität’,
color: ‘#f97316’,
items: [
{ vl: ‘an07’, code: ‘AN07’, title: ‘Schulter & Arm’ },
{ vl: ‘an08’, code: ‘AN08’, title: ‘Unterarm & Hand’ },
]
},
{
id: ‘untere’,
label: ‘Teil IV · Untere Extremität’,
color: ‘#22c55e’,
items: [
{ vl: ‘an09’, code: ‘AN09’, title: ‘Becken & Hüfte’ },
{ vl: ‘an10’, code: ‘AN10’, title: ‘Knie & Unterschenkel’ },
{ vl: ‘an11’, code: ‘AN11’, title: ‘Fuß’ },
]
},
{
id: ‘neuro’,
label: ‘Teil V · Neuroanatomie’,
color: ‘#ef4444’,
items: [
{ vl: ‘an12’, code: ‘AN12’, title: ‘Neuroanatomie Grundlagen’ },
]
},
]
};
}

// =========================================================
// INJECT INTO GLOBAL DATA ARRAYS
// =========================================================
// VL_META: Plattform braucht zusätzlich `title` und `emoji`
if (typeof VL_META !== ‘undefined’) {
  const enriched = {};
  Object.keys(AN_META).forEach(vlId => {
    const m  = AN_META[vlId];
    const ov = AN_OVERVIEW[vlId];
    enriched[vlId] = {
      ...m,
      title: ov ? ov.title : m.label,
      emoji: ov && ov.themes && ov.themes[0] ? ov.themes[0].icon : ‘📚’,
    };
  });
  Object.assign(VL_META, enriched);
}

// OVERVIEW_DATA: Plattform braucht { topics: [{icon,title,color,points}] }
// anatomie_data liefert { themes: [{icon,title,points}] }
if (typeof OVERVIEW_DATA !== ‘undefined’) {
  const transformed = {};
  Object.keys(AN_OVERVIEW).forEach(vlId => {
    transformed[vlId] = {
      topics: (AN_OVERVIEW[vlId].themes || []).map(t => ({
        icon:   t.icon,
        title:  t.title,
        color:  ‘#6b7280’,
        points: t.points,
      })),
    };
  });
  Object.assign(OVERVIEW_DATA, transformed);
}

if (typeof ALL_CARDS !== ‘undefined’) ALL_CARDS.push(...AN_CARDS);
if (typeof ALL_QUIZ  !== ‘undefined’) ALL_QUIZ.push(...AN_QUIZ);
if (typeof TABLES    !== ‘undefined’) Object.assign(TABLES, AN_TABLES);

// Subject-Switcher neu rendern sobald Anatomie registriert ist
if (typeof renderSubjectSwitcher === ‘function’) renderSubjectSwitcher();