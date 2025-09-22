//toggle hamburger menu visibility
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const menuLinks = document.querySelectorAll("#nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active"); //switching the icons between open-closed state
});

//Close menu when cli on menu link
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
  navLinks.classList.remove("active");
  hamburger.classList.remove("active");
  })
})

//close menu when clicked outside of menu
document.addEventListener("click", (event) => {
  const isClickInsideMenu = navLinks.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

//Subscription validation
const btnNewsSubscribe = document.getElementById("btn-news-subscribe");
const subscribeForm = document.getElementById("subscription-form");

btnNewsSubscribe.onclick = (e) => {
  e.preventDefault();
  if (subscribeForm.checkValidity()) {
    alert("Thank you! Check your inbox for a small token of appreciation from us!");
    subscribeForm.reset();
  }
  else {
    subscribeForm.reportValidity();
  }
};

//Form sending validation
const btnContact = document.getElementById("btn-contact");
const contactForm = document.getElementById("contact-form");

btnContact.onclick = (e) => {
  e.preventDefault();
  if (contactForm.checkValidity()) {
    alert("Thank you! We got your message and will get back to you as soon as possible.");
    contactForm.reset();
  }
  else {
    contactForm.reportValidity();
  }
};
