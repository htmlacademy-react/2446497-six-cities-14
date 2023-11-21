import { createAction } from '@reduxjs/toolkit';
import { OfferItem, Offers } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { ReviewItem, Reviews } from '../types/reviews';

export const chosenCity = createAction<{ city: string }>('city/chosenCity');
export const fillOffers = createAction<Offers>('offers/fillOffers');
export const fillOffer = createAction<OfferItem>('offer/fillOffer');
export const fillNearPlaces = createAction<Offers>('nearPlaces/fillNearPlaces');
export const fillReviews = createAction<Reviews>('reviews/fillReviews');
export const dropOffer = createAction('dropOffer/dropOffer');
export const fillFavorites = createAction<Offers>('dropOffer/fillFavorites');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('main/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOfferdDataLoadingStatus');
export const setOfferLoadingStatus = createAction<boolean>('data/setOfferLoadingStatus');
export const addNewReview = createAction<ReviewItem>('reviews/addNewReview');
