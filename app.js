(function () {
  // Set to a video URL (for example 'hero-scrub.mp4') to drive a clip with scroll instead of the CSS push-in.
  var CLIP = '';

  var deckReleased = false, deckLanded = false, deckLandingUntil = 0;
  var navigationTarget = null, navigationTimer = 0;
  var docEl = document.documentElement;
  var track = document.getElementById('track');
  var nav = document.getElementById('nav');
  var plate = document.getElementById('plate');
  var glow = document.getElementById('glow');
  var deco = document.getElementById('deco');
  var tag = document.getElementById('tag');
  var hint = document.getElementById('hint');
  var glass = document.getElementById('glass');
  var ask = document.getElementById('ask');
  var dusk = document.getElementById('dusk');
  var works = document.getElementById('work');
  var wTitle = document.getElementById('wTitle');
  var wCar = document.getElementById('wCar');
  var workCard = wCar.querySelector('.viewport');
  var cardTrails = wCar.querySelectorAll('.card-trail');
  var dotsEl = document.getElementById('dots');
  var contact = document.getElementById('contact');
  var contactIn = document.getElementById('contactIn');
  var letters = Array.prototype.slice.call(document.querySelectorAll('.name .ch'));
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var vid = null;
  if (CLIP) {
    vid = document.createElement('video');
    vid.src = CLIP; vid.muted = true; vid.playsInline = true; vid.preload = 'auto';
    vid.setAttribute('aria-hidden', 'true');
    var img = document.getElementById('plateImg');
    img.parentNode.replaceChild(vid, img);
  }

  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function ease(t) { return t * t * (3 - 2 * t); }

  /* ---------- grainy brown triangle ---------- */
  var dctx = dusk.getContext('2d');
  var dW = 0, dH = 0, dNoise = null, dData = null, dBuf = null, dLast = -1;
  var BROWN32 = (255 << 24 | 0x33 << 16 | 0x41 << 8 | 0x4d) >>> 0;
  function sizeDusk() {
    var S = 3;
    dW = Math.max(1, Math.ceil(window.innerWidth / S));
    dH = Math.max(1, Math.ceil(window.innerHeight / S));
    dusk.width = dW; dusk.height = dH;
    dNoise = new Uint8Array(dW * dH);
    for (var i = 0; i < dNoise.length; i++) dNoise[i] = ((Math.random() + Math.random()) * 127.5) | 0;
    dData = dctx.createImageData(dW, dH);
    dBuf = new Uint32Array(dData.data.buffer);
    dLast = -1;
  }
  function drawDusk(r) {
    if (r === dLast) return;
    dLast = r;
    if (r <= 0.001) { dctx.clearRect(0, 0, dW, dH); return; }
    var hh = 4 * dH * Math.pow(r, 1.6); // triangle height in canvas pixels
    var b = 1.6 * hh;                   // half width of its base: wide and low, not a spike
    var len = Math.sqrt(hh * hh + b * b);
    var ya = dH - hh;
    var cx = dW / 2;
    var G = 0.5 * dH;                   // grain band: a long, loose gradient
    dBuf.fill(0);
    var y0 = Math.max(0, Math.floor(ya));
    for (var y = y0; y < dH; y++) {
      var base = (y - ya) * b;
      var row = y * dW;
      for (var x = 0; x < dW; x++) {
        var d = (base - Math.abs(x - cx) * hh) / len;
        if (d <= 0) continue;
        var c = d / G;
        if (c >= 1 || dNoise[row + x] < c * Math.sqrt(c) * 255) dBuf[row + x] = BROWN32;
      }
    }
    dctx.putImageData(dData, 0, 0);
  }

  /* ---------- scroll-driven state ---------- */
  function zoomAt(p) {
    if (p <= 0.38) return 1 + 0.42 * ease(p / 0.38);
    return 1.42 - 0.37 * ease(clamp((p - 0.38) / 0.5, 0, 1));
  }

  function apply(p, h) {
    if (vid && vid.duration) {
      try { vid.currentTime = p * vid.duration; } catch (e) {}
      plate.style.transform = '';
    } else {
      plate.style.transform = 'scale(' + zoomAt(p).toFixed(4) + ')';
    }

    var pulse = Math.sin(Math.PI * clamp((p - 0.12) / 0.26, 0, 1));
    glow.style.opacity = pulse.toFixed(3);
    glow.style.transform = 'scale(' + (0.6 + pulse * 0.9).toFixed(3) + ')';

    for (var i = 0; i < letters.length; i++) {
      var t = ease(clamp((p - (0.17 + i * 0.022)) / 0.22, 0, 1));
      var el = letters[i];
      if (t === 0) { el.style.transform = ''; el.style.opacity = ''; el.style.filter = ''; continue; }
      el.style.transform = 'translateX(' + (t * 2.8).toFixed(3) + 'em)';
      el.style.opacity = (1 - t).toFixed(3);
      el.style.filter = 'blur(' + (t * 8).toFixed(2) + 'px)';
    }
    tag.style.opacity = (1 - ease(clamp((p - 0.12) / 0.18, 0, 1))).toFixed(3);
    deco.style.opacity = (1 - ease(clamp((p - 0.04) / 0.2, 0, 1))).toFixed(3);
    hint.style.opacity = (1 - clamp(p / 0.05, 0, 1)).toFixed(3);

    // Page 2: glass rises from p 0.5, holds while h = 0, then leaves as the brown comes up.
    if (h > .02 && glass.classList.contains('is-typing')) { typingMode(false); queryInput.blur(); }
    var ex = ease(clamp(h / 0.4, 0, 1));
    var g = ease(clamp((p - 0.5) / 0.35, 0, 1));
    glass.style.opacity = (g * (1 - ex)).toFixed(3);
    glass.style.transform = 'translateY(' + ((1 - g) * 5 - ex * 6).toFixed(2) + '%) scale(' + (0.97 + 0.03 * g - 0.03 * ex).toFixed(4) + ')';
    var bl = 'blur(' + (g * 22).toFixed(1) + 'px)';
    glass.style.backdropFilter = bl; glass.style.webkitBackdropFilter = bl;
    glass.style.visibility = (g * (1 - ex)) > 0.01 ? 'visible' : 'hidden';
    glass.style.pointerEvents = (p > 0.9 && ex < 0.4) ? 'auto' : 'none';
    var a = ease(clamp((p - 0.78) / 0.17, 0, 1));
    ask.style.opacity = a.toFixed(3);
    ask.style.transform = 'translateY(' + ((1 - a) * 16).toFixed(1) + 'px)';

    // Transition: the grainy triangle rises (h 0.08 to 0.70), then My Work arrives on top of it (h 0.55 to 1).
    drawDusk(ease(clamp((h - 0.08) / 0.62, 0, 1)));
    var rv = clamp((h - 0.55) / 0.45, 0, 1);
    var e1 = ease(clamp(rv / 0.5, 0, 1));
    var e2 = ease(clamp((rv - 0.15) / 0.6, 0, 1));
    var e3 = ease(clamp((rv - 0.6) / 0.4, 0, 1));
    wTitle.style.opacity = e1.toFixed(3);
    wTitle.style.transform = 'translateY(' + ((1 - e1) * 36).toFixed(1) + 'px)';
    wCar.style.opacity = e2.toFixed(3);
    wCar.style.transform = 'translateY(' + ((1 - e2) * 70).toFixed(1) + 'px) scale(' + (0.94 + 0.06 * e2).toFixed(4) + ')';
    document.getElementById('workBrowse').style.opacity = e3.toFixed(3);
    works.style.visibility = rv > 0 ? 'visible' : 'hidden';
    works.style.pointerEvents = h >= .999 ? 'auto' : 'none';
    works.classList.toggle('is-ready', h >= .999);
  }

  function geometry() {
    var y = window.scrollY, vh = window.innerHeight;
    var H = track.getBoundingClientRect().top + y;
    // Use the actual sticky viewport so mobile browser chrome does not shorten a hold.
    var unit = document.getElementById('stage').offsetHeight;
    var start = H + unit * 0.8;
    var A = start + unit * 3;
    var workStart = A + unit;
    var B = workStart + unit * 1.5;
    var C = docEl.scrollHeight - vh;
    return { y: y, vh: vh, H: H, A: A, B: B, C: C, L: unit * 3,
      start: start, workStart: workStart, holdLength: unit, transition: unit * 1.5 };
  }

  function render() {
    var g = geometry();
    var p = clamp((g.y - g.start) / g.L, 0, 1);
    var h = clamp((g.y - g.workStart) / g.transition, 0, 1);
    if (reduce) { p = p > 0.5 ? 1 : 0; h = h > 0.5 ? 1 : 0; }
    document.getElementById('stage').style.setProperty('--hero-mouse-weight', (1 - ease(clamp(p / .55, 0, 1))).toFixed(4));
    document.getElementById('stage').classList.toggle('hero-decor-active', p < .55);
    apply(p, h);
    // Spawn and spin with the Ask-to-Work reveal; face forward when the transition ends.
    var spin = reduce ? 1 : ease(clamp((h - 0.55) / 0.45, 0, 1));
    var lift = Math.sin(Math.PI * spin);
    var hold = 0; // No secondary motion after the entry spin finishes.
    var float = Math.sin(Math.PI * hold);
    // Foreground card travels farther than its title and pagination, giving the stage depth.
    var arrival = reduce ? 1 : clamp((h - .55) / .45, 0, 1);
    var depth = (1 - arrival) * (1 - arrival);
    wTitle.style.transform = 'translateY(' + (reduce ? 0 : 36 * depth - 10 * hold).toFixed(2) + 'px)';
    wCar.style.transform = 'translateY(' + (reduce ? 0 : 100 * depth - 30 * hold).toFixed(2) + 'px) scale(' + (reduce ? 1 : .94 + .06 * arrival).toFixed(4) + ')';
    dotsEl.style.transform = 'translateY(' + (-5 * hold).toFixed(2) + 'px)';
    workCard.style.transform = 'translateY(' + (-18 * lift - 16 * float).toFixed(2) + 'px) rotateY(' + (360 * spin + 9 * Math.sin(2 * Math.PI * hold)).toFixed(2) + 'deg) rotateX(' + (12 * lift - 6 * float).toFixed(2) + 'deg) rotateZ(' + (-7 * Math.sin(2 * Math.PI * spin) + 2 * float).toFixed(2) + 'deg) scale(' + (1 - .09 * lift + .025 * float).toFixed(4) + ')';
    // Faint trailing silhouettes live behind the card and vanish at both ends of entry.
    var trailEnvelope = reduce ? 0 : Math.pow(Math.sin(Math.PI * spin), 1.5);
    for (var trailIndex = 0; trailIndex < cardTrails.length; trailIndex++) {
      var lag = trailIndex === 0 ? .07 : .035;
      var trailSpin = clamp(spin - lag, 0, 1);
      cardTrails[trailIndex].style.opacity = (trailEnvelope * (trailIndex === 0 ? .10 : .18)).toFixed(3);
      cardTrails[trailIndex].style.transform = 'translateX(' + (-trailEnvelope * (trailIndex === 0 ? 26 : 13)).toFixed(2) + 'px) translateY(' + (-18 * Math.sin(Math.PI * trailSpin)).toFixed(2) + 'px) rotateY(' + (360 * trailSpin).toFixed(2) + 'deg) rotateX(' + (12 * Math.sin(Math.PI * trailSpin)).toFixed(2) + 'deg) rotateZ(' + (-7 * Math.sin(2 * Math.PI * trailSpin)).toFixed(2) + 'deg) scale(' + (1 - .09 * Math.sin(Math.PI * trailSpin)).toFixed(4) + ')';
    }
    var shine = hold > 0 ? hold : spin;
    workCard.style.setProperty('--shine-x', (-140 + 280 * shine).toFixed(2) + '%');
    workCard.style.setProperty('--shine-opacity', (.85 * Math.sin(Math.PI * shine)).toFixed(3));
    var cTop = contact.getBoundingClientRect().top, cH = contact.offsetHeight;
    var aboutTop = document.getElementById('aboutPage').getBoundingClientRect().top;
    nav.classList.toggle('on-dark', h > .7 && aboutTop > 35);
    var activeNav = aboutTop <= g.vh * .35 ? '#about' : g.y >= g.workStart ? '#work' : '#home';
    nav.querySelectorAll('a[href="#home"],a[href="#work"],a[href="#about"]').forEach(function (link) {
      if (link.getAttribute('href') === activeNav && cTop > 0) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    var t2 = ease(clamp(1 - cTop / (g.vh * 0.6), 0, 1));
    contactIn.style.opacity = reduce ? '1' : (0.1 + 0.9 * t2).toFixed(3);
    contactIn.style.transform = reduce ? '' : 'translateY(' + ((1 - t2) * 40).toFixed(1) + 'px)';
  }

  /* Native wheel, touch and keyboard scrolling keep every transition scrubbable.
     No idle snapping: stopping your gesture stops the visual at that exact point. */
  function goTo(target) {
    clearTimeout(navigationTimer);
    navigationTarget = target;
    navigationTimer = setTimeout(function () { navigationTarget = null; }, 2200);
    deckReleased = target > geometry().B + 2;
    window.scrollTo({ top: target, behavior: reduce ? 'instant' : 'smooth' });
  }
  var ticking = false;
  function onScroll() {
    var bounds = geometry();
    if (navigationTarget !== null && Math.abs(bounds.y - navigationTarget) < 2) {
      navigationTarget = null;
      clearTimeout(navigationTimer);
    }
    if (navigationTarget === null && bounds.y < bounds.B - 20) { deckReleased = false; deckLanded = false; }
    if (navigationTarget === null && !deckReleased && !deckLanded && bounds.y >= bounds.B - 2) {
      deckLanded = true;
      deckLandingUntil = performance.now() + 650;
      deckWheelUsed = true;
      deckWheelLast = performance.now();
      window.scrollTo(0, bounds.B);
    }
    // Catch native momentum, touch flings and scrollbar jumps before they skip the deck.
    if (navigationTarget === null && !deckReleased && bounds.y > bounds.B) {
      window.scrollTo(0, bounds.B);
      deckWheelUsed = true;
      deckWheelLast = performance.now();
    }
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; render(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { sizeDusk(); onScroll(); });
  sizeDusk();
  render();

  /* ---------- nav ---------- */
  function navTo(sel, pick) {
    document.querySelector('a[href="' + sel + '"]').addEventListener('click', function (e) {
      e.preventDefault();
      goTo(pick(geometry()));
    });
  }
  navTo('#work', function (s) { return s.B; });
  navTo('#home', function (s) { return s.H; });
  navTo('#about', function (s) { return document.getElementById('aboutPage').getBoundingClientRect().top + window.scrollY; });
  navTo('#contact', function (s) { return s.C; });

  /* ---------- ask field ---------- */
  var chatFocusTimer = 0;
  var askDialog = document.getElementById('askDialog');
  var dialogMessages = document.getElementById('dialogMessages');
  var dialogQuestion = document.getElementById('dialogQuestion');
  function portfolioReply(question) {
    if (/focus|approach|design direction|设计方向/i.test(question)) return 'I’m an interaction designer with a background in product design, pursuing an MFA in Interactive Design at SCAD. My interests sit at the intersection of AI experiences, embodied interaction, and creative technology.';
    if (/start|which project|推荐/i.test(question)) return 'Start with “Moving toward feeling,” the touchless kitchen tablet interaction concept in My Work. It introduces the kind of interaction experiences I explore.';
    if (/role|contribution|职责/i.test(question) && !/looking|opportunit/i.test(question)) return 'This preview introduces the projects, but detailed role and contribution breakdowns have not been added yet. The full case studies will provide that context.';
    if (/tool|prototyp|工具/i.test(question)) return 'Interaction prototyping is part of my practice. The detailed tools and implementation notes for these projects have not been added to this preview yet.';
    if (/opportunit|looking|collaborat|求职/i.test(question)) return 'For current role interests, availability, or collaboration opportunities, please get in touch. Those details are still being finalized for this portfolio.';
    if (/contact|resume|email|联系|简历/i.test(question)) return 'You can find the Contact section at the end of the portfolio. The final email address and resume link are still being updated in this preview.';
    return 'This preview currently covers the suggested portfolio questions. More detailed answers will be added with the full project case studies.';
  }
  function addExchange(question) {
    [['user', question], ['reply', portfolioReply(question)]].forEach(function (item) {
      var message = document.createElement('p');
      message.className = 'chat-message chat-message--' + item[0];
      message.textContent = item[1];
      dialogMessages.appendChild(message);
    });
    dialogMessages.scrollTop = dialogMessages.scrollHeight;
  }
  function openConversation(question) {
    typingMode(false);
    queryInput.blur();
    dialogMessages.replaceChildren();
    dialogQuestion.value = '';
    glass.classList.add('is-chat');
    ask.inert = true;
    queryInput.value = question;
    askSuggestions.inert = true;
    askDialog.inert = false;
    askDialog.setAttribute('aria-hidden', 'false');
    addExchange(question);
    clearTimeout(chatFocusTimer);
    chatFocusTimer = setTimeout(function () {
      if (glass.classList.contains('is-chat')) document.getElementById('dialogClose').focus({ preventScroll: true });
    }, reduce ? 0 : 950);
  }
  function closeConversation() {
    clearTimeout(chatFocusTimer);
    askDialog.inert = true;
    askDialog.setAttribute('aria-hidden', 'true');
    glass.classList.remove('is-chat');
    ask.inert = false;
    typingMode(false);
    askSuggestions.querySelector('button').focus({ preventScroll: true });
  }
  document.getElementById('dialogClose').addEventListener('click', closeConversation);
  askDialog.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { e.preventDefault(); closeConversation(); }
  });
  document.getElementById('dialogCompose').addEventListener('submit', function (e) {
    e.preventDefault();
    var question = dialogQuestion.value.trim();
    if (!question) return;
    addExchange(question);
    dialogQuestion.value = '';
    dialogQuestion.focus({ preventScroll: true });
  });
  var queryInput = document.getElementById('q');
  var askSuggestions = document.getElementById('askSuggestions');
  askSuggestions.querySelectorAll('.suggestion-chip').forEach(function (button) {
    button.addEventListener('click', function () {
      queryInput.value = button.dataset.question;
      document.getElementById('note').textContent = '';
      queryInput.dispatchEvent(new Event('input', { bubbles: true }));
      openConversation(button.dataset.question);
    });
  });
  var askKeyboard = document.getElementById('askKeyboard');
  function typingMode(open) {
    open = open && !glass.classList.contains('is-chat');
    if (!open) clearKeyboardFeedback();
    glass.classList.toggle('is-typing', open);
    askSuggestions.inert = open || glass.classList.contains('is-chat');
    askSuggestions.setAttribute('aria-hidden', open ? 'true' : 'false');
    askKeyboard.setAttribute('aria-hidden', open ? 'false' : 'true');
    askKeyboard.inert = !open;
    queryInput.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function keyboardKey(label, value, css) {
    var key = document.createElement('button');
    key.type = 'button'; key.className = 'keyboard-key' + (css ? ' keyboard-key--' + css : '');
    key.textContent = label;
    key.dataset.key = value;
    key.addEventListener('pointerdown', function (e) { e.preventDefault(); });
    key.addEventListener('click', function () {
      queryInput.focus({ preventScroll: true });
      pulseKey(key);
      if (value === 'shift') { virtualShift = !virtualShift; updateKeyCase(virtualShift); return; }
      if (value === 'enter') { ask.requestSubmit(); return; }
      var start = queryInput.selectionStart, end = queryInput.selectionEnd;
      if (value === 'backspace') {
        if (start === end && start > 0) start--;
        queryInput.setRangeText('', start, end, 'end');
      } else queryInput.setRangeText(virtualShift ? value.toUpperCase() : value, start, end, 'end');
      if (virtualShift) { virtualShift = false; updateKeyCase(false); }
      queryInput.dispatchEvent(new Event('input', { bubbles: true }));
    });
    return key;
  }
  ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].forEach(function (letters) {
    var row = document.createElement('div'); row.className = 'keyboard-row';
    if (letters === 'ZXCVBNM') row.appendChild(keyboardKey('SHIFT', 'shift', 'wide'));
    letters.split('').forEach(function (letter) { row.appendChild(keyboardKey(letter, letter.toLowerCase())); });
    askKeyboard.appendChild(row);
  });
  var bottomRow = document.createElement('div'); bottomRow.className = 'keyboard-row';
  bottomRow.appendChild(keyboardKey('DELETE', 'backspace', 'wide'));
  bottomRow.appendChild(keyboardKey('SPACE', ' ', 'space'));
  bottomRow.appendChild(keyboardKey('ASK ↵', 'enter', 'wide'));
  askKeyboard.appendChild(bottomRow);
  var virtualShift = false, keyFeedbackTimer = 0;
  var releaseTimers = new Map();
  function pulseKey(key) {
    clearTimeout(releaseTimers.get(key));
    key.classList.add('is-pressed');
    releaseTimers.set(key, setTimeout(function () { key.classList.remove('is-pressed'); releaseTimers.delete(key); }, 180));
  }
  function updateKeyCase(upper) {
    askKeyboard.querySelectorAll('[data-key]').forEach(function (key) {
      if (/^[a-z]$/.test(key.dataset.key)) key.textContent = upper ? key.dataset.key.toUpperCase() : key.dataset.key.toLowerCase();
      if (key.dataset.key === 'shift') key.classList.toggle('is-modifier', upper);
    });
  }
  function clearKeyboardFeedback() {
    if (!askKeyboard) return;
    releaseTimers && releaseTimers.forEach(function (timer) { clearTimeout(timer); });
    if (releaseTimers) releaseTimers.clear();
    askKeyboard.querySelectorAll('.is-pressed, .is-modifier').forEach(function (key) { key.classList.remove('is-pressed', 'is-modifier'); });
    ask.classList.remove('is-keying');
    virtualShift = false;
  }
  function keyForEvent(e) {
    var value = /^Key[A-Z]$/.test(e.code) ? e.code.slice(3).toLowerCase()
      : e.code === 'Space' ? ' ' : e.key === 'Backspace' ? 'backspace'
      : e.key === 'Enter' ? 'enter' : e.key === 'Shift' || e.key === 'CapsLock' ? 'shift' : e.key.toLowerCase();
    return Array.prototype.find.call(askKeyboard.querySelectorAll('[data-key]'), function (key) { return key.dataset.key === value; });
  }
  queryInput.addEventListener('keydown', function (e) {
    if (!glass.classList.contains('is-typing')) return;
    var key = keyForEvent(e);
    if (key) {
      clearTimeout(releaseTimers.get(key));
      key.classList.add('is-pressed');
    }
    updateKeyCase(e.shiftKey !== Boolean(e.getModifierState('CapsLock')));
  });
  window.addEventListener('keyup', function (e) {
    var key = keyForEvent(e);
    if (key) pulseKey(key);
    if (document.activeElement === queryInput) updateKeyCase(e.shiftKey !== Boolean(e.getModifierState('CapsLock')));
  });
  queryInput.addEventListener('input', function () {
    if (!glass.classList.contains('is-typing')) return;
    ask.classList.add('is-keying');
    clearTimeout(keyFeedbackTimer);
    keyFeedbackTimer = setTimeout(function () { ask.classList.remove('is-keying'); }, 160);
  });
  window.addEventListener('blur', clearKeyboardFeedback);
  queryInput.addEventListener('focus', function () { typingMode(true); });
  glass.addEventListener('focusout', function (e) { if (!glass.contains(e.relatedTarget)) typingMode(false); });
  document.addEventListener('pointerdown', function (e) {
    if (!glass.contains(e.target)) { typingMode(false); queryInput.blur(); }
  });
  queryInput.addEventListener('keydown', function (e) { if (e.key === 'Escape') { typingMode(false); queryInput.blur(); } });
  var note = document.getElementById('note');
  ask.addEventListener('submit', function (e) {
    e.preventDefault();
    var question = queryInput.value.trim();
    if (question) openConversation(question);
    else queryInput.focus({ preventScroll: true });
  });

  /* ---------- contact: copy the address ---------- */
  var mail = document.getElementById('mail');
  var addr = document.getElementById('addr');
  var copyLabel = document.getElementById('copyLabel');
  mail.addEventListener('click', function () {
    var text = addr.textContent;
    function done(ok) {
      copyLabel.textContent = ok ? 'Copied' : 'Select';
      setTimeout(function () { copyLabel.textContent = 'Copy'; }, 1600);
    }
    function fallback() {
      try {
        var r = document.createRange(); r.selectNodeContents(addr);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      } catch (err) {}
      done(false);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
    } else { fallback(); }
  });

  /* ---------- carousel ---------- */
  var slides = document.getElementById('slides');
  var count = slides.children.length, idx = 0, dots = [];
  var cardMoving = false, cardTimer = 0, cardFinishedAt = -Infinity;
  for (var d = 0; d < count; d++) {
    (function (n) {
      var b = document.createElement('button');
      b.type = 'button'; b.setAttribute('aria-label', 'Go to project ' + (n + 1));
      b.addEventListener('click', function () { go(n); });
      dotsEl.appendChild(b); dots.push(b);
    })(d);
  }
  function updateCards() {
    document.getElementById('browseCount').textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(count).padStart(2, '0');
    workCard.setAttribute('aria-busy', cardMoving ? 'true' : 'false');
    dots.forEach(function (b, k) {
      b.disabled = cardMoving;
      b.setAttribute('aria-current', k === idx ? 'true' : 'false');
    });
    Array.prototype.forEach.call(slides.children, function (slide, k) {
      slide.setAttribute('aria-hidden', k === idx ? 'false' : 'true');
      slide.inert = k !== idx;
    });
  }
  function unlockCard() {
    clearTimeout(cardTimer);
    cardMoving = false;
    cardFinishedAt = performance.now();
    // Release input with the animation, even if the trackpad keeps sending tiny tail events.
    wheelTotal = 0;
    deckWheelTotal = 0;
    updateCards();
  }
  function go(n) {
    if (cardMoving || geometry().y < geometry().B - 2) return;
    n = clamp(n, 0, count - 1);
    if (n === idx) { updateCards(); return; }
    idx = n;
    cardMoving = !reduce;
    slides.style.transform = 'translateX(' + (-idx * 100) + '%)';
    updateCards();
    // Safety release if the browser cancels or omits transitionend.
    if (cardMoving) cardTimer = setTimeout(unlockCard, 750);
  }
  slides.addEventListener('transitionend', function (e) {
    if (e.target === slides && e.propertyName === 'transform') unlockCard();
  });
  slides.addEventListener('transitioncancel', function (e) {
    if (e.target === slides && e.propertyName === 'transform') unlockCard();
  });

  // Snap full cards. Ignore the tail of a consumed gesture, and rearm on a new gesture.
  var wheelTotal = 0, deckWheelTotal = 0, deckWheelUsed = true, deckWheelLast = -Infinity;
  var previousWheelMagnitude = 0;
  function inCardStage() {
    var g = geometry();
    return g.y >= g.B - 2 && g.y <= g.B + g.holdLength + 2;
  }
  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey || !inCardStage()) return;
    var horizontal = e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY);
    if (horizontal && !wCar.contains(e.target)) return;
    var delta = horizontal ? (e.shiftKey && Math.abs(e.deltaX) < 1 ? e.deltaY : e.deltaX) : e.deltaY;
    if (!delta) return;
    var now = performance.now();
    var magnitude = Math.abs(delta);
    // Tiny momentum events must not keep the gesture locked forever.
    if (magnitude < 4) { if (e.cancelable) e.preventDefault(); return; }
    var gap = now - deckWheelLast;
    var freshPush = !cardMoving && now - cardFinishedAt > 150 && magnitude >= 12 && magnitude > previousWheelMagnitude * 1.8;
    deckWheelLast = now;
    previousWheelMagnitude = magnitude;
    if (now < deckLandingUntil || cardMoving) {
      if (e.cancelable) e.preventDefault();
      deckWheelUsed = true;
      deckWheelTotal = 0;
      return;
    }
    if (gap > 120 || freshPush) { deckWheelUsed = false; deckWheelTotal = 0; }
    if (deckWheelUsed) { if (e.cancelable) e.preventDefault(); return; }
    var direction = delta > 0 ? 1 : -1;
    if (!horizontal && ((direction > 0 && idx === count - 1) || (direction < 0 && idx === 0))) {
      if (direction > 0) deckReleased = true;
      return;
    }
    if (e.cancelable) e.preventDefault();
    delta *= e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 240 : 1;
    if (deckWheelTotal * delta < 0) deckWheelTotal = 0;
    deckWheelTotal += delta;
    if (Math.abs(deckWheelTotal) >= 22) {
      deckWheelUsed = true;
      deckWheelTotal = 0;
      go(idx + direction);
    }
  }, { passive: false });

  var deckTouch = null;
  window.addEventListener('touchstart', function (e) {
    deckTouch = inCardStage() && e.touches.length === 1
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY, axis: '', used: cardMoving || performance.now() < deckLandingUntil } : null;
  }, { passive: true });
  window.addEventListener('touchmove', function (e) {
    if (!deckTouch || e.touches.length !== 1) return;
    var dx = deckTouch.x - e.touches[0].clientX, dy = deckTouch.y - e.touches[0].clientY;
    if (!deckTouch.axis && Math.max(Math.abs(dx), Math.abs(dy)) > 8)
      deckTouch.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    if (!deckTouch.axis) return;
    if (deckTouch.used || cardMoving) { if (e.cancelable) e.preventDefault(); return; }
    var distance = deckTouch.axis === 'x' ? dx : dy;
    var direction = distance > 0 ? 1 : -1;
    if (deckTouch.axis === 'y' && ((direction > 0 && idx === count - 1) || (direction < 0 && idx === 0))) {
      if (direction > 0) deckReleased = true;
      return;
    }
    if (e.cancelable) e.preventDefault();
    if (Math.abs(distance) >= 28) { deckTouch.used = true; go(idx + direction); }
  }, { passive: false });
  window.addEventListener('touchend', function () { deckTouch = null; }, { passive: true });
  window.addEventListener('touchcancel', function () { deckTouch = null; }, { passive: true });
  window.addEventListener('keydown', function (e) {
    if (!inCardStage() || e.altKey || e.ctrlKey || e.metaKey ||
      (e.target.closest && e.target.closest('input,textarea,select,button,a,[contenteditable]'))) return;
    var direction = e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey) ? 1
      : e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey) ? -1 : 0;
    if (!direction) return;
    if (direction > 0 && idx === count - 1 && !cardMoving) deckReleased = true;
    if (cardMoving || (direction > 0 && idx < count - 1) || (direction < 0 && idx > 0)) {
      e.preventDefault();
      if (!e.repeat) go(idx + direction);
    }
  });
  // Pointer motion lives on the image frame, independently of the plate's scroll zoom.
  if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var pointerStage = document.getElementById('stage');
    var pointerTarget = { x: 0, y: 0, lightX: innerWidth / 2, lightY: innerHeight / 2, visible: 0 };
    var pointerCurrent = { x: 0, y: 0, lightX: innerWidth / 2, lightY: innerHeight / 2, visible: 0 };
    var pointerFrame = 0;
    var cursorLayer = document.createElement('div');
    cursorLayer.className = 'hand-cursor'; cursorLayer.setAttribute('aria-hidden', 'true');
    var cursorTail = [];
    for (var tailIndex = 0; tailIndex < 22; tailIndex++) {
      var tail = document.createElement('i'); tail.className = 'hand-cursor-trail';
      cursorLayer.appendChild(tail);
      cursorTail.push({ element: tail, x: innerWidth / 2, y: innerHeight / 2 });
    }
    var cursorCore = document.createElement('div'); cursorCore.className = 'hand-cursor-core';
    cursorLayer.appendChild(cursorCore); document.body.appendChild(cursorLayer);
    var contactAmount = 0;

    function drawHeroPointer() {
      var unsettled = false;
      Object.keys(pointerCurrent).forEach(function (key) {
        var difference = pointerTarget[key] - pointerCurrent[key];
        pointerCurrent[key] += difference * .085;
        if (Math.abs(difference) > .015) unsettled = true;
      });
      pointerStage.style.setProperty('--hero-mouse-x', pointerCurrent.x.toFixed(3) + 'px');
      pointerStage.style.setProperty('--hero-mouse-y', pointerCurrent.y.toFixed(3) + 'px');
      pointerStage.style.setProperty('--hero-light-x', pointerCurrent.lightX.toFixed(2) + 'px');
      pointerStage.style.setProperty('--hero-light-y', pointerCurrent.lightY.toFixed(2) + 'px');
      pointerStage.style.setProperty('--hero-pointer-visible', pointerCurrent.visible.toFixed(4));
      var weight = parseFloat(pointerStage.style.getPropertyValue('--hero-mouse-weight') || '1');
      var cursorVisible = weight > .1 && pointerCurrent.visible > .05;
      cursorLayer.classList.toggle('is-visible', cursorVisible);
      document.body.classList.toggle('has-hand-cursor', cursorVisible);
      var mouseX = pointerTarget.lightX, mouseY = pointerTarget.lightY;
      var handBounds = plate.getBoundingClientRect();
      // Index fingertip, measured from the artwork: approximately (289, 200) in 1024 × 640.
      var fingerX = handBounds.left + handBounds.width * .282;
      var fingerY = handBounds.top + handBounds.height * .313;
      var distance = Math.hypot(mouseX - fingerX, mouseY - fingerY);
      var touching = cursorVisible && distance < (contactAmount > .5 ? 78 : 60);
      contactAmount += ((touching ? 1 : 0) - contactAmount) * .12;
      if (Math.abs(contactAmount - (touching ? 1 : 0)) > .005) unsettled = true;
      cursorLayer.classList.toggle('is-touching', touching);
      cursorCore.style.transform = 'translate3d(' + mouseX + 'px,' + mouseY + 'px,0) rotate(' + (contactAmount * 32).toFixed(2) + 'deg)';
      var trailX = mouseX, trailY = mouseY;
      cursorTail.forEach(function (point, index) {
        var follow = .27 - contactAmount * .12;
        point.x += (trailX - point.x) * follow;
        point.y += (trailY - point.y) * follow;
        if (Math.abs(trailX - point.x) + Math.abs(trailY - point.y) > .1) unsettled = true;
        var scale = (1 - index / 23) * (1.05 + contactAmount * 1.2);
        point.element.style.transform = 'translate3d(' + point.x.toFixed(2) + 'px,' + point.y.toFixed(2) + 'px,0) scale(' + scale.toFixed(3) + ')';
        point.element.style.opacity = ((1 - index / 22) * (.66 + contactAmount * .25)).toFixed(3);
        trailX = point.x; trailY = point.y;
      });
      pointerFrame = unsettled ? requestAnimationFrame(drawHeroPointer) : 0;
    }
    function queueHeroPointer() { if (!pointerFrame) pointerFrame = requestAnimationFrame(drawHeroPointer); }
    window.addEventListener('pointermove', function (e) {
      if (document.documentElement.hasAttribute('data-intro') || e.pointerType !== 'mouse' || window.scrollY > geometry().start + geometry().L * .55) return;
      pointerTarget.x = (e.clientX / innerWidth - .5) * 100;
      pointerTarget.y = (e.clientY / innerHeight - .5) * 70;
      pointerTarget.lightX = e.clientX;
      pointerTarget.lightY = e.clientY;
      pointerTarget.visible = 1;
      queueHeroPointer();
    }, { passive: true });
    function resetHeroPointer() {
      pointerTarget.x = 0; pointerTarget.y = 0; pointerTarget.visible = 0;
      queueHeroPointer();
    }
    document.documentElement.addEventListener('pointerleave', resetHeroPointer);
    window.addEventListener('blur', resetHeroPointer);
    window.addEventListener('scroll', queueHeroPointer, { passive: true });
  }
  // Ambient coordinate telemetry evolves on its own, at a fixed screen position.
  var heroTimeFormat = new Intl.DateTimeFormat('en-GB', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  function updateHeroCoordinates() {
    if (document.hidden || !document.getElementById('stage').classList.contains('hero-decor-active')) return;
    document.getElementById('heroClock').textContent = 'T ' + heroTimeFormat.format(new Date()) + '.' + String(new Date().getMilliseconds()).padStart(3, '0');
    if (reduce) return;
    var seconds = performance.now() / 1000;
    var latitude = 35.6762 + Math.sin(seconds * 4.7) * .085 + Math.sin(seconds * 13.1) * .014 + Math.sin(seconds * 39.7) * .002;
    var longitude = 139.6503 + Math.cos(seconds * 3.9) * .12 + Math.sin(seconds * 11.3) * .019 + Math.cos(seconds * 35.3) * .003;
    document.getElementById('heroCoordX').textContent = latitude.toFixed(6) + '° N';
    document.getElementById('heroCoordY').textContent = longitude.toFixed(6) + '° E';
  }
  updateHeroCoordinates();
  setInterval(updateHeroCoordinates, reduce ? 1000 : 33);
  var localeText = {
    'Available for job': '开放工作机会', 'Work': '作品', 'About': '关于',
    'Interaction Designer': '交互设计师', 'Human design system / Emerging technology': '以人为本的设计 / 新兴技术',
    'Scroll / Explore': '滚动探索', 'My Work': '我的作品', 'SCROLL TO EXPLORE': '滚动浏览作品',
    'A FEW PLACES TO START': '你可能想了解', 'Your design focus': '你的设计方向',
    'Where should I start?': '推荐先看哪个项目？', 'Your role in the project': '你在项目中的职责',
    'Prototyping & tools': '原型与工具', 'Roles & opportunities': '求职与合作', 'Contact & resume': '联系与简历',
    'Ask Zhaolin': '与 Zhaolin 对话', 'PORTFOLIO Q&A / PREVIEW': '作品集问答 / 预览',
    'SEND ↗': '发送 ↗', 'Contact': '联系', "Let's make it happen.": '一起让想法落地。',
    'Moving toward feeling': '向感知靠近', 'Touchless kitchen tablet. Interaction concept.': '免触控厨房平板 · 交互概念',
    'An experience-based concept.': '以体验为核心的概念探索。'
  };
  var localizedNodes = [];
  var textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (textWalker.nextNode()) {
    var textNode = textWalker.currentNode;
    var original = textNode.textContent.trim();
    if (localeText[original]) localizedNodes.push({ node: textNode, en: textNode.textContent, zh: textNode.textContent.replace(original, localeText[original]) });
  }
  document.getElementById('navLanguage').addEventListener('change', function (e) {
    var chinese = e.target.value === 'zh';
    document.documentElement.lang = chinese ? 'zh-CN' : 'en';
    localizedNodes.forEach(function (item) { item.node.textContent = chinese ? item.zh : item.en; });
    queryInput.placeholder = chinese ? '你想了解 Zhaolin 的什么？' : 'Ask anything about Zhaolin';
    dialogQuestion.placeholder = chinese ? '继续提问…' : 'Ask a follow-up question…';
  });
  // A brief opening sequence, once per tab session. It never waits for remote assets.
  if (document.documentElement.hasAttribute('data-intro')) {
    var opening = document.getElementById('opening');
    var openingSkip = document.getElementById('openingSkip');
    var openingFinished = false;
    var openingSurfaces = [nav, track, document.getElementById('aboutPage'), contact];
    openingSurfaces.forEach(function (element) { element.inert = true; });
    openingSkip.focus({ preventScroll: true });
    var openingTick = setInterval(function () {
      var time = performance.now() / 1000;
      document.getElementById('openingCoordinates').textContent = (35.6762 + Math.sin(time * 5) * .08).toFixed(6) + '° N / ' + (139.6503 + Math.cos(time * 4) * .12).toFixed(6) + '° E';
    }, 50);
    function finishOpening() {
      if (openingFinished) return;
      openingFinished = true;
      clearInterval(openingTick);
      clearTimeout(openingAuto);
      try { sessionStorage.setItem('zhaolin-intro-seen','1'); } catch(e) {}
      document.documentElement.setAttribute('data-intro','leaving');
      setTimeout(function () {
        document.documentElement.removeAttribute('data-intro');
        openingSurfaces.forEach(function (element) { element.inert = false; });
        opening.remove();
      }, 880);
    }
    var openingAuto = setTimeout(finishOpening, 1800);
    openingSkip.addEventListener('click', finishOpening);
    opening.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') finishOpening();
      if (e.key === 'Tab') { e.preventDefault(); openingSkip.focus(); }
    });
  } else document.getElementById('opening').remove();
  updateCards();
})();
