// =========================================================
// FEATURES.JS
// Fortschrittsbalken, Suchfunktion, Prüfungsmodus, Statistiken
// =========================================================

// =========================================================
// PROGRESS TRACKER (localStorage)
// =========================================================
const PROGRESS_KEY = 'biochemie_progress';
const STATS_KEY    = 'biochemie_stats';
const SRS_KEY      = 'biochemie_srs';

function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
  catch(e) { return {}; }
}
function saveProgress(p) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}
function markVLVisited(vl) {
  if (!vl || vl === 'all') return;
  const p = getProgress();
  if (!p[vl]) p[vl] = { visited: false, quizDone: false, cardsDone: false };
  p[vl].visited = true;
  saveProgress(p);
  renderProgressBar();
}
function markQuizDone(vl) {
  if (!vl || vl === 'all') return;
  const p = getProgress();
  if (!p[vl]) p[vl] = { visited: false, quizDone: false, cardsDone: false };
  p[vl].quizDone = true;
  saveProgress(p);
  renderProgressBar();
}
function markCardsDone(vl) {
  if (!vl || vl === 'all') return;
  const p = getProgress();
  if (!p[vl]) p[vl] = { visited: false, quizDone: false, cardsDone: false };
  p[vl].cardsDone = true;
  saveProgress(p);
  renderProgressBar();
}
function getTotalVLs() {
  return typeof VL_META !== 'undefined' ? Object.keys(VL_META).length : 43;
}
function getProgressPercent() {
  const p = getProgress();
  const total = getTotalVLs();
  if (total === 0) return 0;
  const visited = Object.values(p).filter(v => v.visited).length;
  return Math.round((visited / total) * 100);
}
function renderProgressBar() {
  const el = document.getElementById('progress-bar-fill');
  const label = document.getElementById('progress-bar-label');
  if (!el) return;
  const pct = getProgressPercent();
  el.style.width = pct + '%';
  const p = getProgress();
  const visited = Object.values(p).filter(v => v.visited).length;
  const total = getTotalVLs();
  if (label) label.textContent = `${visited} / ${total} VLs besucht (${pct}%)`;
  // Update nav button highlights
  Object.keys(p).forEach(vl => {
    const btn = document.querySelector(`.vl-btn[data-vl="${vl}"]`);
    if (btn) {
      btn.classList.toggle('vl-visited', !!p[vl].visited);
      btn.classList.toggle('vl-quiz-done', !!p[vl].quizDone);
    }
  });
}

