import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Error(): JSX.Element {
  return (
    <div style={{height:'80vh'}}>
      <Helmet>
        <title>Страница не существует</title>
      </Helmet>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', margin: '20vh auto auto auto'}}>
        <h1 style={{color: '#5380BE', textAlign: 'center', fontSize: '100px', fontWeight: '400'}}>404 Not Found</h1>
        <Link to="/" style={{display: 'flex', padding: '20px 40px', justifyContent: 'center', alignItems: 'center', borderRadius: '30px', border: '1px solid #5380BE'}}>
          <span style={{color: '#5380BE', textAlign: 'center', fontSize: '18px', fontWeight: '400', textTransform: 'uppercase'}}>Вернуться на главную</span>
        </Link>
      </div>
    </div>
  );
}
