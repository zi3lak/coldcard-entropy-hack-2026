(function(){
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') root.setAttribute('data-theme', stored);
  if (btn) {
    btn.addEventListener('click', function(){
      var current = root.getAttribute('data-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var effectiveIsDark = current ? current === 'dark' : prefersDark;
      var next = effectiveIsDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  var backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', function(){
      backTop.classList.toggle('show', window.scrollY > 600);
    });
  }
})();
