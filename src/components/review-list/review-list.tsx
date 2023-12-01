import { useMemo } from 'react';
import { MAX_REVIEWS_COUNT } from '../../const';
import { Reviews } from '../../types/reviews';
import Review from '../review/review';

type ReviewListProps = {
  reviews: Reviews;
};

export default function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  const reviewsToRender = useMemo(() => {
    const sortedReviews = [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return sortedReviews.slice(0, MAX_REVIEWS_COUNT);
  }, [reviews]);

  return (
    <ul className='reviews__list'>
      {reviewsToRender.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}
