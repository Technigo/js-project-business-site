/* =========================
   HAMBURGER MENU
========================= */
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const body = document.body

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active")
  hamburger.classList.toggle("open")
  body.classList.toggle("no-scroll")
})

/* =========================
  Manual slider setup
========================= */
const slides = document.querySelectorAll(".manual-slider .slide")
const prevBtn = document.querySelector(".manual-slider .prev")
const nextBtn = document.querySelector(".manual-slider .next")
const dots = document.querySelectorAll(".manual-slider .dot")

let current = 0
let autoSlide

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle("active", i === index))
  dots.forEach((d, i) => d.classList.toggle("active", i === index))
}

function nextSlide() {
  current = (current + 1) % slides.length
  showSlide(current)
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length
  showSlide(current)
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 5000)
}

function resetAutoSlide() {
  clearInterval(autoSlide)
  startAutoSlide()
}

// Buttons
nextBtn.addEventListener("click", () => {
  nextSlide()
  resetAutoSlide()
})

prevBtn.addEventListener("click", () => {
  prevSlide()
  resetAutoSlide()
})

// Dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current = index
    showSlide(current)
    resetAutoSlide()
  })
})

showSlide(current)
startAutoSlide()