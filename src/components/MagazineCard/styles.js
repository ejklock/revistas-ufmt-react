import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  border: 1px solid #707070;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
`;

export const CardImage = styled.div`
  height: 300px;
  background: url(${props => props.image});
  border: 0;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CardBody = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  font-family: 'Rubik;';
  @media screen and (min-width: 768px) {
    font-size: calc(8px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    height: 100px;
  }
  font-weight: bold;
  padding-left: 5px;
  padding-right: 5px;
  color: #28166f;
`;

export const Button = styled.a`
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  display: inline-block;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  transition: 0.5s;
  font-size: calc(10px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Rubik';
  width: 100%;

  :hover {
    background-color: green;
  }
`;
