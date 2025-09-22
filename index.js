// =================== NAVIGATION (hamburger menu) ===================

const toggleButton = document.querySelector(".menu-toggle"); // the hamburger icon
const nav = document.getElementById("myTopnav"); // the <nav> element
const content = document.getElementById("page"); // the main content (blurred when menu/modal is open)

toggleButton.addEventListener("click", () => {
  // check current state of aria-expanded (true/false)
  const expanded =
    toggleButton.getAttribute("aria-expanded") === "true" || false;
  // toggle aria-expanded value for accessibility (screen readers know if menu is open)
  toggleButton.setAttribute("aria-expanded", !expanded);

  // toggle classes to show/hide nav and blur content
  nav.classList.toggle("active");
  content.classList.toggle("blur"); // blur the background content when the nav is open. Refer to blur  class in css

  //swap icon: bars <-> xmark
  const icon = toggleButton.querySelector("i");
  if (icon) {
    icon.classList.toggle("fa-bars", expanded);
    icon.classList.toggle("fa-xmark", !expanded);
  }
});

// =================== MODAL FUNCTIONS ===================

// Open a modal by ID
function openModal(id) {
  const modal = document.getElementById(id); // find the modal element by its id
  if (!modal) {
    console.warn(`Ingen modal med id="${id}" hittades`);
    return;
  }
  modal.classList.add("active"); // make modal visible (CSS handles style)
  document.body.style.overflow = "hidden"; // lock page scroll while modal is open
  if (content) content.classList.add("blur"); // blur the background content
}

// Close a modal by ID
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("active"); // hide modal again
    document.body.style.overflow = "auto"; // allow page scrolling again
    if (content) content.classList.remove("blur"); // remove background blur
  }
}

// =================== BUTTON CONNECTIONS ===================

// All buttons that open modals
document.querySelectorAll(".open-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Each open button has a data-target attribute with the ID of the modal it controls
    openModal(btn.dataset.target);
  });
});

// All buttons that close modals
document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Each close button closes the modal with the same ID as its data-target
    closeModal(btn.dataset.target);
  });
});
