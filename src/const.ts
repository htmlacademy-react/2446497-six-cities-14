import { CommentLengthType } from './types/reviews';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum APIRoute {
  Main = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorites = '/favorite',
}
export const enum LoadingDataStatus {
  Unsent = 'UNSENT',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Error = 'ERROR',
}

export enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
  User = 'USER',
  NearPlaces = 'NEAR_PLACES',
  Error = 'ERROR',
}

export const CityName = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export type CityNumber = (typeof cities)[number];

export const SortTypesSetting = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

export const CommentLength: CommentLengthType = {
  min: 50,
  max: 300,
} as const;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const MAX_REVIEWS_COUNT = 10;

export const MAX_IMAGES_COUNT = 6;

export const MAX_NEAR_PLACES = 3;

export const TIMEOUT_SHOW_ERROR = 2000;
