
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const closeMenu = document.querySelector(".close-menu");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.add("show");
        menuIcon.style.display = "none"; // Hide hamburger
        closeMenu.style.display = "block"; // Show close button
    });

    // Close menu when clicking the close button
    closeMenu.addEventListener("click", function () {
        navLinks.classList.remove("show");
        closeMenu.style.display = "none"; // Hide close button
        menuIcon.style.display = "block"; // Show hamburger
    });

    const form = document.querySelector("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Stop page reload

        // Collect form data
        const formData = new FormData(form);

        try {
            // Send form data to the server (POST request)
            const response = await fetch("https://httpbin.org/anything", {
                method: "POST",
                body: formData
            });

            if (!response.ok) throw new Error("Form submission failed");

            // show server response in console)
            const result = await response.json();
            console.log("Server Response:", result);

            // Show success message
            document.querySelector(".form-container").innerHTML = `
                <h3>Order Submitted Successfully! 🎉</h3>
                <p>Your order has been sent successfully.</p>
                <p><strong>Name:</strong> ${formData.get("first-name")} ${formData.get("last-name")}</p>
                <p><strong>Order Type:</strong> ${formData.get("order-type")}</p>
                <p><strong>Size:</strong> ${formData.get("size")}</p>
                <p><strong>Quantity:</strong> ${formData.get("count")}</p>
                <p><strong>Comments:</strong> ${formData.get("comments") || "No comments"}</p>
                <button onclick="window.location.reload()">Submit Another Order</button>
            `;

        } catch (error) {
            alert("There was an error submitting your order. Please try again.");
            console.error(error);
        }
    });
});



