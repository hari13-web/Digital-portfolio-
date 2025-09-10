// Animate sections on scroll

const cards = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

    }

  });

});

cards.forEach(card => observer.observe(card));

// Contact form alert

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("✅ Thank you! Your message has been sent.");

  this.reset();

});