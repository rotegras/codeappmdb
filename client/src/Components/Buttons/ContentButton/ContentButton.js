import React from 'react';
import { Wrapper, Inner } from './ContentButton.styles';


export default function ContentButton({ children, props }) {
  return (
    <Wrapper>
      <Inner>
        { children }
      </Inner>
    </Wrapper>
  );
}
