import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { postReviewAction } from '../../store/api-actions';
import { store } from '../../store';
import { OfferItem } from '../../types/offers';

const stars = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

type FormReviewProps = {
  offerId?: OfferItem['id'];
};

export default function FormReview({ offerId }: FormReviewProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const isValid = review.length >= 50 && review.length <= 300 && rating !== 0;

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isValid) {
      return;
    }
    store.dispatch(postReviewAction([offerId, { rating: rating, comment: review }]));
  };

  return (
    <form className='reviews__form form' action='#' method='post' onSubmit={handleFormSubmit}>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        {Object.entries(stars)
          .reverse()
          .map(([number, title]) => (
            <Fragment key={number}>
              <input className='form__rating-input visually-hidden' checked={parseInt(number, 10) === rating} name='rating' value={number} id={`${number}-stars`} type='radio' onChange={handleInputChange} />
              <label htmlFor={`${number}-stars`} className='reviews__rating-label form__rating-label' title={title}>
                <svg className='form__star-image' width='37' height='33'>
                  <use xlinkHref='#icon-star'></use>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea className='reviews__textarea form__textarea' value={review} id='review' name='review' onChange={handleTextAreaChange} placeholder='Tell how was your stay, what you like and what can be improved'></textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled={!isValid}>
          Submit
        </button>
      </div>
    </form>
  );
}
