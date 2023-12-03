import { MAX_IMAGES_COUNT } from '../../const';
import { OfferItem } from '../../types/offers';

type OfferGalleryProps = {
  offer: OfferItem;
};

export default function OfferGallery({ offer }: OfferGalleryProps): JSX.Element {
  return (
    <div className='offer__gallery'>
      {offer.images.slice(0, MAX_IMAGES_COUNT).map((img: string) => (
        <div key={img} className='offer__image-wrapper'>
          <img className='offer__image' src={`${img}`} alt='Photo studio' />
        </div>
      ))}
    </div>
  );
}
