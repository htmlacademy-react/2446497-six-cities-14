import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchReviewsAction, postReviewAction } from '../api-actions';
import { Reviews } from '../../types/reviews';

export type ReviewsDataType = {
  reviews: Reviews;
};

const initialState: ReviewsDataType = {
  reviews: [],
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    dropReviews: (state) => {
      state.reviews = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
  },
});

export const { dropReviews } = reviewsData.actions;
