/* ─── Screen Data ────────────────────────────────────────────────── */
const SCREENS = [
  /* 0 */ { type: 'opening' },
  /* 1 */ { type: 'cake' },

  /* 2 */ {
    type: 'photo',
    images: [{ src: 'assets/01_redwall.jpg', layout: 'single' }],
    caption: 'Happy birthday, Sumin!!! 볼티는 어땡? 🤍'
  },

  /* 3 */ {
    type: 'photo',
    images: [{ src: 'assets/02_roompose.JPG', layout: 'single' }],
    caption: '이게 벌써 작년이야... 시간이 너무 빠르다.\n이때 연우네 집에서 진짜 재밌었는데 🥹'
  },

  /* 4 */ {
    type: 'photo',
    images: [{ src: 'assets/3.JPG', layout: 'single' }],
    caption: '우리 1학년 때 젠바이오 듣고 울먼에서 놀았던 것도\n아직 작년 같은데... 시간이 너무 빨리 가.'
  },

  /* 5 */ {
    type: 'photo',
    images: [
      { src: 'assets/4.JPG', layout: 'duo' },
      { src: 'assets/5.JPG', layout: 'duo' }
    ],
    caption: '그리고 찰콤에서의 2학년도 끝나구...'
  },

  /* 6 */ {
    type: 'photo',
    images: [{ src: 'assets/6.jpg', layout: 'single' }],
    caption: '벌써 3학년까지 끝나버려써...\n나는 드디어 인턴을 하러 왔구,\n너는 진짜 med school을 위해 MCAT 공부를 하고 있어!!\nare we adulting?'
  },

  /* 7 */ {
    type: 'photo',
    long: true,
    images: [{ src: 'assets/7.jpg', layout: 'single' }],
    caption: '생일을 제대로 축하해주고 싶었는데, 항상 이때는\n한국에 돌아갔을때라 볼수가 없었고\n올해도 각자의 일을 하느라 간단히 웹사이트를 만들어봤어\n(thanks to 챗지피티.. 그치만 내가 만든거로 하자.)\n나의 리쿠르팅을 위해 거실을 내어준 badgirlsumsum(x) goodgirlsumsum(o)\n모두의 응원과 따뜻한 말 한마디는 진짜 나에게 큰 힘이 되어써..\n사실 서로를 마음을 다해 응원해주는 건 쉬운 일이 아닌데\n홉킨스에서 좋은 사람들을 많이 만나서 암쏘 럭키!\n\n이번 스프링때 마이애미 갔어야 했는데 못가서 아쉽sum니다..\n하지만 올해 가면 되지!!!\n항상 집에서 피자 만들자 와인나잇을 하자 하자는 건 많지만\n게으름 이슈 + 홉킨스 이슈로 항상..\n그치만 이번에 인스타에 사람들 졸업하는 사진 보니까\n남은 1년은 진짜 방 밖을 나와서 추억이 될만한 시간을 보내야겠다고 생각했어.\nlets enjoy our last year in 905 together 🍾'
  },

  /* 8 */ {
    type: 'glowny',
    img1: 'assets/8.jpg',
    img2: 'assets/9.jpg',
    cap1: 'Sumin at GLOWNY.\n우리 한국 가서 또 하루 종일 쇼핑하다가 헤어져야 되는데 ㅎㅎㅎ\n글로니는 맨날 구경 가지만 사실 뭘 사진 않아…\n보면 예쁜데 몬가 살 건 없는 느낌…',
    cap2: '그치만 글로니 포토부스는 🐐'
  },

  /* 9 */ {
    type: 'ny',
    strip1: ['assets/10.jpg', 'assets/11.jpg'],
    strip2: ['assets/12.JPG', 'assets/13.jpg', 'assets/14.JPG', 'assets/15.JPG'],
    imgBottom: 'assets/16.JPG',
    caption: '쑴 & 에밀리의 n번째 뉴욕뉴욕 🗽🗽',
    subCaption: '다음 뉴욕은 언제?!'
  },

  /* 10 */ {
    type: 'photo',
    images: [{ src: 'assets/17.JPG', layout: 'single' }],
    caption: 'ㅋㅋㅋㅋㅋㅋㅋㅋ 아놔 ㅠ\n우리 또 뉴욕 가서 사진 백만 장 찍자.\nOutfit도 맞추고! 이제 나도 디카 있어 📸\n진짜 이렇게 시간 빨리 갈 줄 알았으면\n더 열심히 놀걸 그랬어... (더...?)'
  },

  /* 11 */ {
    type: 'photo',
    images: [{ src: 'assets/18.JPG', layout: 'single' }],
    caption: '우리 남은 1년 더 재밌게 놀쟈.\nYou are my New York mate 👩🏼‍🤝‍👩🏻\n\n… and'
  },

  /* 12 */ {
    type: 'photo',
    images: [
      { src: 'assets/19.jpg', layout: 'trio' },
      { src: 'assets/20.jpg', layout: 'trio' },
      { src: 'assets/21.jpg',  layout: 'trio' }
    ],
    caption: 'Halloween mate for the past three years!!! 🎃'
  },

  /* 13 */ {
    type: 'photo',
    images: [{ src: 'assets/22.jpg', layout: 'single' }],
    caption: '다음 할로윈은 이거야. 내가 정했어.\n올해는 baddie costumes 하나,\n그리고 콜라 각이야'
  },

  /* 14 */ {
    type: 'photo',
    images: [{ src: 'assets/23.jpg', layout: 'single' }],
    caption: '할 게 너무 많아!!\nLet\'s spend the rest of our college life together.'
  },

  /* 15 */ {
    type: 'photo',
    images: [{ src: 'assets/24.jpg', layout: 'single' }],
    caption: 'YOU and ME FOREVER.'
  },

  /* 16 */ {
    type: 'final',
    // Rename 25.jpg to 16_badgirl_bday.jpg (or update this path)
    img: 'assets/25.jpg',
    caption: 'once again\n생일 너무 축하해!!!\n오늘 행복한 하루 보내 🤍\n\n언제든 고민 있으면 말하구, 재밌는 얘기도.\nI\'m always ready to listen and "judge" 😏',
    sig: '— 하루 일찍 시애틀에서 from pastajunkiie —'
  }
];

