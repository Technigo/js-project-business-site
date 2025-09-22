const hamburgerIcon = document.getElementById("hamburgerIcon");
const crossIcon = document.getElementById("crossIcon");
const navBar = document.getElementById("nav");
const navLinks = document.getElementById("links");
const cardButtons = document.querySelectorAll(".card-button");
const cardButton = document.querySelector(".card-button");
const cards = document.querySelectorAll(".card");
const card = document.querySelector(".card");
const modalOverlay = document.getElementById("modalOverlay");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent")
const modalCrossIcon = document.getElementById("modalCrossIcon");

function expandCollapseHamburgerMenu() {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
    navBar.style.backgroundColor = "transparent";
  } else {
    navLinks.style.display = "block";
    navBar.style.backgroundColor = "rgba(33, 32, 23, 0.817)";
  }
}

/* add/remove the CSS for the class hidden (which is display: none) to the different menu icons */
function changeMenuIcon() {
  hamburgerIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
};

menuIcon.addEventListener("click", () => {
  expandCollapseHamburgerMenu();
  changeMenuIcon();
});


function openCloseModal() {
  modalOverlay.classList.toggle("hidden");
};

function showCardInModal(clickedButton) {
    // find the card which button was clicked
    const clickedCard = clickedButton.closest(".card"); 
      
    // copy its inner HTML into modal-content
    modalContent.innerHTML = clickedCard.innerHTML;

    // remove the card's inital ("read more") button
    modalContent.querySelector(".card-button").remove();
};

/* call the funtions on click for every of the card buttons */
cardButtons.forEach((cardButton) => {
cardButton.addEventListener("click", () => {
  openCloseModal(cardButton);
  showCardInModal(cardButton);
});
});

modalCrossIcon.onclick = () => {
  openCloseModal();
};