import { Helmet } from 'react-helmet-async';
import Form from '../../components/form/form';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/dispatch';
import { getActiveCity } from '../../store/offers-data/selectors';

export default function Login(): JSX.Element {
  const selectedCity = useAppSelector(getActiveCity);

  return (
    <div className='page page--gray page--login'>
      <Helmet>
        <title>Войти в аккаунт</title>
      </Helmet>
      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <Form />
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link to={AppRoute.Main} className='locations__item-link'>
                <span>{selectedCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
