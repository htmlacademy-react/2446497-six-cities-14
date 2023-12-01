import { Link } from 'react-router-dom';
import { AppRoute, CityName } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/dispatch';
import { getActiveCity } from '../../store/offers-data/selectors';
import { updateCity } from '../../store/offers-data/offers-data';

export default function Tabs(): JSX.Element {
  const cities = Object.values(CityName);
  const selectedCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {cities.map((city) => (
            <li className='locations__item' key={city}>
              <Link
                to={AppRoute.Main}
                className={`${selectedCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(updateCity(city));
                }}>
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
