import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { addNewReview, fillFavorites, fillNearPlaces, fillOffer, fillOffers, fillReviews, requireAuthorization, setError, setOfferLoadingStatus, setOffersDataLoadingStatus } from './action';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { UserData } from '../types/user-data';
import { OfferItem, Offers } from '../types/offers.js';
import { dropToken, saveToken } from '../services/token.js';
import { AuthData } from '../types/auth-data.js';
import { store } from './index.js';
import { CommentData, ReviewItem, Reviews } from '../types/reviews.js';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<Offers>(APIRoute.Main);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(fillOffers(data));
});

export const fetchFavoritesAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetchFavorites', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<Offers>(APIRoute.Favorites);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(fillFavorites(data));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  OfferItem['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetchOffer', async (offerId, { dispatch, extra: api }) => {
  dispatch(setOfferLoadingStatus(true));
  const { data } = await api.get<OfferItem>(`${APIRoute.Main}/${offerId}`);
  dispatch(fillOffer(data));
  dispatch(setOfferLoadingStatus(false));
});

export const fetchNearbyAction = createAsyncThunk<
  void,
  OfferItem['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetchNearby', async (offerId, { dispatch, extra: api }) => {
  dispatch(setOfferLoadingStatus(true));
  const { data } = await api.get<Offers>(`${APIRoute.Main}/${offerId}/nearby`);
  dispatch(fillNearPlaces(data));
  dispatch(setOfferLoadingStatus(false));
});

export const fetchReviewsAction = createAsyncThunk<
  void,
  OfferItem['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetchReviews', async (offerId, { dispatch, extra: api }) => {
  dispatch(setOfferLoadingStatus(true));
  const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
  dispatch(fillReviews(data));
  dispatch(setOfferLoadingStatus(false));
});

export const postReviewAction = createAsyncThunk<
  void,
  [OfferItem['id'], CommentData],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/postRevies', async ([offerId, { comment, rating }], { dispatch, extra: api }) => {
  const { data } = await api.post<ReviewItem>(`${APIRoute.Reviews}/${offerId}`, { comment, rating });
  dispatch(addNewReview(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const clearErrorAction = createAsyncThunk('main/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});
