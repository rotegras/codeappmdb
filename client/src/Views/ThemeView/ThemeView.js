import React from 'react';
import { Content, Container, Row, Col, Negative } from '../../Theme/Grid';
import { Input, TextArea } from '../../Theme/Forms';
import TagButton from '../../Components/Buttons/TagButton';
import ContentButton from '../../Components/Buttons/ContentButton';
import {
  ColorBlack, ColorWhite, ColorLightGray, ColorAccentLight, ColorAccentDark
} from '../../Theme/ColoredRectangle';

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
          <Col cols="12">
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
          <Col cols="12">
          <h3>
            Elements
          </h3>
            <button>Button</button>
            <Negative>
              <h4>
                Tag Button
              </h4>
              <TagButton
                name='BUTTON NAME'
                total="32"
              />
            </Negative>
            <Negative>
              <h4>
                Content Button
              </h4>
              <ContentButton>
                CONTENT BUTTON
              </ContentButton>
            </Negative>
            <Negative>
              <Input />
            </Negative>
            <Negative>
              <TextArea />
            </Negative>
          </Col>
          <Col cols="12">
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
