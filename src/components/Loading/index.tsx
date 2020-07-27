import React from 'react';

import { useTheme } from '../../hooks/theme';

import { Container } from './style';

const Product: React.FC = () => {
  const { themeName, theme } = useTheme();

  return (
    <Container className="loading">
      <img src={theme.loading} alt={themeName} />
    </Container>
  );
};

export default Product;
