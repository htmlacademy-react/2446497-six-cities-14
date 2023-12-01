import { addEnding } from '../../utils/common';
import { OfferItem } from '../../types/offers';
import OfferList from '../offer-list/offer-list';
import Sort from '../sort/sort';
import { useAppSelector } from '../../hooks/dispatch';
import { sorting } from '../../utils/sort';
import { useMemo, useState } from 'react';
import { Sorting } from '../../types/sorting';
import { getActiveCity, getOffers } from '../../store/offers-data/selectors';

type PlacesProps = {
  handleCardHover?: (offerId: OfferItem['id'] | null) => void;
};

export default function PlacesWrap({ handleCardHover }: PlacesProps): JSX.Element {
  const offers = useAppSelector(getOffers);
  const selectedCity = useAppSelector(getActiveCity);
  const [sortTypeSetting, setSortType] = useState<Sorting>('Popular');

  const sortedOffers = useMemo(() => {
    if (!offers.length) {
      return [];
    }
    const offersCity = offers.filter((offer) => offer.city.name === selectedCity);
    const sortedOffersIn = offersCity.sort(sorting[sortTypeSetting]);

    return sortedOffersIn;
  }, [offers, selectedCity, sortTypeSetting]);

  function changeSort(type: Sorting) {
    setSortType(type);
  }

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>
        {sortedOffers.length} place{addEnding(sortedOffers.length)} to stay in {selectedCity}
      </b>
      <Sort changeSort={changeSort} activeSorting={sortTypeSetting} />
      <OfferList offerListType='mainScreen' offers={sortedOffers} handleCardHover={handleCardHover} />
    </section>
  );
}
