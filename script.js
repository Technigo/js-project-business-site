const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')
const contactWay1 = document.getElementById('contact-way-1')
const contactWay2 = document.getElementById('contact-way-2')
const contactWay3 = document.getElementById('contact-way-3')

// Toggle menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
})

contactWay1.addEventListener('click', () => contactWay1.classList.toggle('open'))
contactWay2.addEventListener('click', () => contactWay2.classList.toggle('open'))
contactWay3.addEventListener('click', () => contactWay3.classList.toggle('open'))