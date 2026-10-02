document.addEventListener('DOMContentLoaded', () => {

  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  /* -----------------------------------------
     1. Hamburger Mobile Menu
  ----------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden'); // Prevent scroll when menu is open
  };

  const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  };

  hamburger.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });


  /* -----------------------------------------
     2. Navbar Scroll Effect
  ----------------------------------------- */
  const navbar = document.getElementById('navbar');
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });


  /* -----------------------------------------
     3. Scroll-to-Top Button
  ----------------------------------------- */
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });




  /* -----------------------------------------
     5. Scrollspy (Active Nav Link on Scroll)
  ----------------------------------------- */
  const sections = document.querySelectorAll('section');
  
  const scrollspyOptions = {
    root: null, // viewport
    rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the middle portion of screen
    threshold: 0
  };

  const scrollspyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, scrollspyOptions);

  sections.forEach(section => {
    scrollspyObserver.observe(section);
  });


  /* -----------------------------------------
     6. Scroll Reveal Animation
  ----------------------------------------- */
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // trigger slightly before element enters viewport
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve after showing
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* -----------------------------------------
     7. Contact Form Simulation
  ----------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Visual feedback: disable button, show loading spinner/text
      submitBtn.disabled = true;
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending Message... <i data-lucide="loader-2" class="icon-right animate-spin"></i>';
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }

      formStatus.className = 'form-status';
      formStatus.textContent = '';

      // Simulate API network request delay
      setTimeout(() => {
        // Success simulation
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }

        formStatus.textContent = 'Message sent successfully! Thank you for reaching out.';
        formStatus.classList.add('success');
        
        // Reset form inputs
        contactForm.reset();

        // Clear status after 5 seconds
        setTimeout(() => {
          formStatus.textContent = '';
          formStatus.className = 'form-status';
        }, 5000);

      }, 1800);
    });
  }
});
