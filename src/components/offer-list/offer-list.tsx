import { OfferItem, Offers } from '../../types/offers';
import Card from '../card/card';

type OfferListProps = {
  offers: Offers;
  offerListType: 'mainScreen' | 'offerScreen';
  onCardHover?: (offerId: OfferItem['id'] | null) => void;
};
export default function OfferList({ onCardHover, offerListType, offers }: OfferListProps): JSX.Element {
  const options = {
    mainScreen: {
      className: 'cities__places-list tabs__content',
      count: 20,
    },
    offerScreen: {
      className: 'near-places__list',
      count: 3,
    },
  };

  return <div className={`${options[offerListType].className} places__list`}>{offers.map((offer) => <Card offerCardType={offerListType} offer={offer} onCardHover={onCardHover} key={offer.id} />).slice(0, options[offerListType].count)}</div>;
}
