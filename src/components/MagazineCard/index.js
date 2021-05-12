import React from 'react';

import { Container, CardImage, CardBody, CardTitle, Button } from './styles';

export default function MagazineCard({ title, url, image }) {
  return (
    <Container>
      <CardImage image={image} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <Button title={`Acessar a revista: ${title}`} href={url}>
          Acessar Revista
        </Button>
      </CardBody>
    </Container>
  );
}
