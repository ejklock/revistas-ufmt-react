import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  button,
  .navbar-toggle {
    border: none;
    background: none;
    margin-left: 50px;
    display: flex;
    align-items: center;
    font-size: 40px;
    cursor: pointer;
  }
  ul,
  #main-nav {
    list-style: none;
    display: none;
    align-items: center;

    li {
      text-align: center;
      margin: 15px auto;
      a {
        text-decoration: none;
      }
    }
  }

  h1 {
    font-family: 'Rubik', sans-serif;
    padding-left: 10px;

    text-transform: uppercase;
    color: #28166f;
  }

  a,
  #brand {
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;

    img {
      width: 65px;
      height: 65px;
    }

    h1 {
      font-size: 13px;
    }
  }
  @media screen and (min-width: 768px) {
    svg,
    .navbar-toggle {
      display: none;
    }
    ul,
    #main-nav {
      display: flex;
    }
    a,
    #brand {
      img {
        width: 122px;
        height: 122px;
      }
      h1 {
        font-size: 40px;
      }
    }
  }
`;

export { Nav };
