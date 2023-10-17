import Home from './pages/home/home';

type AppProps = {
  placesCount: number;
};

export default function App({ placesCount }: AppProps): JSX.Element {
  return <Home placesCount={placesCount} />;
}
