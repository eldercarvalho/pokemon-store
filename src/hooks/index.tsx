import React from 'react';
import { ThemesProvider } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return <ThemesProvider>{children}</ThemesProvider>;
};

export default AppProvider;
