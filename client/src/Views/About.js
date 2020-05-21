import React from 'react';
import { Container, Row, Col } from '../Theme/Grid';

export default function About() {
  return (
    <Container>
      <Row direction="row">
        <Col cols={15}>

        </Col>
        <Col cols={30}>
          <h1>
            About this App
          </h1>
          <p>
            Snippets is a small app to store code snippets and remember other stuff I need in a regular basis.
          </p>
          <p>
            It is a MERN app using Node, Express React and MongoDB.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
