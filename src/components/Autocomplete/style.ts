import styled from 'styled-components';
import theme from 'styled-theming';
import { water, fire } from '../../utils/themes';

const borderRadius = theme('theme', {
  water: '2rem',
  fire: '0.5rem',
});

const optionColor = theme('theme', {
  water: water.colors.textColor,
  fire: fire.colors.textColor,
});

const optionHoverColor = theme('theme', {
  water: water.colors.secondary,
  fire: fire.colors.secondary,
});

export const Container = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  border: 1px solid transparent;
`;

export const InputSearch = styled.div`
  display: flex;
  border-radius: ${borderRadius};
  background: #fff;

  input {
    flex: 1;
    display: block;
    width: 100%;
    height: 40px;
    border: none;
    padding: 0 1.6rem;
    font-family: 'Lato';
    background: transparent;
  }
`;

export const ResultOptions = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  border-radius: ${borderRadius};
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  > div {
    max-height: 300px;
    overflow-y: auto;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const ResultOption = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border: none;
  padding: 0 1.6rem;
  background: #fff;
  color: ${optionColor};
  transition: padding 0.3s;
  font-size: 1.6rem;

  & + button {
    border-top: 1px solid #ddd;
  }

  &:hover {
    padding-left: 2.6rem;
    color: ${optionHoverColor};

    div {
      opacity: 1;
      left: 0;
    }
  }

  img {
    width: 50px;
    margin-right: 1.6rem;
  }

  strong {
    display: inline-block;
    margin-right: 1.2rem;
  }

  div {
    transition: all 0.3s;
    opacity: 0;
    left: 20px;
    display: flex;
    align-items: center;

    span {
      font-family: 'Lato';
      display: inline-block;
      margin-right: 1rem;
    }
  }
`;

export const NotFoundOption = styled.div`
  font-family: 'Lato';
  font-size: 1.6rem;
  padding: 1.6rem;
  background: #fff;
`;

// export const CloseButton = styeld(Button)`

// `
