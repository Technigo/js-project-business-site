# 🚀 Release Note: De-News 2.0


**New Domain:** The site is now live at [Fartist.xyz](https://fartist.xyz)! I’m embracing the “Fartist” concept — yes, it’s a funny word, but it stands for something creative and bold. “Fartist” is a playful shortcut for “fake artist,” reflecting my approach of experimenting with AI and art—sometimes with unexpected (and entertaining) results. For me, being a Fartist means pushing boundaries, having fun, and letting every AI-powered creation be a breath of fresh… innovation. 😄


## Deployment:##
 De-News 2.0 now uses GitHub integration for automatic Netlify updates (no more manual uploads).

## ✨ Major New Features

- **Dark mode / light mode toggle:** Instantly switch themes; handled by new JavaScript logic.
- **Animated hamburger menu:** Responsive, slides in/out, icon changes, and ARIA labels update for accessibility.
- **Modal sign in/up form:** Opens from the footer, supports keyboard and click-outside closing.
- **Contact form:** More input types, robust client-side validation.

## 🛠️ Other Improvements

  - Better accessibility (dynamic ARIA labels, keyboard navigation)
  - Enhanced mobile layout, focus states, and color contrast
  - Much more: CSS and JS refinements, code cleanup, and UI polish

## Thank you ##
  De-News 2.0 marks a major leap in usability, accessibility, and maintainability. Thank you for taking the time to explore it!


## De-News – Decode the Future of Decentralization ##
  De-News is a modern news portal focused on Web3, blockchain, and decentralized tech.  
  Get the latest on DeFi, NFTs, DAOs, and more—all in a clean, mobile-first, and interactive site.

  Built for the _Frontend Development with JavaScript_ course, this project meets all course requirements.




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

- **Animations**

  - CSS animations (fade/slide effects) enhance interactivity

- **Deployment**  
  The site is now live at **Fartist.xyz** ([https://fartist.xyz](https://fartist.xyz)),