/* ─── State ──────────────────────────────────────────────────────── */
let current = 0;
const TOTAL = SCREENS.length;

/* ─── DOM Refs ───────────────────────────────────────────────────── */
const screenEl   = document.getElementById('screen');
const prevBtn    = document.getElementById('prev-btn');
const counterEl  = document.getElementById('screen-counter');

/* ─── Navigation ─────────────────────────────────────────────────── */
function goTo(index, direction = 'next') {
  if (index < 0 || index >= TOTAL) return;

  const exitClass  = direction === 'next' ? 'exit-left'   : 'exit-right';
  const enterClass = direction === 'next' ? 'enter-right'  : 'enter-left';

  screenEl.classList.add(exitClass);

  setTimeout(() => {
    current = index;
    screenEl.classList.remove(exitClass);
    renderScreen();
    screenEl.classList.add(enterClass);
    // Remove enter class after animation completes
    screenEl.addEventListener('animationend', () => {
      screenEl.classList.remove(enterClass);
    }, { once: true });
    updateUI();
  }, 420);
}

function next() { if (current < TOTAL - 1) goTo(current + 1, 'next'); }
function prev() { if (current > 0)         goTo(current - 1, 'prev'); }

/* ─── Update UI Controls ─────────────────────────────────────────── */
function updateUI() {
  // Prev button
  if (current > 0) prevBtn.classList.add('visible');
  else             prevBtn.classList.remove('visible');

  // Dot counter — only show for photo/content screens (skip opening/cake)
  counterEl.innerHTML = '';
  if (current >= 2) {
    for (let i = 2; i < TOTAL; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === current ? ' active' : '');
      counterEl.appendChild(dot);
    }
  }
}

/* ─── Render ─────────────────────────────────────────────────────── */
function renderScreen() {
  const s = SCREENS[current];
  screenEl.innerHTML = '';
  screenEl.scrollTop = 0;

  const scrollable = s.type === 'photo' || s.type === 'glowny' || s.type === 'ny' || s.type === 'final';
  screenEl.className = scrollable ? 'screen-scroll' : 'screen-center';

  if (s.type === 'opening')  return renderOpening();
  if (s.type === 'cake')     return renderCake();
  if (s.type === 'glowny')   return renderGlowny(s);
  if (s.type === 'ny')       return renderNY(s);
  if (s.type === 'final')    return renderFinal(s);
  if (s.type === 'photo')    return renderPhoto(s);
}

