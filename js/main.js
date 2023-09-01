document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('switch-lang')?.addEventListener('click', switchLang);
})

function switchLang(event) {
    document.getElementById('switch-lang-panel').classList.toggle('hidden')
}


document.addEventListener("DOMContentLoaded", function() {
  // ---------------- Switch Theme -------------------------
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    document.getElementById('dark').classList.add('hidden');
    // document.getElementById("syntax_highlight").href = "/syntax-dark.css";
  } else {
    document.documentElement.classList.remove('dark')
    document.getElementById('light').classList.add('hidden');
    // document.getElementById("syntax_highlight").href = "/syntax-light.css";
  }
  // Switch theme action
  document.getElementById('switch-theme')?.addEventListener('click', switchTheme);

  // ---------------- Toggle Sidebar -------------------------
  // document.getElementById('toggle-sidebar')?.addEventListener('click', toggleSidebar);

  // ---------------- Toggle Mobile menu -------------------------
  // document.getElementById('toggle-mobile-menu')?.addEventListener('click', toggleMobileMenu);
});

function switchTheme() {
  let current_theme = ([...document.documentElement.classList].includes('dark')) ? 'dark' : 'light';
  if (current_theme === 'dark') {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.getElementById('light').classList.add('hidden');
    document.getElementById('dark').classList.remove('hidden');
    document.getElementById("syntax_highlight").href = "/syntax-light.css";
  } else {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
    document.getElementById('dark').classList.add('hidden');
    document.getElementById('light').classList.remove('hidden');
    document.getElementById("syntax_highlight").href = "/syntax-dark.css";
  }
}

