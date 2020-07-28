import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';

import { useTheme } from '../../hooks/theme';

import { IPokemon } from '../../entities/Pokemon';

import { useEffectOnlyOnce } from '../../hooks/effect';

import { Store, fetchPokemon, PokemonState, addToCart } from '../../store';

import Cart from '../../components/Cart';
import Loading from '../../components/Loading';
import Product from '../../components/Product';

import { CenteredContainer } from '../../style/global';

import { Container, Banner, Catalog } from './style';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { isFetching, pokemon } = useSelector<Store, PokemonState>((state) => {
    return {
      isFetching: state.pokemon.isFetching,
      pokemon: state.pokemon.pokemon,
    };
  });

  useEffectOnlyOnce(() => {
    dispatch(fetchPokemon());
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
      <CenteredContainer>
        <Banner>
          <img src={theme.bannerJpg} alt="Promoção" />
        </Banner>

        <h1 className="page-title">Pokémon de qualidade, pelo preço justo!</h1>

        {!isFetching ? (
          <Catalog>
            {pokemon.map((pokemonData) => (
              <Product key={pokemonData.id} data={pokemonData} onAdd={handleAddProduct} />
            ))}
          </Catalog>
        ) : (
          <Loading />
        )}
        <Cart />
      </CenteredContainer>
    </Container>
  );
};

export default Home;
