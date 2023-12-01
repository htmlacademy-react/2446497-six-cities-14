import { createSlice } from '@reduxjs/toolkit';
import { LoadingDataStatus, NameSpace } from '../../const';
import { fetchReviewsAction, postReviewAction } from '../api-actions';
import { Reviews } from '../../types/reviews';

export type ReviewsDataType = {
  reviews: Reviews;
  fetchingStatus: LoadingDataStatus;
};

const initialState: ReviewsDataType = {
  reviews: [],
  fetchingStatus: LoadingDataStatus.Unsent,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    dropReviews: (state) => {
      state.reviews = [];
    },
    dropFetchingStatusReview(state) {
      state.fetchingStatus = LoadingDataStatus.Unsent;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.fetchingStatus = LoadingDataStatus.Success;
        state.reviews.push(action.payload);
      })
      .addCase(postReviewAction.pending, (state) => {
        state.fetchingStatus = LoadingDataStatus.Pending;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.fetchingStatus = LoadingDataStatus.Error;
      });
  },
});

export const { dropReviews, dropFetchingStatusReview } = reviewsData.actions;
