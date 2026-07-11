/* ============================================================
   ÁGUA DA ROCHA — main.js
   Lógica compartilhada por todas as páginas: cabeçalho, rodapé,
   pesquisa instantânea, menu responsivo, lazy loading, animações
   de entrada e funções utilitárias de renderização de cartões.
   ============================================================ */

/* ---------- Ícones (SVG minimalistas, inline) ---------- */
const ICONS = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  drop: '<svg class="drop-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 5 11.5 5 15.5C5 19.6 8.4 23 12 23C15.6 23 19 19.6 19 15.5C19 11.5 12 2 12 2Z"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  pages: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20Z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
};

/* ---------- Utilitários ---------- */
function getCategory(slug) {
  return CATEGORIES.find(c => c.slug === slug) || { slug, name: slug };
}
function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}
function ebookUrl(root, id) { return `${root}ebooks/ebook.html?id=${encodeURIComponent(id)}`; }
function categoryUrl(root, slug) { return `${root}categorias/categoria.html?cat=${encodeURIComponent(slug)}`; }
function articleUrl(root, id) { return `${root}artigos/artigo.html?id=${encodeURIComponent(id)}`; }

/* ---------- Cabeçalho e rodapé ---------- */
const NAV_LINKS = [
  { label: "Início", href: "index.html" },
  { label: "Biblioteca", href: "biblioteca/index.html" },
  { label: "Categorias", href: "categorias/index.html" },
  { label: "Novidades", href: "biblioteca/index.html?sort=novos" },
  { label: "Mais Baixados", href: "biblioteca/index.html?sort=populares" },
  { label: "Artigos", href: "artigos/index.html" },
  { label: "Sobre", href: "sobre/index.html" },
  { label: "Apoiar", href: "apoiar/index.html" }
];

function renderChrome(root, activeHref) {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (!header || !footer) return;

  const navItems = NAV_LINKS.map(l => {
    const full = root + l.href;
    const isActive = activeHref && l.href.split("?")[0] === activeHref;
    return `<li><a href="${full}" class="${isActive ? "active" : ""}">${l.label}</a></li>`;
  }).join("");

  header.innerHTML = `
    <div class="container header-inner">
      <a href="${root}index.html" class="brand">
        ${ICONS.drop}
        <span class="brand-name">Água da <span>Rocha</span></span>
      </a>
      <nav class="main-nav" aria-label="Menu principal">
        <ul>${navItems}</ul>
      </nav>
      <div class="header-actions">
        <form class="search-box" role="search" id="header-search-form">
          <span aria-hidden="true">${ICONS.search}</span>
          <input type="search" id="header-search-input" placeholder="Pesquisar e-books..." autocomplete="off" aria-label="Pesquisar e-books">
        </form>
        <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu">${ICONS.menu}</button>
      </div>
    </div>
    <div class="search-results-panel" id="search-results-panel"></div>
  `;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${root}index.html" class="brand">${ICONS.drop}<span class="brand-name">Água da <span>Rocha</span></span></a>
          <p>Conhecimento gratuito para transformar vidas. Uma biblioteca digital livre, feita para crescer continuamente.</p>
        </div>
        <div class="footer-col">
          <h4>Navegar</h4>
          <ul>
            <li><a href="${root}biblioteca/index.html">Biblioteca</a></li>
            <li><a href="${root}categorias/index.html">Categorias</a></li>
            <li><a href="${root}artigos/index.html">Artigos</a></li>
            <li><a href="${root}apoiar/index.html">Apoiar o projeto</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Categorias</h4>
          <ul>
            ${CATEGORIES.slice(0, 4).map(c => `<li><a href="${categoryUrl(root, c.slug)}">${c.name}</a></li>`).join("")}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contato</h4>
          <ul>
            <li><a href="mailto:contato@aguadarocha.com.br">contato@aguadarocha.com.br</a></li>
            <li><a href="${root}sobre/index.html">Sobre o projeto</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} Água da Rocha. Todos os e-books são de distribuição gratuita.</span>
        <div class="legal-links">
          <a href="${root}sobre/index.html#privacidade">Política de Privacidade</a>
          <a href="${root}sobre/index.html#termos">Termos de Uso</a>
          <a href="${root}sobre/index.html#direitos">Direitos Autorais</a>
        </div>
      </div>
    </div>
  `;

  initMobileNav(root, activeHref);
  initSearch(root);
}

/* ---------- Menu lateral mobile ---------- */
function initMobileNav(root, activeHref) {
  const toggle = document.getElementById("menu-toggle");
  if (!toggle) return;

  const backdrop = document.createElement("div");
  backdrop.className = "mobile-nav-backdrop";
  backdrop.id = "mobile-nav-backdrop";

  const nav = document.createElement("div");
  nav.className = "mobile-nav";
  nav.id = "mobile-nav";
  const navItems = NAV_LINKS.map(l => {
    const full = root + l.href;
    const isActive = activeHref && l.href.split("?")[0] === activeHref;
    return `<li><a href="${full}" class="${isActive ? "active" : ""}">${l.label}</a></li>`;
  }).join("");
  nav.innerHTML = `
    <div class="mn-close"><button id="mobile-nav-close" aria-label="Fechar menu">${ICONS.close}</button></div>
    <form class="mn-search search-box" role="search" id="mobile-search-form">
      <span aria-hidden="true">${ICONS.search}</span>
      <input type="search" id="mobile-search-input" placeholder="Pesquisar e-books..." autocomplete="off" aria-label="Pesquisar e-books">
    </form>
    <ul>${navItems}</ul>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(nav);

  function open() { backdrop.classList.add("open"); nav.classList.add("open"); document.body.style.overflow = "hidden"; }
  function close() { backdrop.classList.remove("open"); nav.classList.remove("open"); document.body.style.overflow = ""; }

  toggle.addEventListener("click", open);
  backdrop.addEventListener("click", close);
  document.getElementById("mobile-nav-close").addEventListener("click", close);

  const mobileForm = document.getElementById("mobile-search-form");
  mobileForm.addEventListener("submit", e => {
    e.preventDefault();
    const q = document.getElementById("mobile-search-input").value.trim();
    if (q) window.location.href = `${root}biblioteca/index.html?q=${encodeURIComponent(q)}`;
  });
}

