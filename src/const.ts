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

export const Settings = {
  placesCount: 213,
} as const;

export const CityName = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};

export const SortTypesSetting = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const MAX_REVIEWS_COUNT = 10;

export const MAX_NEAR_PLACES = 3;

export const TIMEOUT_SHOW_ERROR = 2000;
