const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');
const scrollLinks = document.querySelectorAll('.scroll-link');

// Toggle nav links visibility on mobile
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});

// Scroll animation effect when clicking links
scrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Scroll to the target section
    targetElement.scrollIntoView({ behavior: 'smooth' });

    // Optionally, close the nav on mobile
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show-links');
    }
  });
});
