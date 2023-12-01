import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { OfferDataType } from './offer-data';
import { NameSpace } from '../../const';

export const getOffer = createSelector(
  (state: State) => state[NameSpace.Offer],
  (state: OfferDataType) => state.offer
);
export const getOfferLoadingStatus = createSelector(
  (state: State) => state[NameSpace.Offer],
  (state: OfferDataType) => state.fetchingStatus
);
