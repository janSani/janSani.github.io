const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if(currentTheme==='light')toggleBtn.innerText = "kama pimeja";
  else toggleBtn.innerText = "kama walo";
}

toggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');

  if (theme === 'dark') {
    theme = 'light';
    toggleBtn.innerText = "kama pimeja";
  } else {
    theme = 'dark';
    toggleBtn.innerText = "kama walo";
  }
  
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});