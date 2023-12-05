import { name, internet, lorem, datatype, random, image } from 'faker';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import { State } from '../types/state';
import { cities } from '../const';
import { createAPI } from '../services/api';
import { User } from '../types/user-data';
import { City, LocationCity, OfferItem } from '../types/offers';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

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
