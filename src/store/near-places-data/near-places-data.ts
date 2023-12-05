import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferItem, Offers } from '../../types/offers';
import { fetchNearbyAction } from '../api-actions';
import { replaceFavoriteOffer } from '../../utils/common';

export type NearPlacesDataType = {
  nearPlaces: Offers;
};

const initialState: NearPlacesDataType = {
  nearPlaces: [],
};

export const nearPlacesData = createSlice({
  name: NameSpace.NearPlaces,
  initialState,
  reducers: {
    dropNearPlaces: (state) => {
      state.nearPlaces = [];
    },
    updateNearPlaces: (state, action: PayloadAction<OfferItem>) => {
      state.nearPlaces = replaceFavoriteOffer(state.nearPlaces, action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNearbyAction.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    });
  },
});

export const { dropNearPlaces, updateNearPlaces } = nearPlacesData.actions;
