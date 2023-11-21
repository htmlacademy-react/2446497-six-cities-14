export type City = {
  location: LocationCity;
  name: string;
};

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type LocationCity = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type LocationOffer = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferItem = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: string | undefined;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationOffer;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Offers = OfferItem[];
export type Points = LocationOffer[];
