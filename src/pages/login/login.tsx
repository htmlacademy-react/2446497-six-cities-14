import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, CityNumber } from '../../const';
import { useAppDispatch } from '../../hooks/dispatch';
import { useEffect, useRef, useState } from 'react';
import { loginAction } from '../../store/api-actions';
import { updateCity } from '../../store/offers-data/offers-data';
import { getRandomCity } from '../../utils/common';

export default function Login(): JSX.Element {
  const login = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const [isValid, setIsValid] = useState<boolean>(false);
  const [city, setCity] = useState<CityNumber | null>(null);

  const navigateTo = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (login.current && password.current && password.current.value.trim()) {
      dispatch(
        loginAction({
          email: login.current.value,
          password: password.current.value,
        })
      );
    }
  };

  const handleValid = () => {
    const loginValue = login.current?.value;
    const passwordValue = password.current?.value;

    if (!passwordValue || !loginValue || /\s/g.test(passwordValue)) {
      setIsValid(false);
      return;
    }

    const valid = /.*(\p{L}(?=.*\d)|\d(?=.*\p{L})).*/u;

    const isValidForm = valid.test(passwordValue);
    setIsValid(isValidForm);
  };

  const handleCity = (evt: React.MouseEvent) => {
    evt.preventDefault();

    if (city) {
      dispatch(updateCity(city));
      navigateTo(AppRoute.Main);
    }
  };

  useEffect(() => {
    if (login.current?.value && password.current?.value) {
      handleValid();
    }
    setCity(getRandomCity());
  }, []);

  return (
    <div className='page page--gray page--login'>
      <Helmet>
        <title>Войти в аккаунт</title>
      </Helmet>
      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form className='login__form form' action='#' method='post' onSubmit={handleSubmit}>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input ref={login} onInput={handleValid} className='login__input form__input' type='email' name='email' placeholder='Email' required />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input ref={password} onInput={handleValid} className='login__input form__input' type='password' name='password' placeholder='Password' required />
              </div>
              <button type='submit' disabled={!isValid} className='login__submit form__submit button'>
                Sign in
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link
                to={AppRoute.Main}
                className='locations__item-link'
                onClick={(evt) => {
                  handleCity(evt);
                }}>
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
