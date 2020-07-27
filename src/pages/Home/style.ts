import styled from 'styled-components';

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
`;

export const Catalog = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -0.8rem;

  > div {
    flex: 1 1 200px;
    /* max-width: calc(100% / 4 - 1.6rem); */
    width: calc(100% / 4 - 1.6rem);
    margin: 0 0.8rem 1.6rem;
  }
`;
