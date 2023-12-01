import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { NearPlacesDataType } from './near-places-data';

export const getNearPlaces = createSelector(
  (state: State) => state[NameSpace.NearPlaces],
  (state: NearPlacesDataType) => state.nearPlaces
);
