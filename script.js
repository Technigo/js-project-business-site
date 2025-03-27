document.addEventListener("DOMContentLoaded", function () {
  
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    if (navLinks.classList.contains("show")) {
      menuToggle.textContent = "✖";
    } else {
      menuToggle.textContent = "☰";
    }
  });

  const form = document.getElementById("contactForm");
  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("Email");
    const emailError = document.getElementById("emailError");

    const thankModal = document.getElementById("thankModal");
    const userNameSpan = document.getElementById("userName");
    const closeModalBtn = document.getElementById("closeModal");

    form.addEventListener("submit", function(event) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const checkboxes = document.querySelectorAll('input[name="robot_interest"]');
      const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

      if (!emailPattern.test(emailInput.value)) {
        event.preventDefault();
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        return; 
      } else {
        emailError.style.display = "none";
      }

      if (!isChecked) {
        event.preventDefault();
        alert("Choose one robot that you are interested in.");
        return;
      }
      
      event.preventDefault(); 
      userNameSpan.textContent = nameInput.value; 
      thankModal.style.display = "block";
    });

    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", function() {
        thankModal.style.display = "none";
      });
    }
  }
  
  
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑ Top";
  scrollBtn.classList.add("scroll-to-top");
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
