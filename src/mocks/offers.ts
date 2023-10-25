import { Offers } from '../types/question';

export const offers: Offers = [
  {
    id: 1,
    images: ['img/apartment-01.jpg', 'img/studio-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    premium: true,
    favorites: false,
    name: 'Beautiful & luxurious studio at great location',
    rating: 3,
    type: 'Apartment',
    bedrooms: 3,
    adults: 4,
    price: 120,
    inside: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: [
      {
        avatar: 'https://i.pravatar.cc/128?rnd=${Math.random()}',
        name: 'Angelina',
        status: 'pro',
        description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.']
      }
    ]
  },
  {
    id: 2,
    images: ['img/apartment-02.jpg', 'img/studio-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    premium: false,
    favorites: true,
    name: 'Wood and stone place',
    rating: 4.8,
    type: 'Apartment',
    bedrooms: 3,
    adults: 4,
    price: 130,
    inside: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: [
      {
        avatar: 'https://i.pravatar.cc/128?rnd=${Math.random()}',
        name: 'Angelina',
        status: 'pro',
        description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.']
      }
    ]
  },
  {
    id: 3,
    images: ['img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    premium: true,
    favorites: false,
    name: 'Nice, cozy, warm big bed apartment',
    rating: 5,
    type: 'Apartment',
    bedrooms: 3,
    adults: 4,
    price: 140,
    inside: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: [
      {
        avatar: 'https://i.pravatar.cc/128?rnd=${Math.random()}',
        name: 'Angelina',
        status: 'pro',
        description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.']
      }
    ]
  },
  {
    id: 4,
    images: ['img/apartment-01.jpg', 'img/studio-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    premium: true,
    favorites: true,
    name: 'Canal View Prinsengracht',
    rating: 2,
    type: 'Room',
    bedrooms: 3,
    adults: 4,
    price: 150,
    inside: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: [
      {
        avatar: 'https://i.pravatar.cc/128?rnd=${Math.random()}',
        name: 'Angelina',
        status: 'pro',
        description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.']
      }
    ]
  }
];
