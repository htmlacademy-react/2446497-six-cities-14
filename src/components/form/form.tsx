import { FormEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/dispatch';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { loginAction } from '../../store/api-actions';

export default function Form() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          email: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
      navigate(AppRoute.Main);
    }
  }

  const handleValid = () => {
    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;

    if (!password || !login || /\s/g.test(password)) {
      setIsValid(false);
      return;
    }

    const check = /.*(\p{L}(?=.*\d)|\d(?=.*\p{L})).*/u;

    const isValidForm = check.test(password);
    setIsValid(isValidForm);
  };

  return (
    <form className='login__form form' action='#' method='post' onSubmit={handleSubmit}>
      <div className='login__input-wrapper form__input-wrapper'>
        <label className='visually-hidden'>E-mail</label>
        <input ref={loginRef} onInput={handleValid} className='login__input form__input' type='email' name='email' placeholder='Email' required />
      </div>
      <div className='login__input-wrapper form__input-wrapper'>
        <label className='visually-hidden'>Password</label>
        <input ref={passwordRef} onInput={handleValid} className='login__input form__input' type='password' name='password' placeholder='Password' required />
      </div>
      <button type='submit' disabled={!isValid} className='login__submit form__submit button'>
        Sign in
      </button>
    </form>
  );
}
