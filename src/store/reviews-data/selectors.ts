import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { ReviewsDataType } from './reviews-data';

export const getReviews = createSelector(
  (state: State) => state[NameSpace.Reviews],
  (state: ReviewsDataType) => state.reviews
);

export const getPostReview = createSelector(
  (state: State) => state[NameSpace.Reviews],
  (state: ReviewsDataType) => state.fetchingStatus
);
