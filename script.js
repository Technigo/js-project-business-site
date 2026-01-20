const btn = document.querySelector(".btn");
const mobileNav = document.querySelector(".mobile-navbar");
const overlay = document.getElementById("overlay");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    mobileNav.classList.toggle("active");
    overlay.classList.toggle("active");
});

//close button when click menu
document.querySelectorAll(".mobile-navbar a").forEach(link => {
    link.addEventListener("click", () => {
        btn.classList.remove("active");
        mobileNav.classList.remove("active");
        overlay.classList.remove("active");
    });
});

// back to top button
const backButton = document.querySelector(".backBtn");

// back to top when click
backButton.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

//show when scroll
window.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
        backButton.classList.add("is-active");
    }else{
        backButton.classList.remove("is-active");
    }    
});