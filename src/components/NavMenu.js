import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
      transition: 0.3s easy color;
      &:hover {
        color: var(--tertiary-color);
      }
    }
    .active {
      color: var(--tertiary-color);
    }
  }
`;

export default function NavMenu() {
  return (
    <NavMenuStyles>
      <ul>
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
