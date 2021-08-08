import React from 'react';
import * as G from '../../Theme/Grid';
import { Input, TextArea } from '../../Theme/Forms';
import TagButton from '../../Components/Buttons/TagButton';
import ContentButton from '../../Components/Buttons/ContentButton';
import constants from '../../Constants';
import {
  ColorBlack, ColorWhite, ColorLightGray, ColorAccentLight, ColorAccentDark
} from '../../Theme/ColoredRectangle';

export default function ThemeView() {
  return (
    <G.Content>
      <G.Container style={{marginTop: '6rem'}}>
        <G.Row>
          <h1>
            Theme
          </h1>
        </G.Row>
        <G.Row>
          <G.Col cols={12}>
            <h3>Grid</h3>
            <p>{constants.gridText}</p>
          </G.Col>
          <G.Col cols={12}>
            <h3>
              Typography
            </h3>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
          </G.Col>
          <G.Col cols={12}>
          <h3>
            Elements
          </h3>
            <button>Button</button>
            <G.Negative>
              <h4>
                Tag Button
              </h4>
              <TagButton
                name='BUTTON NAME'
                total={32}
              />
            </G.Negative>
            <G.Negative>
              <h4>
                Content Button
              </h4>
              <ContentButton>
                CONTENT BUTTON
              </ContentButton>
            </G.Negative>
            <G.Negative>
              <Input />
            </G.Negative>
            <G.Negative>
              <TextArea />
            </G.Negative>
          </G.Col>
          <G.Col cols={12}>
          <h3>
            Colors
          </h3>
          <ColorBlack />
          <ColorWhite />
          <ColorLightGray />
          <ColorAccentLight />
          <ColorAccentDark />
          </G.Col>
        </G.Row>
      </G.Container>
    </G.Content>
  );
}
