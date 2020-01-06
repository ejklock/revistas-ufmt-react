import React, { Component } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Nav } from './style';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e) {
    e.preventDefault();
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { brandImage, brandText } = this.props;
    const { menuOpen = false } = this.state;

    return (
      <Nav open={menuOpen}>
        <div className="brand-container">
          <a className="brand" href="/">
            <img src={brandImage} alt="" />
            <h1>{brandText}</h1>
          </a>
          <button
            type="button"
            id="navbar-toggle"
            onClick={this.handleToggleClick}
          >
            <FaBars />
          </button>
        </div>

        <ul className="mainNav">
          <li>
            <form>
              <div className="search-container">
                <input
                  type="text"
                  className="search-box"
                  placeholder="Digite um termo de busca"
                />
                <FaSearch />
              </div>
            </form>
          </li>
        </ul>
      </Nav>
    );
  }
}
