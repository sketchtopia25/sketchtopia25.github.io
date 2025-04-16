// static/js/index.js

window.HELP_IMPROVE_VIDEOJS = true;

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar Burger Toggle (Vanilla JS) ---
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // --- Bulma Carousel Initializations ---
  // Note: Ensure bulma-carousel.min.js is loaded *before* this script.
  // Assumes Bulma Carousel works without jQuery OR jQuery is included if needed by the plugin.
  // <script src="static/js/bulma-carousel.min.js"></script>

  // Hero Carousel
  const heroCarouselElement = document.querySelector('#hero-carousel');
  if (heroCarouselElement) {
    bulmaCarousel.attach('#hero-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        navigation: true, // Enable arrows
        pagination: true, // Enable dots
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000, // 5 seconds
        autoplayHoverPause: true, // Pause on hover
        // autoplaySpeed: 5000, // Only relevant if autoplay: true
    });
  }

  // DrawBot Carousel
  const drawbotCarouselElement = document.querySelector('#drawbot-carousel');
  if (drawbotCarouselElement) {
    bulmaCarousel.attach('#drawbot-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        navigation: true,
        pagination: true,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000, // 3 seconds
        autoplayHoverPause: true, // Pause on hover
    });
  }

  // GuessBot Carousel
  const guessbotCarouselElement = document.querySelector('#guessbot-carousel');
  if (guessbotCarouselElement) {
    bulmaCarousel.attach('#guessbot-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        navigation: true,
        pagination: true,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000, // 3 seconds
        autoplayHoverPause: true, // Pause on hover
    });
  }

   // Examples Carousel
  const examplesCarouselElement = document.querySelector('#examples-carousel');
  if (examplesCarouselElement) {
    bulmaCarousel.attach('#examples-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        navigation: true,
        pagination: true,
        loop: true, // Loop through examples
        infinite: true,
        autoplay: false,
    });
  }

  // --- BibTeX Copy Button ---
  const copyBtn = document.querySelector('.copy-bibtex-button');
  // Select the <code> element INSIDE the <pre>
  const bibtexCodeElement = document.querySelector('#BibTeX pre code');

  if (copyBtn && bibtexCodeElement) {
    copyBtn.addEventListener('click', () => {
      const bibtexText = bibtexCodeElement.textContent;
      navigator.clipboard.writeText(bibtexText)
        .then(() => {
          // Success feedback
          const originalText = copyBtn.innerHTML; // Store original content
          copyBtn.innerHTML = `
              <span class="icon is-small"><i class="fas fa-check"></i></span>
              <span>Copied!</span>`;
          copyBtn.disabled = true; // Briefly disable button

          setTimeout(() => {
            copyBtn.innerHTML = originalText; // Restore original content
            copyBtn.disabled = false; // Re-enable button
          }, 2000); // Feedback duration: 2 seconds
        })
        .catch(err => {
          console.error('Failed to copy BibTeX:', err);
          // Optional: Provide fallback or alert user
          // copyBtn.textContent = 'Copy Failed'; // Simple error feedback
          alert('Could not copy BibTeX. Please copy manually.');
        });
    });
  }


  // --- Navbar Active State on Scroll (Intersection Observer) ---
  const sections = document.querySelectorAll('section[id]'); // Get all sections with an ID
  const navLinks = document.querySelectorAll('.navbar-menu .navbar-item[href^="#"]'); // Get navbar links pointing to sections

  if (sections.length > 0 && navLinks.length > 0) {
    const observerOptions = {
      root: null, // relative to document viewport
      rootMargin: '0px',
      threshold: 0.4 // Trigger when 40% of the section is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('id');
        const correspondingNavLink = document.querySelector(`.navbar-menu .navbar-item[href="#${sectionId}"]`);

        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          // Remove active class from all links first
          navLinks.forEach(link => link.classList.remove('is-active'));
          // Add active class to the corresponding link
          if (correspondingNavLink) {
            correspondingNavLink.classList.add('is-active');
          }
        } else {
           // Optional: Remove active class if scrolling out, but check if another section is active
           // The logic above handles this by resetting all and setting the intersecting one.
           // However, if you scroll fast past a section, it might flicker.
           // A more robust approach might track the 'most visible' section.
           // For simplicity, the current logic is often sufficient.
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
  }

}); // End DOMContentLoaded