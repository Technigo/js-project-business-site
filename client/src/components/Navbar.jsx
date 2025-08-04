// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;
  background: transparent;

  @media (min-width: 768px) {
    justify-content: flex-end;
    padding: 2rem 3rem;
  }
`

const NavLinks = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    list-style: none;

    li a {
    font-size: 22px;
      color: white;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`

const BurgerToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: fixed;
  top: 15px;
  right: 10px;
  z-index: 1001;

  @media (min-width: 768px) {
    display: none;
  }
`

const Bar = styled.div`
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 5px;
  transition: 0.4s;

  &:nth-child(1) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'rotate(45deg) translateY(19px)' : 'none'};
  }
  &:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'rotate(-45deg) translateY(-19px)' : 'none'};
  }
`

const MobileMenu = styled.ul`
  position: fixed;
  top: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.89);
  list-style: none;
  padding: 5rem 2rem 2rem;
  transition: top 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;

  li {
    margin-bottom: 1.5rem;

    a {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <NavbarWrapper>
      <NavLinks>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#gigs">Gigs</a>
        </li>
        <li>
          <Link to="/media">Media</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </NavLinks>

      <BurgerToggle onClick={toggleMenu} $isOpen={isOpen}>
        <Bar $isOpen={isOpen} />
        <Bar $isOpen={isOpen} />
        <Bar $isOpen={isOpen} />
      </BurgerToggle>

      <MobileMenu $isOpen={isOpen}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#gigs">Gigs</a>
        </li>
        <li>
          <Link to="/media">Media</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </MobileMenu>
    </NavbarWrapper>
  )
}
