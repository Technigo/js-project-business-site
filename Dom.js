

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.ham-offscreen');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

function showDescription() {
  const dropdown = document.getElementById('monsterDropdown');
  const selectedValue = dropdown.value;
  const gridItems = document.querySelectorAll('.inside img');
  // Remove filter from all items
  gridItems.forEach(item => {
    item.classList.remove('filter');
  });

  // Apply filter to the selected item if not "Choose"
  if (selectedValue !== 'Choose') {
    const selectedItem = document.getElementById(selectedValue);
    if (selectedItem) {
      selectedItem.classList.remove('filter');
    }
  }
}

/* this was with help from reseach and ChatGPT*/

document.addEventListener("DOMContentLoaded", function () {
  let dropdown = document.getElementById("monsterDropdown");
  let audio = document.getElementById("monsterAudio");
  let source = document.getElementById("audioSource");

  // Ensure the dropdown element exists before attaching the event listener
  if (dropdown) {
    dropdown.addEventListener("change", function () {
      let selectedValue = this.value;

      if (selectedValue === "monsterMash") {
        if (source) {
          source.src = "./audio/monster-mash.mp3";
          audio.load();  // Reload the audio element
        }
        
        // Play the audio and handle any errors
        audio.play().catch(error => {
          console.error("Audio play failed:", error);
        });

        // Add visual effects
        document.body.classList.add("monster-mash-effect");
        dropdown.classList.add("monster-mash-effect");
        audio.classList.add("monster-mash-effect");

      } else {
        audio.pause();
        audio.currentTime = 0;

        // Remove visual effects
        document.body.classList.remove("monster-mash-effect");
        dropdown.classList.remove("monster-mash-effect");
        audio.classList.remove("monster-mash-effect");
      }
    });
  }
});