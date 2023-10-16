import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Places from './places';
import Tabs from '../../components/tabs/tabs';

type HomeProps = {
  placesCount: number;
};

export default function Home({ placesCount }: HomeProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <Places placesCount={placesCount} />
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
