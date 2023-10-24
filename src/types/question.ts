export type HostItem = {
  avatar: string;
  name: string;
  status: string;
  description: string[];
};

export type OfferItem = {
  id: number;
  images: string[];
  premium: boolean;
  favorites: boolean;
  name: string;
  rating: number;
  type: string;
  bedrooms: number;
  adults: number;
  price: number;
  inside: string[];
  host: HostItem[];
};

export type Offers = OfferItem[];
