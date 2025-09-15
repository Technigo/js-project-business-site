# js-project-business-site

# js-project-business-site – De-News

This is the **Business Site Project** for the *Frontend Development with JavaScript* course.  
The project has been built to meet all requirements 

📰 Website Description

DE News is a modern news portal focused on Web3, blockchain, and decentralized technology.
It delivers the latest updates, articles, and insights on topics such as DeFi, NFTs, DAOs, and the future of the decentralized web.

The site is designed to be responsive and user-friendly, with a clean layout, interactive features, and a mobile-first experience. Its goal is to keep readers informed about the fast-moving world of Web3 through a reliable and accessible online platform.
---

## ✅ Assessment Criteria Checklist

### Navigation & Layout
- [x] Responsive navigation bar  
- [x] Card/article grid system  
- [x] Combined usage of CSS Grid and Flexbox  
- [x] Responsive header with hero image/video  

### Interactive Elements
- [x] A form including at least 3 different input types:
  - [x] Text input
  - [x] Password
  - [x] Radio button set
  - [x] Checkbox set
  - [x] Select/dropdown
  - [x] Submit button  
- [x] Form configuration: POST method to `https://httpbin.org/anything`  
- [x] Responsive hamburger menu:
  - [x] Visible on mobile devices  
  - [x] Interactive functionality via DOM manipulation  

### Deployment
- [x] Successful deployment on Netlify: [shatat.online](https://shatat.online)

### Stretch Goals (VG – Pass with Distinction)
At least 4 stretch goals are implemented:
- [x] Box shadow on cards (Polaroid effect)  
- [x] Cards aligned to the centre of the page  
- [x] Input focus effect (`:focus` with glow/border change)  
- [x] Form validation added  
- [x] Hamburger icon changes when expanded/collapsed  
- [x] CSS animations (slide-in effect on menu)  
- [x] JavaScript toggle for dark mode/light mode  

---

## 💻 How Criteria Are Met in Code

- **Responsive navigation bar**  
  Built with Flexbox; adapts layout between desktop and mobile.  

- **Card / Article Grid System**  
  CSS Grid structures the main layout; Flexbox aligns content within each card.  

- **Hero Header**  
  A full-width hero section with a background image scales responsively across all viewports (320px–1600px).  

- **Form**  
  The form includes:
  - Text, password, radio, checkbox, and select inputs  
  - A submit button configured with `method="POST"` and `action="https://httpbin.org/anything"`  
  - JavaScript adds simple client-side validation  
  - Input fields styled with CSS `:focus` for accessibility and feedback  

- **Hamburger Menu**  
  - Appears only on mobile devices (via media queries)  
  - Toggles open/close state with JavaScript DOM manipulation  
  - Icon changes dynamically to indicate expanded/collapsed state  
  - Slide-in animation applied for smooth transitions  

- **Animations & Dark Mode**  
  - CSS animations (fade/slide effects) enhance interactivity  
  - JavaScript allows toggling between dark mode and light mode by applying/removing a `dark-mode` class  

- **Deployment**  
  The site is deployed live via **Netlify** at [shatat.online](https://shatat.online).  

---

## 🚀 Getting Started

1. Clone the repo:  
   ```bash
   git clone https://github.com/yourusername/shatat-online.git
   cd shatat-online