/* ─── Opening Screen ─────────────────────────────────────────────── */
function renderOpening() {
  screenEl.innerHTML = `
    <div class="opening-envelope">💌</div>
    <div class="opening-title">A message has arrived.</div>
    <div class="opening-sub">press enter / touch to move on</div>
  `;
  removeHint();
  addHint('press enter · click · touch to continue');
}

/* ─── Cake Screen ────────────────────────────────────────────────── */
function renderCake() {
  screenEl.innerHTML = `
    <div class="cake-screen">
      <div class="bday-title">HAPPY<br>22nd BIRTHDAY<br>SUMIN!!!!!</div>
      <img src="assets/birthday-cake.svg" class="cake-svg" alt="birthday cake">
    </div>
  `;
  removeHint();
  addHint('press enter · click · touch to continue');
}

/* ─── Photo Screen ───────────────────────────────────────────────── */
function renderPhoto(s) {
  const wrapper = document.createElement('div');
  wrapper.className = 'photo-screen';
  if (s.long) wrapper.classList.add('photo-screen-long');

  const card = document.createElement('div');
  card.className = 'photo-card';
  if (s.long) card.classList.add('long-card');

  // Determine layout from images array
  const imgs = s.images;

  if (imgs.length === 1 && imgs[0].layout === 'single') {
    const cls = current === 7 ? 'img-single img-single-large' : 'img-single';
    const img = makeImg(imgs[0].src, cls);
    card.appendChild(img);

  } else if (imgs.length === 2 && imgs[0].layout === 'duo') {
    const row = document.createElement('div');
    row.className = 'img-duo';
    imgs.forEach(i => row.appendChild(makeImg(i.src)));
    card.appendChild(row);

  } else if (imgs.length === 3 && imgs[0].layout === 'trio') {
    const row = document.createElement('div');
    row.className = 'img-trio';
    imgs.forEach(i => row.appendChild(makeImg(i.src)));
    card.appendChild(row);
  }

  // Caption
  const cap = document.createElement('div');
  cap.className = 'caption caption-reveal' + (s.long ? ' long' : '');
  cap.textContent = s.caption;
  card.appendChild(cap);

  wrapper.appendChild(card);
  screenEl.appendChild(wrapper);
  addHint();
}

/* ─── GLOWNY Screen ──────────────────────────────────────────────── */
function renderGlowny(s) {
  const wrapper = document.createElement('div');
  wrapper.className = 'photo-screen';

  const card = document.createElement('div');
  card.className = 'photo-card';

  const glowny = document.createElement('div');
  glowny.className = 'img-glowny';

  const col1 = document.createElement('div');
  col1.className = 'img-glowny-col';
  col1.appendChild(makeImg(s.img1));
  const sub1 = document.createElement('div');
  sub1.className = 'glowny-sub caption-reveal';
  sub1.textContent = s.cap1;
  col1.appendChild(sub1);

  const col2 = document.createElement('div');
  col2.className = 'img-glowny-col';
  col2.appendChild(makeImg(s.img2));
  const sub2 = document.createElement('div');
  sub2.className = 'glowny-sub caption-reveal';
  sub2.style.animationDelay = '0.7s';
  sub2.textContent = s.cap2;
  col2.appendChild(sub2);

  glowny.appendChild(col1);
  glowny.appendChild(col2);
  card.appendChild(glowny);
  wrapper.appendChild(card);
  screenEl.appendChild(wrapper);
  addHint();
}

