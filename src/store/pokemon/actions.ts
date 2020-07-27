import { Dispatch } from 'redux';
import axios from 'axios';
import { PokemonActions, PokemonActionTypes } from './actionsTypes';
import { currencyFormat, capitalize } from '../../utils/helpers';
import { THEME_NAME_STORAGE_KEY } from '../../hooks/theme';
import { DEFAULT_THEME } from '../../config';

interface PokemonProps {
  name: string;
  url: string;
}

interface PokemonCatalogItem {
  pokemon: PokemonProps;
}

interface PokemonCatalog {
  pokemon: PokemonCatalogItem[];
}

export const setFetching = (): PokemonActionTypes => {
  return {
    type: PokemonActions.SetFetching,
  };
};

export const fetchPokemon = () => async (dispatch: Dispatch): Promise<void> => {
  const stoteType = localStorage.getItem(THEME_NAME_STORAGE_KEY) || DEFAULT_THEME;

  dispatch(setFetching());
  const response = await axios.get<PokemonCatalog>(
    `https://pokeapi.co/api/v2/type/${stoteType}/?limit=12`,
  );

  const promises = response.data.pokemon.map(async (pokemonsSummaryItem) =>
    axios.get(pokemonsSummaryItem.pokemon.url),
  );

  const pokemonResponses = await Promise.all(promises);

  const pokemon = pokemonResponses.slice(0, 24).map(({ data }) => {
    return {
      id: data.id,
      image: data.sprites.front_default,
      name: capitalize(data.name),
      price: data.base_experience,
      formattedPrice: currencyFormat(data.base_experience),
    };
  });

  // um delay aqui só pra apreciar a delícia do loading hehe
  setTimeout(() => {
    dispatch({
      type: PokemonActions.FetchPokemon,
      payload: pokemon,
    });
  }, 800);
};
