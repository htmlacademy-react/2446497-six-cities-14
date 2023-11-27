import { createSlice } from '@reduxjs/toolkit';
import { CityName, LoadingDataStatus, NameSpace } from '../../const';
import { Offers } from '../../types/offers';
import { fetchOffersAction } from '../api-actions';

export type OffersDataType = {
  city: string;
  offers: Offers;
  fetchingStatus: boolean;
};

const initialState: OffersDataType = {
  city: CityName.Paris,
  offers: [],
  fetchingStatus: LoadingDataStatus.Pending,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.fetchingStatus = LoadingDataStatus.Pending;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.fetchingStatus = LoadingDataStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.fetchingStatus = LoadingDataStatus.Error;
      });
  },
});

export const { setActiveCity } = offersData.actions;
