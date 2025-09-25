const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelectorAll('.navbar a')

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show')
  hamburger.classList.toggle('open')
  hamburger.textContent = navbar.classList.contains('show') ? '✕' : '☰'
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show')
    hamburger.textContent = '☰'
  })
})
