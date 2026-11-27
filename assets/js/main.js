(() => {
  'use strict';

  const root = document.documentElement;
  const themeKey = 'sentinel-theme';

  const readTheme = () => {
    try {
      return localStorage.getItem(themeKey);
    } catch (_) {
      return null;
    }
  };

  const writeTheme = (value) => {
    try {
      localStorage.setItem(themeKey, value);
    } catch (_) {
      /* Storage may be unavailable; the theme still applies for this page. */
    }
  };

  const storedTheme = readTheme();
  if (storedTheme === 'light' || storedTheme === 'dark') {
    root.dataset.theme = storedTheme;
  }

  const currentTheme = () => {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const syncThemeButtons = () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.setAttribute('aria-label', `Switch to ${next} theme`);
      button.setAttribute('title', `Switch to ${next} theme`);
      button.textContent = next === 'dark' ? '☾' : '☀';
    });
  };

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      writeTheme(next);
      syncThemeButtons();
    });
  });
  syncThemeButtons();

  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  const categoryTabs = Array.from(document.querySelectorAll('[data-category-tab]'));

  if (categoryTabs.length) {
    const selectTab = (tab) => {
      categoryTabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(item.getAttribute('aria-controls'));
        if (panel) panel.hidden = !selected;
      });
    };

    categoryTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectTab(tab));
      tab.addEventListener('keydown', (event) => {
        let nextIndex = null;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % categoryTabs.length;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + categoryTabs.length) % categoryTabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = categoryTabs.length - 1;
        if (nextIndex !== null) {
          event.preventDefault();
          const next = categoryTabs[nextIndex];
          selectTab(next);
          next.focus();
        }
      });
    });

    selectTab(categoryTabs[0]);
  }

  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const filterScope = document.querySelector('[data-filter-target]');

  if (filterButtons.length && filterScope) {
    const items = Array.from(
      filterScope.querySelectorAll('[data-categories], [data-category]')
    );
    const emptyState = filterScope.querySelector('[data-filter-empty]');

    const applyFilter = (filter) => {
      filterButtons.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
      });

      let visible = 0;
      items.forEach((item) => {
        const raw = item.dataset.categories || item.dataset.category || '';
        const categories = raw.split(/\s+/).filter(Boolean);
        const show = filter === 'all' || categories.includes(filter);
        item.hidden = !show;
        if (show) visible += 1;
      });

      if (emptyState) emptyState.hidden = visible > 0;
    };

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => applyFilter(button.dataset.filter));
    });
  }

  if ('IntersectionObserver' in window) {
    root.classList.add('has-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach((element) => {
      revealObserver.observe(element);
    });
  }

  /* Remove any service worker or cache left behind by the previous theme. */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
      .catch(() => {});
  }

  if ('caches' in window) {
    caches.keys()
      .then((names) => Promise.all(names.map((name) => caches.delete(name))))
      .catch(() => {});
  }
})();
