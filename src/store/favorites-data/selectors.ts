import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { FavoritesDataType } from './favorites-data';

export const getFavorites = createSelector(
  (state: State) => state[NameSpace.Favorites],
  (state: FavoritesDataType) => state.favorites
);

export const getFavoritesLoadingStatus = createSelector(
  (state: State) => state[NameSpace.Favorites],
  (state: FavoritesDataType) => state.fetchingStatus
);
