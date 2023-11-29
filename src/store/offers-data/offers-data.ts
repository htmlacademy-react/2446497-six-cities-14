import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityName, LoadingDataStatus, NameSpace } from '../../const';
import { OfferItem, Offers } from '../../types/offers';
import { fetchOffersAction } from '../api-actions';
import { replaceFavoriteOffer } from '../../utils/common';

export type OffersDataType = {
  city: string;
  offers: Offers;
  fetchingStatus: LoadingDataStatus;
};

const initialState: OffersDataType = {
  city: CityName.Paris,
  offers: [],
  fetchingStatus: LoadingDataStatus.Unsent,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    updateOffers: (state, action: PayloadAction<OfferItem>) => {
      state.offers = replaceFavoriteOffer(state.offers, action.payload);
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

export const { setActiveCity, updateOffers } = offersData.actions;
