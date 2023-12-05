import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoadingDataStatus, NameSpace } from '../../const';
import { Offers } from '../../types/offers';
import { deleteFavoriteAction, fetchFavoritesAction, postFavoriteAction } from '../api-actions';

export type FavoritesDataType = {
  favorites: Offers;
  fetchingStatus: LoadingDataStatus;
};

const initialState: FavoritesDataType = {
  favorites: [],
  fetchingStatus: LoadingDataStatus.Unsent,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    updateFavorites: (state, action: PayloadAction<Offers>) => {
      state.favorites = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.fetchingStatus = LoadingDataStatus.Pending;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.fetchingStatus = LoadingDataStatus.Success;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.fetchingStatus = LoadingDataStatus.Error;
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
        state.fetchingStatus = LoadingDataStatus.Success;
      })
      .addCase(deleteFavoriteAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        state.favorites = state.favorites.filter((offer) => offer.id !== updatedOffer.id);
        state.fetchingStatus = LoadingDataStatus.Success;
      });
  },
});

export const { updateFavorites } = favoritesData.actions;
