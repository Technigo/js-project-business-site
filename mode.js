document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if the user has a saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "Light Mode";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Update button text based on the mode
        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Light Mode";
            localStorage.setItem("theme", "dark"); // Save preference
        } else {
            themeToggle.textContent = "Dark Mode";
            localStorage.setItem("theme", "light"); // Save preference
        }
    });
});
