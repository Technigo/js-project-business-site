// create variables
let featuredUnicorn
const menu = document.querySelector(".menu")
const hamburger = document.getElementById("hamburger")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const menuItems = document.querySelectorAll(".menu-item")
const unicornSelect = document.getElementById("unicorn-select")
const fullDayCheckBox = document.getElementById("full-day")
const startTimeInput = document.getElementById("start-time")
const endTimeInput = document.getElementById("end-time")

// function to toogle the hamburger menu
const toggleMenu = () => {
  // toogle show-menu class on the menu element
  menu.classList.toggle("show-menu")
  // toggle closing-icon class on the hamburger element
  hamburgerIcon.classList.toggle("closing-icon")
}

// iterate through the links and add event listener to hide the menu when a link is clicked
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
}
)

// function to change the featured unicorn
const changeFeaturedUnicorn = (unicornId) => {
  // if there is a current featured unicorn - remove the class on that unicorn
  if (featuredUnicorn) {
    featuredUnicorn.classList.remove("featured-unicorn")
  }
  // if the unicornId is not blank - assign the new featured unicorn and add the class to the new unicorn
  if (unicornId) {
    featuredUnicorn = document.getElementById(unicornId)
    featuredUnicorn.classList.add("featured-unicorn")
  }
}

// function to get the unicorn element id in which a button ("more info" or "book now") was clicked
const getUnicornId = (clicked) => {
  // get the unicorn element id of the unicorn which button was clicked
  const unicornId = document.getElementById(clicked).parentElement.parentElement.id
  return unicornId
}

// function to change featured unicorn when more a info button is clicked
const showInfo = (clicked) => {
  changeFeaturedUnicorn(getUnicornId(clicked))
}

// function to change option in unicorn-select in booking form
const changeSelectedUnicorn = (optionValue) => {
  unicornSelect.value = optionValue
}

// function to change option in unicorn-select in booking form when a "book now" button is clicked
const bookUnicorn = (clicked) => {
  changeSelectedUnicorn(getUnicornId(clicked))
}

// function to disable time inputs when "full day" is checked in booking form
const toggleTimeInputs = () => {
  // if checkbox is checked - disable inputs
  if (fullDayCheckBox.checked === true) {
    startTimeInput.disabled = true
    endTimeInput.disabled = true
  }
  // if unchecked - activate the inputs
  else {
    startTimeInput.disabled = false
    endTimeInput.disabled = false
  }
}

// eventlistener on the full day checkbox
fullDayCheckBox.addEventListener("click", toggleTimeInputs)

