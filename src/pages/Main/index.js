import React from 'react';
import { Container } from './styles';
import NavBar from '../../components/NavBar';

import Brand from '../../assets/img/ufmt-logo.png';

export default function Main() {
  return (
    <Container>
      <NavBar
        brandImage={Brand}
        brandText="Portal de Revistas Científicas da UFMT"
      />
    </Container>
  );
}
