import React from 'react';
import { Container } from './styles';
import NavBar from '../../components/NavBar';
import ImageOverTextBanner from '../../components/ImageOverTextBanner';
import Footer from '../../components/Footer';
import SectionGrey from '../../components/SectionGrey';
import Section from '../../components/Section';
import MagazineCard from '../../components/MagazineCard';

import Brand from '../../assets/img/ufmt-logo.png';
import Logo from '../../assets/img/logo_ufmt_negativo_Prancheta.svg';
import { ReactComponent as Book } from '../../assets/img/book.svg';
import Banner from '../../assets/img/ufmt-library-photo-1600.jpg';
import { magazines } from '../../services/magazines';

export default function Main() {
  return (
    <Container>
      <NavBar
        brandImage={Brand}
        brandText="Portal de Revistas Científicas da UFMT"
      />
      <ImageOverTextBanner image={Banner} />
      <SectionGrey Icon={Book} title="SOBRE O PORTAL">
        <p>
          O Portal de Revistas Científicas da Universidade Federal de Mato
          Grosso (UFMT) é um projeto do Curso de Biblioteconomia, da Editora
          UFMT e da Pró-Reitoria de Pós-graduação e Pesquisa, que visa o
          desenvolvimento, a democratização do acesso ao conhecimento produzido
          pelas pesquisas científicas e a qualificação dos periódicos da UFMT. O
          Portal utiliza o Sistema Eletrônico de Editoração de Revistas (SEER)
          que é um software desenvolvido para a construção e gestão de uma
          publicação periódica eletrônica. Esta ferramenta contempla ações
          essenciais à automação das atividades de editoração de periódicos
          científicos.
        </p>
      </SectionGrey>
      <Section title="PERIÓDICOS CIENTÍFICOS">
        <div className="container-fluid">
          <div className="row">
            {magazines?.map(magazine => (
              <div key={magazine.id} className="col-md-4 col-lg-3 col-xl-2">
                <MagazineCard
                  title={magazine.name}
                  url={magazine.url}
                  image={magazine.cover}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer logo={Logo} />
    </Container>
  );
}
