import { CityNumber, cities } from '../const';
import { OfferItem, Offers } from '../types/offers';

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export function addEnding(count: number) {
  return count !== 1 ? 's' : '';
}

export function setStarsLength(count: number) {
  return Math.round(count) * 2 * 10;
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-Us', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export const getRandomCity = (): CityNumber => cities[Math.floor(Math.random() * cities.length)];

export const replaceFavoriteOffer = (offers: Offers, offer: OfferItem) =>
  offers.map((offerItem: OfferItem) => {
    if (offerItem.id === offer.id) {
      offerItem.isFavorite = !offerItem.isFavorite;
    }

    return offerItem;
  });
