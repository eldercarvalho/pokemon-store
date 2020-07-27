import styled, { css, keyframes } from 'styled-components';
import theme from 'styled-theming';
import { water, fire } from '../../utils/themes';

const borderColor = theme('theme', {
  water: water.colors.borderColor,
  fire: fire.colors.borderColor,
});

const borderColorHover = theme('theme', {
  water: water.colors.primary,
  fire: fire.colors.primary,
});

const borderRadius = theme('theme', {
  water: '2rem',
  fire: '0.5rem',
});

const themeStyles = theme('theme', {
  water: css`
    padding-bottom: 1.6rem;
  `,
  fire: css`
    button.add-button {
      display: flex;
      width: 100%;
      border-bottom-left-radius: ${borderRadius};
      border-bottom-right-radius: ${borderRadius};
    }
  `,
});

const showOpenCartButtonAnimation = keyframes`
  from {
    opacity: 0;
    bottom: 5rem
  }
  to {
    bottom: 6rem;
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  border: 1px solid ${borderColor};
  border-radius: ${borderRadius};
  text-align: center;
  background: #fff;
  transition: border 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    border-color: ${borderColorHover};

    img {
      bottom: 1rem;
    }
  }

  img {
    position: relative;
    bottom: 0;
    width: 200px;
    transition: bottom 0.3s;
  }

  h4 {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }

  span {
    font-family: 'Lato';
    display: block;
    font-size: 1.6rem;
    margin-bottom: 2.2rem;
  }

  .open-cart {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    animation: ${showOpenCartButtonAnimation} 0.5s forwards;
  }

  ${themeStyles}
`;
