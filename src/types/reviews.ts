export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Reviews = ReviewItem[];

export type CommentData = {
  comment: string;
  rating: number;
};

export type ReviewItem = CommentData & {
  id: string;
  user: User;
  date: string;
};
