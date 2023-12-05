import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Error(): JSX.Element {
  return (
    <div className='error-page'>
      <Helmet>
        <title>Страница не существует</title>
      </Helmet>
      <div className='error-page-container'>
        <h1 className='error-page-h1'>404 Not Found</h1>
        <Link to='/' className='error-page-button'>
          <span style={{ color: '#5380BE', textAlign: 'center', fontSize: '18px', fontWeight: '400', textTransform: 'uppercase' }}>Вернуться на главную</span>
        </Link>
      </div>
    </div>
  );
}
