import React from 'react';
import {
  Content,
  Container,
  Row,
  Col,
} from '../Components/Layout/Layout';
import {
  Rectangle,
  ColorBlack,
  ColorWhite,
  ColorLightGray,
  ColorAccentLight,
  ColorAccentDark,
} from '../Theme/ColoredRectangle';

export default function ThemeView() {
  return (
    <Content>
      <Container>
        <Row>
          <h1>
            Theme
          </h1>
        </Row>
        <Row>
          <Col>
            <h3>
              Typography
            </h3>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
          </Col>
          <Col>
          <h3>
            Elements
          </h3>
            <button>Button</button>
          </Col>
          <Col>
          <h3>
            Colors
          </h3>
          <ColorBlack />
          <ColorWhite />
          <ColorLightGray />
          <ColorAccentLight />
          <ColorAccentDark />
          </Col>
        </Row>
      </Container>
    </Content>
  );
}
