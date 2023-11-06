import { CityName } from '../../const';

export default function Tabs(): JSX.Element {
  const cities = Object.values(CityName);
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {cities.map((item) => (
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
