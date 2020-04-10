import React from 'react';
import styled from 'styled-components';

const Rectangle = styled.div`
  diaplay: block;
  width: 6rem;
  height: 3rem;
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.lightGray};
`;

const ColorBlack = styled(Rectangle)`
  background: ${({ theme }) => theme.colors.black};
`;

const ColorWhite = styled(Rectangle)`
  background: ${({ theme }) => theme.colors.white};
`;

const ColorLightGray = styled(Rectangle)`
  background: ${({ theme }) => theme.colors.lightGray};
`;

const ColorAccentLight = styled(Rectangle)`
  background: ${({ theme }) => theme.colors.accentLight};
`;

const ColorAccentDark = styled(Rectangle)`
  background: ${({ theme }) => theme.colors.accentDark};
`;

export {
  Rectangle,
  ColorBlack,
  ColorWhite,
  ColorLightGray,
  ColorAccentLight,
  ColorAccentDark,
};
