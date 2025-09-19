const hamMenu = document.getElementById("hamMenu")
const hamMenuLinks = document.getElementById("hamMenuLinks")
const partyBtnMobile = document.getElementById("partyModeBtnMobile")
const partyBtnDesktop = document.getElementById("partyModeBtnDesktop")
const body = document.body
const partyElements = [
  document.querySelector('.mobile-navbar'),
  document.querySelector('.desktop-navbar'),
  document.querySelector('footer')
]
const talkingCat = document.getElementById("talkingCat")
const speechBubble = document.getElementById("speechBubble")


//hamburger menu toggle
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active")
  hamMenuLinks.classList.toggle("show")
})

document.querySelectorAll(".menu-item").forEach (link => {
  link.addEventListener("click", () => {
    hamMenu.classList.remove("active")
    hamMenuLinks.classList.remove ("show")
  })
})

//party mode toggle
function togglePartyMode() {
  document.body.classList.toggle("party-mode-body")

  partyElements.forEach(el => { 
    if(el) el.classList.toggle("party-mode")
  })
}

partyBtnMobile.addEventListener("click", togglePartyMode)
partyBtnDesktop.addEventListener("click", togglePartyMode)

// talking cat on click
talkingCat.addEventListener("click", () => {
  speechBubble.style.display ="block"

  setTimeout(() => {
    speechBubble.style.display = "none"
  }, 500)
})
console.log("hej")