import { createReducer } from '@reduxjs/toolkit';
import { chosenCity } from './action';
import { CityName } from '../const';
import { offers } from '../mocks/offers';

const initialState = {
  city: CityName.Amsterdam,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(chosenCity, (state, action) => {
    state.city;
  });
});

export { reducer };
