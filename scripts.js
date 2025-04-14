const hamburgerButton = document.querySelector('.hamburger-button')
const hamburgerIcon = document.querySelector('.hamburger-icon')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const cards = document.querySelectorAll('.cta-card')


// Open and close the menu when the user clicks the hamburger button
hamburgerButton.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active')
  hamburgerMenu.classList.toggle('active')
  const isOpen = hamburgerIcon.classList.contains('active') // Check if the menu is open
  hamburgerIcon.textContent = isOpen ? '✖' : '☰'
  hamburgerButton.setAttribute('aria-expanded', isOpen) // Set aria-expanded to the same value as isOpen, for screen readers 
})

// Close the menu when the user clicks outside of it
document.addEventListener('click', (event) => {
  if (!hamburgerButton.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    hamburgerIcon.classList.remove('active')
    hamburgerMenu.classList.remove('active')
    hamburgerIcon.textContent = '☰'
    hamburgerButton.setAttribute('aria-expanded', false)
  }
})

//Create an Intersection Observer - observes when elements become visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show')
        }, index * 400) // Delay (400ms) per card
      }
    })
  },
  { threshold: 0.2 } // Activate when 20% of card is showing 
)

cards.forEach((card) => observer.observe(card));

