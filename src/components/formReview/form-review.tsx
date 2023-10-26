import { ChangeEvent, useState } from 'react';

export default function FormReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');


  return (
    <form className='reviews__form form' action='#' method='post'>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        {[5, 4, 3, 2, 1].map((number) => (
          <div key={number}>
            <input
              className='form__rating-input visually-hidden'
              name='rating'
              value={rating}
              id={`${number}-stars`}
              type='radio'
              onChange={() => {
                setRating(number);
              }}
            />
            <label htmlFor={`${number}-stars`} className='reviews__rating-label form__rating-label' title='perfect'>
              <svg className='form__star-image' width='37' height='33'>
                <use xlinkHref='#icon-star'></use>
              </svg>
            </label>
          </div>
        ))}
      </div>
      <textarea className='reviews__textarea form__textarea' value={review} id='review' name='review' onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => setReview(target.value)} placeholder='Tell how was your stay, what you like and what can be improved'></textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled>
          Submit
        </button>
      </div>
    </form>
  );
}
