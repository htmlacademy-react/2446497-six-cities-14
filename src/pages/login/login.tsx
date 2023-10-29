import { Helmet } from 'react-helmet-async';
import Form from '../../components/form/form';

export default function Login(): JSX.Element {
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
              <a className='locations__item-link' href='#'>
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
