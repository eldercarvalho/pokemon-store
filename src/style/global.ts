import styled, { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';
import { water, fire } from '../utils/themes';

import bgWaterPng from '../assets/images/bg-water.png';
import bgFirePng from '../assets/images/bg-fire.png';

const backgroundImage = theme('theme', {
  water: `url(${bgWaterPng})`,
  fire: `url(${bgFirePng})`,
});

const fontFamily = theme('theme', {
  water: water.font.family,
  fire: fire.font.family,
});

const textColor = theme('theme', {
  water: water.colors.textColor,
  fire: fire.colors.textColor,
});

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: ${fontFamily};
    color: ${textColor};
    background: ${backgroundImage} center center no-repeat fixed;
    background-size: cover;
  }

  input, button {
    font-family: inherit;
  }

  button, a {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  .text-right {
    text-align: right;
  }
`;

export const CenteredContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 100px 0;

  @media (max-width: 1024px) {
    padding: 100px 16px;
  }
`;
