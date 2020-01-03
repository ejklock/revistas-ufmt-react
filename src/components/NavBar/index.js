import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Nav } from './style';

const handleNavToggle = e => {
  console.log(e);
};
export default function NavBar(props) {
  const { brandText, brandImage } = props;
  if (brandImage) {
    return (
      <Nav>
        <a id="brand">
          <img src={brandImage} alt="" />
          <h1>{brandText}</h1>
        </a>
        <ul id="main-nav">
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
        <button
          type="button"
          onClick={handleNavToggle}
          className="navbar-toogle"
        >
          <FaBars />
        </button>
      </Nav>
    );
  }
  return (
    <Nav>
      <a id="brand">
        <img src={brandImage} alt="" />
        <h1>{brandText}</h1>
      </a>
    </Nav>
  );
}
