import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
  }

  body {
    font-family: 'Orbitron', sans-serif;
    color: #f5f5f5;
    line-height: 1.5;
    overflow-x: hidden;
    background-color: #0d0d0d;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #ccc;
  text-shadow: 1px 1px 3px #000;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color:rgb(255, 255, 255); /* Spotify-grönt */
  }
}
`
