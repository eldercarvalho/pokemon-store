import styled, { keyframes } from 'styled-components';
import theme from 'styled-theming';
import { water, fire } from '../../utils/themes';

const backgroundColor = theme('theme', {
  water: water.colors.secondary,
  fire: fire.colors.secondary,
});

const tooltipBorderRadius = theme('theme', {
  water: '2rem',
  fire: '0.5rem',
});

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const teste = keyframes`
  from {
    top: 90%;
    opacity: 0;
  }
  to {
    top: calc(100% + 8px);
    opacity: 1;
  }
`;

export const TooltipContainer = styled.div`
  font-family: 'Lato';
  font-size: 1rem;
  background: ${backgroundColor};
  color: #fff;
  padding: 0.8rem;
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: bold;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation: ${teste} 0.3s forwards;
  pointer-events: none;
  border-radius: ${tooltipBorderRadius};
`;
