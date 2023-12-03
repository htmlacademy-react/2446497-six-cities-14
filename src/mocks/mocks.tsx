import { name, internet, lorem, datatype, random, image, date } from 'faker';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import { State } from '../types/state';
import { AuthorizationStatus, LoadingDataStatus, cities } from '../const';
import { createAPI } from '../services/api';
import { User } from '../types/user-data';
import { City, LocationCity, OfferItem } from '../types/offers';
import { AuthData } from '../types/auth-data';
import { ReviewItem } from '../types/reviews';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeUserInfo = (): User =>
  ({
    avatarUrl: internet.avatar(),
    email: internet.email(),
    id: datatype.number({ min: 1, max: 100 }),
    isPro: datatype.boolean(),
    name: name.firstName(),
    token: datatype.uuid(),
  } as User);

export const makeFakeLocation = (): LocationCity =>
  ({
    latitude: datatype.number({ min: -90, max: 90, precision: 0.000001 }),
    longitude: datatype.number({ min: -180, max: 180, precision: 0.000001 }),
    zoom: datatype.number({ min: 1, max: 17 }),
  } as LocationCity);

export const makeFakeCity = (): City =>
  ({
    location: makeFakeLocation(),
    name: random.arrayElement(cities),
  } as City);

export const makeFakeHost = (): User =>
  ({
    avatarUrl: internet.avatar(),
    id: datatype.number({ min: 1, max: 100 }),
    isPro: datatype.boolean(),
    name: name.firstName(),
  } as User);

export const makeFakeOffer = (): OfferItem =>
  ({
    bedrooms: datatype.number({ min: 1, max: 10 }),
    city: makeFakeCity(),
    description: lorem.lines(1),
    goods: datatype.array(5),
    host: makeFakeHost(),
    id: datatype.string(10),
    images: [image.imageUrl(400, 400), image.imageUrl(400, 400), image.imageUrl(400, 400), image.imageUrl(400, 400), image.imageUrl(400, 400), image.imageUrl(400, 400), image.imageUrl(400, 400), image.imageUrl(400, 400), image.imageUrl(400, 400), image.imageUrl(400, 400), image.imageUrl(400, 400), image.imageUrl(400, 400)],
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    location: makeFakeLocation(),
    maxAdults: datatype.number({ min: 1, max: 10 }),
    previewImage: image.imageUrl(500, 500),
    price: datatype.number({ min: 1, max: 999 }),
    rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
    title: lorem.lines(1),
    type: lorem.word(),
  } as OfferItem);

export const makeFakeAuthData = (): AuthData =>
  ({
    email: lorem.word(),
    password: internet.password(),
  } as AuthData);

export const makeFakeComment = (): ReviewItem =>
  ({
    comment: lorem.paragraph(),
    date: new Date(date.recent()).toLocaleString(),
    id: datatype.string(10),
    rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
    user: makeFakeHost(),
  } as ReviewItem);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  USER: { authorizationStatus: AuthorizationStatus.Unknown, user: makeFakeUserInfo() },
  OFFERS: {
    offers: [makeFakeOffer(), makeFakeOffer()],
    fetchingStatus: LoadingDataStatus.Unsent,
    city: cities[0],
  },
  FAVORITES: {
    favorites: [makeFakeOffer(), makeFakeOffer()],
    fetchingStatus: LoadingDataStatus.Unsent,
  },
  ERROR: { error: lorem.word() },
  OFFER: { offer: makeFakeOffer(), fetchingStatus: LoadingDataStatus.Unsent },
  NEAR_PLACES: { nearPlaces: [makeFakeOffer(), makeFakeOffer()] },
  REVIEWS: { reviews: [makeFakeComment(), makeFakeComment()], fetchingStatus: LoadingDataStatus.Unsent },
  ...(initialState ?? {}),
});
