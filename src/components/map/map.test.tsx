import { render, screen } from '@testing-library/react';
import Map from './map';
import { makeFakeCity, makeFakeOffer } from '../../mocks/mocks';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const mapId = 'map';

    render(<Map offers={[makeFakeOffer()]} selectedPoint={makeFakeOffer().id} cityMap={makeFakeCity()} />);
    const listContainer = screen.getByTestId(mapId);

    expect(listContainer).toBeInTheDocument();
  });
});
