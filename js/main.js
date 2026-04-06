// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ===== SLIDESHOW =====
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.slide-indicators span');
let currentSlide = 0;
let slideInterval;
let isPaused = false;

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  indicators.forEach(i => i.classList.remove('active'));
  currentSlide = index;
  if (slides[currentSlide]) slides[currentSlide].classList.add('active');
  if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

function startAutoplay() {
  slideInterval = setInterval(nextSlide, 5000);
}

function togglePause() {
  const btn = document.querySelector('.btn-pause');
  if (isPaused) {
    startAutoplay();
    if (btn) btn.textContent = 'Pause';
  } else {
    clearInterval(slideInterval);
    if (btn) btn.textContent = 'Play';
  }
  isPaused = !isPaused;
}

if (slides.length > 0) {
  startAutoplay();

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(i);
      if (!isPaused) startAutoplay();
    });
  });
}

// ===== CONTACT FORM (Formspree) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        contactForm.style.display = 'none';
        document.querySelector('.form-success').style.display = 'block';
      } else {
        btn.disabled = false;
        btn.textContent = 'Submit';
        alert('Something went wrong. Please try again or email us directly at admin@sparktexsg.com');
      }
    }).catch(() => {
      btn.disabled = false;
      btn.textContent = 'Submit';
      alert('Something went wrong. Please try again or email us directly at admin@sparktexsg.com');
    });
  });
}