/* ─── NY Screen ──────────────────────────────────────────────────── */
function renderNY(s) {
  const wrapper = document.createElement('div');
  wrapper.className = 'photo-screen photo-screen-ny';

  const card = document.createElement('div');
  card.className = 'photo-card';

  // Strip 1: 10 + 11 — natural ratio, no crop
  const strip1 = document.createElement('div');
  strip1.className = 'img-strip';
  s.strip1.forEach(src => {
    const cell = document.createElement('div');
    cell.className = 'img-strip-cell';
    cell.appendChild(makeImg(src));
    strip1.appendChild(cell);
  });
  card.appendChild(strip1);

  // Strip 2: 12+13+14+15 — fixed height, cover-crop to match
  const strip2 = document.createElement('div');
  strip2.className = 'img-strip';
  s.strip2.forEach(src => {
    const cell = document.createElement('div');
    cell.className = 'img-strip-cell matched';
    cell.appendChild(makeImg(src));
    strip2.appendChild(cell);
  });
  card.appendChild(strip2);

  // Main caption
  const cap = document.createElement('div');
  cap.className = 'caption big-caption caption-reveal';
  cap.textContent = s.caption;
  card.appendChild(cap);

  // Bottom image
  const imgBot = makeImg(s.imgBottom, 'img-bottom-single');
  card.appendChild(imgBot);

  // Sub caption
  const sub = document.createElement('div');
  sub.className = 'ny-sub caption-reveal';
  sub.style.animationDelay = '0.8s';
  sub.textContent = s.subCaption;
  card.appendChild(sub);

  wrapper.appendChild(card);
  screenEl.appendChild(wrapper);
  addHint();
}

/* ─── Final Screen ───────────────────────────────────────────────── */
function renderFinal(s) {
  const wrapper = document.createElement('div');
  wrapper.className = 'final-screen';

  const card = document.createElement('div');
  card.className = 'final-card';

  const img = makeImg(s.img, 'final-img');
  card.appendChild(img);

  const cap = document.createElement('div');
  cap.className = 'final-caption';
  cap.innerHTML = escapeHtml(s.caption) + (s.sig ? `<br><br><span class="final-sig">${escapeHtml(s.sig)}</span>` : '');
  card.appendChild(cap);

  wrapper.appendChild(card);
  screenEl.appendChild(wrapper);
  removeHint();
}

/* ─── Helpers ────────────────────────────────────────────────────── */
function makeImg(src, className) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  img.loading = 'lazy';
  if (className) img.className = className;
  return img;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

let hintEl = null;
function addHint(text = 'press enter · click · touch') {
  removeHint();
  hintEl = document.createElement('div');
  hintEl.className = 'hint';
  hintEl.textContent = text;
  document.body.appendChild(hintEl);
}
function removeHint() {
  if (hintEl) { hintEl.remove(); hintEl = null; }
}

/* ─── Floating Hearts / Particles ───────────────────────────────── */
const EMOJIS = ['🩷', '💗', '💕', '✨', '🌸', '💖', '⭐', '🎀', '💝', '🌷'];

function createHearts() {
  const container = document.getElementById('bg-hearts');
  const count = window.innerWidth < 480 ? 14 : 22;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'heart-particle';
    el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

    const size   = 0.9 + Math.random() * 1.0;
    const left   = Math.random() * 100;
    const dur    = 8 + Math.random() * 12;
    const delay  = -(Math.random() * dur);

    el.style.cssText = `
      left: ${left}%;
      font-size: ${size}rem;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(el);
  }
}

/* ─── Touch / Swipe ──────────────────────────────────────────────── */
let touchStartX = 0, touchStartY = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  // Any vertical movement → user is scrolling, do nothing
  if (Math.abs(dy) > 8) return;

  if (Math.abs(dx) > 50) {
    // Horizontal swipe
    if (dx < 0) next();
    else        prev();
  } else if (Math.abs(dx) < 15) {
    // Pure tap
    next();
  }
}, { passive: true });

/* ─── Keyboard ───────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    next();
  }
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prev();
  }
});

/* ─── Click (desktop only — touch is handled above) ─────────────── */
let pointerDownY = 0;
screenEl.addEventListener('pointerdown', e => { pointerDownY = e.clientY; });
screenEl.addEventListener('click', e => {
  if (e.target.closest('#prev-btn')) return;
  // Ignore if pointer moved vertically (was a scroll drag, not a click)
  if (Math.abs(e.clientY - pointerDownY) > 8) return;
  // Skip on touch — touchend already handled it
  if (e.pointerType === 'touch') return;
  next();
});

prevBtn.addEventListener('click', e => {
  e.stopPropagation();
  prev();
});

/* ─── Init ───────────────────────────────────────────────────────── */
createHearts();
renderScreen();
updateUI();
