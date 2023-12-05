import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { favoritesData } from './favorites-data/favorites-data';
import { nearPlacesData } from './near-places-data/near-places-data';
import { offersData } from './offers-data/offers-data';
import { authorizationData } from './authorization-data/authorization-data';
import { offerData } from './offer-data/offer-data';
import { reviewsData } from './reviews-data/reviews-data';
import { error } from './error/error';

export const rootReducer = combineReducers({
  [NameSpace.Favorites]: favoritesData.reducer,
  [NameSpace.NearPlaces]: nearPlacesData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.User]: authorizationData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.Error]: error.reducer,
});
