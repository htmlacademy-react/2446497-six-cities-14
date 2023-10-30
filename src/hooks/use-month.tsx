import { useEffect, useState } from 'react';
import { ReviewItem } from '../types/reviews';

export default function useMonths(review: ReviewItem) {
  const date = new Date(review.date);
  const [month, setMonth] = useState('');

  useEffect(() => {
    switch (date.getMonth()) {
      case 1:
        setMonth('Январь');
        break;
      case 2:
        setMonth('Февраль');
        break;
      case 3:
        setMonth('Март');
        break;
      case 4:
        setMonth('Апрель');
        break;
      case 5:
        setMonth('Май');
        break;
      case 6:
        setMonth('Июнь');
        break;
      case 7:
        setMonth('Июль');
        break;
      case 8:
        setMonth('Август');
        break;
      case 9:
        setMonth('Сентябрь');
        break;
      case 10:
        setMonth('Октябрь');
        break;
      case 11:
        setMonth('Ноябрь');
        break;
      case 12:
        setMonth('Декабрь');
        break;
    }
  }, [review]);
  return month;
}
