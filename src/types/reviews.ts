import { User } from './user-data';

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

export type CommentLengthType = {
  min: number;
  max: number;
};
