import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { OffersDataType } from './offers-data';

export const getOffers = createSelector(
  (state: State) => state[NameSpace.Offers],
  (state: OffersDataType) => state.offers
);
export const getActiveCity = createSelector(
  (state: State) => state[NameSpace.Offers],
  (state: OffersDataType) => state.city
);
export const getOffersLoadingStatus = createSelector(
  (state: State) => state[NameSpace.Offers],
  (state: OffersDataType) => state.fetchingStatus
);
