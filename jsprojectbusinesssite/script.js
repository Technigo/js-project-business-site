document.getElementById("hamburger").addEventListener("click", function() {
    let menu = document.getElementById("nav-menu")
    let title = document.getElementById("main-title")

    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "flex" : "none"
})

document.getElementById("hamburger").addEventListener("click", function() {
    this.classList.toggle("active");
});
