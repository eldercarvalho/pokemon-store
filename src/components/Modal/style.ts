import styled, { keyframes } from 'styled-components';
import theme from 'styled-theming';
import { water, fire } from '../../utils/themes';

const borderColor = theme('theme', {
  water: water.colors.primary,
  fire: fire.colors.primary,
});

const borderRadius = theme('theme', {
  water: '2rem',
  fire: '0.5rem',
});

const showModalAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const showModalPopupAnimation = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${showModalAnimation} 0.5s forwards;
  padding: 1.6rem;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: inline-block;
  max-width: 600px;
  width: 100%;
  background: #fff;
  border-radius: ${borderRadius};
  padding: 1.6rem;
  animation: ${showModalPopupAnimation} 0.3s forwards;

  > div {
    border-radius: ${borderRadius};
    border: 2px solid ${borderColor};
    padding: 2rem;
    text-align: center;
  }

  > button {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
`;
