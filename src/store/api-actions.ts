import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute, NameSpace, TIMEOUT_SHOW_ERROR } from '../const';
import { UserData } from '../types/user-data';
import { OfferItem, Offers } from '../types/offers.js';
import { dropToken, saveToken } from '../services/token.js';
import { AuthData } from '../types/auth-data.js';
import { store } from './index.js';
import { CommentData, ReviewItem, Reviews } from '../types/reviews.js';
import { setError } from './error/error.js';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.Offers}/fetchOffers`, async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Main);
  return data;
});

export const fetchFavoritesAction = createAsyncThunk<
  Offers,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.Favorites}/fetchFavorites`, async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Favorites);
  return data;
});

export const postFavoriteAction = createAsyncThunk<
  OfferItem,
  OfferItem['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.Favorites}/fetchFavorite`, async (offerId, { extra: api }) => {
  const { data } = await api.post<OfferItem>(`${APIRoute.Favorites}/${offerId}/1`);
  return data;
});

export const deleteFavoriteAction = createAsyncThunk<
  OfferItem,
  OfferItem['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.Favorites}/deleteFavorite`, async (offerId, { extra: api }) => {
  const { data } = await api.post<OfferItem>(`${APIRoute.Favorites}/${offerId}/0`);
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  OfferItem,
  OfferItem['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.Offer}/fetchOffer`, async (offerId, { extra: api }) => {
  const { data } = await api.get<OfferItem>(`${APIRoute.Main}/${offerId}`);
  return data;
});

export const fetchNearbyAction = createAsyncThunk<
  Offers,
  OfferItem['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.NearPlaces}/fetchNearby`, async (offerId, { extra: api }) => {
  const { data } = await api.get<Offers>(`${APIRoute.Main}/${offerId}/nearby`);
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  Reviews,
  OfferItem['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.Reviews}/fetchReviews`, async (offerId, { extra: api }) => {
  const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
  return data;
});

export const postReviewAction = createAsyncThunk<
  ReviewItem,
  [OfferItem['id'], CommentData],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.Reviews}/postRevies`, async ([offerId, { comment, rating }], { extra: api }) => {
  const { data } = await api.post<ReviewItem>(`${APIRoute.Reviews}/${offerId}`, { comment, rating });
  return data;
});

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.User}/checkAuth`, async (_arg, { extra: api }) => {
  const { data } = await api.get<UserData>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.User}/login`, async ({ email, password }, { extra: api }) => {
  const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
  const { token } = data;
  saveToken(token);
  return data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.User}/logout`, async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});

export const clearErrorAction = createAsyncThunk(`${NameSpace.Error}/clearError`, () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});
