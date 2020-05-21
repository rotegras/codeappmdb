import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


const GlobalStyles = createGlobalStyle`
  ${ normalize}

  html{
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.primary};
    overflow-y: scroll;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    line-height: 1.5;
  }

  body {
    background: ${({ theme }) => theme.colors.black};
    background: linear-gradient(180deg, rgba(0,0,0,0)) 0%, rgba(0,0,0,1) 100%);
    color: ${({ theme }) => theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.accentLight};
    line-height: 1.15;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.bigger};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.big};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  ul {
    list-style: none;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;