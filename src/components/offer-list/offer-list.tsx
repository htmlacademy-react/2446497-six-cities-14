import { OfferItem, Offers } from '../../types/offers';
import Card from '../card/card';

type offerListProps = {
  offers: Offers;
  offerListType: 'mainScreen' | 'offerScreen';
  handleCardHover?: (offerId: OfferItem['id'] | null) => void;
};
export default function OfferList({ offers, handleCardHover, offerListType }: offerListProps): JSX.Element {
  const options = {
    mainScreen: {
      className: 'cities__places-list tabs__content',
      cardType: 'mainScreen',
    },
    offerScreen: {
      className: 'near-places__list',
      cardType: 'offerScreen',
    },
  };
  return (
    <div className={`${options[offerListType].className} places__list`}>
      {offers.map((offer) => (
        <Card offerCardType={`${options[offerListType].cardType}`} offer={offer} handleCardHover={handleCardHover} key={offer.id} />
      ))}
    </div>
  );
}
