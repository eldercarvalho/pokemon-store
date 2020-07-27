import React, { useState } from 'react';

import { useTheme } from '../../hooks/theme';

import waterThemePng from '../../assets/images/water-theme.png';
import fireThemePng from '../../assets/images/fire-theme.png';

import { CenteredContainer } from '../../style/global';
import { Container, ThemeOptions } from './style';

const Settings: React.FC = () => {
  const { setTheme, themeName } = useTheme();
  const [themeHovered, setThemeHovered] = useState(themeName);

  return (
    <Container>
      <CenteredContainer>
        <h1>Qual loja deseja acessar?</h1>
        <ThemeOptions>
          <button
            type="button"
            className={themeHovered !== 'water' ? 'small' : ''}
            onMouseEnter={() => setThemeHovered('water')}
            onMouseLeave={() => setThemeHovered(themeName)}
            onClick={() => setTheme('water')}
          >
            <img src={waterThemePng} alt="Tema Aqua" />
            <span>Water</span>
          </button>
          <button
            type="button"
            className={themeHovered !== 'fire' ? 'small' : ''}
            onMouseEnter={() => setThemeHovered('fire')}
            onMouseLeave={() => setThemeHovered(themeName)}
            onClick={() => setTheme('fire')}
          >
            <img src={fireThemePng} alt="Tema Ignis" />
            <span>Fire</span>
          </button>
        </ThemeOptions>
      </CenteredContainer>
    </Container>
  );
};

export default Settings;
