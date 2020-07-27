import { IPokemon } from '../../entities/Pokemon';

export enum PokemonActions {
  FetchPokemon = 'FETCH_POKEMON',
  SetFetching = 'SET_FGETCHING',
}

interface FetchPokemonAction {
  type: PokemonActions.FetchPokemon;
  payload: IPokemon[];
}

interface SetFetchingAction {
  type: PokemonActions.SetFetching;
}

export type PokemonActionTypes = FetchPokemonAction | SetFetchingAction;
