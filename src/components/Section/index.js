import React from 'react';

import { Container, SectionTitle } from './styles';

export default function Section({ children, title }) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  );
}
