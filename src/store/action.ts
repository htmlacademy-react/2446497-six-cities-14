import { createAction } from '@reduxjs/toolkit';
import { OfferItem } from '../types/offers';

export const chosenCity = createAction<{ city: string }>('city/chosenCity');
export const fillOffers = createAction('offers/fillOffers');
export const fillOffer = createAction<OfferItem['id']>('offer/fillOffer');
export const fillNearPlaces = createAction<OfferItem['id']>('nearPlaces/fillNearPlaces');
export const fillReviews = createAction<OfferItem['id']>('reviews/fillReviews');
export const dropOffer = createAction<OfferItem['id']>('dropOffer/dropOffer');
export const fillFavorites = createAction('dropOffer/fillFavorites');
