import { OfferItem, Offers } from '../../types/offers';
import Card from '../card/card';

type offerListProps = {
  offers: Offers;
  handleCardHover?: (offerId: OfferItem['id'] | null) => void;
};
export default function OfferList({ offers, handleCardHover }: offerListProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => (
        <Card offerCardType='mainScreen' offer={offer} handleCardHover={handleCardHover} key={offer.id} />
      ))}
    </div>
  );
}
