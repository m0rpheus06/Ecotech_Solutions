// Einfaches Skript: Nav-Toggle und Formular-Handling
document.addEventListener('DOMContentLoaded', ()=>{
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      const isHidden = mainNav.getAttribute('aria-hidden') === 'false';
      mainNav.setAttribute('aria-hidden', String(isHidden ? 'true' : 'false'));
      // toggle class for CSS fallback
      mainNav.style.display = isHidden ? 'block' : 'none';
    });
  }

  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      // Einfaches Feedback: in echten Projekten per fetch an Backend senden
      alert('Danke! Deine Nachricht wurde (lokal) empfangen.');
      form.reset();
    });
  }
});
