import { FiShoppingCart, FiSettings, FiCheck, FiX, FiSearch } from 'react-icons/fi';

import loadingGif from '../../assets/images/water-loading.gif';
import storePetPng from '../../assets/images/water-store-pet.png';
import { ReactComponent as pokeballsSvg } from '../../assets/images/water-pokeballs.svg';

export const water = {
  colors: {
    primary: '#1da2d8',
    secondary: '#0f4c75',
    textColor: '#656565',
    borderColor: '#e4e9f2',
  },
  font: {
    family: 'Indie Flower',
  },
  icons: {
    cart: FiShoppingCart,
    settings: FiSettings,
    check: FiCheck,
    close: FiX,
    search: FiSearch,
    pokeballs: pokeballsSvg,
  },
  loading: loadingGif,
  storePetPng,
};
