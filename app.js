const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

/* Testing DOM
const age = 19;
if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
}   */
