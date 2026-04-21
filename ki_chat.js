// KI-Chat – DP4U Studyhub Lernassistent (Claude API)
(function () {
  'use strict';

  const API_KEY_STORAGE = 'dpu_ki_api_key';
  const MODEL = 'claude-haiku-4-5-20251001';
  const MAX_TOKENS = 1024;

  let chatHistory = [];
  let isLoading = false;
  let panelOpen = false;

  // ── System Prompt ────────────────────────────────────────────────
  function getSystemPrompt() {
    const subject = window.currentSubject || 'biochemie';
    const vl = window.currentVL || '';
    let subjectLabel = subject.charAt(0).toUpperCase() + subject.slice(1);
    let vlLabel = '';

    try {
      if (window.SUBJECTS && window.SUBJECTS[subject]) {
        for (const group of window.SUBJECTS[subject].sidebarGroups) {
          for (const item of group.items) {
            if (item.vl === vl) { vlLabel = item.label; break; }
          }
          if (vlLabel) break;
        }
      }
    } catch (_) {}

    return (
      'Du bist ein präziser Lernassistent für Medizinstudierende auf DP4U Studyhub.\n' +
      'Fach: ' + subjectLabel + (vlLabel ? ' — Thema: ' + vlLabel : '') + '.\n' +
      'Regeln:\n' +
      '- Antworte immer auf Deutsch\n' +
      '- Verwende korrekte medizinische Fachterminologie, erkläre Begriffe kurz wenn nötig\n' +
      '- Strukturiere Antworten mit Bulletpoints oder kurzen Absätzen\n' +
      '- Sei präzise und lernfördernd, nicht zu ausführlich\n' +
      '- Fördere aktives Denken: stelle gelegentlich Gegenfragen zum Vertiefen'
    );
  }

  // ── HTML Injection ───────────────────────────────────────────────
  function injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
<button id="ki-fab" class="ki-fab" aria-label="KI-Assistent öffnen" title="KI-Lernassistent">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/>
    <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
  </svg>
  <span class="ki-fab-label">KI-Assistent</span>
</button>

<div id="ki-panel" class="ki-panel" role="dialog" aria-label="KI-Lernassistent">
  <div class="ki-panel-header">
    <div class="ki-panel-title-group">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      <span class="ki-panel-title">KI-Assistent</span>
      <span id="ki-context-badge" class="ki-context-badge"></span>
    </div>
    <div class="ki-panel-btns">
      <button id="ki-settings-btn" class="ki-hdr-btn" title="API-Key eingeben">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          <line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
      </button>
      <button id="ki-clear-btn" class="ki-hdr-btn" title="Chat löschen">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14H6L5 6"/>
          <path d="M10 11v6M14 11v6"/>
          <path d="M9 6V4h6v2"/>
        </svg>
      </button>
      <button id="ki-close-btn" class="ki-hdr-btn" title="Schließen">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  </div>

  <div id="ki-messages" class="ki-messages">
    <div class="ki-welcome">
      <div class="ki-welcome-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
      <p class="ki-welcome-text">Hallo! Ich helfe dir beim Lernen auf DP4U Studyhub. Stell mir eine Frage zu deinem aktuellen Thema.</p>
    </div>
  </div>

  <div class="ki-input-row">
    <textarea id="ki-input" class="ki-input" placeholder="Frage stellen… (Enter zum Senden)" rows="1" maxlength="2000"></textarea>
    <button id="ki-send-btn" class="ki-send-btn" aria-label="Senden">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    </button>
  </div>
</div>

<div id="ki-api-modal" class="ki-api-modal" role="dialog" aria-modal="true" aria-label="API-Key eingeben">
  <div class="ki-api-box">
    <h3 class="ki-api-title">Anthropic API-Key</h3>
    <p class="ki-api-desc">Der Key wird nur lokal in deinem Browser gespeichert und nie übertragen.</p>
    <input type="password" id="ki-api-input" class="ki-api-input" placeholder="sk-ant-api03-…" autocomplete="off" spellcheck="false"/>
    <div class="ki-api-actions">
      <button id="ki-api-cancel" class="ki-api-btn ki-api-btn--ghost">Abbrechen</button>
      <button id="ki-api-save" class="ki-api-btn ki-api-btn--gold">Speichern</button>
    </div>
  </div>
</div>
`);
  }

  // ── Context Badge ────────────────────────────────────────────────
  function updateContextBadge() {
    const badge = document.getElementById('ki-context-badge');
    if (!badge) return;
    const subject = window.currentSubject || 'biochemie';
    const vl = window.currentVL || '';
    let label = '';
    try {
      if (window.SUBJECTS && window.SUBJECTS[subject]) {
        for (const group of window.SUBJECTS[subject].sidebarGroups) {
          for (const item of group.items) {
            if (item.vl === vl) { label = item.label; break; }
          }
          if (label) break;
        }
      }
    } catch (_) {}
    badge.textContent = label || subject.charAt(0).toUpperCase() + subject.slice(1);
  }

  // ── Rendering ────────────────────────────────────────────────────
  function renderMessages() {
    const container = document.getElementById('ki-messages');
    if (!container) return;

    if (chatHistory.length === 0) {
      container.innerHTML = `
        <div class="ki-welcome">
          <div class="ki-welcome-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <p class="ki-welcome-text">Hallo! Ich helfe dir beim Lernen auf DP4U Studyhub. Stell mir eine Frage zu deinem aktuellen Thema.</p>
        </div>`;
      return;
    }

    let html = chatHistory.map(function (msg) {
      const cls = msg.role === 'user' ? 'ki-msg ki-msg--user' : 'ki-msg ki-msg--ai';
      return '<div class="' + cls + '"><div class="ki-bubble">' + formatContent(msg.content) + '</div></div>';
    }).join('');

    if (isLoading) {
      html += '<div class="ki-msg ki-msg--ai"><div class="ki-bubble ki-typing"><span></span><span></span><span></span></div></div>';
    }

    container.innerHTML = html;
    container.scrollTop = container.scrollHeight;
  }

  function formatContent(text) {
    // Escape HTML
    let s = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Bold **text**
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Numbered lists: lines starting with "1. " etc.
    s = s.replace(/^(\d+)\.\s+(.+)$/gm, '<li>$2</li>');

    // Bullet lists: lines starting with - or *
    s = s.replace(/^[-*•]\s+(.+)$/gm, '<li>$1</li>');

    // Wrap consecutive <li> blocks into <ul>
    s = s.replace(/(<li>[\s\S]*?<\/li>)(\n<li>[\s\S]*?<\/li>)*/g, function(m) {
      return '<ul>' + m.replace(/\n/g, '') + '</ul>';
    });

    // Paragraphs: blank line separators
    s = s.split(/\n{2,}/).map(function(p) {
      if (p.startsWith('<ul>') || p.startsWith('<ol>')) return p;
      return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
    }).join('');

    return s;
  }

  // ── API Call ─────────────────────────────────────────────────────
  async function sendMessage() {
    const input = document.getElementById('ki-input');
    const userText = (input.value || '').trim();
    if (!userText || isLoading) return;

    const apiKey = localStorage.getItem(API_KEY_STORAGE);
    if (!apiKey) {
      showApiModal();
      return;
    }

    chatHistory.push({ role: 'user', content: userText });
    input.value = '';
    input.style.height = 'auto';
    isLoading = true;
    renderMessages();
    setSendBtnState();

    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: getSystemPrompt(),
          messages: chatHistory.map(function (m) { return { role: m.role, content: m.content }; })
        })
      });

      if (!resp.ok) {
        let errMsg = 'HTTP ' + resp.status;
        try {
          const errData = await resp.json();
          if (errData.error && errData.error.message) errMsg = errData.error.message;
        } catch (_) {}
        throw new Error(errMsg);
      }

      const data = await resp.json();
      chatHistory.push({ role: 'assistant', content: data.content[0].text });
    } catch (e) {
      chatHistory.push({ role: 'assistant', content: '⚠️ **Fehler:** ' + e.message });
    }

    isLoading = false;
    renderMessages();
    setSendBtnState();
  }

  // ── UI Helpers ───────────────────────────────────────────────────
  function openPanel() {
    panelOpen = true;
    document.getElementById('ki-panel').classList.add('ki-panel--open');
    document.getElementById('ki-fab').classList.add('ki-fab--active');
    updateContextBadge();
    setTimeout(function () {
      const input = document.getElementById('ki-input');
      if (input) input.focus();
    }, 300);
  }

  function closePanel() {
    panelOpen = false;
    document.getElementById('ki-panel').classList.remove('ki-panel--open');
    document.getElementById('ki-fab').classList.remove('ki-fab--active');
  }

  function togglePanel() {
    if (panelOpen) closePanel(); else openPanel();
  }

  function showApiModal() {
    const modal = document.getElementById('ki-api-modal');
    const input = document.getElementById('ki-api-input');
    input.value = localStorage.getItem(API_KEY_STORAGE) || '';
    modal.classList.add('ki-api-modal--open');
    setTimeout(function () { input.focus(); }, 100);
  }

  function hideApiModal() {
    document.getElementById('ki-api-modal').classList.remove('ki-api-modal--open');
  }

  function setSendBtnState() {
    const btn = document.getElementById('ki-send-btn');
    if (btn) btn.disabled = isLoading;
  }

  // ── Event Binding ────────────────────────────────────────────────
  function bindEvents() {
    document.getElementById('ki-fab').addEventListener('click', togglePanel);
    document.getElementById('ki-close-btn').addEventListener('click', closePanel);

    document.getElementById('ki-settings-btn').addEventListener('click', showApiModal);

    document.getElementById('ki-clear-btn').addEventListener('click', function () {
      chatHistory = [];
      renderMessages();
    });

    document.getElementById('ki-send-btn').addEventListener('click', sendMessage);

    const input = document.getElementById('ki-input');
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    input.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });

    document.getElementById('ki-api-save').addEventListener('click', function () {
      const val = (document.getElementById('ki-api-input').value || '').trim();
      if (val) {
        localStorage.setItem(API_KEY_STORAGE, val);
        hideApiModal();
      }
    });

    document.getElementById('ki-api-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') document.getElementById('ki-api-save').click();
      if (e.key === 'Escape') hideApiModal();
    });

    document.getElementById('ki-api-cancel').addEventListener('click', hideApiModal);

    document.getElementById('ki-api-modal').addEventListener('click', function (e) {
      if (e.target === this) hideApiModal();
    });

    // Update context badge whenever a VL is clicked
    document.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('.vl-btn')) {
        setTimeout(updateContextBadge, 80);
      }
    });

    // Keyboard: Escape closes panel
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panelOpen) closePanel();
    });
  }

  // ── Init ─────────────────────────────────────────────────────────
  function init() {
    injectHTML();
    bindEvents();
    updateContextBadge();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
