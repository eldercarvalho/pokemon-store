import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { shade } from 'polished';
import { water, fire } from '../../utils/themes';

const backgroundColor = theme.variants('theme', 'variant', {
  primary: {
    water: water.colors.primary,
    fire: fire.colors.primary,
  },
  secondary: {
    water: water.colors.secondary,
    fire: fire.colors.secondary,
  },
});

const backgroundColorHover = theme('theme', {
  water: shade(0.1, water.colors.primary),
  fire: shade(0.1, fire.colors.primary),
});

const borderRadius = theme('theme', {
  water: '2rem',
  fire: '0.5rem',
});

const textColor = theme('theme', {
  water: water.colors.textColor,
  fire: fire.colors.textColor,
});

const textColorHover = theme('theme', {
  water: water.colors.primary,
  fire: fire.colors.primary,
});

interface ContainerProps {
  variant: 'primary' | 'secondary';
  isIconOnly?: boolean;
  isDark?: boolean;
  isFull?: boolean;
  isSmall?: boolean;
  isDisabled: boolean;
  isTextOnly?: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  border: none;
  background: ${backgroundColor};
  color: #fff;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: ${borderRadius};
  font-weight: bold;
  padding: 0 3rem;
  font-size: 1.8rem;
  font-family: 'Lato';
  white-space: nowrap;

  svg {
    margin-right: 1rem;
  }

  ${(props) =>
    props.isIconOnly &&
    css`
      width: 4rem;
      padding: 0;

      svg {
        margin-right: 0;
      }
    `}

  ${(props) =>
    props.isFull &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) =>
    props.isSmall &&
    css`
      height: 3rem;
      font-size: 1.4rem;
    `}

  ${(props) =>
    props.isSmall &&
    props.isIconOnly &&
    css`
      width: 3rem;
    `}

  ${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.isTextOnly &&
    css`
      background: transparent;
      color: ${textColor};

      &:hover {
        color: ${textColorHover};
        background: transparent;
      }
    `}

  /* @media (min-width: 1024px) {
    &:hover {
      background: ${backgroundColorHover};
    }
  } */
`;
