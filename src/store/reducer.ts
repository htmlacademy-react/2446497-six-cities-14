import { createReducer } from '@reduxjs/toolkit';
import { chosenCity, dropOffer, fillFavorites, fillNearPlaces, fillOffer, fillOffers, fillReviews, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { OfferItem, Offers } from '../types/offers';
import { Reviews } from '../types/reviews';
import { CityName } from '../const';
import { AuthorizationStatus } from '../const';

type initialStateType = {
  city: string;
  offers: Offers;
  offer: OfferItem | null;
  nearPlaces: Offers;
  reviews: Reviews;
  favorites: Offers;
  AuthorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
};

const initialState: initialStateType = {
  city: CityName.Paris,
  offers: [],
  offer: null,
  nearPlaces: [],
  reviews: [],
  favorites: [],
  AuthorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chosenCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fillOffer, (state, action) => {
      state.offer = state.offers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fillNearPlaces, (state, action) => {
      state.nearPlaces = state.offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fillReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(fillFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.AuthorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export { reducer };
