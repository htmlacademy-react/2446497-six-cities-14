import { useAppSelector } from '../../hooks/dispatch';
import { OfferItem } from '../../types/offers';
import Card from '../card/card';

type offerListProps = {
  offerListType: 'mainScreen' | 'offerScreen';
  handleCardHover?: (offerId: OfferItem['id'] | null) => void;
};
export default function OfferList({ handleCardHover, offerListType }: offerListProps): JSX.Element {
  const options = {
    mainScreen: {
      className: 'cities__places-list tabs__content',
      count: 4,
    },
    offerScreen: {
      className: 'near-places__list',
      count: 3,
    },
  };
  const offers = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.city);
  const offersCity = offers.filter((offer) => offer.city.name === selectedCity);

  return <div className={`${options[offerListType].className} places__list`}>{offersCity.map((offer) => <Card offerCardType={offerListType} offer={offer} handleCardHover={handleCardHover} key={offer.id} />).slice(0, options[offerListType].count)}</div>;
}
