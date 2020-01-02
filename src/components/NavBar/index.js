import React from 'react';
import { Nav, Brand } from './style';

export default function NavBar(props) {
  const { brandText, brandImage } = props;
  if (brandImage) {
    return (
      <Nav>
        <Brand>
          <img src={brandImage} alt="" />
          <h1>{brandText}</h1>
        </Brand>
        <ul className="main-nav" id="js-menu">
          <li>
            <a href="#" className="nav-links">
              Buscar
            </a>
          </li>
        </ul>

        <input />
      </Nav>
    );
  }
  return (
    <Nav>
      <Brand>
        <h1>{brandText}</h1>
      </Brand>
    </Nav>
  );
}
