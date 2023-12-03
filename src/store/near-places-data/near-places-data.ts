import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offers } from '../../types/offers';
import { fetchNearbyAction } from '../api-actions';

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
  },
  extraReducers(builder) {
    builder.addCase(fetchNearbyAction.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    });
  },
});

export const { dropNearPlaces } = nearPlacesData.actions;
