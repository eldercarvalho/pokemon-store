import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';
import { useMedia } from 'react-media';

import { IPokemon } from '../../entities/Pokemon';

import { useTheme } from '../../hooks/theme';

import { Store, toggleCart, CartItem, addToCart } from '../../store';

import logoPng from '../../assets/images/logo.png';

import Autocomplete from '../Autocomplete';
import Button from '../Button';

import { Container, LogoLink, AbsoluteAutocomplete } from './style';

interface CartProps {
  items: CartItem[];
  isOpened: boolean;
}

interface PokemonProps {
  pokemon: IPokemon[];
}

const Navbar: React.FC = () => {
  const { themeName, theme } = useTheme();
  const location = useLocation();
  const [showAutocomplete, setShowAutocomplete] = useState<boolean>(false);
  const isSmallScreen = useMedia({ query: '(max-width: 640px)' });
  const dispatch = useDispatch();
  const { items, isOpened: isCartOpened } = useSelector<Store, CartProps>((state) => {
    return { items: state.cart.items, isOpened: state.cart.isOpened };
  });

  const { pokemon } = useSelector<Store, PokemonProps>((state) => {
    return {
      pokemon: state.pokemon.pokemon,
    };
  });

  const handleAddProduct = useCallback(
    (product: IPokemon) => {
      const cartItem = {
        id: uuid(),
        product,
        quantity: 1,
      };

      dispatch(addToCart(cartItem));
    },
    [dispatch],
  );

  return (
    <Container>
      <div className="inner-container">
        <LogoLink to="/">
          <img src={logoPng} alt="Pokémon Store" />
          <span>{themeName}</span>
          <span>store</span>
        </LogoLink>

        {!isSmallScreen && (
          <Autocomplete
            options={pokemon}
            onChoose={(option) => handleAddProduct(option)}
          />
        )}

        {isSmallScreen && showAutocomplete && (
          <AbsoluteAutocomplete
            options={pokemon}
            onChoose={(option) => handleAddProduct(option)}
          />
        )}

        <div className="buttons">
          {isSmallScreen && (
            <Button iconOnly onClick={() => setShowAutocomplete(!showAutocomplete)}>
              {showAutocomplete ? (
                <theme.icons.close size={24} />
              ) : (
                <theme.icons.search size={24} />
              )}
            </Button>
          )}
          <Button iconOnly to="/">
            <theme.icons.pokeballs style={{ width: '24px', height: '24px' }} />
          </Button>
          <Button
            disabled={location.pathname === '/settings'}
            iconOnly
            onClick={() => dispatch(toggleCart(!isCartOpened))}
          >
            <theme.icons.cart size={24} />
            {items.length > 0 && <span>{items.length}</span>}
          </Button>
          <Button iconOnly to="/settings">
            <theme.icons.settings size={24} />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
