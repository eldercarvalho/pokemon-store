import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { pokemonReducer, PokemonState } from './pokemon/reducer';
import { cartReducer, CartState } from './cart/reducer';

export * from './cart';
export * from './pokemon';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const STORAGE_STATE_KEY = '@PokemonStore:state';

export interface Store {
  pokemon: PokemonState;
  cart: CartState;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  pokemon: pokemonReducer,
  cart: cartReducer,
});

const persistedState = localStorage.getItem(STORAGE_STATE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_STATE_KEY) || '')
  : {};

export const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
  localStorage.setItem(STORAGE_STATE_KEY, JSON.stringify(store.getState()));
});
