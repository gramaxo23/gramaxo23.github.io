// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Scroll to top button
const scrollToTopButton = document.querySelector('#scroll-to-top');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add('show-scroll-top');
  } else {
    scrollToTopButton.classList.remove('show-scroll-top');
  }
});

// Get a reference to the button element
var quoteButton = document.getElementById("quote-button");

// Get a reference to the contact buttons element
var contactButtons = document.getElementById("contact-buttons");

// Add an event listener for the button click event
quoteButton.addEventListener("click", function() {
  // Show the contact buttons
  contactButtons.style.display = "block";
});


// Get a reference to the phone button element
var phoneButton = document.getElementById("phone-button");

// Add an event listener for the phone button click event
phoneButton.addEventListener("click", function() {
  // Call a phone number
  window.location.href = "tel:+351910591273";
});

// Get a reference to the email button element
var emailButton = document.getElementById("email-button");

// Add an event listener for the email button click event
emailButton.addEventListener("click", function() {
  // Open the user's email client with a pre-populated email
  window.location.href = "mailto:gramaxo23@gmail.com";
});

