import { TiShoppingCart, TiSpannerOutline, TiTimes } from 'react-icons/ti';
import { GoCheck } from 'react-icons/go';

import fireLoadingGif from '../../assets/images/fire-loading.gif';
import storePetPng from '../../assets/images/fire-store-pet.png';
import { ReactComponent as pokeballsSvg } from '../../assets/images/fire-pokeballs.svg';

export const fire = {
  colors: {
    primary: '#f27d0c',
    secondary: '#B62203',
    textColor: '#656565',
    borderColor: '#e4e9f2',
  },
  font: {
    family: 'Merienda',
  },
  icons: {
    cart: TiShoppingCart,
    settings: TiSpannerOutline,
    check: GoCheck,
    close: TiTimes,
    pokeballs: pokeballsSvg,
  },
  loading: fireLoadingGif,
  storePetPng,
};
