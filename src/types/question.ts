export type hostItem = {
  avatar: string;
  name: string;
  status: string;
  description: string[];
};

export type offerItem = {
  images: [string];
  premium: boolean;
  favorites: boolean;
  name: string;
  rating: number;
  type: string;
  bedrooms: number;
  adults: number;
  price: number;
  inside: string[];
  host: hostItem[];
};
