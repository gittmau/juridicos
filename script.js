

//Mobile

document.addEventListener('DOMContentLoaded', () => {
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

function toggleMenu() {
const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
mobileMenu.classList.toggle('hidden');
}

if (mobileMenuButton && mobileMenu) {
mobileMenuButton.addEventListener('click', toggleMenu);

mobileMenuLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.add('hidden');
mobileMenuButton.setAttribute('aria-expanded', 'false');
});
});
}
});



// Cookie Banner Logic
const cookieBanner = document.getElementById('cookie-banner');
const acceptButton = document.getElementById('accept-cookies');

// Verifica se o usuário já aceitou anteriormente
if (localStorage.getItem('cookiesAceitos') === 'true') {
  cookieBanner?.remove();
} else if (acceptButton && cookieBanner) {
  acceptButton.addEventListener('click', () => {
    // Salva a decisão no navegador
    localStorage.setItem('cookiesAceitos', 'true');
    
    // Animação para esconder
    cookieBanner.classList.add('translate-y-12', 'opacity-0');
    setTimeout(() => {
      cookieBanner.remove();
    }, 500);
  });
}

