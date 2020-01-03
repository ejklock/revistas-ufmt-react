import styled from 'styled-components';

const Nav = styled.nav`
  padding: 30px;

  .brand-container {
    display: flex;
    justify-content: space-between;
    button {
      background: none;
      border: none;
      svg {
        color: #28166f;

        cursor: pointer;

        font-size: 30px;
      }
      svg:hover {
        color: black;
      }
    }
  }

  ul {
    list-style-type: none;
    display: none;
    flex-direction: column;
    align-items: normal;
    margin-top: 10px;
    li {
      margin-top: 20px;
    }
  }

  form {
    .search-box {
      border: 1px solid #28166f;
      font-family: 'Rubik';
      font-style: italic;
      height: 48px;
      width: 100%;
      width: -moz-available; /* WebKit-based browsers will ignore this. */
      width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
      width: fill-available;
      padding: 10px 15px;
      border-radius: 4px;
      font-size: 16px;
    }
  }

  h1 {
    font-family: 'Rubik', sans-serif;
    padding-left: 10px;

    text-transform: uppercase;
    color: #28166f;
  }

  .brand {
    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      width: 65px;
      height: 65px;
    }

    h1 {
      font-size: 13px;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    .brand-container {
      display: flex;
      flex-direction: row;
      .brand {
        img {
          width: 122px;
          height: 122px;
        }
        h1 {
          font-size: 40px;
        }
      }

      button {
        svg {
          display: none;
        }
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row-reverse;
      flex-grow: 1;
      align-items: center;

      li {
        padding-left: 15px;
        .search-box {
          min-width: 441px;
        }
      }
    }
  }
`;

export { Nav };
