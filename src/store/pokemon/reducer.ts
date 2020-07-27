import { IPokemon } from '../../entities/Pokemon';
import { PokemonActions, PokemonActionTypes } from './actionsTypes';

export interface PokemonState {
  pokemon: IPokemon[];
  isFetching: boolean;
}

const initalState = {
  pokemon: [] as IPokemon[],
  isFetching: false,
};

export const pokemonReducer = (
  state = initalState,
  action: PokemonActionTypes,
): PokemonState => {
  switch (action.type) {
    case PokemonActions.FetchPokemon:
      return { ...state, pokemon: action.payload, isFetching: false };
    case PokemonActions.SetFetching:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};
