import React from 'react';

import { Container, SectionIcon } from './styles';

export default function SectionGrey({ title, text, Icon, children }) {
  return (
    <Container>
      <SectionIcon>
        <h1>{title}</h1>
        <Icon />
      </SectionIcon>
      {children}
    </Container>
  );
}
