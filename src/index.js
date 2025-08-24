

let confirmedOrder = null;
let confirmedBookingTime = null;

document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("order-form");
  if (orderForm) {
    orderForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop default submit

      if (!confirmedOrder) {
        alert("Du måste först bekräfta din matbeställning innan du bokar bord.");
        return;
      }
      if (!confirmedBookingTime) {
        alert("Du måste välja en bokningstid innan du skickar beställningen.");
        return;
      }

      submitFullOrderAndBooking(); // Now submit with all data
    });
  }

  // Smooth scroll to contact section
  const bokaBtn = document.getElementById("bokabord");
  if (bokaBtn) {
    bokaBtn.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Menu items with quantity controls
  const menuItems = [
    { id: "steak", name: "Steak", price: 150 },
    { id: "pasta-arrabiata", name: "Pasta Arrabiata", price: 120 },
    { id: "hamburgare", name: "Hamburgare", price: 130 },
    { id: "schnitzel", name: "Schnitzel", price: 140 },
    { id: "lax", name: "Lax", price: 160 },
    { id: "lammkotlett", name: "Lammkotlett", price: 170 },
  ];

  menuItems.forEach(({ id, name, price }) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => orderAdd(name, price));
    }
  });

  // Booking time radios with better UI and no multiple alerts
  const timeRadios = document.querySelectorAll('input[name="booking_time"]');
  timeRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      confirmedBookingTime = e.target.value;
      updateBookingTimeMessage();
    });
  });

  // Confirm order button
  const confirmBtn = document.getElementById("bekräfta");
  if (confirmBtn) {
    confirmBtn.addEventListener("click", addToCart);
    confirmBtn.disabled = true; // Initially disable as cart empty
  }

  // Accessibility improvements for modal will be inside addToCart()
  // Clear any existing order message
  clearOrderConfirmedMessage();

  // Update Confirm Order button status on cart change
  updateConfirmButtonState();
});

let shoppingCart = [];
let priceList = [];
let descriptions = [];

function orderAdd(itemName, itemPrice) {
  // Add or increment quantity of item in shoppingCart
  const index = shoppingCart.findIndex(item => item.name === itemName);
  if (index > -1) {
    shoppingCart[index].quantity++;
  } else {
    shoppingCart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }
  updateOrderListUI();
  updateConfirmButtonState();
  clearOrderConfirmedMessage();
}

function updateOrderListUI() {
  const orderList = document.getElementById("order-list");
  if (!orderList) return;

  orderList.innerHTML = "";
  shoppingCart.forEach(item => {
    const li = document.createElement("li");

    li.textContent = `${item.name} x${item.quantity} - ${item.price * item.quantity} kr`;

    // Add quantity controls
    const minusBtn = document.createElement("button");
    minusBtn.textContent = "-";
    minusBtn.setAttribute("aria-label", `Minska antal för ${item.name}`);
    minusBtn.addEventListener("click", () => {
      item.quantity--;
      if (item.quantity <= 0) {
        shoppingCart = shoppingCart.filter(i => i.name !== item.name);
      }
      updateOrderListUI();
      updateConfirmButtonState();
    });

    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.setAttribute("aria-label", `Öka antal för ${item.name}`);
    plusBtn.addEventListener("click", () => {
      item.quantity++;
      updateOrderListUI();
      updateConfirmButtonState();
    });

    li.appendChild(minusBtn);
    li.appendChild(plusBtn);

    orderList.appendChild(li);
  });
}

function updateConfirmButtonState() {
  const confirmBtn = document.getElementById("bekräfta");
  if (!confirmBtn) return;
  confirmBtn.disabled = shoppingCart.length === 0;
}

function updateBookingTimeMessage() {
  const bookingMessage = document.getElementById("booking-message");
  if (!bookingMessage) {
    // Create message div if missing
    const container = document.getElementById("booking-time-container");
    if (container) {
      const div = document.createElement("div");
      div.id = "booking-message";
      div.style.marginTop = "8px";
      container.appendChild(div);
    }
  }
  const msgElem = document.getElementById("booking-message");
  if (!msgElem) return;

  if (confirmedBookingTime) {
    msgElem.textContent = `Bokningstid vald: ${confirmedBookingTime}:00.`;
    msgElem.style.color = "green";
  } else {
    msgElem.textContent = "";
  }

  // Check order confirmation status
  if (!confirmedOrder) {
    msgElem.textContent += " Du måste först bekräfta din matbeställning innan du bokar bord.";
    msgElem.style.color = "red";
  } else {
    msgElem.textContent += " Din beställning är bekräftad. Du kan nu skicka bokningen.";
    msgElem.style.color = "green";
  }
}

function clearOrderConfirmedMessage() {
  const confirmedMsg = document.getElementById("order-confirmed-message");
  if (confirmedMsg) {
    confirmedMsg.remove();
  }
}

function showOrderConfirmedMessage() {
  clearOrderConfirmedMessage();
  const container = document.getElementById("order-container") || document.body;
  const msg = document.createElement("div");
  msg.id = "order-confirmed-message";
  msg.textContent = "Order confirmed! Please select a booking time to finalize.";
  msg.style.backgroundColor = "#d4edda";
  msg.style.color = "#155724";
  msg.style.padding = "10px";
  msg.style.marginTop = "10px";
  msg.style.border = "1px solid #c3e6cb";
  msg.style.borderRadius = "4px";
  container.appendChild(msg);
}

