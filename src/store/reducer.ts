import { createReducer } from '@reduxjs/toolkit';
import { chosenCity, dropOffer, fillFavorites, fillNearPlaces, fillOffer, fillOffers, fillReviews } from './action';
import { OfferItem, Offers } from '../types/offers';
import { offers } from '../mocks/offers';
import { Reviews } from '../types/reviews';
import { reviews } from '../mocks/reviews';
import { CityName } from '../const';

type initialStateType = {
  city: string;
  offers: Offers;
  offer: OfferItem | null;
  nearPlaces: Offers;
  reviews: Reviews;
  favorites: Offers;
};

const initialState: initialStateType = {
  city: CityName.Paris,
  offers,
  offer: null,
  nearPlaces: [],
  reviews: [],
  favorites: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chosenCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(fillOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fillOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fillNearPlaces, (state, action) => {
      state.nearPlaces = offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fillReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(fillFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    });
});

export { reducer };
