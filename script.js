// TOGGLE MOBILE NAV
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
// toggle nav-open class
btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// CLOSE MOBILE NAV AFTER CLICKING NAV LINK
// slect all anchor elements and for each element add a click listener so that when it is clecked if the class is nav-link, nav-open is removed and the nav closes
const allLinks = document.querySelectorAll("a");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (link.classList.contains("nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

// COUNTDOWN
// getting release date time in milliseconds
const endDate = new Date("03/11/2025");
// to convert from miliseconds
const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;
// timer variable
let timer = 0;

function showRemainingTime() {
  // getting current date in milliseconds
  const currentDate = new Date();
  // finding the difference between the 2 dates in milliseconds
  const distanceDate = endDate - currentDate;

  // text that shows once timer runs out
  if (distanceDate < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "RELEASED!";

    return;
  }

  // getting remaining days, hours, minutes and seconds converted from milliseconds
  const days = Math.floor(distanceDate / day);
  const hours = Math.floor((distanceDate % day) / hour);
  const mins = Math.floor((distanceDate % hour) / min);
  const secs = Math.floor((distanceDate % min) / sec);

  document.querySelector(
    ".countdown"
  ).innerHTML = `${days} days ${hours} hrs ${mins} mins ${secs} sec`;
}

// run function every second to update countdown
timer = setInterval(showRemainingTime, 1000);

// FILTER PRODUCT TYPE
// select all elements with data-filter attribute and loop through each element (button)
document.querySelectorAll("[data-filter]").forEach((button) => {
  // to each of those buttons add a click event listener
  button.addEventListener("click", () => {
    // get the value of the data-filter attribute
    const filter = button.getAttribute("data-filter");
    // select all elements with the product class and loop through each
    document.querySelectorAll(".product").forEach((product) => {
      if (
        filter === "all" ||
        // get the value of the data-category and if it is equal to the filter display it, if not make it invisible
        product.getAttribute("data-category") === filter
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// ACTIVE CATEGORY
// select all category buttons
const categoryBtns = document.querySelectorAll(".category-btn");
// loop through category buttons and select each button
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // first loop through buttons and for each button remove any active class
    categoryBtns.forEach((button) => {
      button.classList.remove("active-btn");
    });
    // then add an active class to the clicked button
    btn.classList.add("active-btn");
  });
});

// DYNAMIC YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
