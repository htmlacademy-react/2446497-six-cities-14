import { useEffect, useState } from 'react';
import { ReviewItem } from '../../types/reviews';

type ReviewProps = {
  review: ReviewItem;
};

export default function Review({ review }: ReviewProps): JSX.Element {
  const date = new Date(review.date);
  const month = date.toLocaleString('default', { month: 'long' });
  const [monthUp, setMonthUp] = useState('');

  useEffect(() => {
    const newMonth = month[0].toUpperCase() + month.slice(1);
    setMonthUp(newMonth);
  }, [review]);

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img className='reviews__avatar user__avatar' src={`${review.user.avatarUrl}`} width='54' height='54' alt='Reviews avatar' />
        </div>
        <span className='reviews__user-name'>{review.user.name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: `${(review.rating / 5) * 100}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{review.comment}</p>
        <time className='reviews__time' dateTime={`${date}`}>
          {monthUp} {date.getFullYear()}
        </time>
      </div>
    </li>
  );
}
