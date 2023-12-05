import { useAppSelector } from '../../hooks/dispatch';
import { getError } from '../../store/error/selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return error ? (
    <div style={{ position: 'absolute' }} className='error-message'>
      {error}
    </div>
  ) : null;
}

export default ErrorMessage;