// =========================================================
// STATISTICS
// =========================================================
function getStats() {
  try { return JSON.parse(localStorage.getItem(STATS_KEY) || '{"quizResults":{},"practiceCount":{},"weakCards":{}}'); }
  catch(e) { return { quizResults: {}, practiceCount: {}, weakCards: {} }; }
}
function saveStats(s) {
  localStorage.setItem(STATS_KEY, JSON.stringify(s));
}
function recordQuizResult(vl, score, total) {
  const s = getStats();
  if (!s.quizResults[vl]) s.quizResults[vl] = [];
  s.quizResults[vl].push({ score, total, date: Date.now() });
  if (s.quizResults[vl].length > 10) s.quizResults[vl].shift();
  saveStats(s);
}
function recordCardPractice(vl) {
  const s = getStats();
  s.practiceCount[vl] = (s.practiceCount[vl] || 0) + 1;
  saveStats(s);
}
function recordWeakCard(cardFront, rating) {
  const s = getStats();
  const key = cardFront.substring(0, 50);
  if (!s.weakCards[key]) s.weakCards[key] = { wieder: 0, gut: 0, perfekt: 0, front: cardFront };
  if (rating === 'wieder') s.weakCards[key].wieder++;
  else if (rating === 'gut') s.weakCards[key].gut++;
  else if (rating === 'perfekt') s.weakCards[key].perfekt++;
  saveStats(s);
}
function renderStatistiken() {
  const container = document.getElementById('page-statistiken');
  if (!container) return;
  const s = getStats();
  const p = getProgress();
  const srs = getSRS();

  // Visited VLs
  const visitedVLs = Object.entries(p).filter(([,v]) => v.visited).map(([k]) => k);
  const quizDoneVLs = Object.entries(p).filter(([,v]) => v.quizDone).map(([k]) => k);

  // Weak cards (top 5 by "wieder" count)
  const weakEntries = Object.values(s.weakCards || {})
    .filter(c => c.wieder > 0)
    .sort((a, b) => b.wieder - a.wieder)
    .slice(0, 5);

  // SRS due cards
  const now = Date.now();
  const dueCards = Object.values(srs).filter(c => (c.nextReview || 0) <= now).length;
  const totalSRS = Object.keys(srs).length;

  // Quiz average per VL
  const quizSummary = Object.entries(s.quizResults || {}).map(([vl, results]) => {
    const avg = results.reduce((a, r) => a + (r.score / r.total * 100), 0) / results.length;
    const meta = typeof VL_META !== 'undefined' ? VL_META[vl] : null;
    return { vl, label: meta ? meta.label : vl.toUpperCase(), avg: Math.round(avg), count: results.length };
  }).sort((a, b) => a.avg - b.avg);

  let html = `
    <div class="stats-page">
      <h2 class="stats-title">📊 Statistiken &amp; Lernfortschritt</h2>

      <div class="stats-grid">
        <div class="stat-card stat-card-blue">
          <div class="stat-number">${visitedVLs.length}</div>
          <div class="stat-label">VLs besucht</div>
          <div class="stat-sub">von ${getTotalVLs()} gesamt</div>
        </div>
        <div class="stat-card stat-card-green">
          <div class="stat-number">${quizDoneVLs.length}</div>
          <div class="stat-label">Quizze absolviert</div>
        </div>
        <div class="stat-card stat-card-orange">
          <div class="stat-number">${dueCards}</div>
          <div class="stat-label">Karten fällig</div>
          <div class="stat-sub">von ${totalSRS} im SRS</div>
        </div>
        <div class="stat-card stat-card-red">
          <div class="stat-number">${weakEntries.length}</div>
          <div class="stat-label">Schwache Karten</div>
          <div class="stat-sub">öfter "Wieder" geklickt</div>
        </div>
      </div>

      ${quizSummary.length > 0 ? `
      <div class="stats-section">
        <h3>📈 Quiz-Ergebnisse pro VL</h3>
        <div class="quiz-results-list">
          ${quizSummary.map(r => `
            <div class="quiz-result-row">
              <span class="qr-label">${r.label}</span>
              <div class="qr-bar-wrap">
                <div class="qr-bar" style="width:${r.avg}%;background:${r.avg >= 80 ? 'var(--green)' : r.avg >= 50 ? 'var(--orange)' : 'var(--red)'}"></div>
              </div>
              <span class="qr-pct">${r.avg}%</span>
              <span class="qr-count">(${r.count}×)</span>
            </div>
          `).join('')}
        </div>
      </div>
      ` : '<div class="stats-empty">Noch keine Quiz-Ergebnisse. Starte ein Quiz um Statistiken zu sehen!</div>'}

      ${weakEntries.length > 0 ? `
      <div class="stats-section">
        <h3>⚠️ Schwächste Karten (häufig "Wieder")</h3>
        <div class="weak-cards-list">
          ${weakEntries.map(c => `
            <div class="weak-card-row">
              <span class="wc-front">${c.front.substring(0, 70)}${c.front.length > 70 ? '…' : ''}</span>
              <span class="wc-stats">
                <span class="tag-red" style="padding:2px 6px;border-radius:4px;font-size:11px">Wieder: ${c.wieder}</span>
                <span class="tag-yellow" style="padding:2px 6px;border-radius:4px;font-size:11px;margin-left:4px">Gut: ${c.gut}</span>
                <span class="tag-green" style="padding:2px 6px;border-radius:4px;font-size:11px;margin-left:4px">Perfekt: ${c.perfekt}</span>
              </span>
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}

      ${visitedVLs.length > 0 ? `
      <div class="stats-section">
        <h3>✅ Besuchte VLs</h3>
        <div class="visited-vls">
          ${visitedVLs.map(vl => {
            const meta = typeof VL_META !== 'undefined' ? VL_META[vl] : null;
            const tagClass = meta ? meta.color : 'tag-blue';
            return `<span class="pill ${tagClass}" style="margin:2px">${meta ? meta.label : vl.toUpperCase()}</span>`;
          }).join('')}
        </div>
      </div>
      ` : ''}

      <div class="stats-section">
        <button class="btn-secondary" onclick="resetAllStats()" style="font-size:12px;opacity:0.7">Statistiken zurücksetzen</button>
      </div>
    </div>
  `;
  container.innerHTML = html;
}
function resetAllStats() {
  if (!confirm('Alle Statistiken zurücksetzen?')) return;
  localStorage.removeItem(STATS_KEY);
  localStorage.removeItem(PROGRESS_KEY);
  localStorage.removeItem(SRS_KEY);
  renderProgressBar();
  renderStatistiken();
}

// =========================================================
// SRS (Spaced Repetition System)
// =========================================================
function getSRS() {
  try { return JSON.parse(localStorage.getItem(SRS_KEY) || '{}'); }
  catch(e) { return {}; }
}
function saveSRS(s) {
  localStorage.setItem(SRS_KEY, JSON.stringify(s));
}
function getSRSKey(card) {
  return (card.vl + '__' + card.front).substring(0, 80).replace(/\s+/g,'_');
}
function updateSRS(card, rating) {
  const srs = getSRS();
  const key = getSRSKey(card);
  const now = Date.now();
  const DAY = 86400000;
  let entry = srs[key] || { interval: 1, easeFactor: 2.5, repetitions: 0, nextReview: now };

  recordWeakCard(card.front, rating);

  if (rating === 'wieder') {
    entry.interval = 1;
    entry.repetitions = 0;
    entry.easeFactor = Math.max(1.3, entry.easeFactor - 0.2);
  } else if (rating === 'gut') {
    if (entry.repetitions === 0) entry.interval = 1;
    else if (entry.repetitions === 1) entry.interval = 6;
    else entry.interval = Math.round(entry.interval * entry.easeFactor);
    entry.easeFactor = Math.max(1.3, entry.easeFactor - 0.15 + 0.1);
    entry.repetitions++;
  } else { // perfekt
    if (entry.repetitions === 0) entry.interval = 1;
    else if (entry.repetitions === 1) entry.interval = 6;
    else entry.interval = Math.round(entry.interval * entry.easeFactor);
    entry.easeFactor = Math.min(3.5, entry.easeFactor + 0.1);
    entry.repetitions++;
  }
  entry.nextReview = now + entry.interval * DAY;
  srs[key] = entry;
  saveSRS(srs);
  return entry;
}
function getDueCards() {
  const srs = getSRS();
  const now = Date.now();
  const allCards = typeof ALL_CARDS !== 'undefined' ? ALL_CARDS : [];
  return allCards.filter(card => {
    const key = getSRSKey(card);
    const entry = srs[key];
    if (!entry) return true; // never reviewed = due
    return entry.nextReview <= now;
  });
}

// =========================================================
// PRÜFUNGSMODUS
// =========================================================
let pruefungCards = [];
let pruefungIdx = 0;
let pruefungFlipped = false;
let pruefungMode = 'all'; // 'all' | 'due'
let pruefungVLFilter = 'all';
let pruefungSession = { total: 0, wieder: 0, gut: 0, perfekt: 0 };

function initPruefung() {
  renderPruefung();
}

function startPruefungSession() {
  const mode = document.getElementById('pruefung-mode-select')?.value || 'all';
  const vlFilter = document.getElementById('pruefung-vl-select')?.value || 'all';
  pruefungMode = mode;
  pruefungVLFilter = vlFilter;
  pruefungSession = { total: 0, wieder: 0, gut: 0, perfekt: 0 };
  pruefungIdx = 0;
  pruefungFlipped = false;

  let pool = typeof ALL_CARDS !== 'undefined' ? [...ALL_CARDS] : [];
  if (vlFilter !== 'all') {
    pool = pool.filter(c => c.vl === vlFilter);
  }
  if (mode === 'due') {
    const due = getDueCards();
    const dueKeys = new Set(due.map(c => getSRSKey(c)));
    pool = pool.filter(c => dueKeys.has(getSRSKey(c)));
    if (pool.length === 0) {
      document.getElementById('pruefung-content').innerHTML = `
        <div class="pruefung-empty">
          <div style="font-size:48px">🎉</div>
          <h3>Keine fälligen Karten!</h3>
          <p>Alle Karten wurden bereits gelernt. Wähle "Alle Karten" für eine neue Session.</p>
        </div>`;
      return;
    }
  }

  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  pruefungCards = pool.slice(0, Math.min(pool.length, 50));
  pruefungSession.total = pruefungCards.length;
  renderPruefungCard();
}

function renderPruefung() {
  const el = document.getElementById('pruefung-content');
  if (!el) return;

  const allVLs = typeof VL_META !== 'undefined' ? Object.keys(VL_META) : [];
  const vlOptions = allVLs.map(vl => {
    const meta = VL_META[vl];
    return `<option value="${vl}">${meta.label} – ${meta.title}</option>`;
  }).join('');

  el.innerHTML = `
    <div class="pruefung-setup">
      <h2>🎓 Prüfungsmodus</h2>
      <p>Lerne mit Spaced Repetition (SRS) — bewerte jede Karte und das System plant die nächste Wiederholung optimal.</p>

      <div class="pruefung-options">
        <div class="pruefung-option-group">
          <label for="pruefung-vl-select">Vorlesung:</label>
          <select id="pruefung-vl-select" class="pruefung-select">
            <option value="all">Alle VLs</option>
            ${vlOptions}
          </select>
        </div>
        <div class="pruefung-option-group">
          <label for="pruefung-mode-select">Karten:</label>
          <select id="pruefung-mode-select" class="pruefung-select">
            <option value="all">Alle Karten</option>
            <option value="due">Nur fällige Karten (SRS)</option>
          </select>
        </div>
      </div>

      <button class="pruefung-start-btn" onclick="startPruefungSession()">
        Prüfung starten →
      </button>

      <div class="srs-info">
        <h4>Wie funktioniert SRS?</h4>
        <div class="srs-rating-demo">
          <span class="srs-btn-demo srs-wieder">Wieder</span> Noch nicht gewusst → morgen wiederholen
        </div>
        <div class="srs-rating-demo">
          <span class="srs-btn-demo srs-gut">Gut</span> Gewusst mit Mühe → in einigen Tagen
        </div>
        <div class="srs-rating-demo">
          <span class="srs-btn-demo srs-perfekt">Perfekt</span> Sofort gewusst → in Wochen
        </div>
      </div>
    </div>
  `;
}

function renderPruefungCard() {
  const el = document.getElementById('pruefung-content');
  if (!el) return;

  if (pruefungIdx >= pruefungCards.length) {
    renderPruefungSummary();
    return;
  }

  const card = pruefungCards[pruefungIdx];
  const srs = getSRS();
  const key = getSRSKey(card);
  const entry = srs[key];
  const meta = typeof VL_META !== 'undefined' ? VL_META[card.vl] : null;
  const tagClass = meta ? meta.color : 'tag-blue';
  const progress = pruefungIdx + 1;
  const pct = Math.round((pruefungIdx / pruefungCards.length) * 100);

  const daysUntil = entry && entry.nextReview > Date.now()
    ? Math.round((entry.nextReview - Date.now()) / 86400000)
    : null;

  el.innerHTML = `
    <div class="pruefung-session">
      <div class="pruefung-progress-row">
        <span class="pruefung-counter">${progress} / ${pruefungCards.length}</span>
        <div class="pruefung-prog-bar"><div class="pruefung-prog-fill" style="width:${pct}%"></div></div>
        <span class="pruefung-score-mini">
          <span style="color:var(--red)">✗ ${pruefungSession.wieder}</span>
          <span style="color:var(--orange);margin-left:6px">~ ${pruefungSession.gut}</span>
          <span style="color:var(--green);margin-left:6px">✓ ${pruefungSession.perfekt}</span>
        </span>
      </div>

      <div class="pruefung-card ${pruefungFlipped ? 'flipped' : ''}" id="pruefung-flashcard" onclick="flipPruefungCard()">
        <div class="pruefung-card-inner">
          <div class="pruefung-card-front">
            <div class="pruefung-card-meta">
              <span class="pill ${tagClass}">${meta ? meta.label : card.vl.toUpperCase()}</span>
              <span class="pruefung-cat" style="font-size:12px;opacity:0.6;margin-left:8px">${card.cat}</span>
              ${daysUntil !== null ? `<span style="font-size:11px;opacity:0.5;margin-left:8px">nächste WH in ${daysUntil}d</span>` : ''}
            </div>
            <div class="pruefung-card-question">${card.front}</div>
            <div class="pruefung-flip-hint">Klicken zum Aufdecken ↓</div>
          </div>
          <div class="pruefung-card-back">
            <div class="pruefung-card-meta">
              <span class="pill ${tagClass}">${meta ? meta.label : card.vl.toUpperCase()}</span>
              <span class="pruefung-cat" style="font-size:12px;opacity:0.6;margin-left:8px">${card.cat}</span>
            </div>
            <div class="pruefung-card-answer">${card.back}</div>
          </div>
        </div>
      </div>

      ${pruefungFlipped ? `
      <div class="pruefung-rating">
        <p style="text-align:center;opacity:0.7;margin-bottom:12px;font-size:14px">Wie gut wusstest du es?</p>
        <div class="pruefung-rating-btns">
          <button class="pruefung-rate-btn pruefung-wieder" onclick="ratePruefungCard('wieder')">
            <span>✗</span> Wieder<br><small>Nicht gewusst</small>
          </button>
          <button class="pruefung-rate-btn pruefung-gut" onclick="ratePruefungCard('gut')">
            <span>~</span> Gut<br><small>Mit Mühe gewusst</small>
          </button>
          <button class="pruefung-rate-btn pruefung-perfekt" onclick="ratePruefungCard('perfekt')">
            <span>✓</span> Perfekt<br><small>Sofort gewusst</small>
          </button>
        </div>
      </div>
      ` : `
      <div class="pruefung-rating">
        <p style="text-align:center;opacity:0.5;font-size:13px">Karte aufdecken um zu bewerten</p>
      </div>
      `}
    </div>
  `;
}

function flipPruefungCard() {
  pruefungFlipped = !pruefungFlipped;
  renderPruefungCard();
}

function ratePruefungCard(rating) {
  const card = pruefungCards[pruefungIdx];
  updateSRS(card, rating);
  pruefungSession[rating]++;
  // For 'wieder', add card back later
  if (rating === 'wieder' && pruefungCards.length < 100) {
    const reinsertAt = Math.min(pruefungCards.length, pruefungIdx + 3 + Math.floor(Math.random() * 3));
    pruefungCards.splice(reinsertAt, 0, { ...card });
  }
  pruefungIdx++;
  pruefungFlipped = false;
  renderPruefungCard();
}

function renderPruefungSummary() {
  const el = document.getElementById('pruefung-content');
  if (!el) return;
  const s = pruefungSession;
  const pct = s.total > 0 ? Math.round((s.perfekt / (pruefungSession.wieder + pruefungSession.gut + pruefungSession.perfekt || 1)) * 100) : 0;

  el.innerHTML = `
    <div class="pruefung-summary">
      <div style="font-size:56px;text-align:center">${pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '📚'}</div>
      <h2>Session abgeschlossen!</h2>
      <div class="summary-stats">
        <div class="sum-stat sum-wieder"><div class="sum-num">${s.wieder}</div><div class="sum-lbl">Wieder</div></div>
        <div class="sum-stat sum-gut"><div class="sum-num">${s.gut}</div><div class="sum-lbl">Gut</div></div>
        <div class="sum-stat sum-perfekt"><div class="sum-num">${s.perfekt}</div><div class="sum-lbl">Perfekt</div></div>
      </div>
      <p style="text-align:center;font-size:18px;margin:16px 0">
        <strong>${pct}%</strong> der Karten sofort gewusst
      </p>
      <div class="summary-btns">
        <button class="pruefung-start-btn" onclick="renderPruefung()">Neue Session</button>
        <button class="btn-secondary" onclick="switchToTab('statistiken')" style="margin-left:12px">Statistiken anzeigen</button>
      </div>
    </div>
  `;
  // Record stats
  if (pruefungVLFilter !== 'all') {
    recordQuizResult(pruefungVLFilter, s.perfekt, s.total);
    markQuizDone(pruefungVLFilter);
  }
  renderProgressBar();
}

// =========================================================
// SUCHFUNKTION
// =========================================================
let searchDebounce = null;

function initSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('input', () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(runSearch, 200);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      hideSearchResults();
    }
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    const panel = document.getElementById('search-results-panel');
    const bar = document.getElementById('search-bar-wrap');
    if (panel && bar && !bar.contains(e.target)) {
      hideSearchResults();
    }
  });
}

function runSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;
  const q = input.value.trim().toLowerCase();
  const panel = document.getElementById('search-results-panel');
  if (!panel) return;

  if (q.length < 2) {
    panel.style.display = 'none';
    panel.innerHTML = '';
    return;
  }

  const results = [];

  // Search flashcards
  if (typeof ALL_CARDS !== 'undefined') {
    ALL_CARDS.forEach(card => {
      if (card.front.toLowerCase().includes(q) || card.back.toLowerCase().includes(q)) {
        const meta = typeof VL_META !== 'undefined' ? VL_META[card.vl] : null;
        results.push({
          type: 'card',
          vl: card.vl,
          title: card.front,
          preview: card.back.substring(0, 100),
          label: meta ? meta.label : card.vl.toUpperCase(),
          color: meta ? meta.color : 'tag-blue'
        });
      }
    });
  }

  // Search overview topics
  if (typeof OVERVIEW_DATA !== 'undefined') {
    Object.entries(OVERVIEW_DATA).forEach(([vl, data]) => {
      if (!data || !data.topics) return;
      const meta = typeof VL_META !== 'undefined' ? VL_META[vl] : null;
      data.topics.forEach(topic => {
        const inTitle = topic.title.toLowerCase().includes(q);
        const inPoints = topic.points.some(p => p.toLowerCase().includes(q));
        if (inTitle || inPoints) {
          const matchPoint = topic.points.find(p => p.toLowerCase().includes(q));
          results.push({
            type: 'overview',
            vl: vl,
            title: topic.title,
            preview: matchPoint ? matchPoint.substring(0, 100) : topic.points[0].substring(0, 100),
            label: meta ? meta.label : vl.toUpperCase(),
            color: meta ? meta.color : 'tag-blue'
          });
        }
      });
    });
  }

  // Search tables
  if (typeof TABLES !== 'undefined') {
    Object.entries(TABLES).forEach(([vl, tableData]) => {
      if (!tableData) return;
      const meta = typeof VL_META !== 'undefined' ? VL_META[vl] : null;
      // tableData can be array or object of arrays
      const tables = Array.isArray(tableData) ? tableData : Object.values(tableData);
      tables.forEach(table => {
        if (!table) return;
        const title = table.title || '';
        const rows = table.rows || [];
        const inTitle = title.toLowerCase().includes(q);
        const inRows = rows.some(row => Array.isArray(row) && row.some(cell => String(cell).toLowerCase().includes(q)));
        if (inTitle || inRows) {
          results.push({
            type: 'table',
            vl: vl,
            title: title,
            preview: 'Tabelle gefunden',
            label: meta ? meta.label : vl.toUpperCase(),
            color: meta ? meta.color : 'tag-blue'
          });
        }
      });
    });
  }

  const limited = results.slice(0, 20);
  if (limited.length === 0) {
    panel.innerHTML = `<div class="search-empty">Keine Ergebnisse für "<strong>${escHtml(q)}</strong>"</div>`;
    panel.style.display = 'block';
    return;
  }

  const typeIcon = { card: '🃏', overview: '📋', table: '📊' };
  const typeLabel = { card: 'Karteikarte', overview: 'Übersicht', table: 'Tabelle' };

  panel.innerHTML = `
    <div class="search-header-row">
      <span>${results.length} Treffer für "<strong>${escHtml(q)}</strong>"</span>
      <button class="search-close-btn" onclick="hideSearchResults()">✕</button>
    </div>
    ${limited.map((r, i) => `
      <div class="search-result-item" onclick="openSearchResult('${r.vl}', '${r.type}')" data-idx="${i}">
        <div class="sr-left">
          <span class="pill ${r.color}" style="font-size:11px">${r.label}</span>
          <span class="sr-type">${typeIcon[r.type]} ${typeLabel[r.type]}</span>
        </div>
        <div class="sr-content">
          <div class="sr-title">${highlightMatch(r.title, q)}</div>
          <div class="sr-preview">${highlightMatch(r.preview, q)}</div>
        </div>
      </div>
    `).join('')}
    ${results.length > 20 ? `<div class="search-more">+ ${results.length - 20} weitere Ergebnisse — Suche verfeinern</div>` : ''}
  `;
  panel.style.display = 'block';
}

