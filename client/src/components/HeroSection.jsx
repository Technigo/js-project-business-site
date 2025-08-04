// src/components/HeroSection.jsx
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/images/band.jpg'
import logo from '../assets/logo.svg'

const Hero = styled.section`
  min-height: 100dvh;
  width: 100dvw;
  position: relative;
  background: url(${backgroundImage}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
  padding-bottom: 4rem;
  text-align: center;
  overflow: hidden;

  .hero-content {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 1.5rem 2rem;
    max-width: 90%;
    border-radius: 8px;
  }

  > div {
    max-width: 100%;
    overflow-x: hidden;
  }

  h1 {
    font-size: 2.5rem;
    color: #f5f5f5;
    text-shadow: 2px 2px 6px #000;
    margin: 0;
    word-break: break-word;
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #ccc;
    text-decoration: none;
    text-shadow: 1px 1px 3px #000;

    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    .hero-content {
      backdrop-filter: blur(4px);
    }

    h1 {
      font-size: 4rem;
    }

    a {
      font-size: 1.5rem;
    }
  }
`

const LogoLink = styled(Link)`
  position: absolute;
  top: 0rem;
  left: 2rem;
  z-index: 10; /* 🟢 Ligger över nav */

  img {
    height: 80px;

    @media (min-width: 768px) {
      height: 200px;
    }
  }
`


export const HeroSection = () => {
  return (
    <Hero id="hero">
      <LogoLink to="/">
        <img src={logo} alt="Morbid Gene logo" />
      </LogoLink>
      <div className="hero-content">
        <h1>Morbid Gene Official</h1>
        <a
          href="https://open.spotify.com/album/0OnT6kBQPRmHazmvOiLxQe?si=_gBnA79hSHySmec_U1cdUg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our EP 'Pain Agony Misery' out now – Listen here!
        </a>
      </div>
    </Hero>
  )
}
