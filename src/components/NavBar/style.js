import styled from 'styled-components';

const Nav = styled.nav`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;

    li {
      text-align: left;
      margin: 0;

      a {
        margin-left: 40px;
      }
    }
  }
  input {
    border: 1px solid #eee;
    min-width: 441px;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const Brand = styled.a`
  margin-top: 0;
  display: flex;
  justify-content: left;
  align-items: center;

  img {
    width: 122px;
    height: 122px;
  }

  h1 {
    font-family: 'Rubik', sans-serif;

    padding: 15px;
    font-size: 40px;
    text-transform: uppercase;
    color: #28166f;
  }
`;

export { Nav, Brand };
