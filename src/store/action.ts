import { createAction } from '@reduxjs/toolkit';
import { OfferItem, Offers } from '../types/offers';
import { AuthorizationStatus } from '../const';

export const chosenCity = createAction<{ city: string }>('city/chosenCity');
export const fillOffers = createAction<Offers>('offers/fillOffers');
export const fillOffer = createAction<OfferItem['id']>('offer/fillOffer');
export const fillNearPlaces = createAction<OfferItem['id']>('nearPlaces/fillNearPlaces');
export const fillReviews = createAction<OfferItem['id']>('reviews/fillReviews');
export const dropOffer = createAction('dropOffer/dropOffer');
export const fillFavorites = createAction('dropOffer/fillFavorites');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('main/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOfferdDataLoadingStatus');
export const setOfferLoadingStatus = createAction<boolean>('data/setOfferLoadingStatus');
