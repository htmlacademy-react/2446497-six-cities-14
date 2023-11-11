import { addEnding } from '../../utils/common';
import { OfferItem } from '../../types/offers';
import OfferList from '../offer-list/offer-list';
import Sort from '../sort/sort';
import { useAppSelector } from '../../hooks/dispatch';
import { sorting } from '../../utils/sort';
import { useState } from 'react';
import { Sorting } from '../../types/sorting';

type PlacesProps = {
  handleCardHover?: (offerId: OfferItem['id'] | null) => void;
};

export default function PlacesWrap({ handleCardHover }: PlacesProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.city);
  const offersCity = offers.filter((offer) => offer.city.name === selectedCity);
  const [sortTypeSetting, setSortType] = useState<Sorting>('Popular');
  offersCity.sort(sorting[sortTypeSetting]);

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>
        {offersCity.length} place{addEnding(offersCity.length)} to stay in {selectedCity}
      </b>
      <Sort setSortType={setSortType} activeSorting={sortTypeSetting} />
      <OfferList offerListType='mainScreen' offers={offersCity} handleCardHover={handleCardHover} />
    </section>
  );
}
