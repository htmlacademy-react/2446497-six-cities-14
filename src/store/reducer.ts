import { createReducer } from '@reduxjs/toolkit';
import { chosenCity, fillOffers } from './action';
import { CityName } from '../const';
import { Offers } from '../types/offers';
import { offers } from '../mocks/offers';

type initialStateType = {
  city: string;
  offers: Offers;
};

const initialState: initialStateType = {
  city: CityName.Amsterdam,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chosenCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(fillOffers, (state) => {
      state.offers = offers;
    });
});

export { reducer };