function highlightMatch(text, q) {
  if (!text || !q) return escHtml(text || '');
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return escHtml(text).replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function hideSearchResults() {
  const panel = document.getElementById('search-results-panel');
  if (panel) { panel.style.display = 'none'; panel.innerHTML = ''; }
  const input = document.getElementById('search-input');
  if (input) input.value = '';
}

function openSearchResult(vl, type) {
  hideSearchResults();
  // Switch to that VL
  const vlBtns = document.querySelectorAll('.vl-btn');
  vlBtns.forEach(b => b.classList.remove('active'));
  const targetBtn = document.querySelector(`.vl-btn[data-vl="${vl}"]`);
  if (targetBtn) targetBtn.classList.add('active');
  if (typeof currentVL !== 'undefined') window.currentVL = vl;
  // Switch to appropriate tab
  const tabMap = { card: 'karteikarten', overview: 'uebersicht', table: 'tabellen' };
  const targetTab = tabMap[type] || 'uebersicht';
  switchToTab(targetTab);
}

function switchToTab(tabName) {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(b => b.classList.remove('active'));
  const targetTabBtn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
  if (targetTabBtn) targetTabBtn.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById(`page-${tabName}`);
  if (targetPage) targetPage.classList.add('active');
  window.currentTab = tabName;
  if (typeof refreshCurrentTab === 'function') refreshCurrentTab();
  else {
    if (tabName === 'statistiken') renderStatistiken();
    else if (tabName === 'pruefung') initPruefung();
  }
}

// =========================================================
// INIT ALL FEATURES
// =========================================================
function initAllFeatures() {
  renderProgressBar();
  initSearch();
  // Hook into VL switching
  document.querySelectorAll('.vl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const vl = btn.dataset.vl;
      if (vl && vl !== 'all') markVLVisited(vl);
    });
  });
  // Mark initial VL as visited
  setTimeout(() => {
    if (typeof currentVL !== 'undefined' && currentVL !== 'all') {
      markVLVisited(currentVL);
    }
    renderProgressBar();
  }, 100);
}
