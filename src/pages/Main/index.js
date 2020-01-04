import React from 'react';
import { Container } from './styles';
import NavBar from '../../components/NavBar';
import ImageOverTextBanner from '../../components/ImageOverTextBanner';
import Footer from '../../components/Footer';
import SectionGrey from '../../components/SectionGrey';

import Brand from '../../assets/img/ufmt-logo.png';
import Logo from '../../assets/img/logo_ufmt_negativo_Prancheta.svg';
import { ReactComponent as Book } from '../../assets/img/book.svg';
import Banner from '../../assets/img/ufmt-library-photo-1600.jpg';

export default function Main() {
  return (
    <Container>
      <NavBar
        brandImage={Brand}
        brandText="Portal de Revistas Científicas da UFMT"
      />
      <ImageOverTextBanner image={Banner} />
      <SectionGrey Icon={Book} />
      <Footer logo={Logo} />
    </Container>
  );
}
