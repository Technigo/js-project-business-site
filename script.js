const hamburgerLinks = document.querySelector(".hamburgerLinks")
const hamburgerBtn = document.querySelector(".hamburger")

function hamburgerFunction(x) {
  x.classList.toggle("change")
  hamburgerLinks.classList.toggle("open")
}

const btn = document.getElementById("partyMode")
const modelSection = document.getElementById("modelSection")
const desktopNav = document.getElementById("desktopNav")
const heroText = document.getElementById("heroText")
const btnHamburger = document.getElementById("partyModeHamburger")
const fullBody = document.getElementById("fullBody")

btn.onclick = () => {
  modelSection.classList.toggle("party")
  desktopNav.classList.toggle("partyNav")
  heroText.classList.toggle("partyText")
  fullBody.classList.toggle("partyBody")
}

btnHamburger.onclick = () => {
  modelSection.classList.toggle("party")
  desktopNav.classList.toggle("partyNav")
  heroText.classList.toggle("partyText")
  fullBody.classList.toggle("partyBody")
  closeHamburger()
}

function closeHamburger() {
  hamburgerLinks.classList.remove("open")
  hamburgerBtn.classList.remove("change")
}


















