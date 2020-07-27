import styled from 'styled-components';
import theme from 'styled-theming';
import { fire, water } from '../../utils/themes';

const backgroundColor = theme('theme', {
  fire: fire.colors.primary,
  water: water.colors.primary,
});

export const Container = styled.div`
  background-color: ${backgroundColor};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    color: #fff;
    margin-bottom: 5rem;
    text-align: center;
    line-height: 1;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }
  }
`;

export const ThemeOptions = styled.div`
  display: flex;

  button {
    flex: 1;
    position: relative;
    background: transparent;
    border: none;
    padding: 2rem;
    transition: all 0.3s;
    color: #fff;
    font-size: 3rem;

    &:hover {
      transform: scale(1.2);
      z-index: 1;
    }

    &.small {
      transform: scale(0.8);
    }

    img {
      margin-bottom: 1rem;
    }
  }
`;
