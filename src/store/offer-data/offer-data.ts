import { createSlice } from '@reduxjs/toolkit';
import { OfferItem } from '../../types/offers';
import { LoadingDataStatus, NameSpace } from '../../const';
import { fetchOfferAction } from '../api-actions';

export type OfferDataType = {
  offer: OfferItem | null;
  fetchingStatus: boolean;
};

const initialState: OfferDataType = {
  offer: null,
  fetchingStatus: LoadingDataStatus.Pending,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.offer = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.fetchingStatus = LoadingDataStatus.Pending;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.fetchingStatus = LoadingDataStatus.Success;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.fetchingStatus = LoadingDataStatus.Error;
      });
  },
});

export const { dropOffer } = offerData.actions;
