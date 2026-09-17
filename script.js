(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    toggle.querySelector('.theme-label').textContent = dark ? 'Light' : 'Dark';
    toggle.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
    toggle.setAttribute('aria-label', toggle.title);
    themeColor.content = dark ? '#002b36' : '#fdf6e3';
  }

  applyTheme(root.dataset.theme);
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('research-site-theme', theme); } catch (_) { /* Optional preference storage. */ }
  });

  // Keep an explicit preference consistent across tabs.
  window.addEventListener('storage', (event) => {
    if (event.key === 'research-site-theme') applyTheme(event.newValue);
  });

  const header = document.querySelector('.site-header');
  const navLinks = [...document.querySelectorAll('nav a')];
  const sections = navLinks.map((link) => document.querySelector(link.hash));
  let scheduled = false;

  function updateNavigation() {
    const headerHeight = header.getBoundingClientRect().height;
    root.style.setProperty('--header-height', `${headerHeight}px`);
    const marker = headerHeight + Math.min(144, window.innerHeight * 0.2);
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= marker) active = section;
    }
    // The final section may be too short to reach the top of the viewport.
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) {
      active = sections[sections.length - 1];
    }
    for (const link of navLinks) {
      if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduled = false;
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateNavigation);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  document.querySelectorAll('details').forEach((detail) => detail.addEventListener('toggle', scheduleUpdate));
  if ('ResizeObserver' in window) new ResizeObserver(scheduleUpdate).observe(header);
  updateNavigation();
})();
