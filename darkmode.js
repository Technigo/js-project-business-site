let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

//if darkmode is active in localstorage, enable it
if (darkmode === "active") {
  document.body.classList.add("darkmode");
}

//excecute on click. toggle darkmode. 
themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  localStorage.setItem("darkmode", document.body.classList.contains("darkmode") ? "active" : "inactive");
});


//remember console.log