function addToCart() {
  if (shoppingCart.length === 0) return; // Safety check

  // Summarize cart items
  const cartSummary = {};
  let grandTotal = 0;

  shoppingCart.forEach(item => {
    const { name, price, quantity } = item;
    if (!cartSummary[name]) {
      cartSummary[name] = {
        name,
        description: "",
        price,
        quantity,
        total: price * quantity
      };
    } else {
      cartSummary[name].quantity += quantity;
      cartSummary[name].total += price * quantity;
    }
    grandTotal += price * quantity;
  });

  // Remove existing modal if any
  const existingModal = document.querySelector(".custom-modal");
  if (existingModal) existingModal.remove();

  // Create modal with focus trap
  const modal = document.createElement("div");
  modal.className = "custom-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("tabindex", "-1");
  modal.style.position = "fixed";
  modal.style.top = "10%";
  modal.style.left = "50%";
  modal.style.transform = "translateX(-50%)";
  modal.style.backgroundColor = "white";
  modal.style.padding = "20px";
  modal.style.border = "2px solid black";
  modal.style.zIndex = 1000;
  modal.style.maxWidth = "90%";
  modal.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
  modal.style.outline = "none";

  modal.innerHTML = `
    <h2 id="modal-title">Order Confirmation</h2>
    <table border="1" cellpadding="8" cellspacing="0" aria-labelledby="modal-title">
      <thead>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${Object.values(cartSummary).map(item => `
          <tr>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.price} kr</td>
            <td>${item.quantity}</td>
            <td>${item.total} kr</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <p><strong>Grand Total:</strong> ${grandTotal} kr</p>
    <button id="confirm-order-btn">Confirm Order</button>
    <button id="cancel-order-btn">Cancel</button>
  `;

  document.body.appendChild(modal);

  // Focus management for modal
  modal.focus();

  // Trap focus inside modal
  trapFocus(modal);

  // Confirm order button
  modal.querySelector("#confirm-order-btn").addEventListener("click", () => {
    confirmedOrder = {
      items: cartSummary,
      grandTotal: grandTotal,
    };
    showOrderConfirmedMessage();
    shoppingCart = [];
    priceList = [];
    descriptions = [];
    updateOrderListUI();
    updateConfirmButtonState();
    modal.remove();
  });

  // Cancel button clears cart and closes modal
  modal.querySelector("#cancel-order-btn").addEventListener("click", () => {
    shoppingCart = [];
    priceList = [];
    descriptions = [];
    updateOrderListUI();
    updateConfirmButtonState();
    clearOrderConfirmedMessage();
    modal.remove();
  });
}

function trapFocus(element) {
  const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  const focusableElements = element.querySelectorAll(focusableElementsString);
  if (focusableElements.length === 0) return;

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  function handleFocus(event) {
    if (event.key !== "Tab") return;

    if (event.shiftKey) { // Shift + Tab
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else { // Tab
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }

  element.addEventListener("keydown", handleFocus);

  // Clean up on removal
  const observer = new MutationObserver(() => {
    if (!document.body.contains(element)) {
      element.removeEventListener("keydown", handleFocus);
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function submitFullOrderAndBooking() {
  const orderForm = document.getElementById("order-form");

  // Remove previous dynamic inputs if any
  const oldInputs = orderForm.querySelectorAll(".dynamic-input");
  oldInputs.forEach(input => input.remove());

  // Add booking time input
  const timeInput = document.createElement("input");
  timeInput.type = "hidden";
  timeInput.name = "booking_time";
  timeInput.value = confirmedBookingTime;
  timeInput.classList.add("dynamic-input");
  orderForm.appendChild(timeInput);

  // Add order items inputs
  Object.values(confirmedOrder.items).forEach((item, idx) => {
    const nameInput = document.createElement("input");
    nameInput.type = "hidden";
    nameInput.name = `cart_item_${idx}_name`;
    nameInput.value = item.name;
    nameInput.classList.add("dynamic-input");
    orderForm.appendChild(nameInput);

    const quantityInput = document.createElement("input");
    quantityInput.type = "hidden";
    quantityInput.name = `cart_item_${idx}_quantity`;
    quantityInput.value = item.quantity;
    quantityInput.classList.add("dynamic-input");
    orderForm.appendChild(quantityInput);

    const priceInput = document.createElement("input");
    priceInput.type = "hidden";
    priceInput.name = `cart_item_${idx}_price`;
    priceInput.value = item.price;
    priceInput.classList.add("dynamic-input");
    orderForm.appendChild(priceInput);
  });

  // Add grand total input
  const totalInput = document.createElement("input");
  totalInput.type = "hidden";
  totalInput.name = "cart_grand_total";
  totalInput.value = confirmedOrder.grandTotal;
  totalInput.classList.add("dynamic-input");
  orderForm.appendChild(totalInput);

  // Submit the form
  orderForm.submit();
}

// Hamburger menu toggle

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#primary-navigation');

  if (!hamburger || !navMenu) return;

  // Toggle menu visibility and aria attributes
  const toggleMenu = () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      hamburger.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('hidden', '');
      navMenu.classList.remove('active');
    } else {
      hamburger.setAttribute('aria-expanded', 'true');
      navMenu.removeAttribute('hidden');
      navMenu.classList.add('active');
    }
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });
// Close menu when clicking a menu link
window.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    // Delay closing menu to let link clicks process
    setTimeout(() => {
      hamburger.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('hidden', '');
      navMenu.classList.remove('active');
    }, 100); // 100 ms delay is usually enough
  }
});


});
