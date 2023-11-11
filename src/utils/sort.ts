import { OfferItem } from '../types/offers';

const sorting = {
  Popular: () => 0,
  HighToLow: (offerA: OfferItem, offerB: OfferItem) => offerB.price - offerA.price,
  LowToHigh: (offerA: OfferItem, offerB: OfferItem) => offerA.price - offerB.price,
  TopRated: (offerA: OfferItem, offerB: OfferItem) => offerB.rating - offerA.rating,
};

export { sorting };
