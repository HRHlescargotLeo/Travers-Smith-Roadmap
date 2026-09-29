/* ==========================================================================
   wireframe.js — shared interaction behaviour for lo-fi wireframes.

   Everything here is driven by data attributes and classes, so pages stay
   declarative and no page needs its own inline script. Keep it that way: a
   wireframe pack with five slightly different accordion implementations is
   how nav bugs get reported in a client review.

   All patterns are keyboard-operable and dismissible with Escape, because
   accessibility is cheaper to design in at wireframe stage than to retrofit.
   ========================================================================== */

(function () {
  'use strict';

  /* --- Navigation flyouts ------------------------------------------------
     Opened on hover AND focus. Hover alone would make the whole navigation
     unusable by keyboard, which is the single most common wireframe defect
     that survives into build. */
  function initNav() {
    var backdrop = document.querySelector('.flyout-backdrop');
    var items = document.querySelectorAll('.nav-item');

    function closeAll() {
      document.querySelectorAll('.nav-item.open').forEach(function (i) {
        i.classList.remove('open');
      });
      if (backdrop) backdrop.classList.remove('active');
    }

    items.forEach(function (item) {
      var flyout = item.querySelector('.nav-flyout');
      if (!flyout) return;

      var trigger = item.querySelector('.nav-link');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-haspopup', 'true');
      }

      function open() {
        closeAll();
        item.classList.add('open');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
        if (backdrop) backdrop.classList.add('active');
      }

      function close() {
        item.classList.remove('open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
        if (backdrop) backdrop.classList.remove('active');
      }

      item.addEventListener('mouseenter', open);
      item.addEventListener('mouseleave', close);
      item.addEventListener('focusin', open);
      item.addEventListener('focusout', function () {
        window.setTimeout(function () {
          if (!item.contains(document.activeElement)) close();
        }, 10);
      });

      if (trigger) {
        trigger.addEventListener('click', function (ev) {
          if (trigger.getAttribute('href') === '#') {
            ev.preventDefault();
            item.classList.contains('open') ? close() : open();
          }
        });
      }
    });

    if (backdrop) backdrop.addEventListener('click', closeAll);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll();
    });
  }

  /* --- Accordions --------------------------------------------------------
     Markup: <div class="accordion-item"><button class="accordion-title">…
     Multiple panels may be open at once unless the .accordion carries
     data-single. */
  function initAccordions() {
    document.querySelectorAll('.accordion-title').forEach(function (title) {
      var startOpen = title.closest('.accordion-item').classList.contains('open');
      title.setAttribute('aria-expanded', startOpen ? 'true' : 'false');
      title.addEventListener('click', function () {
        var item = title.closest('.accordion-item');
        var group = title.closest('.accordion');
        var willOpen = !item.classList.contains('open');

        if (group && group.hasAttribute('data-single')) {
          group.querySelectorAll('.accordion-item.open').forEach(function (o) {
            o.classList.remove('open');
            var t = o.querySelector('.accordion-title');
            if (t) t.setAttribute('aria-expanded', 'false');
          });
        }

        item.classList.toggle('open', willOpen);
        title.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    });
  }

  /* --- Tabs --------------------------------------------------------------
     Markup: <button class="tab" data-tab="panel-id"> and
             <div class="tab-panel" id="panel-id"> */
  function initTabs() {
    document.querySelectorAll('.tabs').forEach(function (group) {
      var tabs = group.querySelectorAll('.tab');
      tabs.forEach(function (tab) {
        tab.setAttribute('role', 'tab');
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');

          var target = document.getElementById(tab.getAttribute('data-tab'));
          if (!target) return;
          var container = target.parentElement;
          container.querySelectorAll('.tab-panel').forEach(function (p) {
            p.classList.remove('active');
          });
          target.classList.add('active');
        });
      });
    });
  }

  /* --- Carousels ---------------------------------------------------------
     Markup: <div class="carousel" data-autoplay="6000"> containing
             .carousel-track > .carousel-item, .carousel-arrow[data-dir],
             and an empty .carousel-indicators which is populated here. */
  function initCarousels() {
    document.querySelectorAll('.carousel').forEach(function (carousel) {
      var track = carousel.querySelector('.carousel-track');
      if (!track) return;
      var items = track.querySelectorAll('.carousel-item');
      var dotsHost = carousel.querySelector('.carousel-indicators');
      var index = 0;
      var timer = null;

      function render() {
        track.style.transform = 'translateX(-' + index * 100 + '%)';
        if (!dotsHost) return;
        dotsHost.querySelectorAll('.carousel-dot').forEach(function (d, i) {
          d.classList.toggle('active', i === index);
          d.setAttribute('aria-current', i === index ? 'true' : 'false');
        });
      }

      function go(n) {
        index = (n + items.length) % items.length;
        render();
      }

      if (dotsHost) {
        items.forEach(function (_, i) {
          var dot = document.createElement('button');
          dot.className = 'carousel-dot';
          dot.type = 'button';
          dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
          dot.addEventListener('click', function () { go(i); });
          dotsHost.appendChild(dot);
        });
      }

      carousel.querySelectorAll('.carousel-arrow').forEach(function (arrow) {
        arrow.addEventListener('click', function () {
          go(index + (arrow.getAttribute('data-dir') === 'prev' ? -1 : 1));
        });
      });

      var interval = parseInt(carousel.getAttribute('data-autoplay'), 10);
      if (interval > 0) {
        var start = function () { timer = window.setInterval(function () { go(index + 1); }, interval); };
        var stop = function () { window.clearInterval(timer); };
        start();
        carousel.addEventListener('mouseenter', stop);
        carousel.addEventListener('focusin', stop);
        carousel.addEventListener('mouseleave', start);
      }

      render();
    });
  }

  /* --- Modals ------------------------------------------------------------
     Markup: any element with data-modal-open="modal-id", and
             <div class="wf-modal" id="modal-id"> */
  function initModals() {
    function close(modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-modal-open]').forEach(function (trigger) {
      trigger.addEventListener('click', function (ev) {
        ev.preventDefault();
        var modal = document.getElementById(trigger.getAttribute('data-modal-open'));
        if (!modal) return;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        var panel = modal.querySelector('.wf-modal-panel');
        if (panel) {
          panel.setAttribute('tabindex', '-1');
          panel.focus();
        }
      });
    });

    document.querySelectorAll('.wf-modal').forEach(function (modal) {
      modal.addEventListener('click', function (ev) {
        if (ev.target === modal || ev.target.classList.contains('wf-modal-close')) close(modal);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      document.querySelectorAll('.wf-modal.open').forEach(close);
    });
  }

  /* --- Notes toggle -------------------------------------------------------
     A switch in the prototype navigator shows or hides everything marked
     as a note: the "what we're proposing and why" panel at the top of each
     prototype and the numbered annotations within it. Off by default; the
     choice is remembered for the session so it carries between prototypes. */
  function initNotes() {
    var hidden = true;
    try { hidden = window.sessionStorage.getItem('wf-notes-hidden') !== '0'; } catch (e) { /* private mode */ }
    var toggles = document.querySelectorAll('[data-notes-toggle]');
    if (!document.querySelector('.wf-note, .proposal')) {
      toggles.forEach(function (t) { t.hidden = true; });
      return;
    }

    function apply() {
      document.body.classList.toggle('wf-notes-hidden', hidden);
      toggles.forEach(function (t) {
        t.setAttribute('aria-checked', hidden ? 'false' : 'true');
        var l = t.querySelector('.notes-label');
        if (l) l.textContent = hidden ? 'Notes off' : 'Notes on';
      });
    }
    toggles.forEach(function (t) {
      t.addEventListener('click', function () {
        hidden = !hidden;
        try { window.sessionStorage.setItem('wf-notes-hidden', hidden ? '1' : '0'); } catch (e) { /* private mode */ }
        apply();
        if (!hidden) {
          var panel = document.querySelector('.proposal');
          if (panel && panel.getBoundingClientRect().top < 0) panel.scrollIntoView({ block: 'start' });
        }
      });
    });
    apply();
  }

  /* --- Prototype navigator: current page and previous / next ------------- */
  function initProtoNav() {
    var file = (window.location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
    var links = Array.prototype.slice.call(document.querySelectorAll('.proto-links a[data-proto]'));
    var index = -1;
    links.forEach(function (a, i) {
      var match = a.getAttribute('data-proto').split(' ').indexOf(file) !== -1;
      if (match) { a.setAttribute('aria-current', 'page'); index = i; }
    });
    var current = document.querySelector('.proto-links a[aria-current]');
    if (current && current.scrollIntoView && window.innerWidth < 1024) {
      var list = current.closest('.proto-links');
      if (list) list.scrollLeft = current.offsetLeft - 16;
    }
    var pager = document.querySelector('[data-proto-pager]');
    if (!pager || index < 0) return;
    function label(a) { return a.textContent.replace(/\s+/g, ' ').trim(); }
    var html = '';
    if (index > 0) html += '<a class="prev" href="' + links[index - 1].getAttribute('href') + '"><span class="wf-meta">Previous</span>' + label(links[index - 1]) + '</a>';
    else html += '<span></span>';
    if (index < links.length - 1) html += '<a class="next" href="' + links[index + 1].getAttribute('href') + '"><span class="wf-meta">Next</span>' + label(links[index + 1]) + '</a>';
    pager.innerHTML = html;
  }

  /* ======================================================================
     Travers Smith prototype behaviour (V1)
     Driven by ids and data attributes on the pages. Sample data in data.js.
     ====================================================================== */

  var PEOPLE = window.TS_PEOPLE || {};
  var EVENTS = window.TS_EVENTS || [];
  var REGIONS = window.TS_REGIONS || {};
  var fmtDate = window.TS_FMT_DATE || function (d) { return d; };

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* Query parameters carry context between pages. Some hosts strip the query
     string, so the last clicked link's query is also kept for its target page. */
  function currentFile() { return (window.location.pathname.split('/').pop() || 'index.html'); }
  function param(name) {
    var v = null;
    try { v = new URLSearchParams(window.location.search).get(name); } catch (e) { v = null; }
    if (v) return v;
    try {
      var saved = JSON.parse(window.sessionStorage.getItem('ts-q') || 'null');
      if (saved && saved.file === currentFile()) return new URLSearchParams(saved.q).get(name);
    } catch (e) { /* private mode */ }
    return null;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    try {
      if (href.indexOf('?') !== -1) window.sessionStorage.setItem('ts-q', JSON.stringify({ file: href.split('?')[0].split('/').pop(), q: href.split('?')[1].split('#')[0] }));
      else if (href.charAt(0) !== '#') window.sessionStorage.removeItem('ts-q');
    } catch (err) { /* private mode */ }
  }, true);

  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(window.sessionStorage.getItem(key) || 'null');
      window.sessionStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return null; }
    return val;
  }

  /* --- Toast ------------------------------------------------------------ */
  var toastTimer = null;
  function toast(msg) {
    var t = $('#wf-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'wf-toast';
      t.className = 'toast';
      t.setAttribute('role', 'status');
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { t.hidden = true; }, 2600);
  }

  /* --- Header height for sticky in-page elements ------------------------ */
  function initHeaderHeight() {
    var header = $('.site-header');
    if (!header) return;
    function set() { document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px'); }
    set();
    window.addEventListener('resize', set);
  }

  /* --- Filter chips ------------------------------------------------------
     <div data-filter-group data-target="list-id"> with .chip[data-filter].
     Items in the target carry data-tags="a b c". Single choice; "all" resets. */
  function applyFilter(group, value) {
    var target = document.getElementById(group.getAttribute('data-target'));
    if (!target) return;
    var items = $all('[data-tags]', target);
    var shown = 0;
    items.forEach(function (it) {
      var ok = value === 'all' || (' ' + it.getAttribute('data-tags') + ' ').indexOf(' ' + value + ' ') !== -1;
      it.hidden = !ok;
      if (ok) shown += 1;
    });
    var empty = $('[data-empty]', target);
    if (empty) empty.hidden = shown !== 0;
    $all('[data-count-for="' + target.id + '"]').forEach(function (c) {
      c.textContent = 'Showing ' + shown + ' of ' + items.length;
    });
  }
  function initFilters() {
    $all('[data-filter-group]').forEach(function (group) {
      var chips = $all('.chip[data-filter]', group);
      chips.forEach(function (chip) {
        chip.setAttribute('aria-pressed', chip.getAttribute('data-filter') === 'all' ? 'true' : 'false');
        chip.addEventListener('click', function () {
          chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
          applyFilter(group, chip.getAttribute('data-filter'));
        });
      });
      applyFilter(group, 'all');
    });
  }

  /* --- Reveal ------------------------------------------------------------
     <button data-reveal="id" data-open-label="Show fewer"> toggles #id. */
  function initReveal() {
    $all('[data-reveal]').forEach(function (btn) {
      var target = document.getElementById(btn.getAttribute('data-reveal'));
      if (!target) return;
      var closedLabel = btn.textContent;
      btn.setAttribute('aria-expanded', target.hidden ? 'false' : 'true');
      btn.setAttribute('aria-controls', target.id);
      btn.addEventListener('click', function () {
        target.hidden = !target.hidden;
        btn.setAttribute('aria-expanded', target.hidden ? 'false' : 'true');
        btn.textContent = target.hidden ? closedLabel : (btn.getAttribute('data-open-label') || closedLabel);
        if (!target.hidden) { var f = target.querySelector('a, button, input'); if (f && btn.hasAttribute('data-focus')) f.focus(); }
      });
    });
  }

  /* --- Form validation ---------------------------------------------------
     <form data-validate data-done="id">. Required inputs need a sibling
     .field-error; a fieldset[data-required-group] needs one ticked box.
     On success the form hides, #done shows, and [data-echo="input-id"]
     spans are filled with that input's value. */
  function validateForm(form) {
    var firstBad = null;
    $all('[required]', form).forEach(function (el) {
      if (el.closest('[hidden]')) return;
      var field = el.closest('.field');
      var val = (el.value || '').trim();
      var ok = el.type === 'checkbox' ? el.checked : val !== '';
      if (ok && el.type === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      if (field) {
        field.classList.toggle('has-error', !ok);
        var err = $('.field-error', field);
        if (err) err.hidden = ok;
      }
      el.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (!ok && !firstBad) firstBad = el;
    });
    $all('fieldset[data-required-group]', form).forEach(function (fs) {
      if (fs.closest('[hidden]')) return;
      var ok = $all('input:checked', fs).length > 0;
      var err = $('.field-error', fs);
      if (err) err.hidden = ok;
      if (!ok && !firstBad) firstBad = $('input', fs);
    });
    if (firstBad) firstBad.focus();
    return !firstBad;
  }
  function initForms() {
    $all('form[data-validate]').forEach(function (form) {
      form.setAttribute('novalidate', '');
      form.addEventListener('input', function (e) {
        var field = e.target.closest('.field');
        if (field && field.classList.contains('has-error')) {
          field.classList.remove('has-error');
          var err = $('.field-error', field);
          if (err) err.hidden = true;
        }
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validateForm(form)) { toast('Please check the highlighted fields'); return; }
        var ev;
        try { ev = new CustomEvent('ts:valid', { cancelable: true }); } catch (x) { ev = document.createEvent('CustomEvent'); ev.initCustomEvent('ts:valid', false, true, null); }
        if (!form.dispatchEvent(ev)) return;
        var done = document.getElementById(form.getAttribute('data-done'));
        if (!done) { toast('Sent'); return; }
        $all('[data-echo]', done).forEach(function (span) {
          var src = document.getElementById(span.getAttribute('data-echo'));
          if (src) span.textContent = src.tagName === 'SELECT' ? src.options[src.selectedIndex].text : src.value.trim();
        });
        form.hidden = true;
        var hideAlso = form.getAttribute('data-hide');
        if (hideAlso) $all(hideAlso).forEach(function (h) { h.hidden = true; });
        done.hidden = false;
        done.setAttribute('tabindex', '-1');
        done.focus();
      });
    });
  }

  /* --- Copy a link to a section ------------------------------------------ */
  function copyText(text, msg) {
    function fallback() { toast(msg + ': ' + text); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast(msg); }, fallback);
    } else fallback();
  }
  function initCopyLinks() {
    $all('[data-copy-link]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var anchor = btn.getAttribute('data-copy-link');
        copyText(window.location.href.split('#')[0] + anchor, 'Link copied');
      });
    });
    $all('[data-fake-download]').forEach(function (btn) {
      btn.addEventListener('click', function () { toast(btn.getAttribute('data-fake-download')); });
    });
  }

  /* --- Follow a topic (R40, R52) -----------------------------------------
     Follows are kept for the session and pre-tick the sign-up page. */
  function follows() { return store('ts-follow') || { email: '', topics: [] }; }
  function syncFollowButtons() {
    var f = follows();
    $all('[data-follow]').forEach(function (b) {
      var on = f.topics.indexOf(b.getAttribute('data-follow')) !== -1;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      var l = $('.follow-label', b) || b;
      l.textContent = (on ? 'Following ' : 'Follow ') + b.getAttribute('data-follow');
    });
    $all('[data-follow-count]').forEach(function (c) { c.textContent = f.topics.length; });
  }
  var pendingTopic = null;
  function initFollow() {
    var modal = $('#follow-modal');
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-follow]');
      if (!b) return;
      var topic = b.getAttribute('data-follow');
      var f = follows();
      var i = f.topics.indexOf(topic);
      if (i !== -1) { f.topics.splice(i, 1); store('ts-follow', f); syncFollowButtons(); toast('You no longer follow ' + topic); return; }
      if (f.email) { f.topics.push(topic); store('ts-follow', f); syncFollowButtons(); toast('Following ' + topic + '. Updates go to ' + f.email); return; }
      if (!modal) return;
      pendingTopic = topic;
      $all('[data-follow-topic]', modal).forEach(function (s) { s.textContent = topic; });
      modal.classList.add('open');
      var input = $('input[type="email"]', modal);
      if (input) input.focus();
    });
    var form = $('#follow-form');
    if (form) {
      form.addEventListener('ts:valid', function (e) {
        e.preventDefault();
        var f = follows();
        f.email = $('#follow-email').value.trim();
        if (pendingTopic && f.topics.indexOf(pendingTopic) === -1) f.topics.push(pendingTopic);
        store('ts-follow', f);
        modal.classList.remove('open');
        syncFollowButtons();
        toast('Following ' + pendingTopic + '. Check your inbox to confirm.');
      });
    }
    syncFollowButtons();
  }

  /* --- Briefing: progress bar and chapter highlight (R32, R33) ----------- */
  function initBriefing() {
    var bar = $('#read-progress');
    var body = $('#briefing-body');
    if (bar && body) {
      var onScroll = function () {
        var r = body.getBoundingClientRect();
        var total = r.height - window.innerHeight * 0.6;
        var pct = Math.max(0, Math.min(1, -r.top / (total > 0 ? total : 1)));
        bar.style.width = (pct * 100).toFixed(1) + '%';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
    var links = $all('.chapter-list a');
    if (links.length && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) {
            var on = a.getAttribute('href') === '#' + en.target.id;
            a.classList.toggle('active', on);
            if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
          });
        });
      }, { rootMargin: '-30% 0px -60% 0px' });
      links.forEach(function (a) { var s = document.getElementById(a.getAttribute('href').slice(1)); if (s) io.observe(s); });
    }
  }

  /* --- Events (R50–R55) ---------------------------------------------------- */
  function isBST(iso) { return iso >= '2026-03-29' && iso < '2026-10-25'; }
  function endTime(ev) {
    var p = ev.start.split(':');
    var m = parseInt(p[0], 10) * 60 + parseInt(p[1], 10) + ev.mins;
    return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2);
  }
  function durLabel(m) {
    if (!m) return '';
    if (m < 60) return m + ' minutes';
    var h = m / 60;
    return (h === 1 ? '1 hour' : (h % 1 ? h.toFixed(2).replace(/0$/, '') : h) + ' hours');
  }
  function timeLabel(ev) {
    if (ev.ondemand || !ev.start) return 'Available now';
    return ev.start + '–' + endTime(ev) + ' UK time (' + (isBST(ev.date) ? 'BST' : 'GMT') + ')';
  }
  function icsFor(ev) {
    var d = ev.date.replace(/-/g, '');
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Travers Smith prototype//EN', 'BEGIN:VEVENT',
      'UID:' + ev.id + '@traverssmith.prototype',
      'DTSTART;TZID=Europe/London:' + d + 'T' + ev.start.replace(':', '') + '00',
      'DTEND;TZID=Europe/London:' + d + 'T' + endTime(ev).replace(':', '') + '00',
      'SUMMARY:' + ev.title, 'LOCATION:' + ev.where, 'DESCRIPTION:' + ev.summary, 'END:VEVENT', 'END:VCALENDAR'];
    return lines.join('\r\n');
  }
  function calendarMenu(ev) {
    if (ev.past || ev.ondemand) return '';
    var d = ev.date.replace(/-/g, '');
    var g = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(ev.title) +
      '&dates=' + d + 'T' + ev.start.replace(':', '') + '00/' + d + 'T' + endTime(ev).replace(':', '') + '00&ctz=Europe/London';
    return '<details class="cal-menu"><summary class="btn btn-secondary btn-sm">Add to calendar</summary><ul>' +
      '<li><button type="button" class="btn-link" data-ics="' + ev.id + '">Outlook or Apple (.ics file)</button></li>' +
      '<li><a href="' + g + '" target="_blank" rel="noopener">Google Calendar</a></li></ul></details>';
  }
  function eventCard(ev, base) {
    var dt = new Date(ev.date + 'T00:00:00');
    var day = dt.getDate();
    var mon = dt.toLocaleDateString('en-GB', { month: 'short' });
    var yr = dt.getFullYear();
    var action = ev.past ? (ev.recording ? '<a class="btn btn-secondary btn-sm" href="#">Watch the recording</a>' : (ev.takeaways ? '<a class="btn btn-secondary btn-sm" href="#">Read the takeaways</a>' : ''))
      : ev.ondemand ? '<a class="btn btn-sm" href="#">Listen now</a>'
      : '<a class="btn btn-sm" href="' + base + 'event.html?event=' + ev.id + '">Register</a>';
    return '<li class="event-card" data-tags="' + esc(ev.format.toLowerCase().replace(/\s+/g, '-')) + '">' +
      '<div class="event-date" aria-hidden="true"><b>' + (ev.ondemand ? '&#9654;' : day) + '</b><span>' + (ev.ondemand ? 'On demand' : mon + ' ' + yr) + '</span></div>' +
      '<div class="event-body"><p class="event-meta"><span class="badge">' + esc(ev.format) + '</span> ' + esc(ev.topic) + (ev.sample ? ' <span class="sample-tag">Sample</span>' : '') + '</p>' +
      '<h3><a href="' + (ev.past || ev.ondemand ? '#' : base + 'event.html?event=' + ev.id) + '">' + esc(ev.title) + '</a></h3>' +
      '<p class="event-when">' + (ev.ondemand ? 'On demand' : fmtDate(ev.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })) +
      (ev.past ? '' : ' · ' + timeLabel(ev) + (ev.mins && !ev.ondemand ? ' · ' + durLabel(ev.mins) : '')) + '</p>' +
      '<p class="muted">' + esc(ev.summary) + '</p></div>' +
      '<div class="event-actions">' + action + calendarMenu(ev) + '</div></li>';
  }
  function downloadIcs(id) {
    var ev = EVENTS.filter(function (e) { return e.id === id; })[0];
    if (!ev) return;
    try {
      var blob = new Blob([icsFor(ev)], { type: 'text/calendar' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = ev.id + '.ics';
      document.body.appendChild(a);
      a.click();
      a.remove();
      toast('Calendar file downloaded');
    } catch (e) { toast('Calendar file ready (download blocked here)'); }
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-ics]');
    if (b) downloadIcs(b.getAttribute('data-ics'));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    $all('details.cal-menu[open]').forEach(function (d) { d.open = false; });
    $all('.wf-modal.open').forEach(function (m) { m.classList.remove('open'); });
  });

  function initEventsList() {
    var list = $('#event-list');
    if (!list) return;
    var base = list.getAttribute('data-base') || '';
    var when = 'upcoming';
    var fmt = 'all';
    var groups = { upcoming: function (e) { return !e.past && !e.ondemand; }, ondemand: function (e) { return e.ondemand; }, past: function (e) { return e.past; } };
    function render() {
      var items = EVENTS.filter(groups[when]).filter(function (e) { return fmt === 'all' || e.format.toLowerCase().replace(/\s+/g, '-') === fmt; });
      items.sort(function (a, b) { return when === 'past' ? (a.date < b.date ? 1 : -1) : (a.date > b.date ? 1 : -1); });
      list.innerHTML = items.map(function (e) { return eventCard(e, base); }).join('') ||
        '<li class="panel surface">No ' + (when === 'past' ? 'past' : 'upcoming') + ' events match. <button type="button" class="btn-link" data-reset-format>Show all formats</button></li>';
      var c = $('#event-count');
      if (c) c.textContent = items.length + (items.length === 1 ? ' event' : ' events');
    }
    $all('[data-when]').forEach(function (b) {
      b.addEventListener('click', function () {
        when = b.getAttribute('data-when');
        $all('[data-when]').forEach(function (o) { o.classList.toggle('active', o === b); o.setAttribute('aria-selected', o === b ? 'true' : 'false'); });
        render();
      });
    });
    $all('[data-format]').forEach(function (b) {
      b.addEventListener('click', function () {
        fmt = b.getAttribute('data-format');
        $all('[data-format]').forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        render();
      });
    });
    list.addEventListener('click', function (e) {
      if (e.target.closest('[data-reset-format]')) { var all = $('[data-format="all"]'); if (all) all.click(); }
    });
    render();
  }

  /* Upcoming-first strip (used on the homepage module in the library). */
  function initNextEvents() {
    $all('[data-next-events]').forEach(function (host) {
      var base = host.getAttribute('data-base') || '';
      var n = parseInt(host.getAttribute('data-next-events'), 10) || 3;
      var items = EVENTS.filter(function (e) { return !e.past && !e.ondemand; }).sort(function (a, b) { return a.date > b.date ? 1 : -1; }).slice(0, n);
      host.innerHTML = items.map(function (e) { return eventCard(e, base); }).join('');
    });
  }

  function initEventPage() {
    var host = $('#event-page');
    if (!host) return;
    var id = param('event') || 'ukraine-defence';
    var ev = EVENTS.filter(function (e) { return e.id === id; })[0] || EVENTS[0];
    $all('[data-ev]', host).forEach(function (el) {
      var k = el.getAttribute('data-ev');
      if (k === 'date') el.textContent = fmtDate(ev.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      else if (k === 'time') el.textContent = timeLabel(ev);
      else if (k === 'duration') el.textContent = durLabel(ev.mins);
      else if (k === 'calendar') el.innerHTML = calendarMenu(ev);
      else if (ev[k] !== undefined) el.textContent = ev[k];
    });
    document.title = ev.title + ' | Travers Smith prototype';
    var sp = $('#ev-speakers');
    if (sp) {
      var html = ev.speakers.map(function (pid) {
        var p = PEOPLE[pid];
        return p ? '<li class="person-mini"><span class="wf-placeholder avatar-sm">Photo</span><span><a href="#"><strong>' + esc(p.name) + '</strong></a><br><span class="muted">' + esc(p.role) + '</span></span></li>' : '';
      }).join('');
      if (ev.guests) html += '<li class="person-mini"><span class="wf-placeholder avatar-sm">Logo</span><span><strong>' + esc(ev.guests) + '</strong><br><span class="muted">Guest speakers</span></span></li>';
      if (!html && ev.team) html = '<li class="person-mini"><span class="wf-placeholder avatar-sm">Photo</span><span><strong>' + esc(ev.team) + '</strong><br><span class="muted">Speakers to be announced</span></span></li>';
      sp.innerHTML = html;
    }
    var sample = $('#ev-sample');
    if (sample) sample.hidden = !ev.sample;
    var hub = $('#ev-hub');
    if (hub) hub.hidden = !ev.hub;
  }

  /* --- Sign-up: topics first (R60–R63) ------------------------------------ */
  function initSignup() {
    var app = $('#signup');
    if (!app) return;
    var boxes = $all('input[name="topic"]', app);
    var f = follows();
    var pre = param('topic');
    boxes.forEach(function (b) {
      if (f.topics.indexOf(b.value) !== -1 || b.value === pre) b.checked = true;
    });
    if (f.email && $('#su-email')) $('#su-email').value = f.email;
    function count() {
      var n = boxes.filter(function (b) { return b.checked; }).length;
      $all('[data-topic-count]').forEach(function (c) { c.textContent = n === 0 ? 'No topics chosen yet' : n + (n === 1 ? ' topic' : ' topics') + ' chosen'; });
      var next = $('#su-next');
      if (next) next.setAttribute('aria-disabled', n ? 'false' : 'true');
      return n;
    }
    boxes.forEach(function (b) { b.addEventListener('change', count); });
    count();
    var step1 = $('#su-step1'), step2 = $('#su-step2');
    $('#su-next').addEventListener('click', function () {
      if (!count()) { var err = $('#su-topic-error'); err.hidden = false; boxes[0].focus(); return; }
      $('#su-topic-error').hidden = true;
      step1.hidden = true;
      step2.hidden = false;
      $all('.steps li').forEach(function (li, i) { li.classList.toggle('current', i === 1); li.classList.toggle('done', i === 0); });
      $('#su-first').focus();
    });
    $('#su-back').addEventListener('click', function () {
      step2.hidden = true; step1.hidden = false;
      $all('.steps li').forEach(function (li, i) { li.classList.toggle('current', i === 0); li.classList.remove('done'); });
    });
    $('#su-form').addEventListener('ts:valid', function () {
      var chosen = boxes.filter(function (b) { return b.checked; }).map(function (b) { return b.value; });
      var nf = follows();
      nf.email = $('#su-email').value.trim();
      chosen.forEach(function (t) { if (nf.topics.indexOf(t) === -1) nf.topics.push(t); });
      store('ts-follow', nf);
      $('#su-done-topics').innerHTML = chosen.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
      var freq = $('input[name="freq"]:checked', app);
      $('#su-done-freq').textContent = freq ? freq.value : 'As they are published';
      $all('.steps li').forEach(function (li) { li.classList.remove('current'); li.classList.add('done'); });
    });
  }

  /* --- Contact: reason first (R64–R67) --------------------------------------- */
  function initContact() {
    var radios = $all('input[name="reason"]');
    if (!radios.length) return;
    function show() {
      var v = (radios.filter(function (r) { return r.checked; })[0] || {}).value;
      $all('[data-reason-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-reason-panel') !== v; });
    }
    radios.forEach(function (r) { r.addEventListener('change', show); });
    var practice = param('practice');
    if (practice) {
      var nm = radios.filter(function (r) { return r.value === 'new'; })[0];
      if (nm) nm.checked = true;
      var sel = $('#cn-practice');
      if (sel) $all('option', sel).forEach(function (o) { if (o.value === practice) sel.value = practice; });
    }
    show();
  }

  /* --- International regions (R70–R74) ---------------------------------------- */
  function renderRegion(key) {
    var r = REGIONS[key];
    var host = $('#region');
    if (!r || !host) return;
    $all('[data-rg]', host).forEach(function (el) { el.textContent = r[el.getAttribute('data-rg')]; });
    $('#rg-jurisdictions').innerHTML = r.jurisdictions.map(function (j) { return '<li>' + esc(j) + '</li>'; }).join('');
    $('#rg-matters').innerHTML = r.matters.map(function (m) {
      return '<li class="card"><span class="wf-meta">' + esc(m.tags) + (m.real ? '' : ' <span class="sample-tag">Sample</span>') + '</span><h3 class="card-title">' + esc(m.t) + '</h3><p class="card-text">' + esc(m.d) + '</p></li>';
    }).join('');
    $all('[data-region]').forEach(function (a) {
      var on = a.getAttribute('data-region') === key;
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    document.title = r.name + ' | International | Travers Smith prototype';
  }
  function initRegion() {
    if (!$('#region')) return;
    var key = param('r');
    if (!REGIONS[key]) key = 'europe';
    renderRegion(key);
    $all('[data-region]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var k = a.getAttribute('data-region');
        renderRegion(k);
        try { window.history.replaceState(null, '', '?r=' + k); } catch (x) { /* file:// */ }
        store('ts-q', { file: 'region.html', q: 'r=' + k });
      });
    });
  }

  /* Region picker on the International page: counts come from data.js. */
  function initRegionTiles() {
    $all('[data-region-tile]').forEach(function (t) {
      var r = REGIONS[t.getAttribute('data-region-tile')];
      if (!r) return;
      $all('[data-rt]', t).forEach(function (el) { el.textContent = r[el.getAttribute('data-rt')]; });
    });
    var total = $('#intl-firms');
    if (total) {
      var firms = 0, countries = 0;
      Object.keys(REGIONS).forEach(function (k) { firms += REGIONS[k].firms; countries += REGIONS[k].countries; });
      total.textContent = firms;
      var c = $('#intl-countries');
      if (c) c.textContent = countries;
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initAccordions();
    initTabs();
    initCarousels();
    initModals();
    initNotes();
    initProtoNav();
    initHeaderHeight();
    initFilters();
    initReveal();
    initForms();
    initCopyLinks();
    initFollow();
    initBriefing();
    initEventsList();
    initNextEvents();
    initEventPage();
    initSignup();
    initContact();
    initRegion();
    initRegionTiles();
  });
})();
