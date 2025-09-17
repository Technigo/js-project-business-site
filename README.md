# 🎵 NeonSound Studios  
_A responsive business website project_

## 📖 About the project
NeonSound Studios is a fictional recording studio website created as a **student project**.  
The goal was to practice building a **responsive, accessible business site** using **HTML, CSS, and JavaScript**.  

The site demonstrates:
- Semantic HTML structure
- Responsive layouts (320px → 1600px)
- Flexbox & CSS Grid usage
- Interactive hamburger menu
- Hero section with video background
- Card grid with featured studios
- Signup form with multiple input types
- Footer with copyright

---

## 🚀 Features
### Navigation & Layout
- Responsive **navigation bar** with desktop links and a mobile hamburger menu  
- Hamburger button toggles menu open/close with JavaScript  
- Accessible `aria-expanded` state and icon swap (☰ → ✖)  

### Hero
- Video background with overlay heading & tagline  

### Featured Studios
- **Card grid** layout:  
  - 1 column on mobile  
  - 2 columns on tablets  
  - 4 columns on desktop  
- Cards have shadows and hover lift effect  

### Signup Form
Form submits with `method="POST"` to (https://httpbin.org/anything).  
Includes:  
- Text input (name)  
- Email input  
- Password input (minlength validation)  
- Radio button group (role)  
- Checkbox (terms required)  
- Submit button  

### Footer
- Simple centered footer with copyright  

---

## 📱 Responsiveness
The design is responsive and functional across viewports **320px–1600px**:  
- Flexbox used for header and menus  
- CSS Grid used for cards  
- Media queries for breakpoints at 640px and 1024px  

---

## ✨ Stretch Goals (VG level)
This project includes stretch goals:
- Card shadows for a “Polaroid” feel  
- Cards centered on page  
- Focus glow on input fields (`:focus` selector)  
- Basic HTML5 form validation (required, minlength, type checks)  
- Animated hamburger icon (bars ↔ close X)  
- CSS animations (sound-wave EQ animation)  

---

## 🛠️ Technologies
- **HTML** (semantic structure)  
- **CSS** (variables, Flexbox, Grid, media queries, transitions, keyframes)  
- **JavaScript** for hamburger menu interactivity  

---

## 📂 Project Structure
/
├── README.md
├── hero-music-video.mp4
├── hero.png
├── index.html # main HTML page
├── style.css # styles and responsive design
└── script.js # hamburger menu interactivity