(function () {

  var deckReleased = false, deckLanded = false, deckLandingUntil = 0;
  var navigationTarget = null, navigationTimer = 0;
  var docEl = document.documentElement;
  var track = document.getElementById('track');
  var nav = document.getElementById('nav');
  var plate = document.getElementById('plate');
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
  var mobileStage = window.matchMedia('(max-width: 800px), (pointer: coarse)');
  var stage = document.getElementById('stage');
  var aboutTrack = document.getElementById('aboutPage');
  var aboutScene = aboutTrack.querySelector('.about-page');
  var aboutEntering = false;
  var contactTrack = document.getElementById('contactTrack');
  var contactVideo = document.getElementById('contactVideo');
  var contactVideoTarget = 0;
  var contactDusk = document.getElementById('contactDusk');
  var contactDuskContext = contactDusk.getContext('2d');
  var contactDuskLast = -1;
  function seekContactVideo() {
    if (contactVideo.readyState < 1 || contactVideo.seeking) return;
    if (Math.abs(contactVideo.currentTime - contactVideoTarget) > 1 / 120)
      contactVideo.currentTime = contactVideoTarget;
  }
  contactVideo.addEventListener('loadedmetadata', seekContactVideo);
  contactVideo.addEventListener('seeked', seekContactVideo);


  // WebKit can move a sticky layer before resizing it as browser chrome collapses.
  // Pin the mobile scene explicitly; keep it inside its track at either boundary.
  function positionStage() {
    var mobile = mobileStage.matches;
    track.classList.toggle('mobile-track', mobile);
    if (!mobile) {
      stage.classList.remove('scene-fixed', 'scene-ended');
      return;
    }
    var bounds = track.getBoundingClientRect();
    var end = bounds.bottom <= stage.offsetHeight;
    stage.classList.toggle('scene-fixed', bounds.top <= 0 && !end);
    stage.classList.toggle('scene-ended', end);
  }

  var heroVideo = window.createHeroVideo(plate, reduce);

  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function ease(t) { return t * t * (3 - 2 * t); }

  /* ---------- grain rises from below and adheres to the top ---------- */
  var dctx = dusk.getContext('2d');
  var dW = 0, dH = 0, dNoise = null, dWave = null, dEdge = null, dData = null, dBuf = null, dLast = -1;
  var BROWN32 = (255 << 24 | 0x33 << 16 | 0x41 << 8 | 0x4d) >>> 0;
  function sizeDusk() {
    var S = 3;
    dW = Math.max(1, Math.ceil(window.innerWidth / S));
    dH = Math.max(1, Math.ceil(window.innerHeight / S));
    dusk.width = dW; dusk.height = dH;
    dNoise = new Uint8Array(dW * dH);
    for (var i = 0; i < dNoise.length; i++) dNoise[i] = (Math.random() * 255) | 0;
    dWave = new Float32Array(dW);
    dEdge = new Float32Array(dW);
    for (var x = 0; x < dW; x++) {
      var u = x / Math.max(1, dW - 1);
      dWave[x] = dH * (.025 * Math.sin(u * Math.PI) + .008 * Math.sin(u * Math.PI * 4));
    }
    dData = dctx.createImageData(dW, dH);
    dBuf = new Uint32Array(dData.data.buffer);
    dLast = -1;
    contactDusk.width = dW; contactDusk.height = dH;
    contactDuskLast = -1;
  }
  function drawDusk(r, exiting) {
    var key = exiting ? -2 - r : r;
    if (key === dLast) return;
    dLast = key;
    if (r <= 0.001) { dctx.clearRect(0, 0, dW, dH); return; }
    // Rise from the bottom first. Once the crest meets the ceiling, keep it
    // attached there and spread sideways until the entire screen is filled.
    var band = dH * .22;
    // The whole mass starts as separated grains, including its centre.
    // Only later do those grains accumulate into an uninterrupted solid.
    var cohesion = .12 + .88 * ease(clamp((r - .25) / .75, 0, 1));
    var rise = clamp(r / .58, 0, 1);
    var spread = ease(clamp((r - .58) / .42, 0, 1));
    var crest = dH * (1 - rise) + band * (1 - 2 * rise);
    for (var x = 0; x < dW; x++) {
      var side = Math.abs(x / Math.max(1, dW - 1) * 2 - 1);
      // A wide, shallow crest: use viewport width so its obtuse angle remains
      // consistent on both portrait phones and wide desktop screens.
      dEdge[x] = crest + (exiting ? -rise : 1) * dW * .28 * (1 - spread) * side + dWave[x] * (1 - spread);
    }
    dBuf.fill(0);
    for (var y = 0; y < dH; y++) {
      var row = y * dW;
      for (var x = 0; x < dW; x++) {
        var sampleY = exiting ? dH - 1 - y : y;
        var c = clamp((sampleY - dEdge[x]) / band, 0, 1);
        var density = c * c * (3 - 2 * c) * cohesion;
        if (density >= 1 || (density > 0 && dNoise[row + x] < density * 255)) dBuf[row + x] = BROWN32;
      }
    }
    dctx.putImageData(dData, 0, 0);
  }

  function drawDuskExit(progress) {
    // Mirror the entry vertically and play its exact grain/triangle timeline backward.
    drawDusk(1 - ease(clamp((progress - .04) / .80, 0, 1)), true);
  }

  function drawContactExit(progress) {
    if (progress === contactDuskLast) return;
    contactDuskLast = progress;
    // A broad dissolution wake, rather than a thin noisy outline. The solid
    // front retreats first and leaves a full triangular field of grains behind.
    var t = ease(clamp((progress - .04) / .80, 0, 1));
    var band = dH * .22;
    var wake = dH * 1.05;
    var crest = dH + wake - t * (dH + 2 * wake + dW * .28);
    var slope = dW * .28 * (1 - t);
    dBuf.fill(0);
    for (var x = 0; x < dW; x++) {
      var side = Math.abs(x / Math.max(1, dW - 1) * 2 - 1);
      dEdge[x] = crest + slope * side + dWave[x] * Math.sin(Math.PI * t);
    }
    for (var y = 0; y < dH; y++) {
      var row = y * dW;
      for (var x = 0; x < dW; x++) {
        var distance = dEdge[x] - y;
        var c = clamp(distance / wake, 0, 1);
        // Use the entry's grain cohesion curve across the entire moving wake.
        var cohesion = .12 + .88 * ease(clamp((c - .25) / .75, 0, 1));
        var fringe = ease(clamp(distance / band, 0, 1));
        var density = fringe * cohesion;
        if (density >= 1 || (density > 0 && dNoise[row + x] < density * 255))
          dBuf[row + x] = BROWN32;
      }
    }
    contactDuskContext.putImageData(dData, 0, 0);
  }

  /* ---------- scroll-driven state ---------- */
  function apply(p, h, departure) {
    heroVideo.update(p);
    plate.style.transform = '';


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

    // Page 2: glass rises from p 0.5, holds while h = 0, then recedes as the grain rises from below.
    if (h > .02 && glass.classList.contains('is-typing')) { typingMode(false); queryInput.blur(); }
    var ex = ease(clamp((h - .18) / .5, 0, 1));
    var g = ease(clamp((p - 0.5) / 0.35, 0, 1));
    glass.style.opacity = (g * (1 - ex)).toFixed(3);
    glass.style.transform = 'translateY(' + ((1 - g) * 10 - ex * 6).toFixed(2) + '%) scaleX(' + (.82 + .18 * g - .03 * ex).toFixed(4) + ') scaleY(' + (.46 + .54 * g - .03 * ex).toFixed(4) + ')';
    var bl = 'blur(' + (g * 22).toFixed(1) + 'px)';
    glass.style.backdropFilter = bl; glass.style.webkitBackdropFilter = bl;
    glass.style.visibility = (g * (1 - ex)) > 0.01 ? 'visible' : 'hidden';
    glass.style.pointerEvents = (p > 0.9 && ex < 0.4) ? 'auto' : 'none';
    var a = ease(clamp((p - 0.78) / 0.17, 0, 1));
    ask.style.opacity = a.toFixed(3);
    ask.style.transform = 'translateY(' + ((1 - a) * 16).toFixed(1) + 'px)';

    // Transition: grain rises from below, pins to the ceiling, then spreads (h .04 to .84).
    if (departure > 0) drawDuskExit(departure);
    else drawDusk(ease(clamp(h / 0.84, 0, 1)));
    var rv = clamp((h - 0.55) / 0.45, 0, 1);
    var e1 = ease(clamp(rv / 0.5, 0, 1));
    works.style.setProperty('--work-atmosphere', e1.toFixed(3));
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
    var workStart = A + unit * .2;
    var B = workStart + unit * 2.4;
    var C = docEl.scrollHeight - vh;
    return { y: y, vh: vh, H: H, A: A, B: B, C: C, L: unit * 3,
      start: start, workStart: workStart, holdLength: unit, transition: unit * 2.4, veilLength: unit * .65, galleryStart: B + unit * .65, galleryLength: unit * 2.4, galleryEnd: B + unit * 3.05, exitLength: unit * 2.4 };
  }

  function render() {
    positionStage();
    var g = geometry();
    stage.classList.remove('work-locked');
    var veilProgress = reduce ? 1 : ease(clamp((g.y - g.B) / g.veilLength, 0, 1));
    works.style.setProperty('--work-veil-reveal', (veilProgress * 100).toFixed(3) + '%');
    works.classList.toggle('work-veiled', veilProgress < .98);
    if (slides && typeof galleryTarget === 'number') moveGallery(clamp((g.y - g.galleryStart) / g.galleryLength, 0, 1) * galleryMax());
    var p = clamp((g.y - g.start) / g.L, 0, 1);
    var h = clamp((g.y - g.workStart) / g.transition, 0, 1);
    if (reduce) { p = p > 0.5 ? 1 : 0; h = h > 0.5 ? 1 : 0; }
    document.getElementById('stage').style.setProperty('--hero-mouse-weight', (1 - ease(clamp(p / .55, 0, 1))).toFixed(4));
    document.getElementById('stage').classList.toggle('hero-decor-active', p < .55);
    var departure = clamp((g.y - g.galleryEnd) / document.getElementById('stage').offsetHeight, 0, 1);
    if (reduce) departure = departure > .5 ? 1 : 0;
    apply(p, h, 0);
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
    // Hold both scenes in the viewport while the grain leaves upwards. The
    // About placeholder preserves document height during the fixed handoff.
    var entering = false;
    if (entering !== aboutEntering) {
      if (entering) aboutTrack.style.minHeight = aboutTrack.offsetHeight + 'px';
      aboutTrack.classList.toggle('is-entering', entering);
      if (!entering) aboutTrack.style.minHeight = '';
      aboutEntering = entering;
    }
    stage.classList.toggle('work-exiting', entering);
    stage.classList.toggle('work-departed', departure >= 1);
    works.inert = departure > 0;
    aboutScene.inert = entering;
    works.style.opacity = '1';
    works.style.transform = '';
    if (departure > 0) {
      works.style.pointerEvents = 'none';
      works.classList.remove('is-ready');
    }
    var aboutReveal = ease(clamp((departure - .2) / .65, 0, 1));
    aboutScene.querySelectorAll('.about-copy, .about-portrait').forEach(function (element) {
      element.style.opacity = entering ? aboutReveal.toFixed(3) : '';
      element.style.transform = entering ? 'translateY(' + (24 * (1 - aboutReveal)).toFixed(2) + 'px)' : '';
    });
    var cTop = contact.getBoundingClientRect().top, cH = contact.offsetHeight;
    var aboutTop = document.getElementById('aboutPage').getBoundingClientRect().top;
    var archiveProgress = clamp(-aboutTop / (aboutTrack.offsetHeight - aboutScene.offsetHeight), 0, 1);
    var open = reduce ? 1 : ease(clamp(archiveProgress / .24, 0, 1));
    var lift = reduce ? 1 : ease(clamp((archiveProgress - .18) / .25, 0, 1));
    var feed = reduce ? 1 : clamp((archiveProgress - .3) / .48, 0, 1);
    var paper = aboutScene.querySelector('.archive-paper');
    var output = aboutScene.querySelector('.archive-output');
    var reading = ease(clamp((archiveProgress - .78) / .22, 0, 1));
    var overflow = Math.max(0, paper.offsetHeight - (aboutScene.offsetHeight - output.offsetTop) + 24);
    aboutScene.style.setProperty('--archive-open', open);
    aboutScene.style.setProperty('--archive-lift', lift);
    aboutScene.style.setProperty('--archive-feed', feed);
    // After feeding, move the entire archive upward for reading. Moving only
    // the sheet would pull it back into the printer slot and look like a bounce.
    aboutScene.style.setProperty('--archive-overflow', overflow.toFixed(2) + 'px');
    aboutScene.style.setProperty('--archive-scene-read', (-overflow * reading).toFixed(2) + 'px');
    aboutScene.style.setProperty('--archive-read', '0px');
    aboutScene.style.setProperty('--archive-intro', (ease(clamp((archiveProgress - .2) / .12, 0, 1)) * (1 - ease(clamp((archiveProgress - .4) / .1, 0, 1)))).toFixed(3));
    paper.inert = feed < .05;
    nav.classList.toggle('on-dark', h > .7 && cTop > 35);
    var activeNav = aboutTop <= g.vh * .35 ? '#about' : g.y >= g.workStart ? '#work' : '#home';
    nav.querySelectorAll('a[href="#home"],a[href="#work"],a[href="#about"]').forEach(function (link) {
      if (link.getAttribute('href') === activeNav && cTop > 0) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    var returnTop = contactTrack.getBoundingClientRect().top;
    var returnProgress = clamp(-returnTop / Math.max(1, contactTrack.offsetHeight - contact.offsetHeight), 0, 1);
    var exitProgress = reduce ? 1 : clamp(returnProgress / .6, 0, 1);
    var returnReveal = ease(exitProgress);
    if (returnTop < g.vh * 1.2) drawContactExit(exitProgress);
    contact.style.setProperty('--contact-dark', (1 - returnReveal).toFixed(4));
    contactVideoTarget = reduce ? 2.5 : Math.round(ease(clamp((returnProgress - .38) / .5, 0, 1)) * 2.5 * 60) / 60;
    seekContactVideo();
    var t2 = reduce ? 1 : ease(clamp((returnProgress - .35) / .4, 0, 1));
    contactIn.style.opacity = t2.toFixed(3);
    contactIn.style.transform = 'translateY(' + ((1 - t2) * 32).toFixed(1) + 'px)';
    if (returnTop <= 0) nav.classList.toggle('on-dark', returnReveal < .6);

  }

  /* Native wheel, touch and keyboard scrolling keep every transition scrubbable.
     No idle snapping: stopping your gesture stops the visual at that exact point. */
  function goTo(target) {
    stopScrollFlow();
    clearTimeout(navigationTimer);
    navigationTarget = target;
    navigationTimer = setTimeout(function () { navigationTarget = null; }, 2200);
    deckReleased = target > geometry().B + 2;
    if (reduce) window.scrollTo({top:target,behavior:'instant'});
    else {
      flowTarget = target;
      if (!flowFrame) flowFrame = requestAnimationFrame(advanceScrollFlow);
    }
  }
  var ticking = false;
  function onScroll() {
    var bounds = geometry();
    if (navigationTarget !== null && Math.abs(bounds.y - navigationTarget) < 2) {
      navigationTarget = null;
      clearTimeout(navigationTimer);
    }
    stage.classList.remove('work-locked');
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
  document.getElementById('heroNext').addEventListener('click', function () {
    goTo(geometry().A);
  });

  /* ---------- ask field ---------- */
  var chatFocusTimer = 0;
  var askDialog = document.getElementById('askDialog');
  var dialogMessages = document.getElementById('dialogMessages');
  var dialogQuestion = document.getElementById('dialogQuestion');
  function portfolioReply(question) {
    if (/focus|approach|design direction|设计方向/i.test(question)) return 'I’m an interaction designer with a background in product design, pursuing an MFA in Interactive Design at SCAD. My interests sit at the intersection of AI experiences, embodied interaction, and creative technology.';
    if (/start|which project|推荐/i.test(question)) return 'Start with HOVR in My Work. It is a kitchen-focused tablet experience using gestures for recipes, entertainment, and interruptions. Open its case study to see the interaction process and prototype.';
    if (/role|contribution|职责/i.test(question) && !/looking|opportunit/i.test(question)) return 'HOVR is an individual project. I designed the UX/UI and prototyped gesture input, mode switching, and simulated interruptions for a kitchen-focused iPad experience.';
    if (/tool|prototyp|工具/i.test(question)) return 'For HOVR, I designed in Figma and built the interaction prototype in Unity using MediaPipe for hand tracking, then built for iPad through Xcode. Calls and messages are simulated in the prototype.';
    if (/opportunit|looking|collaborat|求职/i.test(question)) return 'For current role interests, availability, or collaboration opportunities, please get in touch. Those details are still being finalized for this portfolio.';
    if (/contact|resume|email|联系|简历/i.test(question)) return 'You can reach me at zhaohu21@student.scad.edu. The resume link is still being updated.';
    return 'This preview currently covers the suggested portfolio questions. More detailed answers will be added with the full project case studies.';
  }
  var chatHistory = [], chatRequest = null, chatGeneration = 0;
  var chatStatus = document.getElementById('chatStatus');
  var chatRetry = document.getElementById('chatRetry');
  var chatPrivacy = document.getElementById('chatPrivacy');
  var dialogSend = document.querySelector('#dialogCompose button');
  var failedQuestion = '';
  function chatText(en, zh) { return document.documentElement.lang === 'zh-CN' ? zh : en; }
  function chatEndpoint() { return window.PORTFOLIO_ASK && window.PORTFOLIO_ASK.endpoint || ''; }
  function setChatBusy(busy) {
    dialogQuestion.disabled = busy;
    dialogSend.disabled = busy;
    askDialog.setAttribute('aria-busy', String(busy));
  }
  function appendChat(role, text) {
    var message = document.createElement('p');
    message.className = 'chat-message chat-message--' + role;
    message.textContent = text;
    dialogMessages.appendChild(message);
    dialogMessages.scrollTop = dialogMessages.scrollHeight;
    return message;
  }
  function cancelChat() {
    chatGeneration++;
    if (chatRequest) chatRequest.abort();
    chatRequest = null;
    failedQuestion = '';
    chatRetry.hidden = true;
    setChatBusy(false);
  }
  async function addExchange(question, retry) {
    if (chatRequest) return;
    if (!question || question.length > 2000) {
      chatStatus.textContent = chatText('Please keep your question under 2,000 characters.', '请将问题控制在 2000 字以内。');
      return;
    }
    chatRetry.hidden = true;
    failedQuestion = '';
    var endpoint = chatEndpoint();
    document.getElementById('chatMode').textContent = endpoint ? 'AI PORTFOLIO GUIDE' : 'PORTFOLIO Q&A / PREVIEW';
    chatPrivacy.hidden = !endpoint;
    chatPrivacy.textContent = chatText('AI answers about this portfolio. Your messages are sent to OpenAI; avoid sharing private information.', 'AI 作品集助手。问题会发送给 OpenAI，请勿输入私人信息。');
    if (!retry) appendChat('user', question);
    if (!endpoint) {
      appendChat('reply', portfolioReply(question));
      chatStatus.textContent = chatText('Preview answer · AI connection is not enabled yet.', '预设回答 · AI 服务尚未启用。');
      return;
    }
    var controller = new AbortController();
    chatRequest = controller;
    var generation = chatGeneration;
    var timeout = setTimeout(function () { controller.abort(); }, 30000);
    setChatBusy(true);
    chatStatus.textContent = chatText('Thinking…', '正在思考…');
    try {
      var messages = chatHistory.slice(-6).concat({ role: 'user', content: question });
      while (messages.reduce(function (n, m) { return n + m.content.length; }, 0) > 16000 && messages.length > 1) messages.splice(0, 2);
      var response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: messages }), signal: controller.signal, credentials: 'omit'
      });
      if (!response.ok) {
        var error = new Error('chat_request_failed');
        error.status = response.status;
        throw error;
      }
      var data = await response.json();
      if (typeof data.reply !== 'string' || !data.reply.trim() || data.reply.length > 6000) throw new Error('empty_response');
      if (generation !== chatGeneration) return;
      appendChat('reply', data.reply);
      chatHistory = messages.concat({ role: 'assistant', content: data.reply }).slice(-6);
      chatStatus.textContent = chatText('Answered with OpenAI · AI can make mistakes.', '由 OpenAI 生成 · AI 回答可能有误。');
    } catch (error) {
      if (generation !== chatGeneration) return;
      failedQuestion = question;
      chatRetry.hidden = false;
      chatStatus.textContent = error.status === 429
        ? chatText('Too many questions right now. Please try again later.', '当前提问较多，请稍后重试。')
        : error.name === 'AbortError'
          ? chatText('The answer took too long. Please try again.', '回答超时，请重试。')
          : chatText('Could not connect to the AI guide. Please try again.', '暂时无法连接 AI 助手，请重试。');
    } finally {
      clearTimeout(timeout);
      if (generation === chatGeneration) { chatRequest = null; setChatBusy(false); }
    }
  }
  chatRetry.addEventListener('click', function () { if (failedQuestion) addExchange(failedQuestion, true); });
  function openConversation(question) {
    cancelChat();
    chatHistory = [];
    chatStatus.textContent = "";
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
    cancelChat();
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
    if (!question || chatRequest) return;
    addExchange(question);
    dialogQuestion.value = '';
    dialogQuestion.focus({ preventScroll: true });
  });
  var queryInput = document.getElementById('q');
  var askDisclosure = document.getElementById('askDisclosure');
  askDisclosure.hidden = !chatEndpoint();
  askDisclosure.textContent = chatText('AI portfolio guide · Questions are sent to OpenAI. Please avoid private information.', 'AI 作品集助手 · 问题将发送至 OpenAI，请勿输入私人信息。');
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
  var cardMoving = false, cardTimer = 0;
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
      var first = window.innerWidth < 800 ? idx : Math.min(idx, count - 3);
      var visible = k >= first && k < first + (window.innerWidth < 800 ? 2 : 3);
      slide.setAttribute('aria-hidden', visible ? 'false' : 'true');
      slide.inert = !visible;
    });
  }
  var galleryTarget = 0, galleryCurrent = 0, galleryFrame = 0, galleryLast = 0;
  function galleryMax() { return Math.max(0, slides.scrollWidth - workCard.clientWidth); }
  function paintGallery(time) {
    var dt = galleryLast ? Math.min(64, time - galleryLast) : 16;
    galleryLast = time;
    galleryCurrent += (galleryTarget - galleryCurrent) * (reduce ? 1 : 1 - Math.exp(-dt / 40));
    if (Math.abs(galleryTarget - galleryCurrent) < .15) galleryCurrent = galleryTarget;
    slides.style.transform = 'translateX(' + (-galleryCurrent).toFixed(2) + 'px)';
    var max = galleryMax(), progress = max ? galleryCurrent / max : 0;
    dotsEl.style.setProperty('--gallery-progress', progress);
    dotsEl.setAttribute('aria-valuenow', Math.round(progress * 100));
    idx = Math.round((max ? galleryTarget / max : 0) * (count - 1));
    Array.prototype.forEach.call(slides.children, function (slide) {
      var left = slide.offsetLeft - galleryCurrent;
      var visible = left + slide.offsetWidth > 0 && left < workCard.clientWidth;
      slide.inert = !visible;
      slide.setAttribute('aria-hidden', visible ? 'false' : 'true');
    });
    dots.forEach(function (dot, k) { dot.setAttribute('aria-current', k === idx ? 'true' : 'false'); });
    galleryFrame = galleryCurrent !== galleryTarget ? requestAnimationFrame(paintGallery) : 0;
    if (!galleryFrame) galleryLast = 0;
  }
  function moveGallery(value) {
    galleryTarget = clamp(value, 0, galleryMax());
    if (!galleryFrame) galleryFrame = requestAnimationFrame(paintGallery);
  }
  function scrollGallery(value) {
    var g = geometry();
    window.scrollTo({ top: g.galleryStart + clamp(value / Math.max(1, galleryMax()), 0, 1) * g.galleryLength, behavior: 'instant' });
    onScroll();
  }
  function positionGallery() { scrollGallery(idx / Math.max(1, count - 1) * galleryMax()); }
  dotsEl.setAttribute('role', 'slider');
  dotsEl.setAttribute('aria-label', 'Browse projects');
  dotsEl.setAttribute('aria-valuemin', '0'); dotsEl.setAttribute('aria-valuemax', '100'); dotsEl.setAttribute('aria-valuenow', '0');
  dotsEl.tabIndex = 0;
  var rulerDragging = false;
  function dragRuler(e) {
    var rect = dotsEl.getBoundingClientRect();
    scrollGallery(clamp((e.clientX - rect.left) / rect.width, 0, 1) * galleryMax());
  }
  dotsEl.addEventListener('pointerdown', function (e) {
    if (!inCardStage()) return;
    e.preventDefault(); rulerDragging = true; dotsEl.setPointerCapture(e.pointerId); dragRuler(e);
  });
  dotsEl.addEventListener('pointermove', function (e) { if (rulerDragging) dragRuler(e); });
  dotsEl.addEventListener('pointerup', function () { rulerDragging = false; });
  dotsEl.addEventListener('pointercancel', function () { rulerDragging = false; });
  dotsEl.addEventListener('click', function (e) { e.stopImmediatePropagation(); }, true);
  dotsEl.addEventListener('keydown', function (e) {
    if (!/^(ArrowLeft|ArrowRight|Home|End)$/.test(e.key)) return;
    e.preventDefault();
    scrollGallery(e.key === 'Home' ? 0 : e.key === 'End' ? galleryMax() : galleryTarget + (e.key === 'ArrowRight' ? 1 : -1) * workCard.clientWidth * .3);
  });
  function unlockCard() {
    clearTimeout(cardTimer);
    cardMoving = false;
    // Finish the animation, but keep its gesture consumed until momentum ends.

    updateCards();
  }
  function go(n) {
    if (cardMoving || geometry().y < geometry().B - 2) return;
    n = clamp(n, 0, count - 1);
    if (n === idx) { updateCards(); return; }
    idx = n;
    cardMoving = !reduce;
    positionGallery();
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

  // Vertical input remains native across every section, including gallery boundaries.
  function inCardStage() {
    var g = geometry();
    return g.y >= g.B - 2 && g.y <= g.galleryEnd + 2;
  }
  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey || !inCardStage() || !wCar.contains(e.target)) return;
    var horizontal = e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY);
    if (!horizontal) return;
    var delta = e.shiftKey && Math.abs(e.deltaX) < 1 ? e.deltaY : e.deltaX;
    delta *= e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1;
    if (e.cancelable) e.preventDefault();
    smoothScrollBy(delta);
  }, {passive:false});
  var galleryTouch = null;
  wCar.addEventListener('touchstart', function (e) {
    galleryTouch = e.touches.length === 1 ? {x:e.touches[0].clientX,y:e.touches[0].clientY,axis:''} : null;
  }, {passive:true});
  wCar.addEventListener('touchmove', function (e) {
    if (!galleryTouch || !inCardStage() || e.touches.length !== 1) return;
    var dx = galleryTouch.x - e.touches[0].clientX, dy = galleryTouch.y - e.touches[0].clientY;
    if (!galleryTouch.axis && Math.max(Math.abs(dx),Math.abs(dy)) > 6) galleryTouch.axis = Math.abs(dx)>Math.abs(dy)?'x':'y';
    if (galleryTouch.axis !== 'x') return;
    if (e.cancelable) e.preventDefault();
    window.scrollBy({top:dx,behavior:'instant'});
    galleryTouch.x=e.touches[0].clientX; galleryTouch.y=e.touches[0].clientY;
  }, {passive:false});
  wCar.addEventListener('touchend', function () {galleryTouch=null;}, {passive:true});
  // Accumulate wheel intent and advance the actual document every animation frame.
  // Sticky sections, video and the gallery therefore share the same moving position.
  var flowTarget = window.scrollY, flowFrame = 0, flowLastTime = 0, flowResponse = 100;
  function stopScrollFlow() {
    if (flowFrame) cancelAnimationFrame(flowFrame);
    flowFrame = 0; flowLastTime = 0; flowTarget = window.scrollY;
  }
  function advanceScrollFlow(time) {
    var dt = flowLastTime ? Math.min(50, time - flowLastTime) : 16.67;
    flowLastTime = time;
    var max = Math.max(0, docEl.scrollHeight - innerHeight);
    flowTarget = clamp(flowTarget, 0, max);
    var current = window.scrollY, distance = flowTarget - current;
    var next = Math.abs(distance) < 1.2 ? flowTarget : current + distance * (1 - Math.exp(-dt / flowResponse));
    window.scrollTo({top:next, behavior:'instant'});
    if (Math.abs(flowTarget - window.scrollY) > 1.2 && Math.abs(next - current) > .01) {
      flowFrame = requestAnimationFrame(advanceScrollFlow);
    } else { flowFrame = 0; flowLastTime = 0; }
  }
  function smoothScrollBy(delta) {
    if (reduce) { window.scrollBy({top:delta,behavior:'instant'}); return; }
    if (!flowFrame) flowTarget = window.scrollY;
    flowTarget = clamp(flowTarget + delta, 0, Math.max(0, docEl.scrollHeight - innerHeight));
    navigationTarget = null; clearTimeout(navigationTimer);
    if (!flowFrame) flowFrame = requestAnimationFrame(advanceScrollFlow);
  }
  window.addEventListener('wheel', function (e) {
    if (e.defaultPrevented || e.ctrlKey || document.documentElement.hasAttribute('data-intro')) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    var delta = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1);
    // Leave text fields, dialogs and other independently scrollable panels native.
    for (var el = e.target instanceof Element ? e.target : null; el && el !== document.body; el = el.parentElement) {
      var overflow = getComputedStyle(el).overflowY;
      if (/auto|scroll/.test(overflow) && el.scrollHeight > el.clientHeight + 1) return;
    }
    if (!delta || !e.cancelable) return;
    var mouseWheel = e.deltaMode !== 0 || (Math.abs(e.deltaX) < 1 && Math.abs(e.deltaY) >= 48 && Number.isInteger(e.deltaY));
    if (mouseWheel) {
      // A physical wheel notch should cover a meaningful part of the long scenes.
      var notch = Math.max(1, Math.min(3, Math.abs(delta) / 100));
      delta = Math.sign(delta) * Math.max(220, innerHeight * .42) * notch;
      flowResponse = 180;
    } else {
      delta *= 1.1;
      flowResponse = 125;
    }
    e.preventDefault(); smoothScrollBy(delta);
  }, {passive:false});
  window.addEventListener('touchstart', stopScrollFlow, {passive:true});
  window.addEventListener('pointerdown', stopScrollFlow, {passive:true});
  window.addEventListener('keydown', function (e) {
    if (/^(ArrowUp|ArrowDown|PageUp|PageDown|Home|End| )$/.test(e.key)) stopScrollFlow();
  });
  // Pointer motion lives on the image frame, independently of the plate's scroll zoom.
  if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var pointerStage = document.getElementById('stage');
    var pointerTarget = { x: 0, y: 0, lightX: innerWidth / 2, lightY: innerHeight / 2, visible: 0 };
    var pointerCurrent = { x: 0, y: 0, lightX: innerWidth / 2, lightY: innerHeight / 2, visible: 0 };
    var pointerFrame = 0;
    var cursorLayer = document.createElement('div');
    cursorLayer.className = 'hand-cursor'; cursorLayer.setAttribute('aria-hidden', 'true');
    var cursorCore = document.createElement('div'); cursorCore.className = 'hand-cursor-core';
    var cursorCoordinates = document.createElement('span'); cursorCoordinates.className = 'cursor-coordinates';
    cursorCore.appendChild(cursorCoordinates);
    cursorLayer.appendChild(cursorCore); document.body.appendChild(cursorLayer);

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
      var nextButton = document.getElementById('heroNext');
      cursorLayer.classList.toggle('is-touching', !nextButton.disabled && nextButton.matches(':hover'));
      cursorCore.style.transform = 'translate3d(' + mouseX + 'px,' + mouseY + 'px,0)';
      cursorCoordinates.textContent = 'X ' + String(Math.round(mouseX)).padStart(4, '0') + '\nY ' + String(Math.round(mouseY)).padStart(4, '0');
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
    'Hands busy. Flow uninterrupted.': '双手忙碌，体验不断。', 'View case study ↗': '查看项目详情 ↗',
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
    var openingVideo = document.getElementById('openingVideo');
    openingVideo.playbackRate = 2;
    openingVideo.play().catch(function () {});
    function finishOpening() {
      if (openingFinished) return;
      openingFinished = true;
      clearTimeout(openingAuto);
      document.documentElement.setAttribute('data-intro','leaving');
      setTimeout(function () {
        document.documentElement.removeAttribute('data-intro');
        openingSurfaces.forEach(function (element) { element.inert = false; });
        openingVideo.pause();
        opening.remove();
      }, 600);
    }
    var openingAuto = setTimeout(finishOpening, 2400);
    openingSkip.addEventListener('click', finishOpening);
    opening.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') finishOpening();
      if (e.key === 'Tab') { e.preventDefault(); openingSkip.focus(); }
    });
  } else document.getElementById('opening').remove();
  updateCards();
  // Restore a project visitor directly to the requested portfolio section.
  requestAnimationFrame(function () {
    if (document.documentElement.hasAttribute('data-intro')) window.scrollTo(0, 0);
    else if (location.hash === '#work') goTo(geometry().B);
    else if (location.hash === '#about') goTo(document.getElementById('aboutPage').getBoundingClientRect().top + window.scrollY);
    else if (location.hash === '#contact') goTo(geometry().C);
    else if (new URLSearchParams(location.search).get('intro') === 'replay') window.scrollTo(0, 0);
  });
})();
