
const menuIcon = document.getElementById("menu-icon")
const navLinks = document.getElementById("nav-links")
const header = document.querySelector("header")
const originalParent = navLinks.parentNode // Save the original placing of the navlinks

menuIcon.addEventListener("click", () => {
  if (!navLinks.classList.contains("active")) {
    document.body.insertBefore(navLinks, header) // Move the navlinks above header
  } else {
    originalParent.insertBefore(navLinks, header.nextSibling) // Move the navlinks back to the original placing
  }

  navLinks.classList.toggle("active")
})

