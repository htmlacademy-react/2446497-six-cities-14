import { OfferItem, Offers } from '../types/offers';
import { Sorting } from '../types/sorting';

function sortByRating(a: OfferItem, b: OfferItem) {
  return b.rating - a.rating;
}
function sortLowToHigh(a: OfferItem, b: OfferItem) {
  return a.price - b.price;
}
function sortHignToLow(a: OfferItem, b: OfferItem) {
  return b.price - a.price;
}

const sorting: Record<Sorting, (offers: Offers) => Offers> = {
  Popular: (offers: OfferItem[]) => offers.toSorted(),
  HighToLow: (offers: OfferItem[]) => offers.toSorted(sortHignToLow),
  LowToHigh: (offers: OfferItem[]) => offers.toSorted(sortLowToHigh),
  TopRated: (offers: OfferItem[]) => offers.toSorted(sortByRating),
};

export { sorting };
