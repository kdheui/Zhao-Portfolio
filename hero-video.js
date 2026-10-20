/* Independent of the portfolio opening: autoplay the approach, then scrub only
   the remainder. Keep the image underneath until a video frame is decoded. */
window.createHeroVideo = function (plate, reduce) {
  // The artwork settles at 2.5s; pause invisibly inside its encoded still.
  var HOLD = 2.5, PAUSE_AT = 3, RESUME_AT = 3.5, FPS = 60;
  var glow = document.getElementById('glow');
  var nextButton = document.getElementById('heroNext');
  var image = document.getElementById('plateImg');
  var video = document.createElement('video');
  video.id = 'heroVideo';
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('aria-hidden', 'true');
  video.poster = 'assets/hero-start.jpg?v=settled-hold-2';
  if (reduce) image.src = 'assets/hero-hold.jpg?v=settled-hold-2';
  video.style.cssText = 'position:absolute;inset:0;opacity:0;pointer-events:none';
  plate.insertBefore(video, image.nextSibling);
  var ready = false, entered = false, held = false, playing = false;
  var progress = 0, target = HOLD, frame = 0, failed = false;
  var restingFrame = false, arrived = false;
  var naturalHold = false, videoFrame = 0;
  function revealHeroInterface() {
    document.documentElement.setAttribute('data-hero-arrival', 'ready');
  }
  function paintGlow() {
    // Match object-fit: cover, so the light stays on the fingertip on phones too.
    var width = plate.clientWidth, height = plate.clientHeight;
    var scale = Math.max(width / 1920, height / 1080);
    var shift = parseFloat(getComputedStyle(plate).getPropertyValue('--hero-image-shift')) || 0;
    glow.style.left = ((width - 1920 * scale) / 2 + 740 * scale - shift) + 'px';
    glow.style.top = ((height - 1080 * scale) / 2 + 510 * scale) + 'px';
    glow.style.width = (307 * scale) + 'px';
    nextButton.style.left = glow.style.left;
    nextButton.style.top = glow.style.top;
    var canContinue = (arrived || (held && restingFrame) || failed) && progress === 0;
    nextButton.disabled = !canContinue;
    nextButton.setAttribute('aria-hidden', String(!canContinue));
    glow.classList.toggle('is-held', (arrived || (held && restingFrame) || failed) && progress === 0);
    glow.style.opacity = ((arrived || (held && restingFrame) || failed) ? Math.max(0, 1 - progress / .25) : 0).toFixed(3);
  }
  function reveal() { video.style.opacity = '1'; }
  function endTime() { return Math.max(RESUME_AT, video.duration - 1 / FPS); }
  function scrubTime() {
    if (progress === 0) return HOLD;
    return Math.round((RESUME_AT + progress * (endTime() - RESUME_AT)) * FPS) / FPS;
  }
  // One seek in flight; seeked always catches up to the most recent gesture.
  function seek() {
    if (!ready || failed || video.seeking || playing) return;
    if (naturalHold && progress === 0) return;
    if (Math.abs(video.currentTime - target) > 0.001) video.currentTime = target;
  }
  function hold(onTargetFrame) {
    playing = false; held = true; video.pause();
    video.playbackRate = 1;
    naturalHold = onTargetFrame === true;
    target = scrubTime();
    if (naturalHold || Math.abs(video.currentTime - HOLD) <= .001) restingFrame = true;
    seek();
    paintGlow();
  }
  function showArrival(time) {
    if (!arrived && time >= HOLD - .001) {
      arrived = true;
      revealHeroInterface();
      paintGlow();
    }
  }
  function tick() {
    if (!playing) return;
    if (video.requestVideoFrameCallback) {
      videoFrame = video.requestVideoFrameCallback(function (_, metadata) {
        if (!playing) return;
        // Frames 150–209 are the identical settled artwork. Freeze halfway
        // through that still, so pausing cannot cut off a moving frame.
        showArrival(metadata.mediaTime);
        if (metadata.mediaTime >= PAUSE_AT - .001) { hold(true); return; }
        tick();
      });
    } else {
      showArrival(video.currentTime);
      if (video.currentTime >= PAUSE_AT) { hold(true); return; }
      frame = requestAnimationFrame(tick);
    }
  }
  function visibleHero() {
    var bounds = document.getElementById('stage').getBoundingClientRect();
    return bounds.bottom > 0 && bounds.top < innerHeight && progress === 0 &&
      scrollY < document.getElementById('stage').offsetHeight * .8;
  }
  function enter() {
    if (!ready || failed || entered || document.hidden ||
        document.documentElement.hasAttribute('data-intro')) return;
    if (!reduce && !held && video.readyState < 3) return;
    if (!visibleHero()) { held = true; seek(); return; }
    entered = true;
    if (reduce || held) { hold(); revealHeroInterface(); return; }
    playing = true;
    video.playbackRate = 1.8;
    video.play().then(function () {
      if (!playing) { video.pause(); return; }
      reveal(); tick();
    }).catch(function () { hold(); revealHeroInterface(); });
  }
  video.addEventListener('loadeddata', function () {
    ready = true;
    // Prepare the first decoded frame beneath the opening while it slides away.
    // Playback still waits until the independent opening has fully finished.
    if (!held && !reduce) reveal();
    enter();
    if (held) seek();
  });
  video.addEventListener('canplay', enter);
  video.addEventListener('seeked', function () {
    if (held && video.currentTime >= HOLD - .04) restingFrame = true;
    reveal(); paintGlow(); seek();
  });
  video.addEventListener('error', function () {
    image.src = 'assets/hero-hold.jpg?v=settled-hold-2';
    failed = true; playing = false; video.pause(); video.style.opacity = '0';
    held = true; revealHeroInterface(); paintGlow();
    cancelAnimationFrame(frame);
  });
  new MutationObserver(enter).observe(document.documentElement, { attributes: true, attributeFilter: ['data-intro'] });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden && playing) hold(); else enter();
  });
  video.src = 'assets/hero-scroll.mp4?v=settled-hold-2';
  return {
    update: function (p) {
      progress = p;
      target = ready ? scrubTime() : HOLD;
      if (p > 0) {
        revealHeroInterface();
        naturalHold = false;
        held = true;
        if (playing) {
          playing = false; video.pause(); cancelAnimationFrame(frame);
          video.playbackRate = 1;
          if (video.cancelVideoFrameCallback) video.cancelVideoFrameCallback(videoFrame);
        }
      }
      enter();
      if (held) seek();
      paintGlow();
    }
  };
};
