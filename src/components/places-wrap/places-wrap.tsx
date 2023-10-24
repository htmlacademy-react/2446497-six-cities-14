import { Offers } from '../../types/question';
import Card from '../card/card';
import Sort from '../sort/sort';

type PlacesProps = {
  placesCount: number;
  offers: Offers;
};

export default function PlacesWrap({ placesCount, offers }: PlacesProps): JSX.Element {
  console.log(offers);
  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>{placesCount} places to stay in Amsterdam</b>
      <Sort />
      <div className='cities__places-list places__list tabs__content'>
        {offers.map((offer) => {
          return <Card offer={offer} key={offer.id} />;
        })}
      </div>
    </section>
  );
}