/* ---------- Pesquisa instantânea ---------- */
function searchEbooks(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return EBOOKS.filter(b => {
    const cat = getCategory(b.category).name.toLowerCase();
    const haystack = [b.title, b.author, cat, ...(b.keywords || [])].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

function initSearch(root) {
  const input = document.getElementById("header-search-input");
  const panel = document.getElementById("search-results-panel");
  const form = document.getElementById("header-search-form");
  if (!input || !panel) return;

  function renderPanel(q) {
    const results = searchEbooks(q).slice(0, 6);
    if (!q.trim()) { panel.classList.remove("open"); panel.innerHTML = ""; return; }
    if (results.length === 0) {
      panel.innerHTML = `<div class="sr-empty">Nenhum e-book encontrado para "${escapeHtml(q)}".</div>`;
    } else {
      panel.innerHTML = results.map(b => `
        <a class="sr-item" href="${ebookUrl(root, b.id)}">
          <img src="${root}${b.cover.replace('../', '')}" alt="" loading="lazy">
          <div>
            <div class="sr-title">${b.title}</div>
            <div class="sr-cat">${getCategory(b.category).name}</div>
          </div>
        </a>
      `).join("");
    }
    panel.classList.add("open");
  }

  input.addEventListener("input", () => renderPanel(input.value));
  input.addEventListener("focus", () => { if (input.value.trim()) renderPanel(input.value); });
  document.addEventListener("click", e => {
    if (!panel.contains(e.target) && e.target !== input) panel.classList.remove("open");
  });
  form.addEventListener("submit", e => {
    e.preventDefault();
    const q = input.value.trim();
    if (q) window.location.href = `${root}biblioteca/index.html?q=${encodeURIComponent(q)}`;
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Cartão de e-book (usado em grids/carrosséis) ---------- */
function bookCardHtml(root, book) {
  const cat = getCategory(book.category);
  const coverSrc = root + book.cover.replace("../", "");
  return `
    <article class="book-card reveal">
      <a href="${ebookUrl(root, book.id)}" class="cover-wrap" aria-label="Ver detalhes de ${book.title}">
        <span class="cat-pill">${cat.name}</span>
        <img class="lazy" data-src="${coverSrc}" alt="Capa do e-book ${book.title}" loading="lazy">
      </a>
      <div class="book-info">
        <h3><a href="${ebookUrl(root, book.id)}">${book.title}</a></h3>
        <p class="book-desc">${book.shortDesc}</p>
        <span class="book-meta">${ICONS.pages}&nbsp;${book.pages} páginas</span>
        <a class="card-btn" href="${ebookUrl(root, book.id)}">Ver detalhes</a>
      </div>
    </article>
  `;
}

function articleCardHtml(root, article) {
  const cat = getCategory(article.category);
  return `
    <article class="book-card reveal">
      <div class="book-info" style="padding-top:20px;">
        <span class="cat-pill" style="position:static;display:inline-block;margin-bottom:10px;">${cat.name}</span>
        <h3><a href="${articleUrl(root, article.id)}">${article.title}</a></h3>
        <p class="book-desc">${article.shortDesc}</p>
        <span class="book-meta">${ICONS.calendar}&nbsp;${formatDate(article.pubDate)} · ${article.readTime} min de leitura</span>
        <a class="card-btn" href="${articleUrl(root, article.id)}">Ler artigo</a>
      </div>
    </article>
  `;
}

/* ---------- Lazy loading de imagens ---------- */
function initLazyLoad(scope) {
  const imgs = (scope || document).querySelectorAll("img.lazy[data-src]");
  if (!("IntersectionObserver" in window)) {
    imgs.forEach(img => { img.src = img.dataset.src; img.classList.add("loaded"); });
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
        obs.unobserve(img);
      }
    });
  }, { rootMargin: "200px" });
  imgs.forEach(img => io.observe(img));
}

/* ---------- Animações de entrada (reveal on scroll) ---------- */
function initReveal(scope) {
  const els = (scope || document).querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("in"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* ---------- Botão voltar ao topo ---------- */
function initBackToTop() {
  const btn = document.createElement("button");
  btn.id = "back-to-top";
  btn.setAttribute("aria-label", "Voltar ao topo");
  btn.innerHTML = ICONS.arrowUp;
  document.body.appendChild(btn);
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Inicialização comum a todas as páginas ---------- */
function initCommon(root, activeHref) {
  renderChrome(root, activeHref);
  initBackToTop();
  document.addEventListener("readystatechange", () => {});
}
