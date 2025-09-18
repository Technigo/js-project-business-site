# 🚀 Release Note: De-News 2.0

## 🎉 Domain & Concept Update

**New Domain:** The site is now live at [Fartist.xyz](https://fartist.xyz) — yes, you read that right! We're celebrating a new concept for artists who use AI to produce art. A "Fartist" (no, not just a funny word!) is a forward-thinking artist who fuses creativity with artificial intelligence, sometimes with results that are as surprising as the name itself. In the world of Fartist, every AI-powered masterpiece is a breath of fresh... innovation. 😄

**Deployment:** De-News 2.0 is now deployed to Netlify using GitHub integration for streamlined and automated updates. Unlike version 1.0, which required manual uploads, the deployment process is now modern, efficient, and fully automated.

De-News 2.0 introduces a major upgrade in features, accessibility, and user experience. Below are the key improvements and additions since v1.0:

## ✨ New Features

- Dark mode / light mode toggle
- Responsive hamburger menu with animated slide-in/out and dynamic icon
- Modal sign in/up form in the footer
- Contact form with more input types
- Dynamic ARIA labels for hamburger menu for better accessibility
- Modal open/close logic with keyboard and click-outside support

## 🎨 Style & Layout Adjustments

- CSS grouped by component/section
- Removed unused keyframes and selectors
- Improved focus states and input feedback
- Enhanced card box-shadow and grid alignment
- Better mobile layout and spacing

- Improved ARIA labels for navigation, logo, hamburger menu, and modal
- Hamburger menu ARIA label updates between "Open" and "Close"
- Modal close button is now accessible to screen readers
- Better color contrast and focus highlights
- All interactive elements work with keyboard navigation

## 🛠️ JavaScript Enhancements

- Refactored hamburger menu, theme toggle, and modal logic for improved readability and maintainability
- Enhanced modal logic to toggle the `.hide` class and `display` style for more reliable open/close behavior
- Added robust client-side form validation for all required fields
- Streamlined event handling and reorganized JavaScript code for better structure

---

De-News 2.0 is a significant step forward in usability, accessibility, and maintainability. Thank you for using and contributing!

# js-project-business-site

https://shatat.online

#shatat.online

De-News – Decode the Future of Decentralization

📰 Website Description

DE-News is a modern news portal focused on Web3, blockchain, and decentralized technology.
It delivers the latest updates, articles, and insights on topics such as DeFi, NFTs, DAOs, and the future of the decentralized web.

The site is designed to be responsive and user-friendly, with a clean layout, interactive features, and a mobile-first experience. Its goal is to keep readers informed about the fast-moving world of Web3 through a reliable and accessible online platform.

This is the **Business Site Project** for the _Frontend Development with JavaScript_ course.  
The project has been built to meet all requirements

## ✅ Assessment Criteria Checklist

### Navigation & Layout

- [x] Responsive navigation bar
- [x] Card/article grid system
- [x] Combined usage of CSS Grid and Flexbox
- [x] Responsive header with hero image/video (3D)

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

- [x] Successful deployment on Netlify: [Fartist.xyz](https://fartist.xyz) (manual upload)

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

  - Text, radio, checkbox, and select inputs
  - A submit button configured with `method="POST"` and `action="https://httpbin.org/anything"`
  - JavaScript adds simple client-side validation
  - Input fields styled with CSS `:focus` for accessibility and feedback

- **Hamburger Menu**

  - Appears only on mobile devices (via media queries)
  - Toggles open/close state with JavaScript DOM manipulation
  - Icon changes dynamically to indicate expanded/collapsed state
  - Slide-in animation applied for smooth transitions

- **Animations **

  - CSS animations (fade/slide effects) enhance interactivity

- **Deployment**  
  The site is now live at **Fartist.xyz** ([https://fartist.xyz](https://fartist.xyz)), deployed via manual upload to Netlify.

---

- ** updated in this vesion D-News 2.0 **
  - CSS animations (slide-in effect on menu)
  - JavaScript toggle for dark mode/light mode
  - Interactive functionality via DOM manipulation
  - JavaScript adds simple client-side validation
  - Input fields styled with CSS `:focus` for accessibility and feedback
