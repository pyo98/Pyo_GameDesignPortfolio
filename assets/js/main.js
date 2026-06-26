/* ==============================
   main.js
   - 모바일 메뉴, 프로젝트 카드, 상세 페이지 렌더링
================================ */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollTop();
  renderHomeProjects();
  renderHomeVideos();
  renderProjectPage();
});

function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initScrollTop() {
  const button = document.querySelector('.to-top');
  if (!button) return;
  window.addEventListener('scroll', () => {
    button.classList.toggle('is-visible', window.scrollY > 600);
  });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function renderHomeProjects() {
  const grid = document.querySelector('[data-project-grid]');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = PROJECTS.map((project) => `
    <article class="project-card project-card--${project.id}">
      <a href="./projects/${project.id}.html" aria-label="${project.title} 상세 페이지로 이동">
        <div class="project-card__image">
          <img src="${resolvePath(project.images.hero)}" alt="${project.title} 대표 이미지" loading="lazy">
        </div>
        <div class="project-card__overlay"></div>
        <div class="project-card__body">
          <img class="project-card__logo" src="${resolvePath(project.images.logo)}" alt="${project.title} 로고 심볼" loading="lazy">
          <div class="meta"><span>${project.type}</span><span>·</span><span>${project.engine}</span></div>
          <h3>${project.title}</h3>
          <p>${project.genre}</p>
          <div class="tag-list">
            ${project.keywords.slice(0, 4).map((keyword) => `<span class="tag">${keyword}</span>`).join('')}
          </div>
          <span class="btn ghost">상세 보기</span>
        </div>
      </a>
    </article>
  `).join('');
}


function renderHomeVideos() {
  const grid = document.querySelector('[data-home-video-grid]');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = PROJECTS.map((project) => {
    const videoSrc = `https://www.youtube.com/embed/${project.videoId}`;
    return `
      <article class="video-card video-card--${project.id}">
        <div class="video-card__frame">
          <iframe
            src="${videoSrc}"
            title="${project.title} Unreal Engine Prototype Video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="video-card__body">
          <strong>${project.title}</strong>
          <span>${project.engine} Prototype</span>
          <a class="text-link" href="./projects/${project.id}.html#video">상세 페이지에서 보기</a>
        </div>
      </article>
    `;
  }).join('');
}

function renderProjectPage() {
  const page = document.querySelector('[data-project-page]');
  if (!page || typeof PROJECTS === 'undefined') return;

  const projectId = page.dataset.projectPage;
  const project = getProjectById(projectId);
  if (!project) return;

  document.body.classList.add(project.fontClass);

  const heroImg = document.querySelector('[data-project-hero-image]');
  const logo = document.querySelector('[data-project-logo]');
  const title = document.querySelector('[data-project-title]');
  const summary = document.querySelector('[data-project-summary]');
  const tags = document.querySelector('[data-project-tags]');

  if (heroImg) heroImg.src = resolvePath(project.images.titleBg);
  if (logo) logo.src = resolvePath(project.images.logo);
  if (title) title.textContent = project.title;
  if (summary) summary.textContent = project.summary;
  if (tags) tags.innerHTML = project.keywords.map((keyword) => `<span class="tag">${keyword}</span>`).join('');

  renderSummaryTable(project);
  renderHighlights(project);
  renderVideo(project);
  renderDocuments(project);
}

function renderSummaryTable(project) {
  const table = document.querySelector('[data-project-summary-table]');
  if (!table) return;
  const rows = [
    ['프로젝트명', project.title],
    ['구분', project.type],
    ['장르', project.genre],
    ['플랫폼', project.platform],
    ['엔진', project.engine],
    ['제작 기간', project.period],
    ['담당 역할', project.role],
    ['핵심 키워드', project.keywords.join(', ')]
  ];
  table.innerHTML = rows.map(([label, value]) => `
    <div class="summary-row">
      <dt>${label}</dt>
      <dd>${value}</dd>
    </div>
  `).join('');
}

function renderHighlights(project) {
  const grid = document.querySelector('[data-highlight-grid]');
  if (!grid) return;
  grid.innerHTML = project.highlights.map((item) => `
    <article class="info-card">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('');
}

function renderVideo(project) {
  const frame = document.querySelector('[data-video-frame]');
  const placeholder = document.querySelector('[data-video-placeholder]');
  if (!frame || !placeholder) return;
  if (project.videoId) {
    frame.src = `https://www.youtube.com/embed/${project.videoId}`;
    frame.title = `${project.title} Unreal Engine Prototype Video`;
    frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    placeholder.hidden = true;
    frame.hidden = false;
  } else {
    frame.hidden = true;
    placeholder.hidden = false;
  }
}
