const cityDropdown = document.getElementById('cityDropdown');
const cityToggle   = document.getElementById('cityToggle');
if (cityToggle && cityDropdown) {
  cityToggle.addEventListener('click', (e) => { e.preventDefault(); cityDropdown.classList.toggle('open'); });
  document.addEventListener('click', (e) => { if (!cityDropdown.contains(e.target)) cityDropdown.classList.remove('open'); });
}

const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => { 
    navMenu.classList.toggle('mobile-active');
  });
}

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.padding = window.scrollY > 60 ? '8px 0' : '12px 0';
  navbar.style.background = window.scrollY > 60 ? 'rgba(5,0,0,0.98)' : 'rgba(10,0,0,0.95)';
});

// Game button functionality
document.getElementById('gameBtn')?.addEventListener('click', () => {
  alert('🎮 Game feature coming soon! Get ready to explore Chinese architecture through interactive gameplay.');
});

document.getElementById('loginHeroBtn')?.addEventListener('click', () => {
  alert('🔐 Login feature coming soon! Sign in to save your progress and access exclusive content.');
});

document.getElementById('signupHeroBtn')?.addEventListener('click', () => {
  alert('📝 Sign up feature coming soon! Create an account to personalize your Chinese heritage journey.');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});