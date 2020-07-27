import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from 'styled-theming';
import { water, fire } from '../../utils/themes';

import Autocomplete from '../Autocomplete';

const cartItemsCountBackgrondColor = theme('theme', {
  water: water.colors.secondary,
  fire: fire.colors.secondary,
});

const backgroundColor = theme('theme', {
  water: water.colors.primary,
  fire: fire.colors.primary,
});

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  background: ${backgroundColor};
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    height: 60px;
    margin: 0 auto;
  }

  .buttons {
    display: flex;

    button {
      position: relative;

      & + button {
        margin-left: 0.5rem;
      }

      span {
        position: absolute;
        top: 0;
        right: 0px;
        display: inline-block;
        background: ${cartItemsCountBackgrondColor};
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        color: #fff;
        border-radius: 50%;
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 0 1.2rem;
  }

  @media (max-width: 640px) {
    .search {
      position: absolute !important;
      max-width: initial;
      width: 90%;
      z-index: 1;
    }

    .buttons {
      button {
        & + button {
          margin-left: 0;
        }
      }
    }
  }
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 2.6rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  img {
    margin-right: 1.2rem;
  }

  span {
    display: inline-block;
    margin-right: 1rem;
  }

  @media (max-width: 800px) {
    font-size: 1.6rem;

    img {
      width: 100px;
    }
  }

  @media (max-width: 800px) {
    font-size: 1.6rem;

    img {
      width: 70px;
    }
  }

  @media (max-width: 320px) {
    img {
      width: 100px;
    }

    span {
      display: none;
    }
  }
`;

export const AbsoluteAutocomplete = styled(Autocomplete)`
  position: absolute !important;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  width: 90%;
`;
