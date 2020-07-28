import styled from 'styled-components';
import theme from 'styled-theming';
import { water, fire } from '../../utils/themes';

const borderColor = theme('theme', {
  water: water.colors.secondary,
  fire: fire.colors.secondary,
});

const borderRadius = theme('theme', {
  water: '2rem',
  fire: '0.5rem',
});

export const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 6rem);

  .page-title {
    font-size: 3rem;
    margin-bottom: 2rem;
    line-height: 1;
  }

  .loading {
    margin: 5rem auto;
  }

  @media (max-width: 640px) {
    .page-title {
      font-size: 2.2rem;
    }
  }
`;

export const Banner = styled.div`
  /* border: 1px solid ${borderColor}; */
  border-radius: ${borderRadius};
  overflow: hidden;
  margin-bottom: 4rem;

  img {
    display: block;
  }
`;

export const Catalog = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -0.8rem;

  > div {
    flex: 1 1 200px;
    width: calc(100% / 4 - 1.6rem);
    margin: 0 0.8rem 1.6rem;
  }
`;
