import { OfferItem, Offers } from '../../types/offers';
import Card from '../card/card';
import Sort from '../sort/sort';

type PlacesProps = {
  placesCount: number;
  offers: Offers;
  handleCardHover?: (offerId: OfferItem['id'] | null) => void;
};

export default function PlacesWrap({ placesCount, offers, handleCardHover }: PlacesProps): JSX.Element {
  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>{placesCount} places to stay in Amsterdam</b>
      <Sort />
      <div className='cities__places-list places__list tabs__content'>
        {offers.map((offer) => (
          <Card offerCardType='mainScreen' offer={offer} handleCardHover={handleCardHover} key={offer.id} />
        ))}
      </div>
    </section>
  );
}
