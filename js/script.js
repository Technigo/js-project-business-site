"use strict";

document.addEventListener("DOMContentLoaded", () => {
  /* ------------------------------------------------------
   1️⃣ DROPDOWN LISTS (in the search form)
------------------------------------------------------ */

  const selects = document.querySelectorAll(".search-form__select");

  selects.forEach((select) => {
    const group = select.parentElement;
    const title = select.querySelector(".search-form__title");
    const listItems = group.querySelectorAll(".search-form__item");

    select.addEventListener("click", (e) => {
      e.stopPropagation();
      const allGroups = document.querySelectorAll(".search-form__group");
      allGroups.forEach((g) => {
        if (g !== group) g.classList.remove("open");
      });
      group.classList.toggle("open");
    });

    listItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        title.textContent = item.textContent.trim();
        group.classList.remove("open");
      });
    });
  });

  document.addEventListener("click", () => {
    const allGroups = document.querySelectorAll(".search-form__group");
    allGroups.forEach((g) => g.classList.remove("open"));
  });

  /* ------------------------------------------------------
   2️⃣ ACTIVE BUTTONS (investments and cities)
------------------------------------------------------ */

  const methodButtons = document.querySelectorAll(".btn-method");
  const cityButtons = document.querySelectorAll(".btn-city");
  const cards = document.querySelectorAll(".section-invest__card");

  let selectedMethod = "all";
  let selectedCity = "all";

  function handleActive(buttons, callback, defaultIndex = 0) {
    buttons.forEach((btn, index) => {
      if (index === defaultIndex) {
        btn.classList.add("active");
        callback(btn.dataset);
      }

      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        callback(btn.dataset);
        filterCards();
      });
    });
  }

  function filterCards() {
    cards.forEach((card) => {
      const method = card.dataset.method;
      const city = card.dataset.city;
      const matchMethod = selectedMethod === "all" || method === selectedMethod;
      const matchCity = selectedCity === "all" || city === selectedCity;
      card.style.display = matchMethod && matchCity ? "block" : "none";
    });
  }

  handleActive(methodButtons, (data) => (selectedMethod = data.method), 0);
  handleActive(cityButtons, (data) => (selectedCity = data.city), 0);

  /* ------------------------------------------------------
   3️⃣ LIKED INVESTMENT CARD
------------------------------------------------------ */
  const heartButtons = document.querySelectorAll(".card-button-heart");
  let likedCards = JSON.parse(localStorage.getItem("likedCards")) || [];

  heartButtons.forEach((btn) => {
    const card = btn.closest(".section-invest__card");
    const cardId = card.dataset.id;

    if (likedCards.includes(cardId)) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");

      if (btn.classList.contains("active")) {
        likedCards.push(cardId);
      } else {
        likedCards = likedCards.filter((id) => id !== cardId);
      }

      localStorage.setItem("likedCards", JSON.stringify(likedCards));
    });
  });
});

/* ------------------------------------------------------
       4️⃣ INVESTMENT CARDS SLIDER
  ------------------------------------------------------ */

const container = document.querySelector(".section-invest__container__card");
const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");
const cardWidth =
  container.querySelector(".section-invest__card").offsetWidth + 16; // 16 = gap

btnRight.addEventListener("click", () => {
  container.scrollBy({ left: cardWidth, behavior: "smooth" });
});

btnLeft.addEventListener("click", () => {
  container.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

/* ------------------------------------------------------
    5️⃣ DARK MOOD 
  ------------------------------------------------------ */

// THEME TOGGLE SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const THEME_KEY = "theme";

  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggle.setAttribute("aria-pressed", savedTheme === "dark");
  }

  toggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    toggle.setAttribute("aria-pressed", newTheme === "dark");
  });
});
/* ------------------------------------------------------
    6️⃣  BURGER MENUE
  ------------------------------------------------------ */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");

  if (nav.classList.contains("nav-active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
    body.style.overflow = "auto";
  });
});

/* ------------------------------------------------------
    6️⃣  WINDOWS
  ------------------------------------------------------ */

window.addEventListener("load", () => {
  const scrollPos = localStorage.getItem("scrollPos");
  if (scrollPos) {
    window.scrollTo({ top: parseInt(scrollPos), behavior: "auto" });
    localStorage.removeItem("scrollPos");
  }
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const scrollPos = localStorage.getItem("scrollPos");
  if (scrollPos) {
    window.scrollTo(0, parseInt(scrollPos));
    localStorage.removeItem("scrollPos");
  }
});

const toggle = document.getElementById("language-toggle");
toggle.addEventListener("click", () => {
  localStorage.setItem("scrollPos", window.scrollY);

  const currentLang = window.location.pathname.includes("index.en.html")
    ? "en"
    : "ru";
  if (currentLang === "ru") {
    window.location.href = "index.en.html";
  } else {
    window.location.href = "index.html";
  }
});
