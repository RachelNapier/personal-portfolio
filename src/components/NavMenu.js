import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);

  ul {
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;

    li {
      display: inline-block;
      border-radius: 8px;
    }
    a {
      display: inline-block;
      font-family: 'Fira Sans', sans-serif;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--primary-color-1);
      outline: none;
      transition: 0.3s ease color;
      &:hover {
        color: var(--tertiary-color);
      }
    }
    .active {
      color: var(--tertiary-color);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      color: var(--primary-color-1);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
    }
    .closeNavIcon {
      display: block;
    }
  }
`;

export default function NavMenu() {
  return (
    <NavMenuStyles>
      <div className="mobile-menu-icon">
        <MdMenu />
      </div>
      <ul className="navItems">
        <div className="closeNavIcon">
          <MdClose />
        </div>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
