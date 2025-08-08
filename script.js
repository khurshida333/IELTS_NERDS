// Combine all functionality in a single DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const menuLinks = navbarMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // Flashcard Flip Function
  const flashcards = document.querySelectorAll('.flashcard');
  flashcards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // Carousel Functionality
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    });
  });

  // Blog Read More/Read Less functionality
  const readMoreButtons = document.querySelectorAll('.read-more-btn');
  
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const blogPost = this.closest('.blog-post');
      const fullContent = blogPost.querySelector('.blog-full-content');
      
      if (fullContent.style.display === 'block') {
        // Collapse the article
        fullContent.style.display = 'none';
        this.textContent = 'Read More';
        this.classList.remove('expanded');
        
        // Smooth scroll to the top of the article
        blogPost.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Expand the article
        fullContent.style.display = 'block';
        this.textContent = 'Read Less';
        this.classList.add('expanded');
      }
    });
  });
});