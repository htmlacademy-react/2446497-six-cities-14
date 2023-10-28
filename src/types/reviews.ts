export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type ReviewItem = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type Reviews = ReviewItem[];
