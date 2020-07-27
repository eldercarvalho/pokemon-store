import React, { createContext, useState, useContext, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';

import { water, fire } from '../utils/themes';
import { DEFAULT_THEME } from '../config';

import { clearCart, toggleCart } from '../store';

type WaterTheme = typeof water;
type FireTheme = typeof fire;
type AppTheme = WaterTheme | FireTheme;

interface ThemeState {
  currentTheme: AppTheme;
  currentThemeName: string;
}

interface ThemesContextData {
  theme: AppTheme;
  themeName: string;
  setTheme(themeName: string): void;
}

export const THEME_NAME_STORAGE_KEY = '@PokemonStore:themeName';

const getTheme = (themeName: string): AppTheme => {
  switch (themeName) {
    case 'fire':
      return fire;
    default:
      return water;
  }
};

const ThemesContext = createContext<ThemesContextData>({} as ThemesContextData);

const ThemesProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const [themeState, setThemeState] = useState<ThemeState>(() => {
    const themeName = localStorage.getItem(THEME_NAME_STORAGE_KEY);

    return {
      currentThemeName: themeName || DEFAULT_THEME,
      currentTheme: getTheme(themeName || DEFAULT_THEME),
    };
  });

  const setCurrentTheme = useCallback(
    (themeName: string) => {
      setThemeState({
        ...themeState,
        currentThemeName: themeName,
        currentTheme: getTheme(themeName),
      });

      localStorage.setItem(THEME_NAME_STORAGE_KEY, themeName);
      dispatch(clearCart());
      dispatch(toggleCart(false));
    },
    [dispatch, themeState],
  );

  return (
    <ThemesContext.Provider
      value={{
        themeName: themeState.currentThemeName,
        setTheme: setCurrentTheme,
        theme: themeState.currentTheme,
      }}
    >
      <ThemeProvider theme={{ theme: themeState.currentThemeName }}>
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};

const useTheme = (): ThemesContextData => {
  return useContext(ThemesContext);
};

export { useTheme, ThemesProvider };
